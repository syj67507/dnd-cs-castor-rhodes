import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { counterSlice } from "../features/counter/counterSlice"
import { quotesApiSlice } from "../features/quotes/quotesApiSlice"
import { dndApiSlice } from "../dndApp/dndApiSlice"
import { themeSlice } from "../theme/themeSlice"
import { spellsSlice } from "../dndApp/spells/spellsSlice"
import { characterSheetApiSlice } from "../characterSheet/characterSheetApiSlice"
import { drawerSlice } from "../routing/drawerSlice"

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(
  counterSlice,
  quotesApiSlice,
  dndApiSlice,
  themeSlice,
  spellsSlice,
  characterSheetApiSlice,
  drawerSlice,
)

// Add persisting functionality to reducer
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["api"],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof persistedReducer>

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: RootState) => {
  const store = configureStore({
    reducer: persistedReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        serializableCheck: {
          // ignoring redux persist actions
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(
        quotesApiSlice.middleware,
        dndApiSlice.middleware,
        characterSheetApiSlice.middleware,
      )
    },
    preloadedState,
  })

  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()
export const persistor = persistStore(store)

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
