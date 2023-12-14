export default function SearchBar({ value, onChange, placeholder }) {

  return (
    <div className="explore_search">
      <div className="ui search focus">
        <div className="ui left icon input swdh11">

          <input
            value={value}
            className="prompt srch_explore"
            type="text"
            placeholder={placeholder || "Rechercher..."}
            onChange={onChange}
          />
          <i className="uil uil-search-alt icon icon2" />
        </div>
      </div>
    </div>
  )
}
