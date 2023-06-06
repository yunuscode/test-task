import "./checkbox.css";

export default function Checkbox ({ name, id, className="", checked, changeCategory }: CheckboxProps) {
    return <label className={"checkbox relative " + className} key={id}>
        <input onChange={(_) => {
            changeCategory(id);
        }} className="checkbox-input sr-only" type="checkbox" name={name} checked={checked} />
        <div className="checkbox-component flex items-center w-[22px] h-[14px] border-2 rounded-3xl border-[#A39CB5] transition-transform px-0.5">
            <span className="checkbox-dot transition-transform block w-[5px] h-[5px] bg-[#A39CB5] rounded-full"></span>
        </div>
    </label>
}

interface CheckboxProps {
    name: string;
    id?: any;
    className?: string;
    checked?: boolean;
    changeCategory: Function;
}