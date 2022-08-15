<template>
	<view class="container">
		<i-search-bar></i-search-bar>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="(v,i) in bannerList" :key="i" class="px-2 s-item">
				<image :src="v.src" class="rounded banner-img"></image>
			</swiper-item>
		</swiper>
		
		<view class="icons flex">
			<view class="icons-item py-1" v-for="(v,i) in iconsList" :key="i">
				<image :src="v.src" class="icons-img"></image>
				<view class="title">
					{{v.name}}
				</view>
			</view>
		</view>
		<!-- 优惠券 -->
		<view class="">
			
		</view>
	</view>
</template>

<script>
	import {swiper,getCoupon} from '../../api/index/index.js'
	export default {
		data() {
			return {
				bannerList:[],
				iconsList:[],
				// 获取到优惠券数据
				discount:[]
			}
		},
		onLoad() {
			this.render()
			this.handleGetCoupon()
		},
		methods: {
			async render(){
				const res=await swiper()
				this.bannerList=res.data.data[1].data,
				this.iconsList=res.data.data[2].data
			},
			async handleGetCoupon(){
				const res=await getCoupon()
				this.discount=res.data
			}
		}
	}
</script>

<style lang="scss" scoped>
	.s-item{
		box-sizing: border-box;
	}
	.banner-img{
		width: 100%;
		height: 100%;
	}
	.icons{
		padding: 20rpx 0;
		flex-wrap: wrap;
		.icons-item{
			flex: 25%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			.icons-img{
				width: 72rpx;
				height: 72rpx;
				border-radius: 50px;
			}
			.title{
				font-size: 24rpx;
				color: #6c757d;
				margin-top: 20rpx;
			}
		}
	}
</style>
