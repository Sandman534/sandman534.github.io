//===============================================================
// Storm
//===============================================================
storm = {
"name": "Storm",
"highlight": "Excels at dealing massive lightning and cold damage to single opponents or small groups. The Stormcaller has limited personal defenses but can slow, freeze, and stun enemies with frost and thunder attacks.",
"desc": "Provides the mental control and spiritual focus to unfetter your mind of earthly concerns and learn to harness the elemental power of weather.",
"str": [0],
"int": [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120],
"dex": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
"hp": [21,42,63,84,105,126,147,168,189,210,231,252,273,294,315,336,357,378,399,420,441,462,483,504,525,546,567,588,609,630,651,672,693,714,735,756,777,798,819,840],
"mp": [15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345,360,375,390,405,420,435,450,465,480,495,510,525,540,555,570,585,600],
"skills": [

//===============================================================
// Skill Column 1
//===============================================================
// Spell Breaker
{"idx": 0,
"col": 1,
"tier": 2,
"maxlvl": 6,
"name": "Spell Breaker",
"desc": "A pulse of negatively charged energy dispels hostile enchantments on allies, or when cast on enemies|breaks their beneficial enchantments and negates a portion of their energy. This attack inflicts bonus damage when used against Magical creatures.",
"img": "spellbreaker",
"unlocks": [1],
"lockedby": "",
"cooldown": [6],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Damage|$4% Energy Drain|+$5% Damage to Magical",
"stats": [
	[32,34,36,38,40,42],
	[6],
	[10,20,30,40,50,60],
	[24,32,40,50,58,66],
	[50]
]},

// Spell Shock
{"idx": 1,
"col": 1,
"tier": 3,
"maxlvl": 8,
"name": "Spell Shock",
"desc": "Inflicts energy burn damage and disrupts enemy spell-caster's ability to use skills as their beneficial enchantments are abruptly shattered by Spell Breaker.",
"img": "spellshock",
"unlocks": [],
"lockedby": "0",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Electrical Burn Damage Over $3 Seconds|$4% Energy Drain Damage Ratio|$5 Seconds of Skill Disruption",
"stats": [
	[14,16,18,20,22,24,26,28],
	[9,13,18,23,29,36,44,52],
	[3.0,3.6,4.2,4.8,5.4,6.0,6.6,7.2],
	[30,45,60,75,90,105,120,135],
	[3.0,3.6,4.2,4.8,5.4,6.0,6.6,7.2]
]},

// Lightning Bolt
{"idx": 2,
"col": 1,
"tier": 4,
"maxlvl": 12,
"name": "Lightning Bolt",
"desc": "Calls down a powerful bolt of lightning from the heavens to decimate your target.",
"img": "lightningbolt",
"unlocks": [3],
"lockedby": "",
"cooldown": [12],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Lightning Damage|$4 Second of Stun",
"stats": [
	[80,88,96,104,112,120,128,136,144,152,160,168],
	[0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6],
	["51-109","63-133","84-156","86-178","97-202","109-225","120-247","132-271","143-294","155-316","166-340","178-363"],
	[1]
]},

// Chain Lightning
{"idx": 3,
"col": 1,
"tier": 6,
"maxlvl": 12,
"name": "Chain Lightning",
"desc": "Causes electricity to leap from the target of your Lightning Bolt skill and strike additional nearby enemies.",
"img": "chainlightning",
"unlocks": [],
"lockedby": "2",
"cooldown": [],
"popup": "$1 Lightning Damage|$2 Seconds of Stun",
"stats": [
	["31-53","41-69","53-84","65-101","74-115","86-130","96-145","107-163","117-177","128-192","138-207","150-226"],
	[0.5]
]},

//===============================================================
// Skill Column 2
//===============================================================
// Ice Shard
{"idx": 4,
"col": 2,
"tier": 1,
"maxlvl": 12,
"name": "Ice Shard",
"desc": "Projects a deadly shard of ice at the target inflicting cold damage and temporarily slowing them.",
"img": "frostshard",
"unlocks": [5,6],
"lockedby": "",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Projectile|$3 Cold Damage|$4% Slowed for 1.5 Seconds",
"stats": [
	[21,23,25,27,29,31,33,35,37,39,41,43],
	[1],
	["16-25","20-31","23-36","28-43","32-47","36-53","39-58","44-64","48-68","52-73","55-77","60-83"],
	[26]
]},

// Velocity
{"idx": 5,
"col": 2,
"tier": 3,
"maxlvl": 8,
"name": "Velocity",
"desc": "Increases the speed and damage of Ice Shard. Gives each shard a chance to punch through its target and keep going.",
"img": "velocity",
"unlocks": [],
"lockedby": "4",
"cooldown": [],
"popup": "$1 Energy Cost|$2% Chance to Pass Through Enemies|+$3% Cold Damage|+$4% Increase in Projectile Speed",
"stats": [
	[2,0,3,0,0,4,0,0],
	[18,24,30,36,42,48,54,60],
	[10,16,22,28,34,40,46,52],
	[15,20,25,30,35,40,45,50]
]},

// Torrent
{"idx": 6,
"col": 2,
"tier": 5,
"maxlvl": 8,
"name": "Torrent",
"desc": "Increases the number of shards cast|sending a deadly torrent at enemies.",
"img": "torrent",
"unlocks": [],
"lockedby": "4",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Projectile(s)|$3 Frostburn Damage Over 3 Seconds",
"stats": [
	[14,16,21,23,28,30,32,38],
	[1,0,2,0,3,0,0,4],
	[24,42,57,78,102,126,153,186]
]},

//===============================================================
// Skill Column 3
//===============================================================
// Thunderball
{"idx": 7,
"col": 3,
"tier": 2,
"maxlvl": 12,
"name": "Thunderball",
"desc": "Hurls a ball of electrical energy that damages and stuns enemies in a small blast radius.",
"img": "thunderball",
"unlocks": [8],
"lockedby": "",
"cooldown": [10],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Lightning Damage|25% Reduced Defensive Ability for $4 Seconds|$5 Seconds of Stun",
"stats": [
	[50,53,56,59,62,65,68,71,74,77,80,83],
	[1.8],
	["14-32","22-45","32-56","44-71","52-82","60-95","70-106","82-121","90-132","98-145","108-156","120-171"],
	[1.5,1.8,2.1,2.5,2.8,3.1,3.4,3.8,4.1,4.4,4.7,5.1],
	[1.5,1.8,2.1,2.5,2.8,3.1,3.4,3.8,4.1,4.4,4.7,5.1]
]},

// Concussive Blast
{"idx": 8,
"col": 3,
"tier": 4,
"maxlvl": 8,
"name": "Concussive Blast",
"desc": "Reduces visibility inside the Squall makes it difficult for enemies to effectively attack or defend themselves.",
"img": "concussivedamage",
"unlocks": [],
"lockedby": "7",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Meter Radius|$3 Fragments|$4 Lightning Damage|$5 Seconds of Stun",
"stats": [
	[14,15,16,18,19,20,22,23],
	[1.5],
	["2-3","2-4",0,"3-5",0,"4-5","4-6","5-6"],
	["6-22","12-32","18-44","24-54","30-64","36-76","42-86","48-96"],
	[1.0,1.2,1.5,1.7,1.9,2.3,2.5,2.8]
]},

// Summon Wisp
{"idx": 9,
"col": 3,
"tier": 5,
"maxlvl": 16,
"name": "Summon Wisp",
"desc": "Summon an immortal Storm Wisp from the atmosphere to battle your enemies.",
"img": "stormwisp",
"unlocks": [10,20],
"lockedby": "",
"cooldown": [20],
"popup": "$1 Energy Cost",
"stats": [
	[200]
],
"pet": {
	"name": "Storm Wisp",
	"popup": "$1 Health|$2 Energy",
	"stats": [
		[153,165,177,189,201,213,225,237,249,261,273,285,297,309,321,333],
		[186,195,204,213,222,231,240,249,258,267,276,285,294,303,312,321]
	],
	"skills": [
		{"name": "Plasma Burn",
		"popup":"$1 Lightning Damage",
		"minLevel": 1,
		"stats": [
			["6-25","9-28","11-31","15-34","17-38","21-41","24-44","29-48","32-51","36-55","40-58","46-62","50-66","55-69","59-74","66-78"]
		]},
		{"name": "Thunderclap",
		"popup":"$1 Second Cooldown|$2 Energy Cost|$3 Meter Radius|$4 Lightning Damage|$5 Seconds of Stun",
		"minLevel": 5,
		"stats": [
			[8],
			[31,32,33,34,35,36,37,38,39,40,41,42],
			[3],
			["36-51","41-57","45-65","50-73","55-80","60-88","65-95","70-104","76-113","85-126","94-140","107-159"],
			["0.5-1.0","0.6-1.1","0.6-1.2","0.6-1.3","0.7-1.4","0.8-1.5","0.8-1.6","0.9-1.7","0.9-1.8","0.9-1.9","1.0-2.0","1.0-2.1"]
		]},
		{"name": "Dodge Attack",
		"popup":"$1% Chance to Dodge Attacks|+$2% Chance to Avoid Projectiles",
		"minLevel": 1,
		"stats": [
			[99],
			[99]
		]}
	]}
},


// Eye of the Storm
{"idx": 10,
"col": 3,
"tier": 6,
"maxlvl": 8,
"name": "Eye of the Storm",
"desc": "A wisp ability that increases the lightning and cold damage of all nearby allies for a duration and provides protection from lightning and cold damage.",
"img": "eyeofthestorm",
"unlocks": [],
"lockedby": "9",
"cooldown": [],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|+$4% Elemental Damage|$5% Cold Resistance|$6% Lightning Resistance",
"stats": [
	[30,32,35,37,39,42,44,46],
	[30],
	[14],
	[30,40,50,60,70,80,90,100],
	[12,15,18,21,24,27,33,0],
	[12,15,18,21,24,27,33,0]
]},

//===============================================================
// Skill Column 4
//===============================================================
// Squall
{"idx": 11,
"col": 4,
"tier": 3,
"maxlvl": 12,
"name": "Squall",
"desc": "Creates a wind storm in the target area that decreases the projectile attack accuracy of enemies caught within it.",
"img": "squall",
"unlocks": [12],
"lockedby": "",
"cooldown": [5],
"popup": "$1 Energy Cost|$2 Second Duration|$3 Meter Radius|$4% Chance of $5 Lightning Damage|$6% Chance of Impaired Aim for 1 Second",
"stats": [
	[54,57,60,64,67,70,74,77,80,84,87,90],
	[6],
	[4.0,4.8,5.6,6.3,6.9,7.5,8.0,8.5,9.0,9.4,9.8,10.0],
	[30,38,45,51,57,62,67,71,75,79,82,85],
	["3-21","7-25","11-29","14-32","18-36","22-40","25-43","29-47","33-51","36-54","40-58","44-62"],
	[50,55,60,65,70,75,80,85,90,95,100,0]
]},

// Obscured Visibility
{"idx": 12,
"col": 4,
"tier": 4,
"maxlvl": 6,
"name": "Obscured Visibility",
"desc": "Reduces visibility inside the Squall makes it difficult for enemies to effectively attack or defend themselves.",
"img": "obscuredvisibility",
"unlocks": [],
"lockedby": "11",
"cooldown": [],
"popup": "$1 Energy Cost|$2% Reduced Damage for 6 Seconds|$3% Reduced Resistance for 6 Seconds",
"stats": [
	[6,7,8,9,10,11],
	[10,14,18,22,26,30],
	[10,14,18,22,26,30]
]},

//===============================================================
// Skill Column 5
//===============================================================
// Storm Nimbus
{"idx": 13,
"col": 5,
"tier": 1,
"maxlvl": 10,
"name": "Storm Nimbus",
"desc": "When active, the player is imbued with the power of the storm, causing their attacks to strike with cold and lightning damage.",
"img": "stormnimbus",
"unlocks": [14,15],
"lockedby": "",
"cooldown": [],
"popup": "$1 Active Energy Cost per Second|+$2 Energy Reserved||Bonus to All Pets:|Chance for One of the Following:|#$3 Cold Damage|#$4 Lightning Damage||Chance for One of the Following:|#$5 Cold Damage|#$6 Lightning Damage",
"stats": [
	[1],
	[75],
	[2,4,5,8,9,11,12,14,16,17],
	["1-11","2-14","3-17","4-19","5-22","6-25","7-28","8-31","9-34","10-38"],
	[5,8,11,15,18,21,24,29,32,35],
	["1-21","3-27","5-33","7-38","9-44","11-50","13-55","15-61","17-67","19-75"]
	
]},

// Heart of Frost
{"idx": 14,
"col": 5,
"tier": 2,
"maxlvl": 8,
"name": "Heart of Frost",
"desc": "When Storm Nimbus is active, the air around the player becomes icy cold and slows any attackers within its perimeter.",
"img": "heartoffrost",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "+$1% Cold Damage|+$2% Frostburn Damage|+$3 Energy Reserved|$4% Slowed Attack Retaliation for 3 Seconds|$5% Slowed Movement Retaliation for 3 Seconds",
"stats": [
	[10,16,22,28,34,40,46,52],
	[10,16,22,28,34,40,46,52],
	[25],
	[10,15,19,24,27,31,34,38],
	[10,15,19,24,27,31,34,38]
]},

// Static Charge
{"idx": 15,
"col": 5,
"tier": 4,
"maxlvl": 12,
"name": "Static Charge",
"desc": "Electrical energy builds inside the player while Storm Nimbus is active and passes through enemy weapons that come in contact, delivering a powerful shock.",
"img": "staticfield",
"unlocks": [],
"lockedby": "13",
"cooldown": [],
"popup": "+$1% Lightning Damage|+$2% Electrical Burn Damage|+$3 Energy Reserved|15% Chance of $4 Lightning Retaliation",
"stats": [
	[10,16,22,28,34,40,46,52,58,64,70,76],
	[10,16,22,28,34,40,46,52,58,64,70,76],
	[25],
	[54,66,78,90,102,114,126,138,150,162,174,186]
]},

// Storm Surge
{"idx": 16,
"col": 4,
"tier": 5,
"maxlvl": 12,
"name": "Storm Surge",
"desc": "When activated, each enemy hit has a chance of unleashing a violent squall of storm energy.",
"img": "stormsurge",
"unlocks": [],
"lockedby": "",
"cooldown": [6],
"popup": "$1% Chance of Activating|$2 Meter Radius|$3 Cold Damage|$4 Lightning Damage|$5 Seconds of Stun|+$6 Energy Reserved",
"stats": [
	[15],
	[5],
	[25,30,36,43,49,54,60,67,73,80,88,97],
	["3-43","9-50","15-57","23-36","30-73","37-80","43-87","50-96","56-104","63-112","69-123","77-134"],
	[1.5],
	[150]
]},

//===============================================================
// Skill Column 6
//===============================================================
// Freezing Blast
{"idx": 17,
"col": 6,
"tier": 3,
"maxlvl": 8,
"name": "Freezing Blast",
"desc": "Encases enemies in ice immobilizing them but also making them more difficult to damage.",
"img": "freeze",
"unlocks": [],
"lockedby": "",
"cooldown": [8],
"popup": "$1% Damage Absorption|$2 Energy Cost|$3 Second Duration|$4 Meter Radius|$5 Frostburn Damage per Second|-$6% Physical Resist",
"stats": [
	[66],
	[63,66,69,72,75,78,81,84],
	[3.0,3.4,3.8,4.2,4.6,5.0,5.4,5.8],
	[1.8,2.2,2.6,3.0,3.4,3.8,4.2,4.6],
	[3,6,9,12,15,18,21,24],
	[100]
]},

// Energy Shield
{"idx": 18,
"col": 6,
"tier": 4,
"maxlvl": 12,
"name": "Energy Shield",
"desc": "Creates a shield of energy that will nullify all incoming damage from elemental attacks.",
"img": "energyshield",
"unlocks": [19],
"lockedby": "",
"cooldown": [60],
"popup": "$1 Energy Cost|$2 Second Duration|$3% Damage Absorption|Protects Against:$4",
"stats": [
	[60,64,68,72,76,80,84,88,92,96,100,104],
	[100],
	[10,15,20,25,30,35,40,45,50,55,60,65],
	["|#Lightning|#Cold"]
]},

// Reflection
{"idx": 19,
"col": 6,
"tier": 6,
"maxlvl": 8,
"name": "Reflection",
"desc": "Gives Energy Shield the ability to reflect a portion of enemy attack damage back at enemies who hit it.",
"img": "reflection",
"unlocks": [],
"lockedby": "18",
"cooldown": [],
"popup": "$1 Energy Cost|$2% Chance of $3% Damage Reflected",
"stats": [
	[30],
	[25,26,27,28,29,30,30,31],
	[50,66,82,98,114,130,146,162]
]},

//===============================================================
// Tier 7 Skills
//===============================================================
// Arc Discharge
{"idx": 20,
"col": 3,
"tier": 7,
"maxlvl": 8,
"name": "Arc Discharge",
"desc": "Enhances the Wisp's Thunderclap ability, generating tendrils of lightning.",
"img": "archingchaos",
"unlocks": [],
"lockedby": "9",
"cooldown": [],
"popup": "$1 Lightning Damage|$2 second(s) of Stun",
"stats": [
	["62-106","82-138","106-168","130-202","148-230","172-260","192-290","214-326"],
	[0.5]
]},

// Lightning Dash
{"idx": 21,
"col": 5,
"tier": 7,
"maxlvl": 6,
"name": "Lightning Dash",
"desc": "Move between enemies at lightning speed, becoming hard to hit in the process.",
"img": "flash",
"unlocks": [],
"lockedby": "",
"cooldown": [1],
"popup": "$1 Energy Cost|$2 Lightning Damage|+$3% Movement Speed|$4% Chance to Dodge Attacks|$5% Chance to Avoid Projectiles",
"stats": [
	[5],
	[10],
	[444],
	[10,20,29,38,46,54],
	[10,20,29,38,46,54]
]}

//===============================================================
// End of Skill Entry
//===============================================================
]};