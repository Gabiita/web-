$(function(){


	$('.tab').on({
		'click' : function(){
			var tab = $(this).attr('href'); // el id del div,que voy mostrar ej: #tab1
			//recorriendo todos los tabs 
			$.each($('.viewtab'), function(index, val) {
				 if(!$(this).hasClass('hidden')){ //preguntando si tienen no tienen la clase hidden
				 	$(this).addClass('hidden'); // si no la tienen se las voy agregar.
				 }
			});
			// todos los tabs tienen hidden osea ninguno se ve.

			$(tab).removeClass('hidden'); // le quito la clase hidden al div que voy a mostrar.

			$.each($('.Jobs-item'), function(index, val) { // recorrer todas las pestanas
				$(this).removeClass('JobActive'); //todas les voy a quitar el JobActive
				if(!$(this).hasClass('JobInnactive')){ //voy a preguntar si tienen dicha clase
					$(this).addClass('JobInnactive'); // si no la tiene se la agrego
				}
			});

			/*
				Despues que todos estan inactivos
				busco al padre del this que es un 'li' 
				y le quito el inactivo para despues ponerle el activo.
			*/

			$(this)
				.parent('li')
				.removeClass('JobInnactive')
				.addClass('JobActive');

			setTimeout(function(){$(window).scrollTop(0);},10);
		}
	});


});
