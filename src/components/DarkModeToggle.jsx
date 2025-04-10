import { useEffect } from "react";

function DarkModeToggle() {
  const toggleDarkMode = () => {
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark"); // Toggle the dark class on the body

    // Save the theme preference to localStorage
    const theme = bodyElement.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  };

  // On component mount, apply the saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-800 text-white rounded"
    >
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeToggle;
