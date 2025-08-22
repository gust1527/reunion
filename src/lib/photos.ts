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
		uploadLink: "https://drive.google.com/drive/folders/1HSQFCJY7iIuiUX9J815_sFTrnjyHJsYn?usp=sharing",
		description: "Gustav og Jeppe arbejder(?) på deres computere.",
		year: 2018
	},
	{
		id: "02-farverig-outfit",
		title: "Farverigt outfit",
		thumbnail: "/images/02-farverig-outfit.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1Q9aJOlRdViWfvLY7STY1x2j8ez_Bcbae?usp=sharing",
		description: "Ørnen står i farverigt tøj og sneakers og poser på herretoilettet.",
		year: 2018
	},
	{
		id: "03-venner-til-fest",
		title: "Venner til fest",
		thumbnail: "/images/03-venner-til-fest.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1QGOsfH9rWCen1LOp-jzDLZD1XsX8CpFX?usp=sharing",
		description: "To personer står tæt og smiler til kameraet til en fest.",
		year: 2018
	},
	{
		id: "04-gruppearbejde",
		title: "Gruppearbejde",
		thumbnail: "/images/04-gruppearbejde.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1MrW4dPave38dhG_kOFCMf_XH-woLzB9K?usp=sharing",
		description: "Flere personer sidder samlet om borde med papir og computere.",
		year: 2018
	},
	{
		id: "05-t-shirt-posering",
		title: "T-shirt posering",
		thumbnail: "/images/05-t-shirt-posering.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1GAwTZ1zQkPqrWbu3Hm_ixYpDWOUc1UvB?usp=sharing",
		description: "En person står og poserer i en t-shirt.",
		year: 2018
	},
	{
		id: "06-afslapning-paa-baenk",
		title: "Afslapning på bænk",
		thumbnail: "/images/06-afslapning-paa-baenk.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1hieG7Ipnv5G02ihGfmuFBkWxXsSEsFzK?usp=sharing",
		description: "En person ligger afslappet hen over en træbænk.",
		year: 2018
	},
	{
		id: "07-balance-paa-sten",
		title: "Balance på sten",
		thumbnail: "/images/07-balance-paa-sten.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1scp9aS8x6NZrMk_bYbt_gEpZZ_gAw0p3?usp=sharing",
		description: "En person sidder på store sten udenfor og laver håndtegn.",
		year: 2018
	},
	{
		id: "08-udklaedte-i-klassen",
		title: "Udklædte i klassen",
		thumbnail: "/images/08-udklaedte-i-klassen.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1zoWLWXPEGXkHp2SQkMYcta9XzeeKww5t?usp=sharing",
		description: "Flere personer i udklædning sidder sammen i et klasselokale.",
		year: 2018
	},
	{
		id: "09-laboratorie-notater",
		title: "Laboratorie – notater",
		thumbnail: "/images/09-laboratorie-notater.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1IKX16Co2gBdM_XJ8T3xgLMsNO_DjgyGq?usp=sharing",
		description: "En person i kittel holder papir i et laboratorium.",
		year: 2019
	},
	{
		id: "10-laboratorie-pipette",
		title: "Laboratorie – pipette",
		thumbnail: "/images/10-laboratorie-pipette.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1Ty1RWwXvCPsdzgoH8P0tcmczZcTItI4j?usp=sharing",
		description: "En person i kittel arbejder med pipette i laboratoriet.",
		year: 2019
	},
	{
		id: "11-laboratorie-forsoegsudstyr",
		title: "Laboratorie – forsøgsudstyr",
		thumbnail: "/images/11-laboratorie-forsoegsudstyr.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1xoece7j4xQQfukhCVElcR1HrmsfjFq1j?usp=sharing",
		description: "En person viser et glas dækket med sølvfolie i laboratoriet.",
		year: 2019
	},
	{
		id: "12-gruppe-ved-computer",
		title: "Gruppe ved computer",
		thumbnail: "/images/12-gruppe-ved-computer.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1a5H6JpdgisPGe_AUKPv__855aEr4RqzO?usp=sharing",
		description: "Flere personer sidder samlet omkring en computer.",
		year: 2019
	},
	{
		id: "13-selfie-i-spejl",
		title: "Selfie i spejl",
		thumbnail: "/images/13-selfie-i-spejl.jpg",
		uploadLink: "https://drive.google.com/drive/folders/13sNvit5OsWaCDKQ_1MQaMxmbSNBWc4sx?usp=sharing",
		description: "En person tager et selfie i et spejl.",
		year: 2019
	},
	{
		id: "14-laboratorie-samarbejde",
		title: "Laboratorie – samarbejde",
		thumbnail: "/images/14-laboratorie-samarbejde.jpg",
		uploadLink: "https://drive.google.com/drive/folders/1MMJxWv3YhyrPST1WAym8F4B8A2K-OcJA?usp=sharing",
		description: "To personer i kittel arbejder sammen i laboratoriet.",
		year: 2019
	},
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
