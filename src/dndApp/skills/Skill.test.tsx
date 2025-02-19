import { expect, test } from 'vitest'
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils"
import { Skill } from "./Skill";
import userEvent from '@testing-library/user-event';

test("Skill component should have no issues on initial render", () => {
    renderWithProviders(
        <Skill
            name="testname"
            statValue="1"
            proficient={false}
        />
    );

    expect(screen.getByTestId("skill-name")).toBeInTheDocument();
})

test("Skill component should render with dialog if it loads data from api", async () => {
    const user = userEvent.setup();
    renderWithProviders(
        <Skill
            name="testname"
            statValue="1"
            proficient={false}
        />
    );

    expect(screen.queryByTestId("skill-dialog")).not.toBeInTheDocument();
    
    await user.click(screen.getByTestId("skill"));
    
    // Waiting for element to be shown since it needs to wait for an API call
    await waitFor(() => {
        expect(screen.getByTestId("skill-dialog")).toBeInTheDocument();
        expect(screen.getByTestId("skill-dialog")).toHaveTextContent("test description");
    })
})

test("Skill component should be able to show if the character is proficient", async () => {
    const user = userEvent.setup();
    renderWithProviders(
        <Skill
            name="testname"
            statValue="1"
            proficient={true}
        />
    );
    
    await user.click(screen.getByTestId("skill"));
    
    // Waiting for element to be shown since it needs to wait for an API call
    await waitFor(() => {
        expect(screen.getByTestId("skill-dialog")).toBeInTheDocument();
        expect(screen.getByTestId("skill-dialog-title")).toHaveTextContent('Proficient');
    })
})
