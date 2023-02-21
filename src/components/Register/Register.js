import Logo from '../../assets/images/Hawthorn Studios Yellow.png';

const Register = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="auth">
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
                    </label>
                    <input type="password" id="password" name='password' placeholder='Enter your password' autoComplete='off' />

                    <label htmlFor="cnPass">
                        Confirm Password
                    </label>
                    <input type="password" id="cnPass" name='cnPass' placeholder='Enter your password' autoComplete='off' />

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
