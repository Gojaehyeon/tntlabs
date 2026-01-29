'use client';

import styles from './YearFilter.module.css';

interface Props {
  years: number[];
  selectedYear: number | null;
  onYearSelect: (year: number | null) => void;
}

export default function YearFilter({ years, selectedYear, onYearSelect }: Props) {
  return (
    <div className={styles.yearFilter}>
      <button
        className={`${styles.yearBtn} ${selectedYear === null ? styles.active : ''}`}
        onClick={() => onYearSelect(null)}
      >
        전체
      </button>
      {years.map((year) => (
        <button
          key={year}
          className={`${styles.yearBtn} ${selectedYear === year ? styles.active : ''}`}
          onClick={() => onYearSelect(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
