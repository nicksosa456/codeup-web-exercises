"use strict";

const wait = number => {
    return new Promise((resolve,) => {
        setTimeout(resolve, number);
    })
};

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function getUserNames() {
    return fetch('https://api.github.com/users', {'headers': {'Authorization': 'token '+githubToken}})
        .then(response => response.json())
        .then(users => users.map(user => user.login))
}

getUserNames().then((usernames) => {
    usernames.forEach((username)=>{
        return fetch('https://api.github.com/users/'+username+'/events', {'headers': {'Authorization': 'token '+githubToken}})
            .then(response => response.json())
            // .then(data => console.log(data[0].created_at));
    })
});

const getCommit = username => {
    return fetch('https://api.github.com/users/'+username+'/events', {'headers': {'Authorization': githubToken}})
        .then(response => response.json())
        .then(user => {
            for (let i = 0; i <= user.length; i++){
                if (user[i].type === 'PushEvent') {
                    console.log(user[i].created_at);
                    break;
                }
            }
        })
        // .then(log => console.log(log))
};

getCommit('nicksosa456');