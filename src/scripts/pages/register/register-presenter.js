import { register } from '../../data/api';

export default class RegisterPresenter {
  constructor(view) {
    this.view = view;
  }

  async handleRegister(name, email, password) {
    const response = await register(name, email, password);
    if (response.error) {
      this.view.showError(response.message);
    } else {
      this.view.redirectToLogin(); // Redirect to login page on success
    }
  }
}
