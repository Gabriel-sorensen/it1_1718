
var navnE = document.querySelector(".navn");
var startE = document.querySelector(".start");
var klikkE = document.querySelector(".klikk");
var klikkverdiE = document.querySelector(".klikkverdi");
var listeE = document.querySelector(".poengliste")

var antKlikk = 0;

db.collection("spill").add({
    navn: "test",
    poeng: 10
});

klikkE.addEventListener("click", function () {
    antKlikk = antKlikk + 1;
    klikkverdiE.innerHTML = antKlikk;
});

startE.addEventListener("click", function () {
   antKlikk = 0;
   klikkverdiE.innerHTML = antKlikk;

   setTimeout(function () {
       alert(antKlikk);
   }, 3000);
});

firebase.initializeApp({
    apiKey: "AIzaSyD_43D_eB8u1kkfjcsch5RROSUzF6TqPhw",
    authDomain: "klikkespillet-aca56.firebaseapp.com",
    projectId: "klikkespillet-aca56"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


var maooe = db.collection("spill").orderBy("poeng", "desc").limit(20);

mappe.onSnapshot(function (data) {
    var dokumenter = data.docs;

    for(var x in dokumenter){
        listeE.innerHTML += "<li>" + dokumenter[x].data().navn + ": " + dokumenter[x].data().poeng + "</li>"
    }

})