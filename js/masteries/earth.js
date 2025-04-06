//===============================================================
// Earth
//===============================================================
earth = {
"name": "Earth",
"highlight": "Adept at raining down destruction Over large hordes of enemies. With most skills designed to deal damage, the Pyromancer relies on a colossal Earth Elemental to hold the attention of enemies.",
"desc": "Trains your mind and spirit in ancient techniques that will enable you to draw power from the Earth and gain mastery Over rock and fire.",
"str": [0],
"int": [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120],
"dex": [1,3,4,6,7,9,10,12,13,15,16,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43,45,46,48,49,51,52,54,55,57,58,60],
"hp": [23,45,68,9,113,135,158,180,203,225,248,270,293,315,338,360,383,405,425,450,473,495,518,540,563,585,608,630,653,675,698,720,743,765,788,810,833,855,878,900],
"mp": [6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198,204,210,216,222,228,234,240],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Earth Enchantment
{"idx": 0,
"col": 1,
"tier": 1,
"maxlvl": 12,
"name": "Earth Enchantment",
"desc": "Imbues your weapons and the weapons of nearby allies with the power of rock and flame.",
"img": "fireenchantment",
"unlocks": [1,2],
"lockedby": "",
"cooldown": [4],
"popup": "$1 Active Energy Cost|$2 Meter Radius|$3 Fire Damage|+$4% Fire Damage|+$5% Burn Damage|+$6 Energy Reserved",
"stats": [
	[1],
	[6.0,6.6,7.2,7.8,8.4,9.0,9.6,10.2,10.8,11.4,12.0,12.6],
	["5-8"],
	[12,20,28,36,44,52,60,68,76,84,92,100],
	[12,20,28,36,44,52,60,68,76,84,92,100],
	[75]
]},

// Brimstone
{"idx": 1,
"col": 1,
"tier": 2,
"maxlvl": 8,
"name": "Brimstone",
"desc": "Boosts the physical damage of attacks and provides a chance of causing critical fire damage while under the effects of Earth Enchantment.",
"img": "brimstone",
"unlocks": [],
"lockedby": "0",
"cooldown": [],
"popup": "$1% Physical Damage|$2 Burn Damage Over 3 Seconds",
"stats": [
	[5,7,9,12,14,16,18,21],
	[19,27,36,46,57,69,82,98]
]},

// Stone Skin
{"idx": 2,
"col": 1,
"tier": 4,
"maxlvl": 10,
"name": "Stone Skin",
"desc": "Tempers armor, increasing protection and fire resistance while under the effects of Earth Enchantment.",
"img": "stoneskin",
"unlocks": [],
"lockedby": "0",
"cooldown": [],
"popup": "$1 Armor|$2% Fire Resistance",
"stats": [
	[3,6,10,14,18,23,28,33,39,45],
	[2,5,7,10,12,15,17,20,22,25]
]},

// Volativity
{"idx": 3,
"col": 1,
"tier": 6,
"maxlvl": 12,
"name": "Volativity",
"desc": "Enhanced by the volatile energy of the Earth, your fire attacks have a chance of inflicting greatly increased damage.",
"img": "volatility",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "33% Chance of:|#+$1% Physical Damage|#+$2% Fire Damage|#+$3% Burn Damage",
"stats": [
	[38,42,46,52,56,60,65,71,75,79,83,89],
	[75,83,92,104,112,120,129,141,149,157,166,178],
	[75,83,92,104,112,120,129,141,149,157,166,178]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Heat Shield
{"idx": 4,
"col": 2,
"tier": 2,
"maxlvl": 12,
"name": "Heat Shield",
"desc": "Casts a protective heat shield on the target that absorbs damage caused by fire.",
"img": "earthshield",
"unlocks": [],
"lockedby": "",
"cooldown": [60],
"popup": "$1 Energy Cost|$2 Second Duration|$3% Damage Absorption|Protects Against:$4|$5 Burn Damage Retaliation Over 3 Seconds|$6% Damage Resistance",
"stats": [
	[45,47,49,52,54,56,59,61,63,66,68,70],
	[100],
	[10,15,20,25,30,35,40,45,50,55,60,65],
	["|#Fire"],
	[4,6,8,10,12,15,18,22,26,30,34,39],
	[15]
]},

// Stone Form
{"idx": 5,
"col": 2,
"tier": 3,
"maxlvl": 12,
"name": "Stone Form",
"desc": "An impervious layer of rock envelops you for a short duration boosting regeneration but prohibiting movement.",
"img": "stoneform",
"unlocks": [6],
"lockedby": "",
"cooldown": [24],
"popup": "$1% Damage Absorption|$2 Energy Cost|$3 Second Duration|+$4 Health Regeneration per Second",
"stats": [
	[100],
	[64,68,72,76,80,84,88,92,96,100,104,108],
	[6],
	[10,17,24,31,38,45,51,59,65,71,77,85]
]},

// Molten Rock
{"idx": 6,
"col": 2,
"tier": 5,
"maxlvl": 8,
"name": "Molten Rock",
"desc": "Adds retaliation fire damage to Stone Form.",
"img": "moltenrock",
"unlocks": [],
"lockedby": "5",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Fire Retaliation",
"stats": [
	[16,18,20,22,24,26,28,30],
	[2],
	[6,10,15,19,23,28,32,36]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Summon Core Dweller
{"idx": 7,
"col": 3,
"tier": 3,
"maxlvl": 16,
"name": "Summon Core Dweller",
"desc": "Draws forth a powerful elemental guardian from the Earth's fiery depths.",
"img": "coredweller",
"unlocks": [8],
"lockedby": "",
"cooldown": [90],
"popup": "$1 Energy Cost",
"stats": [
	[250,258,266,274,282,290,298,306,314,332,330,338,346,354,362,370]
],
"pet": {
	"name": "Core Dweller",
	"popup": "$1 Health|$2 Energy",
	"stats": [
		[651,714,781,843,910,972,1039,1101,1168,1230,1297,1359,1426,1488,1555,1617],
		[131,143,154,166,177,189,200,212,223,235,246,258,269,281,292,304]
	],
	"skills": [
		{"name": "",
		"popup":"$1 Physical Damage",
		"minLevel": 1,
		"stats": [
			["12-21","14-25","17-29","20-34","22-38","25-42","27-47","30-51","33-56","35-59","38-64","40-69","43-74","46-79","48-84","51-90"]
		]}
	]}
},

// Inner Fire
{"idx": 8,
"col": 3,
"tier": 4,
"maxlvl": 8,
"name": "Inner Fire",
"desc": "Increases the Core Dweller's speed and gives it fire retaliation damage.",
"img": "innerfire",
"unlocks": [9],
"lockedby": "7",
"cooldown": [],
"popup": "$1 Fire Damage|+$2% Dexterity|+$3% Health Regeneration|+$4% Total Speed",
"stats": [
	["3-5","5-8","7-11","9-14","11-17","13-20","15-23","18-27"],
	[15,20,25,30,35,40,45,50],
	[24,32,40,48,56,64,72,80],
	[5,6,8,9,12,14,15,17]
]},

// Wildfire
{"idx": 9,
"col": 3,
"tier": 5,
"maxlvl": 12,
"name": "Wildfire",
"desc": "Allows the Core Dweller to ignite an area of ground causing severe burn damage to enemies within.",
"img": "wildfire",
"unlocks": [10],
"lockedby": "8",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4 Burn Damage per Second|$5% Reduced Offensive Ability for 1 Second",
"stats": [
	[49,50,0,51,52,53,54,0,55,56,57,58],
	[5],
	[4],
	["16-25","20-30","24-35","29-41","33-46","37-51","41-56","46-62","50-67","55-73","59-78","65-85"],
	[5,6,7,8,9,10,11,12,13,14,15,16]
]},

// Metamorphosis
{"idx": 10,
"col": 3,
"tier": 6,
"maxlvl": 8,
"name": "Metamorphosis",
"desc": "Under tremendous heat and pressure, the composition of the Core Dweller hardens making it more resistant to damage.",
"img": "metamorphosis",
"unlocks": [],
"lockedby": "9",
"cooldown": [],
"popup": "+$1 Health|+$2% Armor Protection|+$3% Armor Absorption|$4% Elemental Resistance",
"stats": [
	[100,150,200,250,300,350,400,450],
	[10,15,20,25,30,35,40,45],
	[33],
	[4,6,8,10,12,14,16,18]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Ring of Flame
{"idx": 11,
"col": 4,
"tier": 2,
"maxlvl": 12,
"name": "Ring of Flame",
"desc": "Temporarily encircles you in a searing ring of flames that will burn nearby enemies.",
"img": "ringofflame",
"unlocks": [12],
"lockedby": "",
"cooldown": [4],
"popup": "$1 Active Energy Cost per Second|$2 Meter Radius|$3 Fire Damage",
"stats": [
	[2,0,3,0,4,5,6,7,8,9,10,11],
	[1.5,1.8,2.0,2.2,2.4,2.6,2.7,2.8,2.9,3.0,3.1,3.3],
	[5,8,11,14,18,23,27,32,38,44,50,57]
]},

// Soften Metal
{"idx": 12,
"col": 4,
"tier": 4,
"maxlvl": 8,
"name": "Soften Metal",
"desc": "Intense heat from the Ring of Flame softens the metal of enemy armor and weapons decreaing their effectiveness.",
"img": "softenmetal",
"unlocks": [],
"lockedby": "11",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2 Damage|$3% Reduced Offensive Ability For 3 Seconds|$4 Reduced Armor For 3 Seconds",
"stats": [
	[1,0,2,0,3,0,4,5],
	[6,3,8,10,13,16,19,23],
	[3,5,6,8,9,11,12,15],
	[21,30,40,53,65,78,94,110]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Flame Surge
{"idx": 13,
"col": 5,
"tier": 1,
"maxlvl": 12,
"name": "Flame Surge",
"desc": "Three jets of flame erupt from the caster's hands each incinerating fire damage to enemies.",
"img": "flamesurge",
"unlocks": [14,15],
"lockedby": "",
"cooldown": [6],
"popup": "$1 Energy Cost|$2 Projectiles|$3 Fire Damage|$4% Reduced Defensive Ability for 3 Seconds",
"stats": [
	[37,40,43,47,51,54,57,61,65,68,71,75],
	[3],
	["8-15","11-18","13-22","17-27","20-31","23-34","25-38","29-43","32-47","35-50","38-54","43-59"],
	[5,8,11,14,17,20,23,26,29,32,35,38]
]},

// Barrage
{"idx": 14,
"col": 5,
"tier": 3,
"maxlvl": 8,
"name": "Barrage",
"desc": "Reduces the recharge time and energy cost of Flame Surge allowing it to be cast more frequently and efficiently.",
"img": "barrage",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "-$1 Second Recharge|$2% Chance to Pass Through Enemies|$3 Burn Damage Over 3 Seconds|-$4% Energy Cost",
"stats": [
	["0.6",1.2,1.8,2.4,"3.0",3.6,4.2,4.8],
	[45,50,55,60,65,70,75,80],
	["14-41","20-60","27-80","34-102","51-123","49-147","57-170","66-199"],
	[9,13,18,23,27,33,38,44]
]},

// Flame Arch
{"idx": 15,
"col": 5,
"tier": 5,
"maxlvl": 12,
"name": "Flame Arch",
"desc": "Increases the damage and number of flame jets created by Flame Surge.",
"img": "flamearch",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Projectile(s)|+$3 Fire Damage|$4% Chance of 1 Second of Fear",
"stats": [
	[10,11,12,14,20,21,23,24,30,32,33,34],
	[1,0,0,0,2,0,0,0,3,0,0,0],
	["4-8","6-9","7-11","9-14","10-16","12-17","13-19","15-22","16-24","18-25","19-27","22-30"],
	[5]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Volcanic Orb
{"idx": 16,
"col": 6,
"tier": 2,
"maxlvl": 12,
"name": "Volcanic Orb",
"desc": "Lobs a burning orb of fiery brimstone that explodes when it hits the ground inflicting fire and physical damage to enemies in a small radius.",
"img": "volcanicorb",
"unlocks": [17,18],
"lockedby": "",
"cooldown": [5],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Physical Damage|$4 Fire Damage",
"stats": [
	[64,68,72,76,80,84,88,92,96,100,104,108],
	[3],
	[18,21,25,28,31,35,38,41,45,48,51,55],
	["25-54","31-60","37-68","43-74","49-80","55-88","91-94","67-100","73-108","79-114","85-120","91-128"]
]},

// Conflagration
{"idx": 17,
"col": 6,
"tier": 4,
"maxlvl": 8,
"name": "Conflagration",
"desc": "Increases the explosion radius of Volcanic Orb and causes enemies hit by it to catch fire and suffer burn damage.",
"img": "conflagration",
"unlocks": [],
"lockedby": "16",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Burn Damage Over 3 Seconds",
"stats": [
	[6,8,10,12,14,16,18,20],
	[4],
	[27,40,52,69,80,92,104,120]
]},

// Fragmentation
{"idx": 18,
"col": 6,
"tier": 5,
"maxlvl": 12,
"name": "Fragmentation",
"desc": "Causes the Volcanic Orb to violently explode on impact sending out fragments of rock that inflict physical damage to enemies in their path.",
"img": "fragmentation",
"unlocks": [],
"lockedby": "16",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Fragments|$4 Physical Damage,|$5 Fire Damage|$6 Seconds of Stun",
"stats": [
	[10,11,13,15,16,17,19,20,22,23,25,26],
	[2],
	["3-5","4-6","4-7",0,"5-8","5-9",0,"6-10","6-11",0,"7-12","7-13"],
	[35,43,51,60,68,76,84,95,101,109,117,126],
	[12,16,20,25,29,33,37,42,46,50,54,59],
	[1.5]
]},

// Eruption
{"idx": 19,
"col": 6,
"tier": 6,
"maxlvl": 12,
"name": "Eruption",
"desc": "Volcanic fissures form in the ground, emitting deadly geysers of molten flame and fiery chunks of brimstone.",
"img": "eruption",
"unlocks": [],
"lockedby": "",
"cooldown": [20],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4 Fragments|$5 Physical Damage|$6 Fire Damage",
"stats": [
	[95,98,100,103,105,108,110,113,115,118,120,123],
	[6],
	[3],
	["2-3","3-4",0,0,0,"4-5",0,0,0,"5-6",0,0],
	[31,38,44,49,56,62,67,74,80,85,92,98],
	["28-33","35-41","41-48","46-54","53-62","59-69","64-75","71-83","77-90","82-96","89-104","95-112"]
]},

//===============================================================
// Tier 7 Skills
//===============================================================
// Meteor Shower
{"idx": 20,
"col": 2,
"tier": 7,
"maxlvl": 12,
"name": "Meteor Shower",
"desc": "Call down a shower of burning rocks from the heavens.",
"img": "meteorshower",
"unlocks": [],
"lockedby": "",
"cooldown": [45],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4 Damage|$5 Burn Damage over 3.0 Seconds|$6 second(s) of Stun",
"stats": [
	[300,312,321,333,339,351,363,372,384,390,402,414],
	["4.0"],
	[3.5],
	["320-350","400-440","480-528","560-616","640-704","720-800","800-880","880-968","960-1056","1040-1144","1120-1232","1200-1320"],
	[48,60,72,84,96,108,120,132,144,156,168,180],
	["3.0"]
]},

// Fire Nova
{"idx": 21,
"col": 4,
"tier": 7,
"maxlvl": 8,
"name": "Fire Nova",
"desc": "Sends out a ring of flames that ignites everything in the area.",
"img": "firenova",
"unlocks": [],
"lockedby": "",
"cooldown": [15],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Burn Damage over 3.0 Seconds|$4 Fire Damage|$5% Chance of Impaired Aim for 3.0 Seconds",
"stats": [
	[130,150,170,190,210,230,250,270],
	["20.0"],
	[99,111,126,144,165,189,216,246],
	[33,37,42,48,55,63,72,82],
	[11,13,14,16,18,19,21,23]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};