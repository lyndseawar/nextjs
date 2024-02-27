import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Welcome Section */}
      <section id="welcome" className={styles.section}>
        <h1>Hello, I&apos'm lyndsea</h1>
        <p>
          Welcome to my personal space on the web where I share my work, ideas,
          and passion for technology.
        </p>
      </section>

      {/* About Me Section */}
      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>[Your About Me content goes here...]</p>
      </section>

      {/* Resume Section */}
      <section id="resume" className={styles.section}>
        <h2>Resume</h2>
        <p>[Your Resume content or link to download the resume goes here...]</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <p>
          [Your projects display or information about your projects goes
          here...]
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <p>[Your contact information or form goes here...]</p>
      </section>
    </main>
  );
}
