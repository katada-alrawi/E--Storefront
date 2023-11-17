import styles from './footer.module.css'
import Image from 'next/image'
import { social_media } from '@/components/Footer/data'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Ayla-Center.<br/> All rights reserved.</div>
      <div className={styles.social}>
      {
        social_media.map(media => 
         
        <Image
        key={media.id}
          src={`/images/icons/${media.media}.png`}
          width={20}
          height={20}
          className={styles.icon}
          alt={`Ayla-center ${media.media} link`}
        />)
      }
       
         
      
      </div>
    </div>
  )
}
