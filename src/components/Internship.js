import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Internship = (props) => {
    return (
        <>
            <div className="internships__box">
                <h2><p>{props.details.companyName}</p><p>{props.details.role}</p></h2>
                <h3><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp; &nbsp;{props.details.duration}</h3>
                <ul>
                    <p>{props.details.introText}</p>
                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset={props.details.offsetValue}>
                        <span>{props.details.keyPointOne}</span>
                    </li>
                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset={props.details.offsetValue}>
                        <span>{props.details.keyPointTwo}</span>
                    </li>
                    <li data-aos='fade-right' data-aos-delay='600' data-aos-offset={props.details.offsetValue}>
                        <span>{props.details.keyPointThree}</span>
                    </li>
                    <li data-aos='fade-right' data-aos-delay='800' data-aos-offset={props.details.offsetValue}>
                        <span>{props.details.keyPointFour}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Internship