import React from "react";
import img1 from '../images/illustration-1.svg'
const Img1 = () =>(
    <section className="sec1_container">
      <div>
        <img src={img1} alt="Img1" className="img1"/>
        </div>
       <div className="sec2_content">
            <h1 className="sec1_heading"><b>All your Files in one secure 
              <br/>location, accessible anywhere.</b></h1>
            <p className="sec1_para">Fylo stores your most important files in one secure location.
               Access <br/>
               them whenever you need, share and collobrate with friends, family,
             <br/> and co-workers.</p>
             <form className="form">
                <input className="input_img1" type="text"  placeholder="Enter your email.." ></input>
               <button  className="button_img1" type="submit" value="Submit">Get Started</button>
             </form>
             <br/>
        </div>
    </section>
)
export default Img1