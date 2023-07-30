const products = document.querySelectorAll(".product");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const screenshotBtn = document.getElementById("screenshot-btn");
// const copyTextBtn = document.getElementById("copy-text-btn");

const hotButs = document.getElementById('hotButs');
const icedButs = document.getElementById('icedButs');
const frappeButs = document.getElementById('frappeButs');
const iClassicButs = document.getElementById('iClassicButs');
const iMilkTeaButs = document.getElementById('iMilkTeaButs');
const iPremiumButs = document.getElementById('iPremiumButs');
const fClassicButs = document.getElementById('fClassicButs');
const fMilkTeaButs = document.getElementById('fMilkTeaButs');
const fPremiumButs = document.getElementById('fPremiumButs');

// Function to update the screenshot button state based on cart count
function updateScreenshotButtonState() {
  if (cartCount.textContent === '0') {
    screenshotBtn.disabled = true;
    screenshotBtn.style.backgroundColor = 'gray';
    screenshotBtn.style.borderColor = 'gray';
  } else {
    screenshotBtn.disabled = false;
    screenshotBtn.style.backgroundColor = ''; // Reset to default background color
  }
}

// Call the function to set the initial state of the screenshot button
updateScreenshotButtonState();

// Create a MutationObserver to watch for changes in cartCount element
const observer = new MutationObserver(function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      updateScreenshotButtonState();
    }
  }
});

// Start observing the cartCount element for changes
observer.observe(cartCount, { childList: true });

hotButs.addEventListener('click', () => {
  // Set Button 1 to active state
  hotButs.classList.add('active-buts');

  // Reset Button 2 to inactive state
  icedButs.classList.remove('active-buts');
  frappeButs.classList.remove('active-buts');

});

icedButs.addEventListener('click', () => {
  // Set Button 2 to active state
  icedButs.classList.add('active-buts');

  // Reset Button 1 to inactive state
  hotButs.classList.remove('default');
  hotButs.classList.remove('active-buts');
  frappeButs.classList.remove('active-buts');
});

frappeButs.addEventListener('click', () => {
  // Set Button 2 to active state
  frappeButs.classList.add('active-buts');

  // Reset Button 1 to inactive state
  hotButs.classList.remove('default');
  hotButs.classList.remove('active-buts');
  icedButs.classList.remove('active-buts');
});


iClassicButs.addEventListener('click', () => {
  iClassicButs.classList.add('active-buts');
  fClassicButs.classList.add('active-buts');

  iMilkTeaButs.classList.remove('active-buts');
  fMilkTeaButs.classList.remove('active-buts');
  
  iPremiumButs.classList.remove('active-buts');
  fPremiumButs.classList.remove('active-buts');
});

iMilkTeaButs.addEventListener('click', () => {
  iMilkTeaButs.classList.add('active-buts');
  fMilkTeaButs.classList.add('active-buts');

  iClassicButs.classList.remove('default');
  fClassicButs.classList.remove('default');

  iClassicButs.classList.remove('active-buts');
  fClassicButs.classList.remove('active-buts');
  
  iPremiumButs.classList.remove('active-buts');
  fPremiumButs.classList.remove('active-buts');
});

iPremiumButs.addEventListener('click', () => {
  iPremiumButs.classList.add('active-buts');
  fPremiumButs.classList.add('active-buts');

  iClassicButs.classList.remove('default');
  fClassicButs.classList.remove('default');

  iClassicButs.classList.remove('active-buts');
  fClassicButs.classList.remove('active-buts');

  iMilkTeaButs.classList.remove('active-buts');
  fMilkTeaButs.classList.remove('active-buts');
});

fClassicButs.addEventListener('click', () => {
  iClassicButs.classList.add('active-buts');
  fClassicButs.classList.add('active-buts');

  iMilkTeaButs.classList.remove('active-buts');
  fMilkTeaButs.classList.remove('active-buts');
  
  iPremiumButs.classList.remove('active-buts');
  fPremiumButs.classList.remove('active-buts');
});

fMilkTeaButs.addEventListener('click', () => {
  iMilkTeaButs.classList.add('active-buts');
  fMilkTeaButs.classList.add('active-buts');

  iClassicButs.classList.remove('default');
  fClassicButs.classList.remove('default');

  iClassicButs.classList.remove('active-buts');
  fClassicButs.classList.remove('active-buts');
  
  iPremiumButs.classList.remove('active-buts');
  fPremiumButs.classList.remove('active-buts');
});

