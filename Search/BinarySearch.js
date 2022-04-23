/**
 * Implementation of the function that performs binary search
 * Array must be sorted to use binary search
 */

function binarySearch(array, target)
{
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    let middle;
    
    while(leftPointer <= rightPointer)
    {
        middle = Math.floor((leftPointer + rightPointer) / 2);
        if(array[middle] > target)
        {
            rightPointer = middle - 1;
        }
        else if(array[middle] < target)
        {
            leftPointer = middle + 1;
        }
        else
        {
            return middle;
        }
    }
    return - 1;
}