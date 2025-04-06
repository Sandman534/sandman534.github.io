//===================================================================
// Utility Functions
//===================================================================
function HIDE(id) {
	document.getElementById(id).style.display = "none";
}

function SHOW( id) {
	if (document.getElementById(id)) {
		document.getElementById(id).style.display = "block";
	}
}

function RIGHT_CLICK(e) {
	if (e && e.button == 2) {
		return(true);
	}
	return(false);
}

function SHIFT_CLICK(e) {
	if (e && e.shiftKey) {
		return(true);
	}
	return(false);
}

function SHIFT_RIGHT_CLICK(e) {
	if (e && e.shiftKey && e.button == 2) {
		return(true);
	}
	return(false)
}

//===================================================================
// Variable Initialize
//===================================================================
var UINT = -1;
var EOL = "<br>";

//===================================================================
// Icon Variables
//===================================================================
var ICON_SIZE = 32;
var DEF_ICON = "images/skill/mastery/icon.png";
var INVISIBLE = "images/icons/invisible.png"

//===================================================================
// Point Variable
//===================================================================
// Points Used
var PTS_SPENT = Array();
PTS_SPENT[0] = 0;
PTS_SPENT[1] = 0;

// Points Left
var PTS_LEFT  = 282
var PTS_EXTRA  = 30
//===================================================================
// Character Stats and Functions
//===================================================================
// Max level
var MAX_LEVEL = 40;

// Character stats
var STR = 50;
var INT = 50;
var DEX = 50;
var HP = 300;
var MP = 300;

// Get a stat
function GetStat(tab, level) {
	if(tab.length <= 1 || level == 0) {
		return(0);
	}
	var x = level - 1;
	if(x >= tab.length) {
		x = tab.length - 1;
	}
	return(tab[x]);
}

// Set a stat value
function ViewStat(id, value) {
	document.getElementById(id).innerHTML = '' + value + '';
}

//===================================================================
// Selection Panel Column Location
//===================================================================
var c1 = 115;
var c2 = 243;
var c3 = 471;
var c4 = 700;
var c5 = 828;

//===================================================================
// Selection Panel Rows Locations
//===================================================================
var r1 = 78;
var r2 = 170;
var r3 = 244;
var r4 = 316;
var r5 = 408;
var r6 = 460;

//===================================================================
// Mastery Panel Tier Locations
//===================================================================
var t1 = 410;
var t2 = 348;
var t3 = 286;
var t4 = 224;
var t5 = 162;
var t6 = 100;
var t7 = 38;

//===================================================================
//	Mastery Panel Column Location
//===================================================================
var s0 = 35;
var s1 = 100 + s0;
var s2 = 100 + s1;
var s3 = 100 + s2;
var s4 = 100 + s3;
var s5 = 100 + s4;
var s6 = 100 + s5;

//===================================================================
// Set Up Position Arrays
//===================================================================
var tpos = Array();
tpos[0] = 0;
tpos[1] = t1;
tpos[2] = t2;
tpos[3] = t3;
tpos[4] = t4;
tpos[5] = t5;
tpos[6] = t6;
tpos[7] = t7;

var spos = Array();
spos[0] = 0;
spos[1] = s1;
spos[2] = s2;
spos[3] = s3;
spos[4] = s4;
spos[5] = s5;
spos[6] = s6;

//===================================================================
// Y Offsets for Level Bar
//===================================================================
var lvltab = [0,62,82,102,124, 134,144,154,164,174,186,196,206,216,226,236,248,255,262,270,277,284,293,302,310,317,325,332,340,347,355,362,372,379,387,394,402,409,417,424,434]

//===================================================================
// Tier Level Boundries
//===================================================================
var	TIER_LEVEL = [1, 4, 10, 16, 24, 32, 40];
var	TIER = new Array();

function InitTier() {
	var t = 0;
	for(var i = 0; i <= MAX_LEVEL; ++i) {
		if(i == TIER_LEVEL[t]) {
			++t;
		}
		TIER[i] = t;
	}
}

//===================================================================
// Mastery Setup
//===================================================================
var STORM = 0;
var EARTH = 1;
var WARFARE = 2;
var SPIRIT = 3;
var ROGUE = 4;
var DREAM = 5;
var HUNTING = 6;
var NATURE = 7;
var DEFENSE = 8;
var RUNE = 9;
var NEIDAN = 10;

var seldata = [
	{"key": "storm", "name": "Storm", "x": c2, "y": r1, "idx": STORM},
	{"key": "earth", "name": "Earth", "x": c1, "y": r2, "idx": EARTH},
	{"key": "warfare", "name": "Warfare", "x": c1, "y": r4, "idx": WARFARE},
	{"key": "spirit", "name": "Spirit", "x": c2, "y": r5, "idx": SPIRIT},
	{"key": "rogue", "name": "Rogue", "x": c4, "y": r5, "idx": ROGUE},
	{"key": "dream", "name": "Dream", "x": c2, "y": r3, "idx": DREAM},
	{"key": "hunting", "name": "Hunting", "x": c5, "y": r4, "idx": HUNTING},
	{"key": "nature", "name": "Nature", "x": c5, "y": r2, "idx": NATURE},
	{"key": "defense", "name": "Defense", "x": c4, "y": r1, "idx": DEFENSE},
	{"key": "rune", "name": "Rune", "x": c4, "y": r3, "idx": RUNE},
	{"key": "neidan", "name": "Neidan", "x": c3, "y": r6, "idx": NEIDAN}
];

//===================================================================
// Skill Panel Mastery Setup
//===================================================================
Masteries = new Array();

Masteries[STORM] = storm;
Masteries[EARTH] = earth;
Masteries[WARFARE] = warfare;
Masteries[SPIRIT] = spirit;
Masteries[ROGUE] = rogue;
Masteries[DREAM] = dream;
Masteries[HUNTING] = hunting;
Masteries[NATURE] = nature;
Masteries[DEFENSE] = defense;
Masteries[RUNE] = rune;
Masteries[NEIDAN] = neidan;

//===================================================================
// Calculate Character Stats
//===================================================================
// Generate the table that will be used for stat display
function stringStatTable(clvl, hp, mp, str, dex, int, pt_sp) {
	var stringStat = "<table class=\"statTable\" cellspacing=\"2\" style=\"width: 170px;\">";
	stringStat += "<tr><td width=\"75%\">Level:</td><td width=\"25%\">" + clvl + "</td><td></td></tr>";
	stringStat += "<tr><td>Health:</td><td>" + hp + "</td><td></td></tr>";
	stringStat += "<tr><td>Energy:</td><td>" + mp + "</td><td></td></tr>";
	stringStat += "<tr><td>Strength:</td><td>" + str + "</td></tr>";
	stringStat += "<tr><td>Dexterity:</td><td>" + dex + "</td></tr>";
	stringStat += "<tr><td>Intelligence:</td><td>" + int + "</td></tr>";
	stringStat += "<tr><td colspan=\"2\">" + pt_sp + " Points Spent in Mastery</td></tr>";
	stringStat += "</table>"

	return(stringStat);
}

