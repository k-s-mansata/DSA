/**
 * Implementation of the function that performs linear search
 */

function linearSearch(array, target)
{   
    const length = array.length;
    for(let index = 0; index < length; index++)
    {
        if(array[index] === target)
        {
            return index;
        }

    }
    return -1;
}