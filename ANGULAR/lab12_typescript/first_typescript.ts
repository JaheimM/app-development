// explicit type
function greeter(username:string) {
    console.log(`Welcome to Typescript: ${username}`)
}

let user = "Peter Pan"
greeter(user)

//implicit type
let y = 12

console.log(y)

// explcot array (list)
let colors:string[] = ['red', 'blue', 'white']
console.log(colors)

//implicit array 
let numbers = [3, -9, 5]
console.log(numbers)

console.log("\n-------------Example 2: 'any' type ------------")
// use 'any' data type: allows all types
let a:any
a = 5;
console.log("a = 5", typeof(a))
a = "Peter Pan"
console.log("a = 'Peter Pan'", typeof(a))
a = false;
console.log("a = false", typeof(a));

console.log("\n-------------Example 3: 'unkwown' type ------------")
// 'unkown' is similar to 'any'
let b:unknown
b = 10
console.log("b = 10", typeof(b))
b = "Martha"
console.log("b = 'Martha'" , typeof(b))
b = true
console.log("b = true ", typeof(b))

console.log("\n-------------Example 4: 'enum' type ------------")
// 'enum' is a special class that represents a group or list of constant values (balues that can't be changed)
// 'enum' can use numerical or string constant
enum Countries {USA, Canada, Mexico}
let USA = Countries.USA
let Canada = Countries.Canada
let Mexico = Countries.Mexico

console.log(`Class object of Canada ${Canada}`)
console.log(`Class object of Canada ${Mexico}`)
console.log(`Class object of Canada ${USA}`)

console.log("\n-------------Example 5: data type classes ------------")
// If the data is explicit, you can directly use the method to the specific data type
let username:string = "Ann Smith"
let characters_username = username.length
console.log(`User ${username} had ${characters_username} characters`)

// If it is an implciit data type, we must cast it to the specific data type before applying a method:
let firstname = "Luisa"
// cast into string
firstname = <string>firstname
let character_firstname = firstname.length
console.log(`User ${firstname} had ${character_firstname} characters`)

console.log("\n-------------Example 6: return type function ------------")
function get_time():number{
    return new Date().getHours()
}
console.log(`The time is ${get_time()} h`)

console.log("\n-------------Example 7: void function ------------")
// void function does not return value
function greeting():void{
    console.log('Welcome to Angular data type!')
}

// call function
greeting()

console.log("\n-------------Example 8: function with parameter ------------")
function get_sum(num1:number, num2:number, name:string):string {
    let result:string = name + ", the sum is " + (num1+num2)
    return result
}
console.log(get_sum(2, 3, "Peter"))

console.log("\n-------------Example 9: optimal parameters ------------")
// the ? operator marks parameter as optinal.
function sum_total(n1:number, n2?:number):number {
    if(n2 !== undefined) {
        return (n1 + n2)
    } else {
        return 0
    }
}

console.log(`THe sum is ${sum_total(5, 9)}`)
console.log(`The sum is ${sum_total(5)}`)

console.log("\n-------------Example 10: spread syntax ------------")
//spread syntax is used to deconstruct an array

function get_average(...n:number[]) : number {
    let total = 0
    let average = 0
    for (let i = 0; i < n.length; i++) {
        total += n[i]
    }
    average = total /n.length;
    return average
}

console.log(`The average is ${get_average(-9, 6, 2)}`)

console.log("\n-------------Example 11: class ------------")
class Car {
    //define the data type
    brand: string
    model: string
    year_manufacture: number

    constructor(brand:string, model:string, year_manufacture: number) {
        this.brand = brand
        this.model = model
        this.year_manufacture = year_manufacture
    }

    year() {
        console.log(`the car was manufactured at ${this.year_manufacture}.`)
    }
}

// create a model for class Car
let usercar = new Car('Tesla', 'S', 2023)
// access data of the modal of the Card through 'usercar'
console.log(`Card brand = ${usercar.brand}`) // accessing 'brand' property
usercar.year() // accessing method 'year'


console.log("\n-------------Example 12: inheritance ------------")
// inheritance 
class Person {
    save() {
        console.log("Registration successful")
    }
}

class Customer extends Person {
    sale() {
        console.log('x items was sold')
    }
}

class Employee extends Customer {
    salary() {
        console.log('Salary paid')
    }
}

// create a modal for person
let person1 = new Person

//calling the method 'save()' of the modal 'person1'
console.log("Calling the method 'save()' of the modal 'person1'")
person1.save()

// create a modal for customer
let customer1 = new Customer
// calling the method 'sale()' of the modal 'customer1'
customer1.sale()
//calling the inherent method 'save()' through modal 'employee1'
console.log("Calling the method 'save()' of the modal 'customer1'")
customer1.save()

// create a modal for employee
let employee1 = new Employee
// calling the inherent method 'save()' through modal employement
console.log("Calling the method 'save()' of the modal 'employee1'")
employee1.save()