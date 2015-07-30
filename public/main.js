// console.log('I AM THE CLIENT');

$(function(){

	$('#hero-create').on('submit', function(event){
		event.preventDefault();

		$.ajax({
			method  : 'POST', // How
			url     : '/create-hero', //Where
			data    : $(this).serialize(), //What to send with it
			success : function(dataFromServer) {
				console.log('Return : ', dataFromServer);
				$('body').append('<h1>' + dataFromServer.data.name + '</h1>');
			}
		});

		// 'http://google.com/?searchTerm=goose&location=boulder'
		// {searchTerm : 'goose', location : 'boulder'}

		// '?name=Asynchronous+Man&cape=true'

	});

	$('#get-heroes').on('click', function(){

		$.ajax({
			method : 'GET',
			url    : '/get-heroes',
			success: function(dataFromServer){
				console.log('Here they are : ', dataFromServer)

				dataFromServer.data.forEach(function(hero){
					$('body').append('<h1>' + hero.name + '</h1>');
				});
			}
		});

	});


});