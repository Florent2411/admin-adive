import Spinner from "../../spinner/Spinner";

export default function LoadingButton({ loading, title, type }) {

    return (
        <button style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
            disabled={loading}
            className="login-btn"
            type={type}>
            {loading ? (<Spinner />) : title}
        </button>
    )
}