import Layout from '@theme/Layout';
import HomepageFeatures from '../components/_home/HomePageFeatures';
import HomePageHeader from '../components/_home/HomePageHeader';

export default function Home() {
  return (
    <Layout
      title="Ristek HMIT"
      description="Description will go into a meta tag in <head />">
      <HomePageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
