import type { ReactNode } from "react";

import PageContainer from "@/components/PageContainer";

import styles from "./InstitutionalPageShell.module.css";

type InstitutionalPageShellProps = {
  children: ReactNode;
};

export default function InstitutionalPageShell({
  children,
}: InstitutionalPageShellProps) {
  return (
    <main className={styles.page}>
      <PageContainer>
        <section className={styles.surface}>
          {children}
        </section>
      </PageContainer>
    </main>
  );
}