fPremiumButs.addEventListener('click', () => {
  iPremiumButs.classList.add('active-buts');
  fPremiumButs.classList.add('active-buts');

  iClassicButs.classList.remove('default');
  fClassicButs.classList.remove('default');

  iClassicButs.classList.remove('active-buts');
  fClassicButs.classList.remove('active-buts');

  iMilkTeaButs.classList.remove('active-buts');
  fMilkTeaButs.classList.remove('active-buts');
});


let cart = [];

document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-button");
  const subCategoryButtons = document.querySelectorAll(".sub-category-button");
  const coffeeSections = document.querySelectorAll(".coffee-list-section");
  const subCategorySections = document.querySelectorAll(".classic, .milk-tea, .premium");

  // Helper function to show an element
  function showElement(element) {
    element.style.display = "flex";
  }

  // Helper function to hide an element
  function hideElement(element) {
    element.style.display = "none";
  }

  
  // Show the selected category section and hide the rest
  function showCategorySection(category) {
    coffeeSections.forEach((section) => {
      if (section.getAttribute("data-category") === category) {
        showElement(section);
      } else {
        hideElement(section);
      }
    });
  }

  // Show the selected sub-category section and hide the rest
  function showSubCategorySection(subCategory) {
    subCategorySections.forEach((section) => {
      if (section.classList.contains(subCategory)) {
        showElement(section);
      } else {
        hideElement(section);
      }
    });
  }

  // Add click event listeners to category buttons
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      showCategorySection(category);
    });
  });

  // Add click event listeners to sub-category buttons
  subCategoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const subCategory = this.getAttribute("data-sub-category");
      showSubCategorySection(subCategory);
    });
  });
});

function createTableCell(tag, textContent) {
  const cell = document.createElement(tag);
  cell.innerHTML = textContent;
  return cell;
}

function updateCart() {
  const cartTableBody = document.getElementById("cart-items");
  cartTableBody.innerHTML = "";

  let totalCount = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    const row = document.createElement("tr");
    row.appendChild(createTableCell("td", item.name.replace(/ - /g, '<br>')));
    row.appendChild(createTableCell("td", item.size));
    row.appendChild(createTableCell("td", `${item.price.toFixed(2)}`));

    const quantityCell = document.createElement("td");
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = item.quantity;
    quantityInput.min = "1";
    quantityInput.addEventListener("change", () => {
      const newQuantity = parseInt(quantityInput.value);
      updateQuantity(item.name, item.size, newQuantity);
    });
    quantityCell.appendChild(quantityInput);
    row.appendChild(quantityCell);

    const subtotalCell = createTableCell("td", `${(item.price * item.quantity).toFixed(2)}`);
    row.appendChild(subtotalCell);

    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "<i class='far fa-trash-alt'></i>";
    removeButton.addEventListener("click", () => {
      removeItem(item.name, item.size);
    });
    removeCell.appendChild(removeButton);
    row.appendChild(removeCell);

    cartTableBody.appendChild(row);

    totalCount += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  cartCount.textContent = totalCount;
  document.getElementById("total-amount").textContent = `Php ${totalPrice.toFixed(2)}`;
}

function updateQuantity(name, size, newQuantity) {
  const item = cart.find(item => item.name === name && item.size === size);
  if (item) {
    item.quantity = Math.max(1, newQuantity);
    updateCart();
  }
}

function showNotification(productName, size) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = `${size} - ${productName} has been added to the cart!`;
  document.body.appendChild(notification);

  // Automatically remove the notification after a few seconds
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000);
}

function addToCart(productName, size, price, quantity) {
  const existingItem = cart.find(item => item.name === productName && item.size === size);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name: productName, size, price, quantity });
  }
  updateCart();

  // Show notification when a product is added to the cart
  showNotification(productName, size);
}

