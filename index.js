

//name = window.prompt("What is your Name?")

//document.getElementById("name").textContent = name;

document.addEventListener("DOMContentLoaded", function () {

    let myname;

    document.getElementById("submit").onclick = function () {

        myname = document.getElementById("name").value;

        document.getElementById("newName").textContent = myname;

        console.log(myname);
    }

});
