import "../assets/styles/about.css"
import aboutMeImage from "../assets/images/about-me-image.jpg"
import reactIconImage from "../assets/images/react-icon.png"
import nodeIconImage from "../assets/images/node-icon.png"
import mongodbIconImage from "../assets/images/mongodb-icon.png"
import htmlIconImage from "../assets/images/html-icon.png"
import cssIconImage from "../assets/images/css-icon.png"
import javascriptIconImage from "../assets/images/javascript-icon.png"

export default function About() {
    return (
        <>
            <div className="about-container" id="about-section">
                <div className="about-image-container">
                    <div className="about-image"><img src={aboutMeImage} alt="" /></div>
                </div>
                <div className="about-info">
                    <div className="about-title">ABOUT ME</div>
                    <div className="about-subheading">A dedicated Full-Stack Web Developer based in Delhi, India.&nbsp;📍</div>
                    <div className="about-details">I am a full stack web developer currently pursuing my undergraduate studies at Delhi Technological University. With expertise in technologies like React, Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, and jQuery, I can create dynamic and interactive web applications. My skill set allows me to handle both front-end and back-end development tasks, providing seamless user experiences. Continuously learning and staying updated with the latest advancements in web development, I am passionate about utilizing efficient tools and techniques to deliver high-quality projects.</div>
                    <div className="tech-stack-container">
                        <div className="skill-title">SKILLS:</div>

                        <div className="skill-icons-container">

                            <div className="skill-icons react-container"><img className="react-icon" src={reactIconImage} alt="" /><span>React</span></div>

                            <div className="skill-icons"><img src={nodeIconImage} alt="" /><span>Node.js</span></div>

                            <div className="skill-icons"><img src={mongodbIconImage} alt="" /><span>MongoDB</span></div>

                            <div className="skill-icons"><img src={htmlIconImage} alt="" /><span>HTML</span></div>

                            <div className="skill-icons"><img src={cssIconImage} alt="" /><span>CSS</span></div>

                            <div className="skill-icons"><img src={javascriptIconImage} alt="" /><span>JS</span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
        </>
    )
}
