import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ContactForm } from "@/components/sections/contact-form";
import { Benefits } from "@/components/sections/benefits";
import { Reviews } from "@/components/sections/reviews";
import { FAQ } from "@/components/sections/faq";
import { Timeline } from "@/components/sections/timeline";
import { Strategic } from "@/components/sections/strategic";
import { Footer } from "@/components/sections/footer";
import { JsonLd } from "@/components/json-ld";
import { 
  organizationSchema, 
  localBusinessSchema, 
  productsSchema,
  reviewSchema,
  faqSchema
} from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={productsSchema} />
      <JsonLd schema={reviewSchema} />
      <JsonLd schema={faqSchema} />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Timeline />
        <Strategic />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}