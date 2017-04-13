/**
 * Created by lujian on 2017-04-11.
 */

function Obj(a,b,c){
    this.a=a; //私有变量
    this.b=b;
    this.c=c
}
Obj.prototype.fun_a=function () {
    return this.b;
};
Obj.prototype.fun_b=function () {
    return this.c;
};
var o=new Obj('a','b','c');
console.log(o.a);
console.log(o.fun_a());
console.log(o.fun_b());

var p=new Obj('1','2','3');
console.log(p.a);
console.log(p.fun_a());
console.log(p.fun_b());

(function (a) {
    console.log(a.a)
})(p);
function greet() {
    var reply = [this.person, 'Is An Awesome', this.role].join(' ');
    console.log(reply);
}
var i = {
    person: 'Douglas Crockford', role: 'Javascript Developer'
};

greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer

console.log([].isPrototypeOf([]));