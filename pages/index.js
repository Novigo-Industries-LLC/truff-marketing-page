import Image from 'next/image'
import Layout from '../components/layout';
import AnimationText from '../components/banner/animation-text';
import HotSauceAnimation from '../components/banner/hot-sauce-animation';
import AnimatedMenu from '../components/products/animated-menu';
import Recipes from '../components/recipes';
import RecentInstagramPosts from '../components/recent-instagram-posts';
import Products from '../components/products';

export default function Home() {
  return (
    <Layout>
      <AnimationText>2023</AnimationText>
      <HotSauceAnimation />
      <Products />
      <Recipes />
      <RecentInstagramPosts />
    </Layout>
  );
}
