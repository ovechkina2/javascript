const arrowUsers = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>" //може так і треба,але я створила копію без зайвого символу (>)
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"2dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

arrowUsers.filter(user =>{
     const pattern = /^[\w]+@(gmail|yahoo)\.com$|^[\w]+\.[\w]+@(gmail|yahoo)\.com$/g; // з записом [a-zA-Z0-9_] я заплуталась тому переписала на \w

    const matches = user.email.match(pattern);
    if (matches){
        console.log(matches)
    }
    console.log (`Чи пpоходить пошта ${user.email} перевірку:`+ pattern.test(user.email))
});







