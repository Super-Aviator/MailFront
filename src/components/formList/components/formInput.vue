<template>
	<div>
		<div class="input-div">
			<label :for="$attrs.fieldName">
				<input v-model="val" v-bind="$attrs.props" v-on="$attrs.event" @input="dataInput" />
				<div class="input-title" :class="val ? 'input-active' : ''">
					<img v-bind="$attrs.icon" />
					<span>{{ $attrs.label }}</span>
				</div>
				<img class="close" @click="clear" :class="val ? 'show' : 'hide'" src="@/assets/close.png" />
			</label>
		</div>
	</div>
</template>

<script>
export default {
	name: 'formInput',
	components: {},
	props: {},
	data() {
		return {
			val: ''
		};
	},
	created() {},
	mounted() {
		this.val = this.$attrs.data;
	},
	methods: {
		dataInput() {
			this.$emit('dataUpdate', {
				val: this.val,
				formItem: this.$attrs
			});
		},
		clear() {
			this.val = '';
			this.dataInput();
		}
	}
};
</script>

<style lang="scss" scoped>
.input-div {
	width: 5.86rem;
	margin: 0 auto 0.7rem;
	border-bottom: solid 0.04rem #e2e2e2;
	font-size: 0.3rem;
	color: #cbcbcb;
	position: relative;
	label {
		.input-title {
			position: absolute;
			top: -0.1rem;
			left: 0.2rem;
			transition: all 0.3s;
			img {
				display: inline-block;
				width: 0.34rem;
				height: 0.33rem;
				vertical-align: bottom;
				margin-right: 0.2rem;
			}
		}
		.input-active {
			top: -0.4rem;
			left: 0.4rem;
		}
		input {
			width: 100%;
			height: 0.6rem;
			color: #000;
			padding-left: 1rem;
			padding-right: 0.7rem;

			&:focus + .input-title {
				top: -0.4rem;
				left: 0.4rem;
			}
		}
		.close {
			position: absolute;
			right: 0;
			top: 0;
			width: 0.5rem;
			height: 0.5rem;
		}
	}
}
</style>
