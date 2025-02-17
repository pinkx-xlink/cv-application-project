import { useState } from "react";
import '../styles/Text.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "react-bootstrap/Button";
// import { ThemeProvider } from "react-bootstrap";
//import { ButtonGroup } from "react-bootstrap/ButtonGroup";

export default function Text({inputField, message, dispatch}) {
    return (
        
        <section className="text">
            <textarea
                value={message}
                placeholder={'Textarea for ' + inputField.name}
                onChange={(e) => {
                    dispatch({
                        type: 'EDITED_MESSAGE',
                        message: e.target.value,
                    });
                }}
            />
            <button 
                onClick={() => {
                    alert('done');
                    dispatch({
                        type: 'SENT_MESSAGE',
                    })
                }}>
                    Send to {inputField.name}
                </button>
        </section>
        
    )
}