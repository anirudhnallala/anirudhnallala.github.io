document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll to top when clicking on portfolio-name in navbar
    const portfolioName = document.querySelector(".portfolio-name");
    if (portfolioName) {
        portfolioName.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Toggle theme functionality (Light Mode button)
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Light Mode";
    themeToggle.style.position = "fixed";
    themeToggle.style.top = "10px";
    themeToggle.style.right = "10px";
    themeToggle.style.padding = "10px";
    themeToggle.style.cursor = "pointer";
    themeToggle.style.display = "none";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });

    // Navbar scroll effect (make it black after scrolling)
    window.addEventListener("scroll", function() {
        let nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.classList.add("navbar-scrolled");
        } else {
            nav.classList.remove("navbar-scrolled");
        }
    });

    // Add scroll-triggered animation for education cards
    const educationItems = document.querySelectorAll(".education-card");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.5 });
    educationItems.forEach(item => observer.observe(item));

    // Scroll-triggered animation for the Contact Section
    const contactSection = document.querySelector("#contact");
    const contactBox = document.querySelector(".contact-box");
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactBox.classList.add("show-contact");
                contactSection.style.backgroundImage = "url('contactimg1.jpg')";
                contactSection.style.backgroundSize = "cover";
                contactSection.style.backgroundPosition = "center";
            } else {
                contactBox.classList.remove("show-contact");
                contactSection.style.backgroundImage = "none";
            }
        });
    }, { threshold: 0.5 });
    if (contactBox) contactObserver.observe(contactSection);

    // Scroll-triggered animation for the Projects Section
    const projectCards = document.querySelectorAll(".project-card");
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-project");
            } else {
                entry.target.classList.remove("show-project");
            }
        });
    }, { threshold: 0.3 });
    projectCards.forEach(card => projectObserver.observe(card));
});
