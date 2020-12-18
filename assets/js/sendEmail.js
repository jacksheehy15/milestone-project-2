
function sendMail(contactForm) {
    emailjs.send("gmail", "template_q4gpxvn", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message_query": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false
}

$('#myForm').on('submit', function (e) {
    $('#myModal').modal('show');
});