// Wrap the code to run after DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
  function $(selector) {
    return document.querySelector(selector);
  }

  function find(el, selector) {
    let finded;
    return (finded = el.querySelector(selector)) ? finded : null;
  }

  function siblings(el) {
    const siblings = [];
    for (let sibling of el.parentNode.children) {
      if (sibling !== el) {
        siblings.push(sibling);
      }
    }
    return siblings;
  }

  const showAsideBtn = $('.show-side-btn');
  const sidebar = $('.sidebar');
  const wrapper = $('#wrapper');

  // Check if elements exist before adding event listeners
  if (showAsideBtn && sidebar && wrapper) {
    showAsideBtn.addEventListener('click', function () {
      $(`#${this.dataset.show}`).classList.toggle('show-sidebar');
      wrapper.classList.toggle('fullwidth');
    });
  }

  if (sidebar && window.innerWidth < 767) {
    sidebar.classList.add('show-sidebar');
  }

  window.addEventListener('resize', function () {
    if (sidebar && window.innerWidth > 767) {
      sidebar.classList.remove('show-sidebar');
    }
  });

  // Dropdown menu in the side nav
  const categories = $('.sidebar .categories');
  if (categories) {
    categories.addEventListener('click', function (event) {
      event.preventDefault();
      const item = event.target.closest('.has-dropdown');
      if (!item) return;

      item.classList.toggle('opened');
      siblings(item).forEach(sibling => {
        sibling.classList.remove('opened');
      });

      const toOpen = find(item, '.sidebar-dropdown');
      if (toOpen) {
        toOpen.classList.toggle('active');
      }
    });
  }

  const closeAside = $('.sidebar .close-aside');
  if (closeAside && wrapper) {
    closeAside.addEventListener('click', function () {
      $(`#${this.dataset.close}`).classList.add('show-sidebar');
      wrapper.classList.remove('margin');
    });
  }
});
