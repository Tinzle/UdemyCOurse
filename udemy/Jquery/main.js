$("button").on("click", function() {
    $("div").fadeOut(1000, function() {
        $("div").remove();
    });
});
