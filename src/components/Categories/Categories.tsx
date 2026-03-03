import styles from './styles.module.scss'

import monitor from '../../assets/images/categories/image.svg';
import market from '../../assets/images/categories/supermercados 1.svg';
import drinks from '../../assets/images/categories/whiskey.svg';
import tools from '../../assets/images/categories/ferramentas 1.svg';
import health from '../../assets/images/categories/cuidados-de-saude 1.svg';
import sports from '../../assets/images/categories/corrida 1.svg';
import fashion from '../../assets/images/categories/moda 1.svg';

const categoryData = [
  { id: 1, name: 'Tecnologia', icon: monitor, active: true },
  { id: 2, name: 'Supermercado', icon: market },
  { id: 3, name: 'Bebidas', icon: drinks },
  { id: 4, name: 'Ferramentas', icon: tools },
  { id: 5, name: 'Saúde', icon: health },
  { id: 6, name: 'Esportes e Fitness', icon: sports },
  { id: 7, name: 'Moda', icon: fashion },
];

export function Categories() {
  return (
    <nav className={styles.categories}>
      <div className={styles.container}>
        {categoryData.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.categoryCard} ${item.active ? styles.active : ''}`}
          >
            <div className={styles.iconBox}>
              <img src={item.icon} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </nav>
  );
}