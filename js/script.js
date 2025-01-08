document.addEventListener("DOMContentLoaded", () => {
    // GSAP animations
    gsap.from(".heading", { duration: 0.8, opacity: 0, x: 30, delay: 0.2 });
    gsap.from(".subheading", { duration: 1, opacity: 0, x: -30, delay: 0.6 });
    gsap.from(".paragraph", { duration: 1, opacity: 0, y: 20, delay: 1 });
    gsap.from(".block", { duration: 1, opacity: 0, y: 10, delay: 1.6 });
});


// navbar
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Adjust scroll value as needed
        navbar.style.top = "0"; // Show the navbar
    } else {
        navbar.style.top = "-80px"; // Hide the navbar
    }
});



// 首頁泡泡overlay

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // GSAP timeline for bubble animations
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Animate individual bubbles
    tl.to(".bubbles img:nth-child(1)", {
        duration: 5,
        y: -50,   // Move up
        x: 100,    // Slight horizontal drift
        opacity: 0.8,
        scale: 1.2,
        ease: ""
    })
        .to(".bubbles img:nth-child(2)", {
            duration: 6,
            y: 40,    // Move down
            x: 30,   // Slight horizontal drift
            opacity: 0.7,
            scale: 1.1,
            ease: "back.out(12)"
        }, "<") // Start this animation at the same time as the previous one
        .to(".bubbles img:nth-child(3)", {
            duration: 6,
            y: -30,   // Move up
            x: 10,    // Slight horizontal drift
            opacity: 0.9,
            scale: 1.3,
            ease: "back.out(6)"
        }, "<"); // Start this animation at the same time as the previous one
});




// anyone messy
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: " .anyone", // The section to watch
        start: "top 80%", // Trigger animation when .anyone is 80% into the viewport
        end: "bottom top", // Animation stops when .anyone leaves the viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
        markers: false, // Set to true to see debug markers
    },
    repeat: -1, // Repeats infinitely
})
    .fromTo(".messy img:nth-child(2)", { opacity: 0 }, { opacity: 1, duration: .5 })
    .fromTo(".messy img:nth-child(3)", { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 1 })
    .fromTo(".messy img:nth-child(4)", { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 1 });


// for figure
gsap.timeline({
    scrollTrigger: {
        trigger: "#front", // The section to watch
        start: "top 80%", // Trigger animation when #front is 80% into the viewport
        end: "bottom top", // Animation stops when #front leaves the viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
        markers: false, // Set to true to see debug markers
    },
    repeat: -1, // Repeats infinitely
})
.from(".figure img:nth-child(1)", { opacity: 1, duration: 1 }) // Show the first image
.to(".figure img:nth-child(1)", { opacity: 0, duration: 1 }, "-=0.5") // Smooth fade out for the first image
.fromTo(".figure img:nth-child(2)", { opacity: 0 }, { opacity: 1, duration: 1 }) // Show the second image
.fromTo(".figure img:nth-child(3)", { opacity: 0 }, { opacity: 1, duration: 1 }) // Show the third image
.fromTo(".figure img:nth-child(4)", { opacity: 0 }, { opacity: 1, duration: 1 }); // Show the fourth image