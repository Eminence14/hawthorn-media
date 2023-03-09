import { useLayoutEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Hawthorn Studios Yellow.png';
import hawthorn from '../assets/images/our_services1.jpg'

const Register = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const togglePass = useRef()
    const togglePass2 = useRef()
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/dashboard', { replace: true })
    }
    function clickHandler(curr) {
        curr.current.classList.toggle('active');
        if (curr.current.type === 'password') {
            curr.current.type = 'text';
        } else {
            curr.current.type = 'password';
        };
    }

    return (
        <div className="auth_container">
            <div className="auth-left">
                <header>
                    <img src={Logo} alt="logo" />
                </header>
                <main>
                    <section className="welcome">
                        <span>Welcome</span>
                        <span>Let’s get you signed up.</span>
                    </section>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" name='email' placeholder='Enter your email' autoComplete='off' />

                        <div className="pass">
                            <label htmlFor="password">
                                Password
                            </label>
                            <span className="open_pass" onClick={() => { clickHandler(togglePass) }}></span>
                            <input type="password" id="password" name='password' placeholder='Enter your password' autoComplete='off'
                                ref={togglePass}
                            />
                        </div>

                        <div className="pass">
                            <label htmlFor="cnPass">
                                Confirm Password
                            </label>
                            <span className="open_pass" onClick={() => { clickHandler(togglePass2) }}></span>
                            <input type="password" id="cnPass"
                                name='cnPass' placeholder='Enter your password' autoComplete='off'
                                ref={togglePass2}
                            />
                        </div>


                        <button className='trans-right'>Sign up</button>
                    </form>
                </main>
                <Link to='/login' className='trans-right'> Already have an account? <span> Sign in </span> </Link>
            </div>
            <div className="auth-right"></div>
        </div>
    );
}

export default Register;
