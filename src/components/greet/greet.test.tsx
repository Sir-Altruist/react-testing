import { render, screen } from '@testing-library/react'
import Greet from './Greet'

test("Greet renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})

// test("Renders with a name", () => {
//     render(<Greet name="Segun" />)
//     const textElement = screen.getByText('Hello Segun')
//     expect(textElement).toBeInTheDocument()
// })