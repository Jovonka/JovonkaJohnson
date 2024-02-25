



// Bubble creation
const bubbleContainer = document.querySelector('.bubbles');
for (let i = 0; i < 10; i++) {
  createBubble();
}

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const randomSize = Math.floor(Math.random() * 50) + 20;
  bubble.style.width = `${randomSize}px`;
  bubble.style.height = `${randomSize}px`;
  const randomPositionX = Math.random() * window.innerWidth;
  const randomPositionY = Math.random() * window.innerHeight;
  bubble.style.left = `${randomPositionX}px`;
  bubble.style.top = `${randomPositionY}px`;
  bubbleContainer.appendChild(bubble);

  // Remove bubble after animation ends
  bubble.addEventListener('animationiteration', function () {
    bubbleContainer.removeChild(bubble);
    createBubble();
  });
}

function scrollToProjects() {
  const projectListSection = document.getElementById('project-list');
  projectListSection.scrollIntoView({ behavior: 'smooth' });
}
function disableBodyScroll() {
  document.body.style.overflow = 'hidden';
}

function enableBodyScroll() {
  document.body.style.overflow = '';
}

