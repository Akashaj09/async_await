let users = [
    {
        id: 1,
        name: "Akash",
        email: "akashajaj09@gmail.com"
    },
    {
        id: 2,
        name: "Akash Aj",
        email: "akashajaj02@gmail.com"
    },
    {
        id: 3,
        name: "Akash Ahammad",
        email: "akashajaj07@gmail.com"
    },
    {
        id: 4,
        name: "Akash Bhuyian",
        email: "akashajaj08@gmail.com"
    }
];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        let user = users.find((user) => {
            return user.id === id;
        });
        if(user){
            resolve(user);
        }
        reject("User not found");
    });
}

const getUserName = async (user) => {
    let firstName = user.name.split(" ")[0].toLowerCase();
    let UserEmailDigit = user.email.replace(/[^0-9]/g, '');
    return firstName+UserEmailDigit;
}

const getName = async (userId) => {
    let user = await getUser(userId);
    let userName = await getUserName(user);
    user.user_name = userName;
    return user;
}

getName(1).then(name => console.log(name)).catch(error => console.log(error));