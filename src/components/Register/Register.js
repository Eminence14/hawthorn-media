import { useRef } from 'react';
import Logo from '../../assets/images/Hawthorn Studios Yellow.png';

const Register = () => {
    const togglePass = useRef()
    const togglePass2 = useRef()
    function handleSubmit(e) {
        e.preventDefault();
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
                        <span className="open_pass" onClick={()=>{clickHandler(togglePass)}}></span>
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


                    <a href="#">
                        Already have an account?
                        <span> Sign in</span>
                    </a>

                    <button>Sign up</button>
                </form>
            </main>
        </div>
    );
}

export default Register;
