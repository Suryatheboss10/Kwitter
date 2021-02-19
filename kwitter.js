function adduser(){
username = document.getElementById("username_input").value;
localStorage.setItem("username_input", username);
window.location="kwitter_room.html"
}