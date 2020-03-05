/**
 *
 * promisify化api
 *
 * @param {string} name api名字
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