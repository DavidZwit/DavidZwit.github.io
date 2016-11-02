//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

//----Responcive profile picture----\\


    function repositionProfilePicture () {
        intro.style.top = ((window.innerHeight / 4 + document.body.scrollTop) / 2) + "px";
    }
    OnScroll["ProfilePicture"] = repositionProfilePicture;

    var profilePicture = document.getElementById('profilePicture');
    function resetProfilePicture() {
        profilePicture.src = 'img/profilePicture.jpg';
    }

    function ActivateProfilePicture () {
        profilePicture.src = 'img/profileGif.gif';
        setTimeout( resetProfilePicture, 1300 );
    }

    Start["profilePictureStart"] = function () {
        ActivateProfilePicture();
        repositionProfilePicture();
    }
