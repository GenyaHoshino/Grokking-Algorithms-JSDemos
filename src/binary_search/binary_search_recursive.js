/**
 * 二分法搜索 递归版本
 * @param {Array} arr 搜索范围
 * @param {*} target 搜索目标
 * @param {int} [bottom] 搜索下界
 * @param {int} [top] 搜索上界
 * @param {Function} [cmpr] 比较函数
 * @return {int} -1:未找到 其他数字:找到的下标
 */
const binary_search_recursive = (arr, target, {
    bottom, top,
    /**
     * 比较函数
     * @param {*} found 找到的项
     * @param {*} target 目标项
     * @return {int} >0:大了 向下查找 <0:小了 向上查找 =0:找到
     */
    cmpr = (found, target) => {
        return found - target
    }
} = {}) => {
    // 搜索下界与上界为空时 初始化为数组上下界
    bottom = bottom === undefined ? 0 : bottom
    top = top === undefined ? arr.length - 1 : top
    // 二分中心
    let center = Math.floor((bottom + top) / 2)
    // 没找到
    if (top < bottom) {
        return -1
    }
    // 比较center和查找目标
    let cmprRs = cmpr(arr[center], target)
    // 大了 向下查找 移动上界
    if (cmprRs > 0) {
        return binary_search_recursive(arr, target, {cmpr, bottom, top: center - 1})
    }
    // 小了 向上查找 移动下界
    else if (cmprRs < 0) {
        return binary_search_recursive(arr, target, {cmpr, bottom: center + 1, top})
    }
    // 找到了
    else {
        return center
    }
}


module.exports = binary_search_recursive