// src/scripts/pages/register/register-page.js
import RegisterPresenter from './register-presenter';

export default class RegisterPage {
  constructor() {
    this.presenter = new RegisterPresenter(this);
  }

  async render() {
    return `
      <section class="container login-container vertical-center">
        <h1>Register</h1>
        <div id="progress-bar" class="progress-bar"></div>
        <form id="register-form" class="login-form">
          <label for="name">Name:</label>
          <input type="text" id="name" required placeholder="Enter your name">
          
          <label for="email">Email:</label>
          <input type="email" id="email" required placeholder="Enter your email">
          
          <label for="password">Password:</label>
          <input type="password" id="password" required placeholder="Enter your password">
          
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="#/login">Login here</a></p>
      </section>
    `;
  }

  async afterRender() {
    document.getElementById('register-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      await this.presenter.handleRegister(name, email, password);
    });
  }

  showError(message) {
    alert(message); // Show error message
  }

  redirectToLogin() {
    window.location.hash = '/login'; // Redirect to login page
  }
}