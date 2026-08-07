import React, { useEffect, useState } from 'react';

import '../../styles/Hero/Hero.scss';
import Myself from '../../assets/images/myself.png';

const Hero = () => {
  const [avatarUrl, setAvatarUrl] = useState('https://github.com/mrCoderPj04.png');

  useEffect(() => {
    // Dynamic GitHub profile picture fetch so changes on GitHub instantly update here!
    fetch('https://api.github.com/users/mrCoderPj04')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.avatar_url) {
          setAvatarUrl(data.avatar_url);
        }
      })
      .catch(() => {
        // Fallback to github.com redirect URL
        setAvatarUrl('https://github.com/mrCoderPj04.png');
      });

    const alphbets = document.getElementsByClassName('hero__alphabet');
    for (let i = 0; i < alphbets.length; i++) {
      alphbets[i]?.addEventListener('animationend', function () {
        alphbets[i].classList.remove('alphabet-animated');
      });

      alphbets[i]?.addEventListener('mouseover', function () {
        alphbets[i].classList.add('alphabet-animated');
      });
    }
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__intro-box">
            <p className="hero__intro-title">
              <span className="hero__intro-line" data-aos="fade-down"></span>
              Hello, I am Rajkamal Singh
            </p>
            <p className="hero__animated-alphabet-box">
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                F
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                U
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                L
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                L
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                S
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                T
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                A
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                C
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                K
              </span>
              <span
                className="hero__developer-text"
                data-aos="zoom-out-down"
                data-aos-delay="2000"
              >
                <span className="hero__dev-text">& AI Engineer</span>
              </span>
            </p>
            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="2000"
            >
              <p>
                Senior AI Engineer & <span>Full-Stack Developer</span> with 3+ years of experience building high-performance microservices, interactive dashboards, enterprise web applications, and AI integrations.
              </p>
            </div>

            <div className="hero__buttons">
              <a
                className="hero__know-btn"
                href="https://github.com/mrCoderPj04"
                target="_blank"
                rel="noreferrer"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                GitHub Profile
              </a>
              <a
                className="hero__contact-btn"
                href="#contact"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero__image" data-aos="zoom-in" data-aos-delay="200">
            <img 
              src={avatarUrl} 
              alt="Rajkamal Singh - GitHub Profile"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = Myself;
              }}
              style={{
                borderRadius: '50%',
                border: '4px solid #00ffff',
                boxShadow: '0 0 25px rgba(0, 255, 255, 0.6), 0 0 45px rgba(121, 40, 202, 0.4)',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

