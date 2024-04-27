import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({categoriesProp}) => {
    return(
        <div className='directory-container'>
      {categoriesProp.map((category) => (
        <CategoryItem key={category.id} data={category}/> // key and data is a prop values
      ))}
    </div>
    )
}

export default Directory;