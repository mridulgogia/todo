import React from 'react';
import { Modal, Button} from 'react-bootstrap';

export default function ModalComponent(props) {
    return (
        <div>
            <Modal show={props.showModal} onHide={props.setModalShowOrHide}>
                    <Modal.Header closeButton>
                    <Modal.Title>Delete Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this todo?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={props.setModalShowOrHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.onDelete}>
                        Delete
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}
