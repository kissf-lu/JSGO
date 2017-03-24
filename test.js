/**
 * Created by lujian on 2017-02-26.
 */

//------ main.js ------

function testVar() {
    let globeVar = {
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
    return globeVar;
}

function test2Var(arg) {

}

var returnarray = testVar();
//newvar.setArray([]);
console.log(
    returnarray.array_t
);