# CSCI3308FinalExam
<!DOCTYPE html>
Due date: 29 April, 11:59 p.m.


You are required to complete this project individually. We will be checking for plagiarism. All parties involved in plagiarizing or cheating will receive an automatic 0 for the whole project and will be referred to the SCCR for an Honor Code violation. </strong>
      <strong>Each section of this documentation has important information to help you complete this project successfully. Please read the entire document thoroughly.</strong>
        <p class="alignleft h5">Instructions</p>

* You are allowed to reuse code, you have previously written for, or that has been provided by, this class curriculum.

* To complete this project you are allowed access to all resources. The labs and homeworks you have completed for this course should be enough resources to take this project.

* While you can use online resources to help you complete the project, you are NOT permitted to reuse any code found online, except from official documentation resources.

* Please follow the submission instructions very carefully.

* If there are errors in submission, we will not be allowing regrades. The code/work submitted will be evaluated and your scores will be evaluated accordingly.

    <div class="card card-body" id="step2">
      <div class="stepLine">
        <p class="alignleft h5">Part 1: Directory Structure
        </p>
        <button class="btn btn-primary btn-sm alignbtn" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="true" aria-controls="multiCollapseExample2"></button>
      </div>
      <div class="collapse show" id="multiCollapseExample2" style="padding-top: 30px;">
        <div class="alert alert-warning">
          <p><strong>Note: You have the freedom to rename the files to suit the naming convention for your project. However, it is advisable for you to follow the below directory structure. If you feel the need to add more files - to be able to work with docker, you may do so. Make sure to add them at the appropriate location in your directory.</strong></p>
        </div>
        <pre>        |-- YourName_FinalExam
              |-- views
                    |-- pages
                          |-- main.ejs
                          |-- reviews.ejs
                    |-- partials
                          |-- header.ejs
                          |-- menu.ejs
                          |-- footer.ejs
              |-- resources
                    |--css
                          |-- style.css (optional)
                    |--js
                          |-- script.js
              |-- test
                    |-- server.j
              |-- server.js
              |-- package.json
              |-- db_script.sql
        </pre>
      </div>
    </div>
    <div class="card card-body" id="step4">
      <div class="stepLine">
        <p class="alignleft h5">Part 2: Architecture for the website
        </p>
        <button class="btn btn-primary btn-sm alignbtn" type="button" data-toggle="collapse" data-target="#multiCollapseExample4" aria-expanded="true" aria-controls="multiCollapseExample4"></button>
      </div>
      <div class="collapse show" id="multiCollapseExample4" style="padding-top: 30px;">
        <p>You can use <strong>EITHER</strong> of the architectures below to design your website. Please refer to it carefully to understand how the different tools will be interacting with each other.</p>
        <hr>
        <dt>Architecture 1</dt>
        <hr>
        <img src= "https://cuboulder-csci-3308.herokuapp.com/IndividualProject/IP_C/ajax_call.png" style="width:100%;"><br>
        <hr>
        <dt>Architecture 2</dt>
        <hr>
        <img src="https://cuboulder-csci-3308.herokuapp.com/IndividualProject/IP_C/axios_call.png" style="width:100%;"><br>
      </div>
    </div>
    <div class="card card-body" id="step6">
      <div class="stepLine">
        <p class="alignleft h5">Part 3: API documentation and Guidelines
        </p>
        <button class="btn btn-primary btn-sm alignbtn" type="button" data-toggle="collapse" data-target="#multiCollapseExample6" aria-expanded="false" aria-controls="multiCollapseExample6"></button>
      </div>
      <div class="collapse" id="multiCollapseExample6" style="padding-top:30px;">
        <ul><li>For this exam you will be using the The Audio DB API. Here is the link: <a href="https://www.theaudiodb.com/api_guide.php" target="_blank">The Audio DB API</a></li></ul>
        <dt>Some things to note when using the API:</dt><br>
        <ul>
          <li>This is an open API. You are not required to make any keys to access the data provided by this API.</li>
          <li>You will be using the <code>/search.php</code> endpoint. You will be searching for artists by their name. Please use the appropriate parameter to make the request. The <a href="https://www.theaudiodb.com/api_guide.php" target="_blank">API documentation</a> has the required information for the parameter.</li>
        </ul>
      </div>
    </div>

    <div class="card card-body" id="step5">
      <div class="stepLine">
        <p class="alignleft h5">Part 4: To Do
        </p>
        <button class="btn btn-primary btn-sm alignbtn" type="button" data-toggle="collapse" data-target="#multiCollapseExample5" aria-expanded="true" aria-controls="multiCollapseExample5"></button>
      </div>
      <div class="collapse show" id="multiCollapseExample5" style="padding-top: 30px;">
        <div class="alert alert-warning">
          We'll provide succint instructions for you to accomplish all the tasks in the coding activity. Please refer to the output images on the right for a better idea. You have the creative freedom to design your website as long as you include all the components requested for each feature.
        </div>
        <hr>
        <h3 class="text-center">Home Page</h3>
        <hr>
        <div class="row">
          <div class="col-5">
            <p>Files modified here: <em>main.ejs, menu.ejs, header.ejs, footer.ejs, server.js</em></p>
            <p>To Do:</p>
            <ul class="list-group">
              <li class="list-group-item">Include the bootstrap library for this website.</li>
              <li class="list-group-item">Add a navigation/menu bar at the top of the page to link to the Home and Review pages. </li>
              <li class="list-group-item">A textbox that takes the search text as input. Here, it would be the name of the artist. </li>
              <li class="list-group-item">A search button that when clicked: does one of the following depending on your architecture.
                <ul>
                  <li><em>Architecture 1:</em> triggers a javascript function to make and AJAX call to the API.</li>
                  <li><em>Architecture 2:</em> makes an axios call from the server to the API.</li>
                </ul>
             </li>
              <li class="list-group-item">A route will be created on the node server that will render this page. </li>
            </ul>
          </div>
          <div class="col-7">
            <img class="rounded" src="./CSCI 3308 Individual Project_files/home.png" alt="" style="width:100%;">
          </div>
        </div>
        <hr>
        <h3 class="text-center">Search Feature</h3>
        <hr>
        <div class="row">
          <div class="col-5">
            <p>Files modified here: <em>script.js OR server.js, main.ejs</em></p>
            <p>To Do:</p>
            Upon entering some text in the textbox and clicking on the search button you created in the previous step:
            <ul class="list-group">
              <li class="list-group-item">Create a div to hold the search results when populated.</li>
              <li class="list-group-item">A javascript function on the client-side will be invoked.</li>
              <li class="list-group-item"><ul>
                <li><em>Architecture 1: </em>An AJAX call is made to the API (script.js)</li>
                <li><em>Architecture 2: </em>An axios call is made to the API (server.js)</li>
              </ul></li>
              <li class="list-group-item">Part 3 has guidelines about the API call.</li>
              <li class="list-group-item">Upon receiving the JSON response from the API, you will populate the div on the webpage that include the following information about the artist:
                <ul>
                  <li>Artist Banner</li>
                  <li>Name</li>
                  <li>Link to the Artist's website</li>
                  <li>Formation Year</li>
                  <li>Genre(s)</li>
                  <li>Bio</li>
                </ul>
              </li>
              <li class="list-group-item">You will also contain a button called "Add Review" as you can see in the image on the right.</li>
              <li class="list-group-item">Note: If the API returns more than one result, render the first result. If any of the data points do not have the expected data, label those field values as '-' or 'Link unavailable'</li>
            </ul>
          </div>
          <div class="col-7">
            <img class="rounded" src="./CSCI 3308 Individual Project_files/search.png" alt="" style="width:100%;">
          </div>
        </div>
        <hr>
        <h3 class="text-center">Add Review Modal</h3>
        <hr>
        <div class="row">
          <div class="col-5">
            <p>Files modified here: <em>script.js, main.ejs, server.js, db_script.sql</em></p>
            <p>To Do:</p>

            When the "Add review" button of a card is clicked, the following should happen:
