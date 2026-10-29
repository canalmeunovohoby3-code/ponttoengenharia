import type { CSSProperties } from 'react'
import { GALLERY_ITEMS } from '../data/site'

const galleryColumns = [
  [0, 3, 5],
  [2, 6],
  [4, 1],
]

export function Gallery() {
  return (
    <section className="section gallery" id="projetos" aria-labelledby="gallery-title">
      <div className="container">
        <header className="section-head gallery__head">
          <div>
            <p className="eyebrow" data-reveal="left">
              Inspirações e possibilidades
            </p>
            <h2 className="section-title" id="gallery-title" data-reveal="blur">
              Qualidade que se percebe nos detalhes.
            </h2>
          </div>
          <p className="gallery__note" data-reveal="up" style={{ '--reveal-delay': '140ms' } as CSSProperties}>
            Seleção de referências visuais de ambientes, acabamentos e instalações. As imagens desta seção são
            ilustrativas e serão substituídas pelo portfólio real da Prontto.
          </p>
        </header>

        <div className="gallery__grid">
          {galleryColumns.map((column, columnIndex) => (
            <div className="gallery__column" key={columnIndex}>
              {column.map((itemIndex, indexInColumn) => {
                const item = GALLERY_ITEMS[itemIndex]

                return (
                  <figure
                    className="gallery__item"
                    key={item.src}
                    data-reveal="clip"
                    style={{ '--reveal-delay': `${80 + indexInColumn * 90}ms` } as CSSProperties}
                  >
                    <div className="gallery__image">
                      <img
                        src={item.src}
                        alt={`${item.alt} — imagem ilustrativa`}
                        width={item.width}
                        height={item.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <figcaption>
                      <span>{item.caption}</span>
                      <small>Referência visual</small>
                    </figcaption>
                  </figure>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
