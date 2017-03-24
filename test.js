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
        array_t: []
    };

    test2Var(globeVar, [2,2]);

    console.log(
        globeVar.array_t
    );
    return globeVar;
}

function test2Var(arg, list) {
    var local_arg = arg;
    local_arg.array_t=list;
}

var returnarray = testVar();
//returnarray.array_t=[1,2];
//newvar.setArray([]);
//test2Var(returnarray, [3,3]);
console.log(
    returnarray.array_t
);