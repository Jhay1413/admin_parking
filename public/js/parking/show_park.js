/*table functions */
var parking_num= 0;
var tbody = document.getElementById('tbody1');

function Add_park_table(parkid,parkname,parkdepart,parkloc,parkdesc,parkstat){
let trow = document.createElement("tr");
let td1 = document.createElement('td') ;
let td2 = document.createElement('td') ;
let td3 = document.createElement('td') ;
let td4 = document.createElement('td') ;
let td5 = document.createElement('td') ;
let td6 = document.createElement('td') ;
let td7 = document.createElement('td') ;

td1.innerHTML= ++parking_num;
td2.innerHTML = parkname;
td3.innerHTML = parkdepart;
td4.innerHTML = parkloc;
td5.innerHTML = parkdesc;
td6.innerHTML = parkstat;
td7.innerHTML = parkid;

trow.appendChild(td1);
trow.appendChild(td2);
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);
trow.appendChild(td7);

tbody.appendChild(trow);
}
function add_all_park_data(parkinglist){
parking_num = 0;
tbody.innerHTML = "";

parkinglist.forEach(element =>{
  Add_park_table
    (element.park_name,
    element.park_department,
    element.park_location,
    element.park_description,
    element.park_stat,
    element.park_id);
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
 
async function get_all_park_data(){
    const querySnapshot = await getDocs(collection(db,"parking_list"));
    var parking = [];
  
    querySnapshot.forEach(doc => {
      parking.push(doc.data());
    });
    add_all_park_data(parking);
  }
window.onload = get_all_park_data;

