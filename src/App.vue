<template>
	<div id="app">
		<div>{{ isUserLoggedIn }}</div>
		<p @click="logout">Logout</p>
		<p @click="test">Get invoices</p>
		<router-view />
	</div>
</template>

<script>
import AuthMixin from "./mixins/AuthMixin";

export default {
	name: "App",
	mixins: [AuthMixin]
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
