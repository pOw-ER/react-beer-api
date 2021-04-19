import React from "react";

function Contact(props) {
  return (
    <form action="">
      <h2 className="question">Any Questions? Send us a massage</h2>
      <br />

      <input className="inputName" type="text" placeholder="Name" />
      <input className="inputPhone" type="text" placeholder="JohnDoe@123.com" />
      <textarea
        className="inputTxt"
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="Massage"
      ></textarea>
      <input className="sendBtn" type="button" value="send" />
    </form>
  );
}

export default Contact;
