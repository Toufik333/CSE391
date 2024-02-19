// document.querySelector("h1").style.color = "red";
// $("h1").css("color", "red");
$("h1").addClass("big-title margin-50");
// $("h1").text("modified text");
$("button").html("<em>Hey</em>");
$("a").attr("href", "https://www.yahoo.com"); 
$("h1").click(function() {
    $("h1").css("color", "purple");
});

for (var i=0; i<5; i++) {
    $("button").eq(i).click(function() {
        $("h1").css("color", "purple");
    });
}

$("input").keypress(function(event) {
    $("h1").text(event.key);
});
