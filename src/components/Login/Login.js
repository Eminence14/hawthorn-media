import { useRef } from 'react';
import Logo from '../../assets/images/Hawthorn Studios Yellow.png';


const Login = () => {

    const togglePass = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        console.log(togglePass.current)
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

                    <label htmlFor="password">
                        Password
                        <span className="open_pass"></span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='password' placeholder='Enter your password'
                        autoComplete='off'
                        ref={togglePass}
                    />

                    <a href="#">
                        Don't have an account?
                        <span> Sign up</span>
                    </a>

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