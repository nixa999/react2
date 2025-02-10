import Card from 'react-bootstrap/Card';

function CategoryList({category}) {
    
    return (   
        <option value={category}>{category}</option>      
    )
}

export default CategoryList;