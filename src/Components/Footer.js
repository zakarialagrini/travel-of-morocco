import './FooterStyles.css';


const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
               <div>
                <h1>Marocaine Travel</h1>
                <p>Choose your Favorite Destinaion</p>
               </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="botton">
                <div>
                    <h4>Projet</h4>
                    <a href='/'>Changelogo</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href='/'>GitHub</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Projet</a>
                    <a href='/'>Twiter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>Troubleshooting</a>
                    <a href='/'>Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>Terms of service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;