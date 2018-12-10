//template made by Harry Li
var transitionIdentifiers = [
  ".menuHeading",
  ".item",
  ".menuDivider",
  ".leftTransition",
  ".rightTransition",
  ".fadeIn",
];

transitionIdentifiers.forEach(function(identifier) {
  $(identifier).appear();
  $(identifier).css("-webkit-transition","2s");
  $(identifier).on('appear', function(e, $all_appeared_elements) {
    $(this).addClass("visible"); // this code is executed for each appeared element
  });
});

$.force_appear();
