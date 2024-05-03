import React from "react";
import FRCYoutube from "../assets/image/banner_shape.png"
function Nav() {
  return (
    <>
      <nav>
        <div className="left col-4">
          <a href="index.html">
            <img src="https://zyan.vercel.app/images/logo.png" alt="" />
          </a>
        </div>
        <div className="center col-4">
          <ul>
            <li>
              <select name="pets" id="pet-select">
                <option value="">HOME</option>
                <option value="Home 1">HOME 1</option>
                <option value="Home 2">HOME 2 </option>
                <option value="Home 3">HOME 3</option>
                <option value="Home 4">HOME 4</option>
                <option value="Home 4">HOME 5</option>
                <option value="Home 5">HOME 6</option>
              </select>
            </li>
            <li>
              <a href="">ABOUT_US</a>
            </li>
            <li>
              <a href="">SERVICES</a>
            </li>
            <li>
              <a href="">PROJECTS</a>
            </li>
            <li>
              <select name="pets" id="pet-select">
                <option value="">BLOG</option>
                <option value="Home 1">Blog 1</option>
                <option value="Home 2">Blog 2 </option>
                <option value="Home 3">Blog 3</option>
                <option value="Home 4">Blog 4</option>
                <option value="Home 4">Blog 5</option>
                <option value="Home 5">Blog 6</option>
              </select>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="right col-4">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
          >
            <i class="fa-solid fa-bars"></i>
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <img src="https://zyan.vercel.app/images/logo.png" alt="" />
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <h5>ABOUT US</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore et magna aliqua. Ut enim ad minim
                veniam laboris.
              </p>
              <h5>GET IN TOUCH</h5>
              <input type="text" placeholder="Your Name" /> <br />
              <input type="email" placeholder="Your Email" />
              <textarea
                name=""
                placeholder="Messagge"
                id=""
                cols="20"
                rows="2"
              ></textarea>
              <button>submit now</button>
            </div>
          </div>
        </div>
      </nav>
      <section id="bgc">
        <div className="leftt col-6">
          <h1>HI! I'M F.R.C!</h1>
          <p>
            I'm a passionate UI/UX designer with a mission to create delightful
            and intuitive digital experiences. With a strong foundation in
            design principles and a keen eye for detail, I specialize in
            translating complex ideas into user-friendly interfaces that
            captivate and engage.
          </p>
          <div className="leftt__buttons">
            <button className="b1">Download CV <i class="fa-solid fa-download"></i></button>
            <button className="b2"><i class="fa-solid fa-circle-play"></i>Whatch the video!</button>
          </div>
        </div>
        <div className="rightt col-6">
            <img className="anim" src={FRCYoutube} alt="" />
            <img className="ds" src="https://zyan.vercel.app/images/banner_img_1.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default Nav;
