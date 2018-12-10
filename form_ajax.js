var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbysoE7dFRwvTT3q_FmTNvAbo0YR_qci-s83Qetc33M8BSfjVZgw/exec';

$('#submit-form').on('onclick', function(e) {
	alert('Function was called.')
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
