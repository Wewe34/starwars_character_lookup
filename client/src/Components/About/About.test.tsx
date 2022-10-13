import { render, screen } from "@testing-library/react";
import React from "react";
import About from "./About";

describe('About Section test', () => {

    it('should include birth year and hair color info', () => {
        render(<About birth_year={"2Btest"} hair_color={"black"} height={"111"} weight={"111"} />);
        const hair_birthInfo = screen.getByTestId('birth_hairColor');
        expect(hair_birthInfo).toBeInTheDocument();
    })

    it('should include height and weight info', () => {
        render(<About birth_year={"2Atest"} hair_color={"red"} height={"111"} weight={"111"} />);
        const hw = screen.getByTestId('height_weight');
        expect(hw).toBeInTheDocument();
    })

})