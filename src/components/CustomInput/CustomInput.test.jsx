import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CustomInput from ".";

test('Campos não devem iniciar com a label de erro ativa', () => {
    render(<CustomInput validate={{ text: "Field Invalid", handler: null }}/>)

    const invalidFieldLabel = screen.getByText("Field Invalid");

    expect(invalidFieldLabel).not.toHaveClass("invalid");
});