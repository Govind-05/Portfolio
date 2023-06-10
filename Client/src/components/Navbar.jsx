import "../assets/styles/navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="portfolio-title-container">
                    <div className="yellow-circle"></div>
                    <span className="portfolio-title">Govind</span>
                    <span>FullStack Developer</span>
                </div>
                <div className="navigation-container">
                    <ul className="navigation-container-list">
                        <li className="navigation-container-list-items"><a href="#about-section"><span>About Me</span></a></li>
                        <span className="vertical-line"><span>|</span></span>
                        <li className="navigation-container-list-items"><a href="#projects-sections"><span>Projects</span></a></li>
                        <span className="vertical-line"><span>|</span></span>
                        <li className="navigation-container-list-items"><a href="#contact-section"><span>Contact Me</span></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
