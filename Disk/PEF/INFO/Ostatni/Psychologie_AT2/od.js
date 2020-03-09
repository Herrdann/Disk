var n = 0;
var otazky = new Array();
var spatneOtazky = new Array();
var odpovezene = new Array();

var spravne = 0;
var spatne = 0;

var otazka;

var x = 0;

function start() {
	zalozOtazky();
	document.getElementById('start').remove();

	document.getElementById('otazka').style.visibility = 'visible';
	//document.getElementById('odpoved').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';
	document.getElementById('otazkaCislo').style.visibility = 'visible';

	nactiOtazku();
}

function nactiOtazku() {
	if (otazky.length <= n) {
		document.getElementById("form").style.visibility = 'hidden';
		document.getElementById("otazkaCislo").style.visibility = 'hidden';
		document.getElementById("dalsi").style.visibility = 'hidden';

		document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' +
				'<p>Špatných odpovědí: ' + spatne + '</p>' +
				'<button id="spatneOtazky" type="button" onclick=nactiSpatne()>Znovu špatné otázky</button>';
		return;
	}

	while (true) {
		x = Math.floor((Math.random() * otazky.length));
		if (odpovezene.indexOf(x) >= 0)
			;
		else
			break;
	}

	document.getElementById('otazkaCislo').innerHTML = "Otázka " + (n + 1) + " z " + (otazky.length);
	document.getElementById("check").style.visibility = 'hidden';
	document.getElementById("dalsi").style.visibility = 'hidden';
	otazka = otazky[x];
	document.getElementById('otazka').innerHTML = '<div id="form">' +
			otazka.otazka + ': <br><input id="id1" type="text" name="question" onkeypress="isEnter()">' +
			'<input id="end" type="button" value="Odpovědět" onclick=check()>' +
			'</div>';

	document.getElementById("id1").focus();
}

function nactiSpatne() {
	document.getElementById("form").style.visibility = 'visible';
	document.getElementById("otazkaCislo").style.visibility = 'visible';
	document.getElementById("dalsi").style.visibility = 'visible';
	document.getElementById('otazka').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';

	otazky = [];
	otazky = spatneOtazky;
	spatneOtazky = [];
	n = 0;
	x = 0;
	spravne = 0;
	spatne = 0;
	odpovezene = [];
	nactiOtazku();
}

function isEnter(e) {
	if ((event.which == 13 || event.keyCode == 13)) {
		if (document.getElementById("dalsi").style.visibility == 'visible') {
			nactiOtazku();
		} else {
			check();
		}
	}
}

function check() {
	//document.getElementById("check").innerHTML = document.getElementById("id1").value;
	document.getElementById("check").style.visibility = 'visible';
	if (document.getElementById("id1").value.toLowerCase() == otazka.odpoved.toLowerCase()) {
		document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
		spravne++;
	} else {
		document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
		spatne++;
		spatneOtazky.push(otazka)
	}

	if (otazky.length > n) {
		odpovezene.push(x);
		n++;

		document.getElementById("end").style.visibility = 'hidden';
		document.getElementById("dalsi").style.visibility = 'visible';
	}
	/*else{
	 document.getElementById("form").remove();
	 document.getElementById("otazkaCislo").remove();;
	 document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' + 
	 '<p>Špatných odpovědí: ' + spatne + '</p>'
	 }*/
}

