import React from 'react'
import { Navbar } from '../components/Navbar'
import "./contact.css"

export const ContactUs = () => {
  return (
    <div className="contactus">
      <Navbar />
      <div className="contact">
        <img
          src="https://i.shgcdn.com/de7b06dd-1127-432d-957a-969e18292c33/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
        />
      </div>

      <div className="inputs">
        <div className="input2">
          <h1>Contact Our Customer Service Team</h1>
          <p>Name</p>
          <input type="text" />
          <br />

          <p>Email</p>
          <input type="text" />
          <br />

          <p>Subject</p>
          <input type="text" />
          <br />

          <p>Contact Reason</p>
          <input type="text" />
          <br />

          <p>How Can We Help</p>
          <input type="text" />
          <br />
          <h6>If inquiring about a repair please upload image(s) here.</h6>
          <p>Upload Files (6 files max, each file must be less than 3MB)</p>
          <button>Submit</button>
        </div>
      </div>
      <div style={{marginTop:"30px",marginBottom:"30px"}}>Powered by Kustomer</div>
    </div>
  );
}
