import ProductCategoryRow from './productCategoryRow';
import ProductRow from './productRow';

function createRows(products) {
  const rows = [];
  let lastCategory = null;
  
  for (let product of products) {
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
  return (
    <table className="productTable">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
  
export default function ProductTable({ products }) {
  const rows = createRows(products);
  return createTable(rows);
}