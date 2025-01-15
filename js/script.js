document.addEventListener("DOMContentLoaded", () => {
    // Ensure ScrollTrigger plugin is registered once
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations for headings and text
    gsap.from(".heading", { duration: 0.8, opacity: 0, x: 30, delay: 0.2 });
    gsap.from(".subheading", { duration: 1, opacity: 0, x: -30, delay: 0.6 });
    gsap.from(".paragraph", { duration: 1, opacity: 0, y: 20, delay: 1 });
    gsap.from(".block", { duration: 1, opacity: 0, y: 10, delay: 1.6 });

    // GSAP animation to fade out .quotes on scroll
    gsap.to(".quotes", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".quotes",
            start: "top center",
            end: "bottom top",
            scrub: true,
        }
    });


    // Bubble animations with yoyo effect
    const bubbleTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    bubbleTimeline
        .to(".bubbles img:nth-child(1)", {
            duration: 5,
            y: -50,
            x: 100,
            opacity: 0.8,
            scale: 1.2,
            ease: "power2.inOut"
        })
        .to(".bubbles img:nth-child(2)", {
            duration: 6,
            y: 40,
            x: 30,
            opacity: 0.7,
            scale: 1.1,
            ease: "back.out(1.7)"
        }, "<") // Start at the same time as the previous animation
        .to(".bubbles img:nth-child(3)", {
            duration: 6,
            y: -30,
            x: 10,
            opacity: 0.9,
            scale: 1.3,
            ease: "back.out(1.7)"
        }, "<");



    // Navbar show/hide on scroll
    const navbar = document.querySelector(".navbar");

    let lastScrollY = window.scrollY; // Track the last scroll position

    document.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        // If scrolling down and passed the 50px threshold, hide the navbar
        if (currentScrollY > 50 && currentScrollY > lastScrollY) {
            navbar.style.top = "-120px"; // Hide navbar when scrolling down
        }
        // If scrolling up, show the navbar
        else if (currentScrollY < lastScrollY) {
            navbar.style.top = "0"; // Show navbar when scrolling up
        }

        // Update the lastScrollY to the current scroll position
        lastScrollY = currentScrollY;
    });


    // Messy section animations on scroll
    gsap.timeline({
        scrollTrigger: {
            trigger: ".anyone",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            markers: false
        }
    })
        .fromTo(".messy img:nth-child(2)", { opacity: 0 }, { opacity: 1, duration: 0.5 })
        .fromTo(".messy img:nth-child(3)", { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 1 })
        .fromTo(".messy img:nth-child(4)", { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 1 });

    // Figure image animations on scroll
    gsap.timeline({
        scrollTrigger: {
            trigger: "#front",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            markers: false,
        },
        repeat: -1,
    })
        .fromTo(".figure img:nth-child(1)", { opacity: 1 }, { opacity: 0, duration: 1 }, "-=0.5")
        .fromTo(".figure img:nth-child(2)", { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(".figure img:nth-child(3)", { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(".figure img:nth-child(4)", { opacity: 0 }, { opacity: 1, duration: 1 });

    // Bubble animation for #bubble-blue2
    gsap.from("#bubble-blue2 img", {
        duration: 6,
        opacity: 1,
        scale: 0.8,
        x: 600,
        y: 60,
        ease: "power3.inOut",
        delay: 2
    });

    // Continuous floating effect for #bubble-blue2
    gsap.to("#bubble-blue2 img", {
        duration: 4,
        scale: 1.2,
        x: 400,
        y: 90,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
    });

    // About popup functionality
    const openPopup = document.querySelector("#openPopup"); // Button to open the popup
    const closePopup = document.querySelector("#popup .close"); // Close button inside the popup
    const popup = document.querySelector("#popup"); // Popup container

    // Open popup
    openPopup.addEventListener("click", () => {
        popup.style.display = "flex"; // Show the popup
    });

    // Close popup
    closePopup.addEventListener("click", () => {
        popup.style.display = "none"; // Hide the popup
    });

    // Close popup when clicking outside the content
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none"; // Hide the popup
        }
    });
});

function showMore(id) {
    var div = document.getElementById(id);
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}



// GSReveal
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Apply reveal animation to all elements with 'gs-reveal' class
gsap.utils.toArray(".gs-reveal").forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 85%", // Trigger when top of element reaches 85% of viewport
            toggleActions: "play none none none", // Play animation only once
        },
        opacity: 0, // Start hidden
        y: 50, // Slide up from 50px below
        duration: .5, // Animation duration
        ease: "power2.out", // Smooth easing
    });
});



// About popup functionality
const openLearnPopup = document.querySelector("#openLearnPopup");
const closeLearnPopup = document.querySelector("#learnpopup .close");
const learnpopup = document.querySelector("#learnpopup");

// Toggle popup visibility
const togglePopup = (isVisible) => {
    learnpopup.style.display = isVisible ? "flex" : "none";
};

// Event listeners
openLearnPopup.addEventListener("click", () => togglePopup(true)); // 點擊顯示彈跳視窗
closeLearnPopup.addEventListener("click", () => togglePopup(false)); // 點擊關閉按鈕
learnpopup.addEventListener("click", (e) => {
    if (e.target === learnpopup) togglePopup(false); // 點擊背景關閉
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") togglePopup(false); // 按 ESC 鍵關閉
});


// all animation js

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("h2, h3, h4, .h2 ", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "h2, h3, h4 .h2",
            start: "top 80%",
            toggleActions: "play none none none",
        },
    });
});

// other ani

document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll("h2, h3, h4");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is in view
        }
    );

    headings.forEach((heading) => observer.observe(heading));
});