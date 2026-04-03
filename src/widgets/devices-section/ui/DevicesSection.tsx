import styles from "./DevicesSection.module.scss";
import {Container} from "../../../shared/ui/container/Container";
import {devices} from "../lib/devices.data";

export function DevicesSection () {
  return (
    <section className={styles.devices}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              We Provide you streaming experience across various devices.
            </h2>
            <p className={styles.subtext}>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
          </div>

          <div className={styles.cards}>
            <ul className={styles.list}>
              {devices.map(item => (
                <li key={item.title} className={styles.card}>
                  <div className={styles.top}>
                    <div className={styles.iconWrapper}>
                      <item.icon className={styles.cardIcon}/>
                    </div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.cardDescription}>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
