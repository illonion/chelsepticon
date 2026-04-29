import styles from './Home.module.css'

export default function Home() {
    return (
        <>
            <section className={styles['home-banner']}></section>
            <section className={styles['tiles-background']}>
                <div className={styles['tiles-container']}>
                    <div className={styles.tile}></div>
                    <div className={styles.tile}></div>
                    <div className={styles.tile}></div>
                </div>
            </section>
        </>
    )
}