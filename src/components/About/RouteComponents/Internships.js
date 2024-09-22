import React from 'react'


import '../../../styles/About/Route/Internships.scss'

import Internship from '../../Internship';

import data from '../../../data'

const Internships = () => {
    return (
        <>
            <div className="internships">
                <div className="internships__container">
                    <div className="internships__header">
                        <h2 className="internships__number">0<span>3</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">I<span>nternships</span>.</h1>
                    </div>
                    <div className="internships__description">
                        <div className="internships__main-box">
                            {data.portfolio.internships.internship.map((content) => (
                                <Internship key={content.companyName} details={content} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Internships