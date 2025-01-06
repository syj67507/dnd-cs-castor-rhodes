import { BrowserRouter, Routes, Route } from "react-router";
import DndApp from "../dndApp/DndApp";

export function RoutedApp() {
    return (
        <BrowserRouter>
            <Routes>
                {/* I think the index needs to match the 'base' set in the vite.config.ts file for ghpages*/}
                <Route path="dnd-cs-castor-rhodes">
                    <Route index element={<DndApp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}