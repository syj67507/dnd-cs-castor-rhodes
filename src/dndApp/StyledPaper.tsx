import type { PaperProps } from "@mui/material";
import { Paper } from "@mui/material";

/**
 * This Paper component is a wrapper around the Paper component
 * provided by @mui. The purpose of this wrapper is to provide a custom
 * style that can be reused throughout without having to repeat code
 */
export function StyledPaper(paperProps: PaperProps) {
    return (
        <Paper
            {...paperProps} // placing it here allows the user to override the props
            sx={{
                bgcolor: "#FFE8E1",
                padding: 1,
                overflow: "auto",
                ...paperProps.sx // placing it here allows the user to override the styles
            }}

        />
            
    )
}