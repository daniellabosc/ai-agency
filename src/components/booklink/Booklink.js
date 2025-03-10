import React from 'react';
import './booklink.css';
import BookImg from '../../assets/AI Simplified.jpg';

const Booklink = () => {
  return (
    <div className="booklink">
        <h5>We will gladly send you a free book!</h5>
        <a target="_new" href="https://www.amazon.com/AI-Simplified-business-Malgorzata-Phillips-ebook/dp/B0DZMFR5WM/ref=sr_1_1?crid=1P9HSJUIQD44E&dib=eyJ2IjoiMSJ9.JTwqio-7LV0GSLF4busvxefjbRmun36HsWvaMMUdrCbus-EeM4fuf5FHdiixhFcSps3Iz4UmQLxuFyl3BJRY0G2Le4PXh5eXy-Ak3GwhM2TUkvJVCy45xQR0ww4F3JGnf_NMB3dJtDWJZPgGoBsWgNZOO0llf-I425pY5CzzOYD9c9kEF_OxFbSMATbG8z0xhhgdLhE5XceU72B9CxC23JftpUIDgZg9m4ZgBhlP5q0.8vA5D8d4tE0f-iLfZk1o4YPDrasbEB7U2hmPBXRI-t8&dib_tag=se&keywords=AI+simplified+for+business&qid=1741568336&sprefix=ai+simplified+for+business%2Caps%2C224&sr=8-1">
                <img src={BookImg} alt="AI Simplified" className="booklink__img" />
        </a>
    </div>
  );
};

export default Booklink;
