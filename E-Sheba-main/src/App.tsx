import CardSection from './Components/Cards'
import Choise from './Components/Choise'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Members from './Components/Members'
import DrawerAppBar from './Components/Navbar'
import Quality from './Components/Quality'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
const App = () => {
  return (
    <div className='overflow-hidden'>
      <DrawerAppBar/>
      <HeroSection/>
      <CardSection/>
      <Choise/>
      <Members/>
      <Quality/>
      <Footer/>
    </div>
  )
}

export default App