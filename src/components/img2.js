import React from 'react';
import img2 from '../images/illustration-2.svg'
import profile_img from '../images/avatar-testimonial.jpg' ;
import card_img from "../images/icon-quotes.svg";

const Img2 = () => (
    <section className="section2">
      <div>
         <img className="img2" src={img2} alt="img2" />
      </div>
      <div className="sec2">
          <p className="pimg2"><b>Stay productive, wherever you are</b><br/>
          Never let location be an issue when accessing your files. 
          Fylo has you <br/>
          covered for all of your file storage needs.
          <br/>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
          <a href="#" target="_blank"> See how Fylo works</a>
            <div class="column">
              <div class="card">
                <img src={card_img} className="semicolon"/>
              <p className="sec2_p">Fylo has improved our team productivity by an order of magnitude. 
                Since making the switch our team has become a well-oiled collaboration machine.
              </p>
                <div className="card2">
                  <div>
                  <img className="card_img" src={profile_img} />
                  </div>
                  <div className="card_sec2">
                      <b>Kayle Burton <br/></b>
                    <div>CEO & Founder, Huddle </div>
                  
                  </div>
                </div>
              </div>
            </div>
         </div>           
    </section>
)
export default Img2;