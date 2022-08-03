import React from 'react'
import styles from './styles.module.scss'

const DragAndDrops = () => {
  return (
    <div className={styles.dragAndDrops}>
      <div className={styles.rainbow}>
        <span />
        <span />
      </div>
      <div className={styles.dragAndDrops__wrapper}>
        <h3 className={styles.dragAndDrops__title}>Drag and drop image files here.</h3>
        <br />
      </div>
    </div>
  )
}

export default DragAndDrops
