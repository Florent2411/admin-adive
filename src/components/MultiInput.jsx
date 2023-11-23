import React, { useState } from 'react';

export default function MultiInput({ placeholder, name, items, onChange }) {
    const [text, setText] = useState("");

    const createCustomEvent = (value) => {
        return {
            target: {
                value,
                name,
            },
            type: "array",
        };
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "1em 0" }}>
                <div className="ui search focus" style={{ flex: 0.8 }}>
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder={placeholder} />
                    </div>
                </div>
                <button
                    disabled={!text}
                    onClick={() => {
                        const value = [...items, text];
                        const event = createCustomEvent(value);
                        onChange(event);
                        setText("");
                    }}
                    className="login-btn"
                    style={{ flex: 0.2, margin: 0 }}
                >+</button>
            </div>

            <ul style={{
                maxHeight: 150,
                overflowY: "scroll",
                padding: "0 1em"
            }}>
                {
                    items && items.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                display: "flex", justifyContent: "space-between",
                                alignItems: "center", height: 35
                            }}>
                            <p style={{ textAlign: "left", margin: 0 }}>{item}</p>
                            <p
                                className='delete-text'
                                onClick={() => {
                                    const value = items.filter((i) => i !== item);
                                    const event = createCustomEvent(value);
                                    onChange(event);
                                }}
                                style={{ textAlign: "left", margin: 0, color: "red" }}>{"Supprimer"}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}