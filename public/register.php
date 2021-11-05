<?php include 'header.php' ?>
<?php include 'header-2.php'?>    
<?php include 'dashboard.php'?>

<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
    </div>
    <div class="container">
       
            <div class="form-group">
                <label for="exampleInputName1">Firstname</label>
                <input type="text" class="form-control" id="fname" placeholder="Firstname">
            </div>
            <div class="form-group">
                <label for="exampleInputName1">Lastname</label>
                <input type="text" class="form-control" id="lname" placeholder="Lastname">
                
            </div>
            <div class="form-group">
                <label for="exampleInputName1">Contact number</label>
                <input type="text" class="form-control" id="contact" placeholder="Contact number">
                
            </div>
            <div class="form-group">
                <label for="exampleInputName1">User ID number</label>
                <input type="text" class="form-control" id="userid" placeholder="ID number">
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            
            <label for="exampleInputPassword1">Type of User</label>
            <div class="form-group">
                <div id="option">
                    <select class="form-select" aria-label="Default select example" id="p_stat" onchange="Disablefunc()">
                        <option selected>Select Usertype</option> 
                        <option value="stud" id="stud">Student</option>
                        <option value="emp" id="emp" >Employee</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Department</label>
                <input type="text" class="form-control" id="depart" placeholder ="Department" disabled="disabled" >
            </div>
            
            <br>
            <button class="btn btn-primary" id="sub_btn" >Submit</button>
        
    </div>
</main>
<script src="./js/user/add_user.js" type="Module"></script>
<script>
function Disablefunc() {
    //Reference the Button.
    var fsel = document.getElementById("p_stat");
    var fdepart = document.getElementById("depart");
    
    //Verify the TextBox value.
    if (fsel.value != "emp") {
        //Enable the TextBox when TextBox has value.
        fdepart.disabled = true;
        document.getElementById("depart").placeholder = "Department field is for Employee only";
    } else {
        //Disable the TextBox when TextBox is empty.
        document.getElementById("depart").placeholder = "Enter your Department.";
        fdepart.disabled = false;
        
}
}
</script>


<?php include 'footer.php' ?>