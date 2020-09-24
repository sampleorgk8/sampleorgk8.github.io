// config firebase
var firebaseConfig = {
    apiKey: "AIzaSyCG4rTELNxb3LpOa6D5Aqy8qUCA74x2CmM",
    authDomain: "fb-test-f79cc.firebaseapp.com",
    databaseURL: "https://fb-test-f79cc.firebaseio.com",
    projectId: "fb-test-f79cc",
    storageBucket: "fb-test-f79cc.appspot.com",
    messagingSenderId: "1021113582997",
    appId: "1:1021113582997:web:05ea0e8cd7270e451c629c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// test login
firebase.auth().onAuthStateChanged(user => {
  if (!!user){
    alert(`${user.displayName || user.email} ${user.uid}`);
  }
});

/*firebase.auth()
  .signInWithEmailAndPassword(
    "junk@novocin.com", 
    "fartfart"
   ).catch(function(error) {
          alert(error.message);
   }
);*/

// site navigation
$("#loginpage").hide();
alert("hid login");
$("#regpage").hide();
alert("hid reg");
$("#success").hide();
alert("hid success");


$('#loginredir').click(()=>{
  $("#welcome").hide();
  $("#loginpage").show();
});

$('#regloginredir').click(()=>{
  $("#regpage").hide();
  $("#loginpage").show();
});

$('#regredir').click(()=>{
  $("#welcome").hide();
  $("#regpage").show();
});

var error = false;

//allows to register with email & password and reset pass
$("#login").click(()=>{
  firebase.auth().signInWithEmailAndPassword($("#logemail").val(), $("#password").val()).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    error = true;
    alert(errorMessage, errorCode);
  }).then(() =>{if(!error){
    $("#success").show();
    $("#loginpage").hide();
  }});
});



$("#register").click(()=>{
  let pwd1 = $("#password1").val();
  let pwd2 = $("#password2").val();
  if (pwd1 == pwd2){
    firebase.auth().createUserWithEmailAndPassword($("#regemail").val(), $("#password1").val()).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  } else {
    alert("Passwords don't match");
  }
});
$("#reset").click(()=>{
  firebase.auth().sendPasswordResetEmail($("#email").val());
});
