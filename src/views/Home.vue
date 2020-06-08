<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Auth from "../services/auth";

export default {
	name: "Home",
	components: {
		HelloWorld
	},
	mounted() {
		Auth.login({
			identifier: "Guillaume",
			password: "password"
		});
	}
};
</script>
