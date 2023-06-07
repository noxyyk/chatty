import Swal from 'sweetalert2';
import showChat from './chat.js';
import showTos from './tos.js';

export default function setupUvod() {
  document.querySelector('#app').innerHTML = `
    <div>
      <h1>Název Webu Super dikus magnus hinus kapradinus</h1>
      <button id="beginButton">Begin</button>
      <p>This is our super web site :D</p>
    </div>
  `;
  document.querySelector('#beginButton').addEventListener('click', showTos);
}
