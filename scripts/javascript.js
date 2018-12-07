function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openTheBoringStuff() {
  document.getElementById("teesAndCees").style.display = "block";
  document.getElementById("teesAndCees").style.zIndex = "4";
}

function closeTheBoringStuff() {
  document.getElementById("teesAndCees").style.display = "none";
}

function seeAVisionOfUtopia() {
  document.getElementById("visionOfUtopia").style.display = "block";
  document.getElementById("visionOfUtopia").style.zIndex = "4";
}

function closeAVisionOfUtopia() {
  document.getElementById("visionOfUtopia").style.display = "none";
}

function openBankDetails() {
  document.getElementById("bankDetails").style.display = "block";
  document.getElementById("bankDetails").style.zIndex = "4";
}

function closeBankDetails() {
  document.getElementById("bankDetails").style.display = "none";
}

var counter = 1;
function swopScreens() {
  counter++;
  if (counter % 2 != 0){
	document.getElementById("toTheRight").style.zIndex = "1";
	document.getElementById("toTheLeft").style.zIndex = "2";
  }else{
	document.getElementById("toTheLeft").style.zIndex = "1";
	document.getElementById("toTheRight").style.zIndex = "2";
  }
}

function swopToRight() {
  if (document.getElementById("toTheRight").style.zIndex == "2"){
	console.log("inside1");
	document.getElementById("toTheRight").style.zIndex = "1";
	document.getElementById("toTheLeft").style.zIndex = "2";
	console.log("inside2");
  }else{
	console.log(document.getElementById("toTheRight").style.zIndex);
	document.getElementById("toTheLeft").style.zIndex = "1";
	document.getElementById("toTheRight").style.zIndex = "2";
	console.log("inside4");
  }
}

function goToGoogleForm() {
  window.location.assign("https://docs.google.com/forms/d/e/1FAIpQLSf533yWAdkGpnvlHJYP39hXUnn-1NQkFHyqhkNWElpuidl8SA/viewform?usp=sf_link");
}

function goToMap() {
  window.location.assign("https://goo.gl/maps/pdQQuBTNz332");
}

function sendEmail() {
  openBankDetails();
}

function chooseKak() {
  document.getElementById("attitude").value = "kak";
  document.getElementById("lekker").style.backgroundColor = "white";
  document.getElementById("kaklekker").style.backgroundColor = "white";
  document.getElementById("kak").style.backgroundColor = "black";
}

function chooseLekker() {
  document.getElementById("attitude").value = "lekker";
  document.getElementById("kak").style.backgroundColor = "white";
  document.getElementById("kaklekker").style.backgroundColor = "white";
  document.getElementById("lekker").style.backgroundColor = "black";
}

function chooseKakLekker() {
  document.getElementById("attitude").value = "kaklekker";
  document.getElementById("lekker").style.backgroundColor = "white";
  document.getElementById("kak").style.backgroundColor = "white";
  document.getElementById("kaklekker").style.backgroundColor = "black";
}

function goToArtist(number) {
	switch (number) {
		case 1:
			window.open("https://soundcloud.com/jnn-kpn", "_blank");
			break;
		case 2:
			window.open("https://soundcloud.com/1991-global/gourmet-delicious", "_blank");
			break;
		case 3:
			window.open("https://soundcloud.com/wetdreamsrecordings/sets/rose-bonica-dont-let-it-get-to", "_blank");
			break;
		case 4:
			window.open("https://soundcloud.com/albanylore/rest-easy-genie", "_blank");
			break;
		case 5:
			window.open("https://www.mixcloud.com/Redbullstudioct/red-bull-studio-guest-dj-mix-006-lady-venom/", "_blank");
			break;
		case 6:
			window.open("https://soundcloud.com/intrinsic-audio-sessions/schumi-explorations-ep-snippet-intrinsic-audio-01", "_blank");
			break;
		case 7:
			window.open("https://soundcloud.com/garyreubenmorris/gary-morris-live-set-welcome-park-soiree-december-2017", "_blank");;
			break;
		case 8:
			window.open("https://soundcloud.com/smalltownbeat/kevin-murning-smalltown-beat-2018-live-recording", "_blank");
			break;
		case 9:
			window.open("https://soundcloud.com/hear_capetown/hearcast_005-joymode", "_blank");
			break;
		case 10:
			window.open("https://soundcloud.com/sukummah/20180324a", "_blank");
			break;
		case 11:
			window.open("https://www.instagram.com/qqueezyy/?hl=en", "_blank");
			break;
		case 12:
			window.open("https://soundcloud.com/jonlaura/rose-gold-rose", "_blank");
			break;
		case 13:
			window.open("https://soundcloud.com/decodedmagazine/exclusive-premiere-thor-rixon-old-strandfontein-road-get-physical-music", "_blank");
			break;
		case 14:
			window.open("https://soundcloud.com/1991-global/maxime-alexander-salon-rouge", "_blank");
			break;
		case 15:
			window.open("https://www.mixcloud.com/TheOtherRadio/the-other-djs-ctemf-mix/", "_blank");
			break;
		case 16:
			window.open("https://www.mixcloud.com/TheOtherRadio/the-other-radio-10-ft-not-sorry-club/", "_blank");
			break;
		case 17:
			window.open("https://www.mixcloud.com/jarred-parenzee/may-2018-studio-mix/", "_blank");;
			break;
		case 18:
			window.open("https://soundcloud.com/fred-buddah/sets/the-hip-scientist-ep", "_blank");
			break;
		case 19:
			window.open("https://soundcloud.com/spoorpeople/trail-mix-11-t-siza-super-black-tapes-takeover", "_blank");
			break;
		case 20:
			window.open("https://www.instagram.com/sam_heuermann/?hl=en", "_blank");
			break;
		case 21:
			window.open("https://www.instagram.com/buu.jinn/", "_blank");
			break;
		case 22:
			window.open("https://www.mixcloud.com/TheOtherRadio/the-other-radio-12-ft-slow-motion-city-luis93/", "_blank");
			break;
		case 23:
			window.open("https://soundcloud.com/king-recording/cuito-4", "_blank");
			break;
		case 24:
			window.open("https://soundcloud.com/poisonoise/poisonoise-music-guest-mix-episode-25-cody-losper", "_blank");
			break;
		case 25:
			window.open("https://soundcloud.com/soundparkmusic/vicmari-soundpark-b2", "_blank");
			break;
		case 26:
			window.open("https://www.mixcloud.com/Future_Nostalgia/michael-bhatchjolly-carp_garden-party_retreat_capetown/", "_blank");
			break;
	}
}