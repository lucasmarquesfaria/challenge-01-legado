import { GetStaticProps } from 'next'

import { MainLayout, MainLayoutProps } from 'layout/Main'

import { mainMock } from 'layout/Main/mock'

export default function Main(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const data: MainLayoutProps = {
    menu: mainMock.menu,
    hero: mainMock.hero,
    highlights: mainMock.highlights,
    aboutSection: mainMock.aboutSection,
    testimonials: mainMock.testimonials,
    planSection: mainMock.planSection,
    footerSection: mainMock.footerSection,
  }

  return {
    props: {
      ...data,
    },
  }
}
