import { Typography } from "@mui/material";
import { ThingWithDescription } from "./ThingWithDescription";
import characterSheet from "./formatted-sheet.json";
import { StyledStack } from "./StyledStack";

export function ItemsAndEquipment() {
    const { items_and_equipment } = characterSheet;
    return (
        <>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Items & Equipment</Typography>
            <StyledStack
                width="100%"
            >
                {items_and_equipment.map((itemOrEquipment) => {
                    return <ThingWithDescription name={itemOrEquipment.name} description={itemOrEquipment.description} />
                })}
            </StyledStack>
        </>
    );
}