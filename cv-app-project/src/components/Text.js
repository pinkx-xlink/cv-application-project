import { useState } from "react";

export default function Text({inputField, message, dispatch}) {
    return (
        <section className="text">
            <textarea
                value={message}
                placeholder={'Textarea for ' + inputField.name}
                onChange={(e) => {
                    dispatch({
                        type: "ON_CHANGE",
                        message: e.target.value,
                    });
                }}
            />
            <button
                onClick={() => {
                    alert('done')
                }}
            ></button>
        </section>
    )
}