const binary_search = require('./binary_search')
const binary_search_recursive = require('./binary_search_recursive')

// 测试组数
let testCnt = 100

// 最大数组长度
const MAX_ARR_LENGTH = 50
// 最大元素大小
const MAX_ARR_ITEM = 9999

/**
 * 生成不重复的随机数组
 * @return {number[]}
 */
const generateDistinctRandArr = () => {
    let rands = [], rand
    return new Array(
        Math.ceil(Math.random() * MAX_ARR_LENGTH)
    )
        .fill(0)
        .map(() => {
            while (~rands.indexOf(rand = Math.random() * MAX_ARR_ITEM)) {
            }
            rands.push(rand)
            return rand
        })
        .sort((a, b) => {
            return a - b
        })

}
while (testCnt-- > 0) {
    // 目标数组
    let arr = generateDistinctRandArr()
    // 查找目标下标
    let targetIndex = Math.floor(Math.random() * arr.length)
    console.log(arr,targetIndex)
    arr = [ 483.4217021126952,
        1135.729566910275,
        1440.9078845606405,
        4586.1983768592345,
        4630.970775042388,
        7359.02593016906,
        7812.432878952052 ]
    targetIndex =6
    // 查找结果
    let rs
    if ((rs = binary_search(arr,arr[targetIndex])) != targetIndex) {
        console.error('binary_search fail!')
    }
    if ((rs = binary_search_recursive(arr,arr[targetIndex])) != targetIndex) {
        console.error('binary_search_recursive fail!')
    }
}