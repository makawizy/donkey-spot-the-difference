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
	},
	{
		fileorg: "p21_org.jpg",
		fileedit: "p21_edit.jpg",
		location: "Ten Boer, Netherlands",
		date: "2014-04-12",
		caption: "De Widde Meuln",
		photoby: "Bas de Reuver",
		geoloc: "53.2728485,6.6981217",
		differences: [
			{x:  82, y: 75, w: 157, h: 440}
		]
	},
	{
		fileorg: "p22_org.jpg",
		fileedit: "p22_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-16",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2206246,6.5660408",
		differences: [
			{x:  74, y: 100, w: 88, h: 69}
		]
	},
	{
		fileorg: "p23_org.jpg",
		fileedit: "p23_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-17",
		caption: "Various candy",
		photoby: "Bas de Reuver",
		geoloc: "53.2332923,6.5380508",
		differences: [
			{x: 270, y: 266, w: 71, h: 55}
		]
	},
	{
		fileorg: "p24_org.jpg",
		fileedit: "p24_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Vegetable stand",
		photoby: "Bas de Reuver",
		geoloc: "53.2174194,6.5653905",
		differences: [
			{x: 250, y: 33, w: 83, h: 81}
		]
	},
	{
		fileorg: "p25_org.jpg",
		fileedit: "p25_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x: 247, y: 333, w: 26, h: 22}
		]
	},
	{
		fileorg: "p26_org.jpg",
		fileedit: "p26_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x: 71, y: 29, w: 52, h: 36}
		]
	},
	{
		fileorg: "p27_org.jpg",
		fileedit: "p27_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{ x: 279, y: 195, w: 59, h: 55}
		]
	},
	{
		fileorg: "p28_org.jpg",
		fileedit: "p28_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x: 151, y: 221, w: 39, h: 33}
		]
	},
	{
		fileorg: "p29_org.jpg",
		fileedit: "p29_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 264, y: 155, w: 52, h: 82}
		]
	},
	{
		fileorg: "p30_org.jpg",
		fileedit: "p30_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 62, y: 7, w: 75, h: 64}
		]
	},
	{
		fileorg: "p31_org.jpg",
		fileedit: "p31_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x:  217, y: 281, w:  149, h: 123}
		]
	},
	{
		fileorg: "p32_org.jpg",
		fileedit: "p32_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{x: 347, y:  352, w: 214, h: 30}
		]
	},
	{
		fileorg: "p33_org.jpg",
		fileedit: "p33_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x: 224, y: 143, w: 83, h: 73}
		]
	},
	{
		fileorg: "p34_org.jpg",
		fileedit: "p34_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x:  108, y: 192, w: 162, h: 113 }
		]
	},
	{
		fileorg: "p35_org.jpg",
		fileedit: "p35_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 297, y: 148, w: 105, h: 82}
		]
	},
	{
		fileorg: "p36_org.jpg",
		fileedit: "p36_edit.jpg",
		location: "Ten Boer, Netherlands",
		date: "2014-04-12",
		caption: "De Widde Meuln",
		photoby: "Bas de Reuver",
		geoloc: "53.2728485,6.6981217",
		differences: [
			{x: 318, y: 161, w: 36, h: 59}
		]
	},
	{
		fileorg: "p37_org.jpg",
		fileedit: "p37_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-16",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2206246,6.5660408",
		differences: [
			{x: 257, y: 233, w: 69, h: 43}
		]
	},
	{
		fileorg: "p38_org.jpg",
		fileedit: "p38_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-17",
		caption: "Various candy",
		photoby: "Bas de Reuver",
		geoloc: "53.2332923,6.5380508",
		differences: [
			{x: 436, y: 391, w: 39, h: 59}
		]
	},
	{
		fileorg: "p39_org.jpg",
		fileedit: "p39_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Vegetable stand",
		photoby: "Bas de Reuver",
		geoloc: "53.2174194,6.5653905",
		differences: [
			{x:  433, y: 373, w: 33, h: 56}
		]
	},
	{
		fileorg: "p40_org.jpg",
		fileedit: "p40_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x: 204, y: 236, w: 106, h: 61}
		]
	}
]
