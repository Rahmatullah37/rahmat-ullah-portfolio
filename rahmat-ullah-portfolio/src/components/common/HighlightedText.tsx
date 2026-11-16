import { PLACEHOLDER_SOURCE } from '../../utils/placeholder'
import Placeholder from './Placeholder'

const SPLIT_PATTERN = new RegExp(`(${PLACEHOLDER_SOURCE})`, 'g')

/** Renders text and highlights any [INSERT ...] / [PLACEHOLDER ...] markers inside it. */
export default function HighlightedText({ text }: { text: string }) {
  return (
    <>
      {text.split(SPLIT_PATTERN).map((part, index) =>
        index % 2 === 1 ? <Placeholder key={index}>{part}</Placeholder> : part,
      )}
    </>
  )
}
