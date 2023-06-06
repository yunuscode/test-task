import Checkbox from "../../../../components/checkbox/checkbox";
import ConnectorArrow, { ConnectorArrowProps } from "./connector-arrow";

export default function ListItem({
  name,
  type,
  image,
  position,
  activeCategory,
  category,
  checkboxAction,
  id
}: ListItemProps) {
  const isItemActive = activeCategory === category;
  const activeColor = isItemActive ? "violet-500" : "violet-300";
  const zIndex = isItemActive ? "z-10" : "";
  const borderColor = isItemActive ? "border-violet-500" : "";
  const marginTop = !position.top ? "mt-2" : "md:mt-0 mt-2";

  return (
    <li
      className={`flex items-center border-2 rounded-xl lg:w-2/3 sm:w-4/5 w-[90%] p-2 px-3 h-[80px] relative lg:mr-0 lg:ml-0 ${marginTop} ${borderColor} ${zIndex} ${position.left ? 'md:ml-auto md:mr-4' : 'md:mr-auto md:ml-4'}`}
    >
      <ConnectorArrow {...position} activeColor={activeColor} />
      <img
        src={image}
        alt={`${name}_logo`}
        className="rounded-xl xl:w-12 xl:h-12 lg:w-10 lg:h-10 md:w-8 md:h-8 w-10 h-10 object-contain max-w-full"
      />
      <div className="p-2 w-1/2">
        <p>{name}</p>
        <p className="text-xs mt-0.5 text-[#5F517D]">{type}</p>
      </div>
      <Checkbox name="test_switch" id={id} changeCategory={checkboxAction} checked={isItemActive} className="ml-auto xl:mr-3 mr-1" />
    </li>
  );
}

interface ListItemProps {
  name: string;
  type: string;
  image: string;
  position: ConnectorArrowProps;
  category: string;
  activeCategory: string;
  checkboxAction: Function;
  id: number;
}
