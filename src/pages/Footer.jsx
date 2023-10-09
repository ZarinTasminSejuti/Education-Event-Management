

const Footer = () => {
    const colorText = {
        background: 'linear-gradient(88deg, #ff6600, #fff, #ff6600)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };
    return (
        <div className="bg-black">
            <footer className="footer p-10 text-white">
                <aside>
                    <a className="btn btn-ghost normal-case text-4xl" style={colorText}>EventifyEDU</a>
                    <p className="ml-2">An Education Management System</p>
                    <p className="ml-2">Providing reliable tech since 2022</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Fairs</a>
                    <a className="link link-hover">Webinars</a>
                    <a className="link link-hover">Conferences</a>
                    <a className="link link-hover">Trainings</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">Locate Us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>




            </footer>

            <div className="footer footer-center p-4 text-white">
                <aside>
                    
                    <p>Copyright © 2023 - All right reserved by EventifyEDU</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;