import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    // // allow configuration using `createTheme()`
    // interface Components {
    //     ShamsStack: {
    //         defaultProps?: ComponentsProps["MuiStack"];
    //         styleOverrides?: Partial<OverridesStyleRules<"root", "MuiStack", Omit<Theme, "components" | "palette"> & CssVarsTheme>> | undefined;
    //     } | undefined
    // }

    interface Theme {
        background: string;
        border: string;
        borderHover: string;
        borderRadius: number;
        unitBackground: string;
        paperBackground: string;
    }
    interface ThemeOptions {
        background: string;
        border: string;
        borderHover: string;
        borderRadius: number;
        unitBackground: string;
        paperBackground: string;
    }
  }

export const originalBaseTheme = createTheme({
    background: "#624A38",
    border: "1px solid rgba(0, 0, 0, 0.26)",
    borderHover: "1px solid rgba(0, 0, 0, 1)",
    borderRadius: 1,
    unitBackground: "#FFF8F6",
    paperBackground: "#FFE8E1",
})

export const cozyTheme = createTheme({
    background: "#624A38",
    border: "2.5px solid rgba(0, 0, 0, 0.26)",
    borderHover: "2.5px solid rgba(0, 0, 0, 1)",
    borderRadius: 2,
    unitBackground: "#FFF8F6",
    paperBackground: "#FFE8E1",
    typography: {
        fontFamily: "Varela Round",
    },
})