function CALC_CHAR() {
	var str = STR;
	var int = INT;
	var	dex = DEX;
	var hp = HP;
	var mp = MP;
	var clvl = 1;

	// Calculate stats
	for(var i = 0; i < 2; ++i) {
		var idx = mastery[i].idx;
		var lvl = mastery[i].level;
		clvl += lvl;

		// need to iterate through all skills and get more lvl points
		for(var j = 0; j < mastery[i].skills.length; ++j) {
			clvl += mastery[i].skills[j];
		}

		// Get the stats
		str += GetStat(Masteries[idx].str, lvl);
		int += GetStat(Masteries[idx].int, lvl);
		dex += GetStat(Masteries[idx].dex, lvl);
		hp += GetStat(Masteries[idx].hp, lvl);
		mp += GetStat(Masteries[idx].mp, lvl);
	}
	
	// Our level can't go over 85
	if (Math.ceil(clvl / 3) > 85)
		clvl = 85;
	else
		clvl = Math.ceil(clvl / 3);
	
	// Update the total number of available points
	document.getElementById('lbl_TotalPoints0').innerHTML = PTS_LEFT + " Unused Skill Points";
	document.getElementById('lbl_TotalPoints1').innerHTML = PTS_LEFT + " Unused Skill Points";

	// If we have more points than we should for our level, these are extra. Color them blue
	if (PTS_LEFT <= PTS_EXTRA) {
		document.getElementById('lbl_TotalPoints0').className = "abs z4 blue pointLabel";
		document.getElementById('lbl_TotalPoints1').className = "abs z4 blue pointLabel";
	} else {
		document.getElementById('lbl_TotalPoints0').className = "abs z4 pointLabel";
		document.getElementById('lbl_TotalPoints1').className = "abs z4 pointLabel";		
	}

	// Update the Stat Display
	document.getElementById('lbl_Stats0').innerHTML = stringStatTable(clvl, hp, mp, str, dex, int, PTS_SPENT[0]);
	document.getElementById('lbl_Stats1').innerHTML = stringStatTable(clvl, hp, mp, str, dex, int, PTS_SPENT[1]);
}

//===================================================================
// String Functions
//===================================================================
// Setup as SPAN html attribute
function Span(s, css) {
	return('<span class="' + css + '">' + s + '</span>');
}

// Format a string with color
function ColorString(s) {
	var tempString = s;
	var rv = s;
	
	// Yellow
	var tagAt = s.indexOf("^y");
	while  (tagAt >= 0) {
		rv = tempString.substring(0, tagAt);
		rv += Span(tempString.substring(tagAt + 2), 'yellow');
		tempString = rv;
		tagAt = tempString.indexOf("^y");
	}
	
	// Turquoise Color
	var tagAt = s.indexOf("^t");
	while  (tagAt >= 0) {
		rv = tempString.substring(0, tagAt);
		rv += Span(tempString.substring(tagAt + 2), 'turquoise');
		tempString = rv;
		tagAt = tempString.indexOf("^t");
	}
	
	// Blue Color
	tagAt = rv.indexOf("^b");
	while  (tagAt >= 0) {
		rv = tempString.substring(0, tagAt);
		rv += Span(tempString.substring(tagAt + 2), 'blue');
		tempString = rv;
		tagAt = tempString.indexOf("^b");
	}
	
	// Orange Color
	tagAt = rv.indexOf("^o");
	while  (tagAt >= 0) {
		rv = tempString.substring(0, tagAt);
		rv += Span(tempString.substring(tagAt + 2), 'orange');
		tempString = rv;
		tagAt = tempString.indexOf("^o");
	}
	
	// White Color
	tagAt = rv.indexOf("^w");
	while  (tagAt >= 0) {
		rv = tempString.substring(0, tagAt);
		rv += Span(tempString.substring(tagAt + 2), 'white');
		tempString = rv;
		tagAt = tempString.indexOf("^w");
	}
	
	// Return the colored string
	return(rv);
}

//===================================================================
// Attribute String
//===================================================================
function AttributeString(plusminus, name, tab, level, current) {
	var rv = "";
	
	// Current and Next level popups
	if(current) {
		var x = level - 1;
		if(x >= tab.length) {
			x = tab.length - 1;
		}
		
		if(tab.length <= 1 || level == 0 || tab[x] == "0") {
			return(rv);
		}
		
		rv = plusminus + tab[x] + name + "<br>";
		return(rv);
	} else {
		var x = level - 1;
		if(x >= tab.length) {
			x = tab.length - 1;
		}
		
		if(tab.length < level || tab[x] == "0") {
			return(rv);
		}
		
		rv = plusminus + tab[x] + name + "<br>";
		return(rv);
	}
}

//===================================================================
// Index to Name Functions
//===================================================================
function GetIdx(name) {
	var rv = -1;

	for(var i = 0; i < seldata.length; ++i) {
		if(seldata[i].key == name) {
			rv = seldata[i].idx;
			break;
		}
	}
	return(rv);
}

function IdxToName(idx) {
	for(var i = 0; i < seldata.length; ++i) {
		if(seldata[i].idx == idx) {
			return(seldata[i].name);
		}
	}
	return(null);
}

function SelKeyToName(key) {
	if(key == null) {
		return(null);
	}
	for(var i = 0; i < seldata.length; ++i) {
		if(seldata[i].key == key) {
			return(seldata[i].name);
		}
	}
	return(null);
}

function SelKeyToIdx(key) {
	if(key == null) {
		return(UINT);
	}
	for(var i = 0; i < seldata.length; ++i) {
		if(seldata[i].key == key) {
			return(seldata[i].idx);
		}
	}
	return(UINT);
}

//===================================================================
// Functions for Mastery Panel Selection
//===================================================================
function Mastery(pos) {
	this.pos = pos;
	this.key = null;
	this.name = null;
	this.idx = UINT;
	this.level = 0;
	this.tier = 0;
	this.skills = null;
}

// Assign the Mastery
Mastery.prototype.assign = function(key) {
	this.key = key;
	this.name = SelKeyToName(key);
	this.idx = SelKeyToIdx(key);
}

// Submit masteries once a second one is chosen
Mastery.prototype.commit = function() {
	this.level = 0;
	this.skills = new Array();
	for(var i = 0; i < Masteries[this.idx].skills.length; ++i) {
		this.skills[i] = 0;
	}
}

// Unset the Master View
Mastery.prototype.unsetView = function() {
	document.getElementById('m' + this.pos + 'bar').style.backgroundImage = "";
}

// Set up Mastery View
Mastery.prototype.setView = function() {
	document.getElementById('m' + this.pos).style.backgroundImage = "url(images/skill/panel/" + this.key + ".png)";
	document.getElementById('m' + this.pos + 'bar').style.backgroundImage = "url(images/skill/bar/" + this.key + ".jpg)";
}

//===================================================================
// Skill Functionality
//===================================================================
// Get the skill ID
Mastery.prototype.getSID = function(sidx) {
	var rv = 'm' + this.idx + 't' + Masteries[this.idx].skills[sidx].tier + 'c' + Masteries[this.idx].skills[sidx].col;
	return(rv);
}

// Unlock Skill
Mastery.prototype.unlockSkill = function(i) {
	var sid = this.getSID(i);
	ico = "url(images/icons/skills/" + this.key + "/" + Masteries[this.idx].skills[i].img + ".png)";
	document.getElementById(sid).style.backgroundImage = ico;
}

// Lock Skill
Mastery.prototype.lockSkill = function(i) {
	var sid = this.getSID(i);
	document.getElementById(sid).style.backgroundImage = "url(" + INVISIBLE + ")";
}

// Is the skill locked
Mastery.prototype.isLockedSkill = function(i) {
	if(document.getElementById(this.getSID(i)).style.backgroundImage.indexOf(INVISIBLE) > 0) {
		return(true);
	}
	return(false);
}

