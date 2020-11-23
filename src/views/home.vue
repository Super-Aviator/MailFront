<template>
	<div class="main">
		<van-button type="default">默认按钮</van-button>
		<van-button type="primary">主要按钮</van-button>
		<van-cell-group>
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
		</van-cell-group>
		<div class="test"></div>
	</div>
</template>

<script>
export default {
	name: 'home',
	components: {},
	mounted() {
	}
};
</script>

<style lang="scss" scoped>
.test {
	width: 3rem;
	height: 3rem;
	background-color: pink;
}
</style>
