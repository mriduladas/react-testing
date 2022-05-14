import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greetings from './Greetings'

describe('Greetings component', () => {
    test('has hello world text', ()=>{
        //Arrange
        render(<Greetings />)
        //Act
            //..Nothing for this test
        //Assert
        const helloWorldElement = screen.getByText("Hello World", {exact: true})
        expect(helloWorldElement).toBeInTheDocument();
    
    })

    test('renders This is default text when button is not clicked', ()=>{
        //Arrange
        render(<Greetings />)
        //Act
            //..Nothing for this test
        //Assert
        const helloWorldElement = screen.getByText("This is default text", {exact: true})
        expect(helloWorldElement).toBeInTheDocument();
    
    })

    test('renders Text is changed when the button is clicked', ()=>{
        //Arrange
        render(<Greetings />)
        //ACT
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        //Here test is Text is changed!! in componet so gave false
        const text = screen.getByText('Text is changed', {exact:false}); 
        expect(text).toBeInTheDocument();
    })

    test('does not render This is default text when button is clicked', ()=> {
        //Arrange
        render(<Greetings />);
        //ACT
        const buttonElement = screen.getByText('Change Text');
        userEvent.click(buttonElement);
        //Asset
        const text = screen.queryByText('This is default text', {exact: false});
        expect(text).toBeNull();
    })
})

