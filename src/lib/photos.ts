export interface Photo {
	id: string;
	title: string;
	thumbnail: string;
	uploadLink: string;
}

export const photos: Photo[] = [
	{
		id: "01",
		title: "Fodboldholdet 2018",
		thumbnail: "/images/01-football.jpg",
		uploadLink: "https://photos.app.goo.gl/abc123"
	},
	{
		id: "02",
		title: "Klassetur til Barcelona 2019",
		thumbnail: "/images/02-trip.jpg",
		uploadLink: "https://photos.app.goo.gl/xyz456"
	},
	{
		id: "03",
		title: "Studentergilde 2020",
		thumbnail: "/images/03-graduation.jpg",
		uploadLink: "https://photos.app.goo.gl/def789"
	},
	{
		id: "04",
		title: "Matematikkonkurrence 2019",
		thumbnail: "/images/04-math.jpg",
		uploadLink: "https://photos.app.goo.gl/ghi012"
	},
	{
		id: "05",
		title: "Julefrokost 2019",
		thumbnail: "/images/05-christmas.jpg",
		uploadLink: "https://photos.app.goo.gl/jkl345"
	},
	{
		id: "06",
		title: "Idrætsdag 2018",
		thumbnail: "/images/06-sports.jpg",
		uploadLink: "https://photos.app.goo.gl/mno678"
	}
];
