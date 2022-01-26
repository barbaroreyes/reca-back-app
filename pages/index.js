import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
     <h3><Link to href="api/products">go to home</Link>go to home</h3>
    </div>
  )
}
