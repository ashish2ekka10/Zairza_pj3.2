
var submit = document.getElementById("submit-btn");
submit.addEventListener("click",getdetails);

function getdetails(){
    var name = document.getElementById("name").value;
    var about = document.getElementById("about").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phoneno").value;
    var college = document.getElementById("college").value;

    if(!name || !about || !address || !phone || !college){
        alert("Please fill all the details");
        return;
    }

    document.getElementById("disname").innerHTML = name;
    document.getElementById("disabout").innerHTML = about;
    document.getElementById("disaddress").innerHTML = address;
    document.getElementById("disphone").innerHTML = phone;
    document.getElementById("discollege").innerHTML = college;

}

var display = document.getElementById("display");
document.getElementById("disname").innerHTML = name;