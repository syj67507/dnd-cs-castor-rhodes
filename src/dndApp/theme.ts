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
    checkboxColor: string
    checkboxShape?: string
    dialogContentTextTypography?: string
    consumedWeapon: string
    thingWithDescriptionHover: string
  }

  interface ThemeOptions {
    background: string
    border: string
    borderHover: string
    borderRadius: number
    unitBackground: string
    paperBackground: string
    disabledInputColor?: string
    checkboxColor: string
    checkboxShape?: string
    dialogContentTextTypography?: string
    consumedWeapon: string
    thingWithDescriptionHover: string
  }
}

export const regularTheme = createTheme({
  background: "#624A38",
  border: "1px solid rgba(0, 0, 0, 0.26)",
  borderHover: "1px solid rgba(0, 0, 0, 1)",
  borderRadius: 1,
  unitBackground: "#FFF8F6",
  paperBackground: "#FFE8E1",
  checkboxColor: "#624A38",
  checkboxShape: "square",
  consumedWeapon: "#624A38",
  thingWithDescriptionHover: "rgba(0, 0, 0, 0.5)",
})

export const cozyTheme = createTheme({
  background: "#624A38",
  border: "2.5px solid rgba(0, 0, 0, 0.6)",
  borderHover: "2.5px solid rgba(0, 0, 0, 0.75)",
  borderRadius: 2,
  unitBackground: "#FFF8F6",
  paperBackground: "#FFE8E1",
  typography: {
    fontFamily: "Varela Round",
  },
  checkboxColor: "#624A38",
  consumedWeapon: "#624A38",
  thingWithDescriptionHover: "rgba(0, 0, 0, 0.5)",
})

export const oceanTheme = createTheme({
  background: "#35656F",
  border: "2.5px solid rgba(0, 0, 0, 0.45)",
  borderHover: "2.5px solid rgba(0, 0, 0, 0.75)",
  borderRadius: 2,
  unitBackground: "#E5F7EF",
  paperBackground: "#C0CFC8",
  typography: {
    fontFamily: "Varela Round",
  },
  checkboxColor: "#35656F",
  consumedWeapon: "#35656F",
  thingWithDescriptionHover: "rgba(0, 0, 0, 0.5)",
})

export const darkTheme = createTheme({
  background: "#111",
  border: "2.5px solid rgba(255, 255, 255, 0.2)",
  borderHover: "2.5px solid rgba(255, 255, 255, 0.75)",
  borderRadius: 2,
  unitBackground: "#454545",
  paperBackground: "#232323",
  disabledInputColor: "#ababab",
  typography: {
    fontFamily: "Varela Round",
    allVariants: {
      color: "rgba(255, 255, 255, 0.87)",
    },
  },
  dialogContentTextTypography: "rgba(255, 255, 255, 0.6)",
  checkboxColor: "rgba(255, 255, 255, 0.87)",
  thingWithDescriptionHover: "rgba(255, 255, 255, 0.5)",
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          color: "rgba(255, 255, 255, 0.87)",
        },
      },
    },
  },
  consumedWeapon: "#111",
})

export const themes = [regularTheme, cozyTheme, oceanTheme, darkTheme]
