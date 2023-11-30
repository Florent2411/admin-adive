export default function InputErrorMessage({ message }) {
    return (
        <small
            style={{
                color: "red",
                display: "flex",
                justifyContent: "flex-start"
            }}
        >{message}</small>
    )
}