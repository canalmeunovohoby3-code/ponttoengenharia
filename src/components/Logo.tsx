type LogoProps = {
  variant?: 'dark' | 'light'
  href?: string
}

export function Logo({ variant = 'dark', href = '#inicio' }: LogoProps) {
  return (
    <a className={`brand brand--${variant}`} href={href} aria-label="Prontto Engenharia & Reforma — ir para o início">
      <img
        className="brand__image"
        src="/images/logo.png"
        alt="Prontto Engenharia & Reforma"
        width={844}
        height={202}
        decoding="async"
      />
    </a>
  )
}
