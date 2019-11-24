import React from 'react';
import './SideBarFooter.scss';

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className="footer-block">
        <div>About Press Copyright</div>
        <div>Creator Advertise</div>
        <div>Developers + MyTube</div>
        <div>Legal</div>
      </div>
      <div className="footer-block">
        <div>Terms Policy</div>
        <div>Policy & Safety</div>
        <div>Teat New Features</div>
      </div>
      <div className="footer-block">
        <div>All Prices Include VAT</div>
      </div>
      <div className="footer-block">
        <div>A Youtube clone for educational purposes under fair use.</div>
      </div>
    </React.Fragment>
  )
}
