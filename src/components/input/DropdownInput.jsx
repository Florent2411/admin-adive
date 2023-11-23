export default function DropdownInput({ label, name, onChange, value, options, placeholder }) {
    return (
        <div className="mt-15">
            <label style={{ float: "left" }}>{label}</label>
            <select
                placeholder={placeholder}
                value={value} onChange={onChange} name={name}
                class="ui hj145 dropdown cntry152 prompt srch_explore selection">
                {
                    options && options.map(({ label, value }) => (
                        <option value={value}>{label}</option>
                    ))

                }
                !value && (<option>{placeholder}</option>)
            </select>
        </div>
    )
}