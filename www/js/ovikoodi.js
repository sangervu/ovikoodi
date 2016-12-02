/**
 * 
 */
function sendInfo(){
	
	var monthNumbers = ["1830", "7620", "4513", "7913", "6789", "3241",
	             		"4273", "3072", "0632", "8156", "5963", "9670"
	            		];
	var date = new Date();
	
	var popUpText;
	
	popUpText = "Pirkko ja Sakari" + "<br>" 
	+"<a>Rantaharju 8 A 14, Espoo</a>" + "<br>" 
	+"Ovikoodi = " +monthNumbers[date.getMonth()].bold().fontcolor("red") + "<br>" +
	"Tervetuloa!";
	
	document.getElementById("popup").innerHTML = popUpText;
	document.getElementById("popup").setAttribute("href", "http://maps.google.com/maps?q=Rantaharju,+Helsinki,+Finland");
}