import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
   <div className={styles.container}>
    <link href='"/id' className= {styles.post}>
      <div className={styles.container}>
        <Image
        className={styles.image}
        src={'https://www.freepik.com/free-photo/cyber-monday-shopping-sales_10297459.htm#query=online%20shopping&position=1&from_view=keyword&track=ais&uuid=8f3c3bbf-6a6b-42f7-9bd7-ebf1a805d2e5'}
        width={350}
        height={250}
        alt='post image '
        />
      
      </div>
    </link>
   </div>
  );
}

