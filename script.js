document.getElementById("orderForm").onsubmit = function (e) {
    e.preventDefault();
    
    var formData = {
        email: document.getElementById("email").value,
        fullName: document.getElementById("fullName").value,
        idNumber: document.getElementById("idNumber").value,
        snacks: document.getElementById("snacks").value,
        candy: document.getElementById("candy").value,
        drinks: document.getElementById("drinks").value,
        fork: document.getElementById("fork").checked ? "Yes" : "No",
        total: document.getElementById("total").value
    };

    fetch(https://script.google.com/macros/s/AKfycbzjIh5T85hqpsIen7v3bJN0VRZ0Uyt_H_6G5WaL4ho7n1rg6_sc1qiOL2WU66SFW0VdWw/exec, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(() => document.getElementById("status").innerText = "✅ Order Submitted!")
    .catch(() => document.getElementById("status").innerText = "❌ Error Submitting Order");
};
