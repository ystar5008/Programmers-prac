function solution(sizes) {

    let arr1 = []
    let arr2 = []
    for (let i = 0; i < sizes.length; i++) {
        console.log(sizes[i].sort((a, b) => a - b))
        arr1.push(sizes[i][0])
        arr2.push(sizes[i][1])
    }


    // arr1에서 가장 큰 값 * arr2에서 가장 큰 값
    return (Math.max(...arr1) * Math.max(...arr2))
}