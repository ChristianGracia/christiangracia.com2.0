import React from "react";
import { NBackground } from "../../components/particles/nbackground/nbackground.component";
import { ContactForm } from "../../components/contact-form/contact-form.component";
import styles from "./contact.module.scss";

export function ContactPage(): JSX.Element {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.particleBackground}>
        <NBackground />
      </div>
      <div>
        <ContactForm />
        <div style={{ paddingBottom: 400 }}></div>
      </div>
    </div>
  );
}
