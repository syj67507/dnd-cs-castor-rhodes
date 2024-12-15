import { createTheme } from "@mui/material"

declare module "@mui/material/styles" {
  interface Theme {
    background: string
    border: string
    borderHover: string
    borderRadius: number
    unitBackground: string
    paperBackground: string
    disabledInputColor: string
  }

  interface ThemeOptions {
    background: string
    border: string
    borderHover: string
    borderRadius: number
    unitBackground: string
    paperBackground: string
    disabledInputColor?: string
  }
}

export const regularTheme = createTheme({
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

export const oceanTheme = createTheme({
  background: "#35656F",
  border: "2.5px solid rgba(0, 0, 0, 0.26)",
  borderHover: "2.5px solid rgba(0, 0, 0, 1)",
  borderRadius: 2,
  unitBackground: "#E5F7EF",
  paperBackground: "#C0CFC8",
  typography: {
    fontFamily: "Varela Round",
  },
})

export const darkTheme = createTheme({
  background: "#111",
  border: "2.5px solid rgba(0, 0, 0, 0.5)",
  borderHover: "2.5px solid rgba(0, 0, 0, 0.75)",
  borderRadius: 2,
  unitBackground: "#454545",
  paperBackground: "#232323",
  disabledInputColor: "#ababab",
  typography: {
    fontFamily: "Varela Round",
    allVariants: {
      color: "white",
    },
  },
})

export const themes = [regularTheme, cozyTheme, oceanTheme, darkTheme]
