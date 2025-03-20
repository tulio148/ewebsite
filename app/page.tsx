// import AnimatedHeading from "@/components/AnimatedHeading";
import HeroSection from "@/components/HeroSection";
import { ImageAnimation } from "@/components/ImageAnimation";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { ScrollSectionWithImage } from "@/components/ScrollSectionWithImage";
import { WorkShowcase } from "@/components/WorkShowcase";
// import * as headings from "@/lib/headings";
const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
    icon: "/icons/web-dev.svg",
    iconAlt: "Web Development Icon",
    learnMoreLink: "/services/web-development",
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences across all devices.",
    icon: "/icons/mobile-app.svg",
    iconAlt: "Mobile App Icon",
    learnMoreLink: "/services/mobile-applications",
  },
  {
    title: "UX/UI Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality to create intuitive interfaces.",
    icon: "/icons/ux-design.svg",
    iconAlt: "UX Design Icon",
    learnMoreLink: "/services/ux-design",
  },
  {
    title: "API Development",
    description:
      "Robust and scalable APIs that connect your systems and enable seamless data exchange.",
    icon: "/icons/api.svg",
    iconAlt: "API Icon",
    learnMoreLink: "/services/api-development",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and services to optimize your applications and workflows.",
    icon: "/icons/cloud.svg",
    iconAlt: "Cloud Solutions Icon",
    learnMoreLink: "/services/cloud-solutions",
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Streamlined development operations with continuous integration and deployment pipelines.",
    icon: "/icons/devops.svg",
    iconAlt: "DevOps Icon",
    learnMoreLink: "/services/devops",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "Working with this team has transformed our digital presence. Their expertise and dedication to quality are unmatched.",
    image: "/testimonials/sarah.jpg",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLabs",
    content:
      "The technical excellence and innovative solutions provided exceeded our expectations. Highly recommended!",
    image: "/testimonials/michael.jpg",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    link: "/projects/ecommerce",
  },
  {
    title: "Healthcare App",
    description: "Mobile-first healthcare platform for patient management",
    image: "/projects/healthcare.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "/projects/healthcare",
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    link: "/projects/dashboard",
  },
  {
    title: "Social Platform",
    description: "Community platform with real-time messaging",
    image: "/projects/social.jpg",
    tags: ["Vue.js", "Firebase", "WebSocket"],
    link: "/projects/social",
  },
  {
    title: "IoT Management System",
    description: "Dashboard for managing IoT devices and data",
    image: "/projects/iot.jpg",
    tags: ["React", "GraphQL", "AWS"],
    link: "/projects/iot",
  },
  {
    title: "Educational Platform",
    description: "Interactive learning platform with video courses",
    image: "/projects/education.jpg",
    tags: ["Next.js", "PostgreSQL", "AWS"],
    link: "/projects/education",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-[40px] "></div>
      <ImageAnimation image="heroImag.jpeg" className="" />
      {/* About Section */}
      <ScrollSectionWithImage
        heading="About Us"
        lines={[
          "We are a team of passionate developers and designers",
          "With over 10 years of experience in digital solutions",
          "Committed to delivering excellence in every project",
          "Using cutting-edge technologies and best practices",
        ]}
        imageSrc="/about.jpeg"
        imageAlt="Our team at work"
        imagePosition="left"
        className="py-24"
      />

      {/* Services Section */}
      <ServicesCarousel
        services={services}
        heading="Our Services"
        subheading="We deliver cutting-edge digital solutions tailored to your unique business needs"
        className="py-24"
      />

      {/* Testimonials Section */}
      <ScrollSectionWithImage
        heading="What Our Clients Say"
        lines={testimonials.map((t) => (
          <>
            <span className="mb-8">
              <span className="text-lg italic mb-4">
                &quot;{t.content}&quot;
              </span>
              <span className="font-bold">{t.name}</span>
              <span className="text-sm text-gray-600">{t.role}</span>
            </span>
          </>
        ))}
        imageSrc="/testimonials-image.jpg"
        imageAlt="Happy clients"
        imagePosition="right"
        className="py-24"
      />

      {/* Work Showcase Section */}
      <WorkShowcase
        heading="Our Past Work"
        projects={projects}
        className="bg-secondary/5"
      />

      {/* <AnimatedHeading heading={headings.firstHeading} /> */}
      <div className="h-[4000px] bg-accent"></div>
    </>
  );
}
