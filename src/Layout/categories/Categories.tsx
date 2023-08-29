import { useParams } from "react-router-dom";
import { getCategory } from "../../utils/api/api";
import Item from "../components/item/Item";
import "./categories.css";

const Categories: React.FC = () => {
  const { category } = useParams();
  const categoryProducts = getCategory(category!);

  return (
    <>
      <h1 className="categories__title">{category}</h1>
      <div className="categories__products-wrapper">
        {categoryProducts.map((product)=>(
          <Item key={product.id} item={product}/>
        ))}
      </div>
    </>
  );
};

export default Categories;