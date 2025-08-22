<script lang="ts">
	import { browser } from '$app/environment';
	
	// Check if photos link should be shown (can be controlled via environment variable)
	// For now, default to true. In production, this could be controlled by env vars
	const showPhotosLink = true; // TODO: Connect to environment variable when needed
</script>

<div class="bg-[#fdfaf6] text-gray-900 flex items-center justify-center min-h-screen p-4">
	<div class="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 relative">
		<!-- Top caps -->
		<div class="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-20 sm:w-24 md:w-28">
			<img src="/hue-cap.png" alt="Studenterhue" />
		</div>

		<!-- Title -->
		<h2 class="text-xs uppercase tracking-wide text-gray-500">5 års jubilæum</h2>
		<h1 class="text-4xl sm:text-5xl font-bold text-[#801e32] mt-2">Reunion 2025</h1>
		<p class="text-lg text-[#801e32] font-medium mt-1">Z Klassen<br />Årgang 2020</p>

		<hr class="border-t my-4 border-[#801e32]" />

		<!-- Invitation text -->
		<p class="text-sm sm:text-base text-gray-700">
			Vi vil gerne invitere dig til en hyggelig gensynsaften, hvor vi samles for at mindes vores tid
			sammen på Rosborg Gymnasium.
		</p>

		<!-- Date/time -->
		<p class="mt-6 text-[#174b37] text-lg sm:text-xl italic">
			23 August, 2025<br />
			Kl. 11:00
		</p>

		<!-- Info om betaling -->
		<div class="mt-6 bg-[#fef6f2] border-l-4 border-[#801e32] p-4 rounded-md text-sm sm:text-base">
			<p class="text-[#801e32] font-semibold">💸 Egenbetaling: 280 kr.</p>
			<p class="text-gray-700 mt-1">
				Det dækker hovedret, dessert, natmad – og selvfølgelig fri øl hele aftenen!
			</p>
			<p class="text-gray-700 mt-2">
				Hvis du er mere til en G&T, en Smirnoff Ice eller shots, så tag gerne det med!
			</p>
			<p class="text-gray-700 mt-1 italic">
				Tilmelding sker via betaling til <strong>Holmer</strong> på MobilePay: 28107119<br />
				S.U senest d. 1 august
			</p>
		</div>

		<!-- Programmet for dagen -->
		<div class="mt-6 bg-[#f9f4ef] border-l-4 border-[#801e32] p-4 rounded-md text-sm sm:text-base space-y-4">
			<h3 class="text-lg font-bold text-[#801e32]">Dagens program – Lørdag d. 23/08/2025</h3>

			<div>
				<p><strong>Kl. 11:00</strong> – Vi mødes ved gode gamle Albuen</p>
				<p class="text-gray-600 ml-4">
					Tirsbæk Strandvej 22, 7100 Vejle<br />
					'Fri leg': Lidt musik, drik en øl/sodavand, spil volley, måske et dyp?
				</p>
			</div>

			<div>
				<p><strong>Kl. 12:00</strong> – Frokost i Paladspassagen</p>
				<p class="text-gray-600 ml-4">(Egenbetaling &lt;333)</p>
			</div>

			<div>
				<p><strong>Kl. 14:30</strong> – Vi drager mod Rosborg</p>
				<p class="text-gray-600 ml-4">Jagt efter årgangsbilledet + 2 hemmelige aktiviteter</p>
				
				{#if showPhotosLink}
					<div class="mt-3 ml-4">
						<a 
							href="/photos" 
							class="inline-flex items-center px-4 py-2 bg-[#801e32] text-white text-sm font-medium rounded-lg hover:bg-[#6a1929] transition-colors duration-200 shadow-md hover:shadow-lg"
						>
							📸 Se og upload billeder fra vores tid sammen
						</a>
					</div>
				{/if}
			</div>

			<div>
				<p><strong>Kl. 16:30</strong> – Holmers forældres gård</p>
				<p class="text-gray-600 ml-4">
					Vesterbyvej 47, 7100 Vejle<br />
					'Fri leg': Lounge, spikeball, rundbold – dresscode (Studenterhue!)
				</p>
			</div>

			<div>
				<p><strong>Kl. 18:30</strong> – Aftensmad m. indslag</p>
				<p class="text-gray-600 ml-4">(Nogle af jer kontaktes af festudvalget)</p>
				<p class="text-gray-600 ml-4">
					Vores tidligere lærere er også inviteret til dette tidspunkt! 🎓
				</p>
			</div>

			<div>
				<p><strong>Kl. 23:30</strong> – Natmad</p>
			</div>

			<div>
				<p><strong>Kl. 03:00</strong> – Farvel og tak! &lt;333</p>
			</div>
		</div>

		<!-- Footer logo -->
		<div class="mt-8">
			<img src="/ros_logo_small.png.webp" alt="Rosborg Gymnasium & HF logo" class="h-10" />
		</div>

		<!-- Bottom border -->
		<div class="absolute bottom-0 left-0 w-full h-4 bg-[#801e32] rounded-b-2xl"></div>
	</div>
</div>