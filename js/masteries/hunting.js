//===============================================================
// Hunting
//===============================================================
hunting = {
"name": "Hunting",
"highlight": "Master of bow and spear combat. Piercing attacks penetrate enemy armor and high level bow skills will tear through large groups of enemies. The Hunter must rely on speed and range to stay out of the reach of enemies.",
"desc": "Imparts the predatory spirit and cunning necessary to learn the arts of hunting.",
"str": [2,3,5,7,9,10,12,14,16,17,19,21,23,24,26,28,30,31,33,35,37,38,40,42,44,45,47,49,51,52,54,56,58,59,61,63,65,66,68,70],
"int": [0],
"dex": [2,5,7,10,12,15,19,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,60,62,65,67,70,72,75,77,80,82,85,87,90,92,95,97,100],
"hp": [35,70,105,140,175,210,245,280,315,350,385,420,455,490,525,560,595,630,665,700,735,770,805,740,785,910,945,980,1015,1050,1085,1120,1155,1190,1225,1260,1295,1330,1365,1400],
"mp": [0],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Ensnare
{"idx": 0,
"col": 1,
"tier": 1,
"maxlvl": 6,
"name": "Ensnare",
"desc": "Casts a weighted net around the feet of an enemy holding them in place but not preventing them from attacking if you are within their range.",
"img": "ensnare",
"unlocks": [1],
"lockedby": "",
"cooldown": [3],
"popup": "$1 Energy Cost|$2 Second Duration|-$3 Defensive Ability",
"stats": [
	[15,17,19,20,22,24],
	[3.0,4.0,5.1,6.3,7.7,9.2],
	[300]
]},

// Barbed Netting
{"idx": 1,
"col": 1,
"tier": 3,
"maxlvl": 8,
"name": "Barbed Netting",
"desc": "Barbed hooks on the hunter's Ensnare net tear into enemies as they struggle causing them to bleed.",
"img": "barbednetting",
"unlocks": [],
"lockedby": "0",
"cooldown": [],
"popup": "$1 Bleeding Damage per Second",
"stats": [
	[18,25,33,40,47,56,63,70]
]},

// Study Prey
{"idx": 2,
"col": 1,
"tier": 4,
"maxlvl": 8,
"name": "Study Prey",
"desc": "By observing your prey from a distance you may discover its weakness, resulting in greater pierce damage.",
"img": "studyprey",
"unlocks": [3],
"lockedby": "",
"cooldown": [8],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|-$4% Damage Resistance|-$5% Pierce Resistance",
"stats": [
	[35],
	[8],
	[6],
	[21,26,30,34,38,72,76,50],
	[21,25,29,33,38,42,46,50]
]},

// Flush Out
{"idx": 3,
"col": 1,
"tier": 6,
"maxlvl": 6,
"name": "Flush Out ",
"desc": "Draw your enemies into the open, making them more vulnerable to attack.",
"img": "flushout",
"unlocks": [],
"lockedby": "2",
"cooldown": [],
"popup": "$1 Energy Cost|-$2% Defensive Ability|-$3% Elemental Resistance|-$4% Bleeding Resistance",
"stats": [
	[10],
	[14,18,22,26,30,36],
	[14,18,22,26,30,36],
	[14,18,22,26,30,36]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Call of the Hunt
{"idx": 4,
"col": 2,
"tier": 3,
"maxlvl": 8,
"name": "Call of the Hunt",
"desc": "Those who answer the call of the hunt will fight with increased speed and cunning.",
"img": "callofthehunt",
"unlocks": [5,20],
"lockedby": "",
"cooldown": [180],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4 Bleeding Damage Over 3 Seconds|+$5% Attack Speed|+$6% Damage to Beastmen|+$7% Damage to Animals",
"stats": [
	[45,47,49,51,53,55,57,59],
	[28,31,33,36,42,44,47,50],
	[15],
	[18,22,26,30,34,38,42,46],
	[15,17,19,22,24,26,28,31],
	[33],
	[33]
]},

// Exploit Weakness
{"idx": 5,
"col": 2,
"tier": 5,
"maxlvl": 10,
"name": "Exploit Weakness",
"desc": "Take full advantage of your enemy's mistakes and vulnerable moments to inflict savage wounds.",
"img": "cunning",
"unlocks": [],
"lockedby": "4",
"cooldown": [],
"popup": "$1 Energy Cost|+$2% Pierce Damage|+$3% Bleeding Damage",
"stats": [
	[10],
	[58,66,77,85,93,104,112,120,131,139],
	[58,66,77,85,93,104,112,120,131,139]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Marksmanship
{"idx": 6,
"col": 3,
"tier": 2,
"maxlvl": 12,
"name": "Marksmanship",
"desc": "Marksmanship skill allows you to fire or throw projectiles that fly faster and increase pierce damage.",
"img": "marksmanship",
"unlocks": [7,8],
"lockedby": "",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Piercing Damage|+$3% Increase in Projectile Speed",
"stats": [
	[2],
	[4,8,12,16,20,24,28,33,38,43,49,55],
	[30,40,50,60,70,80,90,100,110,120,130,140]
]},

// Puncture Shot Arrows
{"idx": 7,
"col": 3,
"tier": 4,
"maxlvl": 12,
"name": "Puncture Shot Arrows",
"desc": "Incorporating a more streamlined shaft into your arrows allows them to pass through targets and hit additional enemies in their path.",
"img": "punctureshot",
"unlocks": [],
"lockedby": "6",
"cooldown": [],
"popup": "$1 Energy Cost|$2% Chance to Pass Through Enemies|+$3% Pierce Damage|+$4% Bleeding Damage",
"stats": [
	[1],
	[8,12,16,21,25,29,33,38,42,46,50,55],
	[5,8,10,12,15,18,20,22,25,28,30,33],
	[9,12,15,20,23,27,30,35,38,42,45,50]
]},

// Scatter Shot Arrows
{"idx": 8,
"col": 3,
"tier": 6,
"maxlvl": 12,
"name": "Scatter Shot Arrows",
"desc": "A secret of master fletchers is the ability to craft special arrow heads that burst on impact sending out razor-sharp fragments in all directions.",
"img": "scattershotarrowheads",
"unlocks": [],
"lockedby": "6",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Fragments|$3 Piercing Damage|$4 Bleeding Damage Over 3 Seconds",
"stats": [
	[1],
	["3-4","3-5","4-5",0,"4-6","5-6","5-7",0,"6-7","6-8",0,"7-9"],
	[3,5,7,9,11,13,16,19,22,25,29,32],
	[12,19,26,35,44,54,64,76,88,101,114,130]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Take Down
{"idx": 9,
"col": 4,
"tier": 1,
"maxlvl": 12,
"name": "Take Down",
"desc": "A brutal thrust from your spear delivers devastating piercing damage to enemies and diminishes a portion of your enemy's total life.",
"img": "takedown",
"unlocks": [10],
"lockedby": "",
"cooldown": [8],
"popup": "$1 Energy Cost|$2 Piercing Damage|$3% Reduction to Enemy's Health|+$4% Movement",
"stats": [
	[30,32,34,36,38,40,42,44,46,48,50,52],
	[25,36,48,62,72,82,91,103,112,122,131,143],
	[8,12,15,18,21,24,26,28,30,32,34,36],
	[300]
]},

// Eviscerate
{"idx": 10,
"col": 4,
"tier": 3,
"maxlvl": 10,
"name": "Eviscerate",
"desc": "Targeting vital weak-points on your enemy causes sustained damage from bleeding.",
"img": "eviscerate",
"unlocks": [],
"lockedby": "9",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Bleeding Damage Over 3 Seconds",
"stats": [
	[5],
	[83,113,150,180,210,248,278,308,345,375]
]},

// Gouge
{"idx": 11,
"col": 4,
"tier": 4,
"maxlvl": 6,
"name": "Gouge",
"desc": "A combat technique that uses the spear or bow to inflict deep wounds that will result in prolonged bleeding.",
"img": "gouge",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1% Chance to be Used|$2 Bleeding Damage Over 3 Seconds",
"stats": [
	[6,8,10,12,14,16],
	[72,108,149,194,243,297]
]},

// Volley
{"idx": 12,
"col": 4,
"tier": 6,
"maxlvl": 6,
"name": "Volley",
"desc": "A combat technique that uses the spear, bow or throwing weapons to rapidly strike three times in succession.",
"img": "volley",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "Launches $1 Projectiles|$2% Chance to be Used",
"stats": [
	[3],
	[6,8,10,12,14,16]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Art of the Hunt
{"idx": 13,
"col": 5,
"tier": 2,
"maxlvl": 12,
"name": "Art of the Hunt",
"desc": "Hunting experience gives you the edge when facing familiar quarry such as Animals and Beastmen.",
"img": "artofthehunt",
"unlocks": [14,15],
"lockedby": "",
"cooldown": [4],
"popup": "$1 Meter Radius|+$2% Pierce Damage|+$3% Bleeding Damage|+$4 Energy Reserved|+$5 Damage to Beastmen|+$6 Damage to Animals",
"stats": [
	[15],
	[12,18,23,30,34,40,45,52,56,62,67,75],
	[15,18,21,24,27,30,33,36,39,42,45,48],
	[75],
	[3,5,8,10,12,15,17,19,22,25,27,30],
	[3,5,8,10,12,15,17,19,22,25,27,30]
]},

// Find Cover
{"idx": 14,
"col": 5,
"tier": 4,
"maxlvl": 8,
"name": "Find Cover",
"desc": "Making use of available cover as you press your attack allows you to avoid unnecessary damage.",
"img": "findcover",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "+$1% Chance to Avoid Projectiles|+$2 Energy Reserved",
"stats": [
	[8,10,12,15,17,19,23,25],
	[10]
]},

// Trail Blazing
{"idx": 15,
"col": 5,
"tier": 5,
"maxlvl": 6,
"name": "Trail Blazing",
"desc": "Grants those who follow the hunt endurance to relentlessly track their quarry, preventing even the most tangled thicket from slowing pursuit.",
"img": "trailblazing",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "+$1 Energy Reserved|+$2% Movement|$3% Reduced Entrapment Duration",
"stats": [
	[50],
	[5,8,10,12,16,18],
	[100]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Wood Lore
{"idx": 16,
"col": 6,
"tier": 1,
"maxlvl": 6,
"name": "Wood Lore",
"desc": "Central to survival in the wilderness is the ability to hunt with bow, spear or thrown objects. Great familiarity with these weapons allows you to wield them with exceptional speed and precision.",
"img": "woodlore",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "+$1 Defensive Ability|+$2% Attack Speed",
"stats": [
	[62,84,126,158,190,222],
	[5,8,12,16,20,24]
]},

// Herbal Remedy
{"idx": 17,
"col": 6,
"tier": 2,
"maxlvl": 6,
"name": "Herbal Remedy",
"desc": "Living off the land, you learn to identify and utilize medicinal plants to create healing salves. When applied it will fortify against poison and healing is accelerated for a duration.",
"img": "herbalism",
"img": "herbalism",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Second Duration|+$3 Health Regeneration per Second|$4% Poison Resistance",
"stats": [
	[35,40,45,50,55,60],
	[180,240,300,360,420,480],
	[3.0,3.6,4.2,4.8,5.4,6.0],
	[30,38,46,54,66,72]
]},

// Monster Lure
{"idx": 18,
"col": 6,
"tier": 3,
"maxlvl": 6,
"name": "Monster Lure",
"desc": "Drops down a decoy to attract the attention of nearby monsters.",
"img": "monsterlure",
"unlocks": [19],
"lockedby": "",
"cooldown": [12],
"popup": "$1 Energy Cost|$2 Summon Limit",
"stats": [
	[34,38,42,46,50,54],
	[2]
],
"pet": {
	"name": "Monster Lure",
	"popup": "$1 Second Life Time|$2 Health|$3 Energy",
	"stats": [
		[30],
		[80,100,123,147,170,197],
		[15]
	],
	"skills": [
		{"name": "Provoke",
		"popup":"$1 Energy Cost|$2 Meter Radius",
		"minLevel": 1,
		"stats": [
			[15],
			[5,6,7,8,9,10]
		]}
	]}
},

// Detonate
{"idx": 19,
"col": 6,
"tier": 5,
"maxlvl": 12,
"name": "Detonate",
"desc": "Adds a hidden explosive charge to the monster lure causing it to detonate when destroyed. In order to detonate the lure must be at full energy.",
"img": "detonate",
"unlocks": [],
"lockedby": "18",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Projectile|$3 Meter Radius|$4 Damage|$5 Fire Damage|$6 Second of Stun",
"stats": [
	[15],
	[1],
	[6],
	["36-58","42-66","49-75","58-86","64-94","70-102","77-111","86-122","92-130","98-138","105-147","114-158"],
	["72-116","84-132","98-150","116-172","128-188","140-204","154-222","172-244","184-260","196-276","210-294","228-316"],
	[1]
]},

//===============================================================
// Tier 7 Skills
//===============================================================
// Finesse
{"idx": 20,
"col": 2,
"tier": 7,
"maxlvl": 8,
"name": "Finesse",
"desc": "Increases your group's chances to inflict critical melee damage.",
"img": "finesse",
"unlocks": [],
"lockedby": "4",
"cooldown": [],
"popup": "2% Chance of $1% Reduction to Enemy's Health|+$2 Offensive Ability|+$3% Offensive Ability",
"stats": [
	[20,25,30,35,40,45,50,55],
	[100,150,200,250,300,350,300,450],
	[10]
]},

// Spear Dance
{"idx": 21,
"col": 5,
"tier": 7,
"maxlvl": 12,
"name": "Spear Dance",
"desc": "An impressive display of spear mastery causes surrounding enemies to falter.",
"img": "speardance",
"unlocks": [],
"lockedby": "",
"cooldown": [18],
"popup": "$1 Energy Cost|$2° Arc of Attack|$3% Physical Damage|$4% Chance of 1.0-3.0 second(s) of Fear|$5% Slower Attack for 2.0 Seconds",
"stats": [
	[60,63,66,69,72,75,78,81,84,87,90,93],
	[360],
	["-20","-16","-12","-8","-4","0","+4","+8","+12","+16","+20","+24"],
	[8,12,16,20,24,28,32,36,40,44,48,52],
	[50]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};