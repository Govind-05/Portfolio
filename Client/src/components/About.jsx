import "../assets/styles/about.css"

export default function About() {
  return (
    <>
        <div className="about-container" id="about-section">
            <div className="about-image-container">
                <div className="about-image"><img src="/src/assets/images/about-me-image.jpg" alt="" /></div>
            </div>
            <div className="about-info">
                <div className="about-title">ABOUT ME</div>
                <div className="about-subheading">A dedicated Full-Stack Web Developer based in Delhi, India.&nbsp;📍</div>
                <div className="about-details">I am a full stack web developer currently pursuing my undergraduate studies at Delhi Technological University. With expertise in technologies like React, Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, and jQuery, I can create dynamic and interactive web applications. My skill set allows me to handle both front-end and back-end development tasks, providing seamless user experiences. Continuously learning and staying updated with the latest advancements in web development, I am passionate about utilizing efficient tools and techniques to deliver high-quality projects.</div>
                <div className="tech-stack-container">
                    <div className="skill-title">SKILLS:</div>
                    <div className="skill-icons react-container"><img className="react-icon" src="/src/assets/images/react-icon.png" alt="" /><span>React</span></div>
                    
                    <div className="skill-icons"><img src="/src/assets/images/node-icon.png" alt="" /><span>Node.js</span></div>
                   
                    <div className="skill-icons"><img src="/src/assets/images/mongodb-icon.png" alt="" /><span>MongoDB</span></div>
                    
                    <div className="skill-icons"><img src="/src/assets/images/html-icon.png" alt="" /><span>HTML</span></div>
                    
                    <div className="skill-icons"><img src="/src/assets/images/css-icon.png" alt="" /><span>CSS</span></div>
                    
                    <div className="skill-icons"><img src="/src/assets/images/javascript-icon.png" alt="" /><span>JS</span></div>
                    
                </div>
            </div>
        </div>
        <div className="horizontal-line"></div>
    </>
  )
}
