import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="not_found">
            Page Not Found
            <Link to='/'>Back to homepage</Link>
        </div>
    );
}
 
export default NotFound;