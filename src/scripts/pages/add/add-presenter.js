import { addStory } from '../../data/api';

export default class AddPresenter {
  constructor(view) {
    this.view = view;
  }

  async handleAddStory(description, photo, lat, lon) {
    const response = await addStory(description, photo, lat, lon);
    if (response.error) {
      this.view.showError(response.message);
    } else {
      this.view.redirectToHome(); // Redirect or show success message
    }
  }
}
