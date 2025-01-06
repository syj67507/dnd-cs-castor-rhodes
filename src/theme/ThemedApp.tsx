import { ThemeProvider } from "@emotion/react";
import { useAppSelector } from "../app/hooks";
import { themes } from "./theme";
import { RoutedApp } from "../routing/RoutedApp";


/**
 * A component wrapper around the actual application. The purpose of this wrapper
 * is so that the theme can be tracked in redux and update the application's appearance
 * upon changing it.
 * 
 * Developer's note: I have attempted to simply use local storage, but the state variable
 * is not able to keep track of the changes unless I prop drill the setter and resulted in
 * this solution instead.
 */
export function ThemedApp() {
    // grabbing the selected theme from redux
    const selectedTheme = useAppSelector(state => state.theme);

    return (
        <ThemeProvider theme={themes[selectedTheme.value]}>
            <RoutedApp />
        </ThemeProvider>
    );
}