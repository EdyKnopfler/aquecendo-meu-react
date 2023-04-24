import ProductCategoryRow from './productCategoryRow';
import ProductRow from './productRow';

function createRows(products, filterText, inStockOnly) {
  const rows = [];
  let lastCategory = null;
  
  for (let product of products) {
    const matchesFilterText = 
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    
    if (!matchesFilterText || (inStockOnly && !product.stocked)) {
      continue;
    }
    
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
          />
      );
    }
      
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
        />
    );
      
    lastCategory = product.category;
  }

  return rows;
}

function createTable(rows) {
  return rows.length > 0
    ? (
      <table className="productTable">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
    : (
      <div className="noProductsFound">
        Nenhum produto encontrado!
      </div>
    );
}
  
export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows = createRows(products, filterText, inStockOnly);
  return createTable(rows);
}