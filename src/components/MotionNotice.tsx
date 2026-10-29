import { enableMotion, isMotionForced, systemPrefersReducedMotion } from '../lib/motionPreference'
import { Icon } from './Icon'

export function MotionNotice() {
  if (!systemPrefersReducedMotion() || isMotionForced()) return null

  return (
    <aside className="motion-notice" aria-label="Preferência de animações">
      <span className="motion-notice__icon" aria-hidden="true">
        <Icon name="bolt" size={19} />
      </span>
      <p>
        <strong>Seu dispositivo prefere menos movimento.</strong>
        Ative as animações para ver a experiência completa do site.
      </p>
      <button className="btn btn--primary btn--sm motion-notice__action" type="button" onClick={enableMotion}>
        Ativar animações
        <Icon name="arrow-right" size={16} />
      </button>
    </aside>
  )
}
