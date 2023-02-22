import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            This is my homepage
            <p>Click to</p>
            <Link to='/login'>Login</Link>
            <span> or </span>
            <Link to='/register'>Register</Link>
        </div>
    );
}
 
export default Home;