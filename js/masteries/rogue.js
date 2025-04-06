//===============================================================
// Rogue
//===============================================================
rogue = {
"name": "Rogue",
"highlight": "The Rogue is unmatched at dealing rapid damage to single opponents or wearing them down with poison and bleeding. Reliant on hit-and-run tactics, the Rogue is less well suited for handling hordes of enemies and employs traps and trickery to avoid being overwhelmed.",
"desc": "Provides the physical conditioning and secret knowledge necessary to train as a rogue.",
"str": [2,3,5,7,9,10,12,14,16,17,19,21,23,24,26,28,30,31,33,35,37,38,40,42,44,45,47,49,51,52,54,56,58,59,61,63,65,66,68,70],
"int": [0],
"dex": [2,5,7,10,12,15,17,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,60,62,65,67,70,72,75,77,80,82,85,87,90,92,95,97,100],
"hp": [35,70,105,140,175,210,245,280,315,350,385,420,455,490,525,560,595,630,665,700,735,770,805,840,875,910,945,980,1015,1050,1085,1120,1155,1190,1225,1260,1295,1330,1365,1400],
"mp": [0],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Calculated Strike
{"idx": 0,
"col": 1,
"tier": 1,
"maxlvl": 8,
"name": "Calculated Strike",
"desc": "Used in place of your normal attack, every fourth hit with calculated strike will deliver increased damage.",
"img": "calculatestrike",
"unlocks": [1],
"lockedby": "",
"cooldown": [],
"popup": "$1% Chance to Pass Through Enemies|$2 Charge Levels|+$3% Damage|$4 Piercing Damage",
"stats": [
	[100],
	[3],
	[45,60,75,93,108,123,138,1566],
	[35,45,53,64,72,83,91,103]
]},

// Lucky Hit
{"idx": 1,
"col": 1,
"tier": 3,
"maxlvl": 6,
"name": "Lucky Hit",
"desc": "Uncommonly good fortune provides a chance that calculated strikes will slip past enemy armor causing tremendous damage.",
"img": "luckyhit",
"unlocks": [],
"lockedby": "0",
"cooldown": [],
"popup": "44% Chance for one of the following:|#$1 Physical Damage|#+$2% Pierce Damage|#$3 Bleeding Damage Over 3 Seconds",
"stats": [
	[78,108,138,168,198,228],
	[70,99,128,157,186,215],
	[120,168,222,282,348,414]
]},

// Anatomy
{"idx": 2,
"col": 2,
"tier": 5,
"maxlvl": 8,
"name": "Anatomy",
"desc": "With a deep knowledge of anatomy, attacks can be directed at vital points in the body increasing the chance and effectiveness of bleed damage.",
"img": "anatomy",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "+$1% Bleeding Damage",
"stats": [
	[36,48,60,72,84,96,108,120]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Blade Honing
{"idx": 3,
"col": 2,
"tier": 1,
"maxlvl": 6,
"name": "Blade Honing",
"desc": "While active, this skill ensures that the blades on the swords or spears of yourself and allies will remain razor sharp and inflict increased piercing damage.",
"img": "bladehoning",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1 Meter Radius|+$2% Increased Piercing Ratio|$3 Piercing Damage|+$4 Energy Reserved",
"stats": [
	[16],
	[16,24,32,40,48,56],
	[3,5,7,9,12,15],
	[50]
]},

// Open Wound
{"idx": 4,
"col": 2,
"tier": 3,
"maxlvl": 12,
"name": "Open Wound",
"desc": "Adds a chance that weapon attacks will inflict bleeding damage when using a sword, spear, bow, or axe.",
"img": "openwound",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "33% Chance of $1 Bleeding Damage Over 3 Seconds",
"stats": [
	[27,48,69,93,117,141,165,192,219,249,276,309]
]},

// Lethal Strike
{"idx": 5,
"col": 1,
"tier": 4,
"maxlvl": 12,
"name": "Lethal Strike",
"desc": "A single deadly hit that multiplies the damage of a normal weapon attack.",
"img": "lethalstrike",
"unlocks": [6],
"lockedby": "",
"cooldown": [12],
"popup": "$1 Energy Cost|+$2% Physical Damage|+$3% Pierce Damage",
"stats": [
	[52,53,55,56,58,59,61,62,64,65,67,68],
	[225,250,275,300,325,350,375,400,425,450,475,500],
	[225,240,255,270,285,300,315,330,345,360,375,390]
]},

// Mortal Wound
{"idx": 6,
"col": 1,
"tier": 6,
"maxlvl": 8,
"name": "Mortal Wound",
"desc": "Stuns victims of Lethal Strike and greatly magnifies the impact of poison and bleeding damage caused by the attack.",
"img": "mortalwound",
"unlocks": [],
"lockedby": "5",
"cooldown": [],
"popup": "$1 Energy Cost|+$2% Bleeding Damage|+$3% Poison Damage|$4 Seconds of Stun",
"stats": [
	[15],
	[60,95,130,165,200,235,270,305],
	[60,95,130,165,200,235,270,305],
	[3]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Throwing Knife
{"idx": 7,
"col": 3,
"tier": 2,
"maxlvl": 12,
"name": "Throwing Knife",
"desc": "Throw a piercing blade at your opponent capable of causing prolonged bleeding.",
"img": "throwingknife",
"unlocks": [8],
"lockedby": "",
"cooldown": [6,5.6,5.2,4.8,4.4,4,3.6,3.2,2.8,2.4,2,1.6],
"popup": "$1 Energy Cost|$2 Projectile|$3% Chance to Pass Through Enemies|$4 Bleeding Damage Over 3 Seconds|$5 Piercing Damage",
"stats": [
	[18,19,20,21,22,23,24,25,26,27,28,29],
	[1],
	[10],
	[48,63,78,90,105,120,132,147,162,174,189,204],
	[15,18,21,24,27,31,35,39,43,48,53,58]
]},

// Flurry of Knives
{"idx": 8,
"col": 3,
"tier": 6,
"maxlvl": 6,
"name": "Flurry of Knives",
"desc": "Learn to throw additional knives at once and cut down enemies with a lethal flurry of razor-sharp metal.",
"img": "throwingknives",
"unlocks": [],
"lockedby": "7",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Projectile(s)|+$3% Pierce Damage",
"stats": [
	[15,18,0,21,0,24],
	[1,2,0,3,0,4],
	[26,30,35,39,44,48]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Disarm Traps
{"idx": 9,
"col": 4,
"tier": 2,
"maxlvl": 6,
"name": "Disarm Traps",
"desc": "Expertise with traps and magical devices allows the Rogue to easily disable them and avoid their damage.",
"img": "disarmtraps",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "+$1% Damage to Devices|+$2% Damage to Constructs|+$3% Less Damage from Devices|+$4% Less Damage from Constructs",
"stats": [
	[20,40,61,82,105,128],
	[20,40,61,82,105,128],
	[10,20,29,38,46,54],
	[10,20,29,38,46,54]
]},

// Lay Trap
{"idx": 10,
"col": 4,
"tier": 3,
"maxlvl": 16,
"name": "Lay Trap",
"desc": "Drops a mechanical bolt trap that will trip when enemies draw near and rapidly fire out deadly bolts.",
"img": "laytrap",
"unlocks": [11,12],
"lockedby": "",
"cooldown": [12],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Summon Limit",
"stats": [
	[25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55],
	[1],
	[3]
],
"pet": {
	"name": "Bolt Trap",
	"popup": "$1 Second Life Time|$2 Health",
	"stats": [
		[30],
		[57,76,95,114,133,152,171,190,209,228,247,266,285,304,323,342]
	],
	"skills": [
		{"name": "Lay Trap",
		"popup":"$1 Projectile|$2 Piercing Damage",
		"minLevel": 1,
		"stats": [
			[1],
			["16-30","22-37","28-48","36-58","44-72","52-82","62-94","70-106","80-118","92-134","102-148","112-162","126-176","138-190","154-210","166-226"]
		]}
	]}
},

// Rapid Construction
{"idx": 11,
"col": 4,
"tier": 4,
"maxlvl": 8,
"name": "Rapid Construction",
"desc": "Expertise in assembling traps reduces the amount of time it takes to create a new trap after one has been set.",
"img": "rapidconstruction",
"unlocks": [],
"lockedby": "10",
"cooldown": [],
"popup": "-$1 Second Recharge|-$2% Energy Cost",
"stats": [
	[1,2,3,4,5,6,7,8],
	[5,10,15,20,25,30,35,40]
]},

// Improved Firing Mechanism
{"idx": 12,
"col": 4,
"tier": 6,
"maxlvl": 8,
"name": "Improved Firing Mechanism",
"desc": "Modifications to the Bolt Trap increase the number of bolts fired per round.",
"img": "improvedtrap",
"unlocks": [],
"lockedby": "10",
"cooldown": [],
"popup": "$1 Projectiles|$2% Chance to Pass Through Enemies|+$3% Pierce Damage",
"stats": [
	[3,4,0,5,0,6,0,0],
	[10,15,20,25,30,35,40,45],
	[15,20,25,30,35,40,45,50]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Envenom Weapon
{"idx": 13,
"col": 5,
"tier": 1,
"maxlvl": 12,
"name": "Envenom Weapon",
"desc": "Coats your weapon with deadly poison while activated.",
"img": "envenomweapon",
"unlocks": [14,15,16],
"lockedby": "",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2 Poison Damage Over 3 Seconds|+$3 Energy Reserved",
"stats": [
	[1],
	[25,34,43,53,67,82,100,119,142,168,197,230],
	[50]
]},

// Nightshade
{"idx": 14,
"col": 5,
"tier": 2,
"maxlvl": 8,
"name": "Nightshade",
"desc": "Oils harvested from deadly Nightshade plants give your Envenomed Weapons the ability to slow enemies.",
"img": "nightshader",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "+$1% Poison Damage|$2% Slowed for 5 Seconds",
"stats": [
	[15,20,25,30,35,40,45,50],
	[10,14,18,22,26,30,34,39]
]},

// Toxin Distillation
{"idx": 15,
"col": 5,
"tier": 4,
"maxlvl": 12,
"name": "Toxin Distillation",
"desc": "Learn alchemical processes to distill natural toxins|increasing the potency and duration of all poison attacks.",
"img": "toxindistillation",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "+$1% Poison Damage with +$2% Improved Duration",
"stats": [
	[10,16,22,28,34,40,46,52,58,64,70,76],
	[12,24,36,48,60,72,84,96,108,120,132,144]
]},

// Mandrake
{"idx": 16,
"col": 5,
"tier": 5,
"maxlvl": 8,
"name": "Mandrake",
"desc": "Adds a chance for poison to cloud an enemy's mind|sending them into a state of confusion.",
"img": "mandrake",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2% Chance to Fumble Attacks for 3 Seconds|$3% Chance of 1.8-$4 Seconds of Confusion",
"stats": [
	[1],
	[15,20,25,30,35,40,45,50],
	[6,8,10,12,14,16,18,20],
	[2.4,2.8,3.2,3.5,3.9,4.3,4.6,5.0]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Flash Powder
{"idx": 17,
"col": 6,
"tier": 2,
"maxlvl": 8,
"name": "Flash Powder",
"desc": "A magician's trick turned to more nefarious purposes|flash powder blinds adjacent enemies impairing their ability to hit with weapons and potentially disorienting them.",
"img": "flashpowder",
"unlocks": [],
"lockedby": "",
"cooldown": [15],
"popup": "$1 Energy Cost|$2 Meter Radius|$3% Chance to Fumble Attacks for 8 Seconds|$4% Chance of 3-8 Seconds of Confusion",
"stats": [
	[53,56,59,62,65,68,71,74],
	[3.8,4.4,5.0,5.6,6.2,6.8,7.4,8.0],
	[30,35,40,45,50,55,60,65],
	[30,35,40,45,50,55,60,65]
]},

// Poison Gas Bomb
{"idx": 18,
"col": 6,
"tier": 3,
"maxlvl": 12,
"name": "Poison Gas Bomb",
"desc": "Lobs a bomb that will burst on impact releasing a cloud of toxic gas that damages enemies who breathe it. Side effects may include confusion, panic, and impaired aim with ranged weapons.",
"img": "poisongasbomb",
"unlocks": [19,21],
"lockedby": "",
"cooldown": [10],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Poison Damage Over 4 Seconds|$4% Slowed for 6 Seconds",
"stats": [
	[45,47,49,52,54,56,59,61,63,66,68,70],
	[3.2,3.4,3.6,3.8,4.0,4.2,4.4,4.6,4.8,5.0,5.2,5.4],
	[131,144,158,174,193,214,237,232,290,321,354,390],
	[33]
]},

// Shrapnel
{"idx": 19,
"col": 6,
"tier": 5,
"maxlvl": 12,
"name": "Shrapnel",
"desc": "Packed with volatile liquid and metal scraps|the Poison Gas Bomb will explode violently on impact showering the area with deadly Shrapnel.",
"img": "shrapnel",
"unlocks": [],
"lockedby": "18",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Projectiles|$4 Bleeding Damage Over 4 Seconds|$5 Piercing Damage",
"stats": [
	[5,6,7,8,9,10,11,12,13,14,15,16],
	[1.5],
	["9-11"],
	[73,86,100,113,126,140,153,166,180,193,206,219],
	[24,32,40,51,61,71,82,94,106,119,131,145]
]},

//===============================================================
// Tier 7 Skills
//===============================================================
// Blade Barrier
{"idx": 20,
"col": 2,
"tier": 7,
"maxlvl": 10,
"name": "Blade Barrier",
"desc": "Summons a field of whirling blades that can transmit effects like a regular weapon.",
"img": "bladebarrier",
"unlocks": [],
"lockedby": "",
"cooldown": [30],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4 Bleeding Damage per Second|$5 Piercing Damage|$6% Reduction to Enemy's Health",
"stats": [
	[100,105,110,115,120,125,130,135,140,145],
	[10],
	[2.5],
	[10,15,20,25,30,35,40,45,50,55],
	[20,30,40,50,60,70,80,90,100,110],
	[0,1,0,2,0,0,3,0,4,0]
]},

// Poison Mayhem
{"idx": 21,
"col": 6,
"tier": 7,
"maxlvl": 8,
"name": "Poison Mayhem",
"desc": "Throws multiple Poison Gas Bombs at a time.",
"img": "poisonmayhem",
"unlocks": [],
"lockedby": "18",
"cooldown": [],
"popup": "$1 Projectile(s)|$2% Chance of Impaired Aim for 4.0 Seconds|$3% Chance of 2.0 second(s) of Fear",
"stats": [
	[1,0,0,2,0,0,3,0],
	[0,5,10,0,15,20,0,25],
	[0,10,20,0,30,40,0,50]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};