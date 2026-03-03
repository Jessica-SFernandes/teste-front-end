import { useEffect, useState } from 'react';
import { getProducts, type ProductItem } from '../../services/api';
import styles from './styles.module.scss';

interface ProductProps {
  title?: string;
}

export function Product({ title = "Produtos relacionados" }: ProductProps) {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const visibleProducts = products.slice(startIndex, startIndex + 4);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 4, 0));
  };

  const handleNext = () => {
    if (startIndex + 4 < products.length) {
      setStartIndex((prev) => prev + 4);
    }
  };

  return (
    <section className={styles.shelf}>
      <div className={styles.container}>
        
        <div className={styles.titleWrapper}>
          <div className={styles.line}></div>
          <h2>{title}</h2>
          <div className={styles.line}></div>
        </div>

        <nav className={styles.shelfNav}>
          <ul>
            <li className={styles.active}>CELULAR</li>
            <li>ACESSÓRIOS</li>
            <li>TABLETS</li>
            <li>NOTEBOOKS</li>
            <li>TVS</li>
            <li>VER TODOS</li>
          </ul>
        </nav>

        <div className={styles.carouselWrapper}>
          <button
            className={styles.arrow}
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            ‹
          </button>

          <div className={styles.productGrid}>
            {visibleProducts.map((item) => (
              <div
                key={item.productName}
                className={styles.card}
                onClick={() => setSelectedProduct(item)}
              >
                <img src={item.photo} alt={item.productName} />

                <p className={styles.productName}>{item.productName}</p>

                <span className={styles.oldPrice}>
                  R$ {(item.price * 1.1).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>

                <span className={styles.price}>
                  R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>

                <p className={styles.installments}>
                  ou 2x de R$ {(item.price / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
                </p>

                <span className={styles.freeShipping}>Frete grátis</span>

                <button
                  className={styles.buyButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(item);
                  }}
                >
                  COMPRAR
                </button>
              </div>
            ))}
          </div>

          <button
            className={styles.arrow}
            onClick={handleNext}
            disabled={startIndex + 4 >= products.length}
          >
            ›
          </button>
        </div>

        {selectedProduct && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedProduct(null)}
              >
                X
              </button>

              <div className={styles.modalContent}>
                <div className={styles.modalImageWrapper}>
                  <img src={selectedProduct.photo} alt={selectedProduct.productName} />
                </div>

                <div className={styles.modalInfo}>
                  <h3>{selectedProduct.productName}</h3>

                  <p className={styles.modalPrice}>
                    R$ {selectedProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>

                  <p className={styles.modalDescription}>
                    Many desktop publishing packages and web page editors now many desktop publishing
                  </p>

                  <a href="#" className={styles.moreDetails}>
                    Veja mais detalhes do produto {'>'}
                  </a>

                  <div className={styles.buySection}>
                    <div className={styles.quantitySelector}>
                      <button>-</button>
                      <span>01</span>
                      <button>+</button>
                    </div>

                    <button className={styles.modalBuyButton}>
                      COMPRAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}