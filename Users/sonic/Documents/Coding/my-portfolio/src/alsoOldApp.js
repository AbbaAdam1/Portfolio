// Assuming you have a function to determine which section is currently in view

function getCurrentSection() {
  // Get the current scroll position of the page
  const scrollPosition = window.scrollY;

  // Assuming each section has an ID, you can use those IDs to determine which section is currently in view
  const sections = document.querySelectorAll('section'); // Assuming your sections are defined using <section> elements

  let currentSection = null;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection = section.id;
    }
  });

  return currentSection;
}

// Add an event listener to update the styles when the page is scrolled
document.addEventListener('scroll', function() {
  const currentSection = getCurrentSection();

  // Assuming you have a way to identify the navigation items for each section
  const aboutNavItem = document.querySelector('.nav-about');
  const experienceNavItem = document.querySelector('.nav-experience');
  const projectsNavItem = document.querySelector('.nav-projects');

  // Remove active styles from all navigation items
  aboutNavItem.classList.remove('active');
  experienceNavItem.classList.remove('active');
  projectsNavItem.classList.remove('active');

  // Add active style to the corresponding navigation item
  if (currentSection === 'about') {
    aboutNavItem.classList.add('active');
  } else if (currentSection === 'experience') {
    experienceNavItem.classList.add('active');
  } else if (currentSection === 'projects') {
    projectsNavItem.classList.add('active');
  }
});