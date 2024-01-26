function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
 }
// On page load set the theme.
(function() {
    let onpageLoad = localStorage.getItem("theme") || "light";
    let element = document.body;
    element.classList.add(onpageLoad);
    document.getElementById("theme").textContent =
      onpageLoad;
  })();
  
  function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark");
  
    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  
    document.getElementById("theme").textContent = localStorage.getItem("theme");
  }
  
