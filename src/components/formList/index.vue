s
<template>
	<div>
		<div class="form-item" v-for="(item, index) in formData" :key="index">
			<component :is="item.type" v-bind="item" @formBack="formBack" @dataUpdate="dataUpdate"></component>
		</div>
	</div>
</template>

<script>
import formInput from './components/formInput';
import formButton from './components/formButton';
import formText from './components/formText';

export default {
	name: 'index',
	components: {
		formText,
		formInput,
		formButton
	},
	props: {
		formData: {
			type: Array,
			require: false
		},
		formRequest: {
			type: Object,
			require: false
		}
	},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {
		// 数据更新
		dataUpdate(data) {
			let { val, formItem } = data;
			this.formData.map(item => {
				if (item.fieldName == formItem.fieldName) {
					item.data = val;
				}
			});
		},

		// 表单验证
		validator(item) {
			let errorMsg = '';
			for (let i = 0; i < this.formData.length; i++) {
				if (typeof this.formData[i].validator !== 'undefined') {
					errorMsg = this.$validate[this.formData[i].validator](this.formData[i]);
				}

				if (errorMsg) {
					this.$notify({ type: 'danger', message: errorMsg });
					return false;
					break;
				}
			}
			return true;
		},

		// 表单返回
		formBack(item) {
			// 判断操作类型
			switch (item.handleType) {
				// 表单上传
				case 'submit':
					if (this.validator(item)) {
						let formRequest = {
							...this.formRequest,
							data: {}
						};

						// 表单数据转化为请求参数
						this.formData.map(item => {
							if (typeof item.fieldName !== 'undefined') {
								formRequest.data[item.fieldName] = item.data;
							}
						});
						console.log(formRequest);
					}
					break;
				default:
					break;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.form-item {
	margin-bottom: 0.5rem;
}
</style>
