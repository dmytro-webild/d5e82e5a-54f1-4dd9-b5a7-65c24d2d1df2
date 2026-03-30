"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="medium"
        background="circleGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Services",
          id: "features",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Pulse"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Scaling Brands in the Digital Age"
      description="We craft premium social media strategies that transform followers into loyal customers through data-driven creativity and elite content production."
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-confident-professional-in--1774878307877-deda2ae8.png",
          alt: "Client 1",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-creative-entrepreneur-shar-1774878308856-5ecb9240.png",
          alt: "Client 2",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-tech-industry-founder-clea-1774878309272-c09f1280.png",
          alt: "Client 3",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-successful-marketer-warm-l-1774878308581-a40f6e03.png",
          alt: "Client 4",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-confident-professional-in--1774878307877-deda2ae8.png",
          alt: "Client 5",
        },
      ]}
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "AI-Driven Insights",
        },
        {
          type: "text",
          text: "Viral Content Lab",
        },
        {
          type: "text",
          text: "Global Brand Reach",
        },
        {
          type: "text",
          text: "Targeted Ad Ops",
        },
        {
          type: "text",
          text: "Data Growth Engine",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Nexus",
        "Aura",
        "Vertex",
        "Prime",
        "Lumina",
        "Zenith",
        "Flux",
      ]}
      title="Trusted by visionary brands"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Philosophy"
      title="Creativity meets Precision"
      description="We don't just post content; we engineer growth engines. Our approach combines rigorous data analysis with world-class design to ensure every pixel serves your business bottom line."
      subdescription="With over 10 years of combined experience, we know how to navigate the complex algorithmic landscapes that define modern marketing."
      icon={Zap}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/high-end-creative-professional-workspace-1774878311038-c111c593.png"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Data Analytics",
          description: "Turn complex data into actionable insights.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/abstract-visualization-of-data-analytics-1774878310970-d138b868.png",
        },
        {
          id: "2",
          title: "Content Production",
          description: "World-class visual assets that convert.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/creative-content-strategy-illustration-v-1774878314186-ac6d0174.png",
        },
        {
          id: "3",
          title: "Audience Targeting",
          description: "Reach your perfect customers precisely.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/target-audience-illustration-digital-net-1774878308832-8593620f.png",
        },
      ]}
      title="Comprehensive Social Solutions"
      description="Elite services designed to elevate your brand presence across every major platform."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "CEO",
          testimonial: "Pulse scaled our leads by 300% in just 6 months. Absolute experts.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-confident-professional-in--1774878307877-deda2ae8.png?_wi=1",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "CTO",
          testimonial: "The design quality is unmatched. Truly a premium agency experience.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-creative-entrepreneur-shar-1774878308856-5ecb9240.png",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Founder",
          testimonial: "Data-driven results that feel like pure magic. Highly recommend.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-tech-industry-founder-clea-1774878309272-c09f1280.png",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Marketing Director",
          testimonial: "Professional, fast, and incredibly effective strategy.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-successful-marketer-warm-l-1774878308581-a40f6e03.png",
        },
        {
          id: "5",
          name: "Jessica Lee",
          role: "CMO",
          testimonial: "A team that understands the pulse of the market perfectly.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/portrait-of-a-confident-professional-in--1774878307877-deda2ae8.png?_wi=2",
        },
      ]}
      title="Client success stories"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "1",
          badge: "Essential",
          price: "$3,000",
          subtitle: "Basic social presence management",
          features: [
            "1 platform",
            "Content planning",
            "Reporting",
          ],
          buttons: [
            {
              text: "Enquire",
            },
          ],
        },
        {
          id: "2",
          badge: "Growth",
          price: "$6,500",
          subtitle: "Full scale strategy & production",
          features: [
            "3 platforms",
            "Full video production",
            "Paid ad management",
          ],
          buttons: [
            {
              text: "Enquire",
            },
          ],
        },
        {
          id: "3",
          badge: "Premium",
          price: "$12,000",
          subtitle: "Elite agency-in-a-box",
          features: [
            "All platforms",
            "Custom strategy",
            "Executive reporting",
          ],
          buttons: [
            {
              text: "Enquire",
            },
          ],
        },
      ]}
      title="Transparent Growth Plans"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start your journey"
      description="Ready to scale your social impact? Let's discuss your brand goals."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your brand",
        required: true,
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZaIKn9WWXlxgjSGQ2zFAQbuQz/sleek-minimalist-interface-graphic-digit-1774878310117-45b3e34c.png"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Content",
              href: "#features",
            },
            {
              label: "Strategy",
              href: "#features",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Pulse"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
