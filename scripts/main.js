// Main Script! //

// resource globals //
var credits = 0;

// stats globals //
var creditspersec = 0;

// gatherer globals //
var creditgatherers = 0;

// ETC vars //
var TruncateNumber = 'standard';


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

		}
	}
}

function recalculateCosts(){
		CreditGatherer.recalcCost();
}

window.setInterval( function() {

	clickThing((CreditGatherer.number*CreditGatherer.creditClickValue), "credits");
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
			return (x/1000000).toFixed(2) + "M";
		}
	 
		if(x < 1000000000000) {
			return (x/1000000000).toFixed(2) + "B";
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