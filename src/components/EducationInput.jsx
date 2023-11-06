import { useState } from "react";
import ItemList from "./ItemList";

export default function EducationInput({ name, items, onChange }) {
    const [title, setTitle] = useState("");
    const [university, setUniversity] = useState("");
    const [country, setCountry] = useState("");

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const isFine = title && university && startDate;

    const createCustomEvent = (value) => {
        return {
            target: {
                value,
                name,
            },
            type: "object",
        };
    }

    return (
        <div>
            <h4>Etudes et Formations</h4>
            <input style={{ width: "100%", padding: "1em" }} value={title} onChange={(e) => setTitle(e.target.value)} className="srch_explore" type="text" placeholder="Formation" />
            <input style={{ width: "100%", padding: "1em" }} value={university} onChange={(e) => setUniversity(e.target.value)} className="srch_explore" type="text" placeholder="Université ou Institution" />
            <input style={{ width: "100%", padding: "1em" }} value={country} onChange={(e) => setCountry(e.target.value)} className="srch_explore" type="text" placeholder="Pays" />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label htmlFor="startDate">Date de début</label>
                <input
                    style={{
                        padding: "1em"
                    }}
                    id="startDate" value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="prompt srch_explore" type="date" name="startDate" placeholder="Date de début" />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label htmlFor="startDate">Date de fin</label>
                <input
                    style={{
                        padding: "1em"
                    }}
                    id="endDate" value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="prompt srch_explore" type="date"
                    name="endDate" placeholder="Date de fin" />
            </div>

            <button
                disabled={!isFine}
                onClick={() => {
                    const value = { title, company: university, startDate, endDate, country };
                    const event = createCustomEvent([...items, value]);
                    onChange(event);

                    setTitle("");
                    setUniversity("");
                    setCountry("");
                    setStartDate(null);
                    setEndDate(null);
                }}
                className="login-btn"
                style={{ flex: 0.2, margin: "1em 0" }}
            >+</button>
            <ItemList itemKey="title" createCustomEvent={createCustomEvent} items={items} onChange={onChange} />
        </div>
    )
}