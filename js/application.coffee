$ ->
  console.log 'hey there'

  inputFocus()

inputFocus = ->
  $holder = $('.input-holder');
  $input = $holder.find('input');

  $input.on 'focus', ->
    $holder.addClass 'focus'
  $input.on 'blur', ->
    $holder.removeClass 'focus'