

// Function to submit Subscribe Form
script_url = "https://script.google.com/macros/s/AKfycbyx_vsyvzx6AYzVM_Gmau8SgUFk6Mrz82psC6r7G4XQBKaVh1zjQIc-x5RELBaidj-Xow/exec"
function submitForm() {
    // console.log("Function Starts")
    var name = document.getElementById("Name").value;
    var email = document.getElementById("EmailID").value;
    var url = script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    document.getElementById("SubscribeForm").reset();
}


// Function to submit event form
e_script_url = "https://script.google.com/macros/s/AKfycbzKtbdS7xtBrFnndJquFaJmwfGpm6INeeFY6FbyH0q8ikuffTwZ9hfDO-aHqKmQDwI0HA/exec"
function submitevent() {
    // console.log("Function Starts");
    var name = document.getElementById("ename").value;
    var email = document.getElementById("eemail").value;
    var college = document.getElementById("ecollege").value;
    var mobile = document.getElementById("emobilenumber").value;
    var event = document.getElementById("eevent").value;
    var url = e_script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&college=" + college + "&mobile=" + mobile + "&event=" + event + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    document.getElementById("eventform").reset();
}

