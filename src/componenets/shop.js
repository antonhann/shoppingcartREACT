import Card from "./Card";
const Shop = (props) => {
    const {addInCart} = props
    return(
        <div className="shop">
            <Card
            addInCart = {addInCart}
            price = {450}
            product = "Cull"
            />
            <Card
            addInCart = {addInCart}
            price = {300}
            product = "Boots"
            />
            <Card
            addInCart = {addInCart}
            price = {400}
            product = "Doran's Ring"
            />
            <Card
            addInCart = {addInCart}
            price = {450}
            product = "Doran's Blade"
            />
            <Card
            addInCart = {addInCart}
            price = {450}
            product = "Doran's Shield"
            />
            <Card
            addInCart = {addInCart}
            price = {350}
            product = "Long Sword"
            />
            <Card
            addInCart = {addInCart}
            price = {875}
            product = "Pickaxe"
            />
            <Card
            addInCart = {addInCart}
            price = {700}
            product = "Sheen"
            />
            <Card
            addInCart = {addInCart}
            price = {1300}
            product = "B.F. Sword"
            />
            <Card
            addInCart = {addInCart}
            price = {300}
            product = "Cloth Armor"
            />
            <Card
            addInCart = {addInCart}
            price = {850}
            product = "Blasting Wand"
            />
        </div>
    )
}

export default Shop;