import {Container} from "../../../shared/ui/container/Container.tsx";
import styles from "./Footer.module.scss"
import {
  footerBottomLinks,
  footerCopyright,
  footerSections
} from "../lib/footerSections.data.ts";
import {footerSocialSection} from "../lib/footerSocialSections.ts";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.sections}>
            {footerSections.map(section => (
              <div key={section.title} className={styles.section}>
                <h4 className={styles.sectionTitle}>{section.title}</h4>

                <ul className={styles.list}>
                  {section.links.map(link => (
                    <li key={link.targetId} className={styles.listItem}>
                      <a href={`#${link.targetId}`} className={styles.link}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>{footerSocialSection.title}</h4>

              <ul className={styles.socialList}>
                {footerSocialSection.items.map(socialLink => (
                  <li key={socialLink.name} className={styles.socialItem}>
                    <a
                      className={styles.socialLink}
                      href={socialLink.href}
                      target="_blank"
                      aria-label={socialLink.name}
                    >
                      <socialLink.icon className={styles.socialIcon}/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.bottom}>
            <span className={styles.copyright}>{footerCopyright}</span>

            <ul className={styles.bottomList}>
              {footerBottomLinks.map(link => (
                <li key={link.href} className={styles.bottomItem}>
                  <a href="" className={styles.bottomLink}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
