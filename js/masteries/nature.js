//===============================================================
// Nature
//===============================================================
nature = {
"name": "Nature",
"highlight": "The Wanderer can call on denizens of the forst to deal damage and shield them from enemies. Healing and defensive auras allow allies to survive longer and fight more effectively.",
"desc": "Grants the inner harmony and patience necessary to learn the language of wild creatures and master the hidden power of nature.",
"str": [0],
"int": [2,5,7,10,12,15,17,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,60,62,65,67,70,72,75,77,80,82,85,87,90,92,95,97,100],
"dex": [1,3,4,6,7,9,10,12,13,15,16,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43,45,46,48,49,51,52,54,55,57,58,60],
"hp": [20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580,600,620,640,660,680,700,720,740,760,780,700],
"mp": [16,32,48,64,80,96,112,128,144,160,176,192,208,224,240,256,272,288,304,320,336,352,368,374,400,416,432,448,464,480,496,512,528,544,560,576,592,608,624,640],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Heart of Oak
{"idx": 0,
"col": 1,
"tier": 2,
"maxlvl": 12,
"name": "Heart of Oak",
"desc": "Bolsters the life-force of yourself and nearby allies.",
"img": "heartofoak",
"unlocks": [1,2],
"lockedby": "",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2 Meter Radius|+$3% Health|+$4% Total Speed|+$5 Energy Reserved",
"stats": [
	[1],
	[18],
	[10,15,20,25,30,35,40,45,50,55,60,65],
	[10],
	[100]
]},

// Tranquility of Water
{"idx": 1,
"col": 1,
"tier": 4,
"maxlvl": 6,
"name": "Tranquility of Water",
"desc": "Provides a chance to use skills at 50% reduced energy cost while under the effect of Heart of Oak.",
"img": "fluidthought",
"unlocks": [],
"lockedby": "0",
"cooldown": [],
"popup": "$1% Chance of -50% Energy Cost",
"stats": [
	[9,18,27,36,45,54]
]},

// Permanence of Stone
{"idx": 2,
"col": 1,
"tier": 5,
"maxlvl": 6,
"name": "Permanence of Stone",
"desc": "Protects allies from the elements, reducing the damage caused by elemental based attacks.",
"img": "permanenceofstone",
"unlocks": [],
"lockedby": "0",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2% Elemental Resistance",
"stats": [
	[1],
	[5,8,10,12,15,18]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Regrowth
{"idx": 3,
"col": 2,
"tier": 1,
"maxlvl": 16,
"name": "Regrowth",
"desc": "A wave of healing energy rapidly restores lost life to the target ally.",
"img": "regrowth",
"unlocks": [4,5],
"lockedby": "",
"cooldown": [6.3],
"popup": "+$1 Health Restored|$2 Energy Cost",
"stats": [
	[240,300,370,440,530,630,740,870,1010,1160,1320,1500,1690,1900,2120,2360],
	[46,52,58,64,70,76,82,88,94,100,106,112,118,124,130,136]
]},

// Accelerated Growth
{"idx": 4,
"col": 2,
"tier": 2,
"maxlvl": 8,
"name": "Accelerated Growth",
"desc": "Allows Regrowth to be cast more frequently.",
"img": "acceleratedgrowth",
"unlocks": [],
"lockedby": "3",
"cooldown": [],
"popup": "-$1 Second Recharge|-$2% Recharge",
"stats": [
	[0.3,0.5,0.7,0.8,0,0.9,0,0],
	[18,26,34,42,50,57,63,68]
]},

// Dissemination
{"idx": 5,
"col": 2,
"tier": 4,
"maxlvl": 12,
"name": "Dissemination",
"desc": "Causes regrowth energy to disseminate from the initial target and leap to additional nearby allies.",
"img": "dissemination",
"unlocks": [],
"lockedby": "3",
"cooldown": [],
"popup": "+$1 Health Restored",
"stats": [
	[180,225,278,330,398,473,555,653,758,870,990,1125]
]},

// Refresh
{"idx": 6,
"col": 2,
"tier": 6,
"maxlvl": 12,
"name": "Refresh",
"desc": "Subtracts time from recharging skills allows you to use them more frequently.",
"img": "refresh",
"unlocks": [],
"lockedby": "",
"cooldown": [20,21,22,23,24,25,26,27,28,29,30,31],
"popup": "-$1 Second Recharge|$2 Energy Cost",
"stats": [
	[8,12,16,20,24,28,32,36,40,44,48,52],
	[30,45,60,75,90,105,120,135,150,165,180,195]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Briar Ward
{"idx": 7,
"col": 3,
"tier": 3,
"maxlvl": 16,
"name": "Briar Ward",
"desc": "A protective grove of briars grows around you that enemies cannot pass through.",
"img": "briarward",
"unlocks": [8],
"lockedby": "",
"cooldown": [12],
"popup": "$1 Energy Cost",
"stats": [
	[112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172]
],
"pet": {
	"name": "Briar Thickett",
	"popup": "$1 Second Life Time|$2 Health",
	"stats": [
		[30],
		[64,88,112,136,160,184,208,232,256,280,304,328,352,376,400,424]
	],
	"skills": [
		{"name": "Thorns",
		"popup":"$1 Piercing Retaliation",
		"minLevel": 1,
		"stats": [
			["1-3","2-5","3-7","4-9","5-11","6-13","7-15","8-17","9-19","10-21","11-23","12-25","13-27","14-29","15-31","16-33"]
		]}
	]}
},

// Stinging Nettle
{"idx": 8,
"col": 3,
"tier": 4,
"maxlvl": 8,
"name": "Stinging Nettle",
"desc": "Causes enemies who hit the Briar Ward to suffer poisoning.",
"img": "thorns",
"unlocks": [9],
"lockedby": "7",
"cooldown": [],
"popup": "$1 Poison Retaliation Over 6 Seconds",
"stats": [
	[30,48,66,84,102,120,138,156]
]},

// Sanctuary
{"idx": 9,
"col": 3,
"tier": 6,
"maxlvl": 8,
"name": "Sanctuary",
"desc": "The power of the grove revitalizes those within and reduces the energy consumed by skill use.",
"img": "sanctuary",
"unlocks": [],
"lockedby": "8",
"cooldown": [],
"popup": "$1% Damage Absorption|$2 Second Duration|$3 Meter Radius|+$4 Health Regeneration per Second|-$5% Energy Cost",
"stats": [
	[10,12,14,16,18,20,22,24],
	[18],
	[3],
	[10,12,14,16,18,20,22,24],
	[10,12,14,16,18,20,22,24]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Call of the Wild
{"idx": 10,
"col": 4,
"tier": 1,
"maxlvl": 16,
"name": "Call of the Wild",
"desc": "Summons a wolf companion to fight with you in battle. At higher levels more wolves can be controlled at once.",
"img": "callofthewild",
"unlocks": [11],
"lockedby": "",
"cooldown": [20],
"popup": "$1 Energy Cost|$2 Summon Limit",
"stats": [
	[120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180],
	[1,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0]
],
"pet": {
	"name": "Feral Wolf",
	"popup": "$1 Health|$2 Energy",
	"stats": [
		[165,193,222,252,280,310,338,369,397,427,457,488,518,548,581,612],
		[45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90]
	],
	"skills": [
		{"name":"Dodge Attack",
		"popup":"$1% Chance to Dodge Attacks|+$2% Chance to Avoid Projectiles",
		"minLevel": 1,
		"stats": [
			[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
			[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
		]}
	]}
},

// Maul
{"idx": 11,
"col": 4,
"tier": 2,
"maxlvl": 12,
"name": "Maul",
"desc": "A gnawing attack that rends enemy flesh causing bleed damage for a short duration.",
"img": "masticate",
"unlocks": [12],
"lockedby": "10",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Bleeding Damage Over 3 Seconds|$3 Piercing Damage|$4% Reduction to Enemy's Health",
"stats": [
	[24],
	[17,28,39,52,64,77,90,104,116,129,143,158],
	[3,5,7,9,10,12,14,16,17,19,21,23],
	[6,0,8,0,0,10,0,0,12,0,0,13]
]},

// Survival Instinct 
{"idx": 12,
"col": 4,
"tier": 3,
"maxlvl": 16,
"name": "Survival Instinct ",
"desc": "An instinctual will to live is triggered whenever health is low.",
"img": "survivalinstinct",
"unlocks": [13],
"lockedby": "11",
"cooldown": [],
"popup": "Activates When Health Drops Below $1%|$2% Damage Absorption|$3 Second Duration|+$4% Damage",
"stats": [
	[33],
	[15,20,24,30,38,42,47,51,54,60,63,67,70,74,80,0],
	[6],
	[15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90]
]},

// Strength of the Pack
{"idx": 13,
"col": 4,
"tier": 5,
"maxlvl": 12,
"name": "Strength of the Pack",
"desc": "The howl of your wolves emboldens the hearts of those who hear it causing them to fight more fiercely.",
"img": "strengthofthepack",
"unlocks": [],
"lockedby": "12",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|+$4% Physical Damage|+$5 Energy Regeneration per Second|+%6% Total Speed|$7 Armor",
"stats": [
	[25],
	[15],
	[10],
	[15,20,24,30,34,39,43,49,53,58,62,68],
	[1],
	[15],
	[4,6,8,10,12,14,16,18,20,22,24,26]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Sylvan Nymph
{"idx": 14,
"col": 5,
"tier": 4,
"maxlvl": 16,
"name": "Sylvan Nymph",
"desc": "Summons a powerful forest Nymph who can bring down enemies with her magical bow and cast enchantments to strengthen allies in battle.",
"img": "silvannymph",
"unlocks": [15],
"lockedby": "",
"cooldown": [60],
"popup": "$1 Energy Cost|$2 Meter Radius",
"stats": [
	[200,204,209,213,217,222,226,230,235,239,243,248,252,256,261,265],
	[1]
],
"pet": {
	"name": "Sylvan Nymph",
	"popup": "$1 Health|$2 Energy",
	"stats": [
		[199,228,258,287,316,346,375,404,434,463,492,522,551,580,610,639],
		[130,138,146,154,162,170,178,186,194,202,210,218,226,234,242,250]
	],
	"skills": [
		{"name": "Bow Attack",
		"popup":"$1 Piercing Damage|$2% Reduction to Enemy's Health",
		"minLevel": 1,
		"stats": [
			["9-22","12-28","15-33","18-38","21-45","24-50","27-56","30-61","33-66","36-73","39-78","42-84","45-89","48-94","51-101","54-106"],
			[3,0,0,0,0,4,0,0,0,0,0,0,0,0,0,5]
		]},
		{"name":"Dodge Attack",
		"popup":"$1% Chance to Dodge Attacks|+$2% Chance to Avoid Projectiles",
		"minLevel": 1,
		"stats": [
			[18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48],
			[18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48]
		]},
	]}
},

// Overgrowth
{"idx": 15,
"col": 5,
"tier": 5,
"maxlvl": 12,
"name": "Overgrowth",
"desc": "Allows the Nymph to create a living shield around allies that absorbs damage and harms enemies that strike it.",
"img": "overgrowth",
"unlocks": [16],
"lockedby": "14",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Damage Absorption|33% Chance of $3 Piercing Retaliation",
"stats": [
	[8,11,14,17,20,23,26,29,32,35,38,41],
	[78,123,168,213,263,313,363,413,468,523,578,633],
	["1-5","3-7","4-9","6-12","7-14","9-16","10-19","12-21","13-25","15-30","16-31","18-33"]
]},

// Nature's Wrath
{"idx": 16,
"col": 5,
"tier": 6,
"maxlvl": 12,
"name": "Nature's Wrath",
"desc": "Imbues the Nymph's attacks with the power of the elements.",
"img": "natureswrath",
"unlocks": [21],
"lockedby": "15",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Meter Radius|$3% Chance to Pass Through Enemies|$4 Elemental Damage",
"stats": [
	[8,0,9,0,10,0,11,0,12,0,13,0],
	[1.5],
	[33],
	["33-58","40-68","46-78","54-88","60-99","67-110","73-121","81-132","87-143","94-155","100-168","110-182"]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Plague
{"idx": 17,
"col": 6,
"tier": 2,
"maxlvl": 8,
"name": "Plague",
"desc": "Afflicts target with a debilitating ailment that reduces their health and quickly spreads to nearby enemies.",
"img": "disease",
"unlocks": [18,19],
"lockedby": "",
"cooldown": [8],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Poison Damage per Second|$4% Reduction to Enemy's Health",
"stats": [
	[65,68,70,73,75,78,80,83],
	[3.0,3.4,4.0,4.3,4.7,5.3,5.6,6.0],
	[3,6,9,12,16,20,24,28],
	["3-7","4-8","5-9","6-10","7-11","8-12","9-13","10-14"]
]},

// Fatigue
{"idx": 18,
"col": 6,
"tier": 3,
"maxlvl": 8,
"name": "Fatigue",
"desc": "Saps the strength from diseased enemies causing them to move more slowly and fight less effectively.",
"img": "weakness",
"unlocks": [],
"lockedby": "17",
"cooldown": [],
"popup": "5% Chance of $1% Reduction to Enemy's Health|$2 Reduced Physical Damage for 3 Seconds|$3% Reduced Damage for 3 Seconds|-$4% Total Speed",
"stats": [
	[50,52,55,57,61,64,66,69],
	[3,5,6,8,9,11,12,15],
	[15,18,20,23,28,31,34,36],
	[15,18,20,23,25,28,30,33]
]},

// Susceptibility
{"idx": 19,
"col": 6,
"tier": 5,
"maxlvl": 8,
"name": "Susceptibility",
"desc": "Weakens the constitution of adjacent enemies making them more susceptible to poison and damage from the elements.",
"img": "susceptibility",
"unlocks": [],
"lockedby": "17",
"cooldown": [],
"popup": "-$1% Physical Resistance|-$2% Elemental Resistance|-$3% Poison Resistance",
"stats": [
	[12,15,19,24,27,30,34,39],
	[12,15,19,24,27,30,34,39],
	[12,15,19,24,27,30,34,39]
]},

//===============================================================
// Tier 7 Skills
//===============================================================
// Earthbind
{"idx": 20,
"col": 3,
"tier": 7,
"maxlvl": 12,
"name": "Earthbind",
"desc": "Summons roots from the earth to slow and immobilize all foes around you.",
"img": "earthbind",
"unlocks": [],
"lockedby": "",
"cooldown": [20],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Poison Damage over $4 Second|50% reduced Defensive Ability for $5 Second|$6 second(s) of Immobilization|66% Slower Movement for $7 Seconds",
"stats": [
	[65,68,71,74,77,80,83,86,89,92,95,98],
	["22.0"],
	["36-40","47-62","58-77","68-91","79-106","90-120","104-139","119-158","133-178","148-197","162-216","180-240"],
	[1.0,1.3,1.6,1.9,2.2,2.5,2.9,3.3,3.7,4.1,4.5,5.0],
	[1.0,1.3,1.6,1.9,2.2,2.5,2.9,3.3,3.7,4.1,4.5,5.0],
	[1.0,1.3,1.6,1.9,2.2,2.5,2.9,3.3,3.7,4.1,4.5,5.0],
	["2.0"]
]},

// Sylvan Protection
{"idx": 21,
"col": 5,
"tier": 7,
"maxlvl": 8,
"name": "Sylvan Protection",
"desc": "“The Nymph calls upon the vines of the undergrowth to keep enemies at bay.”",
"img": "sylvanprotection",
"unlocks": [],
"lockedby": "16",
"cooldown": [20],
"popup": "$1 Energy Cost|$2 Damage|$3 Piercing Damage|$4% Reduction to Enemy's Health|66% reduced Defensive Ability for $5 Second|$6 second(s) of Immobilization|75% Slower Movement for $7 Seconds",
"stats": [
	[12,13,14,15,0,16,18,0],
	["68-93","92-112","116-154","138-184","162-216","186-248","210-280","234-312"],
	["35-45","47-61","59-77","71-92","83-108","-95-124","107-140","119-156"],
	[8,10,12,14,16,18,20,22],
	[1.0,1.3,1.5,1.8,2.0,2.3,2.5,2.8],
	[1.0,1.3,1.5,1.8,2.0,2.3,2.5,2.8],
	[2.0,2.3,2.5,2.8,3.0,3.3,3.5,3.8]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};