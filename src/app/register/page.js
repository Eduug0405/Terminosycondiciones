'use client';
import styles from './register.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PrivacyModal from '../../components/PrivacyModal';


export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!accepted) {
      setError('Debes aceptar el aviso de privacidad');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    console.log('Registrado con:', { username, password });
    setError('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src="/logo.png"
          alt="Register illustration"
          width={140}
          height={140}
        />
        <h2 className={styles.title}>Register now</h2>
        <p className={styles.subtitle}>Practice your most important skills!</p>

        <form className={styles.form} onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="privacy"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label htmlFor="privacy">
              Acepto el{' '}
              <span
                onClick={() => setShowModal(true)}
                style={{ color: '#6b21a8', cursor: 'pointer', textDecoration: 'underline' }}
              >
                aviso de privacidad
              </span>
            </label>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button
            type="submit"
            className={styles.button}
            disabled={!accepted}
          >
            Register
          </button>
        </form>

        <p className={styles.loginText}>
          Do you already have an account?{' '}
          <Link href="/login">
            <span className={styles.loginLink}>Log in</span>
          </Link>
        </p>
      </div>

      {}
      <PrivacyModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
