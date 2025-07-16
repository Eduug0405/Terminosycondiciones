'use client';
import React from 'react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Aviso de Privacidad</h2>
        <p style={styles.text}>
          Teching, con domicilio en calle 5a oriente, colonia La Pimiento, ciudad Tuxtla Gutiérrez,
          municipio o delegación Chiapas, c.p. 29000, en la entidad de Chiapas, país México, utilizará sus datos personales recabados para:
        </p>
        <ul style={styles.list}>
          <li>Registro de usuarios</li>
          <li>Envío de notificaciones</li>
          <li>Personalización de contenido</li>
        </ul>
        <p style={styles.text}>
          Para mayor información acerca del tratamiento y de los derechos que puede hacer valer, usted puede acceder al aviso de privacidad integral a través de la app móvil.
        </p>
        <div style={{ textAlign: 'right' }}>
          <button onClick={onClose} style={styles.closeBtn}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#f4edf7',
    padding: '24px',
    borderRadius: '24px',
    width: '90%',
    maxWidth: '400px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 0 15px rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px',
    color: 'black'
  },
  text: {
    fontSize: '14px',
    marginBottom: '12px',
    color: '#333',
  },
  list: {
    marginBottom: '12px',
    paddingLeft: '18px',
    color: '#333',
  },
  closeBtn: {
    border: 'none',
    background: 'transparent',
    color: '#6b21a8',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
  }
};
