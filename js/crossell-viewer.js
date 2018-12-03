$(function () {
	$(".image-01").click(function () {
		var image = $(this).attr("rel");
		$('#image-01').hide();
		$('#image-01').fadeIn('slow');
		$('#image-01').html('<img src="' + image + '"/>');
		return false;
	});
    $(".image-01 span").click(function (e) {
        e.preventDefault();
        $(".image-01 span").removeClass('active');
        $(this).addClass('active');
    });
});