* A bootstrap modal appears.
* The modal has a title, 2 labels, 2 text fields and a submit button.
* The text field for the name of the artist should be autopopulated and should be readonly as can be seen in the image on the right.
* When the submit button is clicked, the data from this form should be stored in the database and the user should be redirected to the reviews page (see more details in the Review Page section).
              "list-group-item">To accomplish the above task you need to:
              <ul>
                <li>Create routes on the node server to receive and store the data in the table and return the appropriate page and data.</li>
                <li>Create a database in postgres. </li>
                <li>Create a table within the database that has <code>id, tv_show, review, review_date</code> columns</li>
                <li>Note: Copy all the SQL commands that you use to create the database and table into the db_script.sql file</li>
              </ul> </li>
            </ul>
          </div>
          <div class="col-7">
            <img class="rounded" src="./CSCI 3308 Individual Project_files/modal.png" alt="" style="width:100%;">
          </div>
        </div>
        <hr>
        <h3 class="text-center">Review Page</h3>
        <hr>
        <div class="row">
          <div class="col-5">
            <p>Files modified here: <em>server.js, reviews.ejs</em></p>
            <p>To Do:</p>
            <ul class="list-group">
              <li class="list-group-item">When the submit button on the Add review modal  or the Reviews link on the nav bar is clicked, the reviews page should be rendered.</li>
              <li class="list-group-item">Create appropriate route(s) on the node server to fulfill these requests.</li>
              <li class="list-group-item">The review page should have the following:
                <ul>
                  <li>A search text box and a search button to filter the reviews based on the name of the artist.</li>
                  <li>A table with the information about the name of the artist, the review and the date the review was stored in the database.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-7">
            <img class="rounded" src="./CSCI 3308 Individual Project_files/reviews.png" alt="" style="width:100%;">
          </div>
        </div>
        <hr>
        <h3 class="text-center">Filter reviews</h3>
        <hr>
        <div class="row">
          <div class="col-5">
            <p>Files modified here: <em>reviews.ejs, server.js</em></p>
            <p>To Do:</p>
            <ul class="list-group">
              <li class="list-group-item">You will read the name of the artist entered in the search text box on the reviews page.</li>
              <li class="list-group-item">On clicking the Filter button, a server route will be called and the matching data will be returned to the table on the reviews page - as can be seen in the image on the right.</li>
              <li class="list-group-item">If there is no matching data to the artist searched, all the reviews should be populated in the table.</li>
            </ul>
          </div>
          <div class="col-7">
            <img class="rounded" src="./CSCI 3308 Individual Project_files/filtered_reviews.png" alt="" style="width:100%;">
          </div>
        </div>
        <h3 class="text-center">Review Page</h3>
        <div class="row">
          <div class="col-3">
          </div>
          <div class="col-6">
            <p>You will write a minimum of 2 test cases using mocha/chai library.</p>
          </div>
        </div>
        <hr>
        <h3 class="text-center">Hosting on Heroku</h3>
        <hr>
        <dd>Once your website is functional on your localhost, you will host it on heroku.
          <strong>If you are not using docker, you will use the git master on heroku or a private GitHub repository to deploy your code. Your code should not be published on any public repository.</strong>
          To make sure everything is working on heroku after deployment, test it by adding reviews for 2-3 different artists at the least.</dd>
          <dd>When running your heroku application, if your application does not run it with the <code>https://</code> protocol use the <code>http://</code> protocol. </dd>
      </div>
    </div>
    <div class="card card-body" id="step8">
      <div class="stepLine">
        <p class="alignleft h5">Extra Credit: Docker Implementation</p>
        <button class="btn btn-primary btn-sm alignbtn" type="button" data-toggle="collapse" data-target="#multiCollapseExample8" aria-expanded="true" aria-controls="multiCollapseExample8">Expand</button>
      </div>
      <div class="collapse show" id="multiCollapseExample8" style="padding-top: 30px;">
          <ul class="list-group">
            <li class="list-group-item">To receive extra credit for this project, you should use docker containers for deploying your application locally and on heroku.</li>
          </ul>
      </div>
    </div>
    <div class="card card-body" id="step3">
      <div class="stepLine">
        <p class="alignleft h5">Part 5: Submission Guidelines
        </p>
        <button class="btn btn-primary btn-sm alignbtn" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="true" aria-controls="multiCollapseExample3">Expand</button>
      </div>
      <div class="collapse show" id="multiCollapseExample3" style="padding-top: 30px;">
        <dt>You will be turning in your work on Canvas. You zipped folder named <code>[YourName]_IndividualProject_SetC.zip</code> will include: </dt>
        <br>
        <dd>
          <ul class="list-group">
            <li class="list-group-item">Code in the directory structure format mentioned above (and any additional files you may have added). Make sure to include all the files you are using to run your website.</li>
            <li class="list-group-item">A .txt file containing the link to your heroku app</li>
            <li class="list-group-item">When grading we should be able to run your application on the localhost. We will also be checking your application on heroku as well.</li>
          </ul>
        </dd>
      </div>
    </div>


  </main><!-- /.container -->
  <div id="bottom_nav">
    <div class="row">
      <div class="col-10">
      </div>
      <div class="col-2">
        <div class="row">
          <div class="col-2">
          </div>
          <div class="col-10">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-primary btn-block alignright expandAll" type="button">Expand All</button>
                <button class="btn btn-primary btn-block alignright collapseAll" type="button">Collapse All</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</body></html>
