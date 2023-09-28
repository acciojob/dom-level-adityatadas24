//your JS code here. If required.
// Function to determine the DOM level of an element with a given ID
function getDOMLevel(elementId) {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) {
    alert("Element with ID " + elementId + " not found.");
    return;
  }

  let domLevel = 0;
  let currentElement = targetElement;

  // Traverse up the DOM hierarchy until the root HTML element is reached
  while (currentElement !== document.documentElement) {
    currentElement = currentElement.parentElement;
    domLevel++;
  }

  // Add 1 to account for the root HTML element
  domLevel++;

  alert("The level of the element is: " + domLevel);
}

// Call the function with the element ID "level"
getDOMLevel("level");
