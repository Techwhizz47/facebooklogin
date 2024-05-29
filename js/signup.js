document.getElementById('login').onclick = function(){

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;


    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
      }).then(()=>{window.location.href = "/home.html"})
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
}


