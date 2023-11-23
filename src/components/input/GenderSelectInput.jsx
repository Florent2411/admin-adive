export default function GenderSelectInput({ label, name, onChange, value }) {
    return (

        <div className="ui search focus mt-15">
            <label style={{ float: "left" }}>{label || "Genre (H/F)"}</label>
            <div className="mt-15">
                <select value={value} onChange={onChange} name={name} class="ui hj145 dropdown cntry152 prompt srch_explore selection">
                    {
                        !value && (
                            <option disabled>Selectionnez Un Genre</option>
                        )
                    }
                    <option value="male">Masculin</option>
                    <option value="female">Féminin</option>
                </select>
            </div>
        </div>
    )
}