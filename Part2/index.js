console.log('Snake Eyes, Jolly Roger! Better get that cat back in the bag...');

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value
}