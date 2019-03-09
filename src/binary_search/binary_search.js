/**
 * 二分法搜索 普通版本
 * @param {Array} arr 搜索范围
 * @param {*} target 搜索目标
 * @param {Function} [cmpr] 比较函数
 * @return {int} -1:未找到 其他数字:找到的下标
 */
const binary_search = (arr, target,
                       /**
                        * 比较函数
                        * @param {*} found 找到的项
                        * @param {*} target 目标项
                        * @return {int} >0:大了 向下查找 <0:小了 向上查找 =0:找到
                        */
                       cmpr = (found,target) => {return found - target}) => {
    // 搜索下界与上界、二分中心
    let bottom = 0, top = arr.length - 1, center
    // 比较结果
    let cmprRs
    while(top >= bottom){
        // 二分
        center = Math.floor((bottom + top) / 2)
        // 比较center和查找目标
        cmprRs = cmpr(arr[center], target)
        // 大了 向下查找 移动上界
        if(cmprRs > 0){
            top = center - 1
        }
        // 小了 向上查找 移动下界
        else if(cmprRs < 0){
            bottom = center + 1
        }
        // 找到了
        else{
            return center
        }
    }
    return -1
}


module.exports = binary_search