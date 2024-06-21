$(function () {
  // Event listener for save button clicks
  $("#parentContainer").on("click", ".saveBtn", function(event) {
    event.preventDefault();
    var description = $(this).siblings(".description");
    var timeBlockId = $(this).closest(".time-block").attr("id");
    localStorage.setItem(timeBlockId, description.val());
  });
  
  // Function to populate description from local storage
  function populateDescriptions() {
    $(".time-block").each(function() {
      var timeBlockId = $(this).attr("id");
      var savedValue = localStorage.getItem(timeBlockId);
      if (savedValue !== null) {
        $(this).find(".description").val(savedValue);
      }
    });
  }
// Function to update current date in the header
function updateCurrentDate() {
  var currentDate = new Date(); 
  var options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  var formattedDate = currentDate.toLocaleDateString('en-US', options); 
  $('#currentDate').text(formattedDate); 
}

  populateDescriptions();
  updateCurrentDate();



});
