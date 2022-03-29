$("foods-list").hide();
$("#pizzas").show();

$(".foods-nav a").on("click", function() {
    let foodButton = $(this).attr("href");
    $("foods-list").hide();
     $(foodButton).show();
 
     $(".foods-nav a").removeClass("active");
     $(this).addClass("active");
 })

$(".pizzas-button").on("click", function() {
    $("#pizzas").show();
    $("#combos").hide();
    $("#snacks").hide();
    $("#desserts").hide();
    $("#drinks").hide();
    $(this).addClass("active");
    $(".combos-button").removeClass("active");
    $(".desserts-button").removeClass("active");
    $(".snacks-button").removeClass("active");
    $(".drinks-button").removeClass("active");
})

$(".combos-button").on("click", function() {
    $("#combos").show();
    $("#pizzas").hide();
    $("#desserts").hide();
    $("#snacks").hide();
    $("#drinks").hide();
    $(this).addClass("active");
    $(".pizzas-button").removeCLass("active");
    $(".desserts-button").removeCLass("active");
    $(".snacks-button").removeCLass("active");
    $(".drinks-button").removeCLass("active");
})

$(".desserts-button").on("click", function() {
    $("#desserts").show();
    $("#pizzas").hide();
    $("#combos").hide();
    $("#drinks").hide();
    $("#snacks").hide();
    $(this).addClass("active");
    $(".pizzas-button").removeClass("active");
    $(".combos-button").removeClass("active");
    $(".snacks-button").removeClass("active");
    $(".drinks-button").removeClass("active");
})

$(".drinks-button").on("click", function() {
    $("#drinks").show();
    $("#pizzas").hide();
    $("#combos").hide();
    $("#desserts").hide();
    $("#snacks").hide();
    $(this).addClass("active");
    $(".pizzas-button").removeClass("active");
    $(".combos-button").removeClass("active");
    $(".snacks-button").removeClass("active");
    $(".desserts-button").removeClass("active");
})

$(".snacks-button").on("click", function() {
    $("#snacks").show();
    $("#pizzas").hide();
    $("#combos").hide();
    $("#drinks").hide();
    $("#desserts").hide();
    $(this).addClass("active");
    $(".pizzas-button").removeClass("active");
    $(".combos-button").removeClass("active");
    $(".desserts-button").removeClass("active");
    $(".drinks-button").removeClass("active");
})