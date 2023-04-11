function solution(n) {
    //n을 3진법으로 변환    


    //변환한 3진법을 역순으로 바꾸기

    //역순으로 바꾼 3진법을 10진법으로 변환함

    return parseInt(n.toString(3).split("").reverse().join(""), 3)
}