const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const langs = users.filter(n => n.languages.length >= 3);
console.log(langs);

const emails = users.map(n => n.email);
console.log(emails);

const totalYears = users.reduce((total, years) => total + years.yearsOfExperience, 0);
console.log(totalYears);

const average = totalYears/users.length;
console.log(average);

const longEmail = users.reduce((previous, current) => {
    const currentEmail = current.email;
    if (currentEmail.length > previous.length){
        return currentEmail
    } else {
        return previous
    }
}, '');
console.log(longEmail);

const instructors = users.reduce((instruct, name, index, arr) => {
    if (index === arr.length-1){
        return `${instruct}${name.name}.`;
    }else {
        return `${instruct}${name.name}, `;
    }
}, 'Codeup instructors are: ');
console.log(instructors);

const unique = users.reduce(function(prev, current){
    const languages = current.languages;
    for (const lang of languages){
        prev.add(lang);
    }
    return prev;
}, new Set);
console.log(unique);