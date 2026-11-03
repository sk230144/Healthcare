import type { ComponentType, ReactNode, SVGProps } from "react";
import { BarChartIcon, MapPinIcon, MonitorIcon, SearchIcon } from "../icons";
import "./ServiceList.css";

export type ServiceTone = "green" | "blue" | "orange" | "purple";

export interface Service {
  id: string;
  href: string;
  label: ReactNode;
  tone: ServiceTone;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const DEFAULT_SERVICES: Service[] = [
  { id: "organic-marketing", href: "#organic-marketing", label: "Organic Marketing", tone: "green", Icon: BarChartIcon },
  { id: "seo", href: "#seo", label: "SEO", tone: "blue", Icon: SearchIcon },
  {
    id: "google-business",
    href: "#google-business",
    label: <><span className="nowrap">Google Business</span> Optimisation</>,
    tone: "orange",
    Icon: MapPinIcon,
  },
  {
    id: "websites",
    href: "#websites",
    label: <><span className="nowrap">High-Converting</span> Websites</>,
    tone: "purple",
    Icon: MonitorIcon,
  },
];

interface ServiceListProps {
  items?: Service[];
}

export function ServiceList({ items = DEFAULT_SERVICES }: ServiceListProps) {
  return (
    <ul className="services">
      {items.map(({ id, href, label, tone, Icon }) => (
        <li key={id}>
          <a className="service" href={href}>
            <span className={`service__icon service__icon--${tone}`}>
              <Icon />
            </span>
            <span className="service__label">{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
