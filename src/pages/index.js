import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            Read the blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="AYEIXA engineering blog — public technical notes with provenance.">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h2>Open-source utilities</h2>
                <p>
                  Public repositories for orchestration, token accounting, MCP
                  sandboxing, evaluation, and memory.
                </p>
              </div>
              <div className="col col--4">
                <h2>Provenance first</h2>
                <p>
                  Posts must cite checkable sources. Fabricated adoption,
                  traffic, or case studies are not allowed.
                </p>
              </div>
              <div className="col col--4">
                <h2>Zero-cost host</h2>
                <p>
                  This GitHub Pages URL is the bootstrap host. A custom
                  ayeixa.com domain is deferred until control is proven.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
