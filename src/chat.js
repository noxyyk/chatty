import sidebar from './chat/sidebar.js';
import workspace from './chat/workspace.js';

export default function showChat() {
  document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="sidebar rightborder">
      ${sidebar()}
    </div>
    <div class="workspace">
      ${workspace()}
    </div>
  </div>
`;

  }
  