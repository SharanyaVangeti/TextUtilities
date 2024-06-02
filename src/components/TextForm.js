import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here")
    const [sentenceCount, setSentenceCount] = useState("Click on the Sentence button");

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("Cleared the text!", "success");
    }
    const handleSentencesClick = () => {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '');

        setSentenceCount(sentences.length);
        props.showAlert("Sentences count recevied", "success");

    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!", "success");


    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed!", "success");

    }
    return (
        <>
            <div className="container" my-3="True">
                <h1 className="my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#1e4276' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "10px" }} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "10px" }} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "10px" }} onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "10px" }} onClick={handleSentencesClick}>Sentences</button>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "10px" }} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: "10px" }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>


            </div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2> Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <p>Number of sentences: {sentenceCount}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>

        </>

    );

}

