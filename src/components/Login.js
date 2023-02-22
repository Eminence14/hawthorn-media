import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Hawthorn Studios Yellow.png';


const Login = () => {

    const togglePass = useRef()
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/', { replace: true })
    }
    function handleClick() {
        togglePass.current.classList.toggle('active');
        if (togglePass.current.type === 'password') {
            togglePass.current.type = 'text';
        } else {
            togglePass.current.type = 'password';
        };
    }

    return (
        <div className="auth_container">
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

                    <div className='pass'>
                        <label htmlFor="password">
                            Password
                        </label>
                        <span className="open_pass" onClick={handleClick}></span>
                        <input
                            type="password"
                            id="password"
                            name='password' placeholder='Enter your password'
                            autoComplete='off'
                            ref={togglePass}
                        />
                    </div>

                    <Link to='/register'> Don't have an account? <span> Sign up </span> </Link>

                    <div className="pass_options">
                        <div className="remember">
                            <label htmlFor="remember">
                                <input type="checkbox" name="remember" id="remember" />
                                <span className="custom"></span>
                                Remember password
                            </label>
                        </div>
                        <div className="forget">
                            Forgot password?
                        </div>
                    </div>


                    <button>Sign in</button>
                </form>
            </main>
        </div>
    );
}

export default Login;