(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// select
$(document).ready(function() {
    $('select').material_select();
    
    $("select[required]").css({position: 'absolute', display: 'inline', height: 0, padding: 0, width: 0})
});

// init modal
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

$(document).ready(function () {
    $('.tooltipped').tooltip({delay: 50});
});

$(document).ready(function () {
    $('input#input_text, textarea#textarea').characterCounter();
});

$(document).ready(function(){
    $('.collapsible').collapsible();
});

$('.js-componente-data').pickadate({
   
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 30, // Creates a dropdown of 15 years to control year,
   
	monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Pronto',
    labelMonthNext: 'Próximo mês',
    labelMonthPrev: 'Mês anterior',
    labelMonthSelect: 'Selecione um mês',
    labelYearSelect: 'Selecione um ano',

    format: 'dd/mm/yyyy',
    formatsubmit: 'dd/mm/yyyy'
});
      