function removeItem(name, size) {
  cart = cart.filter(item => !(item.name === name && item.size === size));
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

products.forEach(product => {
  const sizeButtons = product.querySelectorAll(".size-buts button");
  const productName = product.querySelector("h2").textContent;

  sizeButtons.forEach(button => {
    const size = button.dataset.size;
    const price = parseFloat(button.dataset.price);
    button.addEventListener("click", () => {
      const quantity = 1; // Set default quantity as 1 when adding from product list
      addToCart(productName, size, price, quantity);
    });
  });
});

document.getElementById("clear-cart").addEventListener("click", clearCart);

// Arrow key functionality for quantity change in the cart
document.addEventListener("keydown", event => {
  if (event.key === "ArrowUp") {
    const currentItem = cartItems.querySelector(":hover");
    if (currentItem) {
      const itemName = currentItem.textContent.match(/^(.*) -/)[1];
      const item = cart.find(item => item.name === itemName);
      if (item) {
        item.quantity++;
        updateCart();
      }
    }
  } else if (event.key === "ArrowDown") {
    const currentItem = cartItems.querySelector(":hover");
    if (currentItem) {
      const itemName = currentItem.textContent.match(/^(.*) -/)[1];
      const item = cart.find(item => item.name === itemName);
      if (item) {
        item.quantity = Math.max(1, item.quantity - 1);
        updateCart();
      }
    }
  }
});

// Copy text button functionality
// function copyCartText() {
//   const cartText = cartItems.textContent;
//   if (navigator.clipboard && navigator.clipboard.writeText) {
//     navigator.clipboard.writeText(cartText)
//       .then(() => {
//         alert('Cart content copied to clipboard!');
//       })
//       .catch(error => {
//         console.error('Copy failed:', error);
//       });
//   } else {
//     console.warn('Clipboard API not supported in this browser.');
//   }
// }

// copyTextBtn.addEventListener("click", copyCartText);


// Take screenshot of the cart
document.getElementById("screenshot-btn").addEventListener("click", function() {
  const inputName = document.getElementById("inputName").value;
  const inputMobile = document.getElementById("inputMobile").value;
  const inputRoom = document.getElementById("inputRoom").value;

  // Check if any of the inputs are empty
  if (inputName === '' || inputMobile === '' || inputRoom === '') {
      alert("Please fill in all the required fields (Name, Mobile, Room).");
      return; // Do not proceed with the screenshot if any field is empty
  }
  
  // Select the element you want to capture
  const elementToCapture = document.getElementById("cart");

  // Use html2canvas library to create a screenshot
  html2canvas(elementToCapture).then(function(canvas) {
    // Convert the canvas to an image data URL
    const screenshotData = canvas.toDataURL();

    // Create a temporary link and trigger the download
    const link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = screenshotData;
    link.click();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product");
  const popups = document.querySelectorAll(".popup");
  const closeButton = document.querySelectorAll(".popup .close");
  const clickTimeLimit = 300; // Time limit in milliseconds (adjust as needed)
  let clickCount = 0;
  let clickTimer;

  function showIngredientsPopup(popup, ingredients) {
    popup.querySelector("h3").innerText = `${ingredients}`;
    popup.style.display = "block";
  }

  function hideIngredientsPopup(popup) {
    popup.style.display = "none";
  }

  function resetClickCount() {
    clickCount = 0;
    clearTimeout(clickTimer);
  }

  products.forEach((product, index) => {
    product.addEventListener("click", () => {
      clickCount++;
      if (clickCount === 1) {
        clickTimer = setTimeout(resetClickCount, clickTimeLimit);
      } else if (clickCount === 3) {
        clearTimeout(clickTimer);
        const productName = product.querySelector("h2").innerText;
        showIngredientsPopup(popups[index], productName);
        resetClickCount();
      }
    });

    closeButton[index].addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the click event from reaching the parent (product) div
      hideIngredientsPopup(popups[index]);
    });
  });
});

function isInApp() {
  const userAgent = navigator.userAgent.toLowerCase();
  const inAppUserAgents = [
    "fb", // Facebook in-app browser
    "line", // Line in-app browser
    "twitter", // Twitter in-app browser
    "instagram", // Instagram in-app browser
    "wechat", // WeChat in-app browser
  ];

  return inAppUserAgents.some((ua) => userAgent.includes(ua));
}

// Call the function and show a notification based on the result
const isRunningInApp = isInApp();
if (isRunningInApp) {
  alert("You are running in an in-app environment.");
}

