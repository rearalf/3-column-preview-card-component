<script>
export default {
	props: {
		title: String,
		content: String,
		category: String,
		firstCard: Boolean,
		lastCard: Boolean,
	},
}
</script>

<template>
	<div
		class="flex flex-col items-start gap-8 py-12 px-14 lg:gap-20"
		:class="{
			'bg-bright-orange': category === 'sedans',
			'bg-dark-cyan': category === 'suvs',
			'bg-very-dark-cyan': category !== 'sedans' && category !== 'suvs',
			'rounded-tl-lg rounded-bl-lg': firstCard,
			'rounded-tr-lg rounded-br-lg': lastCard,
		}"
	>
		<article class="flex flex-col items-start gap-5">
			<img v-if="category === 'sedans'" :src="IconSedans" />
			<img v-else-if="category === 'suvs'" :src="IconSuvs" />
			<img v-else-if="category === 'luxury'" :src="IconLuxury" />
			<h1 class="text-very-light-gray text-4xl uppercase">
				{{ title }}
			</h1>
			<p class="text-transparent-white text-sm-">
				{{ content }}
			</p>
		</article>
		<button
			:class="{
				'text-bright-orange': category === 'sedans',
				'text-dark-cyan': category === 'suvs',
				'text-very-dark-cyan': category !== 'sedans' && category !== 'suvs',
			}"
			class="py-4 px-8 bg-transparent-white rounded-full"
		>
			Learn More
		</button>
	</div>
</template>

<script setup>
import IconSedans from '../assets/images/icon-sedans.svg'
import IconLuxury from '../assets/images/icon-luxury.svg'
import IconSuvs from '../assets/images/icon-suvs.svg'
</script>
