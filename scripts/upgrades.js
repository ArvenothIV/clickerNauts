// upgrades info //


var Upgrade = function (name, creditCost, mineralCost, pulsarCrystalCost, htmlNextCreditCost, htmlNextMineralCost, htmlNextPulsarCrystalCost) {
	this.name = name;
	this.flag = 0;
	// costs
	this.creditCost = creditCost;
	this.mineralCost = mineralCost;
	this.pulsarCrystalCost = pulsarCrystalCost;
	// curCost
	this.curCreditCost = creditCost;
	this.curMineralCost = mineralCost;
	this.curPulsarCrystalCost = pulsarCrystalCost;
	// html
	this.htmlNextCreditCost = htmlNextCreditCost;
	this.htmlNextMineralCost = htmlNextMineralCost;
	this.htmlNextPulsarCrystalCost = htmlNextPulsarCrystalCost;

	//this.Initialize = Initializer;

}

Upgrade.prototype.Initializer = function () {
	document.getElementById(this.htmlNextCreditCost).innerHTML = fnum(this.curCreditCost);
	document.getElementById(this.htmlNextMineralCost).innerHTML = fnum(this.curMineralCost);
	document.getElementById(this.htmlNextPulsarCrystalCost).innerHTML = fnum(this.curPulsarCrystalCost);
}

Upgrade.prototype.buyUpgrade = function () {
	if (credits >= this.curCreditCost && minerals >= this.curMineralCost && pulsarCrystals >= this.curPulsarCrystalCost) {
		this.flag = 1;
		credits -= this.curCreditCost;
		minerals -= this.curMineralCost;
		pulsarCrystals -= this.curPulsarCrystalCost;
		document.getElementById(this.name).style.visibility = "hidden";
	}
}

Upgrade.prototype.canBuy = function() {
	if (this.flag === 0) {
		document.getElementById(this.name).style.visibility = "visible";
	}
}

// Crew Upgrades
var PhaserII = new Upgrade("Phaser MKII", 100000, 0, 0, "PhaserIICreditCost", "PhaserIIMineralCost", "PhaserIIPulsarCrystalCost");
var Silonon = new Upgrade("Silonon Uniforms", 100000000, 1000000, 0, "SilononCreditCost", "SilononMineralCost", "SilononPulsarCrystalCost");

//Droid Upgrades
var Hydrolock = new Upgrade("Hydrolocking Systems", 100000, 10000, 0, "HydrolockCreditCost", "HydrolockMineralCost", "HydrolockPulsarCrystalCost");
var Neoloid = new Upgrade("Neoloid Appendages", 1000000000, 1000000, 0, "NeoloidCreditCost", "NeoloidMineralCost", "NeoloidPulsarCrystalCost");
var Robowire = new Upgrade("Nanofiber Robowire", 1000000000000, 100000000, 100000, "RobowireCreditCost", "RobowireMineralCost", "RobowirePulsarCrystalCost");


//Tractor Beam Upgrades
var Xwave = new Upgrade("Transavole X-wave", 100000, 10000, 100000000000000, "XwaveCreditCost", "XwaveMineralCost", "XwavePulsarCrystalCost");

// Initialization
PhaserII.Initializer();
Silonon.Initializer();
Hydrolock.Initializer();
Neoloid.Initializer();
Robowire.Initializer();
Xwave.Initializer();