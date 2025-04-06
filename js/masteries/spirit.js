//===============================================================
// Spirit
//===============================================================
spirit = {
"name": "Spirit",
"highlight": "The Theurgist combines offense and defense with insidious life stealing skills that leech enemies' vitality while bolstering their own. At higher levels the ability to summon a powerful Liche King dramatically increases damage-dealing ability.",
"desc": "Provides the arcane knowledge and mental discipline to study the dark art of controlling spirits.",
"str": [0],
"int": [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120],
"dex": [1,3,4,6,7,9,10,12,13,15,16,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43,45,46,48,49,51,52,54,55,57,58,60],
"hp": [20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580,600,620,640,660,680,700,720,740,760,780,800],
"mp": [8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256,264,272,280,288,296,304,312,320],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Ternion Attack
{"idx": 0,
"col": 1,
"tier": 2,
"maxlvl": 12,
"name": "Ternion Attack",
"desc": "This powerful wizard's trick allows you to triple the attack of your staff by channeling magical energy into it. Initially each hit is not as powerful as a normal attack but the effectiveness increases every level.",
"img": "ternion",
"unlocks": [1],
"lockedby": "",
"cooldown": [],
"popup": "Launches $1 Projectiles|$2 Energy Cost|-$3% Total Damage",
"stats": [
	[3],
	[30,31,0,32,0,33,0,34,0,35,0,36],
	[75,70,65,60,55,50,45,40,35,30,25,20]
]},

// Arcane Lore
{"idx": 1,
"col": 1,
"tier": 4,
"maxlvl": 6,
"name": "Arcane Lore",
"desc": "The magic practitioners of older civilizations devised many insidious techniques to bolster the destructive capabilities of their magical staves. Knowledge of these methods will unlock the true power of your staff attacks.",
"img": "arcanelore",
"unlocks": [],
"lockedby": "0",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Meter Radius|+$3% Increase in Projectile Speed",
"stats": [
	[4,5,6,7,8,9],
	[1.0,1.2,1.4,1.6,1.7,1.9],
	[10,18,26,34,42,50]
]},

// Death Ward
{"idx": 2,
"col": 1,
"tier": 6,
"maxlvl": 8,
"name": "Death Ward",
"desc": "Places a magical ward on the player that protects them from death by granting additional life when their life gets dangerously low.",
"img": "deathward",
"unlocks": [],
"lockedby": "",
"cooldown": [300],
"popup": "Activates When Health Drops Below $1%|$2 Second Duration|+$3 Health Restored|$4% Damage Absorption",
"stats": [
	[15],
	[3],
	[330,365,405,450,500,555,615,680],
	[13,25,36,46,55,63,70,77]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Deathchill Aura
{"idx": 3,
"col": 2,
"tier": 1,
"maxlvl": 6,
"name": "Deathchill Aura",
"desc": "A deathly chill radiates from the character slowing the attack and movement of enemies as it diminishes their life.",
"img": "deathlyaura",
"unlocks": [4,5],
"lockedby": "",
"cooldown": [4],
"popup": "$1 Active Energy Cost per Second|$2 Second Duration|$3 Meter Radius|$4% Reduction to Enemy's Health|-$5% Total Speed",
"stats": [
	[1],
	[1],
	[2.5,2.7,3.0,3.2,3.4,3.7],
	["1-3","1-4","2-5","2-6","3-7","3-9"],
	[13,15,17,19,21,25]
]},

// Ravages of Time
{"idx": 4,
"col": 2,
"tier": 2,
"maxlvl": 8,
"name": "Ravages of Time",
"desc": "Accelerates the effects of time on adjacent enemies' equipment causing weapons to dull and armor to crumble.",
"img": "ravagesoftime",
"unlocks": [],
"lockedby": "3",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|-$2% Reduced Damage For 1 Second|-$3% Armor Absorption",
"stats": [
	[1],
	[10,15,18,22,25,29,32,36],
	[11,15,18,22,25,29,32,36]
]},

// Necrosis
{"idx": 5,
"col": 2,
"tier": 4,
"maxlvl": 8,
"name": "Necrosis",
"desc": "Weakens the constitution of adjacent enemies making them more susceptible to attacks that directly damage their life such as vitality damage and life leeching.",
"img": "necrosis",
"unlocks": [],
"lockedby": "3",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|-$2% Bleeding Resistance|-$3% Vitality Damage Resistance|-$4% Life Leech Resistance",
"stats": [
	[1],
	[23,32,39,48,56,65,72,81],
	[23,32,39,48,56,65,72,81],
	[23,32,39,48,56,65,72,81]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Life Drain
{"idx": 6,
"col": 3,
"tier": 1,
"maxlvl": 12,
"name": "Life Drain",
"desc": "Leeches life from an enemy to replenish your own.",
"img": "negativeenergyray",
"unlocks": [7,20],
"lockedby": "",
"cooldown": [6],
"popup": "$1 Energy Cost|$2 Vitality Damage|$3% of Attack Damage Converted to Health",
"stats": [
	[54,58,64,68,72,78,82,86,92,96,100,106],
	[49,63,77,91,105,119,133,147,161,177,193,209],
	[150,160,170,180,190,200,210,220,230,240,250,260]
]},

// Cascade
{"idx": 7,
"col": 3,
"tier": 3,
"maxlvl": 10,
"name": "Cascade",
"desc": "Causes Life Drain to blast through the primary target and hit multiple enemies.",
"img": "desiccation",
"unlocks": [],
"lockedby": "6",
"cooldown": [],
"popup": "$1 Vitality Damage|$2% of Attack Damage Converted to Health",
"stats": [
	[35,39,44,48,52,57,63,71,79,88],
	[150,160,170,180,190,200,210,220,230,240]
],
"pet": {
	"popup": "",
	"stats": [
		[],
		[]
	],
	"skills": [
		{"popup":"",
		"minLevel": 1,
		"stats": [
			[],
			[]
		]}
	]}
},

// Enslave Spirit
{"idx": 8,
"col": 3,
"tier": 4,
"maxlvl": 12,
"name": "Enslave Spirit",
"desc": "Slip through the barriers of your enemies' consciousness and dominate their mind, binding them to your will. While enslaved, your enemy will be forced to obey your commands, but eventually they will regain control of their mind and turn against you.",
"img": "enslavespirit",
"unlocks": [],
"lockedby": "",
"cooldown": [180,171,162,153,144,135,126,117,108,99,90,81],
"popup": "$1 Energy Cost|$2 Seconds of Mind Control",
"stats": [
	[90,92,94,96,98,100,102,104,106,0,108,110],
	["36-48","39-52","42-56","45-60","48-64","51-68","54-72","57-76","60-80","63-84","66-88","69-92"]
]},

// Summon Outsider
{"idx": 9,
"col": 2,
"tier": 6,
"maxlvl": 16,
"name": "Summon Outsider",
"desc": "Calls forth a powerful extra-dimensional entity from beyond the ether. The link can only be maintained for a short time.",
"img": "summonoutsider",
"unlocks": [],
"lockedby": "",
"cooldown": [360],
"popup": "$1 Energy Cost",
"stats": [
	[286,292,298,304,310,316,322,328,334,340,346,352,358,364,370,376]
],
"pet": {
	"name": "Ether Lord",
	"popup": "$1 Second Life Time|$2 Health|$3 Energy",
	"stats": [
		[30],
		[1065,1130,1195,1260,1325,1390,1455,1520,1585,1650,1715,1780,1845,1910,1975,2040],
		[518,536,554,572,590,608,626,644,662,680,698,715,734,752,770,788]
	],
	"skills": [
		{"name": "Ether Strike",
		"popup":"$1 Energy Cost|$2° Arc of Attack|$3 Target Maximum|$4 Elemental Damage|$5% Reduction to Enemy's Health",
		"minLevel": 1,
		"stats": [
			[27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,0],
			[20],
			[3],
			["75-115","83-124","90-132","99-141","107-150","117-161","126-171","137-182","147-193","159-206","170-218","182-230","184-243","207-257","219-270","233-284"],
			[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
		]}
	]}
},

//===============================================================
// Skill Column 4
//===============================================================
// Vision of Death
{"idx": 10,
"col": 4,
"tier": 2,
"maxlvl": 6,
"name": "Vision of Death",
"desc": "Assaults the minds of surrounding enemies with images of their own death causing the weak-hearted to flee in horror and more resolute foes to fight less effectively.",
"img": "visionofdeath",
"unlocks": [],
"lockedby": "",
"cooldown": [14],
"popup": "$1 Energy Cost|$2 Meter Radius|$3% Reduced Damage for $4 Seconds|66% Chance to Fumble Attacks for $5 Seconds|66% Chance of Impaired Aim For $6 Second(s)|$7 Seconds of Fear",
"stats": [
	[50,60,65,70,75,80],
	[3],
	[3,5,7,9,11,13], 
	[3.0,3.6,4.2,4.8,5.4,6.0],
	[3.0,3.6,4.2,4.8,5.4,6.0],
	[3.0,3.6,4.2,4.8,5.4,6.0],
	[3.0,3.5,4.1,4.6,5.2,5.9]
]},

// Dark Covenant
{"idx": 11,
"col": 4,
"tier": 3,
"maxlvl": 6,
"name": "Dark Covenant",
"desc": "Mysterious otherworldly entities offer great power to Spirit Masters who can commune with them. The cost, however, is measured in life.",
"img": "spectralshroud",
"unlocks": [12],
"lockedby": "",
"cooldown": [80],
"popup": "$1 Active Health Cost per Second|$2 Second Duration|$3 Meter Radius|+$4 Energy Regeneration per Second|+$5% Total Speed",
"stats": [
	[15,16,17,18,19,20],
	[10,12,14,16,18,21],
	[15],
	[6,9,12,15,18,21],
	[10]
]},

// Unearthly Power
{"idx": 12,
"col": 4,
"tier": 5,
"maxlvl": 8,
"name": "Unearthly Power",
"desc": "Draw upon even greater otherworldly powers to augment yourself and allies in battle but be wary of the cost exacted from your own vitality.",
"img": "unearthlypower",
"unlocks": [],
"lockedby": "11",
"cooldown": [],
"popup": "$1 Active Health Cost per Second|+$2% Physical Damage|+$3% Bleeding Damage|+$4% Elemental Damage|+$5% Vitality Damage",
"stats": [
	[10,0,11,0,12,0,13,0],
	[8,14,20,26,32,38,44,50],
	[8,10,14,18,22,26,30,34],
	[8,10,14,18,22,26,30,34],
	[8,14,20,26,32,38,44,50]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Summon Liche King
{"idx": 13,
"col": 5,
"tier": 3,
"maxlvl": 16,
"name": "Summon Liche King",
"desc": "In ages past, powerful sorcerers learned how to cheat Hades and persist as undead liches long after death had robbed their bodies of life. A dangerous practice of Theurgists is to bind the souls of these ancient liches to their will, thus acquiring their powers.",
"img": "spectralhero",
"unlocks": [14],
"lockedby": "",
"cooldown": [60],
"popup": "$1 Energy Cost",
"stats": [
	[250,258,266,274,282,290,298,306,314,322,330,338,346,354,362,0]
],
"pet": {
	"name": "Liche King",
	"popup": "$1 Health|$2 Energy",
	"stats": [
		[370,391,411,430,451,471,490,511,531,550,571,591,610,631,651,670],
		[307,324,341,358,375,392,409,426,443,460,477,494,511,528,545,562]
	],
	"skills": [
		{"name": "Spectral Bolt",
		"popup":"$1 Elemental Damage|$2% Reduction to Enemy's Health|$3 Vitality Damage|$4% of Attack Damage Converted to Health",
		"minLevel": 1,
		"stats": [
			[13,16,20,24,28,31,35,39,43,46,50,54,58,61,65,70],
			[3,0,4,0,6,0,0,7,0,9,0,0,10,0,12,0],
			[19,23,27,30,34,38,41,45,49,52,56,60,63,67,71,74],
			[15]
		]},
		{"name": "Soul Blight",
		"popup":"$1 Energy Cost|$2 Meter Radius|$3% Reduction to Enemy's Health|$4% of Attack Damage Converted to Health|$5% Reduced Resistance for 8 Seconds",
		"minLevel": 5,
		"stats": [
			[32,33,35,36,38,39,41,42,44,45,47,48],
			[6],
			[33],
			[33],
			[15,18,22,26,30,34,38,42,46,50,54,58]
		]}
	]}
},

// Death Nova
{"idx": 14,
"col": 5,
"tier": 4,
"maxlvl": 12,
"name": "Death Nova",
"desc": "Emits a wave of death that will deplete life from any living being it contacts.",
"img": "deathnova",
"unlocks": [15],
"lockedby": "13",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Meter Radius|$3% Reduction to Enemy's Health|$4 Vitality Damage|$5% of Attack Damage Converted to Health",
"stats": [
	[60,62,63,66,67,69,71,73,74,77,78,80],
	[6],
	[11,14,17,20,23,26,29,32,35,38,41,44],
	[33,42,51,93,73,84,95,105,119,132,144,158],
	[50]
]},

// Wraith Shell
{"idx": 15,
"col": 5,
"tier": 5,
"maxlvl": 12,
"name": "Wraith Shell",
"desc": "Allows the Liche King to diminish its corporeal presence making it less vulnerable to all types of damage.",
"img": "wraithshell",
"unlocks": [16],
"lockedby": "14",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Active Energy Cost per Second|$3% Damage Absorption|$4% Physical Resistance",
"stats": [
	[50],
	[2],
	[18,23,28,33,38,42,46,50,54,57,60,63],
	[30]
]},

// Arcane Blast
{"idx": 16,
"col": 5,
"tier": 6,
"maxlvl": 16,
"name": "Arcane Blast",
"desc": "Drawing upon ancient arcane craft the Liche King forms deadly bolts of elemental energy and launches them at enemies.",
"img": "arcaneblast",
"unlocks": [],
"lockedby": "15",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Projectiles|$3 Elemental Damage|$4 Vitality Damage|$5 Second of Stun|$6% Slowed for 1.5 Seconds",
"stats": [
	[11,0,12,13,0,0,14,0,15,16,0,17,0,0,18,19],
	[2,0,3,0,0,0,0,0,4,0,0,0,0,0,5,0],
	[51,56,61,66,73,77,82,87,92,100,104,110,114,120,129,133],
	[15,19,23,26,30,33,37,41,44,49,52,56,59,63,69,72],
	[1],
	[15]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Spirit Ward
{"idx": 17,
"col": 6,
"tier": 2,
"maxlvl": 8,
"name": "Spirit Ward",
"desc": "Casts a protective ward that will reduce the damage of undead attacks on the player and nearby allies.",
"img": "spiritward",
"unlocks": [18],
"lockedby": "",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2 Meter Radius|+$3 Damage to Undead|+$4% Less Damage from Undead",
"stats": [
	[1],
	[6],
	[3,5,7,9,11,13,15,17],
	[15,19,23,28,32,36,41,45]
]},

// Spirit Bane
{"idx": 18,
"col": 6,
"tier": 3,
"maxlvl": 6,
"name": "Spirit Bane",
"desc": "Adds damage against undead to the attacks of those under the effect of Spirit Ward.",
"img": "spiritbane",
"unlocks": [],
"lockedby": "17",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|+$2% Damage to Undead|+$3 Damage to Undead",
"stats": [
	[1],
	[20,27,35,44,54,65],
	[9,13,17,21,25,29]
]},

// Circle of Power
{"idx": 19,
"col": 6,
"tier": 5,
"maxlvl": 12,
"name": "Circle of Power",
"desc": "Summons a totem that holds a powerful spirit, infusing you and all allies with great mental energy while standing close to it.",
"img": "circleofpower",
"unlocks": [],
"lockedby": "",
"cooldown": [60],
"popup": "$1 Energy Cost",
"stats": [
	[64,68,72,76,80,84,88,92,96,100,104,108]
],
"pet": {
	"name": "Circle of Power",
	"popup": "$1 Second Life Time|$2 Health",
	"stats": [
		[12],
		[200,225,250,275,300,325,350,375,400,425,450,475]
	],
	"skills": [
		{"name": "Circle of Power",
		"popup":"$1 Second Duration|$2 Meter Radius|+$3% Vitality Damage|+$4% Life Leech|+$5% Casting Speed|-$6% Recharge|-$7% Energy Cost",
		"minLevel": 1,
		"stats": [
			[12],
			[6],
			[100],
			[100],
			[15,18,21,24,27,30,33,36,39,42,45,48],
			[15,18,21,24,27,30,33,36,39,42,45,48],
			[15,18,21,24,27,30,33,36,39,42,45,48]
		]}
	]}
},

//===============================================================
// Tier 7 Skills
//===============================================================
// Soul Drain
{"idx": 20,
"col": 3,
"tier": 7,
"maxlvl": 6,
"name": "Soul Drain",
"desc": "Cause Life Drain to explode outward, causing harm to body and soul.",
"img": "souldrain",
"unlocks": [],
"lockedby": "6",
"cooldown": [],
"popup": "$1 Meter Radius|$2% Reduction to Enemy's Health|$3 Vitality Damage|$4% Energy Drain|$5 second(s) of Sleep|+$6% Damage to Ghost",
"stats": [
	["8.0"],
	[12,18,24,30,36,42],
	[150],
	[6,9,12,15,18,21],
	["2.0"],
	[200]
]},

// Soul Vortex
{"idx": 21,
"col": 6,
"tier": 7,
"maxlvl": 10,
"name": "Soul Vortex",
"desc": "Concentrate your Spirit power to voraciously absorb all life force and energy in your immediate surrounding.",
"img": "soulvortex",
"unlocks": [],
"lockedby": "",
"cooldown": [70],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4 Life Leech per Second|$5 Energy Leech per Second|$6% Slowed for 1.0 Second|$7% Life Leech Resistance|$8% Energy Leech Resistance",
"stats": [
	[120],
	["4.0"],
	["5.0"],
	[36,48,60,72,84,96,108,120,132,144],
	[12,16,20,24,28,32,36,40,44,48],
	[50],
	[100],
	[100]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};