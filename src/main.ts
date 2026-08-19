//import { invoke } from "@tauri-apps/api/core";
import type { Post } from "./types";
import { fauxPost } from "./temp";

function renderFeed(posts: Post[]) {
  const container = document.querySelector(".feed");
  if (!container) return;

  const postHTML = posts.map(post => {
    return `
      <article class="post-card">
         ${post.banner ? `
          <div class="image-container">
           <img class="banniere" src="${post.banner}" alt="${post.title}">
           <p class="auteurs-image">${post.autors.map(author => author.name).join(" x ")}</p>
          </div>`
        : ''}
        <div class="post-content">
        ${post.banner ? '' : `<p class="auteurs">${post.autors.map(author => author.name).join(" x ")}</p>`}
          <h3>${post.title}</h3>
          ${post.resume ? `<p>${post.resume}</p>` : ''}
          <p class="tags">
            ${post.tags.length > 0 ? post.tags.map(tag => `<span class="tag">#${tag}</span>`).join(" ") : ''}
          </p>
        </div>
    </article>
    `
  }).join("");

  container.innerHTML = postHTML;
}

window.addEventListener("DOMContentLoaded", () => {
  renderFeed(fauxPost);
});