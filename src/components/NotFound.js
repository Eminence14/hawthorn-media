import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const ascii = '.·´¯`(>▂<)´¯`·.'
    return (
        <div className="not_found" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1em',
            height: '100vh',
            backgroundColor: 'var(--primary)',
            color: 'white'
        }}>
            Page Not Found &nbsp; {ascii}
            <Link to='/' style={{
                color: 'var(--secondary)',
                fontSize: '1.5em',
                fontWeight: 'bold'
            }}> Back to homepage</Link>
        </div>
    );
}

export default NotFound;