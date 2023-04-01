import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Hawthorn Studios Yellow.png';


const Login = () => {

    const togglePass = useRef()
    const passwordModal = useRef()
    const navigate = useNavigate();
    const [passwordEmail, setPasswordEmail] = useState('')



    function handleSubmit(e) {
        e.preventDefault();
        navigate('/dashboard', { replace: true })
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

                        <div className="pass_options">
                            <div className="remember">
                                <label htmlFor="remember">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <span className="custom"></span>
                                    Remember password
                                </label>
                            </div>
                            <div className="forget" onClick={() => passwordModal.current.classList.add('active')}>
                                Forgot password?
                            </div>
                        </div>


                        <button className='trans-right'>Sign in</button>
                    </form>
                </main>
                <Link to='/register' className='trans-right'> Don't have an account? <span> Sign up </span> </Link>
            </div>
            <div className="auth-right"></div>
            <div className="password-modal" ref={passwordModal} >
                <div id="modal-overlay" onClick={() => passwordModal.current.classList.remove('active')}></div>
                <div className="password-modal-content">
                    <h1>Forgot your password?</h1>
                    <span>You’’ll will get an email with a reset link</span>
                    <input type="email" value={passwordEmail} name="password-email" onChange={(e) => setPasswordEmail(e.target.value)} placeholder='your-email@example.com' />
                    <Link to='/' className='button'>Request password</Link>
                </div>
            </div>
        </div>

    );
}

export default Login;