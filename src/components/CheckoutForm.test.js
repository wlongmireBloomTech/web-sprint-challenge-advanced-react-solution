import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);
    const firstName = screen.getByLabelText(/First Name:/i);
    const lastName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);
    
    userEvent.type(firstName, "Warren");
    userEvent.type(lastName, "Longmire");
    userEvent.type(address, "1111 3rd street");
    userEvent.type(city, "Philadelphia");
    userEvent.type(state, "PA");
    userEvent.type(zip, "19143");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const messageContainer = await screen.findByTestId('successMessage');
    expect(messageContainer).toBeInTheDocument();
});