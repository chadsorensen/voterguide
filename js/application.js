// Generated by CoffeeScript 1.8.0
(function() {
  var inputFocus;

  $(function() {
    console.log('hey there');
    return inputFocus();
  });

  inputFocus = function() {
    var $holder, $input;
    $holder = $('.input-holder');
    $input = $holder.find('input');
    $input.on('focus', function() {
      return $holder.addClass('focus');
    });
    return $input.on('blur', function() {
      return $holder.removeClass('focus');
    });
  };

}).call(this);
