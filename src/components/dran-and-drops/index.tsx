import React from 'react'
import styles from './styles.module.scss'
import { useDragAndDrop } from '../../hooks/use-drag-and-drop'
import clsx from 'clsx'

const DragAndDrops = () => {
  const { dragOver, onDragOver, onDragLeave, onDrop } = useDragAndDrop()
  return (
    <div
      className={styles.dragAndDrops}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className={dragOver ? clsx(styles.rainbow, styles.rainbow__onDragOver) : styles.rainbow}>
        <span />
        <span />
      </div>
      <div className={styles.dragAndDrops__wrapper}>
        <h3 className={styles.dragAndDrops__title}>
          Drag and drop image files here. <br />
          <span className={styles.dragAndDrops__title__warn}>
            (Only image files can be converted.)
          </span>
        </h3>
        <br />
      </div>
    </div>
  )
}

export default DragAndDrops
