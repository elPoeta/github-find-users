class UI {
    static showProfile(user) {
        UI.clearAlert();
        document.querySelector('#panel-profile').innerHTML = 
        `<article class="card-profile">
            <div class="avatar">
              <figure>
                <img src="${user.avatar_url}" alt="avatar-Github"/>
              </figure>
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
             </div>
            <div class="items">
            <ul class="list-items">
              <li class="badge badge-repos">Public Repos: ${user.public_repos}</li>
              <li class="badge badge-gists">Public Gits: ${user.public_gists}</li>
              <li class="badge badge-followers">Followers: ${user.followers}</li>
              <li class="badge badge-following">Following: ${user.following}</li>
             </ul>
             <ul class="list-group">
               <li class="list-group-item">Company: ${user.company}</li>
               <li class="list-group-item">Website/Blog: ${user.blog}</li>
               <li class="list-group-item">Ubication: ${user.location}</li>
               <li class="list-group-item">Member since: ${user.created_at}</li>
             </ul>
            </div>
        </article>
        <h3 class="page-heading mb-3">Latest Repositories</h3>
        <article id="repos"></article>`;
    }
    static showRepos(repos) {
        console.log(repos);
        let template = '';
        repos.forEach((repo) => {
            template += `<div class="card-repos">
            <div class="name-repo">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <ul class="list-repos">
            <li class="badge badge-repos">Stars: ${repo.stargazers_count}</li>
            <li class="badge badge-gists">Watchers: ${repo.watchers_count}</li>
            <li class="badge badge-followers">Forks: ${repo.forks_count}</li>
            </ul>
            </div>
            `;
        });          
        document.querySelector('#repos').innerHTML = template;

    }
   static clearProfile() {
        document.querySelector('#panel-profile').innerHTML = '';
        UI.clearAlert();
    }

   static showAlert(msg, className) {
        UI.clearAlert();
        const div = document.createElement('div');
        const container = document.querySelector('.search-bar');
        const buscar = document.querySelector('.search');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        container.insertBefore(div, buscar);
    }

    static clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}