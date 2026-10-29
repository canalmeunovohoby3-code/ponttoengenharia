import type {
  Differential,
  FaqItem,
  GalleryItem,
  Modality,
  NavLink,
  ProcessStep,
  Segment,
  ServiceGroup,
} from '../lib/types'

export const WHATSAPP_NUMBER = '5581981475149'
export const WHATSAPP_DISPLAY = '(81) 98147-5149'
export const INSTAGRAM_HANDLE = '@pronttoengenharia'
export const INSTAGRAM_URL = 'https://www.instagram.com/pronttoengenharia/'

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Conheci a Prontto Engenharia & Reforma pelo site e gostaria de solicitar um orçamento para minha obra.'

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
]

export const HERO_DIFFERENTIALS = [
  'Gestão completa da obra',
  'Planejamento e controle de execução',
  'Soluções residenciais e comerciais',
] as const

export const ABOUT_PILLARS = [
  {
    number: '01',
    title: 'Planejamento',
    description: 'Organização das etapas, cronograma e orçamento.',
    icon: 'compass' as const,
  },
  {
    number: '02',
    title: 'Gestão',
    description: 'Coordenação de fornecedores, materiais e equipes.',
    icon: 'users' as const,
  },
  {
    number: '03',
    title: 'Execução',
    description: 'Atenção aos detalhes técnicos, acabamentos e qualidade.',
    icon: 'hardhat' as const,
  },
]

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'obras-reformas',
    number: '01',
    title: 'Obras completas e reformas',
    intro: 'Do imóvel inteiro ao ambiente específico, com escopo definido e etapas organizadas.',
    services: [
      {
        title: 'Reformas residenciais completas',
        description:
          'Transformação de apartamentos, casas e sobrados com organização das etapas e cuidado com cada ambiente.',
        items: [
          'Apartamentos novos ou adquiridos na planta.',
          'Casas e sobrados.',
          'Renovação de ambientes e modernização de imóveis.',
        ],
        icon: 'home',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar um orçamento para uma reforma residencial completa.',
      },
      {
        title: 'Reformas comerciais e corporativas',
        description:
          'Adequação de espaços comerciais com foco em funcionamento, identidade e continuidade das atividades.',
        items: [
          'Lojas e espaços comerciais.',
          'Escritórios e consultórios.',
          'Restaurantes, recepções e ambientes corporativos.',
          'Planejamento para reduzir interrupções nas atividades comerciais, quando viável.',
        ],
        icon: 'building',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar um orçamento para uma reforma comercial ou corporativa.',
      },
      {
        title: 'Gerenciamento de obras',
        description:
          'Organização técnica e acompanhamento das etapas para dar mais clareza à execução da obra.',
        items: [
          'Planejamento e acompanhamento de cronograma.',
          'Coordenação de equipes e fornecedores.',
          'Organização de compras de materiais.',
          'Acompanhamento de orçamento e etapas de execução.',
        ],
        icon: 'clipboard',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de conversar sobre gerenciamento de obra.',
      },
    ],
  },
  {
    id: 'servicos-tecnicos',
    number: '02',
    title: 'Serviços técnicos de engenharia',
    intro: 'Análise, documentação e orientação técnica para decisões mais seguras em cada projeto.',
    services: [
      {
        title: 'Projetos complementares',
        description:
          'Projetos desenvolvidos para integrar as instalações e o funcionamento do imóvel ao escopo da obra.',
        items: [
          'Projetos elétricos.',
          'Projetos hidráulicos.',
          'Projetos estruturais.',
          'Projetos de iluminação.',
        ],
        icon: 'blueprint',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar um orçamento para projetos complementares.',
      },
      {
        title: 'Laudos técnicos e ART',
        description:
          'Documentação e responsabilidade técnica conduzidas conforme a natureza e as exigências de cada serviço.',
        items: [
          'Documentação e responsabilidade técnica conforme a natureza do serviço.',
          'Apoio técnico para reformas em condomínios.',
          'Orientação sobre exigências técnicas aplicáveis a cada obra.',
        ],
        icon: 'document',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de entender sobre laudos técnicos e ART para minha obra.',
      },
      {
        title: 'Inspeção e vistoria de imóveis',
        description:
          'Verificação das condições observáveis do imóvel para apoiar decisões antes, durante ou após a obra.',
        items: [
          'Vistoria para entrega de chaves.',
          'Identificação de possíveis defeitos aparentes.',
          'Avaliação das condições observáveis do imóvel.',
        ],
        icon: 'search',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar uma inspeção ou vistoria de imóvel.',
      },
      {
        title: 'Consultoria técnica e orçamentária',
        description:
          'Orientação preliminar para entender possibilidades, prioridades e o planejamento de custos da reforma.',
        items: [
          'Avaliação preliminar de imóveis.',
          'Análise de viabilidade de reformas.',
          'Orientação para planejamento de custos e intervenções.',
        ],
        icon: 'compass',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar uma consultoria técnica e orçamentária.',
      },
    ],
  },
  {
    id: 'acabamentos-infraestrutura',
    number: '03',
    title: 'Acabamentos e infraestrutura',
    intro: 'Instalações, materiais e acabamentos que constroem a qualidade percebida no resultado final.',
    services: [
      {
        title: 'Instalações elétricas, hidráulicas e climatização',
        description:
          'Adequação das redes e infraestrutura técnica para o uso seguro e funcional dos ambientes.',
        items: [
          'Adequação de redes elétricas.',
          'Quadros de distribuição.',
          'Tubulações hidráulicas.',
          'Infraestrutura para ar-condicionado.',
        ],
        icon: 'bolt',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar um orçamento para instalações elétricas, hidráulicas ou de climatização.',
      },
      {
        title: 'Revestimentos e pisos',
        description:
          'Aplicação de revestimentos com atenção ao alinhamento, ao acabamento e à composição do ambiente.',
        items: [
          'Porcelanatos.',
          'Pisos laminados e vinílicos.',
          'Pastilhas, pedras e rodapés.',
          'Acabamentos de pisos e paredes.',
        ],
        icon: 'tile',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar um orçamento para revestimentos e pisos.',
      },
      {
        title: 'Gesso e drywall',
        description:
          'Soluções para forros, divisórias e detalhes construtivos com acabamento limpo e preciso.',
        items: [
          'Forros rebaixados.',
          'Sancas.',
          'Divisórias.',
          'Soluções de isolamento acústico conforme especificação.',
        ],
        icon: 'wall',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar um orçamento para gesso e drywall.',
      },
      {
        title: 'Pintura e tratamento de superfícies',
        description:
          'Preparação e pintura para renovar ambientes, valorizar materiais e recuperar superfícies.',
        items: [
          'Pintura residencial e comercial.',
          'Texturas decorativas.',
          'Efeito cimento queimado.',
          'Recuperação e pintura de fachadas.',
        ],
        icon: 'paint',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar um orçamento para pintura e tratamento de superfícies.',
      },
      {
        title: 'Impermeabilização',
        description:
          'Proteção de áreas expostas à umidade com sistemas adequados a cada tipo de superfície.',
        items: [
          'Banheiros e cozinhas.',
          'Varandas e lajes.',
          'Áreas molhadas.',
          'Piscinas, quando aplicável.',
        ],
        icon: 'shield',
        message:
          'Olá! Conheci a Prontto pelo site e gostaria de solicitar um orçamento para impermeabilização.',
      },
    ],
  },
]

