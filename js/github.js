class GitHub {

  static async getUser(user) {
        const client_id = '30ff2b938eb3f43bdb4f';
        const client_secret = '66c6bd4537fcff5425d55263f73156b1c7f7caaa';
        const reposLimit = 5;
        const repos_sort = 'created asc';
        try{
            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
            const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${reposLimit}&sort=${repos_sort}&${client_id}&client_secret=${client_secret}`);
            const profile = await profileResponse.json();
            const repos = await repoResponse.json();
      
            return {
               profile,
               repos
            }
        }catch(error){
            console.log(error);
        }
        
    }

}