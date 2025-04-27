import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import AddPage from '../pages/add/add-page'; // Import the new AddPage
import LoginPage from '../pages/login/login-page'; // Import the LoginPage
import RegisterPage from '../pages/register/register-page'; // Import the RegisterPage


const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
  '/add': new AddPage(), // Add the new route
  '/login': new LoginPage(), // Add the login route
  '/register': new RegisterPage(), // Add the registration route
};

// Function to check if the token is valid
function isTokenValid() {
  const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
  // Add your logic to check if the token is expired or invalid
  return token !== null; // Simplified check, replace with actual validation logic
}

window.addEventListener('hashchange', () => {
  const route = window.location.hash.slice(1) || 'home';
  renderPage(route);
});

function renderPage(route) {
  const mainContent = document.querySelector('#main-content');
  const mainMenu = document.querySelector('#main-menu'); // Select the main menu

  // Check token validity before rendering the page
  if (!isTokenValid() && route !== '/login' && route !== '/register') {
    window.location.hash = '/login'; // Redirect to login page
    return;
  }
 
  // Hide or show the main menu based on the route
  if (route === '/login' || route === '/register') {
    mainMenu.style.display = 'none'; // Hide the menu on the login and register pages
  } else {
    mainMenu.style.display = 'block'; // Show the menu on other pages
  }

  switch (route) {
    case 'home':
      mainContent.innerHTML = '<h1>Home Page</h1>';
      break;
    case 'add':
      mainContent.innerHTML = '<h1>Add New Data</h1>';
      break;
    case 'login':
      mainContent.innerHTML = '<h1>Login Page</h1>'; // Render login page content
      break;
    case 'register':
      mainContent.innerHTML = '<h1>Register Page</h1>'; // Render register page content
      break;
    default:
      mainContent.innerHTML = '<h1>Page Not Found</h1>';
  }
}

export default routes;
