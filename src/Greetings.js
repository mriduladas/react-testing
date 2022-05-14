import { Fragment } from "react"
import { useState } from "react";
import Output from "./Output";

const Greetings = () => {

    const [changedText, setChangedText] = useState(false);

    const onClickHandler= () => {
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changedText && <Output>This is default text</Output> }
            {changedText && <Output>Text is changed !!</Output>}
            <p>This is a demo testing project</p>
            <button onClick={onClickHandler}>Change Text</button>
        </div>
    )
}

export default Greetings;