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
 

/* add parking form */
  let p_name = document.getElementById('pname');
  let p_depart = document.getElementById('pdepart');
  let p_id = document.getElementById('pid');
  let p_loc = document.getElementById('ploc');
  let p_desc = document.getElementById('pdesc');
  let p_stat = document.getElementById('p_stat');
  let instbtn= document.getElementById('sub_btn');
  let selbtn= document.getElementById('select_btn');
  let upbtn= document.getElementById('update_btn');
  let delbtn= document.getElementById('delete_btn');

async function Add_park_Document_CostumID(){
  var ref = doc(db,"parking_list",p_id.value);
  const docRef = await setDoc(
    ref,
    {
       park_name: p_name.value,
       park_department: p_depart.value,
       park_id: p_id.value,
       park_location: p_loc.value,
       park_description: p_desc.value,
       park_stat: p_stat.value
    }
  )
  .then(()=>
  {
    alert ("data has been saved !");
    
  })
  .catch((error) =>{
    alert ("data was not been saved, error !" + error);
  });
}
async function Get_park_Document(){
  var ref = doc(db,"parking_list",p_id.value);
  const docSnap = await getDoc(ref);

  if(docSnap.exists()){
    p_name.value = docSnap.data().park_name;
    p_depart.value = docSnap.data().park_department;
    p_loc.value = docSnap.data().park_location;
    p_desc.value = docSnap.data().park_description;
    p_stat.value = docSnap.data().park_stat;
  }
  else
  {
    alert("no such documents");
  }

 }
async function Update_park_Document(){
  var ref = doc(db,"parking_list",p_id.value);
  await updateDoc
  (
    ref,{
      park_name: p_name.value,
      park_department: p_depart.value,
      park_location: p_loc.value,
      park_description: p_desc.value,
      park_stat: p_stat.value

    }
  )
  .then(()=>{
    alert ("data has been Updated !");
  })
  .catch((error) =>{
   alert ("data was not successfully updated, error !" + error);
  });
}
async function delete_park_Document(){  
  var ref = doc(db,"parking_list",p_id.value);
  const docSnap = await getDoc(ref);

  if(!docSnap.exists())
  {
    alert("Documents does not exist !");
    return;
  }
  await deleteDoc(ref)
  .then(()=>{
    alert ("data has deleted successfully !");
  })
  .catch((error) =>
  {
    alert ("data was not successfully deleted, error !" + error);
  });
   
}


/* buttons */
if(instbtn){
  instbtn.addEventListener("click", Add_park_Document_CostumID);
}
if(selbtn){
  selbtn.addEventListener("click", Get_park_Document);
}
if(upbtn){
  upbtn.addEventListener("click", Update_park_Document);
}
if(delbtn){
  delbtn.addEventListener("click", delete_park_Document);
}