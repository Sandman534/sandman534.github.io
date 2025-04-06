//===============================================================
// Warfare
//===============================================================
neidan = {
"name": "Nedian",
"highlight": "Master Neidan,the art of internal and external alchemy. Using a combination of deadly concoctions and abilities that make use of their inner energies, Neidan are a force to be reckoned with.",
"str": [0],
"int": [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120],
"dex": [1,3,4,6,7,9,10,12,13,15,16,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43,45,46,48,49,51,52,54,55,57,58,60],
"hp": [23,45,68,90,113,135,158,180,203,225,248,270,293,315,338,360,383,405,428,450,473,495,518,540,563,585,608,630,653,675,698,720,743,765,788,810,833,855,878,900],
"mp": [6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198,204,210,216,222,228,234,240],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Potent Elixer
{"idx": 0,
"col": 1,
"tier": 1,
"maxlvl": 12,
"name": "Potent Elixer",
"desc": "Neidan practitioners often alter their concoctions to grant them additional boons when imbibed. This can trigger when a Healt or Energy potion is used.",
"img": "potentelixer",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "+$1 Health Regeneration per Second|+$2% Energy Regeneration per Second",
"stats": [
	[3,5,7,9,11,13,15,17,19,21,23,25],
	[3,5,7,9,11,13,15,17,19,21,23,25]
]},

// Essence of Jade
{"idx": 1,
"col": 1,
"tier": 2,
"maxlvl": 8,
"name": "Essence of Jade",
"desc": "A powerful and mystic mineral, you use jade to sharpen your attack skills even further.",
"img": "essenceofjade",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1% Poison Resistance|$2 Life Leech Resistance|$3 Bleeding Resistance",
"stats": [
	[6,10,14,18,22,26,30,34],
	[6,10,14,18,22,26,30,34],
	[6,10,14,18,22,26,30,34]
]},

// Shen Pao
{"idx": 2,
"col": 1,
"tier": 4,
"maxlvl": 12,
"name": "Shen Pao",
"desc": "Throw a volatile alchemical concoction at a foe that detonates on impact and causes random elemental damage.",
"img": "shenpao",
"unlocks": [4],
"lockedby": "",
"cooldown": [5],
"popup": "$1 Energy Cost|$2 Meter Radius|$3% Reduction to Enemy's Health|$4% Chance of Impaired Aim for 2.0 Seconds|$5% Slower Movement for 2.0 seconds|Chance for one of the following:|#$6 Fire Damage|#$7 Cold Damage|#$8 Lightning Damage",
"stats": [
	[35,39,43,47,51,55,59,63,67,71,75,79],
	[3.1,3.2,3.3,3.4,3.5,3.6,3.8,3.9,4.0,4.1,4.2,4.3],
	[3,4,5,6,7,8,9,10,11,13,14,15],
	[40,42,44,46,48,50,52,54,56,58,60,62],
	[40,42,44,46,48,50,52,54,56,58,60,62],
	[53,75,97,119,142,164,185,207,229,251,272,294],
	[53,75,97,119,142,164,185,207,229,251,272,294],
	[53,75,97,119,142,164,185,207,229,251,272,294]
]},

// Convergence
{"idx": 3,
"col": 1,
"tier": 5,
"maxlvl": 8,
"name": "Convergence",
"desc": "The Neidan's body is attuned to the potions themselves, sometimes granting additional unexpected power. (Can trigger when a health or energy potion is used.)",
"img": "convergence",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1 Second Duration|$2% Chance to be used|Chance for one of the following: $3",
"stats": [
	[6],
	[3,5,8,11,14,18,22,27],
	["|#Potion of Ambrosia|#Evasion|#The Jade Emperor's Resolve|#Life Draining|#Life Draining|#Service|#Speed|#Wu Tao's Elixir"]
]},

// Echoes of the Ancestors
{"idx": 4,
"col": 1,
"tier": 6,
"maxlvl": 10,
"name": "Echoes of the Ancestors",
"desc": "Upon vanquishing enemies with Shen Pao, blast waves emanate from you and deal damage around you (can trigger on enemy death).",
"img": "echoesoftheancestors",
"unlocks": [],
"lockedby": "2",
"cooldown": [2],
"popup": "$1% Chance to be Used: Shen Pao|Chance for one of the following:|#$2 Fire Damage|#$3 Cold Damage|#$4 Lightning Damage",
"stats": [
	[33],
	[40,55,70,85,100,115,130,145,160,175],
	[40,55,70,85,100,115,130,145,160,175],
	[40,55,70,85,100,115,130,145,160,175]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Smoke Cloud
{"idx": 5,
"col": 2,
"tier": 1,
"maxlvl": 8,
"name": "Smoke Cloud",
"desc": "You throw a small amount of fine powder which releases a burst of energy blinding and hindering your foes.",
"img": "smokecloud",
"unlocks": [6,7],
"lockedby": "",
"cooldown": [25],
"popup": "$1 Energy Cost|$2 Meter Radius|80% Chance of one of the following:|#$3 Second(s) Stun|#$4 Second(s) Immobilization",
"stats": [
	[15,20,25,30,35,40,45,50],
	[4],
	[1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5],
	[1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5]
]},

// Terracotta Servants
{"idx": 6,
"col": 2,
"tier": 3,
"maxlvl": 16,
"name": "Terracotta Servants",
"desc": "Throw a masterful alchemical concoction that creates a terracotta warrior at the point of impact that serves you. (You can summon more than one terracotta servant at a time).",
"img": "terracottaservant",
"unlocks": [7,8],
"lockedby": "",
"cooldown": [35],
"popup": "$1 Energy Cost|Summon Limit $2|$3 Meter Radius",
"stats": [
	[140,148,156,164,172,180,188,196,204,212,220,228,236,244,252,260],
	[1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0],
	["1.0"]
],
"pet": {
	"name": "Battle Standard",
	"popup": "$1 Health|$2 Energy",
	"stats": [
		[275,325,375,425,475,525,575,625,675,725,775,825,875,925,975,1025],
		[50]
	],
	"skills": [
		{"name": "Basic Attack",
		"popup":"$1 Damage",
		"minLevel": 1,
		"stats": [
			["12-20","15-25","18-30","21-35","24-40","27-45","30-50","33-55","36-60","39-65","42-70","45-75","48-80","51-85","54-90","57-95"]
		]},
		{"name": "Lethal Strike",
		"popup":"$1 Energy Cost|$2 Bleeding Damage over 3.0 Seconds|+$3% Damage|$4% Reduction to Enemy's Health",
		"minLevel": 1,
		"stats": [
			[50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200],
			[33],
			[100],
			[20]
		]}
	]}
},

// shatter
{"idx": 7,
"col": 2,
"tier": 5,
"maxlvl": 8,
"name": "Shatter",
"desc": "Not even death breaks the bonds of servitude. Upon expiring or being killed, your terracotta servant shatters, dealing damage around him",
"img": "shatter",
"unlocks": [],
"lockedby": "6",
"cooldown": [],
"popup": "$1 Meter Radius|$2 Bleeding Damage over 3.0 Second(s)|$3 Piercing Damage|$4% Reduction to Enemy's Health|$5 Second(s) of Stun",
"stats": [
	[2.7,2.9,3.1,3.3,3.5,3.7,3.9,4.1],
	[34,44,54,63,73,83,92,102],
	[114,146,179,211,243,276,308,340],
	[6,8,10,12,15,17,19,21],
	[1.0,1.1,1.2,1.4,1.6,2.0,0,0]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Breath Attack
{"idx": 8,
"col": 3,
"tier": 2,
"maxlvl": 12,
"name": "Breath Attack",
"desc": "You emanate a focused energy attack in a cone in front of you, disorienting your foes.",
"img": "breathattack",
"unlocks": [9],
"lockedby": "",
"cooldown": [10],
"popup": "$1 Energy Cost|$2 Burn Damage over 3 Seconds|$3 Poison Damage over 3 Seconds|$4% Chance of 2 Seconds of Fear or Confusion|$5% Chance to Fumble Attacks",
"stats": [
	[34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64],
	[12,18,24,30,36,42,48,54,60,66,72,78],
	[6,9,12,15,18,21,24,27,30,33,36,39],
	[30,33,36,39,42,45,48,51,54,57,60,63],
	[30,33,36,39,42,45,48,51,54,57,60,63]
]},

// Voice of the Ancients
{"idx": 9,
"col": 3,
"tier": 6,
"maxlvl": 10,
"name": "Voice of the Ancients",
"desc": "Enemies caught in your Breath Attack will suffer the wrath of the elements.",
"img": "voiceoftheancients",
"unlocks": [],
"lockedby": "8",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Element Damage",
"stats": [
	[10,15,20,25,30,35,40,45,50,55],
	[40,59,86,116,143,173,199,230,256,286]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Consequences
{"idx": 10,
"col": 4,
"tier": 1,
"maxlvl": 8,
"name": "Consequences",
"desc": "You channel power through your weapon lowering your enemies' resistance to damage.",
"img": "consequences",
"unlocks": [11],
"lockedby": "",
"cooldown": [],
"popup": "$1 Second(s) Duration|$2% Chance to be Used|-$3% Reduced Resistances",
"stats": [
	["7.0"],
	[3,5,7,9,11,13,15,17],
	[25]
]},

// Mutual Suffering
{"idx": 11,
"col": 4,
"tier": 2,
"maxlvl": 6,
"name": "Mutual Suffering",
"desc": "Stricken enemies may spread death and feebleness around them upon death.",
"img": "mutualsuffering",
"unlocks": [],
"lockedby": "10",
"cooldown": [],
"popup": "$1% Chance to be Used|Consequences Radius $2",
"stats": [
	[50],
	[2.0,2.5,3.1,4.0,5.0,6.1]
]},

// Chi Realignment
{"idx": 12,
"col": 4,
"tier": 4,
"maxlvl": 8,
"name": "Chi Realignment",
"desc": "Realigns an enemy's Chi, wounding them and bolstering your own energies.",
"img": "chirealignment",
"unlocks": [13],
"lockedby": "",
"cooldown": [12],
"popup": "$1 Energy Cost|$2 Energy Leech over $3 Second(s)|$4% Energy Drain ($5% of Lost Energy as Damage)|$6 Second(s) of Stun",
"stats": [
	[30],
	[24,35,48,63,80,98,119,141],
	[1.0,1.3,1.5,1.8,2.1,2.3,2.6,2.9],
	[30,34,38,42,46,50,54,58],
	[75,100,125,150,175,200,225,250],
	[0.5]
]},

// Reverberation
{"idx": 13,
"col": 4,
"tier": 5,
"maxlvl": 8,
"name": "Reverberation",
"desc": "Severe changes to an enemy's Chi leave them with lasting consequences.",
"img": "reverberation",
"unlocks": [],
"lockedby": "12",
"cooldown": [],
"popup": "$1 Frost Burn Damage over $2 Second(s)|$3 Second(s) of Skill Disruption|$4% Slowed for $5 Second(s)|+$6% Damage to Ghosts",
"stats": [
	[30,40,52,64,78,92,108,124],
	[1.5,2.0,2.6,3.2,3.9,4.6,5.4,6.2],
	[1.5,2.0,2.6,3.2,3.9,4.6,5.4,6.2],
	[66],
	[1.5,2.0,2.6,3.2,3.9,4.6,5.4,6.2],
	[100]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Aura of Tranquility
{"idx": 14,
"col": 5,
"tier": 3,
"maxlvl": 12,
"name": "Aura of Tranquility",
"desc": "Your mind is a weapon and a shield. You use your Chi to create a renewable barrier around you.",
"img": "auraoftranquility",
"unlocks": [15],
"lockedby": "",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2% Damage Absorbtion|$3% chance of $4 Fire Damage Retaliation|$5% Physical Resistance|$6% Elemental Resistance",
"stats": [
	[5,6,0,7,8,0,9,10,0,11,12,13],
	[10,12,13,15,16,18,19,21,22,24,25,27],
	[16,21,27,32,38,44,49,55,60,66,72,77],
	[50,52,53,55,57,59,62,65,69,75,80,83],
	[10,12,13,15,16,18,19,21,22,24,25,27],
	[10,12,13,15,16,18,19,21,22,24,25,27]
]},

// Melding Armor
{"idx": 15,
"col": 5,
"tier": 6,
"maxlvl": 6,
"name": "Melding Armor",
"desc": "The strength of your Chi's flow is such that your barrier is imbued with additional protective energies.",
"img": "meldingarmor",
"unlocks": [],
"lockedby": "14",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2% Chance to Dodge Attacks|$3% Chance to Dodge Projectiles|$4% Damage Reflected",
"stats": [
	[1,0,2,0,3,0],
	[4,6,8,10,11,13],
	[4,6,8,10,11,13],
	[5,8,12,16,20,23]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Huangdi's Favor
{"idx": 16,
"col": 6,
"tier": 1,
"maxlvl": 8,
"name": "Huangdi's Favor",
"desc": "You channel the wrath of the Emperors past and strike your foes with lightning.",
"img": "huangdisfavor",
"unlocks": [20],
"lockedby": "",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Charge level|+$3% Total damage|$4% chance of $5 Lightning damage and $6 seconds of Petrify",
"stats": [
	[1],
	[1],
	[10,17,24,31,38,45,52,59],
	[50],
	["22-32","31-46","40-59","49-73","58-86","67-100","76-113","85-127"],
	[0.5]
]},

// Blessing of Jin Chan
{"idx": 17,
"col": 6,
"tier": 4,
"maxlvl": 8,
"name": "Blessing of Jin Chan",
"desc": "The blessings of Jin Chan are upon you, granting a chance for additional boons for every enemy slain. (Can trigger on enemy death)",
"img": "blessingofjinchan",
"unlocks": [],
"lockedby": "",
"cooldown": [8],
"popup": "$1% Chance to be Used",
"stats": [
	[1.5,2.0,2.5,3.0,2.5,4.0,4.5,5.0]
]},

//===============================================================
// Tier 7 Skills
//===============================================================
// Forged by Fire
{"idx": 18,
"col": 2,
"tier": 7,
"maxlvl": 6,
"name": "Forged by Fire",
"desc": "Creates an aura around the terracotta servant damaging him and enemies.",
"img": "forgebyfire",
"unlocks": [],
"lockedby": "6",
"cooldown": [],
"popup": "$1 Second(s) Duration|$2 Meter Radius|$3 Burn Damage per Second|-$4% Physical Resistance",
"stats": [
	[100],
	[3.5],
	[65,80,95,110,125,140],
	[34,42,50,59,67,76]
]},

// Weakest Chakra
{"idx": 19,
"col": 4,
"tier": 7,
"maxlvl": 12,
"name": "Weakest Chakra",
"desc": "You become attuned to the elements, emanating lethal energy that diminishes enemy health and weakens their defences.",
"img": "weakestchakra",
"unlocks": [],
"lockedby": "",
"cooldown": [150],
"popup": "$1 Energy Cost|$2 Second(s) Duration|$3 Meter Radius|$4 Vitality Damage|$5% Reduced Damage for 3 Second(s)|$6% Reduced Resistances for 3 Second(s)|$7 Second(s) of Petrify",
"stats": [
	[150,164,178,192,206,220,234,248,262,276,290,304],
	[20],
	[6.7,7.4,8.1,8.8,9.5,10.2,10.9,11.6,12.3,13.0,13.7,14.4],
	[19,30,41,52,63,74,85,96,107,118,129,140],
	[5,7,9,11,13,15,17,19,21,23,25,27],
	[5,7,9,11,13,15,17,19,21,23,25,27],
	[0.3]
]},

// Spreading Influence
{"idx": 20,
"col": 6,
"tier": 7,
"maxlvl": 12,
"name": "Spreading Influence",
"desc": "Upon hitting an enemy your attacks deal damage in an area, damaging enemies around it.",
"img": "spreadinginfluence",
"unlocks": [],
"lockedby": "16",
"cooldown": [],
"popup": "$1° Arc of Attack|$2 Meter Radius|+$3% Damage to Humankind",
"stats": [
	[7,15,23,32,41,51,61,72,83,95,107,120],
	[0.5,0.7,0.9,1.1,1.3,1.5,1.7,1.9,2.1,2.3,2.5,2.7],
	[10,20,29,37,45,53,60,66,72,78,83,87]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};