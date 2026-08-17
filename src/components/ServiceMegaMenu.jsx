import { Link } from 'react-router-dom';
import { ALL_SERVICES } from '../data/servicesData';
import { TechIcon } from './services/ServiceIconsFull';

export default function ServiceMegaMenu({ onClose }) {
  return (
    <div className="mega-menu-overlay">
      <div className="mega-menu-card">
        <div className="mega-menu-header">
          <div>
            <span className="mega-menu-kicker">Comprehensive Solutions</span>
            <h3 className="mega-menu-title">Explore All Services</h3>
          </div>
          <Link to="/services" className="mega-menu-view-all" onClick={onClose}>
            View All Services Hub →
          </Link>
        </div>

        <div className="mega-menu-grid">
          {ALL_SERVICES.map((srv) => (
            <Link
              key={srv.slug}
              to={`/services/${srv.slug}`}
              className="mega-menu-item"
              onClick={onClose}
            >
              <div className={`mega-item-icon ${srv.tint}`}>
                <TechIcon name={srv.coreTechnologies[0]?.icon || 'brain'} />
              </div>
              <div className="mega-item-text">
                <span className="mega-item-title">{srv.title}</span>
                <span className="mega-item-desc">{srv.tagline}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
