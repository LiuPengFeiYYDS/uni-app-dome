<template>
	<view class="container">
		<i-search-bar></i-search-bar>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="(item,index) in bannerList" :key="index" class="px-2 s-item">
				<image :src="item.src" class="rounded banner-img"></image>
			</swiper-item>
		</swiper>

		<view class="icons flex">
			<view class="icons-item py-1" v-for="(item,index) in iconsList" :key="index">
				<image :src="item.src" class="icons-img"></image>
				<view class="title">
					{{item.name}}
				</view>
			</view>
		</view>
		<!-- 优惠券 -->
	<view class="coupon">
		<view class="coupon-content">
			<view class="coupon-item mr-2" v-for="(item,index) in discount" :key="index">
				<view class="coupon-left">
					<view class="price">
						￥{{item.price}}
					</view>
					<view class="value">
						{{item.value.title}}
					</view>
				</view>
				<view class="coupon-right">
					领取
				</view>
			</view>
		</view>
	</view>
		<!-- 图片 -->
		<view class="group">
			<view class="group-title">
				拼团
			</view>
			<view class="group-item">
				<view class="group-content" v-for="(item,index) in groupData" :key="index">
					<view class="cover">
						<image :src="item.cover" class="img" ></image>
						<view class="type">
							{{item.type==='column'?'专栏':''}}
							{{item.type==='media'?'图文':''}}
							{{item.type==='audio'?'音频':''}}
							{{item.type==="video"?'视频':''}}
						</view>
					</view>
					<view class="title">
						{{item.title}}
					</view>
					<view class="price-content">
						<view class="price">
							￥{{item.price}}
						</view>
						<view class="t_price">
							￥{{item.t_price}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 后面图片 -->
		<view class="group-2">
			<view class="group-title">
				<view class="left">
					最新列表
				</view>
				<view class="right">
					查看更多
				</view>
			</view>
			<view class="group-item">
				<view class="group-content" v-for="(item,index) in groupData2" :key="index">
					<view class="cover">
						<image :src="item.cover" class="img" ></image>
						<view class="type">
							{{item.type==='column'?'专栏':''}}
							{{item.type==='media'?'图文':''}}
							{{item.type==='audio'?'音频':''}}
							{{item.type==="video"?'视频':''}}
						</view>
					</view>
					<view class="foot">
						<view class="title">
							{{item.title}}
						</view>
						<view class="price-content">
							<view class="price">
								￥{{item.price}}
							</view>
							<view class="t_price">
								￥{{item.t_price}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<image :src="imageAd" style="width:100%;height: 360rpx;"></image>
	</view>
</template>

<script>
	import {
		swiper,
		getCoupon,
		getGroup
	} from '../../api/index/index.js'
	export default {
		data() {
			return {
				bannerList: [],
				iconsList: [],
				// 获取到优惠券数据
				discount: [],
				groupData: [],
				groupData2:[],
				imageAd:''
			}
		},
		onLoad() {
			this.render()
			this.handleGetCoupon()
			this.handleGetGroup()
		},
		methods: {
			async render() {
				const res = await swiper()
				console.log(res);
					this.bannerList = res.data.data[1].data
					this.iconsList = res.data.data[2].data
					this.groupData2=res.data.data[5].data
					this.imageAd=res.data.data[6].data
			},
			async handleGetCoupon() {
				const res = await getCoupon()
				console.log(res);
				this.discount = res.data.data
				console.log(this.discount);
			},
			async handleGetGroup() {
				const res = await getGroup({
					page: 1,
					usable: 1
				})
				console.log(res);
				this.groupData = res.data.data.rows
			}
		}
	}
</script>

<style lang="scss" scoped>
	.s-item {
		box-sizing: border-box;
	}

	.banner-img {
		width: 100%;
		height: 100%;
	}

	.icons {
		padding: 20rpx 0;
		flex-wrap: wrap;

		.icons-item {
			flex: 25%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;

			.icons-img {
				width: 72rpx;
				height: 72rpx;
				border-radius: 50px}
			.title {
				font-size: 24rpx;
				color: #6c757d;
				margin-top: 20rpx;
			}
		}

	}

	.coupon {
		padding: 20rpx;
		width: 100%;
		box-sizing: border-box;
	
		.coupon-content {
			overflow-x: scroll;
			display: flex;
			width: 100%;
	
			.coupon-item {
				flex-shrink: 0;
				display: flex;
				width: 500rpx;
				text-align: center;
	
				.coupon-left {
					background: #d39e00;
					flex: 70%;
					padding: 15rpx;
					color: #fff;
	
					.value {
						font-size: 24rpx;
						margin-top: 10rpx;
					}
				}
	
				.coupon-right {
					background: #ffc107;
					flex: 30%;
					border-left: 2px dashed #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
				}
			}
		}
	
	}
	
	.group {
		border-top: 20rpx solid #f5f5f3;
		border-bottom: 20rpx solid #f5f5f3;
		width: 100%;
		padding: 30rpx 10rpx;
	
		.group-title {
			font-size: 40rpx;
			font-weight: 700;
		}
	
		.group-item {
			width: 100%;
			overflow-x: scroll;
			display: flex;
			flex-shrink: 0;
			.group-content{
				.cover{
					margin-bottom: 5px;
					width: 340rpx;
					height: 200rpx;
					position: relative;
					.img{
						width: 100%;
						height: 100%;
					}
					.type{
						position: absolute;
						bottom: 10rpx;
						right: 10rpx;
						background: rgba(0, 0, 0, .5);
						color: #fff;
						padding: 0 10rpx;
						font-size: 24rpx;
					}
				}
				.price-content{
					display: flex;
					margin-top: 10rpx;
					.price{
						color: red;
					}
					.t_price{
						color: #ccc;
						font-size: 24rpx;
					}
				}
			}
		}
	}
	
	.group-2 {
		width: 100%;
		padding: 30rpx 10rpx;
		box-sizing: border-box;
		border-bottom: 20rpx solid #f5f5f3;
	
		.group-title {
			display: flex;
			justify-content: space-between;
			.left{
				font-size: 40rpx;
				font-weight: 800;
			}
			.right{
				color: #ccc;
				font-size: 24rpx;
			}
		}
	
		.group-item {
			width: 100%;
			.group-content{
				display: flex;
				.cover{
					margin-bottom: 5px;
					width: 340rpx;
					height: 200rpx;
					position: relative;
					.img{
						width: 100%;
						height: 100%;
					}
					.type{
						position: absolute;
						bottom: 10rpx;
						right: 10rpx;
						background: rgba(0, 0, 0, .5);
						color: #fff;
						padding: 0 10rpx;
						font-size: 24rpx;
					}
				}
				.foot{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 20rpx;
					.title{
						width: 400rpx;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
				.price-content{
					margin-top: 10rpx;
					display: flex;
					.price{
						color: red;
					}
					.t_price{
						color: #ccc;
						font-size: 24rpx;
					}
				}
			}
		}
	}
</style>