//===================================================================
// Mastery Initialization
//===================================================================
// De-Select Master
Mastery.prototype.deInit = function() {
	// Remove Skill Icons and Labels
	for(var i = 0; i < Masteries[this.idx].skills.length; ++i) {
		var skillIcon = document.getElementById(this.getSID(i));
		skillIcon.parentNode.removeChild(skillIcon);

		var skillLabel = document.getElementById('lbl_' + this.getSID(i));
		skillLabel.parentNode.removeChild(skillLabel);
	}
	
	// Remove the unused points label
	var skillPoints = document.getElementById('lbl_TotalPoints' + this.pos);
	skillPoints.parentNode.removeChild(skillPoints);

	// Remove the stat display
	var statPoints = document.getElementById('lbl_Stats' + this.pos);
	statPoints.parentNode.removeChild(statPoints);

	// Remove the stat display
	var sInstructions = document.getElementById('lbl_Instructions' + this.pos);
	sInstructions.parentNode.removeChild(sInstructions);
	
	// Remove level set tiers on Mastery Bar
	for(var i = 0; i < 7; ++i) {
		var sMasteryBar = document.getElementById('m' + this.pos + 'MasteryLabel' + i);
		sMasteryBar.parentNode.removeChild(sMasteryBar);
	}

	// Hide the skill panel
	var pid = 'm' + this.pos + 'w';
	HIDE(pid);
}

// Create Skill Panels from Master Selections
Mastery.prototype.initPanel = function() {
	var pid = 'm' + this.pos + 'w';
	var	panel = document.getElementById('m' + this.pos + 'w');
	
	// Draw each skill
	for (var i = 0; i < Masteries[this.idx].skills.length; ++i) {
		// Display the skill icon
		var skillIcon = document.createElement('div');
		skillIcon.id = this.getSID(i);
		skillIcon.style.backgroundImage = "url(" + INVISIBLE + ")";
		skillIcon.style.top = "" + tpos[Masteries[this.idx].skills[i].tier] + "px";
		skillIcon.style.left = "" + spos[Masteries[this.idx].skills[i].col] + "px";
		skillIcon.style.width = "" + ICON_SIZE + "px";
		skillIcon.style.height = "" + ICON_SIZE + "px";
		skillIcon.className = "abs z4";
		skillIcon.setAttribute("onmouseover", "SkillIconPopup(" + this.pos + ", " + i + ", event);");
		skillIcon.setAttribute("onmouseout", "SkillIconHidePop(" + this.pos + ", " + i + ", event);");
		skillIcon.setAttribute("onmousedown", "SkillPointClickHandler(" + this.pos + ", " + i + ", event);");
		skillIcon.setAttribute("onmouseup", "SkillPointMouseHandler(" + this.pos + ", " + i + ", event);");
		panel.appendChild(skillIcon);

		// Display the skill label
		var skillLabel = document.createElement('div');
		skillLabel.id = 'lbl_' + this.getSID(i);
		skillLabel.className = "abs z4 skillLabel";
		skillLabel.style.top = "" + (tpos[Masteries[this.idx].skills[i].tier] + 35) + "px";
		skillLabel.style.left = "" + (spos[Masteries[this.idx].skills[i].col]) - 5 + "px";
		skillLabel.innerHTML = "0 / " + Masteries[this.idx].skills[i].maxlvl;
		panel.appendChild(skillLabel);
	}
	
	// This will set up the master set level functions
	for (var i = 0; i < 7; ++i) {
		var masteryTier = document.createElement('div');
		masteryTier.id = 'm' + this.pos + 'MasteryLabel' + i;
		masteryTier.style.top = "" + (463 - lvltab[TIER_LEVEL[i]]) + "px";
		if (i == 0)
			masteryTier.style.height = "" + lvltab[TIER_LEVEL[i]] + "px";
		else
			masteryTier.style.height = "" + (lvltab[TIER_LEVEL[i]] - lvltab[TIER_LEVEL[i - 1]]) + "px";
		masteryTier.style.left = "50px";
		masteryTier.style.width = "28px";
		masteryTier.className = "abs z3";
		masteryTier.setAttribute("onmousedown", "MasteryBarClickHandler(" + this.pos + ", " + TIER_LEVEL[i] + ", event);");
		panel.appendChild(masteryTier);
	}


	// Show Mastery Level
	document.getElementById("m" + this.pos + "pcnt").innerHTML = "" + this.level + " / " + MAX_LEVEL;

	// Draw the Unused Points label
	var sPointLabel = document.createElement('div');
	sPointLabel.id = "lbl_TotalPoints" + this.pos;
	sPointLabel.className = "abs z3 pointLabel";
	sPointLabel.style.top = "493px";
	sPointLabel.style.left = "405px";
	sPointLabel.innerHTML = PTS_LEFT + " Unused Skill Points";
	panel.appendChild(sPointLabel);

	// Draw stats
	var sStatPoints = document.createElement('div');
	sStatPoints.id = "lbl_Stats" + this.pos;
	sStatPoints.className = "abs z3 noSelect";
	sStatPoints.style.top = "235";//"260";
	sStatPoints.style.left = "724";
	sStatPoints.style.fontSize = "10px";
	sStatPoints.innerHTML = stringStatTable("1", HP, MP, STR, DEX, INT, PTS_SPENT[this.pos]);
	panel.appendChild(sStatPoints);

	// Draw Instructions
	var sInstructions = document.createElement('div');
	sInstructions.id = "lbl_Instructions" + this.pos;
	sInstructions.className = "abs z3 noSelect";
	sInstructions.style.top = "385px";
	sInstructions.style.left = "730px";
	sInstructions.style.fontSize = "12px";
	sInstructions.style.fontStyle = "italic";
	sInstructions.innerHTML = "Right Click - Remove Point<br>Left Click - Add Point<br>Shift+Right Click - Remove All<br>Shift+Left Click - Add Max";
	panel.appendChild(sInstructions);

	// Show the panel
	SHOW(pid);
}

//===================================================================
// Popup Function
//===================================================================
function POPUP(s, e) {
	var pop = document.getElementById('pop');

	if(e != 'undefined' && e != null) {
		var topPos, leftPos;
		
		// Get the events
		var sButton = document.getElementById('' + e.target.id);
		var sButtonParent = sButton.parentNode

		// Set the popup based on the Skill/Mastery location
		leftPos = sButtonParent.offsetLeft + sButton.offsetLeft + 60;
		topPos = sButtonParent.offsetTop + sButton.offsetTop;
		var sButtonLocation = sButton.getBoundingClientRect();

		// Set Popup attributes
		pop.style.top = "" + topPos + "px";
		pop.style.left = "" + leftPos + "px";
		pop.style.width = "300px";
		pop.innerHTML = s;
		
		// Hide the popup to re-adjust height
		pop.style.visibility = "hidden";

		// Left Side Adjustment
		var totPopWidth = leftPos + pop.offsetWidth
		if (totPopWidth > window.innerWidth) {
			leftPos -= 385;
			pop.style.left = "" + leftPos + "px";
		}

		// Top Side Adjustment
		var totPopHeight = sButtonLocation.top + pop.offsetHeight
		if (totPopHeight > window.innerHeight) {
			topPos -= totPopHeight - window.innerHeight + 30;
			pop.style.top = "" + topPos + "px";
		}

		// Show the popup again
		pop.style.visibility = "";
	}

}

function HidePop() {
	document.getElementById('pop').style.visibility = "hidden";
}

//===================================================================
// Update Level Stats
//===================================================================
Mastery.prototype.updateLevelView = function(e) {
	var popon = false;

	if(document.getElementById('pop').style.visibility == "") {
		popon = true;
		HidePop();
	}

	// If our level gets above 32
	if (this.level > MAX_LEVEL) {
		var h = lvltab[lvltab.length - 1];
	} else {
		var h = lvltab[this.level];
	}

	// Get the mastery bar and set its new values
	var mMasteryBar = document.getElementById('m' + this.pos + 'bar');
	mMasteryBar.style.height = "" + h + "px";
	mMasteryBar.style.top = "" + (27 + (436 - h)) + "px";
	document.getElementById("m" + this.pos + "pcnt").innerHTML = "" + this.level + " / " + MAX_LEVEL;

	if(popon) {
		this.pointPopup(e);
	}

	CALC_CHAR();
}

