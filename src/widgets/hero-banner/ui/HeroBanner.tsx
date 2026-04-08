import styles from './HeroBanner.module.scss';
import { Button } from '../../../shared/ui/button/Button';
import WatchIcon from '../../../shared/assets/icons/watch-icon.svg?react';
import AbstractDesign from '../../../shared/assets/images/abstract-design-full.png';

const ButtonData = {
  children: 'Start Watching Now',
  icon: WatchIcon,
};

export function HeroBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.hero}>
        <div className={styles.abstract}>
          <img
            className={styles.img}
            src={AbstractDesign}
            alt="Abstract Design"
          />
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>The Best Streaming Experience</h1>
        <p className={styles.description}>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <Button children={ButtonData.children} icon={ButtonData.icon} />
      </div>
    </section>
  );
}
