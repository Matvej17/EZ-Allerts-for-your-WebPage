function ezAlerts(status, message) {
    if ( $(".save-alert-container").length === 0 ) {
        $("<div class='save-alert-container' data-id='1'></div>").appendTo("body");
    }

    let id = $(".save-alert-container").data("id");

    $("<div class='save-alert-box' id='alert-"+id+"'>"+message+"</div>").prependTo(".save-alert-container");
    $("#alert-"+id).addClass(status).fadeIn();

    $(".save-alert-container").data("id", id+1);

    setTimeout( function() {
        $("#alert-"+id).fadeOut();
    }, 5000);
}