import { Typography, useTheme } from "@mui/material";
import { StyledStack } from "../dndApp/StyledStack";
import { Link } from "react-router";

interface CharacterProps {
    name: string;
    level: string;
}

export function Character({ name, level }: CharacterProps) {
    const theme = useTheme();

    return (
        <StyledStack
            sx={{
                "&:hover": {
                    border: theme.borderHover,
                    cursor: "pointer"
                }
            }}
        >
            <Link to={`/dnd-cs-castor-rhodes/sheet/${name.toLowerCase()}`} style={{ width: "100%", color: "inherit", textDecoration: "none" }}>
                <Typography>{name}</Typography>
                <Typography>Level {level}</Typography>
            </Link>
        </StyledStack>
    )
}