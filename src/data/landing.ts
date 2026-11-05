/**
 * Content for the landing page (Figma frame 2648:2).
 * Copy is kept exactly as written in the design file.
 */
import cureCareFacade from "../assets/landing/cure-care-facade.webp";
import dentist from "../assets/landing/dentist.webp";
import jjimsHospital from "../assets/landing/jjims-hospital.webp";
import jjimsLogo from "../assets/landing/jjims-logo.webp";
import lifesaveFacade from "../assets/landing/lifesave-facade.webp";
import lifesaveLogo from "../assets/landing/lifesave-logo.png";
import websitesShowcase from "../assets/landing/websites-showcase.jpg";

/** `width` is each text box's width in Figma, which sets where lines wrap. */
export const PRESENCE_POINTS = [
  { width: 230, text: "End to End Digital Presence, Growth, Lead Generation, Marketing & Management of your Clinic or Hospital." },
  { width: 221, text: "Search Engine Optimisation (SEO), Strategic Keyword Ranking & Organic Search Visibility Generate Patient Enquiries and Sustainable Growth." },
  { width: 230, text: "Patient-Centric UI/UX Design, Healthcare Website Development & Seamless Digital Experience Management." },
  { width: 240, text: "Dedicated Expert Team, Continuous Assistance & Reliable Technical Support." },
];

export interface Hospital {
  name: string;
  image: string;
  /** CSS object-position for the facade photo. */
  imagePosition?: string;
  logo?: {
    src: string;
    width: number;
    height: number;
    /** Optional crop of a larger logo sheet (percent box inside the logo slot). */
    crop?: { width: string; height: string; left: string; top: string };
  };
}

export const HOSPITALS: Hospital[] = [
  {
    name: "Life Save Hospital",
    image: lifesaveFacade,
    imagePosition: "30% 40%",
    logo: {
      src: lifesaveLogo,
      width: 30,
      height: 29,
      crop: { width: "537.84%", height: "131.03%", left: "-12.16%", top: "-16.55%" },
    },
  },
  {
    name: "JJIMS Hospital",
    image: jjimsHospital,
    imagePosition: "62% center",
    logo: { src: jjimsLogo, width: 35, height: 30 },
  },
  { name: "Cure & Care Hospital,", image: cureCareFacade },
];

/** Each step's lines, broken exactly where the Figma text breaks. */
export const PROCESS_STEPS = [
  ["Complete audit of", "your Current market", "positioning"],
  ["Competitor Analysic", "& Strategy"],
  ["Planning &", "Execution"],
  ["Website Development", "& Mantainance"],
  ["Payment Integration", "Support & Management"],
  ["Google My Business", "Optimisation"],
  ["SEO AEO GEO", "Increase Visitors and", "generate more quality", "Enquiries"],
  ["Generating Online", "quearies/Lead", "Generation"],
];

export const WEBSITE_SHOWCASE = [
  { src: websitesShowcase, alt: "Sanmati Traders e-commerce website designed by Yantra", width: 1080, height: 1500 },
];

export const PARTNER_DOCTORS = [
  { name: "Dr. Nupur Dabbas", specialty: "Dental Surgeon", photo: dentist, photoPosition: "38% center" },
];

export const OTHER_SERVICES = [
  "Brand Identity",
  "Social Media Marketing",
  "Website Design and Development",
  "Video Production",
  "Visual Designing",
  "2D and 3D Animation",
  "Mobile Apps",
  "Digital Marketing",
];

export const OFFICES = [
  {
    city: "Gurgaon",
    label: "Corporate  Office:",
    address: ["1227, Gaur City Mall, Greater Noida West, Uttar Pradesh,", "Pin- 201318"],
  },
  {
    city: "Noida",
    label: "Founders Office:",
    address: ["1227, Gaur City Mall, Greater Noida West, Uttar Pradesh,", "Pin- 201318"],
  },
];

/** Links for video play buttons and the CTA. Fill these in when the real URLs exist. */
export const LINKS = {
  caseStudyVideo: undefined as string | undefined,
  seoVideo: undefined as string | undefined,
  testimonialVideo: undefined as string | undefined,
  strategyCallForm: "#contact",
};
