import { formateaNumero } from '../utils/utiles.js'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <div className='navbar navbar-expand-lg navbar-dark text-white bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>Pizzería Mamma Mia!</a>

        <div className='collapse navbar-collapse'>
          <div className='navbar-nav d-flex gap-2 justify-content-start'>
            <button type='button' className='btn btn-dark btn-outline-light btn-sm'>🍕Home</button>

            {token
              ? (
                <>
                  <button type='button' className='btn btn-dark btn-outline-light btn-sm'>🔓Profile</button>
                  <button type='button' className='btn btn-dark btn-outline-light btn-sm'>🔓Logout</button>
                </>

                )
              : (
                <>
                  <button type='button' className='btn btn-dark btn-outline-light btn-sm'>🔐Login</button>
                  <button type='button' className='btn btn-dark btn-outline-light btn-sm'>🔐Register</button>
                </>
                )}
          </div>

          <div className='ms-auto'>
            <button type='button' className='btn btn-outline-warning fw-bold btn-outline-light text-primary btn-sm'>🛒 Total: ${formateaNumero(total)}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
