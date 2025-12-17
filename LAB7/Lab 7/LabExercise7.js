document.addEventListener('DOMContentLoaded', function() {
    // --- 7. Collapsible Section Functionality ---
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                // Set max-height to the scroll height for smooth transition
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // --- 4. Automatic Slideshow Functionality ---
    let slideIndex = 0;
    let slideshowInterval;

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        
        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        // Increment index and loop back to 0 if max is reached
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        
        // Display the current slide and mark the current dot
        if (slides[slideIndex-1]) {
            slides[slideIndex-1].style.display = "block";
        }
        
        slideshowInterval = setTimeout(showSlides, 2000); 
    }

    // Function to navigate directly to a slide (used by dot clicks)
    window.currentSlide = function(n) {
        clearTimeout(slideshowInterval); // Stop auto-play temporarily
        slideIndex = n - 1; // Adjust index before calling showSlides
        showSlides();
    }
    
    // Start the slideshow
    showSlides();


    // --- 6. Progress Bar Animation ---
    // The desired final width for the progress bar (e.g., 90%)
    const targetWidth = '100%'; 
    const progressBar = document.getElementById('progressBar');
    
    // Function to animate the progress bar
    function animateProgressBar() {
        // Set the final width to trigger the CSS transition
        progressBar.style.width = targetWidth; 
        progressBar.textContent = targetWidth; // Update text
    }

    // Use Intersection Observer to animate the bar only when it enters the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBar();
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Start observing the progress bar container
    const progressSection = document.getElementById('progressSection');
    observer.observe(progressSection);
});