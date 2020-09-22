'use strict';

(function () {
  var tabs = document.querySelector('.auth__wrapper');
  var tabslink = tabs.querySelectorAll('.auth__tab');
  var tabsElement = tabs.querySelectorAll('.auth__form-wrapper');

  /**
   * Делает активным таб по клику
   * @param {object} onClickTab
   * @param {object} hideTab
   */
  var onTabClickChange = function (onClickTab, hideTab) {
    onClickTab.addEventListener('click', function () {
      for (var i = 0; i < tabsElement.length; i++) {
        tabsElement[i].classList.add('auth__form-wrapper--hidden');
      }
      for (var j = 0; j < tabslink.length; j++) {
        tabslink[j].classList.remove('auth__tab--active');
      }

      onClickTab.classList.add('auth__tab--active');
      hideTab.classList.remove('auth__form-wrapper--hidden');
    });
  };

  // Передает элемет таба по клику
  for (var j = 0; j < tabslink.length; j++) {
    onTabClickChange(tabslink[j], tabsElement[j]);
  }
})();
