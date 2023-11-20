import { IFilter } from "../../types";
import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/select/MySelect";

interface IPostFilter {
  filter: IFilter;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

const PostFilter: React.FC<IPostFilter> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        type="text"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        selectedSort={filter.sort}
        changeSort={(sort) => setFilter({ ...filter, sort })}
        defaultValue="Cортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};
export default PostFilter;
