// Functions imbrication

function saveFile(){ //it's an exemple
    console.log("file saved.")
}

function updateProfile(){
    console.log("Profile updated.")
}

function modifyProfilePicture(){
    saveFile();
    updateProfile();
}

modifyProfilePicture();

// similar to python.