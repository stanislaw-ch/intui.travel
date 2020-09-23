'use strict';

(function () {
  var tabs = document.querySelector('.auth__wrapper');
  var tablinks = tabs.querySelectorAll('.auth__tab');
  var tabElements = tabs.querySelectorAll('.auth__form-wrapper');

  var hiddenTabElement = function () {
    for (var i = 0; i < tabElements.length; i++) {
      tabElements[i].classList.add('auth__form-wrapper--hidden');
    }
  };

  var hiddenTablink = function () {
    for (var j = 0; j < tablinks.length; j++) {
      tablinks[j].classList.remove('auth__tab--active');
    }
  };

  var showTabElement = function (onClickTab, hideTab) {
    onClickTab.classList.add('auth__tab--active');
    hideTab.classList.remove('auth__form-wrapper--hidden');
  };

  /**
   * Делает активным таб по клику
   * @param {object} onClickTab
   * @param {object} hideTab
   */
  var onTabClickChange = function (onClickTab, hideTab) {
    onClickTab.addEventListener('click', function () {
      hiddenTabElement();
      hiddenTablink();
      showTabElement(onClickTab, hideTab);
    });

    onClickTab.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        hiddenTabElement();
        hiddenTablink();
        showTabElement(onClickTab, hideTab);
      }
    });
  };

  // Передает элемент таба по клику
  for (var j = 0; j < tablinks.length; j++) {
    onTabClickChange(tablinks[j], tabElements[j]);
  }
})();
