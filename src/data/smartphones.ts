export type PhoneId = 'poco-x8-pro' | 'iphone-16e' | 'galaxy-s25-fe';

export type ComparisonPriority = 'all' | 'performance' | 'cameras' | 'ecosystem';

export interface SmartphoneSpec {
  id: PhoneId;
  name: string;
  brand: string;
  profileLabel: string;
  featuredBadge?: string;
  isFeatured?: boolean;
  imagePath?: string;
  imageCropClass?: string;
  imageAlt: string;
  affiliateUrl: string;
  ctaLabel: string;
  microcopy: string;
  shortVerdict: string;
  strengths: [string, string, string];
  priorityTags: ComparisonPriority[];
  specs: {
    display: {
      summary: string;
      details: string;
      isWinner?: boolean;
      winnerNote?: string;
    };
    processor: {
      summary: string;
      details: string;
      isWinner?: boolean;
      winnerNote?: string;
    };
    cameras: {
      summary: string;
      details: string;
      isWinner?: boolean;
      winnerNote?: string;
    };
    battery: {
      summary: string;
      details: string;
      isWinner?: boolean;
      winnerNote?: string;
    };
    system: {
      summary: string;
      details: string;
      isWinner?: boolean;
      winnerNote?: string;
    };
  };
}

export const SMARTPHONES: SmartphoneSpec[] = [
  {
    id: 'poco-x8-pro',
    name: 'POCO X8 Pro',
    brand: 'POCO / Xiaomi',
    profileLabel: 'Rei da Bateria e Performance',
    featuredBadge: 'Mais Procurado',
    isFeatured: true,
    // <!-- INSERIR FOTO POCO X8 PRO AQUI -->
    imagePath: '/assets/aistudio/1794760654677_67ae6e44.jpg',
    imageCropClass: 'object-cover object-[50%_12%] scale-[1.35]',
    imageAlt: 'Smartphone POCO X8 Pro em destaque na cor preta com tela AMOLED',
    // <!-- INSERIR LINK POCO X8 PRO AQUI -->
    affiliateUrl: 'https://meli.la/1zFsNwz',
    ctaLabel: 'Garantir o meu POCO X8 Pro',
    microcopy: 'Envio rápido e garantia oficial',
    shortVerdict: 'Líder absoluto em autonomia, recarga ultrarrápida e fôlego bruto para jogos pesados.',
    strengths: [
      'Bateria gigante de 6.000 mAh com carregamento HyperCharge de 90 W',
      'Chipset MediaTek Dimensity 8400-Ultra otimizado para jogos a 120 fps',
      'Tela AMOLED CrystalRes 1.5K de 120 Hz com pico de até 3.200 nits',
    ],
    priorityTags: ['all', 'performance'],
    specs: {
      display: {
        summary: '6,67" AMOLED 1.5K · 120 Hz',
        details: 'Painel CrystalRes Flow AMOLED, Dolby Vision, HDR10+ e até 3.200 nits de brilho máximo.',
        isWinner: true,
        winnerNote: 'Maior resolução e brilho',
      },
      processor: {
        summary: 'Dimensity 8400-Ultra (4 nm)',
        details: 'Arquitetura All-Big-Core voltada para jogos exigentes, estabilidade térmica e multitarefa.',
        isWinner: true,
        winnerNote: 'Melhor fôlego em games',
      },
      cameras: {
        summary: '50 MP (OIS) + 8 MP · Frontal 20 MP',
        details: 'Sensor principal Sony IMX882 com estabilização óptica e gravação 4K a 60 fps.',
      },
      battery: {
        summary: '6.000 mAh · Carregamento 90 W',
        details: 'Bateria de silício-carbono de alta densidade com carregador turbo incluso na caixa.',
        isWinner: true,
        winnerNote: 'Vencedor em autonomia e recarga',
      },
      system: {
        summary: 'HyperOS 2 (Android 15) · IP68',
        details: 'Recursos Xiaomi HyperAI, som estéreo Dolby Atmos, NFC e resistência à água IP68.',
      },
    },
  },
  {
    id: 'iphone-16e',
    name: 'Apple iPhone 16e',
    brand: 'Apple',
    profileLabel: 'Porta de Entrada no iOS',
    // <!-- INSERIR FOTO APPLE IPHONE 16E AQUI -->
    imagePath: '/assets/aistudio/1794760619182_69dfe15c.jpg',
    imageCropClass: 'object-cover object-[50%_43%] scale-[0.90]',
    imageAlt: 'Smartphone Apple iPhone 16e em destaque na cor branca com câmera de 48 MP',
    // <!-- INSERIR LINK APPLE IPHONE 16E AQUI -->
    affiliateUrl: 'https://meli.la/2AGCtUs',
    ctaLabel: 'Conferir disponibilidade agora',
    microcopy: 'Confira as cores disponíveis',
    shortVerdict: 'Entrada direta no ecossistema Apple com chip A18 e suporte completo à Apple Intelligence.',
    strengths: [
      'Processador Apple A18 (3 nm) com Neural Engine de 16 núcleos',
      'Câmera Fusion 2-em-1 de 48 MP com zoom óptico de 2x via sensor',
      'Corpo compacto em alumínio com Face ID, Botão de Ação e IP68',
    ],
    priorityTags: ['all', 'ecosystem'],
    specs: {
      display: {
        summary: '6,1" Super Retina XDR · 60 Hz',
        details: 'OLED de alta precisão de cores, proteção Ceramic Shield e contraste HDR.',
      },
      processor: {
        summary: 'Apple A18 (3 nm)',
        details: 'Chip veloz em single-core, eficiência energética Apple Silicon e GPU de 4 núcleos.',
      },
      cameras: {
        summary: '48 MP Fusion · Frontal 12 MP',
        details: 'Teleobjetiva 2x integrada ao sensor principal e vídeo em 4K Dolby Vision.',
      },
      battery: {
        summary: 'Até 26h de vídeo · USB-C / Qi',
        details: 'Modem Apple C1 de baixo consumo; recarga rápida de 50% em cerca de 30 minutos.',
      },
      system: {
        summary: 'iOS · Apple Intelligence · IP68',
        details: 'Ecossistema integrado com Mac e iPad, atualizações prolongadas e segurança Face ID.',
        isWinner: true,
        winnerNote: 'Ecossistema Apple completo',
      },
    },
  },
  {
    id: 'galaxy-s25-fe',
    name: 'Samsung Galaxy S25 FE',
    brand: 'Samsung',
    profileLabel: 'Conjunto Mais Equilibrado',
    // <!-- INSERIR FOTO SAMSUNG GALAXY S25 FE AQUI -->
    imagePath: '/assets/aistudio/1794760628676_971b854b.jpg',
    imageCropClass: 'object-cover object-center scale-[1.30]',
    imageAlt: 'Smartphone Samsung Galaxy S25 FE em destaque na cor azul com câmera tripla',
    // <!-- INSERIR LINK SAMSUNG GALAXY S25 FE AQUI -->
    affiliateUrl: 'https://meli.la/2p2rtQS',
    ctaLabel: 'Checar estoque hoje',
    microcopy: 'Envio rápido e garantia oficial',
    shortVerdict: 'O pacote mais versátil do comparativo com zoom óptico 3x, tela grande e suíte Galaxy AI.',
    strengths: [
      'Conjunto triplo de câmeras com lente teleobjetiva dedicada (zoom óptico 3x)',
      'Suíte Galaxy AI completa em português com tradução e edição generativa',
      'Tela Dynamic AMOLED 2X de 6,7" a 120 Hz e 7 anos de atualizações oficiais',
    ],
    priorityTags: ['all', 'cameras', 'ecosystem'],
    specs: {
      display: {
        summary: '6,7" Dynamic AMOLED 2X · 120 Hz',
        details: 'Taxa adaptativa suave, Vision Booster para uso externo e Gorilla Glass Victus+.',
      },
      processor: {
        summary: 'Exynos 2400 (4 nm)',
        details: 'Resfriamento com câmara de vapor ampliada para sustentar multitarefa e Galaxy AI.',
      },
      cameras: {
        summary: '50 MP + 12 MP + 8 MP (Zoom 3x)',
        details: 'Único da lista com lente teleobjetiva óptica dedicada 3x; frontal de 12 MP 4K.',
        isWinner: true,
        winnerNote: 'Conjunto fotográfico mais completo',
      },
      battery: {
        summary: '4.900 mAh · 45 W + Sem Fio 15 W',
        details: 'Recarga rápida de 45 W com fio, carregamento sem fio e Wireless PowerShare.',
      },
      system: {
        summary: 'One UI + Galaxy AI · 7 anos de updates',
        details: 'Samsung DeX, Knox Vault, proteção IP68 e sete gerações garantidas de sistema.',
        isWinner: true,
        winnerNote: 'Maior longevidade no Android',
      },
    },
  },
];

