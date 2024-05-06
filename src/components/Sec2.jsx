import React from "react";
import day from '../assets/image/daily.png'

function Sec2() {
  return (
    <section id="aboutus">
      <div className="about">
        <div className="about__left col-8">
          <div className="about__left__head">
            <span>ABOUT ME</span>
            <h2>Transforming visions into exceptional portfolios</h2>
          </div>
          <div className="about__left__body">
            <p>
              Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
              odit auting fugit sed thisnquia consequuntur magni dolores eos
              designer heresm qui ratione
            </p>
            <button>Download CV <i class="fa-solid fa-download"></i></button>
          </div>
        </div>
        <div className="about__right col-4">
            <div className="about__right__back"></div>
            <img className="i1" src="https://zyan.vercel.app/images/about_img.jpg" alt="" />
            <img className="i2" src={day} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Sec2;
