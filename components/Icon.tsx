import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
  icon: IconDefinition;
  className?: string;
}

export const Icon = ({ icon, className = "" }: IconProps) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};
