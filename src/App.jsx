// import {Outlet} from 'react-router-dom'
// import './App.css'
// import Navbar from './components/Navbar'

// function App() {

//   return (
//     <>
//     <Navbar/>
//     <Outlet />
//     </>
//   )
// }

// export default App



import {Outlet} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <Outlet />
      <main className="p-4">
        {/* Your content goes here */}
      </main>
    </div>
  );
};

export default App;
