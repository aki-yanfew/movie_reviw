document.addEventListener("DOMContentLoaded", function () {

    // Greeting
    const g = document.getElementById("greetingText");
    const h = new Date().getHours();
    g.textContent =
        (h < 12) ? "Good morning!" :
        (h < 18) ? "Good afternoon!" :
                    "Good evening!";

    // Hamburger toggle
    const navBtn = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");

    navBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Slideshow
    const slides = document.querySelectorAll(".hero-slide");
    let i = 0;

    function show(n) {
        slides.forEach((s, idx) =>
            s.classList.toggle("active", idx === n)
        );
    }

    show(i);

    document.getElementById("nextSlide").onclick = () => {
        i = (i + 1) % slides.length;
        show(i);
    };

    document.getElementById("prevSlide").onclick = () => {
        i = (i - 1 + slides.length) % slides.length;
        show(i);
    };

    // Form Validation 
    const form = document.getElementById("reviewForm");
    const msg = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const movie = document.getElementById("movie").value.trim();
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value.trim();

        //null check
        if (!name || !email || !movie || !rating || !comment) {
            msg.textContent = "Please fill all fields.";
            msg.style.color = "red";
            return;
        }

        if (!email.includes("@")) {
            msg.textContent = "Invalid email.";
            msg.style.color = "red";
            return;
        }

        msg.textContent = "Submitted!";
        msg.style.color = "lightgreen";

        form.reset();
    });

});
