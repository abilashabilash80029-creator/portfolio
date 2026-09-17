document.addEventListener("DOMContentLoaded", () => {
    // --- Sticky Navbar & Active Link Styling ---
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 100);

        let current = "";
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 150;
            if (pageYOffset >= secTop) {
                current = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // --- Mobile Menu Toggle ---
    const menuIcon = document.getElementById("menu-icon");
    const navLinksContainer = document.querySelector(".nav-links");
    menuIcon.addEventListener("click", () => {
        const isOpen = navLinksContainer.classList.toggle("active");
        menuIcon.setAttribute("aria-expanded", String(isOpen));
    });
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinksContainer.classList.contains("active")) {
                navLinksContainer.classList.remove("active");
                menuIcon.setAttribute("aria-expanded", "false");
            }
        });
    });

    // --- Typing Effect ---
    if (typeof Typed !== 'undefined') {
        new Typed(".typing-effect", {
            strings: ["Software Developer", "AI/ML Enthusiast", "Full Stack Learner"],
            loop: true,
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 1500,
        });
    }

    // --- Theme Toggle ---
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        themeToggle.classList.toggle("fa-moon", isLight);
        themeToggle.classList.toggle("fa-sun", !isLight);
    });

    // --- Scroll to Top Button ---
    const scrollTopBtn = document.querySelector(".scroll-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
});