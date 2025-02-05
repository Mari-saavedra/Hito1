import { useState } from 'react'
import Swal from 'sweetalert2'

const Register = () => {
  const [ingreso, setIngreso] = useState({
    email: '',
    passw: '',
    rpassw: ''
  })

  const handleChange = (e) => {
    setIngreso({ ...ingreso, [e.target.name]: e.target.value })
  }

  const handleResult = () => {
    if (ingreso.email === '' || ingreso.passw === '' || ingreso.rpassw === '') {
      Swal.fire({
        title: 'Datos incompletos',
        text: 'Se deben ingresar todos los datos solicitados.',
        icon: 'error'
      })
    } else if (!(ingreso.passw === ingreso.rpassw)) {
      Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas deben ser iguales.',
        icon: 'error'
      })
    } else if (ingreso.passw.length < 6) {
      Swal.fire({
        title: 'Error!',
        text: 'La contraseña debe tener 6 o más caracteres.',
        icon: 'error'
      })
    } else {
      Swal.fire({
        title: 'Listo!',
        text: 'Datos ingresados correctamente.',
        icon: 'ok'
      })
    }
  }

  return (
    <div className='register shadow-lg border border-1 border-dark p-4' style={{ width: '30rem', borderRadius: '10px' }}>
      <h2 className='fw-bold mb-4 text-start'>Registro</h2>

      <div className='d-flex flex-column mb-3'>
        <label className='text-gray-700 mb-1'>Correo Electrónico</label>
        <input
          type='email'
          value={ingreso.email}
          onChange={handleChange}
          name='email'
          className='w-100 p-2 border rounded-lg'
        />
      </div>

      <div className='d-flex flex-column mb-3'>
        <label className='text-gray-700 mb-1'>Contraseña</label>
        <input
          type='password'
          value={ingreso.passw}
          onChange={handleChange}
          name='passw'
          className='w-100 p-2 border rounded-lg'
        />
      </div>

      <div className='d-flex flex-column mb-3'>
        <label className='text-gray-700 mb-1'>Repetir Contraseña</label>
        <input
          type='password'
          value={ingreso.rpassw}
          onChange={handleChange}
          name='rpassw'
          className='w-100 p-2 border rounded-lg'
        />
      </div>

      {/* Botón alineado y con tamaño según su contenido */}
      <div className='d-flex flex-column mt-4'>
        <button
          onClick={handleResult}
          className='btn btn-primary'
        >
          Enviar
        </button>
      </div>
    </div>
  )
}

export default Register
