// Gatherers info //

var Gatherer = function(name, creditCost, mineralCost, creditCostMult, mineralCostMult, htmlNextCreditCost, htmlNextMineralCost, creditClickValue, mineralClickValue, pulsarCrystalClickValue) {
	this.name = name;
	this.creditCost = creditCost;
	this.mineralCost = mineralCost;
	this.creditCostMult = creditCostMult;
	this.mineralCostMult = mineralCostMult;
	this.htmlNextCreditCost = htmlNextCreditCost;
	this.creditClickValue = creditClickValue;
	this.number = 0;
	this.curCreditCost = creditCost;
	this.mineralClickValue = mineralClickValue;
	this.pulsarCrystalClickValue = pulsarCrystalClickValue;
};

Gatherer.prototype.buyOne = function() {
	//this.curCreditCost =  Math.floor(this.creditCost * this.costMult);
	if (credits >= this.curCreditCost && this.curMineralCost === 0) {
		this.number += 1;
		credits -= this.curCreditCost;
		document.getElementById('credits').innerHTML = fnum(credits);
		document.getElementById(this.name).innerHTML = this.number;
		this.recalcCost();
		// updateStatistic(this.name, 1); 
	}
	if (minerals >= this.curMineralCost && credits >= this.curCreditCost) {
		this.number += 1;
		minerals -= curMineralCost;
		document.getElementById('minerals').innerHTML = fnum(minerals);
		document.getElementById(this.name).innerHTML = this.number;
		this.recalcCost();
	}
}

Gatherer.prototype.recalcCost = function() {
	this.curCreditCost = Math.floor(this.curCreditCost * this.costMult);
	document.getElementById(this.htmlNextCreditCost).innerHTML = fnum(this.curCreditCost);
	this.curMineralCost = Math.floor(this.curMineralCost * this.costMult);
	document.getElementById(this.htmlNextMineralCost).innerHTML = fnum(this.curMineralCost);
}

Gatherer.prototype.canBuy = function() {
	this.recalcCost();
	btn = this.htmlBuyBtn;
	/*if (credits >= this.curCreditCost) {
		document.getElementById(btn).disabled = false;					//enables the buy button
		this.CostsToBlack();
		return true;
	} 
	else {
		document.getElementById(btn).disabled = true;
		if(credit < this.curcreditCost && this.htmlNextCreditCost != 'none'){
				document.getElementById(this.htmlNextCreditCost).style.color = lackResourceColor;
			}
	}*/

}

function checkGathererButtons() {
	Gatherer.canBuy();
}

var CreditGatherer = new Gatherer(
/*Name*/			"CrewMember",
/*creditCost*/		10,
/*mineralCost*/     0,
/*creditCostMult*/		1.1,
/*mineralCostMult*/		0,
/*htmlNextCreditCost*/'GathererCreditCost',
/*htmlNextMineralCost*/'GathererMineralCost',
/*creditClickValue*/ 1,
/*mineralClickValue*/ 0,
/*pulsarCrystalClickValue*/ 0
);

var MineralGatherer = new Gatherer(
/*Name*/			"MiningDroid",
/*creditCost*/		100,
/*mineralCost*/     0,
/*creditCostMult*/		1.1,
/*mineralCostMult*/		0,
/*htmlNextCreditCost*/'MinerCreditCost',
/*htmlNextMineralCost*/'MinerMineralCost',
/*creditClickValue*/ 0,
/*mineralClickValue*/ 1,
/*pulsarCrystalClickValue*/ 0
);

var PulsarCrystalGatherer = new Gatherer(
/*Name*/			"TractorBeam",
/*creditCost*/		1000,
/*mineralCost*/     100,
/*creditCostMult*/		1.1,
/*mineralCostMult*/		1.1,
/*htmlNextCreditCost*/'TractorCreditCost',
/*htmlNextMineralCost*/'TractorMineralCost',
/*creditClickValue*/ 0,
/*mineralClickValue*/ 0,
/*pulsarCrystalClickValue*/ 1
);