<<<<<<< HEAD
const baseURL = 'https://api.github.com/repos';
const repo = 'js-ajax-fetch-lab';
const learnUser = 'learn-co-curriculum';
=======
const baseURL = 'https://api.github.com';
>>>>>>> e8c2d34609089a8883806536deb56ab26c7f2788
const user = 'cdallasanta';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = 'b3a0bf87389d199613939033d863e21e84ea09f0';
  return '';
}

function forkRepo() {
<<<<<<< HEAD
  fetch (baseURL + '/' + learnUser + '/' + repo + '/forks', {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(data => showResults(data))
=======
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch (repo, {
    method: "POST",
    headers: {
      Authentication: `token ${}`
    }
  })
    .then(response => response.json())
    .then(data => showResults(data));
>>>>>>> e8c2d34609089a8883806536deb56ab26c7f2788
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const link = `<a href=${json.html_url}>Link to fork</a>`;
  document.getElementById('results').innerHTML = link;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(baseURL + '/' + user + '/' + repo + '/issues', {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  });
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(baseURL + '/' + user + '/' + repo + '/issues', {
    method: "GET",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response=> response.json())
    .then(data => console.log(data))
}
