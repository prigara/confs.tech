import React, { useState } from 'react';
import { Link } from 'src/components';
import styles from './HamburgerMenu.module.scss';

interface Props {
  showCFP: boolean;
  showPast: boolean;
}

export const HamburgerMenu: React.FC<Props> = ({ showCFP, showPast }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.HamburgerMenu}>
      <button className={styles.HamburgerIcon} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </button>
      {isOpen && (
        <nav className={styles.NavLinks}>
          {(showPast || showCFP) && <Link url='/'>Upcoming conferences</Link>}
          {!showCFP && <Link url='/cfp'>Call for Papers</Link>}
          {!showPast && <Link url='/past'>Past conferences</Link>}
          <Link url='/pages/sponsorships' routed>
            Sponsor
          </Link>
          <Link url='/conferences/new' routed>
            Add a conference
          </Link>
        </nav>
      )}
    </div>
  );
};
