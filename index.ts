/**
 *
 * promisify化api
 *
 * @param {string} swan 小程序（swan, wx等）
 * @param {string} method api名字
 * @param {object} options api参数
 * @return {function(*=): Promise<*>} promisify的api
 */

 export default const promisify = swan => method => options => new Promise((resolve, reject) => {
 	if (!swan[method]) {
 		reject();
 	}
 	swan[method]({
 		...options,
 		success: res => resolve(res),
        fail: err => reject(err)
 	});
 });