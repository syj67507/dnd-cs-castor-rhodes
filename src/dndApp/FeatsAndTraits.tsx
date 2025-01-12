import { Stack, Typography } from "@mui/material";
import { ThingWithDescription } from "./ThingWithDescription";
import { StyledStack } from "./StyledStack";
import { useGetCharacterSheetQuery } from "../characterSheet/characterSheetApiSlice";
import { useParams } from "react-router";

export function FeatsAndTraits() {
    const params = useParams()
    const { data: characterSheet } = useGetCharacterSheetQuery(params.id || "");

    return (
        <Stack
            width="100%"
            alignItems="center"
        >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Feats & Traits</Typography>
            <StyledStack width="100%">
                {characterSheet?.feats_and_traits.map((featOrTrait) => {
                    return <ThingWithDescription name={featOrTrait.name} description={featOrTrait.description} />
                })}
            </StyledStack>
        </Stack>
    );
}