export interface DecisionBlock {
  id: string;
  profileTitle: string;
  targetModel: string;
  phoneId: PhoneId;
  summary: string;
  seoAngle: string;
}

export const DECISION_BLOCKS: DecisionBlock[] = [
  {
    id: 'jogos-bateria',
    profileTitle: 'Foco em Jogos e Autonomia Extrema',
    targetModel: 'Escolha ideal: POCO X8 Pro',
    phoneId: 'poco-x8-pro',
    summary:
      'Se você passa horas jogando títulos pesados, consome streaming em alta resolução e não quer depender de tomada ao longo do dia, a combinação do chip Dimensity 8400-Ultra com bateria de 6.000 mAh e recarga de 90 W coloca o POCO X8 Pro à frente dos concorrentes.',
    seoAngle: 'Desempenho sustentado a 120 Hz e carregamento completo em minutos.',
  },
  {
    id: 'ecossistema-apple',
    profileTitle: 'Ecossistema Apple, IA e Praticidade',
    targetModel: 'Escolha ideal: Apple iPhone 16e',
    phoneId: 'iphone-16e',
    summary:
      'Para quem já usa MacBook, iPad ou Apple Watch — ou busca um smartphone compacto de 6,1" com iOS fluido, câmera Fusion de 48 MP confiável e suporte completo à Apple Intelligence — o iPhone 16e entrega a experiência essencial da marca.',
    seoAngle: 'Chip A18, Face ID, entrada USB-C e anos de atualizações oficiais do iOS.',
  },
  {
    id: 'fotografia-versatil',
    profileTitle: 'Fotografia Versátil com Zoom e Galaxy AI',
    targetModel: 'Escolha ideal: Samsung Galaxy S25 FE',
    phoneId: 'galaxy-s25-fe',
    summary:
      'Se fotografar viagens, retratos com desfoque natural e objetos distantes é prioridade, o Galaxy S25 FE é o único do comparativo com lente teleobjetiva dedicada de 3x, além de entregar tela ampla de 6,7", modo DeX e 7 anos de atualizações.',
    seoAngle: 'Câmera tripla completa + edição generativa e tradução simultânea via Galaxy AI.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Qual tem a melhor bateria: POCO X8 Pro, iPhone 16e ou Galaxy S25 FE?',
    answer:
      'O POCO X8 Pro vence com folga em capacidade bruta e velocidade de recarga. Sua bateria de 6.000 mAh com tecnologia de silício-carbono supera os 4.900 mAh do Galaxy S25 FE e entrega carregamento HyperCharge de 90 W, enquanto o Samsung chega a 45 W e o modelo da Apple trabalha com recarga rápida via USB-C.',
  },
  {
    question: 'O POCO X8 Pro é indicado apenas para jogos ou funciona bem no uso diário?',
    answer:
      'Ele atende perfeitamente ao uso diário avançado. Além do foco em performance, traz tela AMOLED 1.5K confortável sob sol forte, proteção IP68 contra água e poeira, câmera principal de 50 MP com estabilização óptica (OIS) e pagamentos por aproximação via NFC.',
  },
  {
    question: 'O Apple iPhone 16e tem suporte à Apple Intelligence e entrada USB-C?',
    answer:
      'Sim. Equipado com o chip Apple A18 (3 nm), o iPhone 16e conta com suporte nativo aos recursos da Apple Intelligence, além de adotar a porta padrão USB-C, câmera Fusion de 48 MP com zoom 2x integrado e certificação IP68.',
  },
  {
    question: 'Qual smartphone deste comparativo tira as fotos mais versáteis?',
    answer:
      'O Samsung Galaxy S25 FE possui o conjunto óptico mais completo por combinar sensor principal de 50 MP, ultra-wide de 12 MP para paisagens e uma lente teleobjetiva real com zoom óptico de 3x, recurso ausente nos outros dois concorrentes.',
  },
];
