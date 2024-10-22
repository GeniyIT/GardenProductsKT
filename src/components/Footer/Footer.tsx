import styles from "./Footer.module.css";
import Instagram from "@img/instagram.svg?react";
import Whatsapp from "@img/whatsapp.svg?react";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <h1 className={styles.footer_title}>Contact</h1>
        <div className={styles.footer_content}>
          <div className={styles.footer_item_container}>
            <div className={styles.footer_item_phone}>
              <p className={styles.footer_item_title}>Phone</p>
              <h1 className={styles.phone_item}>+7 (499) 350-66-04</h1>
            </div>
            <div className={styles.footer_item_social}>
              <p className={styles.footer_item_title}>Socials</p>
              <div className={styles.social_item_container}>
                <Instagram />
                <Whatsapp />
              </div>
            </div>
            <div className={styles.footer_item_address}>
              <p className={styles.footer_item_title}>Address</p>
              <h1 className={styles.address_item}>
                Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
              </h1>
            </div>
            <div className={styles.footer_item_time}>
              <p className={styles.footer_item_title}>Working Hours</p>
              <h1 className={styles.time_item}>24 hours a day</h1>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7135.702889417426!2d37.62555691719039!3d55.713226482491805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b22a91ac945%3A0xf19f72681321ff46!2sIThub%20college!5e0!3m2!1sru!2sru!4v1729360318607!5m2!1sru!2sru"
            width="100%"
            height="350"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
