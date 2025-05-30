// src/scripts/pages/login/login-page.js
import LoginPresenter from './login-presenter';

export default class LoginPage {
  constructor() {
    this.presenter = new LoginPresenter(this);
  }

  async render() {
    return `
      <section class="container login-container vertical-center">
        <h1>Login</h1>
        <div id="progress-bar" class="progress-bar"></div>
        <form id="login-form" class="login-form">
          <label for="email">Email:</label>
          <input type="email" id="email" required>
          
          <label for="password">Password:</label>
          <input type="password" id="password" required>
          
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#/register">Register here</a></p>
      </section>
    `;
  }

  async afterRender() {
    const progressBar = document.getElementById('progress-bar');
    const loginForm = document.getElementById('login-form');
    loginForm.classList.add('show'); // Show the form with animation

    document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      progressBar.classList.add('active'); // Show progress bar
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      this.presenter.handleLogin(email, password);
    });
  }

  showError(message) {
    alert(message); // Show error message
  }

  redirectToHome() {
    window.location.hash = '/'; // Redirect to home page
  }
}