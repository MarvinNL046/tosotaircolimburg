import { HeroOptimized } from "@/components/sections/HeroOptimized";
import { ServicesOptimized } from "@/components/sections/ServicesOptimized";
import { WhyUs } from "@/components/sections/WhyUs";
import { TosotShowcase } from "@/components/sections/TosotShowcase";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Features } from "@/components/sections/features";
import { Contact } from "@/components/sections/Contact";
import { Benefits } from "@/components/sections/benefits";
import { Reviews } from "@/components/sections/reviews";
import { FAQ } from "@/components/sections/faq";
import { Timeline } from "@/components/sections/timeline";
import { Strategic } from "@/components/sections/strategic";
import { Footer } from "@/components/sections/footer";
import { CTABanner, StickyMobileCTA } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/json-ld";
import { 
  organizationSchema, 
  localBusinessSchema, 
  productsSchema,
  reviewSchema,
  faqSchema,
  breadcrumbSchema
} from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={productsSchema} />
      <JsonLd schema={reviewSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <main>
        <HeroOptimized />
        <ServicesOptimized />
        <WhyUs />
        <CTABanner variant="secondary" />
        <TosotShowcase />
        <ProductShowcase />
        <Features />
        <Benefits />
        <CTABanner variant="primary" />
        <Timeline />
        <Strategic />
        <Reviews />
        <FAQ />
        <CTABanner variant="emergency" />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}