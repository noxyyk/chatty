import content from "./workspace/content.js";

export default function workspace() {
    return `
      <div class="">
        <div class="top title bar"><p>Title</p><button>close</button></div>
        ${content()}
        <div class="bottom flex bar"><p>post content</p><button>send</button></div>
      </div>
    `;
  }
  