import "../assets/styles/project.css"
import bolnaaImage from "../assets/images/bolnaa-homepage.png"
import millioImage from "../assets/images/millio-homepage.png"
import filmlandImage from "../assets/images/filmland-homepage.png"


export default function Projects() {
  return (
    <>
      <div className="project-heading" id="projects-sections"><span>PROJECTS</span></div>
      {/* Project 1 - BOLNAA*/}
      <div className="project-container" id="bolnaa-container">
        <div className="project-details-container">
          <div className="project-title"><span>BolNAA - A real time chat application</span></div>
          <div className="project-details"><span>BolNAA is a responsive, real-time chat experience where users can send and receive messages instantly, thanks to the use of WebSockets and the seamless integration of React, Node.js, Express, and MongoDB.</span></div>
          <div className="project-tech-stack">
            <button className="project-tech-stack-btn">REACT</button>
            <button className="project-tech-stack-btn">EXPRESS</button>
            <button className="project-tech-stack-btn">SOCKET.IO</button>
            <button className="project-tech-stack-btn">MONGODB</button>
            <button className="project-tech-stack-btn">HTML</button>
            <button className="project-tech-stack-btn">CSS</button>
          </div>
          <div className="project-links-container">
            <button className="project-tech-stack-btn project-links-btn-live"><a href="https://bol-naa-chat-application.vercel.app" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>View Project</a></button>
            <button className="project-tech-stack-btn project-links-btn-git"><a href="https://github.com/Govind-05/BolNAA-Chat-Application" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>Github</a></button>
          </div>
        </div>
        <div className="project-image-container">
          <a href="https://bol-naa-chat-application.vercel.app" target="_blank"><div className="project-image"><img src={bolnaaImage} alt="" /></div></a>
        </div>
      </div>

      {/* Project 2 MILLIO*/}
      <div className="project-container">
        <div className="project-details-container">
          <div className="project-title"><span>Millio - A video call application</span></div>
          <div className="project-details"><span>Millio offers a video call application that leverages WebRTC for real-time communication between users. React handles the client-side interface, Express manages the server-side logic and API endpoints, MongoDB stores relevant data, and Bcrypt provides authentication capabilities for user accounts. </span></div>
          <div className="project-tech-stack">
            <button className="project-tech-stack-btn">WEBRTC</button>
            <button className="project-tech-stack-btn">BCRYPT</button>
            <button className="project-tech-stack-btn">REACT</button>
            <button className="project-tech-stack-btn">EXPRESS</button>
            <button className="project-tech-stack-btn">MONGODB</button>
            <button className="project-tech-stack-btn">HTML</button>
            <button className="project-tech-stack-btn">CSS</button>
          </div>
          <div className="project-links-container">
            <button className="project-tech-stack-btn project-links-btn-live"><a href="https://millio-a-video-chat-application.vercel.app" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>View Project</a></button>
            <button className="project-tech-stack-btn project-links-btn-git"><a href="https://github.com/Govind-05/Millio--A-video-chat-application" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>Github</a></button>
          </div>
        </div>
        <div className="project-image-container">
          <a href="https://millio-a-video-chat-application.vercel.app/" target="_blank"><div className="project-image"><img src={millioImage} alt="" /></div></a>
        </div>
      </div>


      {/* Project 3 FILMLAND*/}
      <div className="project-container" id="filmland-container">
        <div className="project-details-container">
          <div className="project-title"><span>FilmLand - Movie & Tv shows catalogue</span></div>
          <div className="project-details"><span>Filmland is a website that utilizes the TMDB API to gather data about movies and TV shows. Express.js handles the server-side logic and routing, MongoDB stores user-related data and favorites, EJS renders dynamic HTML templates based on the retrieved data, and Passport.js manages user authentication and authorization. </span></div>
          <div className="project-tech-stack">
            <button className="project-tech-stack-btn">EJS</button>
            <button className="project-tech-stack-btn">EXPRESS</button>
            <button className="project-tech-stack-btn">PASSPORT.JS</button>
            <button className="project-tech-stack-btn">MONGODB</button>
            <button className="project-tech-stack-btn">HTML</button>
            <button className="project-tech-stack-btn">CSS</button>
          </div>
          <div className="project-links-container">
            <button className="project-tech-stack-btn project-links-btn-live"><a href="https://film-land-production.up.railway.app" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>View Project</a></button>
            <button className="project-tech-stack-btn project-links-btn-git"><a href="https://github.com/Govind-05/Film-Land" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>Github</a></button>
          </div>
        </div>
        <div className="project-image-container">
          <a href="https://film-land-production.up.railway.app" target="_blank"><div className="project-image"><img src={filmlandImage} alt="" /></div></a>
        </div>
      </div>
      <div className="horizontal-line"></div>
    </>
  )
}
