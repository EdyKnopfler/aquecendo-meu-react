export default function ProductCategoryRow({ category }) {
  return (
    <tr className="productCategoryRow">
      <th colSpan="2">{category}</th>
    </tr>
  );
}