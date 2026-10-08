// TOGGLE BUTTON

// When the user clicks the About button
$("#aboutBtn").click(function () {

// Show or hide the semester information
$("#aboutText").slideToggle();

});

// HOVER EVENT

// When the mouse enters a course card
$(".course-card").hover(

function () {

```
// Increase the size of the card
$(this).css("transform", "scale(1.05)");
```

},

function () {

```
// Return the card to its original size
$(this).css("transform", "scale(1)");
```

}

);

// CHANGE EVENT

// Detect when the user selects a course
$("#course").change(function () {

// Get the selected course
let course = $(this).val();

// Display selected course
if (course !== "") {

```
$("#selectedCourse").text(
  "You selected: " + course
);
```

} else {

```
// Clear the message
$("#selectedCourse").text("");
```

}

});

// ACCORDION + EVENT DELEGATION

// Use .on() for event delegation
$("#faqContainer").on(
"click",
".question",
function () {

```
// Find the answer immediately
// after the clicked question
$(this).next(".answer").slideToggle();
```

}
);

// OPEN MODAL

// When Contact Us button is clicked
$("#contactBtn").click(function () {

// Display the modal
$("#contactModal").css("display", "flex");

});

// CLOSE MODAL

// When close button is clicked
$("#closeBtn").click(function () {

// Hide the modal
$("#contactModal").fadeOut();

});

// SUBMIT BUTTON

$("#submitBtn").click(function () {

// Display a simple message
alert("Thank you! Your message has been submitted.");

});
// TOGGLE BUTTON

// When the user clicks the About button
$("#aboutBtn").click(function () {

// Show or hide the semester information
$("#aboutText").slideToggle();

});

// HOVER EVENT

// When the mouse enters a course card
$(".course-card").hover(

function () {

```
// Increase the size of the card
$(this).css("transform", "scale(1.05)");
```

},

function () {

```
// Return the card to its original size
$(this).css("transform", "scale(1)");
```

}

);

// CHANGE EVENT

// Detect when the user selects a course
$("#course").change(function () {

// Get the selected course
let course = $(this).val();

// Display selected course
if (course !== "") {

```
$("#selectedCourse").text(
  "You selected: " + course
);
```

} else {

```
// Clear the message
$("#selectedCourse").text("");
```

}

});

// ACCORDION + EVENT DELEGATION

// Use .on() for event delegation
$("#faqContainer").on(
"click",
".question",
function () {

```
// Find the answer immediately
// after the clicked question
$(this).next(".answer").slideToggle();
```

}
);

// OPEN MODAL

// When Contact Us button is clicked
$("#contactBtn").click(function () {

// Display the modal
$("#contactModal").css("display", "flex");

});

// CLOSE MODAL

// When close button is clicked
$("#closeBtn").click(function () {

// Hide the modal
$("#contactModal").fadeOut();

});

// SUBMIT BUTTON

$("#submitBtn").click(function () {

// Display a simple message
alert("Thank you! Your message has been submitted.");

});