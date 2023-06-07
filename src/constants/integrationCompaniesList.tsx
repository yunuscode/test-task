import SaplingLogo from "../assets/images/sapling-logo.png";
import WorkdayLogo from "../assets/images/workday-logo.png";
import XeroLogo from "../assets/images/xero-logo.png";
import RipplingLogo from "../assets/images/rippling-logo.png";
import ExpensiveLogo from "../assets/images/expensive-logo.svg";
import ZenefitsLogo from "../assets/images/zenefits-logo.png";
import { ConnectorArrowProps } from "../containers/home/components/integration/connector-arrow";

const appsList: App[] = [
  {
    name: "Sapling",
    type: "HR Management",
    image: SaplingLogo,
    position: {
      top: true,
      left: true,
    },
    category: "medium",
  },
  {
    name: "Workday",
    type: "HR Management",
    image: WorkdayLogo,
    position: {
      center: true,
      left: true,
    },
    category: "medium",
  },
  {
    name: "Xero",
    type: "Employers Base",
    image: XeroLogo,
    position: {
      bottom: true,
      left: true,
    },
    category: "enterprise",
  },
  {
    name: "Rippling",
    type: "Salary management",
    image: RipplingLogo,
    position: {
      top: true,
      right: true,
    },
    category: "enterprise",
  },
  {
    name: "Expensify",
    type: "HR Management",
    image: ExpensiveLogo,
    position: {
      center: true,
      right: true,
    },
    category: "enterprise",
  },
  {
    name: "Zenefits",
    type: "HR Management",
    image: ZenefitsLogo,
    position: {
      bottom: true,
      right: true,
    },
    category: "small",
  },
];

interface App {
  name: string;
  type: string;
  image: string;
  position: ConnectorArrowProps;
  category: string;
}

export default appsList;
