// Find the Difference!
// Bas de Reuver (c)2014
var photodata = [
	{
		fileorg: "p1_org.jpg",
		fileedit: "p1_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x: 405, y: 44, w: 83, h: 101}
		]
	},
	
	{
		fileorg: "p3_org.jpg",
		fileedit: "p3_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x: 72, y: 186, w: 189, h: 61}
		]
	},
	{
		fileorg: "p4_org.jpg",
		fileedit: "p4_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 288, y: 0, w:  193, h: 91}
		]
	},
	{
		fileorg: "p5_org.jpg",
		fileedit: "p5_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 282, y: 257, w: 32, h: 126}
		]
	},
	{
		fileorg: "p6_org.jpg",
		fileedit: "p6_edit.jpg",
		location: "Ten Boer, Netherlands",
		date: "2014-04-12",
		caption: "De Widde Meuln",
		photoby: "Bas de Reuver",
		geoloc: "53.2728485,6.6981217",
		differences: [
			{x: 310, y: 182, w: 104, h: 50}
		]
	},
	{
		fileorg: "p7_org.jpg",
		fileedit: "p7_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-16",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2206246,6.5660408",
		differences: [
			{x: 404, y: 76, w: 55, h: 62}
		]
	},
	{
		fileorg: "p8_org.jpg",
		fileedit: "p8_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-17",
		caption: "Various candy",
		photoby: "Bas de Reuver",
		geoloc: "53.2332923,6.5380508",
		differences: [
			{x: 338, y: 365, w: 136, h: 41}
		]
	},
	{
		fileorg: "p9_org.jpg",
		fileedit: "p9_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Vegetable stand",
		photoby: "Bas de Reuver",
		geoloc: "53.2174194,6.5653905",
		differences: [
			{x: 281, y: 179, w: 82, h: 29}
		]
	},
	{
		fileorg: "p10_org.jpg",
		fileedit: "p10_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x: 50, y: 154,w: 82,h: 103}
		]
	},
	{
		fileorg: "p11_org.jpg",
		fileedit: "p11_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x: 60, y: 273, w: 41, h: 45}
		]
	},
	{
		fileorg: "p12_org.jpg",
		fileedit: "p12_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{x: 285, y: 153, w: 63, h: 93}
		]
	},
	{
		fileorg: "p13_org.jpg",
		fileedit: "p13_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x: 390, y:  41, w: 25, h: 68}
		]
	},
	{
		fileorg: "p14_org.jpg",
		fileedit: "p14_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{ x: 390, y: 208, w: 34, h: 104}
		]
	},
	{
		fileorg: "p15_org.jpg",
		fileedit: "p15_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 373, y: 200, w: 29, h: 56}
		]
	},
	{
		fileorg: "p16_org.jpg",
		fileedit: "p16_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x:234, y: 144, w: 72, h: 102}
		]
	},
	{
		fileorg: "p17_org.jpg",
		fileedit: "17.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{x: 200, y: 175, w: 36, h: 85}
		]
	},
	{
		fileorg: "p18_org.jpg",
		fileedit: "p18_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x: 228, y: 30, w: 30, h: 170}
		]
	},
	{
		fileorg: "p19_org.jpg",
		fileedit: "p19_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 34, y: 381, w: 97, h: 88}
		]
	},
	{
		fileorg: "p20_org.jpg",
		fileedit: "p20_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 127, y: 68, w: 50, h: 40}
		]
	}
]
