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
   user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
                
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    Name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+ Name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
    like_button="<button class='btn btn-warning' id="+ firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span></button><hr>";
    row = name_with_tag + message_with_tag + like_button +span_with_tag;

    document.getElementById("output").innerHTML+= row;
//End code
    } });  }); }
getData();


function updateLike(message_id)
{
    console.log("clicked on the like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(button_id).update({
          like:updated_likes
    });
}


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}