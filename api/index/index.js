import api from '@/utils/request.js'
/**
 * 获取到轮播图数据
 */
const swiper = async () => { //轮播图
	let data = await api({
		url: '/index',
		method:"GET"
	})
	return data
}
/**
 * 获取数据
 */
const getCoupon = async () => { //轮播图
	let data = await api({
		url: '/coupon',
		method:"GET"
	})
	return data
}
export {
	swiper,
	getCoupon
}