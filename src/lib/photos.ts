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
		title: "Fodboldholdet",
		thumbnail: "/images/01-football.jpg",
		uploadLink: "https://photos.app.goo.gl/abc123",
		description: "Billeder fra vores fodboldhold og kampe",
		year: 2018
	},
	{
		title: "Klassetur til Barcelona",
		thumbnail: "/images/02-trip.jpg",
		uploadLink: "https://photos.app.goo.gl/xyz456",
		description: "Minder fra vores fantastiske klassetur",
		year: 2019
	},
	{
		title: "Studentergilde",
		thumbnail: "/images/03-graduation.jpg",
		uploadLink: "https://photos.app.goo.gl/def789",
		description: "Fejring af vores eksamen og studentertid",
		year: 2020
	},
	{
		title: "Matematikkonkurrence",
		thumbnail: "/images/04-math.jpg",
		uploadLink: "https://photos.app.goo.gl/ghi012",
		description: "Billeder fra matematikkonkurrencer og events",
		year: 2019
	},
	{
		title: "Julefrokost",
		thumbnail: "/images/05-christmas.jpg",
		uploadLink: "https://photos.app.goo.gl/jkl345",
		description: "Hyggelige julefrokoster og festligheder",
		year: 2019
	},
	{
		title: "Idrætsdag",
		thumbnail: "/images/06-sports.jpg",
		uploadLink: "https://photos.app.goo.gl/mno678",
		description: "Sport og konkurrencer på skolens idrætsdage",
		year: 2018
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
