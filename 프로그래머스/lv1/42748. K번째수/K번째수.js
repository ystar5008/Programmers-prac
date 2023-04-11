function solution(array, commands) {
    //commands[0][0] = 2  commands[0][1] = 5  commands[0][2] = 3 
    //commands[1][0] = 4  commands[1][1] = 4  commands[1][2] = 1
    //commands[2][0] = 1  commands[1][1] = 7  commands[1][2] = 3
    let answer = []
    let arr = null

    //array를 commands[0][0]번째부터commands[0][1]번째까지 자름 slice
    for (let i = 0; i < commands.length; i++) {
        arr = array.slice((commands[i][0]) - 1, commands[i][1])

        arr.sort((a, b) => a - b)

        answer.push((arr[commands[i][2] - 1]))
    }


    return answer;
}
