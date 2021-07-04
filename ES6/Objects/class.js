//class declaration allows only methods(propery which holds function's value)
//that means u cant save non-function value in there

class Rabbit {
    constructor(type){
        this.type = type;
    }
    speak(phrase){
        console.log(`
        The ${this.type} rabbit says ${phrase}
        `);
    }
};

let whiteRabbit = new Rabbit('white');
whiteRabbit.speak(`I need to eat!!`);