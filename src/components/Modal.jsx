export function Modal(props) {
  
  const { onClose, children } = props;
  
   return (

       <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
export default Modal;