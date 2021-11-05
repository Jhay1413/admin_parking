
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
  let fname = document.getElementById('fname');
  let lname = document.getElementById('lname');
  let email = document.getElementById('email');
  let userid = document.getElementById('userid');
  let contact = document.getElementById('contact');
  let password = document.getElementById('password');

  let seltn = document.getElementById('sub_btn');
  /*
  let selbtn= document.getElementById('select_btn');
  let upbtn= document.getElementById('update_btn');
  let delbtn= document.getElementById('delete_btn');
*/
async function Add_user_Document_CostumID(){
  var ref = doc(db,"user_stud",userid.value);
  const docRef = await setDoc(
    ref,
    {
       f_name: fname.value,
        l_name: lname.value,
       user_id: userid.value,
       email: email.value,
       contact:contact.value,
       password: password.value,
      
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
/*
async function Get_user_Document(){
  var ref = doc(db,"user_stud",user_id.value);
  const docSnap = await getDoc(ref);

  if(docSnap.exists()){
    fname.value = docSnap.data().f_name;
    lname.value = docSnap.data().l_name;
    email = docSnap.data().email;
    contact.value = docSnap.data().contact;
    password.value = docSnap.data().password;
  }
  else
  {
    alert("no such documents");
  }

 }
async function Update_user_Document(){
  var ref = doc(db,"user_stud",user_id.value);
  await updateDoc
  (
    ref,{
        f_name: fname.value,
        l_name: lname.value,
       email: email.value,
       contact:contact.value,
       password: password.value,
       

    }
  )
  .then(()=>{
    alert ("data has been Updated !");
  })
  .catch((error) =>{
   alert ("data was not successfully updated, error !" + error);
  });
}
async function delete_user_Document(){  
  var ref = doc(db,"user_stud",user_id.value);
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

*/
/* buttons */
if(seltn){
    seltn.addEventListener("click", Add_user_Document_CostumID);
  }
   
  


