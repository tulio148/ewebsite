export interface ResponsiveImage {
  thumb: string;
  sm: string;
  md: string;
  lg: string;
  xl?: string;
  alt: string;
}

export const getOptimizedImagePath = (name: string) =>
  `/images/optimized/${name}`;

export const optimizedImages = {
  heroImage: {
    thumb: getOptimizedImagePath("upscaled_heroImag-thumb.avif"),
    sm: getOptimizedImagePath("upscaled_heroImag-sm.avif"),
    md: getOptimizedImagePath("upscaled_heroImag-md.avif"),
    lg: getOptimizedImagePath("upscaled_heroImag-lg.avif"),
    alt: "Hero image",
  },
  firstSection: {
    thumb: getOptimizedImagePath("woman-red-sweater-thumb.avif"),
    sm: getOptimizedImagePath("woman-red-sweater-sm.avif"),
    md: getOptimizedImagePath("woman-red-sweater-md.avif"),
    lg: getOptimizedImagePath("woman-red-sweater-lg.avif"),
    alt: "Woman in red sweater",
  },
  webDevelopment: {
    thumb: getOptimizedImagePath("coded-stuff-screen-thumb.avif"),
    sm: getOptimizedImagePath("coded-stuff-screen-sm.avif"),
    md: getOptimizedImagePath("coded-stuff-screen-md.avif"),
    lg: getOptimizedImagePath("coded-stuff-screen-lg.avif"),
    xl: getOptimizedImagePath("coded-stuff-screen-xl.avif"),
    alt: "Web development",
  },
  teamWork: {
    thumb: getOptimizedImagePath(
      "web-ui-designers-are-developing-application-smartphones-team-creators-is-working-interface-mobile-phones-thumb.avif"
    ),
    sm: getOptimizedImagePath(
      "web-ui-designers-are-developing-application-smartphones-team-creators-is-working-interface-mobile-phones-sm.avif"
    ),
    md: getOptimizedImagePath(
      "web-ui-designers-are-developing-application-smartphones-team-creators-is-working-interface-mobile-phones-md.avif"
    ),
    lg: getOptimizedImagePath(
      "web-ui-designers-are-developing-application-smartphones-team-creators-is-working-interface-mobile-phones-lg.avif"
    ),
    xl: getOptimizedImagePath(
      "web-ui-designers-are-developing-application-smartphones-team-creators-is-working-interface-mobile-phones-xl.avif"
    ),
    alt: "Team working on UI design",
  },
  aiAssistant: {
    thumb: getOptimizedImagePath(
      "regular-human-job-performed-by-anthropomorphic-futuristic-robot-thumb.avif"
    ),
    sm: getOptimizedImagePath(
      "regular-human-job-performed-by-anthropomorphic-futuristic-robot-sm.avif"
    ),
    md: getOptimizedImagePath(
      "regular-human-job-performed-by-anthropomorphic-futuristic-robot-md.avif"
    ),
    lg: getOptimizedImagePath(
      "regular-human-job-performed-by-anthropomorphic-futuristic-robot-lg.avif"
    ),
    xl: getOptimizedImagePath(
      "regular-human-job-performed-by-anthropomorphic-futuristic-robot-xl.avif"
    ),
    alt: "AI Assistant",
  },
  webDesign: {
    thumb: getOptimizedImagePath("upscaled_workspace-thumb.avif"),
    sm: getOptimizedImagePath("upscaled_workspace-sm.avif"),
    md: getOptimizedImagePath("upscaled_workspace-md.avif"),
    lg: getOptimizedImagePath("upscaled_workspace-lg.avif"),
    xl: getOptimizedImagePath("upscaled_workspace-xl.avif"),
    alt: "Web page creation process with flying design elements",
  },
  webWorkspace: {
    thumb: getOptimizedImagePath("heroimg-thumb.avif"),
    sm: getOptimizedImagePath("heroimg-sm.avif"),
    md: getOptimizedImagePath("heroimg-md.avif"),
    lg: getOptimizedImagePath("heroimg-lg.avif"),
    xl: getOptimizedImagePath("heroimg-xl.avif"),
    alt: "Web page creation process with flying design elements",
  },
} as const;
