import { useState, useEffect } from 'react';

import { fetchFruits } from '../data/dataApi';
import SearchBar from './searchBar';
import ProductTable from './productTable';
import './filterableProductTable.css';

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Tratamento dos dados assíncronos
  // Com useEffect podemos chamar a função assíncrona e mudar o estado quando
  // os dados forem carregados
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const fruits = await fetchFruits();
      setProducts(fruits);
    }

    loadProducts();
  }, [])

  return (
    <div className="filterableProductTable">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
        />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        />
    </div>
  )
}