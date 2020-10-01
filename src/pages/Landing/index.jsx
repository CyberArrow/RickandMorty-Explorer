import React from 'react';
import { Link } from 'react-router-dom';

/* import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg'; */

/* import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'; */

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <h2>Rick and Morty Explorer</h2>
          <h3>Descubra mais sobre os personagens da série</h3>
        </div>

        <div className="buttons-container">
          <Link to="/characterlist" className="look">
            Ver personagens
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
