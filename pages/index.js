import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi, I'm a Soft Engineer Intern from Angeles University Foundation with a keen focus in Native Android development. Stepping into twist resources, I'm met with a cohesive and accommodating work environment.
              I'm eager to enhance my skills and delve into Web Development, gaining valuable real-world experience along the way. </p>
        </section>
      </Layout>
  );
}