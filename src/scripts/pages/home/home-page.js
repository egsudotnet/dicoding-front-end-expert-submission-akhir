// src/scripts/pages/home/home-page.js
import HomePresenter from './home-presenter';
import L from 'leaflet'; // Ensure you have Leaflet installed

export default class HomePage {
  constructor() {
    this.presenter = new HomePresenter(this);
    this.map = null; // Initialize map variable
  }

  async render() {
    return `
      <section class="container">
        <div id="stories-list" class="stories-grid"></div>
        <div id="map" style="height: 400px;"></div> <!-- Main map container -->
      </section>
    `;
  }

  async afterRender() {
    await this.presenter.loadStories(); // Load stories using the presenter
  }

  displayStories(stories) {
    const storiesList = document.getElementById('stories-list');

    // Map through the stories and create HTML for each story
    const storiesHTML = stories.map(story => `
      <div class="story-item">
        <h2>${story.name}</h2>
        <p class="story-description">${story.description}</p>
        <img src="${story.photoUrl}" alt="${story.description}" />
        <p>Created at: ${new Date(story.createdAt).toLocaleDateString()}</p>
        <div class="story-map" id="map-${story.id}" style="height: 100px; width: 100%;"></div> <!-- Map container for each story -->
      </div>
    `).join('');

    storiesList.innerHTML = storiesHTML; // Insert the stories into the DOM

    // Initialize individual maps for each story
    stories.forEach(story => {
      this.initStoryMap(story);
    });
  }

  initMap(stories) {
    // Create a map instance
    this.map = L.map('map').setView([0, 0], 2); // Set initial view

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // Add markers for each story
    stories.forEach(story => {
      const marker = L.marker([story.lat, story.lon]).addTo(this.map);
      marker.bindPopup(`<b>${story.name}</b><br>${story.description}`);
    });

    // Fit the map to show all markers
    const group = L.featureGroup(stories.map(story => L.marker([story.lat, story.lon]))).addTo(this.map);
    this.map.fitBounds(group.getBounds());
  }

  initStoryMap(story) {
    // Create a map for each story
    const storyMap = L.map(`map-${story.id}`).setView([story.lat, story.lon], 13); // Set view to story location

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(storyMap);

    // Add a marker for the story
    L.marker([story.lat, story.lon]).addTo(storyMap)
      .bindPopup(`<b>${story.name}</b><br>${story.description}`);
  }

  showError(message) {
    const storiesList = document.getElementById('stories-list');
    storiesList.innerHTML = `<p>Error fetching stories: ${message}</p>`;
  }
}