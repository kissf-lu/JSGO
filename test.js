/**
 * Created by lujian on 2017-02-26.
 */

//------ main.js ------

function testVar() {
    var globeVar = {
        alertWinStr:'',
        array_t:[],
        ID:{
            DeleteID : 'DeleteID',
            UpdateID : 'UpdateID',
            InsertID : 'InsertID'
        },
        init: function (initParam) {
            this.alertWinStr = initParam.alertWinStr;
        },
        set: function (srtParam) {
            this.alertWinStr = srtParam.alertWinStr;
        },
        setArray: function (arrayData) {
            this.array_t=arrayData;
        }
    };
    var func2Dic = {
        array_f2: globeVar.array_t
    };
    test2Var(func2Dic);

    return func2Dic;
}

function test2Var(arg) {
    arg.array_f2=[3,4];
}

var returnarray = testVar();
//returnarray.array_t=[1,2];
//newvar.setArray([]);
test2Var(returnarray);
console.log(
    returnarray.array_f2
);