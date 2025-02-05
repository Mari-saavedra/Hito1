import { formateaNumero } from '../utils/utiles.js'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className='card shadow-lg border-1 border-muted' style={{ width: '22rem', borderRadius: '10px' }}>

      <img src={img} className='card-img-top' alt={name} style={{ borderRadius: '10px 10px 0 0', height: '200px', objectFit: 'cover' }} />

      <div className='card-body text-center m-0 p-0' style={{ width: '100%' }}>
        <h5 className='card-title fw-bold m-3 text-start'>{`Pizza ${name}`}</h5>
        <hr className='w-100 mx-auto' />

        <p className='text-muted fw-semibold'>Ingredientes:</p>
        <p className='text-dark' style={{ fontSize: '0.8rem' }}>🍕 {ingredients.join(', ')}</p>

        <hr className='w-100 mx-auto' />
        <h5 className='fw-bold text-dark'>Precio: ${formateaNumero(price)}</h5>

        <div className='d-flex justify-content-between mt-3 m-3'>
          <button className='btn btn-outline-dark btn-sm'>Ver Más 👀</button>
          <button className='btn btn-dark btn-sm'>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
