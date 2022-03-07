const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyB1_2kv7-WEyMe_-EGdrET_vWwe9SAw2TE",
    authDomain: "data-collection-form1.firebaseapp.com",
    databaseURL: "https://data-collection-form1-default-rtdb.firebaseio.com",
    projectId: "data-collection-form1",
    storageBucket: "data-collection-form1.appspot.com",
    messagingSenderId: "187750566134",
    appId: "1:187750566134:web:25bde3416daa2a1ae584d7",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);


//signOut
const auth = firebase.auth();
function signOut() {
    auth.signOut();
    // alert("SignOut Successfully from System");
    window.location.href = "index.html"
}

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

// dynamic fiels
// function techevent() {
//   var data = "organizer:<input type='text' id='techevent' name='organizer'><br>";
//   document.getElementById("techevent").innerHTML=data;
// }
// function sportcult() {
// 	var data = "sportName:<input type='text' id='sportcult' name='sname'><br>";
// 	document.getElementById("sportcult").innerHTML=data;
// }
// function communitystartup() {
//         var data = "organizer:<input type='text' id='communitystartup' name='organizer'><br>";
//         document.getElementById("communitystartup").innerHTML=data;
//     }
// 	function researcharticle() {
// 		var data = "sportName:<input type='text' id='researcharticle' name='sname'><br>";
// 		document.getElementById("researcharticle").innerHTML=data;
// }
// function seminar() {
//         var data = "organizer:<input type='text' id='seminar' name='organizer'><br>";
//         document.getElementById("seminar").innerHTML=data;
//     }
// 	function inovation() {
// 		var data = "sportName:<input type='text' id='inovation' name='sname'><br>";
// 		document.getElementById("inovation").innerHTML=data;
// 	}
// function populate(s1){
// 	var s1 = document.getElementById(s1);
// 	if(s1.value == "techevent"){
// 		techevent();
// 	} else if(s1.value == "sportcult"){
// 		sportcult();
// 	} else if(s1.value == "communitystartup"){
// 		communitystartup();
// 	} else if(s1.value == "researcharticle"){
// 		researcharticle();
// 	} else if(s1.value == "seminar"){
// 		seminar();
// 	} else if(s1.value == "inovation"){
// 		inovation();
// 	}
// }





document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var role = getElementVal("role");
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var enrollment = getElementVal("enrollment");
    var sem = getElementVal("sem");
    var div = getElementVal("div");
    var event = getElementVal("event");
    var sdate = getElementVal("sdate");
    var edate = getElementVal("edate");
    var level = getElementVal("level");
    var ctg = getElementVal("ctg");
    var myfile = getElementVal("myfile");
    // var techevent = getElementVal("techevent");
    // var sportcult = getElementVal("sportcult");
    // var communitystartup = getElementVal("communitystartup");
    // var researcharticle = getElementVal("researcharticle");
    // var seminar = getElementVal("seminar");
    // var inovation = getElementVal("inovation");

  //  techevent, sportcult, communitystartup, researcharticle, seminar, inovation, 
    saveMessages(role, name, emailid, msgContent, enrollment, sem, div, event, sdate, edate, level, ctg, myfile);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}
// techevent, sportcult, communitystartup, researcharticle, seminar, inovation, 
const saveMessages = (role, name, emailid, msgContent, enrollment, sem, div, event, sdate, edate, level, ctg, myfile) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        role: role,
        name: name,
        emailid: emailid,
        msgContent: msgContent,
        enrollment: enrollment,
        sem: sem,
        div: div,
        // techevent: techevent,
        // sportcult: sportcult,
        // communitystartup: communitystartup,
        // researcharticle: researcharticle,
        // seminar: seminar,
        // inovation: inovation,
        event: event,
        sdate: sdate,
        edate: edate,
        level: level,
        ctg: ctg,
        myfile: myfile,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