export const MODALITIES: Modality[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    label: 'Mão de obra',
    description:
      'Para quem precisa executar serviços específicos com escopo definido e acompanhamento técnico quando contratado.',
    highlights: [
      'Execução dos serviços contratados.',
      'Definição de etapas e escopo.',
      'Orientação e acompanhamento técnico conforme o contrato.',
      'Responsabilidade técnica e ART quando aplicáveis e devidamente contratadas.',
    ],
    cta: 'Orçar modalidade Essencial',
    message:
      'Olá! Conheci a Prontto pelo site e gostaria de orçar a modalidade Essencial (mão de obra).',
    icon: 'hardhat',
  },
  {
    id: 'completo',
    name: 'Completo',
    label: 'Mão de obra + Gestão',
    description:
      'Uma solução para quem busca mais organização, coordenação de equipes e controle das etapas da obra.',
    highlights: [
      'Planejamento da execução.',
      'Coordenação de profissionais e fornecedores.',
      'Acompanhamento de cronograma.',
      'Gestão de materiais e compras conforme o escopo contratado.',
      'Acompanhamento do orçamento definido.',
    ],
    cta: 'Orçar modalidade Completo',
    message:
      'Olá! Conheci a Prontto pelo site e gostaria de orçar a modalidade Completo (mão de obra + gestão).',
    icon: 'clipboard',
  },
  {
    id: 'chave-na-mao',
    name: 'Chave na Mão',
    label: 'Turnkey',
    description:
      'Uma solução integrada para quem deseja centralizar a gestão da reforma e receber o espaço pronto para utilização, conforme o projeto e o contrato aprovados.',
    highlights: [
      'Planejamento e organização geral da obra.',
      'Coordenação de materiais, fornecedores e equipes.',
      'Gestão das etapas de execução.',
      'Acompanhamento dos acabamentos.',
      'Entrega conforme escopo, orçamento e critérios acordados.',
    ],
    cta: 'Quero minha obra chave na mão',
    message:
      'Olá! Conheci a Prontto pelo site e gostaria de orçar a modalidade Chave na Mão (turnkey).',
    featured: true,
    icon: 'key',
  },
]

