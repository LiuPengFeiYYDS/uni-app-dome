<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css 引入全局的样式*/
	@import url(@/common/iconfont/iconfont.css);
	@import url(@/common/styles/animate.min.css);
	@import url(@/common/styles/common.css);
	@import url(@/common/styles/free.css);
</style>
