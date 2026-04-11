export function Button({
  as: Comp = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base =
    'ring-focus inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out active:scale-[0.98]'

  const variants = {
    primary:
      'bg-fuchsia-400 text-zinc-950 shadow-soft hover:bg-fuchsia-300 hover:shadow-glow',
    secondary:
      'glass glass-hover text-zinc-100',
    ghost:
      'text-zinc-200 hover:bg-white/5 border border-transparent hover:border-white/10',
  }

  return (
    <Comp className={`${base} ${variants[variant] ?? variants.primary} ${className}`} {...props}>
      {children}
    </Comp>
  )
}

