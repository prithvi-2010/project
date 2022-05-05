// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyDJ6dq03bN4hRaqHsafXGHIU8ftF02jS18",
      authDomain: "project-kwitter-f0897.firebaseapp.com",
      databaseURL: "https://project-kwitter-f0897-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-f0897",
      storageBucket: "project-kwitter-f0897.appspot.com",
      messagingSenderId: "406810220403",
      appId: "1:406810220403:web:3596fbe54efb277e899706",
      measurementId: "G-N5R586VPE3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(Name)
{
      console.log(Name);
      localStorage.setItem("room_name",Name);
      window.location = "kwitter_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}