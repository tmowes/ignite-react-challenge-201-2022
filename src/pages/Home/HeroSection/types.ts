export type ItemsProps = {
  iconBg: keyof typeof ICON_COLORS
}

export const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  baseText: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const
