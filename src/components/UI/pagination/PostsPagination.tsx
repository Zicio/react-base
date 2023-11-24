import { usePagination } from "../../../hooks/usePagination";
import styles from "./Pagination.module.css";

interface IPagination {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  totalPages,
  currentPage,
  setPage,
}) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className={styles.page__wrapper}>
      {pagesArray.map((page) => {
        return (
          <button
            className={`${styles.page} ${
              currentPage === page ? styles.page__current : ""
            }`}
            key={page}
            type="button"
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
