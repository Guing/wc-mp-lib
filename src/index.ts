export function myFunction(): void {
  console.log('Hello, world!')
}
// 将小程序/小游戏异步接口转为同步接口
export default function promisify(fn: (params: unknown) => void) {
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
