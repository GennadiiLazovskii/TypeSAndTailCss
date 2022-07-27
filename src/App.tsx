import { useContext } from 'react';
import { ModalContext } from './components/context/ModalContext';
import CreateProduct from './components/CreateProduct';
import ErrorMassage from './components/ErrorMassage';
import { useProducts } from './components/hooks/products';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Product from './components/Product';
import { IProduct } from './model';

function App() {

  const { loading, products, error, addProduct } = useProducts();
  const {modal, open, close} = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMassage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}

      {modal && <Modal title='Create new product' onClose={close}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button 
      className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
      onClick={open}
      >+</button>
    </div>
  );
}

export default App;
