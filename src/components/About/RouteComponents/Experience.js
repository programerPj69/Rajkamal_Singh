import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>Senior AI & Full-Stack Engineer</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;2021 - PRESENT</h3>
                                <ul>
                                    <p>Responsibilities & Key Highlights -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Designing & developing enterprise web applications using MERN (MongoDB, Express, React, Node.js), Next.js, and Python.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Architecting high-performance microservices, REST APIs, gRPC, and real-time WebSockets logic.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Integrating AI/ML models and automated data visualization pipelines into interactive dashboards.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Optimizing database schemas and server logic across SQL, MongoDB, and Redis.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>Software & Systems Engineering</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;2020 - 2024</h3>
                                <ul>
                                    <p>Responsibilities & Achievements -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Developed open-source web platforms, image editors, fitness trackers, and receipt generator utilities.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Mastered C/C++, Java, Python, JavaScript, and TypeScript software engineering paradigms.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Collaborated on multi-developer repositories utilizing Git, Docker, and CI/CD pipelines.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience