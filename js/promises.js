"use strict";

const wait = number => {
    return new Promise((resolve, result) => {
        setTimeout(() => {
            if (number) {
                resolve()
            } else {
                result('Error');
            }
        }, number)
    })
};

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function getUserNames() {
    return fetch('https://api.github.com/users', {'headers': {'Authorization': 'token '+githubToken}})
        .then(response => response.json())
        .then(users => users.map(user => user.login))
}

// fetch('https://api.github.com/users', {headers: {'Authorization': 'token '+githubToken}})
//     .then(response => response.json());
//     // .then(users => console.log(users));

getUserNames().then((usernames) => {
    usernames.forEach((username)=>{
        return fetch('https://api.github.com/users/'+username+'/events', {'headers': {'Authorization': 'token '+githubToken}})
            .then(response => response.json())
            .then(user => user)
            .then(data => console.log(data[0].created_at));
    })
});