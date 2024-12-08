import { Stack, Typography } from "@mui/material";
import { FeatOrTrait } from "./FeatOrTrait";
import { StyledStack } from "./StyledStack";
import characterSheet from "./formatted-sheet.json";

export function FeatsAndTraits() {
    const featsAndTraits = characterSheet.feats_and_traits;

    return (
        <Stack
            width="100%"
            alignItems="center"
        >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Feats & Traits</Typography>
            <StyledStack width="100%">
                {featsAndTraits.map((featOrTrait) => {
                    return <FeatOrTrait name={featOrTrait.name} description={featOrTrait.description} />
                })}
            </StyledStack>
        </Stack>
    );
}