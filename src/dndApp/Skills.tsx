// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Box, Paper, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json";

export function Skills() {
    const character = characterSheet.character[0];

    return (
        <Paper
            sx={{
                padding: 1,
                overflow: "auto",
                bgcolor: "#FFE8E1",
                height: "100%",
            }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1
            }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Feats and Traits</Typography>
                {Object.entries(character.skills)
                    .filter(([skillName]) => !skillName.includes("check"))
                    .sort((a, b) => {
                        if (a < b) {
                            return -1;
                        }
                        if (a > b) {
                            return 1;
                        }
                        return 0;
                    })
                    .map(([skillName, statValue]) => {
                        return (
                            <Box sx={{
                                id: skillName,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "100%",
                                borderRadius: 1,
                                padding: 1,
                                bgcolor: "#FFF8F6",
                                border: "1px solid rgba(0, 0, 0, 0.26)",
                                "&:hover": {
                                    border: "1px solid black",
                                }
                            }}>
                                <Typography variant="body1">
                                    {`${skillName.slice(0,1).toUpperCase()}${skillName.slice(1)}`}
                                </Typography>
                                <Typography variant="body1">
                                    {statValue}
                                </Typography>
                            </Box>
                        );
                    })
                }
            </Box>
        </Paper>
    );
}