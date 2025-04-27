import { login } from '../../data/api';

export default class LoginPresenter {
  constructor(view) {
    this.view = view;
  }

  async handleLogin(email, password) {
    const response = await login(email, password);
    if (response.error) {
      this.view.showError(response.message);
    } else {
      this.view.redirectToHome();
    }
  }
}