//===================================================================
// Mastery Point Increase/Decrease
//===================================================================
// Unlock Tier
Mastery.prototype.incrTier = function() {

	for(var i = 0; i < Masteries[this.idx].skills.length; ++i) {
		if(this.tier >= Masteries[this.idx].skills[i].tier) {
			this.unlockSkill(i);
		}
	}
}

// Relock Tier
Mastery.prototype.decrTier = function() {
	for(var i = 0; i < Masteries[this.idx].skills.length; ++i) {
		if(this.tier < Masteries[this.idx].skills[i].tier) {
			this.lockSkill(i);
			PTS_LEFT += this.skills[i];
			PTS_SPENT[this.pos] -= this.skills[i];
			this.skills[i] = 0;
			this.updateSkillLevelView(i, null, false);
		}
	}
}

// Increase Level
Mastery.prototype.incrLevel = function(e) {
	// If we have no points available we do nothing
	if (PTS_LEFT <= 0)
		return;
	
	if(this.level < MAX_LEVEL) {
		var oldTier = this.tier;
		PTS_LEFT -= 1;
		PTS_SPENT[this.pos] += 1;
		this.level += 1;
		this.tier = TIER[this.level];
		if(this.tier != oldTier) {
			this.incrTier();
		}
	}
	this.updateLevelView(e)
}

// Decrease Level
Mastery.prototype.decrLevel = function(e) {

	if(this.level > 0) {
		var oldTier = this.tier;
		PTS_LEFT += 1;
		PTS_SPENT[this.pos] -= 1;
		this.level -= 1;
		this.tier = TIER[this.level];
		if(this.tier != oldTier) {
			this.decrTier();
		}
	}

	this.updateLevelView(e);
}

// Max Mastery
Mastery.prototype.maxLevel = function(e) {
	var lvlIncrease = 0
	
	// If we do not have enough points, add only how much we have
	if (PTS_LEFT <= 0) {
		return;
	} else if ((MAX_LEVEL - this.level) > PTS_LEFT) {
		lvlIncrease = PTS_LEFT;
		PTS_SPENT[this.pos] += PTS_LEFT;
		PTS_LEFT = 0;
	} else {
		lvlIncrease = MAX_LEVEL
		PTS_SPENT[this.pos] += MAX_LEVEL - this.level;
		PTS_LEFT -= MAX_LEVEL - this.level;

	}
	
	// Finish processing the level increase
	this.level = lvlIncrease;
	this.tier = TIER[this.level];
	this.incrTier();
	this.updateLevelView(e);
}

// Zero Out Mastery
Mastery.prototype.zeroLevel = function(e) {
	PTS_LEFT += this.level;
	PTS_SPENT[this.pos] -= this.level;
	this.level = 0;
	this.tier = TIER[this.level];
	this.decrTier();
	this.updateLevelView(e);
}

// Set Mastery Level
Mastery.prototype.setLevel = function(i, e) {
	
	// If our level matches, lets just go back
	if (i == this.level)
		return

	// This is a decrease in mastery
	else if (i < this.level) {
		PTS_LEFT += this.level - i;
		PTS_SPENT[this.pos] -= this.level - i;
		this.level = i;
		this.tier = TIER[i];
		this.decrTier();
	}

	// Increase in level
	else if (i > this.level) {
		var lvlIncrease = 0

		if (PTS_LEFT <= 0) {
			return;
		} else if ((i - this.level) > PTS_LEFT) {
			lvlIncrease = PTS_LEFT;
			PTS_SPENT[this.pos] += PTS_LEFT;
			PTS_LEFT = 0;
		} else {
			lvlIncrease = i
			PTS_SPENT[this.pos] += i - this.level;
			PTS_LEFT -= i - this.level;

		}
		
		// Finish processing the level increase
		this.level = lvlIncrease;
		this.tier = TIER[lvlIncrease];
		this.incrTier();
	}
	
	// Finish processing the level increase
	this.updateLevelView(e);
}

//===================================================================
// Update Skill Level
//===================================================================
Mastery.prototype.updateSkillLevelView = function(i, e, skillAdjust) {
	var bPopupOn = false;

	// Hide the popup for updating
	if(skillAdjust && document.getElementById('pop').style.visibility == "") {
		bPopupOn = true;
		HidePop();
	}

	// Set the current skill level
	document.getElementById('lbl_' + this.getSID(i)).innerHTML = "" + this.skills[i] + " / " + Masteries[this.idx].skills[i].maxlvl;
	
	// If the tier was unlocked we show the skill, otherwise we hide it
	if(this.tier >= Masteries[this.idx].skills[i].tier) {
		this.unlockSkill(i);
	} else {
		this.lockSkill(i);
	}

	// Show the popup if we need to
	if(bPopupOn && skillAdjust) {
		this.skillPopup(i, e);
	}

	// Adjust the character stats
	CALC_CHAR();
}

//===================================================================
// Skill Lock/Unlock Functions
//===================================================================
// Is the skill unlocked by another skill
Mastery.prototype.unlockCheck = function(i) {
	var d = Masteries[this.idx].skills[i].lockedby;
	var skillLocked = UINT;
	
	// If the skill that would unlock this has points
	if(this.skills[d] == 0) {
		skillLocked = 0;
	}
	return(skillLocked);
}

// Check to see if this skill locks others skills
Mastery.prototype.lockCheck = function(i) {
	var d = Masteries[this.idx].skills[i].unlocks;
	var skillLocked = UINT;
	
	// Check to see if the spell reliant on this has points
	for (var n = d.length - 1; n >= 0; --n) {
		if(this.skills[d[n]] > 0) {
			skillLocked = 0;
			break;
		}
	}
	return(skillLocked);
}

// Get the name of the unlock skill
Mastery.prototype.unlockName = function(i) {
	var d = Masteries[this.idx].skills[i].lockedby;	
	var skillLocked = "-1_";
	
	// If the skill that would unlock this has points
	if (d != "")
		skillLocked = this.skills[d] + "_" + Masteries[this.idx].skills[d].name;
	
	return(skillLocked);
}

//===================================================================
// Skill Increase/Decrease
//===================================================================
// Increase Skill
Mastery.prototype.incrSkill = function(i, e) {
	// Is the skill locked behind a tier
	if(this.isLockedSkill(i))
		return;
	
	// Does the skill require another skill
	if(this.unlockCheck(i) != UINT)
		return;
	
	// Is the skill already maxed out
	if(this.skills[i] >= Masteries[this.idx].skills[i].maxlvl)
		return;
	
	// If we have no points
	if (PTS_LEFT <= 0)
		return;
	
	// Finish processing
	PTS_LEFT -= 1;
	PTS_SPENT[this.pos] += 1;
	this.skills[i] += 1;
	this.updateSkillLevelView(i, e, true);
}

// Max Skill
Mastery.prototype.maxSkill = function(i, e) {
	// Is the skill locked behind a tier
	if(this.isLockedSkill(i))
		return;
	
	// Does the skill require another skill
	if(this.unlockCheck(i) != UINT)
		return;
	
	// If we do not have enough points, add only how much we have
	if (PTS_LEFT <= 0) {
		return;
	} else if ((Masteries[this.idx].skills[i].maxlvl - this.skills[i]) > PTS_LEFT) {
		lvlIncrease = PTS_LEFT;
		PTS_SPENT[this.pos] += PTS_LEFT;
		PTS_LEFT = 0;
	} else {
		lvlIncrease = Masteries[this.idx].skills[i].maxlvl
		PTS_SPENT[this.pos] += Masteries[this.idx].skills[i].maxlvl - this.skills[i];
		PTS_LEFT -= Masteries[this.idx].skills[i].maxlvl - this.skills[i];
	}
	
	// Finish processing
	this.skills[i] = lvlIncrease;
	this.updateSkillLevelView(i, e, true);
}

