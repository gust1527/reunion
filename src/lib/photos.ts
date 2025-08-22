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
 * Individual photo entries with real metadata - sorted chronologically
 * Photos mapped from uploaded collection with actual descriptions
 */
export const photos: Photo[] = [
	{
		id: "01-studiearbejde-i-klassen",
		title: "Studiearbejde i fælleren",
		thumbnail: "/images/01-studiearbejde-i-klassen.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER1",
		description: "Gustav og Jeppe arbejder(?) på deres computere.",
		year: 2018
	},
	{
		id: "02-farverig-outfit",
		title: "Farverigt outfit",
		thumbnail: "/images/02-farverig-outfit.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER2",
		description: "Ørnen står i farverigt tøj og sneakers og poser på herretoilettet.",
		year: 2018
	},
	{
		id: "03-venner-til-fest",
		title: "Venner til fest",
		thumbnail: "/images/03-venner-til-fest.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER3",
		description: "To personer står tæt og smiler til kameraet til en fest.",
		year: 2018
	},
	{
		id: "04-gruppearbejde",
		title: "Gruppearbejde",
		thumbnail: "/images/04-gruppearbejde.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER4",
		description: "Flere personer sidder samlet om borde med papir og computere.",
		year: 2018
	},
	{
		id: "05-t-shirt-posering",
		title: "T-shirt posering",
		thumbnail: "/images/05-t-shirt-posering.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER5",
		description: "En person står og poserer i en t-shirt.",
		year: 2018
	},
	{
		id: "06-afslapning-paa-baenk",
		title: "Afslapning på bænk",
		thumbnail: "/images/06-afslapning-paa-baenk.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER6",
		description: "En person ligger afslappet hen over en træbænk.",
		year: 2018
	},
	{
		id: "07-balance-paa-sten",
		title: "Balance på sten",
		thumbnail: "/images/07-balance-paa-sten.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER7",
		description: "En person sidder på store sten udenfor og laver håndtegn.",
		year: 2018
	},
	{
		id: "08-udklaedte-i-klassen",
		title: "Udklædte i klassen",
		thumbnail: "/images/08-udklaedte-i-klassen.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER8",
		description: "Flere personer i udklædning sidder sammen i et klasselokale.",
		year: 2018
	},
	{
		id: "09-laboratorie-notater",
		title: "Laboratorie – notater",
		thumbnail: "/images/09-laboratorie-notater.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER9",
		description: "En person i kittel holder papir i et laboratorium.",
		year: 2019
	},
	{
		id: "10-laboratorie-pipette",
		title: "Laboratorie – pipette",
		thumbnail: "/images/10-laboratorie-pipette.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER10",
		description: "En person i kittel arbejder med pipette i laboratoriet.",
		year: 2019
	},
	{
		id: "11-laboratorie-forsoegsudstyr",
		title: "Laboratorie – forsøgsudstyr",
		thumbnail: "/images/11-laboratorie-forsoegsudstyr.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER11",
		description: "En person viser et glas dækket med sølvfolie i laboratoriet.",
		year: 2019
	},
	{
		id: "12-gruppe-ved-computer",
		title: "Gruppe ved computer",
		thumbnail: "/images/12-gruppe-ved-computer.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER12",
		description: "Flere personer sidder samlet omkring en computer.",
		year: 2019
	},
	{
		id: "13-selfie-i-spejl",
		title: "Selfie i spejl",
		thumbnail: "/images/13-selfie-i-spejl.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER13",
		description: "En person tager et selfie i et spejl.",
		year: 2019
	},
	{
		id: "14-laboratorie-samarbejde",
		title: "Laboratorie – samarbejde",
		thumbnail: "/images/14-laboratorie-samarbejde.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER14",
		description: "To personer i kittel arbejder sammen i laboratoriet.",
		year: 2019
	},
	{
		id: "15-haender-i-laboratoriet",
		title: "Hænder i laboratoriet",
		thumbnail: "/images/15-haender-i-laboratoriet.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER15",
		description: "Hænder arbejder med laboratorieudstyr.",
		year: 2019
	},
	{
		id: "16-laesning-og-studier",
		title: "Læsning og studier",
		thumbnail: "/images/16-laesning-og-studier.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER16",
		description: "En person læser og studerer ved et bord.",
		year: 2019
	},
	{
		id: "17-hoodie-og-afslappet-stil",
		title: "Hoodie og afslappet stil",
		thumbnail: "/images/17-hoodie-og-afslappet-stil.jpg",
		uploadLink: "https://photos.app.goo.gl/PLACEHOLDER17",
		description: "En person i hoodie med afslappet stil.",
		year: 2019
	}
];

/**
 * Utility functions for photo management
 */
export const photoUtils = {
	/**
	 * Get a photo by its ID
	 */
	getById(id: string): Photo | undefined {
		return photos.find(photo => photo.id === id);
	},

	/**
	 * Get all photos sorted by year (ascending)
	 */
	getAllSorted(): Photo[] {
		return [...photos].sort((a, b) => (a.year || 0) - (b.year || 0));
	},

	/**
	 * Get photos by year
	 */
	getByYear(year: number): Photo[] {
		return photos.filter(photo => photo.year === year);
	},

	/**
	 * Get unique years from all photos
	 */
	getUniqueYears(): number[] {
		const years = photos.map(photo => photo.year).filter(Boolean) as number[];
		return [...new Set(years)].sort();
	}
};
