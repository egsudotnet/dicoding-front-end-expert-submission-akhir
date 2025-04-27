// src/scripts/pages/add/add-page.js
import AddPresenter from './add-presenter';

export default class AddPage {
  constructor() {
    this.presenter = new AddPresenter(this);
  }

  async render() {
    return `
      <section class="container login-container vertical-center">
        <h1 id="add-title">Add New Story</h1>
        <div id="progress-bar" class="progress-bar"></div>
        <form id="add-story-form" aria-label="Add Story Form">
          <label for="description">Description:</label>
          <textarea id="description" required aria-required="true" placeholder="Enter a brief description" rows="4"></textarea>
          
          <label for="photo">Photo:</label>
          <input type="file" id="photo" accept="image/*" required aria-required="true">
          <img id="image-preview" src="" alt="Image Preview" style="display: none; margin-top: 10px; max-width: 100%; border-radius: 4px;" />
          
          <button type="submit">Add Story</button>
        </form>
        <p>Want to go back? <a href="#/">Home</a></p>
      </section>
    `;
  }

  async afterRender() {
    const photoInput = document.getElementById('photo');
    const imagePreview = document.getElementById('image-preview');

    // Event listener for file input change
    photoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          imagePreview.src = event.target.result; // Set the image source to the file's data URL
          imagePreview.style.display = 'block'; // Show the image preview
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      }
    });

    document.getElementById('add-story-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const description = document.getElementById('description').value;
      const photo = document.getElementById('photo').files[0];
      const lat = null; // Replace with actual latitude if needed
      const lon = null; // Replace with actual longitude if needed
      await this.presenter.handleAddStory(description, photo, lat, lon);
    });
  }

  showError(message) {
    alert(message); // Show error message
  }

  redirectToHome() {
    window.location.hash = '/'; // Redirect to home page
  }
}