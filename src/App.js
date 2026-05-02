import { useState } from 'react';
import { Modal } from './components/Modal';
import './App.css';


  function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function openModal() {
    setIsModalOpen(true);
  }
  
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div>
      <h1>Приложение с модальным окном</h1>
      <button onClick={openModal}>Открыть окно</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <p>Это содержимое модального окна!</p>
        </Modal>
      )}
    </div>
  );
}


export default App;
