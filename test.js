/**
 * Created by lujian on 2017-02-26.
 */

var value = 30;

var myObject = {
    value: 100,
    getValue:function () {

        console.log(this.value); // 输出 100

        // 输出 { value: 100, getValue: [Function] }，
        // 其实就是 myObject 对象本身
        console.log(this);

        return this.value;
    }

};

console.log(myObject.getValue());
