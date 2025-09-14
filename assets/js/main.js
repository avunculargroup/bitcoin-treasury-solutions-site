"use strict";

// Throttle function to improve scroll performance
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Page loading
var pageLoading = document.querySelector(".page-loading");

if (pageLoading) {
  window.addEventListener("load", () => {
    pageLoading.classList.add("hide");

    setTimeout(() => {
      pageLoading.style.display = "none";
    }, 1000);
  });
}

// Navbar
const navbar = document.querySelector(".ic-navbar"),
  navbarToggler = navbar.querySelector("[data-web-toggle=navbar-collapse]"),
  navbarMenu = document.getElementById("navbarMenu");

if (navbarToggler && navbarMenu) {
  navbarToggler.addEventListener("click", function () {
    const isExpanded = this.ariaExpanded === "true";
    
    // Toggle menu visibility
    navbarMenu.classList.toggle("opacity-0");
    navbarMenu.classList.toggle("invisible");
    
    // Update button state
    this.ariaExpanded = !isExpanded;
    this.innerHTML = isExpanded 
      ? '<i class="lni lni-menu"></i>'
      : '<i class="lni lni-close"></i>';
  });
}

// Sticky navbar
window.addEventListener("scroll", throttle(function () {
  const navbar = document.querySelector(".ic-navbar");
  if (navbar) {
    if (this.scrollY > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
}, 16)); // ~60fps throttling

// Scrollspy
function scrollspy(event) {
  var links = document.querySelectorAll(".ic-page-scroll"),
    scrollpos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

  for (let i = 0; i < links.length; i++) {
    var currentLink = links[i],
      dataTarget = currentLink.getAttribute("href"),
      targetElement = document.querySelector(dataTarget),
      topminus = scrollpos + 74;

    if (targetElement) {
      if (
        targetElement.offsetTop <= topminus &&
        targetElement.offsetTop + targetElement.offsetHeight > topminus
      ) {
        // Remove active class from all links first
        links.forEach(link => link.classList.remove("active"));
        currentLink.classList.add("active");
      } else {
        currentLink.classList.remove("active");
      }
    }
  }
}

window.document.addEventListener("scroll", throttle(scrollspy, 16)); // ~60fps throttling

// Menu scroll
const pageLink = document.querySelectorAll(".ic-page-scroll");

pageLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    const targetElement = document.querySelector(href);
    
    // Only prevent default and handle scroll for same-page links
    if (targetElement && !href.includes("index.html")) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 74,
      });

      navbar.classList.remove("menu-show");
      navbarToggler.innerHTML = navbar.classList.contains("menu-show")
        ? '<i class="lni lni-close"></i>'
        : '<i class="lni lni-menu"></i>';
    }
  });
});

// Tabs
const tabs = document.querySelectorAll(".tabs");

tabs.forEach((tab) => {
  const links = tab.querySelectorAll(".tabs-nav .tabs-link"),
    contents = tab.querySelectorAll(".tabs-content");

  if (!contents) {
    return;
  }

  window.addEventListener("load", function () {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.add("hide");
    }

    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
      links[i].ariaSelected = false;
    }

    links[0].classList.add("active");
    links[0].ariaSelected = true;

    const dataTarget = links[0].dataset.webTarget,
      targetElement = this.document.getElementById(dataTarget);

    targetElement.classList.remove("hide");
  });

  links.forEach((link) => {
    const dataTarget = link.dataset.webTarget,
      targetElement = document.getElementById(dataTarget);

    if (targetElement) {
      link.addEventListener("click", function () {
        for (let i = 0; i < contents.length; i++) {
          contents[i].classList.add("hide");
        }

        for (let i = 0; i < links.length; i++) {
          links[i].classList.remove("active");
          links[i].ariaSelected = false;
        }

        link.classList.add("active");
        link.ariaSelected = true;
        targetElement.classList.remove("hide");
      });
    } else {
      link.disabled = true;
    }
  });
});

// Portfolio filter
const portfolioFilters = document.querySelectorAll(".portfolio-menu button");

portfolioFilters.forEach((filter) => {
  filter.addEventListener("click", function () {
    let btn = portfolioFilters[0];

    while (btn) {
      if (btn.tagName === "BUTTON") {
        btn.classList.remove("active");
      }

      btn = btn.nextSibling;
    }

    this.classList.add("active");

    let selected = filter.getAttribute("data-filter"),
      itemsToHide = document.querySelectorAll(
        '.portfolio-grid .portfolio :not([data-filter="' + selected + '"])'
      ),
      itemsToShow = document.querySelectorAll(
        '.portfolio-grid .portfolio [data-filter="' + selected + '"]'
      );

    if (selected == "all") {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(
        ".portfolio-grid .portfolio [data-filter]"
      );
    }

    itemsToHide.forEach((el) => {
      el.parentElement.classList.add("hide");
      el.parentElement.classList.remove("show");
    });

    itemsToShow.forEach((el) => {
      el.parentElement.classList.remove("hide");
      el.parentElement.classList.add("show");
    });
  });
});

