//menu object.
let menu= {
    _course: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    get appetizers(){
        return this._course.appetizers;
    },
    set appetizers(appetizerIn){
        this._course.appetizers = appetizerIn;
    },
    get mains(){
        return this._course.mains;
    },
    set mains(mainIn){
        this._course.mains = mainIn;
    },

    get desserts(){
        return this._course.desserts;
    },
    
    set desserts(dessertIn){
        this._course.desserts = dessertIn;
    },

    get coureses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },

    //create a method called .addDishToCourse()
    addDishToCourse(courseName, dishName, dishPrice){
        const dishs = {
            name: courseName,
            price: dishPrice
        };
        this._course[courseName].push(dishs);
    },

    //Create a method inside the menu object called .getRandomDishFromCourse()
    getRandomDishFromCourse(courseName){
        const dishes = menu._course[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal(){
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizers.price + mains.price + desserts.price;

        return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name} The price is $${totalPrice}`;
    }


};


menu.addDishToCourse('appetizers', 'bruschetta', 6);
menu.addDishToCourse('appetizers', 'chicken tikka', 6.75);
menu.addDishToCourse('appetizers', 'momos', 5);
menu.addDishToCourse('mains', 'pasta', 6.75);
menu.addDishToCourse('mains', 'biryani', 7);
menu.addDishToCourse('mains', 'dal-roti', 7.25);
menu.addDishToCourse('desserts', 'icecream', 6.5);
menu.addDishToCourse('desserts', 'pastry', 6.5);
menu.addDishToCourse('desserts', 'rasgulla', 7);


let meal = menu.generateRandomMeal();
console.log(meal);