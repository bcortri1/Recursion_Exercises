/** product: calculate the product of an array of numbers. */

function product(nums) {
    let num = nums.pop();
    if (nums.length !== 0) {
        return num * product(nums);
    }
    else {
        return num;
    }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, best = -1) {
    if (i === words.length) { return best; }
    else {
        let wordLen = words[i].length;
        if (wordLen > best) {
            i++;
            return longest(words, i, wordLen);
        }
        else {
            i++;
            return longest(words, i, best);
        }
    }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = -1) {
    i++;
    if (i === str.length) { return "" }
    else {
        if (i % 2 === 0) {
            return str[i] + everyOther(str, i)
        }
        else {
            return everyOther(str, i)
        }
    }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
    if (i - str.length === 0) { return true }
    else {
        if (str[i] === str[str.length - 1 - i]) {
            return true && isPalindrome(str, i + 1)
        }
        else {
            return false && isPalindrome(str, i + 1)
        }
    }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = -1) {
    i++;
    if (i === arr.length) { return -1 }
    else {
        if (arr[i] === val) {
            return i;
        }
        else {
            return findIndex(arr, val, i)
        }
    }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length) {
    i--;
    if (i < 0) { return "" }
    else {
        return str[i] + revString(str, i);
    }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, resultArr = [], keys = Object.keys(obj)) {
    if (keys.length === 0) { return resultArr }
    else {
        let key = keys.pop();
        if (typeof obj[key] === "string") {
            resultArr.push(obj[key])
        }
        else if (typeof obj[key] === "object") {
            let newObj = obj[key];
            resultArr = gatherStrings(newObj, resultArr);
        }
        return gatherStrings(obj, resultArr, keys);
    }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
    if (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === val){
            return mid;
        }
        else{
            if (arr[mid] < val) {
                left = mid + 1;
            }
            else if (arr[mid] > val) {
                right = mid - 1;
            }
            return binarySearch(arr, val, left, right);
        }
    }
    return -1;
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch
};
