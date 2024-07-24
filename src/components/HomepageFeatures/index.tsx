import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Artificial Intelligence',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        NT terus dek? Bikin anime kamu jadi nyata pake AI aja gasih? Cita-cita club ini adalah membuat GPT sendiri heheh... 
        atau bikin robot aja ya?
      </>
    ),
  },
  {
    title: 'Cyber Security',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Mau ngehack mantan? Mau kerja di Kominfo? Watch Dogs Simulator? Cyber Security aja gasih?
      </>
    ),
  },
  {
    title: 'Internet of Things',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mau masuk Teknik Komputer tapi ga kesampaian? Mau bikin jebakan buat adek dirumah? IoT solusi mu dek.
      </>
    ),
  },
  {
    title: 'Web Development',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Kalian beban keluarga? Dibanding-bandingin sama anak tetangga? Mau gaji 2 digit perbulan? 
        Web Dev jawabannya.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
