import uniqid from "uniqid"; 

const Card = (props) => {
    const {
        addInCart,
        image,
        product,
        price,
    } = props
    const id = uniqid()
    return(
        <div className="card">
            <h1>Insert Image Here</h1>
            <p>{product}<span>{price}</span></p>
            <button onClick = {() => addInCart({
                product: product,
                price: price,
                id: id,
                amount: 1,
            })}>Add To Cart</button>
        </div>
    )
}

export default Card;