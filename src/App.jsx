import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <div className='container p-3'>
        <div className='d-flex justify-content-center gap-3 flex-wrap p-0 m-0'>
          <Register />
        </div>
      </div>

      <div className='container p-3'>
        <div className='d-flex justify-content-center gap-3 flex-wrap p-0 m-0'>
          <Login />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
