//===============================================================
// Skill Setup
//===============================================================
defense = {
"name": "Defense",
"highlight": "The Defender specializes in surviving battles but offers less in the way of offensive enhancements. Many skills focus on utilizing the shield to deflect attacks and disable enemies.",
"desc": "Provides the fortitude and strength to master skills for the protection of yourself and others.",
"str": [1,3,4,6,7,9,10,12,13,15,16,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43,45,46,48,49,51,52,54,55,57,58,60],
"int": [0],
"dex": [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80],
"hp": [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1600,1650,1700,1750,1800,1850,1900,1950,2000],
"mp": [0],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Concussive Blow
{"idx": 0,
"col": 1,
"tier": 1,
"maxlvl": 8,
"name": "Concussive Blow",
"desc": "Adds a chance for attacks to stun enemies and increases the duration of stun attacks when wielding a club or axe.",
"img": "concussiveblow",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "+$1% Stun Damage|$2% Chance of 5 Seconds of Stun",
"stats": [
	[10,16,23,31,40,50,61,73],
	[1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5]
]},

// Adrenaline
{"idx": 1,
"col": 1,
"tier": 2,
"maxlvl": 12,
"name": "Adrenaline",
"desc": "Each enemy hit has a chance of triggering an adrenaline rush that boosts life regeneration.",
"img": "adrenaline",
"unlocks": [2,3],
"lockedby": "",
"cooldown": [30],
"popup": "$1% Chance of Activating|$2 Second Duration|+$3 Health Regeneration per Second",
"stats": [
	[5],
	[10.0,10.5,11.0,11.5,12.0,12.5,13.0,13.5,14.0,14.5,15.0,15.5],
	[5,8,11,14,17,19,21,24,26,28,30,33]
	
]},

// Resilience
{"idx": 2,
"col": 1,
"tier": 3,
"maxlvl": 6,
"name": "Resilience",
"desc": "Increases how often an Adrenaline rush can be triggered.",
"img": "resilience",
"unlocks": [],
"lockedby": "1",
"cooldown": [],
"popup": "-$1% Recharge",
"stats": [
	[30,38,46,52,58,64]
]},

// Defensive Reaction
{"idx": 3,
"col": 1,
"tier": 5,
"maxlvl": 8,
"name": "Defensive Reaction",
"desc": "Increases damage and attack speed during an Adrenaline rush.",
"img": "defensivereaction",
"unlocks": [],
"lockedby": "1",
"cooldown": [],
"popup": "+$1% Physical Damage|+$2% Bleeding Damage|+$3% Total Speed",
"stats": [
	[15,19,23,29,33,37,43,50],
	[15,19,23,29,33,37,43,50],
	[4,6,8,10,14,16,18,20]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Rally
{"idx": 4,
"col": 2,
"tier": 2,
"maxlvl": 12,
"name": "Rally",
"desc": "The resolute call of your horn can turn the tide of battle, inspiring all in its range to fight with renewed vitality.",
"img": "rally",
"unlocks": [5,6],
"lockedby": "",
"cooldown": [45],
"popup": "$1 Energy Cost|+$2 Health Restored|$3 Second Duration|$4 Meter Radius|+$5% Health Regeneration|$6 Armor",
"stats": [
	[51,53,56,58,59,62,64,67,69,70,73,75],
	[240,510,810,1140,1500,1890,2310,2760,3240,3750,4290,4860],
	[10],
	[10],
	[150],
	[5,8,10,12,15,18,20,23,26,29,34,40]
]},

// Inspiration
{"idx": 5,
"col": 2,
"tier": 4,
"maxlvl": 6,
"name": "Inspiration",
"desc": "Gradually restores lost energy to allies allowing them to continue the fight.",
"img": "inspiration",
"unlocks": [],
"lockedby": "4",
"cooldown": [],
"popup": "$1 Second Duration|+$2 Energy Regeneration per Second|+$3% Total Speed",
"stats": [
	[1,3,5,6,8,10],
	[2.8,3.6,4.4,5.2,6.0,6.8],
	[10]
]},

// Defiance
{"idx": 6,
"col": 2,
"tier": 6,
"maxlvl": 12,
"name": "Defiance",
"desc": "A percentage of all damage inflicted by enemies will be revisited back upon them for a short duration after using Rally.",
"img": "defiance",
"unlocks": [],
"lockedby": "4",
"cooldown": [],
"popup": "$1 Energy Cost|$2% Elemental Resistance|$3% Damage Reflected",
"stats": [
	[8,10,12,14,16,18,20,22,24,26,28,30],
	[10,14,17,21,24,28,31,35,38,42,45,50],
	[5,10,15,20,25,30,35,40,45,50,55,60]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Battle Awareness
{"idx": 7,
"col": 3,
"tier": 1,
"maxlvl": 12,
"name": "Battle Awareness",
"desc": "Enter a state of heightened awareness that allows you and your nearby allies to perceive and respond to attacks more effectively.",
"img": "defiance",
"unlocks": [8,9],
"lockedby": "",
"cooldown": [4],
"popup": "$1 Meter Radius|+$2 Defensive Ability,|+$3 Energy Reserved|$4 Armor",
"stats": [
	[5,6,7,8,9,10,11,12,13,14,15,16],
	[25,40,55,70,90,105,115,130,140,160,170,180],
	[75],
	[4,6,8,11,14,17,20,24,28,32,36,40]
]},

// Focus
{"idx": 8,
"col": 3,
"tier": 3,
"maxlvl": 6,
"name": "Focus",
"desc": "Focus allows you and your allies to react quickly to enemy attacks, increasing the chance of a successful shield block.",
"img": "focus",
"unlocks": [],
"lockedby": "7",
"cooldown": [],
"popup": "+$1 Energy Reserved|+$2% Shield Block",
"stats": [
	[15],
	[5,8,10,12,15,18]
]},

// Iron Will
{"idx": 9,
"col": 3,
"tier": 5,
"maxlvl": 6,
"name": "Iron Will",
"desc": "Grants allies the resolve to hold out against great adversity.",
"img": "ironwill",
"unlocks": [],
"lockedby": "7",
"cooldown": [],
"popup": "+$1 Energy Reserved|$2% Sleep Resistance|$3% Stun Resistance|$4% Reduced Entrapment Duration|$5% Reduced Freeze Duration|$6% Skill Disruption Protection|$7% Reduced Mind Control Duration (Pet/Trap Only)",
"stats": [
	[10],
	[20,30,40,50,60,70],
	[20,30,40,50,60,70],
	[20,30,40,50,60,70],
	[20,30,40,50,60,70],
	[20,30,40,50,60,70],
	[20,30,40,50,60,70]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Quick Recovery
{"idx": 10,
"col": 4,
"tier": 2,
"maxlvl": 8,
"name": "Quick Recovery",
"desc": "A strong shield arm allows you to block multiple attackers with amazing speed when necessary, but it can only be kept up for a short time.",
"img": "quickrecovery",
"unlocks": [],
"lockedby": "",
"cooldown": [60],
"popup": "$1 Energy Cost|$2 Second Duration|-$3% Shield Recovery Time|+$4% Armor Absorption|+$5% Shield Block",
"stats": [
	[50],
	[18,20,22,25,27,29,31,34],
	[25,35,44,52,59,65,70,74],
	[10],
	[4,6,8,10,12,14,16,18]
]},

// Shield Charge
{"idx": 11,
"col": 4,
"tier": 3,
"maxlvl": 12,
"name": "Shield Charge",
"desc": "A running attack that slams into the enemy with your shield causing bonus damage and stunning them.",
"img": "shieldcharge",
"unlocks": [12],
"lockedby": "",
"cooldown": [12],
"popup": "$1 Energy Cost|$2 Physical Damage|$3 Second of Stun|+$4% Movement",
"stats": [
	[30,33,36,39,42,45,48,51,54,57,60,63],
	["10-15","21-30","33-45","44-61","55-77","68-94","80-111","93-129","107-147","121-166","135-185","120-205"],
	[1],
	[300]
]},

// Disruption
{"idx": 12,
"col": 4,
"tier": 5,
"maxlvl": 6,
"name": "Disruption",
"desc": "Increases the shock effect of Shield Charge, startling adjacent enemies and disrupting skill use for a time.",
"img": "disruption",
"unlocks": [],
"lockedby": "11",
"cooldown": [],
"popup": "$1 Energy Cost|$2° Arc of Attack|$3 Target Maximum|$4 Seconds of Skill Disruption",
"stats": [
	[12,14,16,18,20,22],
	[360],
	[2,0,3,0,0,4],
	[1.5,2.0,2.5,3.0,3.5,4.0]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Batter
{"idx": 13,
"col": 5,
"tier": 1,
"maxlvl": 12,
"name": "Batter",
"desc": "A shield attack that hits for increased damage and slows enemy's attacks for a duration.",
"img": "batter",
"unlocks": [14],
"lockedby": "",
"cooldown": [4],
"popup": "$1 Energy Cost|$2 Physical Damage|+$3% Physical Damage|$4% Slower Attack for 8 Seconds",
"stats": [
	[12,13,15,16,16,17,18,20,21,21,22,23],
	[4,8,12,17,22,28,34,41,48,56,65,75],
	[3,4,6,7,8,10,11,12,14,15,16,18],
	[18,20,23,25,30,33,35,38,40,45,48,50]
]},

// Rend Armor
{"idx": 14,
"col": 5,
"tier": 4,
"maxlvl": 12,
"name": "Rend Armor",
"desc": "Increases the effectiveness of Batter causing it to hit three targets with enough force to dent their armor.",
"img": "rendarmor",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "$1 Energy Cost|$2° Arc of Attack|$3 Target Maximum|$4 Reduced Armor for 5 Seconds",
"stats": [
	[15],
	[90,95,100,105,110,115,120,125,130,135,140,145],
	[3],
	[18,36,54,72,90,108,126,144,162,180,201,225]
]},

// Colossus Form
{"idx": 15,
"col": 5,
"tier": 6,
"maxlvl": 8,
"name": "Colossus Form",
"desc": "Assume the form of a towering Colossus and lay waste to your enemies.",
"img": "colossusform",
"unlocks": [],
"lockedby": "",
"cooldown": [360],
"popup": "$1% Damage Absorption|$2 Active Energy Cost per Second|$3 Second Duration|+$4% Physical Damage|+$5% Strength|+$6% Health|-$7% Total Speed",
"stats": [
	[30,32,35,37,40,43,46,50],
	[10],
	[24],
	[50],
	[30,32,35,37,40,43,46,50],
	[30,32,35,37,40,43,46,50],
	[15]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Armor Handling
{"idx": 16,
"col": 6,
"tier": 1,
"maxlvl": 6,
"name": "Armor Handling",
"desc": "Understanding how to properly adjust and move in armor allows you to wear heavier armor and shields than an untrained warrior of equivalent strength could manage.",
"img": "armorhandling",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "-$1% Strength Requirement for Armor|-$2% Strength Requirement for Shields|+$3% Armor Absorption",
"stats": [
	[8,10,13,15,17,20],
	[8,10,13,15,17,20],
	[6,8,10,12,14,16]
]},

// Shield Smash
{"idx": 17,
"col": 6,
"tier": 2,
"maxlvl": 6,
"name": "Shield Smash",
"desc": "A shield fighting technique that inflicts damage with both the weapon and the shield.",
"img": "shieldsmash",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1% Chance of Activating|$2 Physical Damage|$3 Reduced Defense Ability for 3 Seconds",
"stats": [
	[6,8,10,12,14,16],
	[12,15,18,22,26,31],
	[50]
]},

// Disable
{"idx": 18,
"col": 6,
"tier": 4,
"maxlvl": 6,
"name": "Disable",
"desc": "A fighting technique that utilizes the shield to crush foes and throw them off-balance.",
"img": "disable",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1% Chance to be Used|$2 Physical Damage| $3% Slower Attack for 5 Seconds",
"stats": [
	[6,8,10,12,14,16],
	[12,15,18,22,26,31],
	[50]
]},

// Pulverize
{"idx": 19,
"col": 6,
"tier": 6,
"maxlvl": 6,
"name": "Pulverize",
"desc": "A fighting technique that utilizes the shield to slam into enemies, knocking them senseless.",
"img": "pulverize",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1% Chance to be Used|$2° Arc of Attack|$3 Target Maximum|$4 Physical Damage|$5 Reduced Offensive Ability for 3 Seconds|$6 Seconds of Skill Disruption",
"stats": [
	[6,8,10,12,14,16],
	[120],
	[3],
	["5-8","8-13","11-17","14-22","18-29","21-35"],
	[50],
	[3]
]},

//===============================================================
// Tier 7 Skills
//===============================================================
// Unyielding Phalanx
{"idx": 20,
"col": 1,
"tier": 7,
"maxlvl": 8,
"name": "Unyielding Phalanx",
"desc": "Summons the shades of fallen comrades to form a line with you once more, engaging any enemy that dares to approach.",
"img": "phalanx",
"unlocks": [],
"lockedby": "",
"cooldown": [80],
"popup": "$1 Energy Cost|$2 Summon Limit",
"stats": [
	[112,116,120,124,128,132,136,140],
	[1]
],
"pet": {
	"name": "Elysian Soldier",
	"popup": "$1 Second Life Time|$2 Health",
	"stats": [
		[6,7,8,9,10,11,12,13],
		[250,275,300,325,350,375,400,425]
	],
	"skills": [
		{"name": "Basic Attack",
		"popup":"$1 Damage|$2 Piercing Damage|$3% Slower Movement for 2.0 Seconds",
		"minLevel": 1,
		"stats": [
			[140],
			[60],
			[40]
		]}
	]}
},

// Perfect Block
{"idx": 21,
"col": 4,
"tier": 7,
"maxlvl": 6,
"name": "Perfect Block",
"desc": "Raise your shield to become temporarily invulnerable and stun any enemy attacking you in melee.",
"img": "perfectblock",
"unlocks": [],
"lockedby": "",
"cooldown": [16,14,13,12,11,10],
"popup": "$1 Second Duration|$2% Damage Absorption|+$3% Movement Speed|-$4% Attack Speed|-$5% Casting Speed|$6 Stun Retaliation",
"stats": [
	[1.1],
	[100],
	[0,10,20,30,41,52],
	[100],
	[100],
	["1-2"]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};