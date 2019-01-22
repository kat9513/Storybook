$.ajax({
    headers: {
        "Content-Type": "application/json"
    },
    type: "POST",
    //Routes must be created for add.html and all.js
    //Must match with API (app.post("/api/examples"))
    url: "api/examples",
    //ID from API
    data: JSON.stringify(ID)
}).done(function (data) {
console.log(data);
})