<template lang="pug">
.cards
	Card(v-for="starter in starters" :starter="starter" @click="fetchEvolution(starter)")
		template(v-slot:title) {{ starter.name }} - {{ starter.id }}
		template(v-slot:content)
			img(:src="starter.sprite")
		template(v-slot:description)
			div(v-for="type in starter.types") {{ type }}

.cards
	Card(v-for="starter in evolution" :starter="starter")
		template(v-slot:title) {{ starter.name }} - {{ starter.id }}
		template(v-slot:content)
			img(:src="starter.sprite")
		template(v-slot:description)
			div(v-for="type in starter.types") {{ type }}
</template>

<script>
import Card from '@/components/Card.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const STARTERID = [1, 4, 7]

export default {
	components: { Card },
	data() {
		return {
			starters: [],
			evolution: [],
		}
	},
	async created() {
		const starters = await this.fetchData(STARTERID)
		this.starters = starters
	},
	computed: {},
	methods: {
		async fetchEvolution(pokemon) {
			this.evolution = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
		},
		async fetchData(ids) {
			const responses = await Promise.all(
				ids.map((id) => fetch(`${api}/${id}`))
			)
			const data = await Promise.all(responses.map((res) => res.json()))
			return data.map((datum) => ({
				id: datum.id,
				name: datum.name,
				sprite: datum.sprites.other['official-artwork'].front_default,
				types: datum.types.map((type) => type.type.name),
			}))
		},
	},
}
</script>

<style scoped lang="scss">
.cards {
	display: flex;
}
img {
	width: 100%;
}
</style>
