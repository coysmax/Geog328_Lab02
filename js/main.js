// Safely get the element with the class "icon" (may be missing in some pages)
let icon = document.getElementsByClassName("icon")[0];
if (icon) {
  // Add an event listener for the 'click' event on the icon element
  icon.addEventListener('click', responsive_control);
}

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

// Accordion behaviour (W3Schools-style)
document.addEventListener('DOMContentLoaded', function() {
  let acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      this.classList.toggle('active');
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
});

// Section counter: count top-level sections (h3 headings in .content)
document.addEventListener('DOMContentLoaded', function() {
  try {
    const content = document.querySelector('.content');
    if (content) {
      const h3s = content.querySelectorAll('h3');
      const countEl = document.getElementById('section-count');
      if (countEl) countEl.textContent = h3s.length;
    }
  } catch (e) {
    console.error('Section counter error:', e);
  }
});
