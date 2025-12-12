import React from 'react';

const Footer = () => {
  // Determine if we are in a subdirectory (like /projects/) to adjust links
  // A simple check is to see if we are not at the root index.html
  // But for simplicity, using absolute paths starting with / works best for GitHub Pages User Sites
  // However, for local dev, / might be root.
  
  // Let's try to use relative paths based on location, or just absolute paths if we assume root deployment.
  // Since the user has "projects/goodscribe.html", going to home is "../index.html" or "/index.html".
  
  const isProjectPage = window.location.pathname.includes('/projects/');
  const homeLink = isProjectPage ? '../index.html' : '';
  const imgPath = isProjectPage ? '../img/icons8-fiverr-500.svg' : 'img/icons8-fiverr-500.svg';

  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__content">
                <div className="footer__brand">
                    <span className="footer__logo">Paul<span>ECL</span></span>
                    <p className="footer__tagline">Aspiring Computer Systems Engineer & Junior Fullstack Developer</p>
                </div>
                
                <div className="footer__links">
                    <a href={`${homeLink}#about`}>About</a>
                    <a href={`${homeLink}#experience`}>Experience</a>
                    <a href={`${homeLink}#skills`}>Skills</a>
                    <a href={`${homeLink}#projects`}>Projects</a>
                    <a href={`${homeLink}#contact`}>Contact</a>
                </div>
                
                <div className="footer__social">
                    <a href="https://github.com/Dexterpol-A21" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/paul-contreras-lobato-495b82232/" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.fiverr.com/s/XLzgZ0G" className="fiverr-link" aria-label="Fiverr">
                        <img src={imgPath} alt="Fiverr" className="fiverr-icon" />
                    </a>
                    <a href="mailto:paulconlob@gmail.com" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            
            <div className="footer__bottom">
                <p>&copy; 2025 Paul Eduardo Contreras Lobato. Some Rights Reserved.</p>
                <p>Designed & Built with passion and precision</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
