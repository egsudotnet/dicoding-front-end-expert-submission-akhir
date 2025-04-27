export default class AboutPage {
  async render() {
    return `
      <section class="about-container">
        <h1>About Me</h1>
        <p>Hello! I'm Egih Sugiatna, a passionate web developer with a focus on creating dynamic and responsive web applications. I have a strong background in software development and a keen interest in learning new technologies.</p>
        
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>RESTful APIs</li>
          <li>Version Control (Git)</li>
          <li>Responsive Web Design</li>
          <li>Agile Methodologies</li>
        </ul>

        <h2>Experience</h2>
        <h3>Web Developer at XYZ Company</h3>
        <p>June 2021 - Present</p>
        <p>Developing and maintaining web applications, collaborating with designers and backend developers to create seamless user experiences. I focus on writing clean, maintainable code and implementing best practices in web development.</p>

        <h3>Intern at ABC Corp</h3>
        <p>January 2021 - May 2021</p>
        <p>Assisted in the development of internal tools and applications, gaining hands-on experience in web development. Contributed to various projects and learned about the software development lifecycle.</p>

        <h2>Education</h2>
        <h3>Bachelor of Science in Computer Science</h3>
        <p>University of Technology, 2017 - 2021</p>
        <p>Focused on software development, algorithms, and data structures. Participated in various projects and hackathons to enhance my skills.</p>

        <h2>Contact</h2>
        <p>Email: <a href="mailto:egih@example.com">egih@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/egih-sugiatna-105790111/" target="_blank">linkedin.com/in/egih-sugiatna-105790111</a></p>
      </section>
    `;
  }

  async afterRender() {
    // Additional functionality can be added here if needed
  }
}
