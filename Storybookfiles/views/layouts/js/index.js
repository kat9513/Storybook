$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var categories = $("#categories").val();
        var adjective = $("#adjective").val().trim();
        var noun = $("#noun").val().trim();
        var verb = $("#verb").val().trim();
        var adverb = $("adverb").val().trim();
        var dataInput = {
            categories: categories,
            adjective: adjective,
            noun: noun,
            verb: verb,
            adverb: adverb
        }
        $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            //Must match with API (app.post("/api/examples"))
            url: "api/examples",
            data: JSON.stringify(dataInput)
        }).done(function (data) {
        console.log(data);
        })
       
        console.log("hi");
        console.log(categories, adjective);
    });
});
