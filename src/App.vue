<template>
	<main
		class="bg-very-light-gray px-6 py-24 flex flex-col lg:flex-row lg:h-screen lg:py-32 lg:px-64"
	>
		<Card
			firstCard
			title="Sedans"
			category="sedans"
			content="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising
				in the city or on your next road trip."
		/>
		<Card
			title="SUVs"
			category="suvs"
			content="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures."
		/>
		<Card
			lastCard
			title="Luxury"
			category="luxury"
			content="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style."
		/>
	</main>
</template>

<script setup>
import Card from './components/Card.vue'
</script>

<style scoped></style>
