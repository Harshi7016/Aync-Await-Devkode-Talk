// navigation
const navItem = document.querySelector('.navigation');
navItem.addEventListener('click', activeNav);
navItem.addEventListener('onkeydown', function (event) {
  const { code } = event;
  if (code === 'ArrowRight') {
    console.log(1);
  }
});

function activeNav(event) {
  const { path } = event;
  console.log(path);
  document.querySelector('.active').classList.remove('active');
  path[1].classList.add('active');
}
