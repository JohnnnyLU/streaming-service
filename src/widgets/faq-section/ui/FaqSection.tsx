import { useState } from 'react';
import { Container } from '../../../shared/ui/container/Container';
import { Button } from '../../../shared/ui/button/Button';
import { faqData } from '../model/faq.data';
import { FaqItem } from './FaqItem/FaqItem';
import styles from './FaqSection.module.scss';
import { routes } from '../../../shared/constants/routes';

const ButtonData = {
  children: 'Ask a Question',
  to: routes.support,
};

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const middleIndex = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, middleIndex);
  const rightColumn = faqData.slice(middleIndex);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.heading}>
              <h2 className={styles.title}>Frequently Asked Questions</h2>
              <p className={styles.subtext}>
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe.
              </p>
            </div>

            <Button children={ButtonData.children} to={ButtonData.to} />
          </div>

          <div className={styles.content}>
            <div className={styles.column}>
              {leftColumn.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </div>

            <div className={styles.column}>
              {rightColumn.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
