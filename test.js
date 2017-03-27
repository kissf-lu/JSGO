/**
 * Created by lujian on 2017-02-26.
 */

//------ main.js ------

function DocReady() {
    var globeVar = {
        alertWinStr:'--',
        array_t:[],
        ID:{
            DeleteID : 'DeleteID',
            UpdateID : 'UpdateID',
            InsertID : 'InsertID'
        },
        init: function (initParam) {
            this.alertWinStr = initParam;
        },
        set: function (srtParam) {
            this.alertWinStr = srtParam;
        },
        setArray: function (arrayData) {
            this.array_t=arrayData;
        }
    };
    //
    globeVar.init('init');
    globeVar.init('set');

    test2Var(globeVar, [2,2]);
    test3Var(globeVar, [3,3]);

    console.log(
        globeVar['array_t']
    );

    return globeVar;
}

function test2Var(arg, list) {
    //console.log(arguments[1]);
    var local_arg = arg;
    //var get_list = list;
    local_arg.array_t=list;
}

function test3Var(arg, list) {
    //console.log(arguments[1]);
    var local_arg = arg;
    local_arg['array_t']=list;
}

//var returnarray = testVar();
//returnarray.array_t=[1,2];
//newvar.setArray([]);
//test2Var(returnarray, [3,3]);
//console.log(
//    returnarray.array_t
//);
DocReady();

function makeAdder(x) {
    return function add (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    this.getMessage = function() {
        return this.message;
    };
}).call(MyObject.prototype);







// Example 1: Creating a new class (declaration-form)
// ===============================================================

// A base class is defined using the new reserved 'class' keyword
class Polygon {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    // Simple class instance methods using short-hand method
    // declaration
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

    // We will look at static and subclassed methods shortly
}



// Classes are used just like ES5 constructor functions:
let p = new Polygon(300, 400);
p.sayName();
console.log('The width of this polygon is ' + p.width);




// Example 2: Creating a new class (expression-form)
// ===============================================================

// Our Polygon class above is an example of a Class declaration.
// ES6 classes also support Class expressions - just another way
// of defining a new class. For example:
const MyPoly = class Poly {

    getPolyName() {
        console.log('Hi. I was created with a Class expression. My name is ' +
            Poly.name);
    }
};

let inst = new MyPoly();
inst.getPolyName();
//inst.sayName;

// Example 3: Extending an existing class
// ===============================================================

// Classes support extending other classes, but can also extend
// other objects. Whatever you extend must be a constructor.
//
// Let's extend the Polygon class to create a new derived class
// called Square.
class Square extends Polygon {
    constructor(length) {
        // The reserved 'super' keyword is for making super-constructor
        // calls and allows access to parent methods.
        //
        // Here, it will call the parent class' constructor with lengths
        // provided for the Polygon's width and height
        super(length, length);
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
    }

    // Getter/setter methods are supported in classes,
    // similar to their ES5 equivalents
    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this.area = value;
    }
}

let s = new Square(5);

s.sayName();
console.log('The area of this square is ' + s.area);

