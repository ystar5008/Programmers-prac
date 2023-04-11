function solution(arr) {
    return arr.filter((ele, i) => ele !== arr[i - 1])
}