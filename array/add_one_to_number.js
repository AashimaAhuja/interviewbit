module.exports = { 
 //param A : array of integers
 //return a array of integers
    plusOne : function(A){
        var len = A.length;
        var carry;
       for(var i = len-1;i>=0;i--){
           if(A[i] == 9){
               A[i] = 0;
               carry = 1;
           }
           else{
               A[i] = A[i] + 1;
               carry = 0;
               break;
           }
       }
       
       if(carry == 1){
           A.unshift(1);
       }
       var j = 0;
       while(A[j]==0){
          A.shift();
       }
       return A;
    }
};
