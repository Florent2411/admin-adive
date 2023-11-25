export default function DateInput({ name, onChange, value, placeholder, label, error }) {
    return (
        <div className="ui search focus mt-15">
            <label style={{ float: "left" }}>{label}</label>
            <div className="ui left icon input swdh95">
                <input
                    name={name}
                    onChange={onChange}
                    value={value}
                    className="prompt srch_explore"
                    type="date"
                    placeholder={placeholder} />
                <i className="uil uil-calendar-alt icon icon2" />
            </div>
            {
                error && (
                    <small>{error.message}</small>
                )
            }
        </div>
    )
}

