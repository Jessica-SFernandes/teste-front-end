import styles from './styles.module.scss';
import logoBrand from '../../assets/images/Logo-econverse.svg';
export function Brands() {
  const brands = [1, 2, 3, 4, 5];

  return (
    <section className={styles.brands}>
      <div className={styles.container}>
        
        <div className={styles.titleWrapper}>
          <h2>Navegue por marcas</h2>
        </div>

        <div className={styles.brandList}>
          {brands.map((index) => (
            <div key={index} className={styles.brandCircle}>
              <img src={logoBrand} alt="Marca parceira" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}