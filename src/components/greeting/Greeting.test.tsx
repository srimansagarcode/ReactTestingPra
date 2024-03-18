/* 
    Greet should render the text hello and if a name passed into the component
    It should render hello followed by the name
*/

import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe('Greeting', () => {
    test('Green render corretly', () => {
        render(<Greeting />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })
})
describe('Nested2', () =>{
    test('Greet render with name', () => {
        render(<Greeting name='Vidya' />)
        const textElement = screen.getByText('Hello Vidya');
        expect(textElement).toBeInTheDocument();
    })
})