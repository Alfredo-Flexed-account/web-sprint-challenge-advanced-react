import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {queryByTestId} = render(<CheckoutForm/>)
    expect(queryByTestId('header')).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText, findAllByText, getByTestId } = render(<CheckoutForm />);

    fireEvent.change(getByLabelText(/first name/i), {
      target: { value: "Fredo" }
    });
    fireEvent.change(getByLabelText(/last name/i), {
      target: { value: "Villasenor" }
    });
    fireEvent.change(getByLabelText(/address/i), {
      target: { value: "1234 i declare a thumb war" }
    });
    fireEvent.change(getByLabelText(/city/i), {
      target: { value: "somewhere" }
    });
    fireEvent.change(getByLabelText(/state/i), {
      target: { value: "somewhere els" }
    });
    fireEvent.change(getByLabelText(/zip/i), {
      target: { value: "999" }
    });

    const checkoutButton = getByLabelText(/checkout/i);

    fireEvent.click(checkoutButton);

    findAllByText(/Cody/i);

    expect(getByTestId("successMessage")).toBeInTheDocument();
  }); 

