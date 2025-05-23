const Toolbar = ({filters, selected, onSelectFilter}) => {
    return (
        <div className="toolbar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`toolbar__button ${filter === selected ? 'active' : ''}`}
              onClick={() => onSelectFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
    );
};

export default Toolbar;