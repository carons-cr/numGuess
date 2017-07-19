/**
 * Created by cr on 7/18/17.
 */
function numGuess(numInput,num){
      var result;
      var countA=0;
      var countB=0;
      for(var i=0;i<num.length;i++){
        for(var j=0;j<numInput.length;j++){
          if((num.charAt(i)===numInput.charAt(j))&&(i===j)){
            countA++;
          }else if((num.charAt(i)===numInput.charAt(j))&&(i!==j)){
            countB++;
          }
        }
      }
      result=countA+'A'+countB+'B';
      return result;
}

