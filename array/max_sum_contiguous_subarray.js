module.exports = { 
 //param A : array of integers
 //return an integer
    maxSubArray : function(A){
        var maxSum=-9007199254740991;
        var maxTillHere=0;
        for(var i=0;i<A.length;i++){
            maxTillHere = maxTillHere + A[i];
            if(maxSum<maxTillHere){
                maxSum = maxTillHere;
            }
            if(maxTillHere<0){
                maxTillHere = 0;
            }
            
        }
        return maxSum;
    }
};