function zalozOtazky() {
	pridejOtazku(
			"Fáze tvůrčího procesu, kdy jedinec rozvíjí svou aktivitu a hledá různá vhodná řešení, vymýšlí, jaké postupy vedou k cíli, zkouší porovnávat odlišné přístupy, se nazývá ............ (doplňte jedno slovo).",
			"inkubace");
	pridejOtazku(
			"Jedna z vlastností divergentního myšlení, schopnost podívat se na problém novým pohledem, jinak než dosud, schopnost najít nový směr řešení, se nazývá ............",
			"redefinice");
	pridejOtazku(
			"Schopnost abstraktních operací označujeme pojmem inteligence _____ (doplňte slovo).",
			"teoretická");
	pridejOtazku(
			"Inteligence má vrozenou složku, označovanou jako inteligence..(použijte cizí termín) _____ (doplňte slovo).",
			"Fluidní");
	pridejOtazku(
			"Tři typy osobností, rozlišuje podle stavby těla svých pacientů německý psychiatr (uveďte příjmení) _____ (doplňte slovo).",
			"Kretschmer");
	pridejOtazku(
			"Poznávací procesy označujeme také jako procesy _____ (doplňte slovo).",
			"kognitivní");
	pridejOtazku(
			"Motivace je určitý vztah člověka ke skutečnosti, k věcem i ostatním lidem. Zahrnuje jak vnitřní motivy tak vnější pobídky a _____ (doplňte slovo).",
			"cíle");
	pridejOtazku(
			"Autor, který provedl první měření intelektových schopností, se nazýval ............ (uveďte pouze příjmění).",
			"Binet");
	pridejOtazku(
			"Inteligence má dvě složky - vrozenou, označovanou jako fluidní inteligence, a druhou složku nazývanou inteligence ..............",
			"krystalická");
	pridejOtazku(
			"Vyvíjení logických závěrů jediným možným postupem třeba na principu dedukcí se nazývá ............... myšlení (doplňte jedno slovo).",
			"konvergentní");
	pridejOtazku(
			"Jakými vrozenými vlastnostmi nervových procesů je podle I.P.Pavlova podmíněn temperament? Jde o sílu, vyrovnanost _____ (doplňte slovo).",
			"pohyblivost");
	pridejOtazku(
			"Porovnejte typy vyšší nervové činnosti s antickými temperamentovými typy - podle I. P. P. silnému, nevyrovnanému typu odpovídá _____ (doplňte slovo).",
			"cholerik");
	pridejOtazku(
			"Před první světovou válkou měřil inteligenci u větší skupiny dětí _____ (uveďte příjmení).",
			"Binet");
	pridejOtazku(
			"Poměrně trvalé, v čase stálé způsoby, jak daná osoba myslí, vnímá, pamatuje si a řeší problémy, se nazývají ............ (doplňte dvě slova).",
			"poznávací styly");
	pridejOtazku(
			"Nejvíce zkoumané jsou dva odlišné poznávací styly : globální a _____ (doplňte slovo).",
			"analytický");
	pridejOtazku(
			"Obecná schopnost psychického přizpůsobení se člověka novým životným podmínkám a úkolům se nazývá .............",
			"inteligence");
	pridejOtazku(
			"Tři typy osobností, rozlišuje podle stavby těla svých pacientů německý psychiatr (uveďte příjmení) _____ (doplňte slovo).",
			"Kretschmer");
	pridejOtazku(
			"Pozornost je z fyziologického hlediska označována jako stav _____ (doplňte slovo).",
			"aktivace");
	pridejOtazku(
			"Zakladatelem nauky o stresu byl Hans _____ (doplňte příjmení)",
			"Selye");
	pridejOtazku(
			"Podle základního členění můžeme stresory rozdělit na tělesné a _____ (doplňte slovo).",
			"duševní");
	pridejOtazku(
			"Anticipační stres je stres z _____ (doplňte slovo).",
			"očekávání");
	pridejOtazku(
			"Způsob myšlení, kdy je problém řešen deduktivně s jediným logickým závěrem, nazval Guilford jako myšlení _____ (doplňte slovo).",
			"konvergentní");
	pridejOtazku(
			"Schopnosti, které mimo sociální inteligence zahrnují i schopnost úspěšně zvládat vlastní život, označujeme širším pojmem inteligence _____ (doplňte slovo).",
			"emocionální");
	pridejOtazku(
			"Subsystém osobnosti, který umožňuje kontrolu a řízení jedincova jednání podle společenských, zejména morálních požadavků, se nazývá .............",
			"charakter");
	pridejOtazku(
			"Podle stupně obecnosti rozlišujeme schopnosti obecné a _____ (doplňte slovo).",
			"speciální");
	pridejOtazku(
			"Jedna z vlastností divergentního myšlení, schopnost podívat se na problém novým pohledem, jinak než dosud, schopnost najít nový směr řešení, se nazývá ............",
			"redefinice");
	pridejOtazku(
			"Poměr mentálního věku ke skutečnému věku násobený stem se nazývá ............ (doplňte dvě slova).",
			"inteligenční kvocient");
	pridejOtazku(
			"................... úroveň značí, jak vysoký cíl si jedinec stanovuje, co chce dosáhnout. (doplňte jedno slovo)",
			"Aspirační");
	pridejOtazku(
			"Fáze tvůrčího procesu, kdy se uplatňuje nejcharaktističtěji inspirace, intuice, vzniká nové originální řešení problému, se nazývá ..........",
			"iluminace");
	pridejOtazku(
			"Vyvíjení logických závěrů jediným možným postupem třeba na principu dedukcí se nazývá ............... myšlení (doplňte jedno slovo).",
			"konvergentní");
	pridejOtazku(
			"Stres je _____ ve kterém organizmus reaguje na jakoukoli zátěž (vyberte nejvhodnější slovo).",
			"stav");
	pridejOtazku(
			"Od antiky se používají čtyři základní pojmenování typů osobnosti. Dva vůči lidem uzavřenější typy mají jeden společný faktor. Je jím _____ (doplňte slovo).",
			"introverze");
	pridejOtazku(
			"Podle typů činnosti rozlišujeme 4 druhy schopností: smyslové, rozumové, umělecké a _____ (doplňte slovo).",
			"psychomotorické");
	pridejOtazku(
			"Který z typů osobnosti A či B je více ohrožen srdečním selháním? _____ (uveďte velké písmeno)",
			"A");	
}

function pridejOtazku(otazka, odpoved) {
	var q = {
		otazka: otazka,
		odpoved: odpoved
	};

	otazky.push(q);
}