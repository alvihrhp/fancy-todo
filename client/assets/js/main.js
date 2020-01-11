//Google SignIn
function onSignIn(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        method: 'post',
        url: 'http://localhost:3000/user/openAuth',
        data: {
            g_token: id_token
        }
    })
    .done(response => {
        console.log(response);
    })
    .fail(error => {
        console.log(error);
    })
}

//Google SignOut
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}

$(document).ready(function() {
    console.log('JALAN')
})