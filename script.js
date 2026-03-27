document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".site-nav");
  const mobileQuery = window.matchMedia("(max-width: 960px)");

  if (!hamburger || !nav) {
    return;
  }

  const isMobile = function() {
    return mobileQuery.matches;
  };

  const setMenuState = function(isOpen) {
    hamburger.classList.toggle("active", isOpen);
    nav.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  hamburger.addEventListener("click", function() {
    if (!isMobile()) {
      return;
    }

    setMenuState(!hamburger.classList.contains("active"));
  });

  document.querySelectorAll(".site-nav a").forEach(function(link) {
    link.addEventListener("click", function() {
      if (isMobile()) {
        setMenuState(false);
      }
    });
  });

  document.addEventListener("click", function(event) {
    if (!isMobile()) {
      return;
    }

    const clickInsideNav = nav.contains(event.target);
    const clickInsideHamburger = hamburger.contains(event.target);

    if (!clickInsideNav && !clickInsideHamburger && hamburger.classList.contains("active")) {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", function() {
    if (!isMobile()) {
      setMenuState(false);
    }
  });
});
