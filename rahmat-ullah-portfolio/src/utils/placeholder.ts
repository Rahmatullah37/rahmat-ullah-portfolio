/** Matches editable markers such as [INSERT LINK] or [PLACEHOLDER: add details]. */
export const PLACEHOLDER_SOURCE = '\\[(?:INSERT|PLACEHOLDER)[^\\]]*\\]'

export const isPlaceholder = (value?: string): boolean =>
  Boolean(value) && new RegExp(PLACEHOLDER_SOURCE).test(value as string)
