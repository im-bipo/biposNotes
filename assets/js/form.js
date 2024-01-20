function sendEmail(){
            Email.send({
                Host : "smtp.gmail.com",
                Username : "thehackerleolaurekc@gmail.com",
                Password : "123",
                To : 'bipinkhatri.ram@gmail.com',
                From : document.getElementById("email").value,
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
            message => alert(message)
            );
}