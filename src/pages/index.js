import React from 'react';
import Splash from 'components/Splash/Splash';
import Courses from 'components/Courses/Courses';
import Features from 'components/Features/Features';
import Testimonials from 'components/Testimonials/Testimonials';
import Stats from 'components/Stats/Stats';
import Projects from 'components/Projects/Projects';
import Cta from 'components/Cta/Cta';
import Faq from 'components/Faq/Faq';
import Contact from 'components/Contact/Contact';
import Instructors from 'components/Instructors/Instructors';
import Sponsors from 'components/Sponsors/Sponsors';
import Footer from 'components/Footer/Footer';
import Seo from 'components/Seo/Seo';

export default function IndexPage() {
  return (
    // Layout: Default
    <React.Fragment>
      <Seo title="Home" />
      <Splash />
      <Courses />
      <Features />
      <Testimonials />
      <Stats />
      <Projects />
      <Cta />
      <Faq />
      <Contact />
      <Instructors />
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
}
