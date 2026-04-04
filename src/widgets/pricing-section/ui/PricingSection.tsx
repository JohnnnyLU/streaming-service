import {Container} from "../../../shared/ui/container/Container";
import styles from "./PricingSection.module.scss";

export function PricingSection () {
  return (
    <section>
      <Container>
        <div className={styles.inner}>
          <div>
            <div>
              <h2>Choose the plan that's right for you</h2>
              <p>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>
            <div></div>
          </div>

          <div className={styles.pricingCards}>

          </div>
        </div>
      </Container>
    </section>
  )
}
