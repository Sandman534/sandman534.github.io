//===============================================================
// Skill Setup
//===============================================================
dream = {
"name": "Dream",
"highlight": "Drawing power from the deam world, the Seer uses sheer force of will to dominate the battlefield. The arcane workings of the psyche, time, and reality itself are all playthings for those who have mastered the secrets of the mind.",
"desc": "Expand your consciousness to draw more deeply from the power of the dream realm and exert your will upon physical reality.",
"str": [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80],
"int": [2,3,5,7,9,10,12,14,16,17,19,21,23,24,26,28,30,31,33,35,37,38,40,42,44,45,47,49,51,52,54,56,58,59,61,63,65,66,68,70],
"dex": [0],
"hp": [35,70,105,140,175,210,245,280,315,350,385,420,455,490,525,560,595,630,665,700,735,770,805,840,875,910,945,980,1015,1050,1058,1120,1155,1190,1225,1260,1295,1330,1365,1400],
"mp": [8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256,264,272,280,288,296,304,312,320],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Trance of Empathy
{"idx": 0,
"col": 1,
"tier": 2,
"maxlvl": 12,
"name": "Trance of Empathy",
"desc": "Force enemies to share the damage they inflict upon you by forming a telepathic link to their minds that conveys only pain and siphions life in retribution.||^yTrance - Only Trance can be Active at a Time.",
"img": "tranceofempathy",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2 Meter Radius|$3% of Attack Damage Converted to Health|$4% Damage Reflected",
"stats": [
	[1],
	[12],
	[10],
	[15,18,21,24,28,32,36,40,44,49,54,60]
]},

// Trance of Convalescence
{"idx": 1,
"col": 1,
"tier": 4,
"maxlvl": 12,
"name": "Trance of Convalescence",
"desc": "A restful state of mind causes increased life recovery and damage absorption for the player and allies||^yTrance - Only Trance can be Active at a Time.",
"img": "tranceofconvalescence",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1 Meter Radius|$2% Damage Absoption|+$3 Health Regeneration per Second|+$4 Energy Regeneration per Second|+$5 Energy Reserved",
"stats": [
	[12],
	[3,4,5,6,7,8,9,10,11,12,13,15],
	[1,2,3,4,5,6,7,8,9,10,11,12],
	[1.0,1.2,1.4,1.6,1.8,2.0,2.2,2.4,2.6,2.8,3.0,3.2],
	[100]
]},

// Trance of Wrath
{"idx": 2,
"col": 1,
"tier": 6,
"maxlvl": 12,
"name": "Trance of Wrath",
"desc": "Waves of negative psionic energy emanate from the player, disrupting enemy thoughts and burning through their physical being.||^yTrance - Only Trance can be Active at a Time.",
"img": "tranceofwrath",
"unlocks": [],
"lockedby": "",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|$2 Meter Radius|$3 Electrical Burn Damage Over 4 Seconds|$4% Reduced Resistance for 4 Seconds|$5 Seconds of Skill Disruption",
"stats": [
	[1],
	[2.8,3.0,3.2,3.4,3.6,3.8,4.0,4.2,4.4,4.6,4.8,5.0],
	[26,38,49,61,73,86,100,115,130,147,163,182],
	[,10,12,14,16,18,20,22,24,26,28,30,32],
	[1]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Lucid Dream
{"idx": 3,
"col": 2,
"tier": 2,
"maxlvl": 8,
"name": "Lucid Dream",
"desc": "Increased conscious control Over your dream state enhances abilities that derive power from the dream world.",
"img": "luciddream",
"unlocks": [4,5],
"lockedby": "",
"cooldown": [],
"popup": "+$1% Physical Damage|+$2% Electical Burn Damage|+$3% Vitality Damage",
"stats": [
	[10,12,15,18,21,23,25,28],
	[15,19,23,27,31,35,39,45],
	[15,19,23,27,31,35,39,45]
]},

// Premonition
{"idx": 4,
"col": 2,
"tier": 3,
"maxlvl": 6,
"name": "Premonition",
"desc": "A procognitive sense of the imminent future allows you to stay one step ahead of your enemies in combat.",
"img": "premonition",
"unlocks": [],
"lockedby": "3",
"cooldown": [],
"popup": "+$1 Offensive Ability|+$2 Defensive Ability",
"stats": [
	[31,47,63,79,95,111],
	[31,47,63,79,95,111]
]},

// Temporal Flux
{"idx": 5,
"col": 2,
"tier": 5,
"maxlvl": 6,
"name": "Temporal Flux",
"desc": "A subtle acceleration of time around the player allows them to move more quickly, anticipate attacks, and negate the dlowing effects of enemy skills.",
"img": "temporalflux",
"unlocks": [],
"lockedby": "3",
"cooldown": [],
"popup": "+$1% Total Speed|+$2% Chance to Avoid Projectiles|$3% Slow Resistance",
"stats": [
	[2,4,6,8,10,12],
	[3,5,8,10,12,15],
	[8,12,16,20,24,28]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Sands of Sleep
{"idx": 6,
"col": 3,
"tier": 1,
"maxlvl": 8,
"name": "Sands of Sleep",
"desc": "Puts enemies to sleep, rendering them immobile for a duration or until awakened by an attack.",
"img": "sandsofsleep",
"unlocks": [],
"lockedby": "",
"cooldown": [4],
"popup": "Affects up to $1 Target(s)|$2 Energy Cost|$3 Seconds of Sleep",
"stats": [
	[1,2,0,3,0,4,0,5],
	[25,30,35,40,45,50,55,60],
	["2.5-4.0","3.0-4.8","3.5-5.6","3.9-6.4","4.3-7.2","4.7-8.0","5.0-8.8","5.3-9.6"]
]},

// Summon Nightmare
{"idx": 7,
"col": 3,
"tier": 3,
"maxlvl": 16,
"name": "Summon Nightmare",
"desc": "Calls forth a nightmarish phantasm from the dream world to serve as your familiar.",
"img": "conjurephantasm",
"unlocks": [8],
"lockedby": "",
"cooldown": [60],
"popup": "$1 Energy Cost",
"stats": [
	[150,154,158,162,166,170,174,178,182,186,190,194,198,202,206,216]
],
"pet": {
	"name": "Nightmare",
	"popup": "$1 Health|$2 Energy",
	"stats": [
		[105,120,136,153,171,190,210,231,253,277,303,331,361,393,428,466],
		[930,960,990,1020,1050,1080,1110,1140,1170,1200,1230,1260,1290,1320,1350,1380]
	],
	"skills": [
		{"name": "Psionic Beam",
		"popup":"$1 Physical Damage|$2 Vitality Damage",
		"minLevel": 1,
		"stats": [
			[8,12,16,20,24,28,32,36,39,42,45,48,51,54,56,58],
			[8,12,16,20,24,28,32,36,39,42,45,48,51,54,56,58]
		]},
		{"name": "Dodge Attack",
		"popup":"$1% Chance to Dodge Attacks|+$2% Chance to Avoid Projectiles",
		"minLevel": 1,
		"stats": [
			[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],
			[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]
		]},
		{"name": "Dream Surge",
		"popup":"$1 Projectiles|$2% Chance to Pass Through Enemies|$3 Physical Damage|$4 Vitality Damage|$5% of Attack Damage Converted to Health",
		"minLevel": 5,
		"stats": [
			[10],
			[100],
			[37,40,44,48,51,54,56,59,62,65,67,69],
			[37,40,44,48,51,54,56,59,62,65,67,69],
			[30]
		]}
	]}
},

// Hypnotic Gaze
{"idx": 8,
"col": 3,
"tier": 4,
"maxlvl": 8,
"name": "Hypnotic Gaze",
"desc": "The mesmerizing stare of the Nightmare is able to dominate lesser inds and throw them into a state of confusion, causing them to wander aimlessly and attack phantom images.",
"img": "hypnoticgaze",
"unlocks": [9],
"lockedby": "7",
"cooldown": [],
"popup": "$1 Energy Cost|$2% Reduced Resistance|$3 Seconds of Confusion",
"stats": [
	[72,74,75,77,78,80,82,83],
	[6,10,14,18,22,26,30,34],
	[3.0,3.5,4.0,4.5,5.0,5.5,6.0,6.5]
]},

// Master Mind
{"idx": 9,
"col": 3,
"tier": 6,
"maxlvl": 8,
"name": "Master Mind",
"desc": "Grants allies the resolve to hold out against great adversity.",
"img": "mastermind",
"unlocks": [],
"lockedby": "8",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Meter Radius||Bonus to All Pets:|#+$3% Total Damage|#+$4% Health Regeneration|#+$5% Energy Regeneration",
"stats": [
	[50],
	[15],
	[5,10,15,20,25,30,35,40],
	[30,45,60,75,90,105,120,135],
	[30,45,60,75,90,105,120,135]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Psionic Touch
{"idx": 10,
"col": 4,
"tier": 1,
"maxlvl": 12,
"name": "Psionic Touch",
"desc": "Psionic energies focused within your weapons will create a bone shattering resonance when they contact your enemies.",
"img": "psionictouch",
"unlocks": [11,21],
"lockedby": "",
"cooldown": [],
"popup": "$1 Charge Levels|+$2% Total Damage|$3 Vitality Damage",
"stats": [
	[3],
	[30,36,42,48,54,60,66,72,78,84,90,96],
	[15,19,23,27,31,36,42,49,57,66,76,87]
]},

// Psionic Burn
{"idx": 11,
"col": 4,
"tier": 3,
"maxlvl": 8,
"name": "Psionic Burn",
"desc": "Psionic energy within the target ignites and explodes outward, burning through their material being and inflicting severe damage to adjacent targets.",
"img": "psionicburn",
"unlocks": [],
"lockedby": "10",
"cooldown": [],
"popup": "$1 Meter Radius|$2 Electrical Burn Damage Over 4 Seconds|$3% Slower Movement for 4 Seconds|+$4% Damage to Demons",
"stats": [
	[3.5],
	[36,57,70,84,100,116,132,150],
	[9,14,16,21,25,29,33,38],
	[8,12,16,20,24,28,32,36]
]},

// Distortion Field
{"idx": 12,
"col": 4,
"tier": 4,
"maxlvl": 8,
"name": "Distortion Field",
"desc": "A field of psionic power bends the fabric of reality around the player, negating some of the damage from enemy attacks and dealing retaliatory damage to enemies that strike you.",
"img": "distortionfield",
"unlocks": [],
"lockedby": "",
"cooldown": [30],
"popup": "$1% Chance of Activating|$2 Second Duration|$3 Damage Absorption|$4% Damage Absorption|$5 Damage Retaliation",
"stats": [
	[5],
	[15],
	[18,21,24,27,30,33,36,39],
	[9,11,12,14,15,17,18,20],
	[3,7,11,17,23,30,37,45]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Phantom Strike
{"idx": 13,
"col": 5,
"tier": 2,
"maxlvl": 12,
"name": "Phantom Strike",
"desc": "Vanish from the waking world and reappear before a target enemy to deliver a monstrous attack.",
"img": "phantomstrike",
"unlocks": [14],
"lockedby": "",
"cooldown": [16],
"popup": "$1 Energy Cost|+$2% Total Damage",
"stats": [
	[50],
	[35,50,65,80,95,109,123,137,151,164,177,190]
]},

// Dream Stealer
{"idx": 14,
"col": 5,
"tier": 3,
"maxlvl": 8,
"name": "Dream Stealer",
"desc": "Devastate your enemies and steal their power by ripping the very dreams from their minds.",
"img": "dreamstealer",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "$1 Energy Cost|$2° Arc of Attack|$3 Target Maximum|$4 Damage|$5 Energy Leech Over 3 Seconds|$6 Seconds of Stun.",
"stats": [
	[10,12,14,16,18,20,22,24],
	[360],
	[3,0,4,0,5,0,6,0],
	[103,118,134,151,170,189,209,229],
	[90,135,180,225,270,315,360,405],
	[,1.5,2.0,2.5,3.0,3.4,3.8,4.1,4.5]
]},

// Distort Reality
{"idx": 15,
"col": 5,
"tier": 4,
"maxlvl": 12,
"name": "Distort Reality",
"desc": "Sends out a powerful ripple of distortion around the player that tears the fabric of reality, causing severe damage to enemies caught within it.",
"img": "distortreality",
"unlocks": [16],
"lockedby": "",
"cooldown": [12],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Damage|$4 Vitality Damage|$5 Seconds of Stun",
"stats": [
	[100,104,108,112,116,120,124,128,132,136,140,144],
	[8],
	[,57,69,80,92,106,120,135,151,168,186,205,225],
	[45,53,61,69,79,89,100,111,123,136,150,164],
	[1.5]
]},

// Temporal Rift
{"idx": 16,
"col": 5,
"tier": 6,
"maxlvl": 12,
"name": "Temporal Rift",
"desc": "Enhances the power of the distortion ripple, unleashing a surge of psionic energy that causes massive damage to enemies and temporarily freezes them in time.",
"img": "temporalrift",
"unlocks": [],
"lockedby": "15",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Electical Burn Damage Over 4 Seconds|15% Energy Drained ($3% Energy Drained Causes Damage)|$4 Seconds of Petrify|+$5 Damage to Demons",
"stats": [
	[3,4,5,6,7,8,9,10,11,12,0,0],
	[144,171,200,229,261,296,328,368,406,446,488,531],
	[45,60,75,90,105,120,135,150,165,180,195,210],
	[1.5,1.8,2.0,2.3,2.5,2.8,3.0,3.3,3.5,3.8,4.0,4.3],
	[27,38,49,60,72,85,97,112,126,141,157,173]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Distoration Wave
{"idx": 17,
"col": 6,
"tier": 1,
"maxlvl": 12,
"name": "Distoration Wave",
"desc": "A wave of force is projected outward that forms chaotic ripples in the fabric of reality and delivers devastating damage to the body and mind of enemies.",
"img": "distortionwave",
"unlocks": [18,19],
"lockedby": "",
"cooldown": [4],
"popup": "$1 Energy Cost|$2 Physical Damage|$3% Slowed for 4 Seconds",
"stats": [
	[36,40,44,48,52,56,60,64,68,72,76,80],
	[10,15,21,27,37,55,66,78,92,106,122,140],
	[15,21,26,31,35,39,43,47,50,52,54,56]
]},

// Chaotic Resonance
{"idx": 18,
"col": 6,
"tier": 3,
"maxlvl": 8,
"name": "Chaotic Resonance",
"desc": "Amplifies the physical distortion effect, causing it to shatter armor and break bones.",
"img": "chaoticresonance",
"unlocks": [],
"lockedby": "17",
"cooldown": [],
"popup": "-$1 Second Recharge|$2 Energy Cost|$3 Physical Damage|$4 Reduced Armor for 5 Seconds",
"stats": [
	[3],
	[8,10,11,13,14,16,17,19],
	[16,23,33,42,56,85,102,120],
	[25,39,55,73,93,115,140,168]
]},

// Psionic Immonlation
{"idx": 19,
"col": 6,
"tier": 5,
"maxlvl": 12,
"name": "Psionic Immonlation",
"desc": "Psionic energies ignite into a surge of electrical power that causes horrific burning Over a short duration.",
"img": "psionicimmolation",
"unlocks": [],
"lockedby": "17",
"cooldown": [],
"popup": "-$1 Second Recharge|+$2 Energy Cost|$3 Electrical Burn Damage Over 4 Seconds|+$4% Damage to Demons",
"stats": [
	[3],
	[18,26,34,42,50,58,66,74,82,90,95,99],
	[96,129,164,199,236,275,316,358,401,447,494,544],
	[50]
]},

//===============================================================
// Tier 7 Skills
//===============================================================
// Dream Image
{"idx": 20,
"col": 2,
"tier": 7,
"maxlvl": 8,
"name": "Dream Image",
"desc": "Draws forth a mirror image of yourself from the dreamworld that briefly fights at your side.",
"img": "dreamimage",
"unlocks": [],
"lockedby": "",
"cooldown": [140],
"popup": "150 Energy Cost",
"stats": [
	[150,154,158,162,166,170,174,178]
],
"pet": {
	"name": "Dream Image",
	"popup": "$1 Second Life Time|$2 Health|$3 Energy",
	"stats": [
		[10,11,12,13,15,16,18,20],
		[3840],
		[1920]
	],
	"skills": [
		{"name": "",
		"popup":"$1 Damage",
		"minLevel": 1,
		"stats": [
			["384-480"]
		]}
	]}
},

// Psionic Beam
{"idx": 21,
"col": 4,
"tier": 7,
"maxlvl": 6,
"name": "Psionic Beam",
"desc": "Improve the psionic focus within your magic staff to channel a rapid-fire attack.",
"img": "staffbeam",
"unlocks": [],
"lockedby": "10",
"cooldown": [],
"popup": "$1% chance to pass through Enemies|-$2 Charge Levels|$3% Increase in Projectile Speed",
"stats": [
	[10,20,30,40,50,60],
	[0,0,0,1,0,0],
	[10,20,30,40,50,60]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};