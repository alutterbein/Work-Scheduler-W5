// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
// // var saveBtn = document.querySelector("#saveBtn1") 
// // var description = document.querySelector("#description1")


// //   saveBtn.addEventListener("click", function(event) {
// // event.preventDefault();
// // var scheduleInput = description.value;
// // localStorage.setItem("description1", scheduleInput);
// var saveBtn = document.querySelector("#saveBtn1");
// var description = document.querySelector("#description1");

// saveBtn.addEventListener("click", function(event) {
//     // If #saveBtn1 is inside a form, prevent form submission
//     event.preventDefault();

//     var scheduleInput = description.value;
//     localStorage.setItem("description1", scheduleInput);



//   })}
$(function () {
  var saveBtn = document.querySelector("#saveBtn1");
  var description = document.querySelector("#description1");
//added ids to html just to get the save to work, likely will mess up rest of project
  function populateDescription() {
      var savedValue = localStorage.getItem("description1");
      if (savedValue !== null) {
          description.value = savedValue;
      }
  }

  populateDescription();
  
  saveBtn.addEventListener("click", function(event) {
      event.preventDefault();

      var scheduleInput = description.value;
      localStorage.setItem("description1", scheduleInput);
      
  });
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?





  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

