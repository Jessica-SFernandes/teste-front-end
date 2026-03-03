import styles from './styles.module.scss'

export function Banner () {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Venha conhecer nossas promoções</h1>
                    <p><span className={styles.highlight}>50% OFF</span> nos produtos</p>
                    <button type="button">Ver Produtos</button>
                </div>
            </div>
        </section>
    );
}