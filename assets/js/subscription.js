// put the id of subscribe button below
// let btn = document.getElementById('subscribeBtn');
// btn.addEventListener('click', contactiot);

const form = document.getElementById('subscribe-form');
form.addEventListener('submit', function (event) {
    // your validation code here
    contactiot();
    event.preventDefault(); // prevent the form from submitting

});


async function contactiot() {
    // put the id of email field below
    let email = document.getElementById('InputEmail2');
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    };

    let bodyContent = JSON.stringify({
        "to": email.value,
        "subject": "Please verify your email",
        "text": `<p>Hello,</p><p>Please click the button below to verify your email for AUS MediaTech:</p><p><a href="https://api.techkmr.com/subscribe?email=${email.value}"><button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Verify Email</button></a></p><p>Thank you!</p>`,
        "AuthToken": "NjAwNjA1MzQ0N0BuYXppZg=="
    });

    let response = await fetch("https://api.techkmr.com/mail/send-mail", {
        method: "POST",
        body: bodyContent,
        headers: headersList
    });

    let data = await response.text();
    console.log(data);

}


