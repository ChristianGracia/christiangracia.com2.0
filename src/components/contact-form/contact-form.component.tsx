// import React, { Component } from "react";
import * as Jump from "react-reveal/Jump";
import { Button } from "react-bootstrap";
// import "./contact-page.styles.css";
import * as LightSpeed from "react-reveal/LightSpeed";
import styles from "./contact-form.module.scss";

import React from "react";

export function ContactForm() {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.contactPageContainer}>
        <div className="row" style={{}}>
          <i
            className="fas fa-mail-bulk"
            style={{ fontSize: 80, color: "white", marginTop: 30 }}
          ></i>
        </div>
        <LightSpeed left>
          <div style={{ marginTop: 20 }}>
            <span className={styles.formLabel}>Leave me a message!</span>
          </div>
        </LightSpeed>
        <div className={styles.contactFormContainer}>
          <Jump>
            <form action="https://sendpoint.io/id/gWFzbxh9O" method="POST">
              <div className="row form-row-aligner">
                <span className={styles.formLabel}>Email: </span>

                <input
                  type="email"
                  name="email"
                  //   value={this.state.email}
                  //   onChange={this.onChange}
                  placeholder="Email"
                />
              </div>

              <div className={styles.formRow}>
                <span className="form-label">Message</span>
              </div>

              <div className={styles.formRow}>
                <textarea
                  rows={4}
                  name="body"
                  placeholder="Leave a message"
                  //   value={this.state.body}
                  //   onChange={this.onChange}
                />
              </div>
              <div className={styles.formRow}>
                <Button
                  variant="danger"
                  type="submit"
                  //   onClick={e => {
                  //     if (body === "" || email === "") {
                  //       e.preventDefault();
                  //       window.alert("Please fill out form");
                  //     }
                  //   }}
                >
                  Send
                </Button>
              </div>
            </form>
          </Jump>
          <div style={{ paddingBottom: 600 }}></div>
        </div>
      </div>
    </div>
  );
}

// export default class Contact extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       body: "",
//       email: ""
//     };
//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   render() {
//     const { body, email } = this.state;
//     return (
//       <div className="contact-page-container">
//         <div className="row" style={{}}>
//           <i
//             className="fas fa-mail-bulk"
//             style={{ fontSize: 80, color: "white", marginTop: 30 }}
//           ></i>
//         </div>
//         <LightSpeed left>
//           <div style={{ marginTop: 20 }}>
//             <span className="form-label">Leave me a message!</span>
//           </div>
//         </LightSpeed>

//         <div className="contact-form-container">
//           <Jump>
//             <form action="https://sendpoint.io/id/gWFzbxh9O" method="POST">
//               <div className="row form-row-aligner">
//                 {this.state.email === "" ? null : (
//                   <span className="form-label">Email: </span>
//                 )}
//                 <input
//                   type="email"
//                   name="email"
//                   value={this.state.email}
//                   onChange={this.onChange}
//                   placeholder="Email"
//                 />
//               </div>
//               {this.state.body === "" ? null : (
//                 <div className="row form-row">
//                   <span className="form-label">Message</span>
//                 </div>
//               )}
//               <div className="row form-row">
//                 <textarea
//                   rows="4"
//                   cols="30"
//                   type="text"
//                   name="body"
//                   placeholder="Leave a message"
//                   value={this.state.body}
//                   onChange={this.onChange}
//                 />
//               </div>
//               <div className="row form-row">
//                 <Button
//                   variant="danger"
//                   type="submit"
//                   onClick={e => {
//                     if (body === "" || email === "") {
//                       e.preventDefault();
//                       window.alert("Please fill out form");
//                     }
//                   }}
//                 >
//                   Send
//                 </Button>
//               </div>
//             </form>
//           </Jump>
//           <div style={{ paddingBottom: 600 }}></div>
//         </div>
//       </div>
//     );
//   }
// }
