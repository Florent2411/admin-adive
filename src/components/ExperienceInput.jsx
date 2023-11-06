import { useState } from "react";
import ItemList from "./ItemList";

export default function ExperienceInput({ name, items, onChange }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [company, setCompany] = useState("");
    const [country, setCountry] = useState("");

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const isFine = title && description && company && startDate;

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
            <h4>Expérience Professionnelle</h4>

            <input style={{ width: "100%", padding: "1em" }} value={title} onChange={(e) => setTitle(e.target.value)} className="srch_explore" type="text" placeholder="Poste occupé" />
            <textarea rows={5} style={{ width: "100%", padding: "1em", resize: "none", marginTop: "0.3em" }} value={description} onChange={(e) => setDescription(e.target.value)} className="srch_explore" type="text" placeholder="Description" />

            <input style={{ width: "100%", padding: "1em" }} value={company} onChange={(e) => setCompany(e.target.value)} className="srch_explore" type="text" placeholder="Entreprise" />
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
                    const value = { title, description, company, startDate, endDate, country };
                    const event = createCustomEvent([...items, value]);
                    onChange(event);

                    setTitle("");
                    setDescription("");
                    setCompany("");
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