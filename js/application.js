// Generated by CoffeeScript 1.8.0
(function() {
  var $, displayCandidateContent, inputFocus, linkStatusToggle, listToggle, mobileNav;

  $ = jQuery.noConflict();

  $(function() {
    mobileNav();
    inputFocus();
    listToggle();
    displayCandidateContent();
    linkStatusToggle();
    return FastClick.attach(document.body);
  });

  mobileNav = function() {
    var $body, $closeButton, $navTrigger;
    $navTrigger = $('#open-button');
    $closeButton = $('#close-button');
    $body = $('body');
    $navTrigger.on('click', function(e) {
      return $body.toggleClass('show-menu');
    });
    return $closeButton.on('click', function(e) {
      return $body.removeClass('show-menu');
    });
  };

  listToggle = function() {
    var $listButtons;
    $listButtons = $('.list-view-controls button');
    return $listButtons.on('click', function(e) {
      var $click, $listContainer;
      $click = $(e.currentTarget);
      $listContainer = $('.list-container');
      if (!$click.hasClass('active')) {
        $listButtons.removeClass('active');
        $click.addClass('active');
        return $listContainer.toggleClass('list-view');
      }
    });
  };

  linkStatusToggle = function() {
    var $input, $toggle;
    $toggle = $('button.radio');
    $input = $('.link-status');
    return $toggle.on('click', function(e) {
      e.preventDefault();
      if ($toggle.text() === 'off') {
        $toggle.text('on');
        $input.val('on');
        console.log('$toggle.val()', $toggle.text());
        return console.log('$input.val()', $input.text());
      } else {
        $toggle.text('off');
        $input.val('off');
        console.log('$toggle.val()', $toggle.text());
        return console.log('$input.val()', $input.text());
      }
    });
  };

  inputFocus = function() {
    var $input;
    $input = $('.input-holder input');
    $input.on('focus', function(e) {
      var $holder;
      $holder = $(this).parent('.input-holder');
      return $holder.addClass('focus');
    });
    return $input.on('blur', function() {
      return $('.input-holder').removeClass('focus');
    });
  };

  displayCandidateContent = function() {
    var $contentContainer, $navItems;
    $navItems = $('.candidate-content nav a');
    $contentContainer = $('.content-container');
    return $navItems.on('click', function(e) {
      var $activeContent, $click, activeContent;
      $click = $(e.currentTarget);
      activeContent = $click.data('content');
      console.log('activeContent', activeContent);
      $activeContent = $('.content-container[data-content="' + activeContent + '"]');
      console.log('$activeContent', $activeContent);
      $navItems.removeClass('active');
      $click.addClass('active');
      $contentContainer.removeClass('active');
      return $activeContent.addClass('active');
    });
  };

}).call(this);
