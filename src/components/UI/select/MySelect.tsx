import { SelectHTMLAttributes } from "react";
import { IFilter, IOption } from "../../../types";

interface IMySelect extends SelectHTMLAttributes<HTMLSelectElement> {
  defaultValue: string;
  options: IOption[];
  selectedSort: IFilter["sort"];
  changeSort: (value: IFilter["sort"]) => void;
}

const MySelect: React.FC<IMySelect> = ({
  defaultValue,
  options,
  selectedSort,
  changeSort,
  ...props
}) => {
  return (
    <select
      {...props}
      value={selectedSort!}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        changeSort(e.target.value as IFilter["sort"])
      }
    >
      <option value="" disabled>
        {defaultValue}
      </option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};
export default MySelect;
