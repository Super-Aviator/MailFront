<template>
	<div><formList :formData="formData" :formRequest="formRequest" /></div>
</template>

<script>
import formList from '@/components/formList';
import app from '@/main.js'

export default {
	name: 'loginPage',
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
					type: 'formButton',
					label: '注册',
					props: {
						style: {
							'background-color': '#fff',
							border: 'solid 1px #979797',
							color: '#979797'
						}
					},
					event: {
						click: function() {
							app.$router.push({ path: '/login/registerPage' });
						}
					}
				},
				{
					type: 'formButton',
					label: '登录',
					handleType: 'submit'
				},
				{
					type: 'formText',
					label: '忘记密码？',
					event: {
						click: function() {
							console.log('跳转到忘记密码');
						}
					}
				}
			]
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped></style>
