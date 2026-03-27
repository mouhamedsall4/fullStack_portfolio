document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach(function(link) {
    const href = link.getAttribute("href");
    link.classList.toggle("is-current", href === currentPage);
  });
});
