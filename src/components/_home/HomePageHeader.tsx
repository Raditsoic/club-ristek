import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import React from 'react'
import Heading from '@theme/Heading';

export default function HomePageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary')}
            style={{
                padding: '4rem, 0',
                textAlign: 'center',
            }}
        >
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Ristek HMIT
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}
