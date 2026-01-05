// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active")

        // Animate hamburger
        hamburger.classList.toggle("active")
    })

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active")
            hamburger.classList.remove("active")
        })
    })
}

// Animated counters for stats
const animateCounters = () => {
    const counters = document.querySelectorAll(".stat-number")

    counters.forEach((counter) => {
        const target = Number.parseInt(counter.getAttribute("data-target"))
        let count = 0
        const increment = target / 50

        const updateCounter = () => {
            if (count < target) {
                count += increment
                counter.textContent = Math.ceil(count)
                setTimeout(updateCounter, 30)
            } else {
                counter.textContent = target
            }
        }

        updateCounter()
    })
}

// Intersection Observer for animations
const observeElements = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("stats")) {
                        animateCounters()
                    }
                    entry.target.classList.add("animate")
                }
            })
        },
        { threshold: 0.1 },
    )

    // Observe stats section
    const statsSection = document.querySelector(".stats")
    if (statsSection) {
        observer.observe(statsSection)
    }

    // Observe timeline items
    const timelineItems = document.querySelectorAll(".timeline-item")
    timelineItems.forEach((item) => {
        observer.observe(item)
    })
}

// Expand/collapse timeline details
const setupTimelineExpanders = () => {
    const expandButtons = document.querySelectorAll(".expand-btn")

    expandButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling
            content.classList.toggle("active")

            if (content.classList.contains("active")) {
                button.textContent = "Read Less"
            } else {
                button.textContent = "Read More"
            }
        })
    })
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})

// Form submission handler
const handleFormSubmit = () => {
    const form = document.getElementById("contactForm")
    const formMessage = document.getElementById("formMessage")

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault()

            // Get form data
            const formData = new FormData(form)
            const data = Object.fromEntries(formData)

            // Simulate form submission (replace with actual backend call)
            setTimeout(() => {
                formMessage.className = "form-message success"
                formMessage.textContent = "Thank you for your message! I will get back to you soon."
                form.reset()

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = "none"
                }, 5000)
            }, 500)
        })
    }
}

// Navbar background on scroll
const handleNavbarScroll = () => {
    const navbar = document.querySelector(".navbar")

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navbar.style.background = "rgba(255, 255, 255, 0.98)"
            navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)"
        } else {
            navbar.style.background = "var(--white)"
            navbar.style.boxShadow = "var(--shadow)"
        }
    })
}

// Animate skill bars when in viewport
const animateSkillBars = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const skillProgress = entry.target.querySelector(".skill-progress")
                    if (skillProgress) {
                        const width = skillProgress.style.width
                        skillProgress.style.width = "0"
                        setTimeout(() => {
                            skillProgress.style.width = width
                        }, 100)
                    }
                }
            })
        },
        { threshold: 0.5 },
    )

    const skillItems = document.querySelectorAll(".skill-item")
    skillItems.forEach((item) => observer.observe(item))
}

// Logo Slider functionality
const setupLogoSlider = () => {
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")
    const sliderTrack = document.querySelector(".slider-track")
    const sliderItems = document.querySelectorAll(".slider-item")

    let currentIndex = 0
    const itemWidth = sliderItems[0].offsetWidth + 48 // 48px is the gap

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex++
            if (currentIndex > sliderItems.length - 3) {
                currentIndex = 0
            }
            updateSliderPosition()
        })
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex--
            if (currentIndex < 0) {
                currentIndex = sliderItems.length - 3
            }
            updateSliderPosition()
        })
    }

    const updateSliderPosition = () => {
        const offset = currentIndex * itemWidth
        sliderTrack.style.transform = `translateX(-${offset}px)`
        sliderTrack.style.animation = "none"
    }

    // Pause animation on hover
    sliderTrack.addEventListener("mouseenter", () => {
        sliderTrack.style.animationPlayState = "paused"
    })

    sliderTrack.addEventListener("mouseleave", () => {
        sliderTrack.style.animationPlayState = "running"
    })
}

// Initialize all functions
document.addEventListener("DOMContentLoaded", () => {
    observeElements()
    setupTimelineExpanders()
    handleFormSubmit()
    handleNavbarScroll()
    animateSkillBars()
    setupLogoSlider()

    // Add page transition effect
    document.body.style.opacity = "0"
    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease-in"
        document.body.style.opacity = "1"
    }, 100)
})

// Parallax effect for hero section
// window.addEventListener("scroll", () => {
//     const hero = document.querySelector(".hero")
//     if (hero) {
//         const scrolled = window.pageYOffset
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`
//     }
// })
