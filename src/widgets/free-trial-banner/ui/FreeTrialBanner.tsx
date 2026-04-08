import { Container } from '../../../shared/ui/container/Container.tsx';
import styles from './FreeTrialBanner.module.scss';
import { Button } from '../../../shared/ui/button/Button.tsx';

export function FreeTrialBanner() {
  return (
    <section className={styles.trialBanner}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2 className={styles.title}>Start your free trial today!</h2>
            <p className={styles.subtext}>
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <div>
            <Button children="Start a Free Trial" />
          </div>
        </div>
      </Container>
    </section>
  );
}
