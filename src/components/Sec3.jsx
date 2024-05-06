import React from "react";
import p2 from "../assets/image/2.svg";
import p1 from "../assets/image/1.svg";
function Sec3() {
  return (
    <section>
      <div className="sec3">
        <div className="sec3__left col-6" >
          <h2>
            <span>Desing</span> and Innovation
          </h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            auting fugit sed thisnquia consequuntur magni dolores eos designer
            heresm qui ratione voluptatem sequi nesciuNeque porro quisquam est,
            oursqui dolorem ipsum quia dolor sit amet consectetur, adipisci
            velit, sed quia non numquam
          </p>
          <div className="sec3__left__cards col-6">
            <div className="sec3__left__cards__card">
                <img src={p1} alt="" />
                <h2>10k+</h2>
                <span>Completed Project</span>
            </div>
            <div className="sec3__left__cards__card">
                <img src={p2} alt="" />
                <h2>800+</h2>
                <span>Completed Project</span>
            </div>
          </div>
        </div>
        <div class="offcanvas-body frc1 col-6">
              <h5>GET TOUCH ME?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore et magna aliqua. Ut enim ad minim
                veniam laboris.
              </p>
              <input type="text" placeholder="Your Name" /> <br />
              <input type="email" placeholder="Your Email" /> <br />
              <input type="number" placeholder="Phone Number" />
              <textarea
                name=""
                placeholder="Messagge"
                id=""
                cols="20"
                rows="4"
              ></textarea>
              <button>submit now</button>
            </div>
      </div>
    </section>
  );
}

export default Sec3;
