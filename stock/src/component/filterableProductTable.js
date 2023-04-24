import { useState, useEffect } from 'react';

import { fetchFruits } from '../data/dataApi';
import SearchBar from './searchBar';
import ProductTable from './productTable';
import './filterableProductTable.css';

export default function FilterableProductTable() {
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
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}