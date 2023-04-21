const Home = (props) => {
    const {googleLogin} = props
    return(
        <div>
            <h1>This is home</h1>
            <button onClick={googleLogin}>SIGN IN HERE</button>
            <a href = "/shop">Click Me for Shop</a>
        </div>
    )
}

export default Home;