
function checkCredentials() {

status = 1;
x = document.getElementById("text");

if(status==1) {
    x.style.color = 'blue';
    status = 2;
}

if(status==2) {
    x.style.color = 'red';
    status = 3;
}

if(status==3) {
    x.style.color = 'yellow';
    status = 1;
}

}

function submitform() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    document.body.appendChild(x);
    
}

