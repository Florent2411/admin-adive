export default function TextAreaInput({ name, onChange, value, placeholder, label, error }) {
    return (
        <div class="ui search focus mt-15">
            <label style={{ float: "left" }}>{label}</label>
            <div class="ui form swdh30">
                <div class="field">
                    <textarea
                        rows="3"
                        name={name}
                        onChange={onChange}
                        value={value}
                        placeholder={placeholder}
                    ></textarea>
                </div>
            </div>
            {
                error && (
                    <small>{error.message}</small>
                )
            }
        </div>
    )
}