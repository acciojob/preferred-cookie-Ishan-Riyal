//your JS code here. If required.
// Helper function to get a cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

// Apply saved preferences from cookies (if available)
window.addEventListener("DOMContentLoaded", () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", `${savedFontSize}px`);
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }

  // Form submit handler
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    const fontSize = document.getElementById("fontsize").value;
    const fontColor = document.getElementById("fontcolor").value;

    // Set cookies (expires in 365 days)
    document.cookie = `fontsize=${fontSize}; path=/; max-age=${365 * 24 * 60 * 60}`;
    document.cookie = `fontcolor=${fontColor}; path=/; max-age=${365 * 24 * 60 * 60}`;

    // Apply changes immediately
    document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
    document.documentElement.style.setProperty("--fontcolor", fontColor);
  });
});