// Decrease Skill
Mastery.prototype.decrSkill = function(i, e) {
	if(this.skills[i] == 0)
		return;
	
	// Is another skill that relies on this one activated
	if(this.lockCheck(i) != UINT && this.skills[i] == 1)
		return;
	
	PTS_LEFT += 1;
	PTS_SPENT[this.pos] -= 1;
	this.skills[i] -= 1;
	this.updateSkillLevelView(i, e, true);
}

// Zero Out Skill
Mastery.prototype.zeroSkill = function(i, e) {
	
	// Is another skill that relies on this one activated
	if(this.lockCheck(i) != UINT && this.skills[i] > 0) {
		PTS_LEFT += (this.skills[i] - 1)
		PTS_SPENT[this.pos] -= (this.skills[i] - 1);
		this.skills[i] = 1
	} else {
		PTS_LEFT += this.skills[i]
		PTS_SPENT[this.pos] -= this.skills[i];
		this.skills[i] = 0;		
	}
	
	this.updateSkillLevelView(i, e, true);
}

//===================================================================
// Mastery Point Popup
//===================================================================
Mastery.prototype.pointStats = function(lvl, current) {
	var rv = "";
	var css1, css2;
	var	lbl;

	if(current) {
		lbl = 'Current';
		css1 = 'currentLevel';
		css2 = 'currentStat';
	} else {
		lbl = 'Next';
		css1 = 'nextLevel';
		css2 = 'nextStat';
	}
	
	rv += Span(lbl + " Level: " + lvl, css1) + EOL;
	rv += Span(AttributeString("+" ," Strength", Masteries[this.idx].str, lvl, current), css2);
	rv += Span(AttributeString("+" ," Intelligence", Masteries[this.idx].int, lvl, current), css2);
	rv += Span(AttributeString("+" ," Dexterity", Masteries[this.idx].dex, lvl, current), css2);
	rv += Span(AttributeString("+" ," Health", Masteries[this.idx].hp, lvl, current), css2);
	rv += Span(AttributeString("+" ," Energy", Masteries[this.idx].mp, lvl, current), css2);
	return(rv);
}

Mastery.prototype.pointPopup = function(e) {
	var s = Span(Masteries[this.idx].name, 'title') + EOL;
	s += Span(Masteries[this.idx].desc, 'desc') + EOL;
	s += EOL;

	if(this.level > 0) {
		s += this.pointStats(this.level, true);
	}
	if(this.level + 1 <= MAX_LEVEL) {
		s += EOL + this.pointStats(this.level + 1, false);
	}
	POPUP(s, e);
}

//===================================================================
// String Functions
//===================================================================
// Remove parts from the string
function removeString(text, startChars, endChars)  {
	var initIndex = text.indexOf(startChars);
	var FirstBracket = text.indexOf(endChars, initIndex);
	var startIndex;
	
	// While we still have a string
	while (initIndex >= 0) {
		
		// If we are dealing with a bracket removal we do some extra work
		if (endChars == "|") {
			for (var i = initIndex; i >= 0; --i)
			{
				
				// if we find the bracket, we look for the next character to begin removal
				if (text.substring(i, i + 1) == "|") {
					startIndex = i + 1;
					break;
				}
				
				// If we do not find it, we take the beginning
				if (i == 0)
					startIndex = 0;
			}
		} else
			startIndex = initIndex;
			
		// Get the beginning and end section of the text to save
		var start = text.substring(0, startIndex);
		var end = text.substring(FirstBracket + endChars.length, text.length);
		
		// If we can't find an end, take the end of the string
		if (FirstBracket >= 0)
			text = start + end;
		else
			text = text.substring(0, startIndex - endChars.length);
		
		// Reset the index for the next loop
		initIndex = text.indexOf(startChars);
		FirstBracket = text.indexOf(endChars, initIndex);
	}
	
	return(text);
}

function hasDecimals(arr) {
  return arr.some(num => typeof num === 'number' && num % 1 !== 0);
}

//===================================================================
// Skill Popup
//===================================================================
// Get the skill text
function GetSkillText(lvl, x, skillid, css, current) {
	var statPopup = "";
	var petAttribute= "";
	var petSkills = "";
	var statCooldown = "";
	var val;
	
	// If there is no popup associated to the skill we return
	if (Masteries[x].skills[skillid].popup == null)
		return(statPopup);
	
	// Get the Cooldown Value
	var arrayCooldown = Masteries[x].skills[skillid].cooldown;
	if (arrayCooldown.length == 1)
		statCooldown += arrayCooldown[0];
	else if (arrayCooldown.length > 1)
		statCooldown += arrayCooldown[(lvl - 1)];

	// Set the popup description
	statPopup += Masteries[x].skills[skillid].popup;

	// Stat display
	for (var i = Masteries[x].skills[skillid].stats.length - 1; i >= 0; --i) {
		val = 0;
		dec = hasDecimals(Masteries[x].skills[skillid].stats[i]);
		
		// One value, and we are showing the current or very first level
		if (Masteries[x].skills[skillid].stats[i].length == 1) {
			if (current || (!current && lvl == 1))
				val = Masteries[x].skills[skillid].stats[i][0];

		// If there are multiple values in the skill string
		} else if (Masteries[x].skills[skillid].stats[i].length > 1) {
			val = Masteries[x].skills[skillid].stats[i][lvl - 1];
			
			// For a value of 0 we go back and grab the non-zero value for Current display
			if (val === 0 && current) {
				for (var n = lvl - 1; n >= 0; --n) {
					if (Masteries[x].skills[skillid].stats[i][n] != 0) {
						val = Masteries[x].skills[skillid].stats[i][n];
						break;
					}
				}
			}
		}
		
		// If the value does equal 0, we are going to remove the string associated with it
		if (val === 0) {
			statPopup = removeString(statPopup, "$" + (i + 1), "|")
		} else if (dec) {
			statPopup = statPopup.replace('$' + (i + 1), parseFloat(val).toFixed(1));
		} else {
			statPopup = statPopup.replace('$' + (i + 1), val);
		}
	}
	
	// Add the skill text for a pet if one exists
	if (Masteries[x].skills[skillid].pet != null) {
		var mPet = Masteries[x].skills[skillid].pet;
		// Pet Attributes
		petAttribute += mPet.popup;
		
		for (var p = 0; p < mPet.stats.length; ++p) {
			val = 0;
		
			// If there is only one value, we will display that value
			if (mPet.stats[p].length == 1) {
				if (current || (!current && lvl == 1))
					val = mPet.stats[p][0];
			} else if (mPet.stats[p].length > 1) {
				val = mPet.stats[p][lvl - 1];
				
				// For a value of 0 we go back and grab the non-zero value for Current display
				if (val == 0 && current) {
					for (var n = lvl - 1; n >= 0; --n) {
						if (mPet.stats[p][n] != 0) {
							val = mPet.stats[p][n];
							break;
						}
					}
				}
			}

			// If the value does equal 0, we are going to remove the string associated with it
			if (val != 0 && val != "0") {
				petAttribute = petAttribute.replace('$' + (p + 1), val);
			} else {
				petAttribute = removeString(petAttribute, "$" + (p + 1), "|");
			}
		}

		// Setup the spacing
		var sNextLevelSpace = "||"
		if (statPopup == "" && !current)
			sNextLevelSpace = "|"

		// If we have pet attributes, add the header
		if (petAttribute != "")
			petAttribute = sNextLevelSpace + mPet.name + " Attributes:|#" + petAttribute.replace(/\|/g,"|#");

		// Pet Skills
		var mPetSkills = mPet.skills
		for (var a = 0; a < mPetSkills.length; ++a) {
			var petMinLevel = mPetSkills[a].minLevel;
			
			// The minimum level must be met for the skill to populate
			if (lvl >= petMinLevel) {
				var petCurrentSkill = mPetSkills[a].popup;
				var petSkillName = mPetSkills[a].name;
				// For each skill in the pet array
				for (var b = 0; b < mPetSkills[a].stats.length; b++) {
					val = 0;
					
					// If there is only one value, thats all we show
					if (mPetSkills[a].stats[b].length == 1) {
						if (current || (!current && lvl == petMinLevel))
							val = mPetSkills[a].stats[b][0];
					} else if (mPetSkills[a].stats[b].length > 1)
						val = mPetSkills[a].stats[b][(lvl - petMinLevel)];

					// For a value of 0 we go back and grab the non-zero value for Current display
					if (val == 0 && current) {
						for (var n = lvl - petMinLevel; n >= 0; --n) {
							if (mPetSkills[a].stats[b][n] != 0) {
								val = mPetSkills[a].stats[b][n];
								break;
							}
						}
					}

					// Replace the numbers with the correct value, or remove it if we have 0's
					if (val != 0 && val != "0") {
						petCurrentSkill = petCurrentSkill.replace('$' + (b + 1), val);
					} else {
						petCurrentSkill = removeString(petCurrentSkill, "$" + (b + 1), "|");
					}
				}

				// If we have a valid skill name we will supply a header with color tags
				if (petCurrentSkill != "" && petSkillName != "")
					petSkills += "|^b" + petSkillName + "|^w#" + petCurrentSkill.replace(/\|/g,"|#");
				else if (petCurrentSkill != "" && petSkillName == "")
					petSkills += "|#" + petCurrentSkill.replace(/\|/g,"|#");
			}
		}

		// If we have pet skill, add the header
		if (petSkills != "")
			petSkills = "||" + mPet.name + " Abilities:" + petSkills;
	}
	
	// Join the two string together
	var rv = statPopup + petAttribute + petSkills;
	
	// Put the cooldown at the bottom of the string
	if ((arrayCooldown.length == 1 && (current || lvl == 1)) || arrayCooldown.length > 1)
		rv += "||^tCooldown: " + statCooldown + " Seconds"
	
	// Color the string
	rv = ColorString(rv)

	// Return the formatted string
	return(rv);
}

