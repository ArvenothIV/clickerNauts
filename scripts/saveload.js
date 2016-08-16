//Save and Loading Script for HW //
	var saveTime;
	var myBool;

	function save(key, value){
		if(value !== value){		//Best way to check for NaN atm
			console.log(key + ' is NaN, setting value to 0.');
			eval(key + ' = 0');
			localStorage.setItem(key, 0);
		}
		else{
			localStorage.setItem(key, value);
		}

	}

	function saveCookie(){
		if(typeof(Storage) !== "undefined"){
		saveTime = Date.now();
		save("saveTime", saveTime);

		//Currency variables
		save("credits",credits);
		save("minerals", minerals);
		save("pulsarCrystals", pulsarCrystals);

		//Unit variables
 		save("CrewMember",CreditGatherer.number);
		save("MiningDroid", MineralGatherer.number);
		save("TractorBeams",PulsarCrystalGatherer.number);


		//Upgradeflags
		save("PhaserMKII",PhaserII.flag);
		save("SilononUniforms",Silonon.flag);
		save("HydrolockingSystems",Hydrolock.flag);
		save("NeoloidAppendages",Neoloid.flag);
		save("NanofiberRobowire",Robowire.flag);
		save("TransavoleXwave",Xwave.flag);
		save("PrestigeLevel",prestigeMultiplier);


		/*var notify = $.notify({
			icon: 'glyphicon glyphicon-floppy-disk',
			message: '<strong>Saving</strong> Do not close this page...'},{
			type: 'success',
			allow_dismiss: false,
			showProgressbar: true,
			delay: 1500
		});*/

		/*setTimeout(function() {
			notify.update('message', '<strong>Saving</strong>  Saving your progress.');
		}, 1000);*/
		console.log("saved");


	}
	else{
		alert("Sorry! Your web browser does not support local saving. Please try a newer version of your browser.");
	}
}

	function deleteCookie(){
		localStorage.clear();
		console.log("Your cookies have been cleared.");
	}

	function loadCookie(){
		if(window.localStorage.length !== 0){
			if(localStorage.saveTime !== null){
				saveTime = localStorage.saveTime;
	//			console.log(Math.floor((Date.now()-saveTime)/1000));
			}

			if(localStorage.credits !== null){
				credits = parseInt(localStorage.credits);
				document.getElementById("credits").innerHTML = fnum(credits);
			}

			if(localStorage.minerals !== null){
				minerals = parseInt(localStorage.minerals);
				document.getElementById("minerals").innerHTML = minerals;
			}

			if(localStorage.pulsarCrystals !== null){
				pulsarCrystals = parseInt(localStorage.pulsarCrystals);
				document.getElementById("pulsarCrystals").innerHTML = fnum(pulsarCrystals);
			}


			if(localStorage.CrewMember !== null){
				CreditGatherer.number = parseInt(localStorage.CrewMember);
				document.getElementById("CrewMember").innerHTML = CreditGatherer.number;
			}
			if(localStorage.MiningDroid !== null){
				MineralGatherer.number = parseInt(localStorage.MiningDroid);
				document.getElementById("MiningDroid").innerHTML = MineralGatherer.number;
			}
			if(localStorage.TractorBeams !== null){
				PulsarCrystalGatherer.number = parseInt(localStorage.TractorBeams);
				document.getElementById("TractorBeams").innerHTML = PulsarCrystalGatherer.number;
			}



			if(localStorage.PhaserMKII !== null){
				PhaserII.flag = localStorage.PhaserMKII;
				recalcMultipliers();
			}

			if(localStorage.SilononUniforms !== null){
				Silonon.flag = localStorage.SilononUniforms;
				recalcMultipliers();
			}

			if(localStorage.HydrolockingSystems !== null){
				Hydrolock.flag = localStorage.HydrolockingSystems;
				recalcMultipliers();
			}

			if(localStorage.NeoloidAppendages !== null){
				Neoloid.flag = localStorage.NeoloidAppendages;
				recalcMultipliers();
			}

			if(localStorage.NanofiberRobowire !== null){
				Robowire.flag = localStorage.NanofiberRobowire;
				recalcMultipliers();
			}

			if(localStorage.TransavoleXwave !== null){
				Xwave.flag = localStorage.TransavoleXwave;
				recalcMultipliers();
			}

			if(localStorage.PrestigeLevel !== null){
				prestigeMultiplier = localStorage.PrestigeLevel;
				//recalcMultipliers();
			}

		


			
			
			

			
			
			

			

			

		
			


			//document.getElementById('verinfo').innerHTML = "<span class='glyphicon glyphicon-info-sign' aria-hidden='true'></span> Version " + gameVer;

			recalculateCosts();
			//QuestCheckUnitOptions();


			/*$.notify({
				icon: 'glyphicon glyphicon-download-alt',
				message: "<strong>Load</strong> Your game save has been loaded.",
				},{
				type: 'info',
				allow_dismiss: false,
				delay: 2000
			});*/

			console.log("loaded");
		}
		else{
			lastPage = "Production";
			console.log('Starting new game!');
		}
	}

	function hardReset(){
	//set all variables to zero, delete cookies
	var answer;
		answer = confirm("Are you sure you want to hard reset? You will LOSE ALL YOUR DATA!");
		if(answer === true){
			deleteCookie();
			location.reload(true);
		}
	}


