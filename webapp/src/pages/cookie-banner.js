import React, { useState } from 'react';
import {Button, Alert, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CookieBanner = () => {
    const [show, setShow] = useState(() => {
        return !localStorage.getItem('cookiesAccepted');
    });

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setShow(false);
    };

    if (!show) {
        return null;
    }

    return <>
        <Modal show={show} centered>
            <Modal.Header closeButton>
                <Modal.Title>Informativa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Questo sito utilizza i cookie a fini statistici. I dati sono raccolti in modo assolutamente
                anonimo ed analizzati esclusivamente su questo server,
                tramite il software open source Matomo.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => location.href = "https://rebuglio.it"}>
                    Esci
                </Button>
                <Button variant="primary" onClick={acceptCookies}>
                    Accetta
                </Button>
            </Modal.Footer>
        </Modal>
    </>
};

export default CookieBanner;