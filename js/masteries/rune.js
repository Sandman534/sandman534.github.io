//===============================================================
// Rune
//===============================================================
rune = {
"name": "Rune",
"highlight": "The warrior-shamans of the North inscribe their weapons and armor with magical runes, or cast them on the ground to control the battlefield. Drawing power from the ecstasy of combat, they are both proficient in melee and able to unleash magical fury.",
"desc": "Provides physical conditioning and discipline that will allow your character to master the skills of a warrior.",
"str": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
"int": [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80],
"dex": [2,3,5,6,8,9,11,12,14,15,16,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43,45,46,48,49,51,52,54,55,57,58,60],
"hp": [20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580,600,620,640,660,680,700,720,740,760,780,800],
"mp": [0],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Rune Weapon
{"idx": 0,
"col": 1,
"tier": 1,
"maxlvl": 10,
"name": "Rune Weapon",
"desc": "In the rush of glorious combat, every strike you land pushes your mind further into an ecstatic state, increasing the force of all magical abilities.",
"img": "runeweapon",
"unlocks": [1],
"lockedby": "",
"cooldown": [],
"popup": "$1 Active Energy Cost|$2 Charge Level|+$3% Elemental Damage|+$4% Total Damage|+$5% Intelligence",
"stats": [
	[1],
	[1,2,3,4,5,6,7,8,9,10],
	[3,5,8,10,13,15,18,20,23,25],
	[3,5,8,10,13,15,18,20,23,25],
	[10,20,30,40,50,60,70,80,90,100]
]},

// Magical Charge
{"idx": 1,
"col": 1,
"tier": 2,
"maxlvl": 16,
"name": "Magical Charge",
"desc": "The power building up as you fight ignites your runed weapons with Elemental magic and strikes out at anyone who touches you.",
"img": "runeweapon_damage",
"unlocks": [2],
"lockedby": "0",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Elemental Damage|$3 Elemental Retaliation",
"stats": [
	[1,0,0,2,0,0,0,0,3,0,0,0,0,4,0,0],
	[6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51],
	[12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102]
]},

// Energy Drain
{"idx": 2,
"col": 1,
"tier": 4,
"maxlvl": 10,
"name": "Energy Drain",
"desc": "Advanced inscriptions on your weapon make it actively drain the enemy's energy, fueling your own while weakening their resolve.",
"img": "runeweapon_energydrain",
"unlocks": [3],
"lockedby": "1",
"cooldown": [],
"popup": "$1 Energy Leech per Second|$2% of Attack Damage Converted to Health|$3% Reduced Offensive Ability for 3 Seconds|$4% Slowed for 3 Seconds",
"stats": [
	[12,18,24,30,36,42,48,54,60,66],
	[4],
	[4,6,8,10,12,14,16,18,20,22],
	[4,6,8,10,12,14,16,18,20,22]
]},

// Transmutation
{"idx": 3,
"col": 1,
"tier": 6,
"maxlvl": 6,
"name": "Transmutation",
"desc": "A master Runesmith is able to convert the very nature of their weapon, turning mere metal into a manifestation of Elemental magic.",
"img": "runeweapon_convert",
"unlocks": [],
"lockedby": "2",
"cooldown": [],
"popup": "$1 Energy Cost|$2% of Weapon Damage Becomes Elemental",
"stats": [
	[1],
	[18,27,36,45,54,63]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Sacred Rage
{"idx": 4,
"col": 2,
"tier": 2,
"maxlvl": 10,
"name": "Sacred Rage",
"desc": "The power building up as you fight ignites your runed weapons with Elemental magic and strikes out at anyone who touches you.",
"img": "rage",
"unlocks": [5],
"lockedby": "",
"cooldown": [],
"popup": "Activates When Health Drops Below $1%|$2 Second Duration|$3% Damage Absorption|+$4 Energy Regeneration|+$5% Total Speed|-$6% Recharge|$7% Slow Resistance",
"stats": [
	[40],
	[10],
	[20],
	[3.0,4.5,6.0,7.5,9.0,10.5,12.0,13.5,15.0,16.5],
	[10,14,18,22,26,30,34,38,42,46],
	[10,14,18,22,26,30,34,38,42,46],
	[50]
]},

// Frightening Power
{"idx": 5,
"col": 2,
"tier": 3,
"maxlvl": 6,
"name": "Frightening Power",
"desc": "The power building up as you fight ignites your runed weapons with Elemental magic and strikes out at anyone who touches you.",
"img": "rage_frighten",
"unlocks": [],
"lockedby": "4",
"cooldown": [],
"popup": "$1 Meter Radius|10% Reduction to Enemy's Health|$2% Reduced Damage for 3 Seconds|$3% Chance of 1-3 Seconds of Fear",
"stats": [
	[10],
	[10,19,27,34,40,45],
	[20,22,24,26,28,30],
	[27,39,50,60,69,77]
]},

// Reckless Offense
{"idx": 6,
"col": 2,
"tier": 5,
"maxlvl": 12,
"name": "Reckless Offense",
"desc": "Those who follow the way of the Berserker fight with the mind of an enraged animal, and will forgo the tactical subtleties of a shield to wildly attack with weapons in both hands.",
"img": "barrage",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1% Chance to be Used|+$2% Total Damage",
"stats": [
	[4,6,7,9,10,12,13,15,16,18,19,21],
	[100]
]},

// Energy Armor
{"idx": 7,
"col": 2,
"tier": 6,
"maxlvl": 8,
"name": "Energy Armor",
"desc": "Weave vast amounts of Energy into a layer of magical armor for yourself and nearby allies that protects against physical attacks.",
"img": "energyarmor",
"unlocks": [],
"lockedby": "",
"cooldown": [25],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Damage Absorption|Protects Against:$4|$5% Stun Resistance",
"stats": [
	[40,60,90,135,203,304,456,684],
	[5],
	[80,120,180,270,405,608,911,1367],
	["|#Fire|#Physical|#Pierce|#Bleeding"],
	[50]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Runeword: Feather
{"idx": 8,
"col": 3,
"tier": 1,
"maxlvl": 6,
"name": "Runeword: Feather",
"desc": "This basic engraving reduces the weight of a weapon or shield, letting a Runemaster wield even heavy blades with grace and precision.",
"img": "featherweight",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "+$1 Offensive Ability|-$2% Strength Requirement for All Weapons",
"stats": [
	[30,45,60,75,90,105],
	[14,20,26,32,37,42]
]},

// Runeword: Explode
{"idx": 9,
"col": 3,
"tier": 3,
"maxlvl": 10,
"name": "Runeword: Explode",
"desc": "Weapon inscribed with this powerful rune may cause a successful hit to blast outward, striking multiple enemies.",
"img": "explodostrike",
"unlocks": [10],
"lockedby": "",
"cooldown": [],
"popup": "$1% Chance to be Used|$2° Arc of Attack|$3 Meter Radius|$4 Damage|$5 Fire Damage|$6 Seconds of Stun",
"stats": [
	[4,6,7,9,11,13,14,16,18,20],
	[120],
	[2.5],
	[8,12,16,20,24,28,32,36,40,44],
	[8,12,16,20,24,28,32,36,40,44],
	[0.5]
]},

// Runeword: Burn
{"idx": 10,
"col": 3,
"tier": 4,
"maxlvl": 10,
"name": "Runeword: Burn",
"desc": "Makes your strikes explode with intense heat, and projectiles break into burning fragments.",
"img": "explodostrike_fragments",
"unlocks": [],
"lockedby": "9",
"cooldown": [],
"popup": "$1 Meter Radius|$2 Fragments|$3 Burn Damage Over 3 Seconds",
"stats": [
	[2.5],
	["4-5"],
	[29,42,57,74,92,111,132,155,179,204]
]},

// Runeword: Absorb
{"idx": 11,
"col": 3,
"tier": 5,
"maxlvl": 8,
"name": "Runeword: Absorb",
"desc": "Enchants a shield or a staff with the ability to absorb the energy of enemy blows and spells, adding it to your own.",
"img": "absorption",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "-$1% Shield Recovery Time|$2% Absorption of Spell Energy|$3 Energy Leech Retaliation per Second",
"stats": [
	[15,22,29,35,41,46,51,55],
	[23,34,45,56,67,78,89,100],
	[12,18,24,30,36,42,48,54]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Thunder Strike
{"idx": 12,
"col": 4,
"tier": 2,
"maxlvl": 10,
"name": "Thunder Strike",
"desc": "An arcane weapon technique that channels the power of thunder, hitting multiple enemies with staggering force.",
"img": "thunderstrike",
"unlocks": [13],
"lockedby": "",
"cooldown": [7],
"popup": "$1 Energy Cost|$2° Arc of Attack|$3% Chance to Pass Through Enemies|$4 Projectiles|$5 Lightning Damage|$6 Seconds of Stun|+$7% Movement Speed",
"stats": [
	[30,32,34,36,38,40,42,44,46,48],
	[250],
	[50],
	[5],
	["2-20"],
	["0.1-0.5","0.2-0.5","0.2-0.6","0.3-0.6","0.3-0.7","0.4-0.7","0.4-0.8","0.5-0.8","0.5-0.9","0.6-0.9"],
	[100]
]},

// Unleash
{"idx": 13,
"col": 4,
"tier": 3,
"maxlvl": 10,
"name": "Unleash",
"desc": "Unleash the full force of the thunderbolt to electrocute and daze enemies across a wide area.",
"img": "thunderstrike_unleash",
"unlocks": [],
"lockedby": "12",
"cooldown": [],
"popup": "$1 Meter Radius|$2 Electrical Burn Damage per Second|$3 Second of Skill Disruption|$4% Chance of 1-3 Seconds of Confusion",
"stats": [
	[5],
	[32,48,64,80,96,112,128,144,160,176],
	[1],
	[4,6,8,10,12,14,16,18,20,22]
]},

// Seal of Fate
{"idx": 14,
"col": 4,
"tier": 4,
"maxlvl": 12,
"name": "Seal of Fate",
"desc": "Take a few moments to draw an intricate sigil on the ground that will then explode with tremendous force.",
"img": "circle",
"unlocks": [15],
"lockedby": "",
"cooldown": [9],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4 Elemental Damage|$5% Reduction to Enemy's Health|$6 Seconds of Stun|+$7% Damage to Devices",
"stats": [
	[40,42,44,46,48,50,52,54,56,58,60,62],
	[4],
	[100,150,200,250,300,350,400,450,500,550,600,650],
	[20,22,24,26,28,30,32,34,36,38,40,42],
	[2],
	[100]
]},

// Aftershock
{"idx": 15,
"col": 4,
"tier": 6,
"maxlvl": 6,
"name": "Aftershock",
"desc": "The shock of the explosion leaves even those who survive battered and vulnerable.",
"img": "circle_aftershock",
"unlocks": [],
"lockedby": "14",
"cooldown": [],
"popup": "$1 Meter Radius|$2 Bleeding Damage Over 4 Seconds|$3 Reduced Armor for 4 Seconds|$4 Reduced Resistances for 4 Seconds|$5% Chance of Impaired Aim for 4 Seconds|$6 Seconds of Skill Disruption|$7% Slowed for 4 Seconds",
"stats": [
	[4],
	[88,132,176,220,264,308],
	[140,210,280,350,420,490],
	[14,21,28,35,42,49],
	[60],
	[4],
	[20]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Runic Mines
{"idx": 16,
"col": 5,
"tier": 2,
"maxlvl": 10,
"name": "Runic Mines",
"desc": "Cast a circle of defensive runes on the ground around you that will detonate if enemies step on them.",
"img": "runemines",
"unlocks": [17,21],
"lockedby": "",
"cooldown": [9],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4 Elemental Damage",
"stats": [
	[40,45,50,56,61,66,72,77,82,88],
	[10],
	[2],
	["18-26","27-39","36-52","45-65","54-78","63-91","72-104","81-117","90-130","99-143"]
]},

// Freezing Mines
{"idx": 17,
"col": 5,
"tier": 5,
"maxlvl": 8,
"name": "Freezing Mines",
"desc": "Enhances the aspect of Cold on your Runic Mines|causing enemies to be slowed and frozen.",
"img": "runemines_freeze",
"unlocks": [],
"lockedby": "16",
"cooldown": [],
"popup": "$1 Frostburn Damage Over 3 Seconds|$2% Chance of 0.2-2.0 Seconds of Freeze|$3% Slowed for 3 Seconds",
"stats": [
	[36,54,72,90,108,126,144,162],
	[25],
	[20,24,28,32,36,40,44,48]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Rune of Life
{"idx": 18,
"col": 6,
"tier": 1,
"maxlvl": 6,
"name": "Rune of Life",
"desc": "Cast the Rune of Life on yourself or allies to protect against dark magic and increase stamina.",
"img": "liferune",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Second Duration|+$3% Strength|+$4% Movement Speed|$5% Bleeding Resistance|$6% Vitality Damage Resistance",
"stats": [
	[24,28,32,36,40,44],
	[600],
	[5,6,0,7,0,8],
	[6,9,12,15,18,21]
]},

// Menhir Wall
{"idx": 19,
"col": 6,
"tier": 3,
"maxlvl": 10,
"name": "Menhir Wall",
"desc": "Summons a barrier of lesser rune stones to block and distract enemies.",
"img": "stonewall",
"unlocks": [20],
"lockedby": "",
"cooldown": [22],
"popup": "$1 Energy Cost",
"stats": [
	[75]
],
"pet": {
	"name": "Menhir Wall",
	"popup": "$1 Second Life Time|$2 Health",
	"stats": [
		[10],
		[150,200,250,300,350,400,450,500,550,600]
	],
	"skills": [
		{"name": "",
		"popup": "$1% Chance of 1 Second of Stun",
		"minLevel": 1,
		"stats": [
			[25]
		]}
	]}
},

// Guardian Stones
{"idx": 20,
"col": 6,
"tier": 6,
"maxlvl": 12,
"name": "Guardian Stones",
"desc": "Summons a Teudd of greater rune stones which will magicaly lash out at any hostiles entering their holy ground.",
"img": "guardstones",
"unlocks": [],
"lockedby": "19",
"cooldown": [240],
"popup": "$1 Energy Cost",
"stats": [
	[153]
],
"pet": {
	"name": "Guardian Stone",
	"popup": "$1 Second Life Time|$2 Health|$3 Energy",
	"stats": [
		[45],
		[1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100],
		[1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100]
	],
	"skills": [
		{"name": "Elemental Lighting",
		"popup": "$1 Second Cooldown|Affects $2 Targets|$3 Energy Cost|$4 Elemental Damage",
		"minLevel": 1,
		"stats": [
			[4],
			[2],
			[100],
			[200,215,230,245,260,275,290,305,320,335,350,365]
		]},
		{"name": "Destruction",
		"popup": "$1 Meter Radius|$2 Elemental Damage|$3% Enemy Health Reduction|$4 Second of Stun",
		"minLevel": 1,
		"stats": [
			[4],
			[40,60,80,100,120,140,160,180,200,220,220,220],
			[33],
			[1]
		]}
	]}
},

//===============================================================
// Tier 7 Skills
//===============================================================
// Rune Storm
{"idx": 20,
"col": 3,
"tier": 7,
"maxlvl": 6,
"name": "Rune Storm",
"desc": "When the situation calls for it, combining mismatched runes can create a dangerous storm of unforeseen effects.",
"img": "maelstrom",
"unlocks": [],
"lockedby": "",
"cooldown": [120],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4 Damage|Chance for one of the following:|#$5 second(s) of Skill Disruption|#$6 second(s) of Stun|#$7 second(s) of Fear|#$8 second(s) of Confusion|#$9 Elemental Retaliation",
"stats": [
	[300],
	[10],
	[4.5,5.0,5.5,6.0,6.5,7.0],
	[30,45,60,75,90,105,],
	[1.0],
	[1.0],
	[1.0],
	[1.0],
	[20,30,40,50,60,70]
]},

// Rune Field
{"idx": 21,
"col": 5,
"tier": 7,
"maxlvl": 12,
"name": "Rune Field",
"desc": "Create more runes across lager area.",
"img": "minefield",
"unlocks": [],
"lockedby": "16",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Projectile(s)",
"stats": [
	[25,50,75,100,125,150,175,200,225,250,275,300],
	[0.5,1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5,5.0,5.5,6.0],
	[6,8,9,10,12,14,15,16,18,20,21,24]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};