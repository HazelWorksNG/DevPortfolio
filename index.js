document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.getElementById("dropdownToggle");
    const dropdownContainer = document.querySelector(".dropdown-container");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Toggle dropdown on click
    dropdownToggle.addEventListener("click", function(e) {
        e.stopPropagation();
        dropdownContainer.classList.toggle("active");
    });

    // Close dropdown when clicking a link inside it
    dropdownMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            dropdownContainer.classList.remove("active");
        });
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", function() {
        dropdownContainer.classList.remove("active");
    });
});