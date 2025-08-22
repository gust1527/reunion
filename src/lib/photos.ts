/**
 * Photo category interface for the reunion photo gallery
 */
export interface Photo {
	/** Unique identifier for the photo category */
	id: string;
	/** Display title for the photo category */
	title: string;
	/** Relative path to the thumbnail image in /static/images/ */
	thumbnail: string;
	/** External upload link (Google Photos, etc.) */
	uploadLink: string;
	/** Optional description for the photo category */
	description?: string;
	/** Year the photos were taken */
	year?: number;
}

/**
 * Photo category configuration
 * Add new categories here to extend the photo gallery
 */
const photoCategories: Omit<Photo, 'id'>[] = [
	{
		title: "Studiearbejde i klassen",
		thumbnail: "/images/01-study.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER1",
		description: "To personer arbejder ved computere i et klasselokale.",
		year: 2018
	},
	{
		title: "Farverig outfit",
		thumbnail: "/images/02-outfit.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER2",
		description: "En person står i farverigt tøj og sneakers.",
		year: 2018
	},
	{
		title: "Venner til fest",
		thumbnail: "/images/03-friends.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER3",
		description: "To personer står tæt og smiler til kameraet til en fest.",
		year: 2018
	},
	{
		title: "Gruppearbejde",
		thumbnail: "/images/04-group.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER4",
		description: "Flere personer sidder samlet om borde med papir og computere.",
		year: 2018
	},
	{
		title: "T-shirt posering",
		thumbnail: "/images/05-shirt.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER5",
		description: "En person står og poserer i en t-shirt.",
		year: 2018
	},
	{
		title: "Afslapning på bænk",
		thumbnail: "/images/06-bench.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER6",
		description: "En person ligger afslappet hen over en træbænk.",
		year: 2018
	},
	{
		title: "Balance på sten",
		thumbnail: "/images/07-stones.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER7",
		description: "En person sidder på store sten udenfor og laver håndtegn.",
		year: 2018
	},
	{
		title: "Udklædte i klassen",
		thumbnail: "/images/08-costumes.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER8",
		description: "Flere personer i udklædning sidder sammen i et klasselokale.",
		year: 2018
	},
	{
		title: "Laboratorie – notater",
		thumbnail: "/images/09-lab-notes.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER9",
		description: "En person i kittel holder papir i et laboratorium.",
		year: 2019
	},
	{
		title: "Laboratorie – pipette",
		thumbnail: "/images/10-lab-pipette.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER10",
		description: "En person i kittel arbejder med pipette i laboratoriet.",
		year: 2019
	},
	{
		title: "Laboratorie – forsøgsudstyr",
		thumbnail: "/images/11-lab-foil.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER11",
		description: "En person viser et glas dækket med sølvfolie i laboratoriet.",
		year: 2019
	},
	{
		title: "Gruppe ved computer",
		thumbnail: "/images/12-lab-computer.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER12",
		description: "Tre personer arbejder sammen ved computer i et klasselokale.",
		year: 2019
	},
	{
		title: "Selfie i spejl",
		thumbnail: "/images/13-mirror.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER13",
		description: "En person tager et spejl-selfie med telefonen.",
		year: 2019
	},
	{
		title: "Laboratorie – samarbejde",
		thumbnail: "/images/14-lab-collab.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER14",
		description: "To personer smiler og arbejder sammen i et laboratorium.",
		year: 2019
	},
	{
		title: "Sjov håndgestus",
		thumbnail: "/images/15-hands.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER15",
		description: "En person viser en håndbevægelse foran kameraet.",
		year: 2019
	},
	{
		title: "Udendørs læsning",
		thumbnail: "/images/16-reading.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER16",
		description: "En person ligger udenfor på en bænk og læser i et hæfte.",
		year: 2019
	},
	{
		title: "Laboratorie – hætte og handsker",
		thumbnail: "/images/17-hoodie.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER17",
		description: "En person i hættetrøje og laboratoriehandsker står i et lokale.",
		year: 2019
	}
];

/**
 * Generate photo data with auto-generated IDs
 * IDs are zero-padded for consistent sorting
 */
export const photos: Photo[] = photoCategories.map((category, index) => ({
	id: String(index + 1).padStart(2, '0'),
	...category
}));

/**
 * Utility functions for photo management
 */
export const photoUtils = {
	/**
	 * Get photo by ID
	 */
	getById: (id: string): Photo | undefined => 
		photos.find(photo => photo.id === id),

	/**
	 * Get photos by year
	 */
	getByYear: (year: number): Photo[] => 
		photos.filter(photo => photo.year === year),

	/**
	 * Get all years that have photos
	 */
	getAvailableYears: (): number[] => 
		[...new Set(photos.map(photo => photo.year).filter(Boolean))].sort(),

	/**
	 * Validate photo data structure
	 */
	validate: (): { isValid: boolean; errors: string[] } => {
		const errors: string[] = [];
		
		photos.forEach(photo => {
			if (!photo.id) errors.push(`Photo missing ID: ${photo.title}`);
			if (!photo.title) errors.push(`Photo missing title: ${photo.id}`);
			if (!photo.thumbnail) errors.push(`Photo missing thumbnail: ${photo.id}`);
			if (!photo.uploadLink) errors.push(`Photo missing upload link: ${photo.id}`);
		});

		return {
			isValid: errors.length === 0,
			errors
		};
	}
};
