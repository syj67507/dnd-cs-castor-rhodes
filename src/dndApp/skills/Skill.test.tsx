import { expect, test } from 'vitest'
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils"
import { Skill } from "./Skill";
import userEvent from '@testing-library/user-event';

test("App should have correct initial render", () => {
    renderWithProviders(
        <Skill
            name="test name"
            statValue="1"
            proficient={false}
        />
    );

    expect(screen.getByTestId("skill-name")).toBeInTheDocument();
})

test("App should have correct initial render 2", async () => {
    const user = userEvent.setup();
    renderWithProviders(
        <Skill
            name="test name"
            statValue="1"
            proficient={false}
        />
    );

    expect(screen.queryByTestId("skill-dialog")).not.toBeInTheDocument();
    
    await user.click(screen.getByTestId("skill"));
    
    expect(screen.getByTestId("skill-dialog")).toBeInTheDocument();
    expect(screen.getByTestId("skill-dialog")).toHaveTextContent("test description");
})
