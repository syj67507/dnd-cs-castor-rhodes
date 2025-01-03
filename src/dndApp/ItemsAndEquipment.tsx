import { Typography } from "@mui/material";
import { ThingWithDescription } from "./ThingWithDescription";
import { StyledStack } from "./StyledStack";
import { useGetCharacterSheetQuery } from "../characterSheet/characterSheetApiSlice";

export function ItemsAndEquipment() {
    const { data: characterSheet } = useGetCharacterSheetQuery();

    return (
        <>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Items & Equipment</Typography>
            <StyledStack
                width="100%"
            >
                {characterSheet?.items_and_equipment.map((itemOrEquipment) => {
                    return <ThingWithDescription name={itemOrEquipment.name} description={itemOrEquipment.description} />
                })}
            </StyledStack>
        </>
    );
}