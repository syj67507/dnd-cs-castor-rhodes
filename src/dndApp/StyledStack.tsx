import type { StackProps } from "@mui/material";
import { Stack } from "@mui/material";

/**
 * This Stack component is a wrapper around the Stack component
 * provided by @mui. The purpose of this wrapper is to provide a custom
 * style that can be reused throughout without having to repeat code
 */
export function StyledStack(stackProps: StackProps) {
    return (
        <Stack
            bgcolor="#FFF8F6"
            borderRadius={1}
            border="1px solid rgba(0, 0, 0, 0.26)"
            padding={1}
            {...stackProps} // placing it here allows the user to override the props
            sx={{
                "&:hover": {
                    border: "1px solid black",
                },
                ...stackProps.sx // placing it here allows the user to override the styles
            }}
        />
    );
}