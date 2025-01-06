import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import DndApp from "../dndApp/DndApp";
import { Drawer } from "./Drawer";
import { CharacterSelect } from "../character-select/CharacterSelect";

export function RoutedApp() {
    // TODO need to update redux to return different characters under different id's
    // Have the id's be passed into the route and loaded
    return (
        <BrowserRouter>
            <Routes>
                {/* I think the index needs to match the 'base' set in the vite.config.ts file for ghpages*/}
                <Route
                    path="dnd-cs-castor-rhodes"
                    element={
                        <>
                            <Drawer />
                            <Outlet />
                        </>
                    }
                >
                    <Route index element={<CharacterSelect />} />
                    <Route path="sheet" element={<DndApp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}