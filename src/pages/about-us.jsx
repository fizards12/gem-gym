import { Button } from '@material-tailwind/react'
import AboutUS from '../components/features/about-section/about'
import Features from '../components/features/feature-section/features-section'
import Footer from '../components/features/footer/footer'
import Header from '../components/features/header'
import Team from '../components/features/team-carousel/our-team'
import Banner from '../components/features/banner'
import Reviews from '../components/features/testimontials/reviews'

function About() {
  return (
    <div className='w-full'>
      <Header />
      <Features/>
      <AboutUS/>
      <Team/>
      <Banner
        title={"REGISTRATION NOW TO GET MORE DEALS"}
        subTitle={"WHERE HEALTH, BEAUTY AND FITNESS MEET."}
      >
        <Button variant="text" color="orange" size="lg" ripple={false}
          className={`rounded-none
        bg-opacity-100
        border border-orange-600
        hover:bg-orange-600 hover:text-white`}
        >
          APPOINTMENT
        </Button>
      </Banner>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default About