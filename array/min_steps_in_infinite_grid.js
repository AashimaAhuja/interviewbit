module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //return an integer
    coverPoints : function(A, B){
            var len = A.length > B.length ? A.length : B.length;
            var sum = 0;
            for(var i =0,j=0; i<len-1;i++,j++){
               var max =  Math.max(Math.abs(A[i+1]-A[i]),Math.abs(B[i+1]-B[i]));
               sum = sum + max;
            }
            return sum;
    }
};
