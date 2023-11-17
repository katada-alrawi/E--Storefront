import Image from "next/image";
import styles from './page.module.css'
import Katada from "/public/images/katada1.svg";

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.col}>
        <h2 className={styles.title} >
        Ayla Center: Your prime e-commerce hub for all your shopping essentials!
        </h2>
        <p className={styles.description}>
          "Explore a world of endless choices and unparalleled convenience at
          our one-stop e-commerce destination. Discover curated selections,
          quality products"
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>

      <div className={styles.col}>
        <Image className={styles.img} src={Katada} alt="Ayla-Center" />
      </div>
    </div>
  );
}
