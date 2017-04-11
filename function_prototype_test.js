/**
 * Created by lujian on 2017-04-11.
 */

function Obj(){
    var a=0; //私有变量
    var fn=function(){ //私有函数

    }
}

var o=new Obj();
console.log(o.a); //undefined
console.log(o.fn); //undefined