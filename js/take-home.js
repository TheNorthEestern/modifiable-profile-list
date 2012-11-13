$(document).ready(function() {
$(".scrollable").scrollable();
$(".employee-bio .remove").tooltip({ tip: '#tooltip', offset:[0,-5], position: 'center left', delay: 0 })
$(".employee-bio .remove").click(function()
{
	var removeButton = $(this); 
	var memberName = removeButton.siblings(".memberName").html();
	$("#notification-message").text(memberName + " has been successfully removed.")
  $("#action-complete").overlay({ top: 260, mask: { color: '#fff', loadSpeed: 200, opacity: 0.5 }, closeOnClick: false, load: true }).load();
	console.log(memberName + " was removed from the list");
	$('#removal-area').show();
	$('<li class="deletedMember">'+ memberName + '</li>').appendTo("#removal-area ul");
	removeButton.parent("div").fadeOut(function(){removeButton.data("tooltip").hide(); })
$('.deletedMember').click(
	function()
	{
		console.log("Hello");
		var restore = $(this);
		var memberName = restore.text();
		$('.employee-bio:contains("'+ memberName +'")').show()
		$(this).detach();
		if($('#removal-area ul').text().length == 6) $('#removal-area').hide();
	}
);
});

});
