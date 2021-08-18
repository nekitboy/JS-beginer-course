import React, { useMemo, useState } from 'react'
import Block from '../block/Block'
import './Main.scss'

const colors = ['red', 'purple', 'green', 'yellow']

const generateBlocks = (count) => Array.from({ length: count })
  .map(item => {
    const randomColorIndex = Math.floor(Math.random() * colors.length)
    return {
      color: colors[randomColorIndex]
    }
  })

function Main () {
  const blocks = useMemo(() => generateBlocks(7), [])
  const [selectedBlockIndex, setSelectedBlockIndex] = useState()

  return (
    <main className="main container">
      {blocks.map((block, index) => (
        <Block
          key={index}
          className={`main-block ${selectedBlockIndex === index && 'main-block-selected'}`}
          color={block.color}
          onClick={() => setSelectedBlockIndex(index)}
        >
          {index}
        </Block>
      ))}
    </main>
  )
}

export default Main
