import styles from './styles.module.scss'

import instagram from '../../assets/images/footer/instagram.svg';
import facebook from '../../assets/images/footer/facebook.svg';
import linkedin from '../../assets/images/footer/linkedin.svg';
import logo from '../../assets/images/Logo-econverse.svg'


export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <section className={styles.newsletterSection}>
                <div className={styles.newsletterContainer}>
                    <div className={styles.newsletterText}>
                        <h2>Inscreva-se na nossa newsletter</h2>
                        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                    </div>

                    <form className={styles.newsletterForm}>
                        <div className={styles.formInputs}>
                            <input type="text" placeholder='Digite seu nome' className={styles.input}/>
                            <input type="email" placeholder='Digite seu e-mail' className={styles.input} />
                            <button type='submit'>INSCREVER</button>
                        </div>

                        <div className={styles.formCheckbox}>
                            <input type="checkbox" id='terms' />
                            <label htmlFor="terms">Aceite os termos e condições</label>
                        </div>
                    </form>
                </div>
            </section>

            <section className={styles.mainFooter}>
                <div className={styles.mainContainer}>

                    <div className={styles.brandSection}>
                        <img src={logo} alt="Econverse" className={styles.logo} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <div className={styles.socialIcons}>
                            <a href="#" target='_blank'>
                                <img src={instagram} alt="Logo Instagram" />
                            </a>

                              <a href="#" target='_blank'>
                                <img src={facebook} alt="Logo Facebook" />
                            </a>

                              <a href="#" target='_blank'>
                                <img src={linkedin} alt="Logo Linkedin" />
                            </a>
                        </div>
                    </div>
                    <nav className={styles.footerNav}>
                        <div className={styles.navColumn}>
                            <h3>Institucional</h3>
                            <ul>
                                <li><a href="#">Sobre Nós</a></li>
                                <li><a href="#">Movimento</a></li>
                                <li><a href="#">Trabalhe conosco</a></li>
                            </ul>
                        </div>

                        <div className={styles.navColumn}>
                            <h3>Ajuda</h3>
                            <ul>
                                <li><a href="#">Suporte</a></li>
                                <li><a href="#">Fale conosco</a></li>
                                <li><a href="#">Perguntas Frequentes</a></li>
                            </ul>
                        </div>

                         <div className={styles.navColumn}>
                            <h3>Termos</h3>
                            <ul>
                                <li><a href="#">Termos e Condições</a></li>
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#">Troca e Devolução</a></li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </section>

            <div className={styles.footerBottom}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    )
}

