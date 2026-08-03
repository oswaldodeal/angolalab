import styles from "./WeeklyIntelligenceBrief.module.css";

type WeeklyIntelligenceBriefProps = {
  reference: string;
  publicationDate: string;
  preparedBy: string;
  status: string;
};

export default function WeeklyIntelligenceBrief({
  reference,
  publicationDate,
  preparedBy,
  status,
}: WeeklyIntelligenceBriefProps) {
  return (
    <article className={styles.briefIdentity}>
      <div className={styles.briefIdentityHeader}>
        <div>
          <p className={styles.briefInstitution}>
            AEIS Weekly Intelligence Brief
          </p>

          <h3 className={styles.briefReference}>
            {reference}
          </h3>
        </div>

        <span className={styles.briefStatus}>
          <span
            className={styles.briefStatusDot}
            aria-hidden="true"
          />

          {status}
        </span>
      </div>

      <div className={styles.briefMetadata}>
        <div>
          <p>Publication Date</p>
          <span>{publicationDate}</span>
        </div>

        <div>
          <p>Prepared By</p>
          <span>{preparedBy}</span>
        </div>

        <div>
          <p>Research Method</p>
          <span>AEIS Research Methodology</span>
        </div>
      </div>
    </article>
  );
}