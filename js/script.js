// Ensure DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // GSAP animations for headings and text
    gsap.from(".heading", { duration: 0.8, opacity: 0, x: 30, delay: 0.2 });
    gsap.from(".subheading", { duration: 1, opacity: 0, x: -30, delay: 0.6 });
    gsap.from(".paragraph", { duration: 1, opacity: 0, y: 20, delay: 1 });
    gsap.from(".block", { duration: 1, opacity: 0, y: 10, delay: 1.6 });

    // Bubble animations (unique effects)
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
        }, "<") // Start this animation at the same time as the previous one
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
    document.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.top = "0"; // Show navbar
        } else {
            navbar.style.top = "-80px"; // Hide navbar
        }
    });

    // Messy section animations
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

    // Figure section animations
    gsap.timeline({
        scrollTrigger: {
            trigger: "#front",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            markers: false
        }
    })
        .fromTo(".figure img:nth-child(1)", { opacity: 1 }, { opacity: 0, duration: 1 }, "-=0.5")
        .fromTo(".figure img:nth-child(2)", { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(".figure img:nth-child(3)", { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(".figure img:nth-child(4)", { opacity: 0 }, { opacity: 1, duration: 1 });
});

document.addEventListener("DOMContentLoaded", () => {

    // GSAP animation for #bubble-blue2
    gsap.from("#bubble-blue2 img", {
        duration: 6,
        opacity: 1,
        scale: 2,
        x: 600,
        y: -10,   // Start from above
        ease: "power3.inOut",
        delay: 2   // Start after a short delay
    });

    // Add continuous floating effect
    gsap.to("#bubble-blue2 img", {
        duration: 4,
        scale: 1.6,
        x: 400,
        y: 20,    // Make it float up and down
        repeat: -1, // Repeat infinitely
        yoyo: true, // Alternate the direction
        ease: "sine.inOut",
        delay: 1    // Start the floating effect after initial animation
    });
});