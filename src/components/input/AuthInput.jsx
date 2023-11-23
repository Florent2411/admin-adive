// TODO: Provide prop to hide password input text
export default function AuthInput({ label, name, onChange, value, error, icon, type, placeholder }) {
    return (
        <div className="ui search focus mt-15">
            <label style={{ float: "left" }}>{label}</label>
            <div className="ui left icon input swdh95">
                <input
                    className="prompt srch_explore"
                    type={type}
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder} />
                <i className={`uil ${icon ? `uil-${icon}` : ""} icon icon2`} />
            </div>
            {
                error && (
                    <small>{error.message}</small>
                )
            }
        </div>
    )
}