import React from 'react'
import styles from './styles.module.scss'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useDragAndDrop } from '../../hooks/use-drag-and-drop'
import clsx from 'clsx'
import { Typography } from '@mui/material'

function valuetext(value: number) {
  return `${value}%`
}

const DragAndDrops = () => {
  const { dragOver, onDragOver, onDragLeave, onDrop, quality, setQuality } = useDragAndDrop()

  const onQualityChange = (e: Event, val: any) => {
    if (typeof val === 'number') {
      setQuality(val)
    }
  }

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
        <Box sx={{ width: 250 }}>
          <Typography gutterBottom>Conversion quality</Typography>
          <Slider
            aria-label="Quality"
            value={quality}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={0.1}
            marks
            onChange={onQualityChange}
            min={0.1}
            max={0.9}
          />
        </Box>
      </div>
    </div>
  )
}

export default DragAndDrops
