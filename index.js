function setPowerOfTwoColumns() {
  const gridContainer = document.querySelector('.cards');
  const containerWidth = gridContainer.clientWidth;
  const columnWidth = 350; // Minimum width for each column
  let columns = Math.floor(containerWidth / columnWidth);
  let powerOfTwoColumns = 1;

  while (powerOfTwoColumns * 2 <= columns) {
    powerOfTwoColumns *= 2;
  }

  if (powerOfTwoColumns > columns) {
    powerOfTwoColumns /= 2;
  }

  gridContainer.style.gridTemplateColumns = `repeat(${powerOfTwoColumns}, 1fr)`;
}

window.addEventListener('resize', setPowerOfTwoColumns);
window.addEventListener('load', setPowerOfTwoColumns);

