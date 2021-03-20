<template lang="pug">
.cards
	Card(v-for="pokemon in pokemons" 
		:class="{opace: selectedId && pokemon.id !== selectedId}"
		:starter="pokemon" 
		@click="clicked(pokemon)").simple
		template(v-slot:title) {{ pokemon.name }} # {{ pokemon.id }}
		template(v-slot:content)
			img(:src="pokemon.sprite")
		template(v-slot:description)
			div(v-for="type in pokemon.types") {{ type }}
</template>

<script>
import Card from '@/components/Card.vue'

export default {
	props: {
		pokemons: Array,
		selectedId: Number,
	},
	data() {
		return {}
	},
	components: { Card },
	methods: {
		clicked(pokemon) {
			this.$emit('clickedPokemon', pokemon)
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
.simple {
	margin-bottom: 1rem;
	&:hover {
		opacity: 1;
	}
}

.opace {
	opacity: 0.4;
}
</style>
