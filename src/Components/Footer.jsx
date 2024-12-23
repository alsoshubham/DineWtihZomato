import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container text-start justify-between">
        <div className="footer-section">
          <h4>About Zomato</h4>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Zomaverse</h4>
          <ul>
            <li>Zomato</li>
            <li>Blinkit</li>
            <li>District</li>
            <li>Feeding India</li>
            <li>Hyperpure</li>
            <li>Zomato Live</li>
            <li>Zomaland</li>
            <li>Weather Union</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>For Restaurants</h4>
          <ul>
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Learn More</h4>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social Links</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
          <div className="app-links">
            <img
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              alt="Download on the App Store"
            />
            <img
              src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              alt="Get it on Google Play"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. © 2008-2024 Zomato™ Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
