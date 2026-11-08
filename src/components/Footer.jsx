import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="mono">Industrial Engineer · Supply Chain · ERP · Data</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
