import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'
import './App.css'

function App() {

  const arrayList = ['a', 'b', 'c', 'd', 'e'];

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved)
      return saved;

    // Validate if the user has a preference for dark mode
    // If so, set the theme to "aqua" (dark mode)
    // Otherwise, set it to "light" (default mode)
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "aqua" : "light";
  });

  useEffect(() => {
    // Set the theme attribute on the document element whenever the theme changes [theme]
    document.documentElement.setAttribute("data-theme", theme);
    // Save the theme to localStorage so it persists across page reloads
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      return prev === "light" ? "aqua" : "light"
    });
  };

  return (
    <>
     
      <label className="flex items-center gap-1">
        🌞
        <input
          type="checkbox"
          className="toggle"
          checked={theme === "aqua"}
          onChange={toggleTheme}
        />
      🌚
      </label>

      {
        arrayList.map((item, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-sm ">
            <figure>
            { /* <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" /> */ }
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item}</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default App
