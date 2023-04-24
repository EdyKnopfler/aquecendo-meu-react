export default function SearchBar() {
  return (
    <form className="searchBar">
      <input type="text" placeholder="Busque..." />
      <label>
        <input type="checkbox" />
        {' '}
        Somente produtos em estoque
      </label>
    </form>
  );
}