<template lang="pug">
PokemonCards(:pokemons="starters" 
	:selectedId="selectedId"
	@clickedPokemon="fetchEvolution")

PokemonCards(:pokemons="evolution")

</template>

<script>
import Card from '@/components/Card.vue'
import PokemonCards from '@/components/PokemonCards.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const STARTERID = [1, 4, 7]

export default {
	components: { Card, PokemonCards },
	data() {
		return {
			starters: [],
			evolution: [],
			selectedId: null,
		}
	},
	async created() {
		const starters = await this.fetchData(STARTERID)
		this.starters = starters
	},
	methods: {
		async fetchEvolution(pokemon) {
			this.selectedId = pokemon.id
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

<style scoped lang="scss"></style>
