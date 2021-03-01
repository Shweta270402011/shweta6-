var firebaseConfig = {
    apiKey: "AIzaSyBR94v-wfIG-_4lPNQzz4zdE7iNk45ucgA",
    authDomain: "project-94-30425.firebaseapp.com",
    projectId: "project-94-30425",
    storageBucket: "project-94-30425.appspot.com",
    messagingSenderId: "999331414907",
    appId: "1:999331414907:web:33af01c49683e0a0ccb3de"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

function addRoom() {
    rName = document.getElementById("room_name").value;
    firebase.database().ref("/").child(rName).update({
        purpose: "adding room name"
    });
    localStorage.setItem("Room name", rName);

}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room name");
    window.location = "index.html";
}