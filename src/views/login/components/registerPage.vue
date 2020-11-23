<template>
	<div><formList :formData="formData" :formRequest="formRequest" /></div>
</template>

<script>
import formList from '@/components/formList';

export default {
	name: 'registerPage',
	components: {
		formList
	},
	data() {
		return {
			formRequest: {
				methods: 'post'
			},
			formData: [
				{
					type: 'formInput',
					label: '帐号',
					data: '',
					fieldName: 'username',
					validator: 'isEmpty',
					props: {
						type: 'text'
					},
					icon: {
						src: require('@/assets/accout.png')
					}
				},
				{
					type: 'formInput',
					label: '密码',
					data: '',
					fieldName: 'password',
					validator: 'isEmpty',
					props: {
						type: 'password'
					},
					icon: {
						src: require('@/assets/password.png'),
						style: {
							width: '0.29rem',
							height: '0.4rem'
						}
					}
				},
				{
					type: 'formInput',
					label: '确认密码',
					data: '',
					fieldName: 'passwordTwo',
					validator: 'isEmpty',
					props: {
						type: 'password'
					},
					icon: {
						src: require('@/assets/password.png'),
						style: {
							width: '0.29rem',
							height: '0.4rem'
						}
					}
				},
				{
					type: 'formButton',
					label: '注册',
					handleType: 'submit'
				}
			]
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped></style>
