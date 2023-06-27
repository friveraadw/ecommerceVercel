import HeaderSection from '../components/HeaderSection';
import BestSelling from '../components/BestSelling';
import Collections from '../components/Collections';
import '../assets/css/home.css';

export const Home = () => {
  return (
    <>
      <HeaderSection />
      <BestSelling />
      <Collections />
    </>
  )
}