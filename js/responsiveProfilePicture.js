//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

//----Responcive profile picture----\\


    function repositionProfilePicture () {
        intro.style.top = ((window.innerHeight / 4 + document.body.scrollTop) / 6) + "px";
    }
    OnScroll["ProfilePicture"] = repositionProfilePicture;

    var profilePicture = document.getElementById('profilePicture');
    function resetProfilePicture() {
        profilePicture.src = 'img/profilePicture.jpg';
    }

    function ActivateProfilePicture () {
        profilePicture.src = 'img/profileGif.gif';
        setTimeout( resetProfilePicture, 2700 );
    }

    Start["profilePictureStart"] = function () {
        ActivateProfilePicture();
        repositionProfilePicture();
    }
