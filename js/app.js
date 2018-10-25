const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', e => search(e.target.value));

const search = text => {
    if(text !==''){
        GitHub.getUser(text)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                setTimeout(() => {
                    UI.showAlert('Profile not found', 'alert alert-danger');
                console.log("alert");
                });
            } else {
                UI.showProfile(data.profile);
                UI.showRepos(data.repos);
            }     
            });
    }else{
       UI.clearProfile();
    }
}