import "./TopBar.css"

const TopBar = ({onChangeFilter}) => {
  return (
    <div className="topbar">
      <input 
        className="filter"
        type="text"
        placeholder="Enter pokemon name or id..."
        onChange={(e) => onChangeFilter(e)}
      />
    </div>
  )
}

export default TopBar;
