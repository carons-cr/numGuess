/**
 * Created by cr on 7/18/17.
 */
'use strict';
//const readlineSync=require('readline-sync');
var obj={
    getRandoms:getRandoms,
    getInput:getInput,
    numGuess:numGuess
};
function getRandoms(){
    var str='';
    for(var i=0;str.length<4;i++){
        var randoms=parseInt(Math.random()*9)+'';
        if(str.indexOf(randoms)===-1){
            str+=randoms;
        }
    }
    console.log(str);
    return str;
}
function getInput(){
    var str='1234';
    console.log(str);
    return str;
}
function numGuess(){
    var result;
    var countA=0;
    var countB=0;
    var num=obj.getRandoms();  //this调用
    var numInput=obj.getInput();
    //var numInput=readlineSync.question('')
    for(var i=0;i<numInput.length;i++){
        if(numInput[i]===num[i]){
            countA++;
        }
        if(num.indexOf(numInput[i])!=-1){
            countB++;
        }
    }
    countB=countB-countA;
    result=countA+'A'+countB+'B';
    console.log(result);
    return result;
}
module.exports.obj=obj;
//module.exports.getRandoms=getRandoms;
//module.exports.getInput=getInput;
//module.exports.numGuess=numGuess;
numGuess();//加此行代码会报错，错误提示为this为undefine,但如果使用好obj就不会报错了
