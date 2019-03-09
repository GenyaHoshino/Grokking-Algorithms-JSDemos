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
    // 查找结果
    let rs
    // 测试普通版本
    try {
        if ((rs = binary_search(arr, arr[targetIndex])) !== targetIndex) {
            console.error(arr, targetIndex, 'binary_search fail!')
        }
    }
    catch (e) {
        console.error(arr, targetIndex, 'binary_search ERROR!')
    }
    // 测试递归版本
    try {
        if ((rs = binary_search_recursive(arr, arr[targetIndex])) !== targetIndex) {
            console.error(arr, targetIndex, 'binary_search_recursive fail!')
        }
    }
    catch (e) {
        console.error(arr, targetIndex, 'binary_search_recursive ERROR!')
    }
}