// Current and next level headers
Mastery.prototype.skillStats = function(i, lvl, current) {
	var rv = "";
	
	// Get the current or next level
	if(current) {
		rv += Span("Current Level: " + lvl, 'currentLevel') + EOL;
		rv += GetSkillText(lvl, this.idx, i, 'currentStat', current) + EOL;
	} else {
		rv += Span("Next Level: " + lvl, 'nextLevel') + EOL;
		rv += GetSkillText(lvl, this.idx, i, 'nextStat', current) + EOL;
	}
	
	return(rv);
}

// Skill popup function
Mastery.prototype.skillPopup = function(i, e) {
	//	Display the Name and Description
	var s = Span(Masteries[this.idx].skills[i].name, 'title') + EOL;
	s += Span(ColorString(Masteries[this.idx].skills[i].desc), 'desc') + EOL;
	
	// Display current level stats
	if(this.skills[i] > 0)
		s += EOL + this.skillStats(i, this.skills[i], true);

	// Dispaly the next level stats
	if(this.skills[i] + 1 <= Masteries[this.idx].skills[i].maxlvl)
		s += EOL + this.skillStats(i, this.skills[i] + 1, false);

	// Display the dependant skill
	var	aRequire = this.unlockName(i).split('_');
	if (aRequire[0] > 0)
		s += EOL + Span("Requires: " + aRequire[1], "green lock") + EOL;
	else if (aRequire[0] == 0)
		s += EOL + Span("Requires: " + aRequire[1], "red lock") + EOL;
	
	// String cleanup and replacement
	s = s.replace(/\|/g, EOL);
	s = s.replace(/#/g, '&nbsp;&nbsp;');
	s = removeString(s, "^t", "^t")
	s = removeString(s, "^w", "^w")
	s = removeString(s, "^b", "^b")
	s = removeString(s, "^o", "^o")

	// If there is an extra new line below the next level, remove it
	s = s.replace("Next Level: " + (this.skills[i] + 1) + "</span>" + EOL + EOL, "Next Level: " + (this.skills[i] + 1) + "</span>" + EOL)
	
	// Show the Popup
	POPUP(s, e);
}

//===================================================================
// Mastery Selections
//===================================================================
var mastery = new Array();
mastery[0] = new Mastery(0);
mastery[1] = new Mastery(1);

//===================================================================
// Skill Button Handlers
//===================================================================
// Show Popup
function SkillIconPopup(m, i, e) {
	mastery[m].skillPopup(i, e);
	document.getElementById(mastery[m].getSID(i)).style.filter = "brightness(125%)";
}

// Hide Popup
function SkillIconHidePop(m, i, e) {
	document.getElementById('pop').style.visibility = "hidden";
	document.getElementById(mastery[m].getSID(i)).style.filter = "brightness(100%)";
}

// Click Action
function SkillPointClickHandler(m, i, e) {
	if(SHIFT_RIGHT_CLICK(e)) {
		if (mastery[m].skills[i] > 0)
			document.getElementById(mastery[m].getSID(i)).style.filter = "brightness(75%)";
		mastery[m].zeroSkill(i, e);
	} else if(SHIFT_CLICK(e)) {
		if (mastery[m].skills[i] < Masteries[mastery[m].idx].skills[i].maxlvl)
			document.getElementById(mastery[m].getSID(i)).style.filter = "brightness(75%)";
		mastery[m].maxSkill(i, e);
	} else if(RIGHT_CLICK(e)) {
		if (mastery[m].skills[i] > 0)
			document.getElementById(mastery[m].getSID(i)).style.filter = "brightness(75%)";
		mastery[m].decrSkill(i, e);
	} else {
		if (mastery[m].skills[i] < Masteries[mastery[m].idx].skills[i].maxlvl)
			document.getElementById(mastery[m].getSID(i)).style.filter = "brightness(75%)";
		mastery[m].incrSkill(i, e);
	}
}

// Click Action
function SkillPointMouseHandler(m, i, e) {
	document.getElementById(mastery[m].getSID(i)).style.filter = "brightness(125%)";
}

//===================================================================
// Master Bar Handler
//===================================================================
function MasteryBarClickHandler(m, i, e) {
	mastery[m].setLevel(i, e);
}

//===================================================================
// Mastery Button Handlers
//===================================================================
// Show Popup
function MasteryPointPopup(m, e) {
	mastery[m].pointPopup(e);
	document.getElementById('m' + m + 'point').style.backgroundImage = "url(images/icons/mastery/" + mastery[m].key + "_hover.png)";
}

// Hide Popup
function MasteryHidePop(m, e) {
	document.getElementById('pop').style.visibility = "hidden";
	document.getElementById('m' + m + 'point').style.backgroundImage = "url(images/icons/mastery/" + mastery[m].key + "_up.png)";
}

// Click Action
function MasteryPointClickHandler(m, e) {
	if(SHIFT_RIGHT_CLICK(e)) {
		if (mastery[m].level > 0)
			document.getElementById('m' + m + 'point').style.backgroundImage = "url(images/icons/mastery/" + mastery[m].key + "_down.png)";
		mastery[m].zeroLevel(e);
	} else if(SHIFT_CLICK(e)) {
		if (mastery[m].level < MAX_LEVEL)
			document.getElementById('m' + m + 'point').style.backgroundImage = "url(images/icons/mastery/" + mastery[m].key + "_down.png)";
		mastery[m].maxLevel(e);
	} else if(RIGHT_CLICK(e)) {
		if (mastery[m].level > 0)
			document.getElementById('m' + m + 'point').style.backgroundImage = "url(images/icons/mastery/" + mastery[m].key + "_down.png)";
		mastery[m].decrLevel(e);
	} else {
		if (mastery[m].level < MAX_LEVEL)
			document.getElementById('m' + m + 'point').style.backgroundImage = "url(images/icons/mastery/" + mastery[m].key + "_down.png)";
		mastery[m].incrLevel(e);
	}
}

// Click Action
function MasteryPointMouseHandler(m, e) {
	document.getElementById('m' + m + 'point').style.backgroundImage = "url(images/icons/mastery/" + mastery[m].key + "_up.png)";
}

//===================================================================
// Class Names
//===================================================================
function GetClassName(m1, m2) {
	var ClassKey = m1 + m2
	var ClassName = "";
	
	if (ClassKey.indexOf("rune") >= 0) {
		if (ClassKey.indexOf("spirit") >= 0) {
			ClassName = "Shaman";
		} else if (ClassKey.indexOf("nature") >= 0) {
			ClassName = "Skinchanger";
		} else if (ClassKey.indexOf("rogue") >= 0) {
			ClassName = "Trickster";
		} else if (ClassKey.indexOf("hunting") >= 0) {
			ClassName = "Dragon Hunter";
		} else if (ClassKey.indexOf("storm") >= 0) {
			ClassName = "Thunderer";
		} else if (ClassKey.indexOf("earth") >= 0) {
			ClassName = "Stonespeaker";
		} else if (ClassKey.indexOf("defense") >= 0) {
			ClassName = "Runesmith";
		} else if (ClassKey.indexOf("warfare") >= 0) {
			ClassName = "Berserker";
		} else if (ClassKey.indexOf("dream") >= 0) {
			ClassName = "Seidr Worker";
		} else if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Esoterist";
		}
	} else if (ClassKey.indexOf("dream") >= 0) {
		if (ClassKey.indexOf("spirit") >= 0) {
			ClassName = "Diviner";
		} else if (ClassKey.indexOf("nature") >= 0) {
			ClassName = "Ritualist";
		} else if (ClassKey.indexOf("rogue") >= 0) {
			ClassName = "Dreamkiller";
		} else if (ClassKey.indexOf("hunting") >= 0) {
			ClassName = "Haruspex";
		} else if (ClassKey.indexOf("storm") >= 0) {
			ClassName = "Prophet";
		} else if (ClassKey.indexOf("earth") >= 0) {
			ClassName = "Evoker";
		} else if (ClassKey.indexOf("defense") >= 0) {
			ClassName = "Templar";
		} else if (ClassKey.indexOf("warfare") >= 0) {
			ClassName = "Harbinger";
		} else if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Contemplator";
		}
	} else if (ClassKey.indexOf("warfare") >= 0) {
		if (ClassKey.indexOf("spirit") >= 0) {
			ClassName = "Spellbreaker";
		} else if (ClassKey.indexOf("nature") >= 0) {
			ClassName = "Champion";
		} else if (ClassKey.indexOf("rogue") >= 0) {
			ClassName = "Assassin";
		} else if (ClassKey.indexOf("hunting") >= 0) {
			ClassName = "Slayer";
		} else if (ClassKey.indexOf("storm") >= 0) {
			ClassName = "Thane";
		} else if (ClassKey.indexOf("earth") >= 0) {
			ClassName = "Battlemage";
		} else if (ClassKey.indexOf("defense") >= 0) {
			ClassName = "Conquerer";
		} else if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Contemplator";
		}
	} else if (ClassKey.indexOf("defense") >= 0) {
		if (ClassKey.indexOf("spirit") >= 0) {
			ClassName = "Spellbinder";
		} else if (ClassKey.indexOf("nature") >= 0) {
			ClassName = "Guardian";
		} else if (ClassKey.indexOf("rogue") >= 0) {
			ClassName = "Corsair";
		} else if (ClassKey.indexOf("hunting") >= 0) {
			ClassName = "Warden";
		} else if (ClassKey.indexOf("storm") >= 0) {
			ClassName = "Paladin";
		} else if (ClassKey.indexOf("earth") >= 0) {
			ClassName = "Juggernaut";
		} else if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Monk";
		}
	} else if (ClassKey.indexOf("earth") >= 0) {
		if (ClassKey.indexOf("spirit") >= 0) {
			ClassName = "Conurer";
		} else if (ClassKey.indexOf("nature") >= 0) {
			ClassName = "Summoner";
		} else if (ClassKey.indexOf("rogue") >= 0) {
			ClassName = "Magician";
		} else if (ClassKey.indexOf("hunting") >= 0) {
			ClassName = "Avenger";
		} else if (ClassKey.indexOf("storm") >= 0) {
			ClassName = "Elementalist";
		} else if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Wu";
		}
	} else if (ClassKey.indexOf("storm") >= 0) {
		if (ClassKey.indexOf("spirit") >= 0) {
			ClassName = "Oracle";
		} else if (ClassKey.indexOf("nature") >= 0) {
			ClassName = "Druid";
		} else if (ClassKey.indexOf("rogue") >= 0) {
			ClassName = "Sorcerer";
		} else if (ClassKey.indexOf("hunting") >= 0) {
			ClassName = "Sage";
		} else if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Channeler";
		}
	} else if (ClassKey.indexOf("hunting") >= 0) {
		if (ClassKey.indexOf("spirit") >= 0) {
			ClassName = "Bone Charmer";
		} else if (ClassKey.indexOf("nature") >= 0) {
			ClassName = "Ranger";
		} else if (ClassKey.indexOf("rogue") >= 0) {
			ClassName = "Brigand";
		} else if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Pilgrim";
		}
	} else if (ClassKey.indexOf("rogue") >= 0) {
		if (ClassKey.indexOf("spirit") >= 0) {
			ClassName = "Warlock";
		} else if (ClassKey.indexOf("nature") >= 0) {
			ClassName = "Illusionist";
		} else if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Trickster";
		}
	} else if (ClassKey.indexOf("nature") >= 0) {
		if (ClassKey.indexOf("spirit") >= 0) {
			ClassName = "Soothsayer";
		} else if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Hermit";
		}
	} else if (ClassKey.indexOf("spirit") >= 0) {
		if (ClassKey.indexOf("neidan") >= 0) {
			ClassName = "Spiritualist";
		}
	}
	
	return ClassName;
}

