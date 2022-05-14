import { Fragment } from "react"
import { useState } from "react";

const Greetings = () => {

    const [changedText, setChangedText] = useState(false);

    const onClickHandler= () => {
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changedText && <p>This is default text</p> }
            {changedText && <p>Text is changed !!</p>}
            <p>This is a demo testing project</p>
            <button onClick={onClickHandler}>Change Text</button>
        </div>
    )
}

export default Greetings;