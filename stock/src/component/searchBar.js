export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form className="searchBar">
      <input
        type="text"
        placeholder="Busque..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
        {' '}
        Somente produtos em estoque
      </label>
    </form>
  );
}