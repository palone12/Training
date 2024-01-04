## Objects in JavaScript

#### Declaring Objects

### Object Literals - Make non singleton objects

#### Properties in objects is stored in form of key value pair

##### const JSUser =

{

    name:'Pranay',
    age:24,
    location:'Nagpur'

     }

## Accessing Objects

#### using dot(.) or [] square brackets

##### const obj = {name:'Pranay'}

##### Accessing Name - console.log(obj.name)

#### Object,freeze(obj)

#### Stop propagation of changes

## Object Assign

### IS static method that combine one or more sources to achieve target object

#### ex - const obj = {1:'a} const obj2 = {2:'b'}

### const newObj = Object.assign({} , obj, obj2)

## DE structuring of Objects

## const course = {

    name:'Python',
    fess:500,
    duration:'6months'

}

#### const {name} = course // this is the DE structuring of the object
