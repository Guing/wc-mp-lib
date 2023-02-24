/**
 * 将小程序/小游戏异步接口转为同步接口
 * @date 2023/2/24 - 17:13:52
 *
 * @export
 * @param {(params: any) => void} fn 要转转换的函数
 * @returns {void) => (args?: {}) => any} 无
 */
export function promisify(fn: (params: any) => void) {
  return (args = {}) =>
    new Promise((resolve, reject) => {
      fn(
        Object.assign(args, {
          success: resolve,
          fail: reject,
        })
      )
    })
}
