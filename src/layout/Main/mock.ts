import { menuMock } from 'components/Shared/Header/mock'
import { heroMock } from 'components/Hero/mock'
import { HighlightMock } from 'components/Highlight/mock'
import { testimonialUsersMock } from 'components/Cards/TestimonialCard/mock'
import { plansMock } from 'components/Cards/PlanCard/mock'
import { socialMock } from 'components/Buttons/ButtonSocial/mock'

import { MainLayoutProps } from '.'

export const mainMock: MainLayoutProps = {
  menu: menuMock,
  hero: heroMock,
  highlights: HighlightMock,
  aboutSection: {
    text: 'O fade app é ideal para quem não deseja perder o foco do treino. Com ele é possível treinar a qualquer hora e em qualquer lugar, acessando as aulas preparadas por profissionais disponíveis ou seguindo as dicas de treino preparadas especialmente para o seu objetivo.',
    background:
      'https://res.cloudinary.com/dbnq26wqe/image/upload/v1665003925/others/Rectangle_42_1_croz7y.jpg',
  },
  testimonials: testimonialUsersMock,
  planSection: {
    plans: plansMock,
    tryText: 'Experimente Grátis por 7 dias',
  },
  footerSection: {
    company: 'Code Challenges',
    title: 'Nos acompanhe nas nossas redes',
    items: socialMock,
    linkCompany: 'https://www.codechallenges.com.br',
  },
}
