import React from "react";

function Footer() {
  return (
    <footer id="cont">
      <div className="top">
        <div className="top__boxs col-4">
          <i class="fa-solid fa-street-view"></i>
          <div className="top__boxs__body">
            <h5>Adress</h5>
            <span>2118 Thornridge Cir. Syracuse, Connecticut 35624</span>
          </div>
        </div>
        <div className="top__boxs col-4">
        <i class="fa-solid fa-phone-volume"></i>
          <div className="top__boxs__body">
            <h5>Lets talk us</h5>
            <span>(603) 555-0123 <br /> (603) 555-0123</span>
          </div>
        </div>
        <div className="top__boxs col-4">
        <i class="fa-regular fa-envelope"></i>
          <div className="top__boxs__body">
            <h5>Send us email</h5>
            <span>deanna.curtis@example.com</span><br />
            <span>deanna.curtis@example.com</span>
          </div>
        </div>
      </div>
      <div className="bttm">
        <span>© CodeeFly 2023 | All Rights Reserved</span>
        <ul>
          <li>Trams & Condition</li>
          <li>Privacy Policy</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