export const SEGMENTS: Segment[] = [
  {
    title: 'Engenharia de Reformas — Turnkey',
    description:
      'Gestão integrada de reformas, desde o planejamento até a entrega final do ambiente, de acordo com o escopo contratado.',
    image: '/images/segment-turnkey.jpg',
    alt: 'Ambiente residencial contemporâneo integrado, com marcenaria e iluminação planejadas',
    width: 1200,
    height: 900,
  },
  {
    title: 'Manutenção e Adequação Predial',
    description:
      'Intervenções para adequação de instalações, manutenção de ambientes, recuperação de fachadas e modernização de espaços.',
    image: '/images/segment-predial.jpg',
    alt: 'Fachadas de edifícios corporativos modernos vistos de baixo',
    width: 1200,
    height: 900,
  },
  {
    title: 'Arquitetura, Construção e Fit-out',
    description:
      'Adequação de espaços residenciais, comerciais e corporativos para atender a necessidades funcionais, técnicas e estéticas.',
    image: '/images/segment-fitout.jpg',
    alt: 'Escritório corporativo amplo com divisórias de vidro e pé-direito alto',
    width: 1200,
    height: 900,
  },
]

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Sala de estar contemporânea com poltronas claras, estante e iluminação natural',
    caption: 'Sala de estar contemporânea',
    width: 1000,
    height: 750,
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Cozinha reformada com bancada em madeira, armários claros e revestimento geométrico',
    caption: 'Cozinha e área de convivência',
    width: 1000,
    height: 667,
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Banheiro reformado com piso xadrez, bancada branca e plantas',
    caption: 'Banheiro reformado',
    width: 1000,
    height: 1499,
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Corredor de escritório corporativo com divisórias de vidro e piso polido',
    caption: 'Escritório corporativo',
    width: 1000,
    height: 668,
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Área externa de residência com piscina, deck e fachada de madeira',
    caption: 'Área externa e lazer',
    width: 1000,
    height: 1500,
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'Apartamento reformado com sala ampla, janelas e piso claro',
    caption: 'Apartamento integrado',
    width: 1000,
    height: 667,
  },
  {
    src: '/images/gallery-7.jpg',
    alt: 'Sala residencial clara com marcenaria sob medida e composição de quadros',
    caption: 'Detalhes de acabamento',
    width: 1000,
    height: 563,
  },
]

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Planejamento antes da execução',
    description: 'Escopo, etapas e prioridades organizados antes do início dos serviços.',
    icon: 'compass',
  },
  {
    title: 'Escopo e orçamento alinhados',
    description: 'Cada proposta parte do que será executado, com condições definidas previamente.',
    icon: 'ruler',
  },
  {
    title: 'Coordenação de profissionais e fornecedores',
    description: 'Interface entre equipes, materiais e serviços ao longo da obra.',
    icon: 'users',
  },
  {
    title: 'Acompanhamento das etapas',
    description: 'Verificação do andamento conforme o cronograma e o escopo contratado.',
    icon: 'calendar',
  },
  {
    title: 'Atenção aos acabamentos',
    description: 'Cuidado com os detalhes que definem o resultado final do ambiente.',
    icon: 'layers',
  },
  {
    title: 'Comunicação clara durante o projeto',
    description: 'Informação objetiva sobre etapas, decisões e próximos passos.',
    icon: 'message',
  },
  {
    title: 'Soluções para ambientes residenciais, comerciais e corporativos',
    description: 'Atendimento a diferentes tipos de imóvel e necessidade.',
    icon: 'building',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Entendimento da necessidade',
    description:
      'O cliente explica o tipo de imóvel, o serviço desejado e os objetivos do projeto.',
    icon: 'message',
  },
  {
    number: '02',
    title: 'Avaliação e orçamento',
    description:
      'A empresa analisa as informações disponíveis e define os próximos passos para elaborar uma proposta compatível com a necessidade.',
    icon: 'clipboard',
  },
  {
    number: '03',
    title: 'Planejamento e execução',
    description:
      'Após a aprovação, são organizadas as etapas, os recursos e o cronograma conforme o contrato.',
    icon: 'calendar',
  },
  {
    number: '04',
    title: 'Acompanhamento e entrega',
    description:
      'A obra é acompanhada de acordo com o escopo contratado, com atenção às etapas previstas e aos critérios de entrega acordados.',
    icon: 'check',
  },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'A Prontto realiza reformas completas?',
    answer:
      'Sim. A empresa oferece soluções para reformas residenciais, comerciais e corporativas, conforme avaliação e escopo contratado.',
  },
  {
    question: 'O que significa uma reforma chave na mão?',
    answer:
      'É uma modalidade em que a gestão e a execução das etapas contratadas são coordenadas para entregar o ambiente pronto para uso, conforme o projeto e as condições acordadas.',
  },
  {
    question: 'A empresa fornece os materiais?',
    answer:
      'Isso depende da modalidade contratada e do orçamento aprovado. A participação na compra e na gestão dos materiais deve ser definida na proposta.',
  },
  {
    question: 'Posso contratar somente um serviço específico?',
    answer:
      'Sim. É possível solicitar orçamento para serviços pontuais, acabamentos e adequações, conforme disponibilidade e viabilidade técnica.',
  },
  {
    question: 'A Prontto trabalha com ART e documentação técnica?',
    answer:
      'Os serviços que exigem responsabilidade técnica devem ser avaliados e conduzidos por profissionais legalmente habilitados, com emissão da documentação aplicável ao escopo contratado.',
  },
  {
    question: 'Como solicitar um orçamento?',
    answer:
      'Basta entrar em contato pelo WhatsApp, explicar a necessidade e informar a localização do imóvel para iniciar o atendimento.',
  },
]

export const REGION_MESSAGE =
  'Olá! Gostaria de consultar a disponibilidade da Prontto Engenharia & Reforma para realizar uma obra em Pernambuco.'

export const CONTACT_MESSAGE =
  'Olá! Conheci a Prontto Engenharia & Reforma pelo site e gostaria de conversar sobre meu projeto.'
