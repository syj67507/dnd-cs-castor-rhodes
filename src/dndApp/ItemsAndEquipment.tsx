import { Typography, Stack } from "@mui/material";
import { FeatOrTrait } from "./FeatOrTrait";
import characterSheet from "./formatted-sheet.json";

export function ItemsAndEquipment() {
    const { items_and_equipment } = characterSheet;
    return (
        <>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Items & Equipment</Typography>
            <Stack
                direction="column"
                border="1px solid rgba(0, 0, 0, 0.26)"
                borderRadius={1}
                padding={1}
                width="100%"
                bgcolor="#FFF8F6"
            >
                {items_and_equipment.map((itemOrEquipment) => {
                    return <FeatOrTrait name={itemOrEquipment.name} description={itemOrEquipment.description} />
                })}
            </Stack>
        </>
    );
}