import styles from './styles.module.scss';

export function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        
        <div className={styles.card}>
          <div className={styles.content}>
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button type="button">CONFIRA</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.content}>
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button type="button">CONFIRA</button>
          </div>
        </div>

      </div>
    </section>
  );
}