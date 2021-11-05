<?php include 'header.php'?> 
<?php include 'header-2.php'?>     
<?php include 'dashboard.php'?>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">User Information</h1>
      </div>
        <div class="container">
            <div id="table-park">
              <table class="table" id="#table_content">
                  <thead>
                    <tr>
                      <th scope="col">Num</th>
                      <th scope="col">User ID</th>
                      <th scope="col">First Name</th>
                       <th scope="col">Lastname</th>
                      <th scope="col">Email</th>
                       <th scope="col">Contact Number</th>
                      
                    </tr>
                  </thead>
                  <tbody id="tbody2"></tbody>
              </table>
            </div>
          </div>
          <div class="container">
              <div class="park-button">
                
              </div>
          </div>
      </div>
    </main>
  </div>
</div>

<script src="./js/user/show_user.js" type="Module"></script>
<?php include 'footer.php'?>






