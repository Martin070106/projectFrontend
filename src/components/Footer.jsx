import NavLink from './NavLink'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Kapcsolat</h4>
          <address>
            <div>info@kisallatwebshop.hu</div>
            <div>+36 1 234 5678</div>
            <div>H-P: 9:00 - 17:00</div>
          </address>
        </div>

        <div className="footer-col">
          <h4>Jog</h4>
          <NavLink to="/aszf" className="footer-link">ÁSZF</NavLink>
          <NavLink to="/adatkezeles" className="footer-link">Adatkezelés</NavLink>
        </div>

        <div className="footer-col">
          <h4>Kövess minket</h4>
          <div className="socials">
            <a href="#" aria-label="Facebook" className="social-link"><i className="bi bi-facebook" /></a>
            <a href="#" aria-label="Instagram" className="social-link"><i className="bi bi-instagram" /></a>
            <a href="#" aria-label="Twitter" className="social-link"><i className="bi bi-twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} Kisállat Webshop. Minden jog fenntartva.</div>
    </footer>
  )
}
