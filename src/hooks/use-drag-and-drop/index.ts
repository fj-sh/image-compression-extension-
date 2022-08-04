import React, { useState } from 'react'

function isImageFile(file: File) {
  return file.type.split('/')[0] === 'image'
}

/**
 * Convert image file to webp and return image URL.
 * @param {File} file
 * @param {string} quality
 * @return {Promise<string>} image URL
 */
async function convertImageToWebp(file: File, quality: number): Promise<string> {
  const imageBitMap = await createImageBitmap(file)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = imageBitMap.width
  canvas.height = imageBitMap.height

  ctx?.drawImage(imageBitMap, 0, 0)
  return await new Promise<string>((resolve, reject) =>
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(URL.createObjectURL(blob))
        } else {
          reject(new Error('blob is null'))
        }
      },
      'image/webp',
      quality
    )
  )
}

function downloadImageFile(name: string, url: string) {
  const link = document.createElement('a')
  link.href = url
  link.download = `${name}.webp`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function useDragAndDrop() {
  const [errorMessage, setErrorMessage] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [quality, setQuality] = useState(0.7)
  const onDragOver = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const onDragLeave = () => setDragOver(false)

  const onDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    const selectedFiles = Array.from(e?.dataTransfer?.files)
    for (const file of selectedFiles) {
      if (isImageFile(file)) {
        const url = await convertImageToWebp(file, quality)
        downloadImageFile(file.name, url)
      }
    }
  }

  return {
    dragOver,
    onDragOver,
    onDragLeave,
    onDrop,
    errorMessage,
  }
}
