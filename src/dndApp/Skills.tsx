import { Box, Paper } from "@mui/material";
import characterSheet from "./character-sheet.json";
export function Skills() {
    const character = characterSheet.character[0];

    return (
        <Paper
            square={false}
            sx={{
                padding: 1,
                gridColumn: "1",
                gridRowStart: "1",
                gridRowEnd: "span 4",
                overflow: "auto",
            }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1
            }}>
                Skills
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
                                border: "1px solid rgba(0, 0, 0, 0.26)",
                                borderRadius: 1,
                                padding: 1,
                                bgcolor: "white",
                            }}>
                                <Box>
                                    {`${skillName.slice(0,1).toUpperCase()}${skillName.slice(1)}`}
                                </Box>
                                <Box>
                                    {statValue}
                                </Box>
                            </Box>
                        );
                    })
                }
            </Box>
        </Paper>
    );
}