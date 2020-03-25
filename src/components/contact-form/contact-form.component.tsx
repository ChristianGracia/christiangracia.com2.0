import * as Jump from "react-reveal/Jump";
import { Button } from "react-bootstrap";

import * as LightSpeed from "react-reveal/LightSpeed";
import styles from "./contact-form.module.scss";

import React from "react";

export function ContactForm(): JSX.Element {
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
              <div className={styles.formRow}>
                <input type="email" name="email" placeholder="Email" />
              </div>

              <div
                className={styles.formRow}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <textarea
                  rows={5}
                  cols={30}
                  name="body"
                  placeholder="Leave a message"
                />
              </div>
              <div className={styles.formRow}>
                <Button variant="danger" type="submit">
                  Send
                </Button>
              </div>
            </form>
          </Jump>
        </div>
      </div>
    </div>
  );
}