window.setInterval(function(){					//Autosaves every minute
	saveCookie();
}, 60000);


function loadScenario(number){
	switch(number){
		case 1:
			gold = 10000;
			wood = 10000;
			iron = 10000;
			Peasant.number = 10;
			Miner.number = 10;
			Lumberjack.number = 10;
			Page.number = 12;
			lumbermillOpened = true;
			barracksOpened = true;
			minesOpened = true;
			saveCookie();
			location.reload(true);
		break;

		case 2:
			gold = 100000;
			wood = 100000;
			iron = 100000;
			silver = 100000;
			Peasant.number = 50;
			Miner.number = 50;
			Lumberjack.number = 50;
			Page.number = 20;
			Squire.number = 5;

			defeatedGoblins = true;
			defeatedBandits = true;

			squiresUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);
		break;

		case 3:
			gold = 500000;
			wood = 500000;
			iron = 500000;
			silver = 500000;
			faith = 100;
			Tavern.number = 1;
			Peasant.number = 100;
			Miner.number = 100;
			Lumberjack.number = 100;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 10;
			Acolyte.number = 10;

			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;

			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);
		break;

		case 4:
			gold = 700000;
			wood = 700000;
			iron = 700000;
			silver = 700000;
			faith = 1000;
			paper = 100;
			Tavern.number = 2;
			Peasant.number = 150;
			Miner.number = 150;
			Lumberjack.number = 150;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 10;
			Paladin.number = 5;
			Acolyte.number = 10;
			Priest.number = 5;

			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;

			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);
		break;

		case 5:
			gold = 750000;
			wood = 750000;
			iron = 750000;
			silver = 750000;
			faith = 2000;
			paper = 10000;
			Tavern.number = 3;
			Peasant.number = 200;
			Miner.number = 200;
			Lumberjack.number = 200;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 10;
			Paladin.number = 10;
			Acolyte.number = 25;
			Priest.number = 10;
			Shade.number = 20;

			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			defeatedHellhounds = true;

			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);
		break;

		case 6:
			gold = 1000000;
			wood = 1000000;
			iron = 1000000;
			silver = 1000000;
			faith = 50000;
			paper = 100000;
			mana = 2000;
			Tavern.number = 5;
			Peasant.number = 200;
			Miner.number = 200;
			Lumberjack.number = 200;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 20;
			Paladin.number = 30;
			Acolyte.number = 25;
			Priest.number = 10;
			Shade.number = 20;
			Aspect.number = 11;

			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			defeatedHellhounds = true;
			defeatedPixie = true;
			defeatedArmor = true;
			defeatedOoze = true;

			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			paladinWepUpgrade = true;
			saveCookie();
			location.reload(true);
		break;

		case 7:
			gold = 1000000;
			wood = 1000000;
			iron = 1000000;
			silver = 1000000;
			faith = 50000;
			paper = 100000;
			mana = 2000;
			Tavern.number = 5;
			Peasant.number = 200;
			Miner.number = 200;
			Lumberjack.number = 200;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 15;
			Paladin.number = 44;
			Acolyte.number = 25;
			Priest.number = 10;
			Shade.number = 30;
			Aspect.number = 26;

			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			defeatedHellhounds = true;
			defeatedPixie = true;
			defeatedArmor = true;
			defeatedOoze = true;

			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			prFaithUpgrade = true;
			paladinWepUpgrade = true;
			tomesUnlocked = true;

			saveCookie();
			location.reload(true);
		break;

		default:
	}
}



function xor_str(input)
{
	var to_enc = input;

	var xor_key = 6;
	var the_res="";//the result will be here
	for(i=0;i<to_enc.length;++i)
	{
		the_res+=String.fromCharCode(xor_key^to_enc.charCodeAt(i));
	}
	return(the_res);
}

function decrypt_str(input)
{
	var to_dec = input;
	var the_res = "";


	var xor_key=6;
	for(i=0;i<to_dec.length;i++)
	{
		the_res+=String.fromCharCode(xor_key^to_dec.charCodeAt(i));
	}
	return the_res;
}


function exportSave(){
var storage = xor_str(JSON.stringify(localStorage));
	bootbox.prompt({
	  title: "Copy and save your export somewhere safe!",
	  value: storage,
	  callback: function(storage) {
		if (storage === "") {
		}
		else {
			 }
	  }
	});
}


var storage;
function importSave(){
var input = "";

	bootbox.prompt({
	  title: "Paste your savedata here: ",
	  value: input,
	  callback: function(input) {
		if (input === "") {
			alert('invalid save data');
		} else {
			input = decrypt_str(input);
//				for (var name in storage) { localStorage.setItem(name, storage[name] ); }
			eval ('storage = ' + input);
			console.log(storage);
			for (var name in storage) { localStorage.setItem(name, storage[name] ); }
			location.reload(true);
		}
	  }
	});
}
