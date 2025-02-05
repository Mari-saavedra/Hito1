import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <>
      <Header />

      <div className='container p-3'>
        <div className='d-flex justify-content-center gap-3 flex-wrap p-0 m-0'>
          <CardPizza
            name='Napolitana'
            price={5950}
            ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
            img='./src/assets/img/napolitana.jpg'
          />
          <CardPizza
            name='Española'
            price={6950}
            ingredients={['mozzarella', 'gorgonzola', 'parmesano', 'provolone']}
            img='./src/assets/img/española.jpg'
          />
          <CardPizza
            name='Pepperoni'
            price={6950}
            ingredients={['mozzarella', 'pepperoni', 'orégano']}
            img='./src/assets/img/pepperoni.jpg'
          />
        </div>
      </div>
    </>
  )
}

export default Home
