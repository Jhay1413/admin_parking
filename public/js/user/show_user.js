/*table functions */
var stud_num= 0;
var tbody = document.getElementById('tbody2');

function Add_user_table(userid,fname,lname,email,contact){
let trow = document.createElement("tr");
let td1 = document.createElement('td') ;
let td2 = document.createElement('td') ;
let td3 = document.createElement('td') ;
let td4 = document.createElement('td') ;
let td5 = document.createElement('td') ;
let td6 = document.createElement('td') ;


td1.innerHTML= ++stud_num;
td2.innerHTML = userid;
td3.innerHTML = fname;
td4.innerHTML = lname;
td5.innerHTML = email;
td6.innerHTML = contact;


trow.appendChild(td1);
trow.appendChild(td2);
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);

tbody.appendChild(trow);

}
function add_all_user_data(userlist){
stud_num = 0;
tbody.innerHTML = "";

userlist.forEach(element =>{
  Add_user_table
    (element.user_id,
    element.f_name,
    element.l_name,
    element.email,
    element.contact);
});
}

/* Firestore Config */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";

const firebaseConfig = 
{
  apiKey: "AIzaSyA1Q6JqK380uoPjLZMHP0iaWjrXQiw1XyU",
  authDomain: "parkingfire-f394b.firebaseapp.com",
  projectId: "parkingfire-f394b",
  storageBucket: "parkingfire-f394b.appspot.com",
  messagingSenderId: "619845394023",
  appId: "1:619845394023:web:9c482cd0cd08da85edbec2",
  measurementId: "G-3502ZN97Q4"
}
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import  {getFirestore, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField}
from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

const db = getFirestore();
 
async function get_all_user_data(){
  
    const querySnapshot = await getDocs(collection(db,"user_stud"));
    var user = [];
  
    querySnapshot.forEach(doc => {
      user.push(doc.data());
    });
  
    add_all_user_data(user);
  }
window.onload = get_all_user_data;

