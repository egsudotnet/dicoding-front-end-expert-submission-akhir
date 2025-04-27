// src/scripts/pages/home/home-presenter.js
import { getAllStories } from '../../data/api';

export default class HomePresenter {
  constructor(view) {
    this.view = view;
  }

  async loadStories() {
    const response = await getAllStories();
    if (response.error) {
      this.view.showError(response.message);
    } else {
      this.view.displayStories(response.listStory);
    }
  }
}