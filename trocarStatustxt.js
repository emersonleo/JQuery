$(function(){
	$('#btn2').hide()
	$('#Exibirtxt').hide()
	$('#btn').click(function(){
		$('#h1').hide()
		$('#btn').hide()
		$('#Exibirtxt').show()
		$('#btn2').show()
	})
	$('#btn2').click(function(){
		$('#btn2').hide()
		$('#Exibirtxt').hide()
		$('#h1').show()
		$('#btn').show()
	})
})