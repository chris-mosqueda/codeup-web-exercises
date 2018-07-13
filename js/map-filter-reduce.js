const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];
let lang3plus = users.filter((user) => {
    if(user.languages.length > 2){
        return user;
    }
});
//console.log(lang3plus);

let emails = users.map((user) => {
   return user.email;
});
//console.log(emails);

let userKeys = users.reduce((accumulate, user) => {
    accumulate[user.id] = user;
    return accumulate;
}, {});

console.log(userKeys);
