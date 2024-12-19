import { cva, type VariantProps } from 'class-variance-authority'

export { default as Tag } from './Tag.vue'

export const badgeVariants = cva(
  'text-sm h-7 w-32 justify-center select-none inline-flex items-center rounded-md py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
