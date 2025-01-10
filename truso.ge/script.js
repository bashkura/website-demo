const images = [
    'tru23.jpg',
    'თრუსო6.webp',
    'თრუსო7.webp',
    'tr16.jpg',
    'tr22.jpg'

    
  ];
  
  let index = 0;
  
  function changeBackground() {
    const container = document.querySelector('.background-container');
    container.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length; // Loop back to the first image
  }
  
  setInterval(changeBackground, 3000); // Change every 5 seconds
  changeBackground(); // Initialize with the first image
  


  document.querySelectorAll('#grid-layout .btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const contentId = this.parentElement.getAttribute('data-content');
        displayBlankContent(contentId);
    });
});

 // Function to show a specific section and hide the others
 function showPage(pageId) {
  // Get all sections
  const sections = document.querySelectorAll('.section');
  const sectionRiding = document.querySelectorAll('.section-riding');
  // Hide all sections
  sections.forEach(section => {
      section.style.display = 'none';
  });
  sectionRiding.forEach(sectionRiding => {
    sectionRiding.style.display = 'none';
});
  // Show the selected section
  const activeSection = document.getElementById(pageId);
  if (activeSection) {
      activeSection.style.display = 'block';
  }
  const activeSectionRiding = document.getElementById(pageId);
  if (activeSectionRiding) {
    activeSectionRiding.style.display = 'block';
  }
}

// Show the home section by default
showPage('home');