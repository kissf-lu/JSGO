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


//add numbers
var myCreate = {
    sc1: new SomeClass1,
    sc2: new SomeClass2
};

x = xfunc(x);

console.log((typeof {'a':1.99,'b':2,'c':4}.a));
console.log(myCreate.sc1.value);
console.log(myCreate.sc2.value);
console.log("log:",x);

var globeVar = {
    'alertWinStr':'',
    'ID':{
        'DeleteID' : 'DeleteID',
        'UpdateID' : 'UpdateID',
        'InsertID' : 'InsertID'
    },
    'init': function (initParam) {
        this.alertWinStr = initParam.alertWinStr;

    },
    'set': function (srtParam) {
        this.alertWinStr = srtParam.alertWinStr;
    }

};

var newvar = globeVar;

newvar.set({'alertWinStr':'varTest2'});
globeVar.set({'alertWinStr':'varTest3'});

console.log(
    globeVar.alertWinStr
);
console.log(
    newvar.alertWinStr
);