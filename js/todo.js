$("ul").on("click","li",function(){
	$(this).toggleClass("completed")
})

$("ul").on("click","span",function(event){

	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();	
	});
})

$("input[type='text']").on("keypress",function(event){
		
	if(event.which === 13)
	{
		var val = $(this).val()
		$(this).val("");
		$("ul").append("<li><span> <i class='fas fa-trash'></i> </span> "+val+"</li>")
	}
})

$(".fa-pencil-alt").on("click",function(){
	$("input").slideToggle("display")

})





