<template>
	<div>
		<b v-if="isHomepage">Homepage</b>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		props: {
			source: String,
		},
		data: () => ({

		}),
		computed: {
			isHomepage () {
				return (this.$route.path === '/')
			}
		}
	}
</script>
<style scoped></style>