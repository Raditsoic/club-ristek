import clsx from 'clsx';
import React from 'react'
import { FeatureItem } from '@site/src/components/_data/DataFeature';
import Heading from '@theme/Heading';

export default function Feature({ title, png, description, href }: FeatureItem) {
    return (
        <div className={clsx('col col--4 ')} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            width: '400px',
        }}>
            <img src={png} alt={title} width={300} style={{ borderRadius: '20px' }} />
            <div className="text--center padding-horiz--md">
                <Heading as="h3">
                    <a href={href} style={{ textDecoration: 'none' }}>
                        {title}
                    </a>
                </Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}