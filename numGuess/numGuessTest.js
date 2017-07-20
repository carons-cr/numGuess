/**
 * Created by cr on 7/18/17.
 */
'use strict';
var numGuessModule=require('./numGuess.js');
var sinon=require('sinon');
function get4A0B(){
    var stubRandoms = sinon.stub(numGuessModule.obj, 'getRandoms').returns('1234');
    var stubgetInput = sinon.stub(numGuessModule.obj, 'getInput').returns('1234');
    var expectResult='4A0B';
    var actualResult = numGuessModule.obj.numGuess();
    console.log(actualResult);
    var result=actualResult==expectResult?'test passed':'test failed';
    console.log(result);
    stubRandoms.restore();
    stubgetInput.restore();
}
get4A0B();

