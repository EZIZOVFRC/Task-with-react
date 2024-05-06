import React from "react";
import crown from "../assets/image/crown.svg";
import p2 from "../assets/image/2.svg";
import p1 from "../assets/image/1.svg";

function Sec1() {
  return (
    <section id="srvc">
      <div className="service">
        <div className="service__header">
          <span>MY SERVICE</span>
          <h2>Crafting stories through design and innovation</h2>
        </div>
        <div className="service__body">
          <div className="service__body__box col-4">
            <img src={crown} alt="" />
            <h5>WEBSITE DESIGN</h5>
            <p>
              Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
              odit auting fugit sed thisnquia consequuntur magni dolores eos
              designer heresm qui
            </p>
          </div>
          <div className="service__body__box col-4">
            <img src={p1} alt="" />
            <h5>LOGO DESING</h5>
            <p>
              Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
              odit auting fugit sed thisnquia consequuntur magni dolores eos
              designer heresm qui
            </p>
          </div>
          <div className="service__body__box col-4">
            <img src={p2} alt="" />
            <h5>APP DEVELOPMENT</h5>
            <p>
              Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
              odit auting fugit sed thisnquia consequuntur magni dolores eos
              designer heresm qui
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec1;
