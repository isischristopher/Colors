import 'bootstrap';
import '../styles/main.scss';

const hi = () => {
  console.log('hi');
};

const init = () => {
  document.getElementById('btn').addEventListener('click', hi);
};

init();
