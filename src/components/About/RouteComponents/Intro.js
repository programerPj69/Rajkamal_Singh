import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Rajkamal Singh</span> (@mrCoderPj04)</p>
                        <p data-aos='fade-right' data-aos-delay='200'>Senior AI Engineer & Full-Stack Systems Engineer based in Chamoli, Uttarakhand, India 🇮🇳.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>Passionate developer with 3+ years of experience architecting high-performance web applications, scalable microservices, and AI integrations.</p>
                        <p data-aos='fade-right' data-aos-delay='600'>Proficient across full-stack MERN (MongoDB, Express, React, Node.js), Next.js, C/C++, Java, Python, SQL, REST APIs, and WebSockets.</p>
                        
                        <div className="about-intro__emoji">🚀</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro