/*function sun_Click(){
    $("#sun-pic").click(function () {
        alert("SUN - The Solar System's star");
    });
}
function sun_Click() {
    alert ("SUN - The Solar System's star");
}*/
var sunInfo = function(){
    alert("SUN - The Solar System's star \nThe sun is the closest star of the \n main planets in the solar system \nThe eight main planets and even the dwarf planets orbit around the sun.");
};
function sun_Click(){    
    document.getElementByClass('.sun-pic').click(function(){
        alert("You have clicked the Sun!");
        userChoice = "sun";
        user = new Maverick('sun');
        alert(user.sunInfo());
    });

/*$('.sun-pic').on('click', function() {
    $('#sun').addClass('active');
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
$('.mercury-pic').on('click', function() {
    $('#mercury').addClass('active');
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
$('.venus-pic').on('click', function() {
    $('#venus').addClass('active');
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
$('.earth-pic').on('click', function() {
    $('#earth').addClass('active');
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
$('.mars-pic').on('click', function() {
    $('#mars').addClass('active');
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
$('.asteroid-pic').on('click', function() {
    $('#asteroid').addClass('active');
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
$('.jupiter-pic').on('click', function() {
    $('#jupiter').addClass('active');
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
$('.saturn-pic').on('click', function() {
    $('#saturn').addClass('active');
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
$('.uranus-pic').on('click', function() {
    $('#uranus').addClass('active');
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
$('.neptune-pic').on('click', function() {
    $('#neptune').addClass('active'); 
    $(this).css("fill","hsla(0,100%,100%,.7)");
    $('body').append('<div class="close"></div>').css("overflow","hidden");
});
/*$('path').on('click', function() {
  $(this).css("fill","hsla(0,100%,100%,.7)");
  $('body').append('<div class="close"></div>').css("overflow","hidden");
});*/
$('body').on('click', '.close', function() {
    $('article').removeClass('active'); 
    $('body').css("overflow","");
    $(this).remove();
});