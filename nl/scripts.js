document.addEventListener("DOMContentLoaded", function() {
    // Scroll to customers section if URL has #customers fragment
    if (window.location.hash === "#customers") {
        var customersSection = document.getElementById("customers");
        if (customersSection) {
            customersSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});