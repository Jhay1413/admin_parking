<?php include 'header.php'?> 
<?php include 'header-2.php'?>     
<?php include 'dashboard.php'?>



    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Parking Lots</h1>
      </div>
        <div class="container mt-3">
           
              <table class="table" id="#table_content">
                  <thead>
                      <th>Parking Number</th>
                      <th >Parking lot department</th>
                      <th >Parking lot location</th>
                      <th >Parking lot Description</th>
                      <th>Parking lot Status</th>
                      <th >Parking lot ID</th>
                      <th >Parking lot name</th>
                      <th >Settings</th>
                  </thead>
                  <tbody id="tbody1"></tbody>
              </table>
              <div class="park-button">
              <a href="park_form.php" class="btn btn-primary stretched-link">Add Parking lot</a>
              
          </div>
      </div>
    </main>
  </div>
</div>

<script src="./js/parking/show_park.js" type="Module"></script>

<?php include 'footer.php'?>






