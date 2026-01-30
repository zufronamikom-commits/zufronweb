// Hamburger Menu with Animation
const hamburger = document.getElementById("hamburger");
const navLinksMobile = document.getElementById("navLinksMobile");
const overlay = document.getElementById("overlay");
const hamburgerLines = document.querySelectorAll(".hamburger-line");

// Open menu
hamburger.addEventListener("click", () => {
  const isOpen = navLinksMobile.classList.contains("right-0");
  
  if (!isOpen) {
    // Open menu
    navLinksMobile.classList.remove("-right-full");
    navLinksMobile.classList.add("right-0");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    
    // Transform to X
    hamburgerLines[0].style.transform = "rotate(45deg) translate(6px, 6px)";
    hamburgerLines[1].style.opacity = "0";
    hamburgerLines[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
  } else {
    // Close menu
    closeMenuFunction();
  }
});

// Close menu function
function closeMenuFunction() {
  navLinksMobile.classList.add("-right-full");
  navLinksMobile.classList.remove("right-0");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
  
  // Transform back to hamburger
  hamburgerLines[0].style.transform = "rotate(0) translate(0, 0)";
  hamburgerLines[1].style.opacity = "1";
  hamburgerLines[2].style.transform = "rotate(0) translate(0, 0)";
}

// Close menu when clicking overlay
overlay.addEventListener("click", closeMenuFunction);

// Close mobile menu when clicking a link
document.querySelectorAll('#navLinksMobile a').forEach(link => {
  link.addEventListener('click', closeMenuFunction);
});

// Chart.js - Equity Curve
const ctx = document.getElementById("equityChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Equity Growth",
        data: [10000, 10300, 10100, 10800, 11500, 12000, 12800],
        borderColor: "#1DB954",
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  },
});

// Scroll Reveal Animation with Reverse - ALL SECTIONS
document.addEventListener('DOMContentLoaded', function() {
  // General Section Observer (Hero, About, Performance, Strategy, Education)
  const sectionObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px'
  };

  const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        entry.target.classList.remove('section-hidden');
      } else {
        entry.target.classList.remove('section-visible');
        entry.target.classList.add('section-hidden');
      }
    });
  }, sectionObserverOptions);

  // Observe all animate-section elements
  document.querySelectorAll('.animate-section').forEach(section => {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
  });

  // Setup Section Observer
  const setupObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };

  const setupObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Muncul saat masuk viewport
        entry.target.classList.add('setup-visible');
        entry.target.classList.remove('setup-hidden');
      } else {
        // Hilang saat keluar viewport (reverse)
        entry.target.classList.remove('setup-visible');
        entry.target.classList.add('setup-hidden');
      }
    });
  }, setupObserverOptions);

  // Observe all setup rows
  document.querySelectorAll('.setup-row').forEach(row => {
    row.classList.add('setup-hidden'); // Set initial state
    setupObserver.observe(row);
  });

  // Contact Section Observer
  const contactObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px'
  };

  const contactObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('contact-visible');
        entry.target.classList.remove('contact-hidden');
      } else {
        entry.target.classList.remove('contact-visible');
        entry.target.classList.add('contact-hidden');
      }
    });
  }, contactObserverOptions);

  // Observe contact info and form
  const contactInfo = document.querySelector('.contact-info');
  const contactForm = document.querySelector('.contact-form');
  
  if (contactInfo) {
    contactInfo.classList.add('contact-hidden');
    contactObserver.observe(contactInfo);
  }
  
  if (contactForm) {
    contactForm.classList.add('contact-hidden');
    contactObserver.observe(contactForm);
  }
});
