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

// loginForm
const auth = firebase.auth();

//signup function
function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    //
    promise.catch(e => alert(e.message));
}

//signIN function
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

}




//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);
        window.location.href = "form.html";
    } else {
        alert("No Active user Found");
    }
})
