import _ from 'lodash'
import React from 'react'

const Emoji = () => {
  const emojis = ["🚘","🍋‍🟩","⚽","💖","👷🏻‍♂️","🍆","🥔","😻","😉","😎","🤩"]
  const r = _.random(0, emojis.length-1)
  return (
    <span>{emojis[r]}</span>
  )
}

export default Emoji
