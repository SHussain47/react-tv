import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, selectedShow, setSelectedShow }) {
  const handleClick = (aShow) => {
    setSelectedShow(aShow);
  }

  return (
    <nav className="shows">
      {shows.map((show) => {
        const isSelected = show === selectedShow;
        return (
          <button
            onClick={() => handleClick(show)}
            key={show.name}
            className={`${isSelected ? "is-selected" : ""}`}
            type="button"
          >
            {show.name}
          </button>
        )
      })}
    </nav>
  )
}
