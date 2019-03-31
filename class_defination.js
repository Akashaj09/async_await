class Human {
    constructor(gender) {
        this.gender = gender;
    }
}

class Persion extends Human{
    constructor(persion){
        super('Male');
        this.persion = persion;
    }

    get name(){
        return this.persion.name;
    }
}

const persion = new Persion({
    name: 'Akash',
    email: 'akashajaj09@gmail.com'
});

console.log(persion.name);