const wait = number => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, number);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const githubUser = (username) => {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {Authorization: 'token 248df09b480aeb355152a21169a5148c1bf89afd'}})
        .then(response => response.json())
        .then(data => console.log(data[0].created_at));
};

githubUser("chris-mosqueda");

// const githubUser = (username) => {
//     return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {Authorization: 'token 248df09b480aeb355152a21169a5148c1bf89afd'}})
//         .then(response => response.json())
//         .catch(error => console.error(error));
// };
//
// githubUser("chris-mosqueda").then((data) => {
//     console.log(data[0].created_at);
// });

