// Gatherers info //

var Gatherer = function(name, creditCost, costMult, htmlNextCreditCost) {
	this.name = name;
	this.creditCost = creditCost;
	this.costMult = costMult;
	this.htmlNextCreditCost = htmlNextCreditCost;
	this.creditClickValue = 1;
	this.number = 0;
	this.curCreditCost = creditCost;
};

Gatherer.prototype.buyOne = function() {
	//this.curCreditCost =  Math.floor(this.creditCost * this.costMult);
	if (credits >= this.curCreditCost) {
		this.number += 1;
		credits -= this.curCreditCost;
		document.getElementById('credits').innerHTML = fnum(credits);
		document.getElementById(this.name).innerHTML = this.number;
		this.recalcCost();
		// updateStatistic(this.name, 1); 
	}
}

Gatherer.prototype.recalcCost = function() {
	this.curCreditCost = Math.floor(this.curCreditCost * this.costMult);
	document.getElementById(this.htmlNextCreditCost).innerHTML = fnum(this.curCreditCost);
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
/*Name*/			"CreditGatherer",
/*creditCost*/		10,
/*costMult*/		1.1,
/*htmlNextCreditCost*/'GathererCost'

);