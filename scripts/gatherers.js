// Gatherers info //

var Gatherer = function(name, creditCost, mineralCost, pulsarCrystalCost, creditCostMult, mineralCostMult, puslarCrystalCostMult, htmlNextCreditCost, htmlNextMineralCost, htmlNextPulsarCrystalCost, creditClickValue, mineralClickValue, pulsarCrystalClickValue) {
	this.name = name;
	this.number = 0;
	// costs
	this.creditCost = creditCost;
	this.mineralCost = mineralCost;
	this.pulsarCrystalCost = pulsarCrystalCost;
	// multipliers
	this.creditCostMult = creditCostMult;
	this.mineralCostMult = mineralCostMult;
	this.puslarCrystalCostMult = puslarCrystalCostMult;
	// html
	this.htmlNextCreditCost = htmlNextCreditCost;
	this.htmlNextMineralCost = htmlNextMineralCost;
	this.htmlNextPulsarCrystalCost = htmlNextPulsarCrystalCost;
	// curCost
	this.curCreditCost = creditCost;
	this.curMineralCost = mineralCost;
	this.curPulsarCrystalCost = pulsarCrystalCost;
	// click val
	this.creditClickValue = creditClickValue;
	this.mineralClickValue = mineralClickValue;
	this.pulsarCrystalClickValue = pulsarCrystalClickValue;
};

Gatherer.prototype.buyOne = function() {
	//this.curCreditCost =  Math.floor(this.creditCost * this.costMult);
	if (credits >= this.curCreditCost && minerals >= this.curMineralCost && pulsarCrystals >= this.curPulsarCrystalCost) {
		this.number += 1;
		credits -= this.curCreditCost;
		minerals -= this.curMineralCost;
		pulsarCrystals -= this.curPulsarCrystalCost;
		document.getElementById('credits').innerHTML = fnum(credits);
		document.getElementById('minerals').innerHTML = fnum(minerals);
		document.getElementById('pulsarCrystals').innerHTML = fnum(pulsarCrystals);
		document.getElementById(this.name).innerHTML = this.number;
		this.recalcCost();
		recalcMultipliers();
	}
	
}

Gatherer.prototype.recalcCost = function() {
	this.curCreditCost = Math.floor(this.curCreditCost * this.creditCostMult);
	document.getElementById(this.htmlNextCreditCost).innerHTML = fnum(this.curCreditCost);
	this.curMineralCost = Math.floor(this.curMineralCost * this.mineralCostMult);
	document.getElementById(this.htmlNextMineralCost).innerHTML = fnum(this.curMineralCost);
	this.curPulsarCrystalCost = Math.floor(this.curPulsarCrystalCost * this.puslarCrystalCostMult);
	document.getElementById(this.htmlNextPulsarCrystalCost).innerHTML = fnum(this.curPulsarCrystalCost);
}

Gatherer.prototype.canBuy = function() {
	this.recalcCost();
	btn = this.htmlBuyBtn;

}

function checkGathererButtons() {
	Gatherer.canBuy();
}

var CreditGatherer = new Gatherer(
/*Name*/			"CrewMember",
/*creditCost*/		10,
/*mineralCost*/     0,
/*pulsarCrystalCost*/ 0,
/*creditCostMult*/		1.1,
/*mineralCostMult*/		0,
/*puslarCrystalCostMult*/ 0,
/*htmlNextCreditCost*/'GathererCreditCost',
/*htmlNextMineralCost*/'GathererMineralCost',
/*htmlNextPulsarCrystalCost*/ 'GathererPulsarCrystalCost',
/*creditClickValue*/ 1,
/*mineralClickValue*/ 0,
/*pulsarCrystalClickValue*/ 0
);

var MineralGatherer = new Gatherer(
/*Name*/			"MiningDroid",
/*creditCost*/		100,
/*mineralCost*/     0,
/*pulsarCrystalCost*/ 0,
/*creditCostMult*/		1.1,
/*mineralCostMult*/		0,
/*puslarCrystalCostMult*/ 0,
/*htmlNextCreditCost*/'MinerCreditCost',
/*htmlNextMineralCost*/'MinerMineralCost',
/*htmlNextPulsarCrystalCost*/ 'MinerPulsarCrystalCost',
/*creditClickValue*/ 0,
/*mineralClickValue*/ 1,
/*pulsarCrystalClickValue*/ 0
);

var PulsarCrystalGatherer = new Gatherer(
/*Name*/			"TractorBeams",
/*creditCost*/		1000,
/*mineralCost*/     100,
/*pulsarCrystalCost*/ 0,
/*creditCostMult*/		1.1,
/*mineralCostMult*/		1.1,
/*puslarCrystalCostMult*/ 0,
/*htmlNextCreditCost*/'TractorCreditCost',
/*htmlNextMineralCost*/'TractorMineralCost',
/*htmlNextPulsarCrystalCost*/ 'TractorPulsarCrystalCost',
/*creditClickValue*/ 0,
/*mineralClickValue*/ 0,
/*pulsarCrystalClickValue*/ 1
);