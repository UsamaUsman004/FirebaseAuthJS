//Facebook Authentication

const facebookLogin = () => {
	var provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  var myuser = user.displayName;
	  window.location="home.html";

	


	  console.log(user.displayName);
	  // ...
	}).catch(function(error) {

		console.log(error.message);
	});

}

const signout = () =>{
	firebase.auth().signOut().then(()=>{
		window.location="index.html"

	})
	.catch(()=>{

	})

}


// Email Authentication


//For SignUp
let SignUp =()=>{
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then((result) => {
		console.log(result);
	})
	.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorMessage);
})

}

//For SignIn
let SignIn = () => {
	let email = document.getElementById("SignIn_email").value;
	let password = document.getElementById("SignIn_password").value;

	firebase.auth().signInWithEmailAndPassword(email, password)
	.then((result) => {
		window.location="home.html";
		// console.log("successfully login "+result);
	})
	.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  
});
}


