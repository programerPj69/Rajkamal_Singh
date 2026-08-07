import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faSquareCheck, faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faInstagram,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import '../../styles/Contact/Contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus({ loading: true, success: false, error: '' });

        const web3FormsAccessKey = '640155b4-8d22-4643-9df3-b2ce27e7564d';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: web3FormsAccessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`,
                    from_name: `${formData.name} (Rajkamal Portfolio)`,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ loading: false, success: true, error: '' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ loading: false, success: false, error: data.message || 'Failed to send message. Please try again.' });
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: 'Failed to send message. Please check your network connection and try again.' });
        }
    };

    return (
        <>
            <div className="contact" id='contact'>
                <div className="contact__header">
                    <h1>
                        <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">C</span>
                        <span data-aos="fade-down" data-aos-delay="200" data-aos-offset="200">O</span>
                        <span data-aos="fade-down" data-aos-delay="400" data-aos-offset="200">N</span>
                        <span data-aos="fade-down" data-aos-delay="600" data-aos-offset="200">T</span>
                        <span data-aos="fade-down" data-aos-delay="800" data-aos-offset="200">A</span>
                        <span data-aos="fade-down" data-aos-delay="1000" data-aos-offset="200">C</span>
                        <span data-aos="fade-down" data-aos-delay="1200" data-aos-offset="200">T</span>
                        <span data-aos="fade-down" data-aos-delay="1400" data-aos-offset="200">.</span>
                    </h1>
                </div>
                <div className="contact__container">
                    <div className="contact__details">
                        <div className="contact__form" data-aos="fade-up">
                            {status.success && (
                                <div className="contact__alert contact__alert--success" style={{
                                    background: 'rgba(0, 255, 255, 0.1)',
                                    border: '1px solid #00ffff',
                                    color: '#00ffff',
                                    padding: '12px 16px',
                                    borderRadius: '6px',
                                    marginBottom: '1.5em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <FontAwesomeIcon icon={faCheckCircle} size="lg" />
                                    <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                                </div>
                            )}

                            {status.error && (
                                <div className="contact__alert contact__alert--error" style={{
                                    background: 'rgba(255, 99, 71, 0.1)',
                                    border: '1px solid #ff6347',
                                    color: '#ff6347',
                                    padding: '12px 16px',
                                    borderRadius: '6px',
                                    marginBottom: '1.5em',
                                }}>
                                    <span>{status.error}</span>
                                </div>
                            )}

                            <form name="contact" onSubmit={handleSubmit}>
                                <p className="contact__form-group">
                                    <label htmlFor="name">Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        placeholder="Enter name"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="email">Email: </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="on"
                                        placeholder="Enter email"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="message">Concern: </label>
                                    <textarea
                                        name="message"
                                        id="contact__message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        cols="20"
                                        rows="5"
                                        placeholder="Type your message"
                                        required
                                    ></textarea>
                                </p>
                                <button
                                    type="submit"
                                    className="contact__send-btn"
                                    disabled={status.loading}
                                    style={{
                                        opacity: status.loading ? 0.7 : 1,
                                        cursor: status.loading ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {status.loading ? (
                                        <>
                                            <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: '6px' }} /> Sending...
                                        </>
                                    ) : 'Send'}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="contact__info" data-aos="fade-up">
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <div className="contact__info-details">
                            <ul>
                                <li> <FontAwesomeIcon icon={faLocationDot} size="2x" /><p><span>Address:&nbsp;&nbsp;</span>Dogari Kandai PO Tangsha, Chamoli, Uttarakhand 246401 🇮🇳</p></li>
                                <li> <FontAwesomeIcon icon={faPhone} size="2x" /><p><span>Phone:</span>&nbsp;&nbsp;(+91) 7060938254</p></li>
                                <li> <FontAwesomeIcon icon={faEnvelope} size="2x" /><p><span>Email:&nbsp;&nbsp;</span>mrcoder04@outlook.com</p></li>
                                <li> <FontAwesomeIcon icon={faSquareCheck} size="2x" /><span>AVAILABLE FOR AI & FULL-STACK PROJECTS</span></li>
                            </ul>
                        </div>
                        <div className="contact__social">
                            <p className="contact__linkedin">
                                <a href="https://www.linkedin.com/in/rajkamal-singh-8693aa2b3/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            </p>

                            <p className='contact__github'>
                                <a href="https://github.com/mrCoderPj04" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            </p>

                            <p className='contact__instagram'>
                                <a href="https://www.instagram.com/im.pj_prince_69?igsh=MWUya29tbmsxMzY2Mg==" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                            </p>
                            <p className='contact__facebook'>
                                <a href="https://www.facebook.com/prince.negipj.5" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /> </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

