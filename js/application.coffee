$ = jQuery.noConflict()
$ () ->
  mobileNav()
  inputFocus()
  listToggle()
  displayCandidateContent()
  linkStatusToggle()

mobileNav = ->
  $navTrigger = $('#open-button')
  $closeButton = $('#close-button')
  $body = $('body');

  $navTrigger.on 'click', (e) ->
    $body.toggleClass 'show-menu'

  $closeButton.on 'click', (e) ->
    $body.removeClass 'show-menu'

listToggle = ->
  $listButtons = $('.list-view-controls button')

  $listButtons.on 'click', (e) ->
    $click = $(e.currentTarget)
    $listContainer = $('.list-container')

    unless $click.hasClass 'active'
      $listButtons.removeClass 'active'
      $click.addClass 'active'
      $listContainer.toggleClass 'list-view'


linkStatusToggle = ->
  $toggle = $('button.radio');
  $input = $('.link-status');
  $toggle.on 'click', (e) ->
    e.preventDefault()
    if $toggle.text() == 'off'
      $toggle.text('on')
      $input.val('on')
      console.log '$toggle.val()', $toggle.text()
      console.log '$input.val()', $input.text()
    else 
      $toggle.text('off')
      $input.val('off')
      console.log '$toggle.val()', $toggle.text()
      console.log '$input.val()', $input.text()
  
inputFocus = ->
  $input = $('.input-holder input');

  $input.on 'focus', (e) ->
    $holder = $(@).parent('.input-holder')
    $holder.addClass 'focus'

  $input.on 'blur', ->
    $('.input-holder').removeClass 'focus'

displayCandidateContent = ->
  $navItems = $('.candidate-content nav a')
  $contentContainer = $('.content-container')

  $navItems.on 'click', (e) ->
    $click = $(e.currentTarget)
    activeContent = $click.data 'content'
    console.log 'activeContent', activeContent
    $activeContent = $('.content-container[data-content="'+activeContent+'"]')
    
    console.log '$activeContent', $activeContent

    $navItems.removeClass 'active'
    $click.addClass 'active'

    $contentContainer.removeClass 'active'
    $activeContent.addClass 'active'