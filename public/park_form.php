<?php include 'header.php' ?>
<?php include 'header-2.php'?>    
<?php include 'dashboard.php'?>

<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
    </div>
        <div class="container">
            
               
                <div class="form-group">
                    <label for="formGroupExampleInput">Parking Lot name</label>
                    <input type="text" class="form-control" name ="park_name" id="pname" placeholder="Parking Lot name">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Parking Lot Department</label>
                    <input type="text" class="form-control" name ="park_name" id="pdepart" placeholder="Parking Lot name">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Parking Lot ID</label>
                    <input type="text" class="form-control" name ="park_name" id="pid" placeholder="Parking Lot name">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Parking lot location</label>
                    <input type="text" class="form-control" name ="park_loc" id="ploc" placeholder="Parking lot ID">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Parking lot Description</label>
                    <input type="text" class="form-control" name ="park_stat" id="pdesc" placeholder="Parking lot Description">
                </div>
                <br>
                <select class="form-select" aria-label="Default select example" id="p_stat">
                    <option selected>Select status</option>
                    <option value="enable">Enable</option>
                    <option value="disable">Disable</option>
                </select>
                <br>
                <h1>NOTE !!</h1>
                <h3 class="">Enter the Parking Lot ID to Select, Delete and Update the data .</h3>
                     <br>
                    <button class="btn btn-primary" id="sub_btn" >Save</button>
                    <button class="btn btn-primary" id="select_btn" >Select</button>
                    <button class="btn btn-primary" id="update_btn" >Update</button>
                    <button class="btn btn-primary" id="delete_btn" >Delete</button>
                
               
            </div>
           
        </div>
       
        <script src="./js/parking/add_park.js" type="Module">
  
<?php include 'footer.php' ?>