document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Member card select (visual only)
  document.querySelectorAll(".member-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".member-card").forEach((item) => {
        item.classList.remove("is-selected");
        item.setAttribute("aria-pressed", "false");
      });
      card.classList.add("is-selected");
      card.setAttribute("aria-pressed", "true");
    });
  });

  // Archive category filter
  const tabs = document.querySelectorAll("[data-filter]");
  const archiveCards = document.querySelectorAll(".archive-card");

  function setArchiveFilter(filter) {
    tabs.forEach((tab) => {
      const active = tab.dataset.filter === filter;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    archiveCards.forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setArchiveFilter(tab.dataset.filter));
  });
});
