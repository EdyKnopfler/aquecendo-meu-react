export default function ProductRow({ product }) {
  return (
    <tr style={{ color: product.stocked ? 'inherit' : 'red'}}>
      <td className="productNameCell">{product.name}</td>
      <td className="productPriceCell">{product.price}</td>
    </tr>
  );
}