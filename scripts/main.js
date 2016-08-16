// Main Script! //

// resource globals //
var credits = 0;
var minerals = 0;
var pulsarCrystals = 0;

// stats globals //
var creditspersec = 0;
var mineralspersec = 0;
var pulsarcrystalspersec = 0;

// gatherer globals //
var creditgatherers = 0;
var mineralgatherers = 0;
var pulsarcrystalgatherers = 0;

// ETC vars //
var TruncateNumber = 'standard';

// upgrade multipliers
var CrystalMultiplier = 1;
var CreditMultiplier = 1;
var MineralMultiplier = 1;
var prestigeMultiplier = 1;

// prestige costs
var originalPrestigeCost = 1000000000000000;
var curentPrestigeCost = 1000000000000000;


document.getElementById("prestigeCreditCost").innerHTML = fnum(curentPrestigeCost);
document.getElementById("prestigeMineralCost").innerHTML = fnum(curentPrestigeCost);
document.getElementById("prestigePulsarCrystalCost").innerHTML = fnum(curentPrestigeCost);


function clickThing(number, type)
{
	if(number > 0) {
		switch (type) {
			case "credits":
				credits += number;
				document.getElementById("credits").innerHTML = fnum(credits);	
				break;
			case "creditsmouse":
				credits += number;
				document.getElementById("credits").innerHTML = fnum(credits);
				break;
			case "minerals":
				minerals += number;
				document.getElementById("minerals").innerHTML = fnum(minerals);
				break;
			case "pulsarCrystals":
				pulsarCrystals += number;
				document.getElementById("pulsarCrystals").innerHTML = fnum(pulsarCrystals);
				break;

		}
	}
}

function recalculateCosts(){
		CreditGatherer.recalcCost();
		MineralGatherer.recalcCost();
		PulsarCrystalGatherer.recalcCost();
}

function recalcMultipliers() {
	if (PhaserII.flag === 1) {
		CreditMultiplier += 0.1;
	}
	if (Silonon.flag === 1) {
		CreditMultiplier += 0.2;
	}
	if (Hydrolock.flag === 1) {
		MineralMultiplier += 0.1;
	}
	if (Neoloid.flag === 1) {
		MineralMultiplier += 0.1;
	}
	if (Robowire.flag === 1) {
		MineralMultiplier += 0.1;
		CreditMultiplier  += 0.1;
	}
	if (Xwave.flag === 1) {
		MineralMultiplier += 0.1;
		CreditMultiplier  += 0.1;
		CrystalMultiplier += 0.1;
	}
}

function buyPrestige() {

	if (credits >= curentPrestigeCost && minerals >= curentPrestigeCost && pulsarCrystals >= curentPrestigeCost) {
		prestigeMultiplier += 1;

		credits = 0;
		minerals = 0;
		pulsarCrystals = 0;

		PhaserII.flag = 0;
		Silonon.flag = 0;
		Hydrolock.flag = 0;
		Neoloid.flag = 0;
		Robowire.flag = 0;
		Xwave.flag = 0;

		PhaserII.canBuy();
		Silonon.canBuy();
		Hydrolock.canBuy();
		Neoloid.canBuy();
		Robowire.canBuy();
		Xwave.canBuy();

		curentPrestigeCost = originalPrestigeCost + Math.pow(curentPrestigeCost, 2.1);
	}
	
}

window.setInterval( function() {

	clickThing((CreditGatherer.number*CreditGatherer.creditClickValue*CreditMultiplier*prestigeMultiplier), "credits");
	clickThing((MineralGatherer.number*MineralGatherer.mineralClickValue*MineralMultiplier*prestigeMultiplier), "minerals");
	clickThing((PulsarCrystalGatherer.number*PulsarCrystalGatherer.pulsarCrystalClickValue*CrystalMultiplier*prestigeMultiplier), "pulsarCrystals");
}, 100);

function fnum(x) {
	if(isNaN(x)) return x;
 
	if(TruncateNumber == 'standard'){
		if(x < 9999) {
			return x;
		}
	 
		if( x < 1000000) {
			return (x/1000).toFixed(2) + "K";
		}
		if( x < 10000000) {
			return (x/1000000).toFixed(2) + "M";
		}
	 
		if(x < 1000000000) {
			return (x/1000000).toFixed(2) + "B";
		}
	 
		if(x < 1000000000000) {
			return (x/1000000000).toFixed(2) + "T";
		}
		
		if(x < 1000000000000000) {
			return (x/1000000000000).toFixed(2) + "Qd";
		}	
	 
		if(x < 1000000000000000000) {
			return (x/1000000000000000).toFixed(2) + "Qt";
		}
		if(x < 1000000000000000000000) {
			return (x/1000000000000000000).toFixed(2) + "Sx";
		}
		if(x < 1000000000000000000000000) {
			return (x/1000000000000000000000).toFixed(2) + "Sp";
		}

		if(x < 1000000000000000000000000000) {
			return (x/1000000000000000000000000).toFixed(2) + "Oct";
		}

		if(x < 1000000000000000000000000000000) {
			return (x/1000000000000000000000000000).toFixed(2) + "Non";
		}

		if(x < 1000000000000000000000000000000000) {
			return (x/1000000000000000000000000000000).toFixed(2) + "Dec";
		}

		if(x < 1000000000000000000000000000000000000) {
			return (x/1000000000000000000000000000000000).toFixed(2) + "UnDec";
		}			
	 
		return "1UnDec+";
	}
	else if(TruncateNumber == 'scientific'){
		return x.toExponential(2);
	}
	else
	{
		return x;
	}
}

function toggleTrunc(){
	if(TruncateNumber == 'standard'){
		TruncateNumber = 'scientific';
		document.getElementById('ToggleTrunc').innerHTML = '<span class="glyphicon glyphicon-superscript" aria-hidden="true"></span>Number Format: Scientific';
	}
	else if (TruncateNumber == 'scientific'){
		TruncateNumber = 'off';
		document.getElementById('ToggleTrunc').innerHTML = '<span class="glyphicon glyphicon-superscript" aria-hidden="true"></span>Number Format: Off';
	}
	else{
		TruncateNumber = 'standard';
		document.getElementById('ToggleTrunc').innerHTML = '<span class="glyphicon glyphicon-superscript" aria-hidden="true"></span>Number Format: Standard';
	}
}