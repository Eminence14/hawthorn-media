import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not_found">
            Page Not Found
            <Link to='/'>Back to homepage</Link>
        </div>
    );
}
 
export default NotFound;