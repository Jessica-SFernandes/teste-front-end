
import styles from './styles.module.scss';

import Logo from '../../assets/images/Logo-econverse.svg';
import Card from '../../assets/images/CreditCard.svg';
import Check from '../../assets/images/ShieldCheck.svg';
import Truck from '../../assets/images/Truck.svg';
import Login from '../../assets/images/UserCircle.svg';
import Cart from '../../assets/images/ShoppingCart.svg';
import Group from '../../assets/images/Group.svg';
import Heart from '../../assets/images/Heart.svg';
import Crown from '../../assets/images/CrownSimple.svg';
import Lupa from '../../assets/images/MagnifyingGlass.svg'




export function Header () {
  return (
    <header className={styles.header}>

      <div className={styles.topBar}>
        <div className={styles.container}>

        <div className={styles.benefitItem}>
            <img src={Check} alt="" />
            <span>Compra <strong>100% segura</strong></span>
          
        </div>

        <div className={styles.benefitItem}>
            <img src={Truck} alt="" />
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          
        </div>

        <div className={styles.benefitItem}>
            <img src={Card} alt="" />
            <span><strong>Parcele</strong> suas compras</span>
        </div>
      </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo Econverse" />
        </div>

        <div className={styles.searchArea}>
          <input type="text" placeholder="O que você está buscando?" />
          <img src={Lupa} alt="Buscar" className={styles.searchIcon} />
        </div>

        <div className={styles.iconsGroup}>
          <img src={Group} alt="" />
          <img src={Heart} alt="" />
          <img src={Login} alt="" />
          <img src={Cart} alt="" />
        </div>
    </div>
        
        <nav className={styles.navMenu}>
            <div className={styles.container}>
               <ul>
                <li>TODAS AS CATEGORIAS</li>
                <li>SUPERMERCADO</li>
                <li>LIVROS</li>
                <li>MODA</li>
                <li>LANÇAMENTOS</li>
                <li>OFERTA DO DIA</li>
                <li className={styles.hasICon}>
                    <img src={Crown} alt="" /> 
                    ASSINATURA
                </li>
            </ul> 
            </div>
            
        </nav>
      
    </header>
  );
}