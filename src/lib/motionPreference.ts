export const MOTION_STORAGE_KEY = 'prontto-motion'

export function systemPrefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isMotionForced(): boolean {
  return typeof document !== 'undefined' && document.documentElement.classList.contains('force-motion')
}

export function prefersReducedMotion(): boolean {
  return systemPrefersReducedMotion() && !isMotionForced()
}

export function enableMotion(): void {
  try {
    window.localStorage.setItem(MOTION_STORAGE_KEY, 'on')
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }

  document.documentElement.classList.add('force-motion')
  window.location.reload()
}

export function disableMotion(): void {
  try {
    window.localStorage.setItem(MOTION_STORAGE_KEY, 'off')
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }

  document.documentElement.classList.remove('force-motion')
  window.location.reload()
}
