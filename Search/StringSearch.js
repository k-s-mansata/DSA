/**
 * Implementation of the function that will count occurence of second string inside first string
 */

 function stringSearch(sourceString, targetString)
 {
     const sourceLength = sourceString.length;
     const targetLength = targetString.length;
     let count = 0;
     for(let i = 0; i < sourceLength - targetLength + 1; i++)
     {
         for(let j = 0; j < targetLength; j++)
         {
             if(sourceString[i + j] !== targetString[j])
                 break;
             if(j === targetLength - 1)
                 count++;
         }
     }
     return count;
 }