const firebaseConfig = {
      apiKey: "AIzaSyDq7N0LiOFuSRHcyXYklHO8VSQEzagg3w0",
      authDomain: "adv-class-93.firebaseapp.com",
      databaseURL: "https://adv-class-93-default-rtdb.firebaseio.com",
      projectId: "adv-class-93",
      storageBucket: "adv-class-93.appspot.com",
      messagingSenderId: "149691269050",
      appId: "1:149691269050:web:a69468fbabce56a4c42783",
      measurementId: "G-RMV79HJ1CD"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
