import styles from './product-preview.module.scss';
import ProductItem from '../product-item/ProductItem';

// product preview data --> will move to redux
const productPreviewData = {
  title: 'New Arrival',
  items: [
    {
      id: 0,
      imageUrl: 'https://images.unsplash.com/photo-1551844533-144ea0d19c93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      title: '玩味木頭流蘇耳環',
      price: 590
    },
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1609245340409-cad2474ab1d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2082&q=80',
      title: '復古水晶項鏈',
      price: 1850
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1608543837489-0fab463c925e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      title: '鍍金葉子手鐲',
      price: 950
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      title: '字母指環',
      price: 850
    },
  ]
}

const ProductPreview = () => (
  <div className={styles.productPreview}>
    <div className={styles.previewTitle}>{productPreviewData.title}</div>
    <div className={styles.previewContainer}>
      {productPreviewData.items.map((item, index) => (
        <ProductItem item={item} />
      ))}
    </div>
    </div>
);

export default ProductPreview;