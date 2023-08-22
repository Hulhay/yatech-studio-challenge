const pairSum = (a, m, k) => {
    let count = 0
    for (let i = 0; i < a.length-m+1; i++) {
        subArray = a.slice(i, i+m)
        if (containSum(subArray, k)) {
            count++
        }
    }
    return count
}

const containSum = (subArray, k) => {
    for (let i = 0; i < subArray.length; i++) {
        const complement = k - subArray[i]
        if (subArray.includes(complement) && i !== subArray.indexOf(complement)) {
            return true
        }
    }
    return false
}
