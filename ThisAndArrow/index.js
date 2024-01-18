const person = {
    name:'Pranay',
    email:'alonepranay@gmail.com',
    print : function () {
        console.log(this)
       console.log(`${this.name } and ${this.email} are details of the person `)
    } 
}

person.print();


// Difference in Arrow function and normal function 
