import styles from "./Modal.module.css";

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <img className={styles.closeButton} onClick={closeModal} src="/src/assets/img/closeModal.svg" alt="" />
                {children}
            </div>
        </div>
    );
};

export default Modal;
