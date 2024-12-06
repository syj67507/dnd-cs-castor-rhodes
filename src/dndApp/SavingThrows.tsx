// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Typography } from "@mui/material";
import characterSheet from "./formatted-sheet.json";
import { useGetSkillsDescriptionQuery } from "./dndApiSlice";
import { useState } from "react";

export function SavingThrows() {
    const skills = characterSheet.saving_throws;

    return (
        <Paper
            sx={{
                padding: 1,
                overflow: "auto",
                bgcolor: "#FFE8E1",
            }}
        > 
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1
            }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Saving Throws</Typography>
                {
                    skills.map(({ name, modifier }) => {
                        return (
                            <Skill name={name} statValue={modifier} />
                        );
                    })
                }
            </Box>
        </Paper>
    );
}

interface SavingThrowsProps {
    name: string;
    statValue: string | boolean;
}
export function Skill({ name, statValue }: SavingThrowsProps) {
    const skillName = `${name.slice(0,1).toUpperCase()}${name.slice(1)}`.replace(/-/g, " ")

    return (
        <>
            <Box
                sx={{
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
                }}
            >
                <Typography variant="body1">
                    {skillName}
                </Typography>
                <Typography variant="body1">
                    {statValue}
                </Typography>
            </Box>
        </>
    );

}