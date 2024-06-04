import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to uppercase","success")
    }

    const handleLoClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to lowercase","success")
    }

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value)
        
    }

    const handleCopy= () =>{
        console.log("I am copy")
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard","success")
    }

    const handleExtraSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removing extra spaces","success")
    }

    const[text,setText]=useState('Enter text here');  
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase,</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase,</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            {/* <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase,</button> */}
        </div>
        <div className='container my-2'>
            <h2>Your text sumary</h2>
            <p>{text.split(" ").length} words and  {text.length} chracters </p>
            <p>{0.008* text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Enter something in the textbox to above to preview it here"}</p>
        </div>
        </>
    )
}
