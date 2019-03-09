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
    let arr = [762.2410120201002,
        1230.1413811334423,
        1367.494712073059,
        1628.811802178737,
        1884.6561277277463,
        2326.114949433893,
        2429.150419534901,
        2891.0394923436947,
        3565.240777028882,
        3652.102678176042,
        3908.83596086735,
        3967.249513213786,
        3970.834764320608,
        4395.30260001364,
        4558.9887687247065,
        5052.552918644004,
        5277.713618742935,
        5522.149828668253,
        6836.385638454312,
        7266.568343817081,
        7786.612631654149,
        8260.69968455472]//generateDistinctRandArr()
    // 查找目标下标
    let targetIndex = 0 //Math.floor(Math.random() * arr.length)
    // 查找结果
    let rs
    // 测试普通版本
    try {
        if ((rs = binary_search(arr, arr[targetIndex])) != targetIndex) {
            console.error(arr, targetIndex, 'binary_search fail!')
        }
    }
    catch (e) {
        console.error(arr, targetIndex, 'binary_search ERROR!')
    }
    // 测试递归版本
    try {
        if ((rs = binary_search_recursive(arr, arr[targetIndex])) != targetIndex) {
            console.error(arr, targetIndex, 'binary_search_recursive fail!')
        }
    }
    catch (e) {
        console.error(arr, targetIndex, 'binary_search_recursive ERROR!')
    }
}