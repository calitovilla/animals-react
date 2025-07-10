import ThemeToggle from './components/ThemeToggle';
import './App.css'

function App() {

  const arrayList = ['a', 'b', 'c', 'd', 'e'];

  return (
    <>
      <ThemeToggle />

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
