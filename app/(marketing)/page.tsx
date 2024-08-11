import Testimonials from '@/components/testimonials/testimonials-default';
import TestimonialsCarousel from '@/components/testimonials/testimonials-carousel';
import FAQSection from '@/components/landing-page/faq';
import Hero from '@/components/landing-page/hero';
import LogoCloud from '@/components/landing-page/logo-cloud-svg';
import LogoCloudScroll from '@/components/landing-page/logo-cloud-svg-scroll';
import ContactPrimary from '@/components/landing-page/contact';
import Features from '@/components/landing-page/features';
import FeaturesHover from '@/components/landing-page/features-hover';
import Pricing from '@/components/pricing/pricing-primary';
import Link from 'next/link';
import Image from 'next/image';

export default async function IndexPage() {
  return (
    <div className="flex-col gap-10 mb-5">
      <FeaturesHover />
    </div>
  );
}
