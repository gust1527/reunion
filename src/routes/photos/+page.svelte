<script lang="ts">
	import PhotoCard from '$lib/components/PhotoCard.svelte';
	import { photos } from '$lib/photos';
</script>

<svelte:head>
	<title>Billeder - 8.Z Reunion 2025</title>
	<meta name="description" content="Se og upload billeder fra vores tid på Rosborg Gymnasium" />
</svelte:head>

<div class="min-h-screen bg-[#fdfaf6] py-8 px-4">
	<div class="max-w-7xl mx-auto">
		<!-- Header -->
		<div class="text-center mb-8 lg:mb-12">
			<a 
				href="/"
				class="inline-flex items-center text-[#801e32] hover:text-[#6a1929] transition-colors duration-200 mb-4 text-sm font-medium"
			>
				← Tilbage til reunion
			</a>
			
			<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#801e32] mb-4">
				Vores Billeder
			</h1>
			
			<p class="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
				Her kan I se og uploade billeder fra vores tid sammen på Rosborg Gymnasium. 
				Klik på en kategori for at uploade jeres egne minder!
			</p>
		</div>

		<!-- Instructions -->
		<div class="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8 lg:mb-12 max-w-4xl mx-auto">
			<div class="flex items-start space-x-3">
				<div class="flex-shrink-0">
					<div class="w-8 h-8 bg-[#801e32] rounded-full flex items-center justify-center">
						<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
					</div>
				</div>
				<div class="flex-1">
					<h3 class="text-lg font-semibold text-[#801e32] mb-2">Sådan uploader du billeder:</h3>
					<ol class="text-sm sm:text-base text-gray-700 space-y-1 list-decimal list-inside">
						<li>Klik på "Upload billeder her" knappen på den relevante kategori</li>
						<li>Du bliver omdirigeret til et Google Photos album</li>
						<li>Upload dine billeder direkte til det delte album</li>
						<li>Alle kan se og downloade billederne fra albummet</li>
					</ol>
				</div>
			</div>
		</div>

		<!-- Photo Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
			{#each photos as photo (photo.id)}
				<PhotoCard {photo} />
			{/each}
		</div>

		<!-- Bottom Section -->
		<div class="mt-12 lg:mt-16 text-center">
			<div class="bg-white rounded-xl shadow-md p-6 sm:p-8 max-w-2xl mx-auto">
				<h3 class="text-xl sm:text-2xl font-bold text-[#801e32] mb-4">
					Mangler der en kategori?
				</h3>
				<p class="text-gray-700 text-sm sm:text-base mb-6">
					Hvis I har billeder fra andre begivenheder eller aktiviteter, så send dem til 
					<a href="mailto:festudvalget@reunion2025.dk" class="text-[#801e32] font-medium hover:underline">
						festudvalget@reunion2025.dk
					</a>
					så opretter vi en ny kategori!
				</p>
				
				<a 
					href="/"
					class="inline-flex items-center px-6 py-3 bg-[#801e32] text-white font-medium rounded-lg hover:bg-[#6a1929] transition-colors duration-200 shadow-md hover:shadow-lg"
				>
					← Tilbage til reunion siden
				</a>
			</div>
		</div>
	</div>
</div>
