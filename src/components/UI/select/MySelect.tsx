import { SelectHTMLAttributes } from "react";
import { IOption, sort } from "../../../types";

interface IMySelect extends SelectHTMLAttributes<HTMLSelectElement> {
  defaultOption: IOption;
  options: IOption[];
  selectedSort: string;
  changeSort: (value: sort) => void;
}

const MySelect: React.FC<IMySelect> = ({
  defaultOption,
  options,
  selectedSort,
  changeSort,
  ...props
}) => {
  return (
    <select
      {...props}
      value={selectedSort}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        changeSort(e.target.value as sort)
      }
    >
      <option value={defaultOption.value} disabled>
        {defaultOption.name}
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
