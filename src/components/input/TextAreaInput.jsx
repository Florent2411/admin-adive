export default function TextAreaInput({ name, onChange, value, placeholder, label }) {
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
        </div>
    )
}