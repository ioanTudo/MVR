import { Link } from "react-router";
import "./Footer.css";

export const FooterDisplay = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p>&copy; {new Date().getFullYear()} MovieRate. All rights reserved.</p>
        <nav>
          <Link aria-disabled href="/privacy-policy">
            Privacy Policy
          </Link>
          |<Link href="/terms-of-service">Terms of Service</Link> |
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};
