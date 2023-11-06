document.getElementById('form-c').addEventListener('submit',validateform);
function validateform(e){
    e.preventDefault();
    //declaration
    const name = document.getElementById('name-f');
    const message = document.getElementById('message');
    const subject = document.getElementById('subj');
    console.log(name.value.length);
    console.log(message.value.length);
    console.log(subject.value.length);
    let x = (name.value.length);
    let y = (message.value.length);
    let z = (subject.value.length);
    let text;
    //validation
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.match(emailRegex)) {
        alert('Invalid email address.');
    }
    if(x<5){
        alert("Invalid name");
    }
    if(y<11){
        alert("Invalid message");
    }
    if(z<5){
        alert("Invalid subject");
    }
    if(emailInput.value.match(emailRegex) && (x>=5) && (z>=5) && (y>=11)){
        alert('submitted');
    }
}