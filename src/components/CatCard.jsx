import Card from 'react-bootstrap/Card';
function CatCard({breed}) {
    let origin = "";
    switch (breed.origin) {
        case "Mutation": 
            origin = "./mutant-cat.jpg"
            break;
        case "Natural/Standard": 
            origin = "./cute-cat.jpg"
            break;
        case "Natural": 
            origin = "./natural-cat.jpg"
            break;
        case "Crossbreed": 
            origin = "./crossbreed-cat.jpg"
            break;
        case "Hybrid": 
            origin = "./hybrid-cat.jpg"
            break;
        case "": 
            origin = "./standard-cat.jpg"
            break;
    
        default:
            origin = "./standard-cat.jpg"
            break;
    }
    return (   
        <Card style={{padding:"10px"}}>
            <Card.Img variant="top" src={origin} />
            <Card.Body>
                <Card.Title>{breed.breed}</Card.Title>
                <Card.Text>Coat : {breed.coat}</Card.Text>
                <Card.Text>Country : {breed.country}</Card.Text>
                <Card.Text>Pattern : {breed.pattern}</Card.Text>
            </Card.Body>
        </Card>        
    )
}

export default CatCard;