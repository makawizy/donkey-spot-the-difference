// Find the Difference!
// Bas de Reuver (c)2014
var photodata = [
	{
		fileorg: "A1_org.jpg",
		fileedit: "A1_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x:  265, y:   51, w: 20, h: 178}
		]
	},
	{
		fileorg: "A2_org.jpg",
		fileedit: "A2_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{x: 335, y: 438, w: 43, h: 49}
		]
	},
	{
		fileorg: "A3_org.jpg",
		fileedit: "A3_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x:  264, y: 139, w: 39, h: 44}
		]
	},
	{
		fileorg: "A4_org.jpg",
		fileedit: "A4_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x:  305, y: 367, w: 32, h: 58}
		]
	},
	{
		fileorg: "A5_org.jpg",
		fileedit: "A5_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 209, y: 411, w: 25, h: 39}
		]
	},
	{
		fileorg: "A6_org.jpg",
		fileedit: "A6_edit.jpg",
		location: "Ten Boer, Netherlands",
		date: "2014-04-12",
		caption: "De Widde Meuln",
		photoby: "Bas de Reuver",
		geoloc: "53.2728485,6.6981217",
		differences: [
			{x:   326, y: 43, w:  38, h: 41}
		]
	},
	{
		fileorg: "A7_org.jpg",
		fileedit: "A7_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-16",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2206246,6.5660408",
		differences: [
			{x: 280, y: 114, w: 82, h: 69}
		]
	},
	{
		fileorg: "A8_org.jpg",
		fileedit: "A8_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-17",
		caption: "Various candy",
		photoby: "Bas de Reuver",
		geoloc: "53.2332923,6.5380508",
		differences: [
			{x: 191, y: 268, w:44, h: 60}
		]
	},
	{
		fileorg: "A9_org.jpg",
		fileedit: "A9_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Vegetable stand",
		photoby: "Bas de Reuver",
		geoloc: "53.2174194,6.5653905",
		differences: [
			{x: 198, y: 128, w:71, h: 50}
		]
	},
	{
		fileorg: "A10_org.jpg",
		fileedit: "A10_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x:   0, y: 124, w: 245, h: 82}
		]
	},
	{
		fileorg: "A11_org.jpg",
		fileedit: "A11_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x:  98, y:   60, w: 49, h: 160}
		]
	},
	{
		fileorg: "A12_org.jpg",
		fileedit: "A12_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{x: 87, y: 22, w: 114, h: 170}
		]
	},
	{
		fileorg: "A13_org.jpg",
		fileedit: "A13_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x:  143, y: 337, w: 79, h: 143}
		]
	},
	{
		fileorg: "A14_org.jpg",
		fileedit: "A14_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x:  30, y: 78, w: 52, h: 38}
		]
	},
	{
		fileorg: "A15_org.jpg",
		fileedit: "A15_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 115, y: 232, w: 62, h: 64}
		]
	},
	{
		fileorg: "A16_org.jpg",
		fileedit: "A16_edit.jpg",
		location: "Ten Boer, Netherlands",
		date: "2014-04-12",
		caption: "De Widde Meuln",
		photoby: "Bas de Reuver",
		geoloc: "53.2728485,6.6981217",
		differences: [
			{x:   313, y: 308, w:  73, h: 96}
		]
	},
	{
		fileorg: "A17_org.jpg",
		fileedit: "A17_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-16",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2206246,6.5660408",
		differences: [
			{x: 261, y: 108, w: 67, h: 57}
		]
	},
	{
		fileorg: "A18_org.jpg",
		fileedit: "A18_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-17",
		caption: "Various candy",
		photoby: "Bas de Reuver",
		geoloc: "53.2332923,6.5380508",
		differences: [
			{x: 194, y: 61, w:40, h: 45}
		]
	},
	{
		fileorg: "A19_org.jpg",
		fileedit: "A19_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Vegetable stand",
		photoby: "Bas de Reuver",
		geoloc: "53.2174194,6.5653905",
		differences: [
			{x: 367, y: 147, w:88, h: 75}
		]
	},
	{
		fileorg: "A20_org.jpg",
		fileedit: "A20_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x:   251, y: 15, w: 167, h: 148}
		]
	},
	{
		fileorg: "A21_org.jpg",
		fileedit: "A21_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x:   135, y: 47, w: 73, h: 69}
		]
	},
	{
		fileorg: "A22_org.jpg",
		fileedit: "A22_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x:  15, y:   139, w: 60, h: 56}
		]
	},
	{
		fileorg: "A23_org.jpg",
		fileedit: "A23_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{x: 185, y: 250, w: 59, h: 127}
		]
	},
	{
		fileorg: "A24_org.jpg",
		fileedit: "A24_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x:  372, y: 150, w: 70, h: 76}
		]
	},
	{
		fileorg: "A25_org.jpg",
		fileedit: "A25_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x:  395, y: 395, w: 54, h: 78}
		]
	},
	{
		fileorg: "A26_org.jpg",
		fileedit: "A26_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 185, y: 258, w: 86, h: 112}
		]
	},
	{
		fileorg: "A27_org.jpg",
		fileedit: "A27_edit.jpg",
		location: "Ten Boer, Netherlands",
		date: "2014-04-12",
		caption: "De Widde Meuln",
		photoby: "Bas de Reuver",
		geoloc: "53.2728485,6.6981217",
		differences: [
			{x:   209, y: 111, w:  103, h: 77}
		]
	},
	{
		fileorg: "A28_org.jpg",
		fileedit: "A28_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-16",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2206246,6.5660408",
		differences: [
			{x: 186, y: 313, w: 113, h: 102}
		]
	},
	{
		fileorg: "A29_org.jpg",
		fileedit: "A29_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-17",
		caption: "Various candy",
		photoby: "Bas de Reuver",
		geoloc: "53.2332923,6.5380508",
		differences: [
			{x: 368, y: 409, w:82, h: 102}
		]
	},
	{
		fileorg: "A30_org.jpg",
		fileedit: "A30_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Vegetable stand",
		photoby: "Bas de Reuver",
		geoloc: "53.2174194,6.5653905",
		differences: [
			{x: 364, y: 0, w:116, h: 125}
		]
	},
	{
		fileorg: "A31_org.jpg",
		fileedit: "A31_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x:   361, y: 0, w: 40, h: 20}
		]
	},
	{
		fileorg: "A32_org.jpg",
		fileedit: "32_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x:  223, y:   243, w: 33, h: 39}
		]
	},
	{
		fileorg: "A33_org.jpg",
		fileedit: "A33_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{x: 385, y: 279, w: 96, h: 101}
		]
	},
	{
		fileorg: "A34_org.jpg",
		fileedit: "A34_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x:  421, y: 290, w: 59, h: 104}
		]
	},
	{
		fileorg: "A35_org.jpg",
		fileedit: "A35_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x:  124, y: 325, w: 37, h: 65}
		]
	},
	{
		fileorg: "A36_org.jpg",
		fileedit: "A36_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 110, y: 49, w: 93, h: 39}
		]
	},
	{
		fileorg: "A37_org.jpg",
		fileedit: "A37_edit.jpg",
		location: "Ten Boer, Netherlands",
		date: "2014-04-12",
		caption: "De Widde Meuln",
		photoby: "Bas de Reuver",
		geoloc: "53.2728485,6.6981217",
		differences: [
			{x:   362, y: 286, w:  44, h: 63}
		]
	},
	{
		fileorg: "A38_org.jpg",
		fileedit: "A38_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-16",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2206246,6.5660408",
		differences: [
			{x: 155, y: 254, w: 33, h: 30}
		]
	},
	{
		fileorg: "A39_org.jpg",
		fileedit: "A39_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-17",
		caption: "Various candy",
		photoby: "Bas de Reuver",
		geoloc: "53.2332923,6.5380508",
		differences: [
			{x: 437, y: 254, w:18, h: 34}
		]
	},
	{
		fileorg: "A40_org.jpg",
		fileedit: "A40_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Vegetable stand",
		photoby: "Bas de Reuver",
		geoloc: "53.2174194,6.5653905",
		differences: [
			{x: 426, y: 445, w:53, h: 68}
		]
	},
	{
		fileorg: "A41_org.jpg",
		fileedit: "A41_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x:   133, y: 371, w: 30, h: 17}
		]
	},
	{
		fileorg: "A42_org.jpg",
		fileedit: "A42_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x:  129, y:   400, w: 183, h: 113}
		]
	},
	{
		fileorg: "A43_org.jpg",
		fileedit: "A43_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{x: 263, y: 49, w: 61, h: 105}
		]
	},
	{
		fileorg: "A44_org.jpg",
		fileedit: "A44_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x:  81, y: 367, w: 65, h: 105}
		]
	},
	{
		fileorg: "A45_org.jpg",
		fileedit: "A45_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x:  192, y: 135, w: 44, h: 71}
		]
	},
	{
		fileorg: "A46_org.jpg",
		fileedit: "A46_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 0, y: 0, w: 112, h: 78}
		]
	},
	{
		fileorg: "A47_org.jpg",
		fileedit: "A47_edit.jpg",
		location: "Ten Boer, Netherlands",
		date: "2014-04-12",
		caption: "De Widde Meuln",
		photoby: "Bas de Reuver",
		geoloc: "53.2728485,6.6981217",
		differences: [
			{x:   358, y: 0, w:  76, h: 51}
		]
	},
	{
		fileorg: "A48_org.jpg",
		fileedit: "A48_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-16",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2206246,6.5660408",
		differences: [
			{x: 122, y: 0, w: 236, h: 166}
		]
	},
	{
		fileorg: "A49_org.jpg",
		fileedit: "A49_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-17",
		caption: "Various candy",
		photoby: "Bas de Reuver",
		geoloc: "53.2332923,6.5380508",
		differences: [
			{x: 245, y: 381, w:39, h: 35}
		]
	},
	{
		fileorg: "A50_org.jpg",
		fileedit: "A50_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Vegetable stand",
		photoby: "Bas de Reuver",
		geoloc: "53.2174194,6.5653905",
		differences: [
			{x: 124, y: 336, w:65, h: 46}
		]
	},
	{
		fileorg: "A51_org.jpg",
		fileedit: "A51_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x:   330, y: 320, w: 86, h: 125}
		]
	},
	{
		fileorg: "A52_org.jpg",
		fileedit: "A52_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x:   0, y: 178, w: 104, h: 282}
		]
	},
	{
		fileorg: "A53_org.jpg",
		fileedit: "A53_edit.jpg",
		location: "Rome, Italy",
		date: "2011-09-01",
		caption: "Piazza Navona street artist",
		photoby: "Bas de Reuver",
		geoloc: "41.8994357,12.4729958", // http://mygeoposition.com/
		differences: [
			{x:  248, y:   240, w: 20, h: 80}
		]
	},
	{
		fileorg: "A54_org.jpg",
		fileedit: "A54_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-03-29",
		caption: "Flower Stand, Vismarkt",
		photoby: "Bas de Reuver",
		geoloc: "53.2172917,6.5642747",
		differences: [
			{x: 425, y: 40, w: 26, h: 46}
		]
	},
	{
		fileorg: "A55_org.jpg",
		fileedit: "A55_edit.jpg",
		location: "Venice, Italy",
		date: "2006-08-23",
		caption: "Masks, Venice",
		photoby: "Bas de Reuver",
		geoloc: "45.4345465,12.3369840",
		differences: [
			{x:  53, y: 164, w: 83, h: 126}
		]
	},
	{
		fileorg: "A56_org.jpg",
		fileedit: "A56_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-18",
		caption: "Scrabble board",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x:  23, y: 354, w: 31, h: 133}
		]
	},
	{
		fileorg: "A57_org.jpg",
		fileedit: "A57_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-20",
		caption: "Jigsaw puzzle",
		photoby: "Bas de Reuver",
		geoloc: "53.2517467,6.5880505",
		differences: [
			{x: 276, y: 162, w: 31, h: 132}
		]
	},
	{
		fileorg: "A58_org.jpg",
		fileedit: "A58_edit.jpg",
		location: "Ten Boer, Netherlands",
		date: "2014-04-12",
		caption: "De Widde Meuln",
		photoby: "Bas de Reuver",
		geoloc: "53.2728485,6.6981217",
		differences: [
			{x:   372, y: 150, w:  35, h: 70}
		]
	},
	{
		fileorg: "A59_org.jpg",
		fileedit: "A59_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-16",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2206246,6.5660408",
		differences: [
			{x: 52, y: 175, w: 75, h: 62}
		]
	},
	{
		fileorg: "A60_org.jpg",
		fileedit: "A60_edit.jpg",
		location: "Groningen, Netherlands",
		date: "2014-04-17",
		caption: "Various candy",
		photoby: "Bas de Reuver",
		geoloc: "53.2332923,6.5380508",
		differences: [
			{x: 359, y: 116, w:29, h: 64}
		]
	},
	{
		fileorg: "A61_org.jpg",
		fileedit: "A61_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Vegetable stand",
		photoby: "Bas de Reuver",
		geoloc: "53.2174194,6.5653905",
		differences: [
			{x: 308, y: 163, w:125, h: 73}
		]
	},
	{
		fileorg: "A62_org.jpg",
		fileedit: "A62_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x:   160, y: 402, w: 36, h: 28}
		]
	},
	{
		fileorg: "A63_org.jpg",
		fileedit: "A63_edit.jpg",
		location: "Groningen, The Netherlands",
		date: "2014-04-19",
		caption: "Pastery shop",
		photoby: "Bas de Reuver",
		geoloc: "53.2141927,6.5690424",
		differences: [
			{x:   228, y: 21, w: 64, h: 82}
		]
	}
]