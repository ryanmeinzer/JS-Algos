const data = require('./data.json')

// instantiate class called Dog
class Dog {

// class should have a variable with all instances of the dogs in there (array)
    static all = []

// add in a name, age and breed
    constructor(name, breed, age){
        // why isn't the id being defined upon creation? 
        this.name = name
        this.breed = breed
        this.age = age
    
        Dog.all.push(this)

    }

    // instance method to increase age of dog
    ageIncrement(){
        return this.age = this.age + 1
    }

    // render all dogs
    static printAllDogNames(){
        Dog.all.forEach(() => {
            console.log(this.name)
        })
    }

    // // create new Dog
    // newDog(dog.name, dog.breed, dog.age) {
    // new Dog(dog.name, dog.breed, dog.age)
    // }

}

console.log(data)

console.log(new Dog('john', 'husky', 33))
console.log(Dog.all)

function createDogsFromData() {
    for (let el in data.dogs) {
        new Dog(data.dogs[el].name, data.dogs[el].breed, data.dogs[el].age)
    }
}
createDogsFromData()

console.log(Dog.all)