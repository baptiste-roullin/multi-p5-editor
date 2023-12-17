<script setup lang="ts">
import p5 from 'p5'
import { onMounted } from 'vue'
/*const props = defineProps<{
	foo: number
	bar?: number
}>()
*/
import { store } from '../App.vue'
console.log(store.test)

onMounted(() => {

})
</script>

<template>
	<div class="log-view">
		<h2>Log</h2>
		<div v-for=" object in store ">

			<div v-for=" subObj in object ">
				<dl v-for="part in  subObj">
					<dt>part.key()</dt> <!-- TODO -->
					<dd>{{ part }}</dd>
				</dl>
			</div>
		</div>

	</div>
</template>


<style>
.log-view {
	position: absolute;
	bottom: 3em;
	right: 3em;
	height: 500px;
	overflow: scroll;
}
</style>
