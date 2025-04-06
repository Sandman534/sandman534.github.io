//===============================================================
// Warfare
//===============================================================
warfare = {
"name": "Warfare",
"highlight": "The Warrior excels at dealing out physical damage but pays little heed to defense. With higher mastery levels the Warrior can learn to deal damage to several adversaries at once.",
"desc": "Provides physical conditioning and discipline that will allow your character to master the skills of a warrior.",
"str": [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80],
"int": [0],
"dex": [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80],
"hp": [40,80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800,840,880,920,960,1000,1040,1080,1120,1160,1200,1240,1280,1320,1360,1400,1440,1480,1520,1560,1600],
"mp": [0],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Weapon Training
{"idx": 0,
"col": 1,
"tier": 1,
"maxlvl": 6,
"name": "Weapon Training",
"desc": "Years of training with the sword, axe, and club allow you to attack faster and more accurately, and also grant some proficiency in throwing them.",
"img": "weaponhandling",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "+$1 Offensive Ability|+$2% Attack Speed",
"stats": [
	[62,94,126,158,190,222],
	[5,8,10,12,14,16]
]},

// Dual Wield
{"idx": 1,
"col": 1,
"tier": 2,
"maxlvl": 6,
"name": "Dual Wield",
"desc": "Learn to effectively wield two weapons and perform occasional double attacks or throws.",
"img": "dualweapontraining",
"unlocks": [2,3,4],
"lockedby": "",
"cooldown": [],
"popup": "$1% Chance to be Used|$2 Physical Damage",
"stats": [
	[12,14,16,18,20,22],
	[10]
]},

// Hew
{"idx": 2,
"col": 1,
"tier": 3,
"maxlvl": 6,
"name": "Hew",
"desc": "A Dual Wield melee strike that hits one target with both weapons.",
"img": "hew",
"unlocks": [],
"lockedby": "1",
"cooldown": [],
"popup": "$1% Chance to be Used|+$2% Physical Damage",
"stats": [
	[3,4,6,7,9,10],
	[50]
]},

// Cross Cut
{"idx": 3,
"col": 1,
"tier": 4,
"maxlvl": 6,
"name": "Cross Cut",
"desc": "A Dual Wield technique that can hit up to 2 enemies with a cross-cutting scissor motion.",
"img": "crosscut",
"unlocks": [],
"lockedby": "1",
"cooldown": [],
"popup": "$1% Chance to be Used|$2° Arc of Attack|$3 Target Maximum|$4 Bleeding Damage Over 3 Seconds",
"stats": [
	[3,4,6,7,9,10],
	[90],
	[2],
	[22,45,60,75,97,120]
]},

// Tumult
{"idx": 4,
"col": 1,
"tier": 6,
"maxlvl": 6,
"name": "Tumult",
"desc": "A Dual Wield technique that hits up to 3 adjacent enemies.",
"img": "tumult",
"unlocks": [],
"lockedby": "1",
"cooldown": [],
"popup": "$1% Chance to be Used|$2° Arc of Attack|$3 Target Maximum|$4 Bleeding Damage Over 3 Seconds|$5 Second of Stun",
"stats": [
	[3,4,6,7,9,10],
	[360],
	[3],
	[17,35,48,61,78,96],
	[1]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Battle Rage
{"idx": 5,
"col": 2,
"tier": 1,
"maxlvl": 12,
"name": "Battle Rage",
"desc": "Each enemy hit has a chance of sending you into a battle rage that adds bonus damage to attacks and increases Offensive Ability for a short duration.",
"img": "battlerage",
"unlocks": [6,7],
"lockedby": "",
"cooldown": [12],
"popup": "$1% Chance of Activating|$2 Second Duration|$3 Physical Damage|+$4% Offensive Ability",
"stats": [
	[8],
	[10],
	[8,14,20,26,33,40,46,54,61,68,75,84],
	[33]
]},

// Crushing Blow
{"idx": 6,
"col": 2,
"tier": 3,
"maxlvl": 12,
"name": "Crushing Blow",
"desc": "Provides a chance to critical hit for increased damage while in Battle Rage.",
"img": "crushingblow",
"unlocks": [],
"lockedby": "5",
"cooldown": [],
"popup": "25% Chance of $1 Physical Damage",
"stats": [
	["25-51","45-76","66-101","87-126","108-151","130-177","152-203","174-229","197-256","220-283","243-310","267-338"]
]},

// Counter Attack
{"idx": 7,
"col": 2,
"tier": 5,
"maxlvl": 12,
"name": "Counter Attack",
"desc": "Provides a chance to counter attack an enemy after being hit in Battle Rage.",
"img": "counterattack",
"unlocks": [],
"lockedby": "5",
"cooldown": [],
"popup": "15% Chance of $1 Physical Damage Retaliation",
"stats": [
	["54-93","60-105","69-117","75-129","90-153","99-168","105-192","114-213","120-231","135-267","144-294","150-324"]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Dodge attack
{"idx": 8,
"col": 3,
"tier": 2,
"maxlvl": 8,
"name": "Dodge attack",
"desc": "Even the sturdiest armor has its chinks. The best way to stay alive is to not get hit.",
"img": "weaponblock",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1% Chance to Dodge Attacks",
"stats": [
	[3,6,8,10,12,15,18,21]
]},

// Battle Standard
{"idx": 9,
"col": 3,
"tier": 3,
"maxlvl": 10,
"name": "Battle Standard",
"desc": "Throw down a mighty standard to emoblden the hearts of nearby allies.",
"img": "battlestandard",
"unlocks": [10],
"lockedby": "",
"cooldown": [60],
"popup": "$1 Energy Cost",
"stats": [
	[50]
],
"pet": {
	"name": "Battle Standard",
	"popup": "$1 Second Life Time|$2 Health",
	"stats": [
		[18,20,22,24,26,28,30,32,34,36],
		[180,210,240,270,300,330,360,390,420,450]
	],
	"skills": [
		{"name": "Battle Standard",
		"popup":"$1 Second Duration|$2 Meter Radius|$3% Damage Absorption|+$4 to All Skills|$5 Damage|+$6 Offensive Ability|-$7% Energy Cost",
		"minLevel": 1,
		"stats": [
			[20,26,32,38,44,50,56,62,68,74],
			[12],
			[12,15,18,21,23,25,28,30,33,36],
			[1],
			[12,25,39,54,70,87,105,124,144,166],
			[16,24,32,40,48,56,64,72,80,88],
			[50]
		]}
	]}
},

// Triumph
{"idx": 10,
"col": 3,
"tier": 5,
"maxlvl": 6,
"name": "Triumph",
"desc": "Seeing the inevitability of your triumph, enemies lose hope and the strength of their attack diminishes.",
"img": "triumph",
"unlocks": [],
"lockedby": "9",
"cooldown": [],
"popup": "$1 Second Duration|$2 Meter Radius|-$3% Physical Damage|-$4% Physical Resistance|-$5% Stun Resistance",
"stats": [
	[90],
	[12],
	[15,20,25,30,35,40],
	[15,20,25,30,35,40],
	[50]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Onslaught
{"idx": 11,
"col": 4,
"tier": 1,
"maxlvl": 8,
"name": "Onslaught",
"desc": "When used as your default weapon attack, Onslaught charges up as you hit enemies causing increased damage. The first hit always charges onslaught to the first level of the skill and it continues to charge until it reaches your current skill level. Onslaught dissipates rapidly when not attacking. Apply this skill to your left mouse button.",
"img": "onslaught",
"unlocks": [12,13,14],
"lockedby": "",
"cooldown": [],
"popup": "$1 Charge Level(s)|$2 Energy Cost|+$3% Damage|$4% Increase in Projectile Speed",
"stats": [
	[1,2,3,4,5,6,7,8],
	[1],
	[5,8,11,14,17,20,23,26],
	[15,24,33,42,51,60,69,78]
]},

// Ignore Pain
{"idx": 12,
"col": 4,
"tier": 2,
"maxlvl": 6,
"name": "Ignore Pain",
"desc": "Total focus in the heat of battle allows you to ignore physical and piercing damage.",
"img": "ignorepain",
"unlocks": [],
"lockedby": "11",
"cooldown": [],
"popup": "$1% Physical Resistance|$2% Pierce Resistance",
"stats": [
	[3,6,8,10,12,15],
	[3,6,8,10,12,15]
]},

// Hamstring
{"idx": 13,
"col": 4,
"tier": 4,
"maxlvl": 6,
"name": "Hamstring",
"desc": "An attack aimed at the enemy's legs reduces their ability to run and increases their vulnerability for a short duration.",
"img": "hamstring",
"unlocks": [],
"lockedby": "11",
"cooldown": [],
"popup": "$1% Reduced Defensive Ability for 3 Seconds|$2 Reduced Armor for 6 Seconds|$3% Slower Movement for 5 Seconds",
"stats": [
	[4,6,8,10,12,14],
	[8,12,16,20,24,28],
	[5,8,10,13,15,18]
]},

// Ardor
{"idx": 14,
"col": 4,
"tier": 6,
"maxlvl": 6,
"name": "Ardor",
"desc": "You build momentum as you drive your attack forward, attacking and moving more rapidly.",
"img": "ardor",
"unlocks": [],
"lockedby": "11",
"cooldown": [],
"popup": "+$1% Movement Speed|+$2% Attack Speed",
"stats": [
	[6,8,10,12,14,16],
	[6,8,10,12,14,16]
]},

//===============================================================
// Skill Column 5
//===============================================================
// War Wind
{"idx": 15,
"col": 5,
"tier": 3,
"maxlvl": 8,
"name": "War Wind",
"desc": "Executes a devastating spinning attack that can damage up to four enemies. Initially each hit is not as powerful as a normal attack but the effectiveness increases every level.",
"img": "warwind",
"unlocks": [16],
"lockedby": "",
"cooldown": [8],
"popup": "$1 Energy Cost|$2° Arc of Attack|$3 Target Maximum|$4% Physical Damage|+$5% Movement",
"stats": [
	[65,68,71,74,77,80,83,86],
	[360],
	[4],
	["-28","-21","-14","-7","00","+7","+14","+21"],
	[300]
]},

// Lacerate
{"idx": 16,
"col": 5,
"tier": 5,
"maxlvl": 8,
"name": "Lacerate",
"desc": "Adds bleeding damage to War Wind and increases the number of enemies hit. Requires that at least one sword, axe or spear.",
"img": "lacerate",
"unlocks": [],
"lockedby": "15",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Target Maximum|$3 Bleeding Damage Over 3 Seconds",
"stats": [
	[12,14,17,19,21,24,26,28],
	[1,0,2,0,0,3,0,0],
	[76,94,113,132,149,171,195,219]
]},

//===============================================================
// Skill Column 6
//===============================================================
// War Horn
{"idx": 17,
"col": 6,
"tier": 2,
"maxlvl": 10,
"name": "War Horn",
"desc": "The triumphant call of your war horn temporarily stuns enemies.",
"img": "warhorn",
"unlocks": [18],
"lockedby": "",
"cooldown": [18],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Seconds of Stun",
"stats": [
	[52,54,56,58,60,62,64,66,68,70],
	[8.0,8.4,8.8,9.2,9.6,10.0,10.4,10.8,11.2,11.6],
	["1.5-3.0","1.5-3.5","1.5-3.9","1.5-4.3","1.5-4.6","1.5-5.0","1.5-5.3","1.5-5.6","1.5-6.0","1.5-6.5"]
]},

// Doom Horn
{"idx": 18,
"col": 6,
"tier": 5,
"maxlvl": 6,
"name": "Doom Horn",
"desc": "Your War Horn heralds the doom of your enemies|shattering their nerves and reducing their ability to defend themselves.",
"img": "doomhorn",
"unlocks": [],
"lockedby": "17",
"cooldown": [],
"popup": "$1 Energy Cost|$2% Reduction to Enemy's Health|$3 Reduced Armor for 10 Seconds",
"stats": [
	[20],
	[9,12,15,18,21,25],
	[24,32,40,48,56,66]
]},

// Ancestral Horn
{"idx": 19,
"col": 6,
"tier": 6,
"maxlvl": 16,
"name": "Ancestral Horn",
"desc": "The ominous call on this ancient heirloom will summon forth ghostly heroes of old from the Elysian Fields to do battle once more.",
"img": "ancestralhorn",
"unlocks": [21],
"lockedby": "",
"cooldown": [300],
"popup": "$1 Energy Cost|$2 Summon Limit",
"stats": [
	[225],
	[3,0,0,0,4,0,0,0,0,5,0,0,0,0,0,0]
],
"pet": {
	"name": "Ancestral Warrior",
	"popup": "$1 Second Life Time|$2 Health|$3 Energy",
	"stats": [
		[24],
		[250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000],
		[300]
	],
	"skills": [
		{"name": "",
		"popup":"$1 Physical Damage",
		"minLevel": 1,
		"stats": [
			["47-53","52-61","57-68","62-75","69-86","74-93","79-100","84-108","91-118","96-125","101-133","106-140","115-151","120-159","125-166","130-173"]
		]}
	]}
},

//===============================================================
// Tier 7 Skills
//===============================================================
// Slam
{"idx": 20,
"col": 2,
"tier": 7,
"maxlvl": 12,
"name": "Slam",
"desc": "Hit all enemies in a straight line with staggering force, disrupting their aim and spellcasting.",
"img": "lineslam",
"unlocks": [],
"lockedby": "",
"cooldown": [7.0],
"popup": "$1 Energy Cost|$2 Physical Damage|$3% Reduction to Enemy's Health|70% Chance of Impaired aim for $4 Seconds|$5 Seconds of Skill Disruption|$6 Seconds of Stun",
"stats": [
	[80,86,92,98,104,110,116,122,128,124,140,146],
	["60-80","81-101","103-123","126-146","150-170","175-195","201-221","228-248","256-276","285-305","315-335","346-366"],
	[20],
	[1.0,1.2,1.4,1.6,1.8,2.0,2.2,2.4,2.6,2.8,3.0,3.2],
	["1.0-1.5","1.2-1.8","1.4-2.1","1.6-2.4","1.8-2.7","2.0-3.0","2.2-3.3","2.4-3.6","2.6-3.9","2.8-4.2","3.0-4.5","3.2-4.8"],
	["1.0-2.0"]
]},

// Lasting Legacy
{"idx": 21,
"col": 6,
"tier": 7,
"maxlvl": 6,
"name": "Lasting Legacy",
"desc": "Forming a deeper connection with your ancestors allows their spirits to remain at your side for longer.",
"img": "lastinglegacy",
"unlocks": [],
"lockedby": "19",
"cooldown": [],
"popup": "Extra Life Time $1 Seconds",
"stats": [
	[4,7,10,13,17,21]
]},

//===============================================================
// End of Skill Entry
//===============================================================
]};