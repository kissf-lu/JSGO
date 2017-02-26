/**
 * Created by lujian on 2017-02-26.
 */

var value = 30;

var myObject = {
    value: 100,
    getValue:function () {
        var value=50;

        var foo = {
            value: 12,
            get:function () {

                console.log(this.value);
                return this.value;
            }

        };

        foo.get();

        return this.value;
    }

};


console.log((myObject.getValue)());
console.log(typeof []);
console.log([].constructor());
