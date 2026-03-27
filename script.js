document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".site-nav");
  const mobileQuery = window.matchMedia("(max-width: 1100px)");

  document.querySelectorAll(".site-nav a").forEach(function(link) {
    const href = link.getAttribute("href");
    link.classList.toggle("is-current", href === currentPage);
  });

  if (!hamburger || !nav) {
    return;
  }

  const setMenuState = function(isOpen) {
    hamburger.classList.toggle("active", isOpen);
    nav.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  hamburger.addEventListener("click", function() {
    if (!mobileQuery.matches) {
      return;
    }

    setMenuState(!hamburger.classList.contains("active"));
  });

  nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      if (mobileQuery.matches) {
        setMenuState(false);
      }
    });
  });

  document.addEventListener("click", function(event) {
    if (!mobileQuery.matches) {
      return;
    }

    const isInsideNav = nav.contains(event.target);
    const isInsideButton = hamburger.contains(event.target);

    if (!isInsideNav && !isInsideButton && hamburger.classList.contains("active")) {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", function() {
    if (!mobileQuery.matches) {
      setMenuState(false);
    }
  });
});
