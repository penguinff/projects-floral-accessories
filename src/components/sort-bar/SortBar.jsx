import styles from './sort-bar.module.scss';

const SortBar = ({ total, setProductOrder }) => {
  const handleChange = (event) => {
    setProductOrder(event.target.value);
  }

  return (
    <div className={styles.sortBar}>
      <div className={styles.total}>共 {total} 件商品</div>
      <div className={styles.select}>
        <select name='sort' id='sort' onChange={handleChange}>
          <option hidden>排序</option>
          <option value='ascending'>價格低至高</option>
          <option value='descending'>價格高至低</option>
        </select>
      </div>
    </div>
  )
}

export default SortBar;