//===================================================================
// Mastery Selection Complete
//===================================================================
function SwitchToSkills() {
	HIDE('selector');
	mastery[0].commit();
	mastery[1].commit();
	mastery[0].initPanel();
	mastery[1].initPanel();
	
	var ClassName = GetClassName(mastery[0].key, mastery[1].key);
		
	var span = document.getElementById('classmatter');
	span.innerHTML = "<span id = \"class\" class=\"classname\">" + ClassName + "</span>";
	span.innerHTML += "<br>";
	span.innerHTML += "<center><a href=\"#\" onclick=\"refresh();\" class=\"reload\">Back to Class Selection</a><center>";
}

function SelectMastery(key) {
	var selIcon = document.getElementById(key);
	var iconBg = selIcon.style.backgroundImage;

	if(iconBg.indexOf('disabled') != UINT) {
		selIcon.style.backgroundImage = iconBg.replace('disabled', 'hover');
		for(var i = 0; i < mastery.length; ++i) {
			if(mastery[i].key == key) {
				//mastery[i].zeroLevel();
				mastery[i].unsetView();
				mastery[i].idx = UINT;
				mastery[i].key = null;
			}
		}
	} else {
		selIcon.style.backgroundImage = iconBg.replace('hover', 'disabled');
		var midx = 1;
		if(mastery[0].idx == UINT) {
			midx = 0;
		}
		mastery[midx].assign(key);
		mastery[midx].setView();
		if(midx == 1) {
			SwitchToSkills();
		}
	}
}

