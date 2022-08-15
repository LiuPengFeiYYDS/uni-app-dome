const appId='bd9d01ecc75dbbaaefce'
const api = (params) => {
	console.log("esss",params);
	let URL = "http://demonuxtapi.dishait.cn/mobile" //域名
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中',
		})
		uni.request({
			url: URL + params.url, 
			data: params.data || '',
			header:{
				appId
			},
			success: res => {
				uni.hideLoading()
				resolve(res)
			}

		})
	})
}
export default api