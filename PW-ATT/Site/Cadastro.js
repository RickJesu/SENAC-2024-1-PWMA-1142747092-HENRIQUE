function onGoogleSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Faça o envio dos dados para o servidor aqui
}

function renderGoogleButton() {
    gapi.signin2.render('google-signin-button', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onGoogleSignIn,
        'onfailure': function(error) {
            console.log(error);
        }
    });
}

// Configuração do cliente Facebook
window.fbAsyncInit = function() {
    FB.init({
        appId      : 'YOUR_FACEBOOK_APP_ID',
        cookie     : true,
        xfbml      : true,
        version    : 'v13.0'
    });

    document.getElementById('facebook-signin-button').addEventListener('click', function() {
        FB.login(function(response) {
            if (response.authResponse) {
                FB.api('/me', {fields: 'name,email,picture'}, function(response) {
                    console.log('Successful login for: ' + response.name);
                    console.log('Email: ' + response.email);
                    console.log('Picture: ' + response.picture.data.url);

                    // Faça o envio dos dados para o servidor aqui
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'public_profile,email'});
    });
};

// Carregar o SDK do Facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Inicializar o botão de login do Google
function initialize() {
    renderGoogleButton();
}

window.onload = initialize;