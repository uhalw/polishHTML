document.addEventListener("DOMContentLoaded", () => {
    // GSAP animations
    gsap.from(".heading", { duration: 0.8, opacity: 0, x: 30, delay: 0.2 });
    gsap.from(".subheading", { duration: 1, opacity: 0, x: -30, delay: 0.6 });
    gsap.from(".paragraph", { duration: 1, opacity: 0, y: 20, delay: 1 });
    gsap.from(".block", { duration: 1, opacity: 0, y: 10, delay: 1.6 });
});





// 首頁泡泡overlay

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // GSAP timeline for bubble animations
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Animate individual bubbles
    tl.to(".bubbles img:nth-child(1)", {
        duration: 4,
        y: -50,   // Move up
        x: 30,    // Slight horizontal drift
        opacity: 0.8,
        scale: 1.2,
        ease: "power1.inOut"
    })
        .to(".bubbles img:nth-child(2)", {
            duration: 5,
            y: 40,    // Move down
            x: -20,   // Slight horizontal drift
            opacity: 0.7,
            scale: 1.1,
            ease: "power1.inOut"
        }, "<") // Start this animation at the same time as the previous one
        .to(".bubbles img:nth-child(3)", {
            duration: 6,
            y: -30,   // Move up
            x: 10,    // Slight horizontal drift
            opacity: 0.9,
            scale: 1.3,
            ease: "power1.inOut"
        }, "<"); // Start this animation at the same time as the previous one
});



