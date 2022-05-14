import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers"
import { render, screen } from "@testing-library/react"
import Greetings from './Greetings'

test('hello world test in Greetings', ()=>{
    //Arrange
    render(<Greetings />)
    //Act
        //..Nothing for this test
    //Assert
    const helloWorldElement = screen.getByText("Hello World", {exact: true})
    expect(helloWorldElement).toBeInTheDocument();

})