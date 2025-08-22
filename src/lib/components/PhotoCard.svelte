<script lang="ts">
	import type { Photo } from '$lib/photos';

	interface Props {
		photo: Photo;
	}

	let { photo }: Props = $props();

	// Fallback image if photo fails to load
	let imageError = $state(false);
	
	function handleImageError() {
		imageError = true;
	}

	function openUploadLink() {
		window.open(photo.uploadLink, '_blank', 'noopener,noreferrer');
	}
</script>

<div class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
	<!-- Image Container -->
	<div class="relative aspect-square overflow-hidden bg-gray-100">
		{#if !imageError}
			<img
				src={photo.thumbnail}
				alt={photo.title}
				class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
				onerror={handleImageError}
				loading="lazy"
			/>
		{:else}
			<!-- Fallback when image fails to load -->
			<div class="w-full h-full flex items-center justify-center bg-gray-200">
				<div class="text-center text-gray-500">
					<svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
					</svg>
					<p class="text-xs">Billede ikke fundet</p>
				</div>
			</div>
		{/if}
		
		<!-- Overlay with hover effect -->
		<div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
	</div>

	<!-- Content -->
	<div class="p-4 space-y-3">
		<!-- Title - responsive text sizing -->
		<h3 class="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg leading-tight line-clamp-2 group-hover:text-[#801e32] transition-colors duration-200">
			{photo.title}
			{#if photo.year}
				<span class="text-xs text-gray-500 font-normal">({photo.year})</span>
			{/if}
		</h3>

		<!-- Description -->
		{#if photo.description}
			<p class="text-xs sm:text-sm text-gray-600 line-clamp-2">
				{photo.description}
			</p>
		{/if}

		<!-- Upload button -->
		<button
			onclick={openUploadLink}
			class="w-full px-3 py-2 bg-[#801e32] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-[#6a1929] focus:ring-2 focus:ring-[#801e32] focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
		>
			<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
			</svg>
			Upload billeder her
		</button>
	</div>
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
