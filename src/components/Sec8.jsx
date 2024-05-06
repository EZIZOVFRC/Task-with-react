import React from "react";

function Sec8() {
  return (
    <section id="sec8">
      <div className="bllog">
        <div className="bllog__top">
        <div className="bllog__top__left">
          <span>MY BLOG</span>
          <h2>Unlocking the potential of your personal brand</h2>
        </div>
        <button>MORE BLOG+</button>
        </div>
        <div className="bllog__body">
            <div className="bllog__body__card col-4">
                <img src="https://zyan.vercel.app/images/blog/1.jpg" alt="" />
                <span className="date">31 December 2022</span>
                <div className="bllog__body__card__admin">
                <i class="fa-solid fa-user"></i> <span>By admin</span>
                <i class="fa-solid fa-comment"></i><span>Comments(05)</span>
                <h2>The standard personal My portfolio</h2>
                </div>
                
            </div>
            <div className="bllog__body__card col-4">
                <img src="https://zyan.vercel.app/images/blog/2.jpg" alt="" />
                <span className="date">31 December 2022</span>
                <div className="bllog__body__card__admin">
                <i class="fa-solid fa-user"></i> <span>By admin</span>
                <i class="fa-solid fa-comment"></i><span>Comments(05)</span>
                <h2>The standard personal My portfolio</h2>
                </div>
                
            </div>
            <div className="bllog__body__card col-4">
                <img src="https://zyan.vercel.app/images/blog/3.jpg" alt="" />
                <span className="date">31 December 2022</span>
                <div className="bllog__body__card__admin">
                <i class="fa-solid fa-user"></i> <span>By admin</span>
                <i class="fa-solid fa-comment"></i><span>Comments(05)</span>
                <h2>The standard personal My portfolio</h2>
                </div>
                
            </div>
        </div>
      </div>
    </section>
  );
}

export default Sec8;