//===================================================================
// Mastery Selection Screen
//===================================================================
function SelectorIcon(sd) {
	var rv = document.createElement('div');

	rv.style.backgroundImage = "url(images/selector/small/" + sd.key + ".png)";
	rv.style.zIndex = "100";
	rv.style.width = "80px";
	rv.style.height = "80px";

	rv.id = sd.key;
	rv.style.top = "" + sd.y + "px";
	rv.style.left = "" + sd.x + "px";

	rv.className = "abs z2";

	return(rv);
}

function NoClass(sdKey) {
    document.getElementById("highlighted").style.backgroundImage = 'url(images/selector/big/none.png)';
    document.getElementById("highlighted_label").innerHTML = "";
	 
	 if (mastery[0].key == sdKey || mastery[1].key == sdKey) {
		document.getElementById(sdKey).style.backgroundImage = 'url(images/selector/small/' + sdKey + '_disabled.png)';
	 } else {
		document.getElementById(sdKey).style.backgroundImage = 'url(images/selector/small/' + sdKey + '.png)';
	 }
}

function SelectClass(sdKey, sdID) {
    document.getElementById("highlighted").style.backgroundImage = 'url(images/selector/big/' + sdKey + '.png)';
    document.getElementById("highlighted_label").innerHTML = "<span>" + Masteries[sdID].highlight + "</span>";
	 
	 if (mastery[0].key != sdKey && mastery[1].key != sdKey) {
		document.getElementById(sdKey).style.backgroundImage = 'url(images/selector/small/' + sdKey + '_hover.png)';
	 }
}

function SelectorLabel(sd) {
	var rv = document.createElement('div');
	rv.innerHTML = sd.name;
	var offset = (78 - (sd.name.length * 6)) / 2;
	rv.className = "abs z3";
	rv.style.top = "" + (sd.y + 90) + "px";
	rv.style.left = "" + (sd.x + offset) + "px";
	return(rv);
}

function SelectorLabel(sd) {
	var rv = document.createElement('div');
	rv.innerHTML = sd.name;
	var offset = (78 - (sd.name.length * 6)) / 2;
	rv.className = "abs z3";
	rv.style.top = "" + (sd.y + 90) + "px";
	rv.style.left = "" + (sd.x + offset) + "px";
	return(rv);
}

function SelectorButton(sd) {
	var rv = document.createElement('div');
	rv.className = "abs z3";
	rv.style.top = "" + sd.y + "px";
	rv.style.left = "" + sd.x + "px";
	rv.style.width = "90px";
	rv.style.height = "90px";
	rv.setAttribute("onclick", "SelectMastery('" + sd.key + "');");
	rv.setAttribute("onMouseOver", "SelectClass('" + sd.key + "', '" + sd.idx + "');");
	rv.setAttribute("onMouseOut", "NoClass('" + sd.key + "');");
	return(rv);
}

function InitSelector(id) {
	var parent = document.getElementById(id);

	for(var i = 0; i < seldata.length; ++i) {
		parent.appendChild(SelectorIcon(seldata[i]));
		parent.appendChild(SelectorLabel(seldata[i]));
		parent.appendChild(SelectorButton(seldata[i]));
	}
}

function main() {
	InitTier();
	InitSelector('selector');
	document.getElementById('config').innerHTML = '';
	document.getElementById('selpanel').style.zIndex = 100;
	//HIDE('midmatter');
	SHOW('selector');
}

//===================================================================
// Reload back to Class Selection
//===================================================================
function refresh() {
	location.reload();
}

//===================================================================
// Backup and Restore
//===================================================================
// Turn numbers into a character
function LevelToChar(lvl) {
	var rv = '0';
	
	// Convert a level greater than 9 to a letter
	if (lvl > 9)
		rv = String.fromCharCode(lvl + 87);
	else
		rv = lvl;

	return(rv);
}

// Turn characters into a number
function CharToLevel(ch) {
	var rv = 0;

	// Convert the letter to a number if need be
	if (!isNaN(ch))
		rv = ch;
	else
		rv = ch.charCodeAt(0) - 87;
	
	return(rv);
}

// Turn all the skills into a string
function SkillAsString(skills) {
	var s = "";
	for(var i = 0; i < skills.length; ++i) {
		s += LevelToChar(skills[i]);
	}
	return(s);
}

// Backup the Master to a code
function backup() {
	// If no masteries are selected we return nothing
	if(mastery[0].idx == UINT || mastery[1].idx == UINT)
		return;
	
	// Return a formated string with the saved data
	var s = "" + PTS_LEFT;
	s += "_" + mastery[0].idx + "-" + mastery[0].level + "-" + PTS_SPENT[0] + "-" + SkillAsString(mastery[0].skills);
	s += '_' + mastery[1].idx + "-" + mastery[1].level + "-" + PTS_SPENT[1] + "-" + SkillAsString(mastery[1].skills);
	
	// Set the textbox with the new code
	document.getElementById('config').value = s;
	document.getElementById('config').select();
	
	// Try and copy the text
	try {
		var successful = document.execCommand('copy');
		window.kendoAlert("Hey Now!");
	} catch (err) {
		// If we were unable to copy
	}	

}

// Restore the mastery from the code
function restore() {
	var s = document.getElementById('config').value;

	if (s == "")
		return;
	
	// Points are first, then each mastery
	var	mStrings = s.split('_');
	PTS_LEFT = parseInt(mStrings[0]);
	var m0str = mStrings[1].split('-');
	var m1str = mStrings[2].split('-');
	
	// If there are masteries selected, get rid of them
	if (mastery[0].idx >= 0 && mastery[1].idx >= 0 ) {
		mastery[0].deInit();
		mastery[1].deInit();		
	}

	// Assign the new masteries
	mastery[0].assign(seldata[m0str[0]].key);
	mastery[0].setView();
	mastery[1].assign(seldata[m1str[0]].key);
	mastery[1].setView();
	
	// Switch to skills to set them
	SwitchToSkills();

	// Setup the first mastery
	mastery[0].level = parseInt(m0str[1]);
	mastery[0].updateLevelView();
	mastery[0].tier = TIER[mastery[0].level];
	mastery[0].incrTier();

	// Setup the second mastery
	mastery[1].level = parseInt(m1str[1]);
	mastery[1].updateLevelView();
	mastery[1].tier = TIER[mastery[1].level];
	mastery[1].incrTier();

	// Setup points spent
	PTS_SPENT[0] = parseInt(m0str[2])
	PTS_SPENT[1] = parseInt(m1str[2])

	// Setup the first mastery skills
	for(var i = 0; i < m0str[3].length; ++i) {
		mastery[0].skills[i] = parseInt(CharToLevel(m0str[3][i]));
		mastery[0].updateSkillLevelView(i);
	}

	// Setup the second mastery skills
	for(var i = 0; i < m1str[3].length; ++i) {
		mastery[1].skills[i] = parseInt(CharToLevel(m1str[3][i]));
		mastery[1].updateSkillLevelView(i);
	}
	
	// Reset the Restore code field
	document.getElementById('config').value = "";
}