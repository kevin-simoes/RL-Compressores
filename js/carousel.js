let currentIndex = 0;

function moveCarousel(step) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  const currentItem = items[currentIndex];
  const previousIndex = currentIndex;

  currentIndex += step;

  if (currentIndex >= totalItems) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }

  const nextItem = items[currentIndex];

  if (step > 0) {
    currentItem.classList.add('next-exit');
    nextItem.classList.add('next-entry');
  } else {
    currentItem.classList.add('prev-exit');
    nextItem.classList.add('prev-entry');
  }

  setTimeout(() => {
    currentItem.classList.remove('active', 'next-exit', 'prev-exit');
    nextItem.classList.remove('next-entry', 'prev-entry');
    nextItem.classList.add('active');
  }, 500); 
}

