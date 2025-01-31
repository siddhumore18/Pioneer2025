document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".resp-tabs-list li");
    const contents = document.querySelectorAll(".products-content");
    
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // Hide all content
            contents.forEach(content => content.style.display = "none");
            
            // Remove active class from all tabs
            tabs.forEach(tab => tab.classList.remove("active"));
            
            // Show the selected content and add active class to the clicked tab
            contents[index].style.display = "block";
            tab.classList.add("active");
        });
    });
    
    // Initially show only Day 1 content
    contents.forEach(content => content.style.display = "none");
    contents[0].style.display = "block";
    tabs[0].classList.add("active");
});
