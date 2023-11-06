export default function ItemList({ items, onChange, itemKey, createCustomEvent }) {
    return (
        <ul style={{
            maxHeight: 150,
            overflowY: "scroll",
            padding: "0 1em"
        }}>
            {
                items && items.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex", justifyContent: "space-between",
                            alignItems: "center", height: 35
                        }}>
                        <p style={{ textAlign: "left", margin: 0 }}>{item[itemKey]}</p>
                        <p
                            className='delete-text'
                            onClick={() => {
                                const value = items.filter((i) => i.title !== item[itemKey]);
                                const event = createCustomEvent(value);
                                onChange(event);
                            }}
                            style={{ textAlign: "left", margin: 0, color: "red" }}>{"Supprimer"}</p>
                    </li>
                ))
            }
        </ul>
    )
}