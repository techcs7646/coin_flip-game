const coin = document.getElementById('coin');
const settingsIcon = document.querySelector('.settings');
const colorOptions = document.getElementById('colorOptions');
const headsCountElem = document.getElementById('headsCount');
const tailsCountElem = document.getElementById('tailsCount');
const flipButton = document.getElementById('flipButton');


let headsCount = 0;
let tailsCount = 0;

// Show/hide color options
settingsIcon.addEventListener('click', () => {
  colorOptions.style.display = colorOptions.style.display === 'block' ? 'none' : 'block';
});

// Change background color
document.querySelectorAll('.color-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    document.body.style.backgroundColor = e.target.dataset.color;
  });
});

// Flip the coin
flipButton.addEventListener('click', () => {
  const isHeads = Math.random() < 0.5;
  
 
  coin.classList.add('spin');
  
  // Delay result until spin ends
  setTimeout(() => {
    coin.classList.remove('spin');
    if (isHeads) {
      coin.src = 'https://en.numista.com/catalogue/photos/inde/2607-original.jpg'; 
      headsCount++;
      headsCountElem.textContent = headsCount;
    } else {
      coin.src = 'tail.png'; // Show tails image
      tailsCount++;
      tailsCountElem.textContent = tailsCount;
    }
  }, 300); 
});
