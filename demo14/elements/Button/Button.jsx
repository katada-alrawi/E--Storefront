'use client'
import styles from './button.module.css'

export default function button() {
  return (
    <div>
      <button 
      className={styles.logout}
        onClick={() => {console.log ("logout")}}
        >logout</button>
    </div>
  )
}
