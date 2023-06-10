import "../assets/styles/intro.css"


export default function Intro() {
    return (
        <>
            <div className="intro-container">
                <div className="intro-image-container">
                    <div className="intro-image"><img src="/src/assets/images/illustration.jpg" alt="" /></div>
                </div>
                <div className="intro-info-container">
                    <div className="welcome-title">Hello</div>
                    <div className="bit-info">A Bit About Me</div>
                    <div className="intro-about-me">I am Govind Bhardwaj. A passionate Full-Stack Web Developer based in Delhi, India.&nbsp;📍</div>
                    <div className="contact-icons">
                        <a href="https://www.linkedin.com/in/govind-bhardwaj-117a53213/" target="_blank"><svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z" /></svg></a>
                        <a href="https://github.com/Govind-05" target="_blank"><svg className="github-icon" width="50px" height="50px" version="1.1" baseProfile="basic" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 72 72" xmlSpace="preserve">
                            <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022
                    	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491
                    	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922
                    	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812
                    	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576
                    	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659
                    	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454
                    	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"/>
                        </svg></a>
                    </div>
                    <div className="redirect-links">
                        <a href="#about-section" style={{textDecoration:"none",color:"inherit"}}><div className="about-me-redirect" style={{marginLeft:"0"}}>About Me</div></a>
                        <a href="#projects-sections" style={{textDecoration:"none",color:"inherit"}}><div className="projects-redirect">Projects</div></a>
                        <a href="#contact-section" style={{textDecoration:"none",color:"inherit"}}><div className="contact-redirect">Contact</div></a>
                        
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
        </>
    )
}
