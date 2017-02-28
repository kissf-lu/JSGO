/**
 * Created by lujian on 2017-02-26.
 */

var list = [];
var x = 10;

function xfunc(x) {

    var x = (x+10);

    return x;
}

var myObject = {
    value: 100,
    getValue:function () {

        var foo = {
            value: 12,
            get:function () {

                return this.value;
            }

        };

        console.log(foo.get());

        return this.value;
    }
};


var SomeClass1 = function(){
    this.value = 10;
};

var SomeClass2 = function(){
    this.value = 20;
};



var myCreate = {
    sc1: new SomeClass1,
    sc2: new SomeClass2
};

x = xfunc(x);

console.log((typeof {'a':1.99,'b':2,'c':4}.a));
console.log(myCreate.sc1.value);
console.log(myCreate.sc2.value);
console.log("log:",x);
console.log("");