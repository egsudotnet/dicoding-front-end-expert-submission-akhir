// src/scripts/pages/home/home-page.js
import { getAllStories } from '../../data/api';

export default class HomePage {
  async render() {
    return `
      <section class="container">
        <div id="stories-list" class="stories-grid"></div>
      </section>
    `;
  }

  async afterRender() {
    const storiesList = document.getElementById('stories-list');
    const response = await getAllStories(); // Fetch stories from the API

    if (response.error) {
      storiesList.innerHTML = `<p>Error fetching stories: ${response.message}</p>`;
      return;
    }

    // Map through the stories and create HTML for each story
    const storiesHTML = response.listStory.map(story => `
      <div class="story-item">
        <h2>${story.name}</h2>
        <p>${story.description}</p>
        <img src="${story.photoUrl}" alt="${story.description}" />
        <p>Created at: ${new Date(story.createdAt).toLocaleDateString()}</p>
        <p>Location: ${story.lat}, ${story.lon}</p>
      </div>
    `).join('');

    storiesList.innerHTML = storiesHTML; // Insert the stories into the DOM
  }
}