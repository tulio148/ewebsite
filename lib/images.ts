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
    thumb: getOptimizedImagePath("upscaled_heroimg-thumb.avif"),
    sm: getOptimizedImagePath("upscaled_heroimg-sm.avif"),
    md: getOptimizedImagePath("upscaled_heroimg-md.avif"),
    lg: getOptimizedImagePath("upscaled_heroimg-lg.avif"),
    alt: "Hero image",
  },
  workspace: {
    thumb: getOptimizedImagePath("upscaled_workspace-thumb.avif"),
    sm: getOptimizedImagePath("upscaled_workspace-sm.avif"),
    md: getOptimizedImagePath("upscaled_workspace-md.avif"),
    lg: getOptimizedImagePath("upscaled_workspace-lg.avif"),
    alt: "Workspace",
  },
  webDevelopment: {
    thumb: getOptimizedImagePath(
      "website-developer-png-man-laptop-screen-mixed-media-transparent-background-thumb.avif"
    ),
    sm: getOptimizedImagePath(
      "website-developer-png-man-laptop-screen-mixed-media-transparent-background-sm.avif"
    ),
    md: getOptimizedImagePath(
      "website-developer-png-man-laptop-screen-mixed-media-transparent-background-md.avif"
    ),
    lg: getOptimizedImagePath(
      "website-developer-png-man-laptop-screen-mixed-media-transparent-background-lg.avif"
    ),
    xl: getOptimizedImagePath(
      "website-developer-png-man-laptop-screen-mixed-media-transparent-background-xl.avif"
    ),
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
    thumb: getOptimizedImagePath(
      "creative-designer-team-working-with-template-layout-framework-mobile-phone-application-thumb.avif"
    ),
    sm: getOptimizedImagePath(
      "creative-designer-team-working-with-template-layout-framework-mobile-phone-application-sm.avif"
    ),
    md: getOptimizedImagePath(
      "creative-designer-team-working-with-template-layout-framework-mobile-phone-application-md.avif"
    ),
    lg: getOptimizedImagePath(
      "creative-designer-team-working-with-template-layout-framework-mobile-phone-application-lg.avif"
    ),
    xl: getOptimizedImagePath(
      "creative-designer-team-working-with-template-layout-framework-mobile-phone-application-xl.avif"
    ),
    alt: "Creative web design team working on mobile application layout",
  },
  webWorkspace: {
    thumb: getOptimizedImagePath(
      "office-desk-displaying-creation-web-page-with-elements-flying-around-concept-web-page-computer-display-illustrating-website-arrangement-design-process-thumb.avif"
    ),
    sm: getOptimizedImagePath(
      "office-desk-displaying-creation-web-page-with-elements-flying-around-concept-web-page-computer-display-illustrating-website-arrangement-design-process-sm.avif"
    ),
    md: getOptimizedImagePath(
      "office-desk-displaying-creation-web-page-with-elements-flying-around-concept-web-page-computer-display-illustrating-website-arrangement-design-process-md.avif"
    ),
    lg: getOptimizedImagePath(
      "office-desk-displaying-creation-web-page-with-elements-flying-around-concept-web-page-computer-display-illustrating-website-arrangement-design-process-lg.avif"
    ),
    xl: getOptimizedImagePath(
      "office-desk-displaying-creation-web-page-with-elements-flying-around-concept-web-page-computer-display-illustrating-website-arrangement-design-process-xl.avif"
    ),
    alt: "Web page creation process with flying design elements",
  },
} as const;
