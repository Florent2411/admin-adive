import React, { useState } from 'react';

const profisciencyLevels = {
    "native": "Maternelle",
    "fluent": "Courant",
    "intermediary": "Intermédiaire",
    "beginner": "Débutant"
}

export default function MultiLanguageInput({ placeholder, name, items, onChange }) {
    const [language, setLanguage] = useState("");
    const [profisciency, setProfisciency] = useState("native");

    const createCustomEvent = (value) => {
        return {
            target: {
                value,
                name,
            },
            type: "array",
        };
    }

    const insertLanguage = () => {
        const value = [...items, { language, profisciency }];
        const event = createCustomEvent(value);
        onChange(event);
        setLanguage("");
    }

    const removeLanguage = (language) => {
        const value = items.filter((item) => item.language !== language);
        const event = createCustomEvent(value);
        onChange(event);
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "1em 0" }}>
                <div className="ui search focus" style={{ flex: 0.8 }}>
                    <div className="ui input swdh95">
                        <input className="prompt srch_explore"
                            type="text"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            placeholder={placeholder} />
                    </div>
                </div>
                <select value={profisciency} onChange={(e) => setProfisciency(e.target.value)} name="cars" id="cars">
                    {
                        Object.entries(profisciencyLevels).map(([level, title]) => (
                            <option value={level}>{title}</option>
                        ))
                    }
                </select>
                <button
                    disabled={!language}
                    onClick={insertLanguage}
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
                            <p style={{ textAlign: "left", margin: 0 }}>{item.language}</p>
                            <p
                                className='delete-text'
                                onClick={() => {
                                    removeLanguage(item.language);
                                }}
                                style={{ textAlign: "left", margin: 0, color: "red" }}>{"Supprimer"}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}