// Scroll to top
var st = document.querySelector("[data-web-trigger=scroll-top]");

if (st) {
  // Show/hide button based on scroll position
  window.addEventListener("scroll", throttle(function () {
    if (window.scrollY > 50) {
      st.classList.remove("is-hided");
    } else {
      st.classList.add("is-hided");
    }
  }, 16)); // ~60fps throttling

  // Scroll to top when clicked
  st.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Update copyright year
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('currentYear');
if (yearElement) {
  yearElement.textContent = currentYear;
}

// Update copyright text
const copyrightElement = document.querySelector('.copyright');
if (copyrightElement) {
  copyrightElement.innerHTML = `&#169; ${currentYear} Bitcoin Treasury Solutions. All rights reserved.`;
}

// Contact form validation and security
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const submitButton = document.getElementById('contact-submit');
  let isSubmitting = false;
  
  // Rate limiting - prevent rapid submissions
  let lastSubmissionTime = 0;
  const SUBMISSION_COOLDOWN = 5000; // 5 seconds
  
  function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + '-error');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.remove('hidden');
    }
  }
  
  function hideError(fieldId) {
    const errorElement = document.getElementById(fieldId + '-error');
    if (errorElement) {
      errorElement.classList.add('hidden');
    }
  }
  
  function validateField(field) {
    const value = field.value.trim();
    const fieldId = field.id.replace('contact-', '');
    let isValid = true;
    
    // Clear previous errors
    hideError(fieldId);
    
    // Field-specific validation
    switch (fieldId) {
      case 'name':
        if (value.length < 2) {
          showError(fieldId, 'Name must be at least 2 characters long');
          isValid = false;
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          showError(fieldId, 'Name can only contain letters and spaces');
          isValid = false;
        }
        break;
        
      case 'email':
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (!emailPattern.test(value)) {
          showError(fieldId, 'Please enter a valid email address');
          isValid = false;
        }
        break;
        
      case 'phone':
        if (value && !/^[\+\d\s\-\(\)]{10,20}$/.test(value)) {
          showError(fieldId, 'Please enter a valid phone number');
          isValid = false;
        }
        break;
        
      case 'subject':
        if (value.length < 3) {
          showError(fieldId, 'Subject must be at least 3 characters long');
          isValid = false;
        }
        break;
        
      case 'message':
        if (value.length < 10) {
          showError(fieldId, 'Message must be at least 10 characters long');
          isValid = false;
        }
        break;
    }
    
    return isValid;
  }
  
  // Real-time validation
  contactForm.addEventListener('input', function(e) {
    if (e.target.matches('input, textarea')) {
      validateField(e.target);
    }
  });
  
  // Form submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check rate limiting
    const now = Date.now();
    if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
      alert('Please wait a moment before submitting again.');
      return;
    }
    
    // Prevent double submission
    if (isSubmitting) {
      return;
    }
    
    // Validate all fields
    const fields = contactForm.querySelectorAll('input[required], textarea[required]');
    let allValid = true;
    
    fields.forEach(field => {
      if (!validateField(field)) {
        allValid = false;
      }
    });
    
    if (!allValid) {
      return;
    }
    
    // Additional security checks
    const honeypot = contactForm.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) {
      // Honeypot field was filled - likely spam
      console.log('Spam detected');
      return;
    }
    
    // Start submission
    isSubmitting = true;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
      
      // Reset form state
      isSubmitting = false;
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message';
      lastSubmissionTime = Date.now();
      
      // Hide all error messages
      const errorElements = contactForm.querySelectorAll('.error-message');
      errorElements.forEach(element => element.classList.add('hidden'));
         }, 2000);
   });
}

// Newsletter form validation
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  const submitButton = document.getElementById('newsletter-submit');
  let isSubmitting = false;
  
  // Rate limiting
  let lastSubmissionTime = 0;
  const SUBMISSION_COOLDOWN = 10000; // 10 seconds for newsletter
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    
    // Check rate limiting
    const now = Date.now();
    if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
      alert('Please wait a moment before subscribing again.');
      return;
    }
    
    // Prevent double submission
    if (isSubmitting) {
      return;
    }
    
    // Validate email
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Security check - honeypot
    const honeypot = newsletterForm.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) {
      console.log('Spam detected in newsletter form');
      return;
    }
    
    // Start submission
    isSubmitting = true;
    submitButton.disabled = true;
    const originalContent = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="lni lni-spinner animate-spin"></i>';
    
    // Simulate submission
    setTimeout(() => {
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
      
      // Reset form state
      isSubmitting = false;
      submitButton.disabled = false;
      submitButton.innerHTML = originalContent;
      lastSubmissionTime = Date.now();
    }, 2000);
  });
}
