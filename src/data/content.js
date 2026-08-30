export const SITE_DATA = {
  institution: {
    groupName: 'NEFP - UFRPE - UAST',
    fullName: 'Núcleo de Estudos em Fisiologia e Pós-Colheita de Frutas, Hortaliças e Flores',
    university: 'Universidade Federal Rural de Pernambuco (UFRPE)',
    campus: 'Unidade Acadêmica de Serra Talhada (UAST)',
    city: 'Serra Talhada - PE, Brasil',
    address: 'Av. Gregório Ferraz Nogueira, s/n, José Tomé de Souza Ramos, CEP 56909-535',
    email: 'nefp.uast.ufrpe@gmail.com',
    coordinator: 'Prof. Dr. Adriano do Nascimento Simões',
    cnpqLevel: 'Bolsista de Produtividade em Pesquisa do CNPq - Nível 2'
  },

  stats: [
    { value: '15+', label: 'Anos de Pesquisa no Semiárido', description: 'Atuação contínua desde 2009 na UAST' },
    { value: '80+', label: 'Artigos Publicados', description: 'Em periódicos científicos de alto impacto' },
    { value: '37+', label: 'Pós-Graduados Formados', description: '22 mestres, 10 doutores e 5 pós-doutores' },
    { value: 'Nível 2', label: 'Produtividade CNPq', description: 'Liderança e excelência acadêmica' }
  ],

  brandConcept: {
    title: 'Conceito da Logomarca do NEFP',
    subtitle: 'A união entre a natureza do Semiárido e o rigor da engenharia científica',
    description: 'A logomarca atual do Núcleo de Estudos em Fisiologia e Pós-Colheita de Frutas, Hortaliças e Flores (NEFP) expressa a identidade e a evolução de suas linhas de pesquisa ao longo dos anos.',
    pillars: [
      {
        icon: 'Leaf',
        title: 'Palma Forrageira & Cactáceas',
        description: 'Elemento estruturante e símbolo de resiliência semiárida, fonte de mucilagem para a síntese de biopolímeros, biorevestimentos e plásticos verdes sustentáveis.'
      },
      {
        icon: 'Cog',
        title: 'Engrenagens da Inovação',
        description: 'Simbolizam o caráter técnico, aplicado e transformador das pesquisas do grupo: transformar conhecimento biológico em soluções tecnológicas práticas.'
      },
      {
        icon: 'Sparkles',
        title: 'Diversidade de Culturas',
        description: 'Atuação abrangente em fisiologia e conservação de pitaia, uva, goiaba, flores ornamentais, hortaliças e raízes com tecnologia de ponta.'
      }
    ]
  },

  timeline: [
    {
      year: '2009',
      title: 'Fundação do NEFP na UAST/UFRPE',
      description: 'Chegada do Prof. Dr. Adriano Simões à Unidade Acadêmica de Serra Talhada. As primeiras pesquisas com graduandos foram desenvolvidas com muito empenho na cozinha industrial da instituição.'
    },
    {
      year: '2011',
      title: 'Criação do PPGPV & Expansão',
      description: 'Com a implantação do Programa de Pós-Graduação em Produção Vegetal (PPGPV/UAST), o NEFP incorporou estudantes de mestrado, doutorado e pós-doutorado, equipando modernos laboratórios.'
    },
    {
      year: '2018 - 2022',
      title: 'Liderança Científica Regional',
      description: 'Presidência da Sociedade Científica do Semiárido Brasileiro e realização de congressos e simpósios nacionais como o I e II SINPROVS.'
    },
    {
      year: '2019 - 2020',
      title: 'Workshops Plástico Verde do Sertão',
      description: 'Consolidação do pioneirismo na extração de mucilagem de palma forrageira para formulação de biofilmes comestíveis e bioplásticos biodegradáveis.'
    },
    {
      year: '2024 - Presente',
      title: 'Inovação Digital & IA na Agricultura',
      description: 'Desenvolvimento do projeto PitayaQual (PIBITI), integrando inteligência artificial, visão computacional e fenotipagem digital à conservação pós-colheita.'
    }
  ],

  researchLines: [
    {
      id: 'biopolimeros',
      badge: 'Biotecnologia & Sustentabilidade',
      title: 'Biopolímeros e Biofilmes de Palma Forrageira',
      description: 'Extração e purificação de mucilagem de cactáceas do semiárido para desenvolvimento de recobrimentos biodegradáveis e filmes bioativos que prolongam a vida útil de frutas e vegetais.',
      icon: 'Layers',
      tags: ['Palma Forrageira', 'Bioplásticos', 'Mucilagem', 'Sustentabilidade', 'Recobrimentos Comestíveis'],
      color: 'emerald'
    },
    {
      id: 'pos-colheita',
      badge: 'Fisiologia & Qualidade',
      title: 'Fisiologia e Conservação Pós-Colheita de Frutos',
      description: 'Estudos aprofundados sobre alterações bioquímicas, metabólicas e enzimáticas em frutos como pitaia vermelha, uva de mesa e goiaba durante o armazenamento e a comercialização.',
      icon: 'Apple',
      tags: ['Pitaia Vermelha', 'Uva', 'Goiaba', 'Minicenoura', 'Processamento Mínimo'],
      color: 'amber'
    },
    {
      id: 'inteligencia-artificial',
      badge: 'Inovação Tecnológica (PIBITI)',
      title: 'IA e Visão Computacional na Agricultura (PitayaQual)',
      description: 'Plataforma inteligente de apoio à decisão que utiliza redes neurais convolucionais e processamento digital de imagens para classificação comercial não destrutiva de frutos.',
      icon: 'Cpu',
      tags: ['PitayaQual', 'Visão Computacional', 'Inteligência Artificial', 'PIBITI/CNPq', 'Classificação Não Destrutiva'],
      color: 'sky'
    },
    {
      id: 'estresse-semiarido',
      badge: 'Adaptação Agronômica',
      title: 'Manejo de Estresse Hídrico e Salino no Semiárido',
      description: 'Avaliação de manejos nutricionais atenuadores (como adubação nitrogenada e molíbdica) para aumentar a tolerância e produtividade de culturas sob estresses ambientais severos.',
      icon: 'SunMedium',
      tags: ['Semiárido', 'Déficit Hídrico', 'Estresse Salino', 'Nutrição Vegetal'],
      color: 'orange'
    },
    {
      id: 'flores-ornamentais',
      badge: 'Floricultura Tropical',
      title: 'Fisiologia e Tecnologia de Flores Ornamentais',
      description: 'Pesquisas voltadas à conservação, longevidade pós-colheita e abertura floral de espécies ornamentais e tropicais adaptadas ao clima do Nordeste.',
      icon: 'Flower2',
      tags: ['Flores Tropicais', 'Conservação', 'Senescência Floral', 'Ornamentais'],
      color: 'rose'
    }
  ],

  projects: [
    {
      title: 'PitayaQual: Plataforma Inteligente para Classificação Comercial e Apoio à Decisão na Pós-Colheita de Pitaia Vermelha',
      program: 'PIBITI / CNPq - Iniciação Tecnológica & Inovação',
      period: '2024 - 2026',
      leader: 'Prof. Dr. Adriano do Nascimento Simões',
      fellow: 'Klayvert Gabriel Alves Rodrigues de Carvalho',
      description: 'Desenvolvimento de aplicativo móvel e modelos de inteligência artificial treinados para estimar peso, volume, calibre e maturação de cladódios e frutos de pitaia de forma não invasiva.',
      status: 'Em Andamento',
      tags: ['IA', 'Visão Computacional', 'Pitaia', 'App Mobile']
    },
    {
      title: 'Consolidação de Tecnologias Voltadas à Indústria de Alimentos no Sertão do Pajeú',
      program: 'BEXT - Bolsa de Extensão e Desenvolvimento Tecnológico',
      period: '2020 - 2022',
      leader: 'Prof. Dr. Adriano do Nascimento Simões',
      description: 'Transferência de conhecimento científico e bioprocessos para produtores e agroindústrias locais da região do Pajeú em Pernambuco.',
      status: 'Concluído com Sucesso',
      tags: ['Extensão', 'Agroindústria', 'Sertão do Pajeú', 'Capacitação']
    }
  ],

  team: [
    {
      id: 'adriano-simoes',
      name: 'Prof. Dr. Adriano do Nascimento Simões',
      role: 'Coordenador & Líder do NEFP',
      category: 'coordenacao',
      level: 'Professor Associado IV & Bolsista Produtividade CNPq Nível 2',
      image: '/images/team/adriano.png',
      lattesUrl: 'http://lattes.cnpq.br/1895049701533568',
      bioShort: 'Doutor em Fisiologia Vegetal (UFV/CEBAS-CSIC Espanha - Conceito CAPES 7). Ex-coordenador do Mestrado e Doutorado em Produção Vegetal (UAST/UFRPE). Editor Científico de periódicos de renome.',
      highlights: [
        'Bolsista de Produtividade em Pesquisa do CNPq - Nível 2',
        'Doutorado em Ciências Agrárias / Fisiologia Vegetal pela Universidade Federal de Viçosa (UFV) com período sanduíche no CEBAS/CSIC (Espanha)',
        'Mestrado em Fisiologia Vegetal pela UFV / FAPEMIG',
        'Graduação em Engenharia Agronômica pela UFERSA',
        'Orientou mais de 22 mestres, 10 doutores e 5 pós-doutores',
        'Autor de mais de 80 artigos científicos, capítulos de livros e trabalhos internacionais',
        'Editor Científico da revista Horticultura Brasileira desde 2012, Editor de Área da revista Caatinga e revisor de periódicos de ponta',
        'Ex-Presidente da Sociedade Científica do Semiárido Brasileiro (2018–2022)'
      ],
      disciplines: ['Fisiologia Vegetal (Agronomia, Biologia, Zootecnia)', 'Fisiologia de Plantas Adaptadas ao Semiárido (Pós-Graduação)', 'Tecnologia Pós-Colheita e Métodos Laboratoriais']
    },
    {
      id: 'mayara-martim',
      name: 'Mayara Bernardo Tavares Martim',
      role: 'Doutoranda / Mestra em Produção Vegetal',
      category: 'doutorado',
      level: 'Mestranda em Produção Vegetal (UFRPE/FACEPE)',
      image: '/images/team/mayara.jpg',
      lattesUrl: 'http://lattes.cnpq.br/',
      bioShort: 'Engenheira Agrônoma formada pela UFRPE/UAST e mestranda em Produção Vegetal, bolsista FACEPE. Foco na extração de mucilagem e filmes biopoliméricos de cactáceas.',
      highlights: [
        'Mestrado em Produção Vegetal (março/2024 – fevereiro/2026) na UFRPE/UAST, sob orientação do Prof. Dr. Adriano Simões',
        'Bolsista da Fundação de Amparo à Ciência e Tecnologia de Pernambuco (FACEPE)',
        'Graduação em Engenharia Agronômica pela UFRPE/UAST (2017–2022)',
        'Técnica em Edificações pelo Instituto Federal do Sertão Pernambucano (IF-Sertão PE)',
        'Pesquisas em extração de mucilagem, manejo agronômico e síntese de materiais biodegradáveis para conservação de frutas'
      ],
      disciplines: ['Fisiologia Pós-Colheita', 'Biopolímeros da Palma', 'Materiais Biodegradáveis']
    },
    {
      id: 'cristina-santos',
      name: 'Cristina Maria Ferreira dos Santos',
      role: 'Mestranda em Produção Vegetal',
      category: 'mestrado',
      level: 'Mestranda em Produção Vegetal (UFRPE/UAST)',
      image: '/images/team/cristina.jpg',
      lattesUrl: 'http://lattes.cnpq.br/',
      bioShort: 'Engenheira Agrônoma (2025) e mestranda pelo PPGPV/UAST. Pesquisa alterações pós-colheita em pitaia no Semiárido e mitigação de estresses salino e hídrico.',
      highlights: [
        'Mestrado em Produção Vegetal (março/2026 – fevereiro/2028) na UFRPE/UAST',
        'Orientador: Prof. Dr. Adriano do Nascimento Simões; Coorientadores: Prof. Dr. Alexandre Campelo de Oliveira e Dra. Valécia Nogueira Santos e Silva',
        'Graduação em Agronomia pela UFRPE/UAST (2019–2025)',
        'Pesquisas sobre o efeito atenuador da adubação nitrogenada e molíbdica em plantas sob déficit hídrico e salinidade no Semiárido',
        'Estudo do desenvolvimento e maturação fisiológica da pitaia'
      ],
      disciplines: ['Fisiologia da Pitaia', 'Manejo de Estresses Ambientais', 'Conservação de Frutos']
    },
    {
      id: 'klayvert-carvalho',
      name: 'Klayvert Gabriel Alves Rodrigues de Carvalho',
      role: 'Graduando & Bolsista de Inovação Tecnológica (PIBITI)',
      category: 'graduacao',
      level: 'Graduando em Sistemas de Informação (UFRPE) & Bolsista PIBITI/CNPq',
      image: '/images/team/klayvert.jpg',
      lattesUrl: 'http://lattes.cnpq.br/1183920172672937',
      bioShort: 'Bolsista de Iniciação Tecnológica (PIBITI/CNPq) no projeto PitayaQual. Desenvolvedor de software focado em Inteligência Artificial, visão computacional e aplicativos móveis.',
      highlights: [
        'Graduação em Sistemas de Informação pela Universidade Federal Rural de Pernambuco (UFRPE, desde 2021)',
        'Bolsista PIBITI/CNPq com o projeto PitayaQual: Plataforma Inteligente para Classificação Comercial e Apoio à Decisão na Pós-Colheita de Pitaia Vermelha',
        'Orientador: Prof. Dr. Adriano do Nascimento Simões',
        'Desenvolvedor de software com experiência profissional (NTIST 2023-2024 e Coflint OÜ 2025-2026)',
        'Atuação em treinamento de modelos de Machine Learning/Deep Learning, processamento digital de imagens e arquitetura web/mobile'
      ],
      disciplines: ['Inteligência Artificial Aplicada à Agricultura', 'Visão Computacional', 'Desenvolvimento Web & Mobile']
    },
    {
      id: 'ivanice-santos',
      name: 'Dra. Ivanice da Silva Santos',
      role: 'Pesquisadora Colaboradora & Ex-Membro',
      category: 'ex-membros',
      level: 'Doutora em Fitotecnia (UFERSA / UAST / CAPES)',
      image: '/images/team/ivanice.jpg',
      lattesUrl: 'http://lattes.cnpq.br/',
      bioShort: 'Doutoranda/Doutora em Fitotecnia (UFERSA) com período visitante na UAST/UFRPE (Bolsista CAPES). Mestre em Ciências Agrárias (UEPB), Tecnóloga em Agroecologia (IFPB) e Bióloga (UFCG).',
      highlights: [
        'Doutorado em Fitotecnia pela Universidade Federal Rural do Semi-Árido (UFERSA) com aluna visitante no PPGPV-UAST/UFRPE, orientada pelo Prof. Dr. Adriano Simões (Bolsista CAPES)',
        'Mestrado em Ciências Agrárias pela Universidade Estadual da Paraíba (UEPB, 2019–2021)',
        'Graduação em Tecnologia em Agroecologia pelo IFPB (2015–2018)',
        'Graduação em Ciências Biológicas pela Universidade Federal de Campina Grande (UFCG, 2009–2013)',
        'Especialização em Gestão dos Recursos Ambientais do Semiárido',
        'Coautora de artigos de destaque em predição não destrutiva de cladódios de pitaia e fisiologia pós-colheita'
      ],
      disciplines: ['Fisiologia de Cactáceas', 'Adubação Orgânica', 'Tecnologia Pós-Colheita']
    }
  ],

  publications: [
    {
      id: 'pub-1',
      title: 'Non-destructive method for prediction of area and weight of red pitaya cladodes (Hylocereus polyrhizus) using linear dimensions',
      authors: 'SANTOS, Ivanice da Silva; FERREIRA, N. L.; RIBEIRO, J. E. S.; SILVA, V. S.; SÁ, S. A.; BRITO, F. A. L.; SILVA, T. G. F.; SIMÕES, Adriano do Nascimento.',
      journal: 'Acta Scientiarum - Agronomy',
      year: '2025',
      volume: 'v. 48, p. 1-9',
      doi: '10.4025/actasciagron.v48i1.73265',
      doiUrl: 'https://doi.org/10.4025/actasciagron.v48i1.73265',
      category: 'Artigo em Periódico',
      tags: ['Pitaia Vermelha', 'Modelagem Não Destrutiva', 'Cladódios', 'Morfometria'],
      abstract: 'Desenvolvimento e validação de equações alométricas precisas para estimativa da área e da massa fresca de cladódios de pitaia vermelha a partir de dimensões lineares de fácil medição em campo.'
    },
    {
      id: 'pub-2',
      title: 'Extração e caracterização de mucilagem de palma forrageira (Opuntia ficus-indica) para síntese de filmes biopoliméricos bioativos',
      authors: 'MARTIM, Mayara Bernardo Tavares; SIMÕES, Adriano do Nascimento; et al.',
      journal: 'Revista Brasileira de Engenharia Agrícola e Ambiental',
      year: '2024',
      volume: 'Publicação Científica do NEFP',
      doi: '',
      doiUrl: '',
      category: 'Artigo em Periódico',
      tags: ['Palma Forrageira', 'Biopolímeros', 'Mucilagem', 'Sustentabilidade'],
      abstract: 'Avaliação de parâmetros de rendimento, propriedades reológicas e barreira a gases em biofilmes formulados à base de mucilagem de palma forrageira colhida no Sertão de Pernambuco.'
    },
    {
      id: 'pub-3',
      title: 'PitayaQual: Modelagem computacional e inteligência artificial aplicadas ao controle de qualidade pós-colheita',
      authors: 'CARVALHO, Klayvert Gabriel Alves Rodrigues de; SIMÕES, Adriano do Nascimento.',
      journal: 'Anais do Congresso de Iniciação Tecnológica e Inovação (PIBITI/CNPq)',
      year: '2024',
      volume: 'v. 1, p. 1-6',
      doi: '',
      doiUrl: '',
      category: 'Trabalho em Congresso / PIBITI',
      tags: ['PitayaQual', 'Visão Computacional', 'Inteligência Artificial', 'PIBITI'],
      abstract: 'Arquitetura e desenvolvimento de um aplicativo inteligente para fenotipagem digital rápida e predição de qualidade comercial de frutos de pitaia no Semiárido.'
    },
    {
      id: 'pub-4',
      title: 'Alterações fisiológicas e conservação pós-colheita de hortaliças e raízes minimamente processadas sob atmosfera modificada',
      authors: 'SIMÕES, Adriano do Nascimento; PUSCHMANN, Rolf; MOSQUIM, Paulo Roberto.',
      journal: 'Horticultura Brasileira',
      year: '2023',
      volume: 'Revisão Temática',
      doi: '',
      doiUrl: '',
      category: 'Artigo / Revisão',
      tags: ['Processamento Mínimo', 'Fisiologia Pós-Colheita', 'Atmosfera Modificada'],
      abstract: 'Análise integrada sobre os mecanismos bioquímicos de escurecimento enzimático, respiração e retenção nutricional em produtos vegetais frescos cortados.'
    }
  ],

  workshops: [
    {
      id: 'ws-1',
      title: '1º Workshop Plástico Verde do Sertão',
      date: '19 de Outubro de 2019',
      location: 'Auditório UAST/UFRPE - Serra Talhada/PE',
      image: '/images/gallery/gallery_1.jpg',
      badge: 'Edição Pioneira',
      description: 'Evento científico dedicado à discussão e apresentação de biopolímeros inovadores obtidos a partir da flora do Semiárido brasileiro para substituição de plásticos convencionais.',
      topics: ['Biopolímeros de Cactáceas', 'Economia Circular no Campo', 'Embalagens Biodegradáveis', 'Desenvolvimento Regional Sustentável']
    },
    {
      id: 'ws-2',
      title: '2º Workshop Plástico Verde do Sertão',
      date: '21 e 28 de Nov, 5 e 12 de Dezembro',
      location: 'Unidade Acadêmica de Serra Talhada (UAST/UFRPE)',
      image: '/images/gallery/gallery_5.jpg',
      badge: 'Edição Expandida',
      description: 'Série de conferências, mesas-redondas e oficinas laboratoriais sobre o avanço tecnológico na formulação de revestimentos comestíveis para conservação pós-colheita.',
      topics: ['Recobrimentos Ativos', 'Vida Útil de Frutos', 'Transferência Tecnológica', 'Parcerias com a Indústria']
    },
    {
      id: 'ws-3',
      title: 'I e II Simpósio Nacional de Produção Vegetal no Semiárido (SINPROVS)',
      date: 'Eventos Bienais',
      location: 'Serra Talhada - PE',
      image: '/images/gallery/gallery_8.jpg',
      badge: 'Congresso Nacional',
      description: 'Presidido pela liderança do NEFP e Sociedade Científica do Semiárido, reunindo centenas de pesquisadores do Brasil inteiro.',
      topics: ['Fisiologia do Estresse', 'Biotecnologia Agrícola', 'Recursos Naturais do Bioma Caatinga']
    }
  ],

  gallery: [
    { id: 1, src: '/images/gallery/gallery_1.jpg', title: 'Equipe e Experimentos no Laboratório de Fisiologia', category: 'Laboratório' },
    { id: 2, src: '/images/gallery/gallery_2.jpg', title: 'Análise de Maturação e Qualidade de Frutos', category: 'Laboratório' },
    { id: 3, src: '/images/gallery/gallery_3.jpg', title: 'Medições Fisiológicas em Casa de Vegetação', category: 'Campo' },
    { id: 4, src: '/images/gallery/gallery_4.jpg', title: 'Coleta e Manejo de Palma Forrageira no Semiárido', category: 'Campo' },
    { id: 5, src: '/images/gallery/gallery_5.jpg', title: 'Extração e Homogeneização de Mucilagem', category: 'Laboratório' },
    { id: 6, src: '/images/gallery/gallery_6.jpg', title: 'Avaliação de Biofilmes e Biopolímeros Biodegradáveis', category: 'Laboratório' },
    { id: 7, src: '/images/gallery/gallery_7.jpg', title: 'Monitoramento Não Destrutivo de Cladódios de Pitaia', category: 'Campo' },
    { id: 8, src: '/images/gallery/gallery_8.jpg', title: 'Apresentação de Trabalhos no Workshop Plástico Verde', category: 'Eventos' },
    { id: 9, src: '/images/gallery/gallery_9.jpg', title: 'Pesquisadores em Atividade Laboratorial com Espectrofotometria', category: 'Laboratório' },
    { id: 10, src: '/images/gallery/gallery_10.jpg', title: 'Avaliação de Vida de Prateleira de Frutos Tratados', category: 'Laboratório' },
    { id: 11, src: '/images/gallery/gallery_11.jpg', title: 'Pesquisa com Culturas de Uva de Mesa e Goiaba', category: 'Campo' },
    { id: 12, src: '/images/gallery/gallery_12.jpg', title: 'Flores Tropicais e Conservação Pós-Colheita', category: 'Laboratório' },
    { id: 13, src: '/images/gallery/gallery_13.jpg', title: 'Mesa de Discussão e Integração da Pós-Graduação (PPGPV)', category: 'Eventos' },
    { id: 14, src: '/images/gallery/gallery_14.jpg', title: 'Testes Físico-Químicos de Firmeza e Acidez Titulável', category: 'Laboratório' },
    { id: 15, src: '/images/gallery/gallery_15.jpg', title: 'Reunião Científica Semanal do NEFP', category: 'Eventos' },
    { id: 16, src: '/images/gallery/gallery_16.jpg', title: 'Demonstração de Recobrimentos em Frutas Frescas', category: 'Laboratório' },
    { id: 17, src: '/images/gallery/gallery_17.jpg', title: 'Confraternização e Homenagens Acadêmicas', category: 'Eventos' }
  ],

  fundingPartners: [
    {
      id: 'facepe',
      name: 'FACEPE',
      fullName: 'Fundação de Amparo à Ciência e Tecnologia do Estado de Pernambuco',
      logo: '/images/partners/facepe.png',
      grantProcesses: ['APQ-1029-5.01/10', 'APQ-0795-5.01/16'],
      description: 'Financiamento de projetos de pesquisa científica e bolsas de mestrado e doutorado para o desenvolvimento do Sertão pernambucano.'
    },
    {
      id: 'cnpq',
      name: 'CNPq',
      fullName: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
      logo: '/images/partners/cnpq.png',
      grantProcesses: ['Processo 423100/2018-1', 'Bolsa de Produtividade Nível 2', 'Bolsas PIBITI'],
      description: 'Apoio contínuo à pesquisa com bolsas de produtividade em pesquisa, editais universais e iniciação tecnológica (PIBITI).'
    },
    {
      id: 'capes',
      name: 'CAPES',
      fullName: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior',
      logo: '/images/partners/capes.jpg',
      grantProcesses: ['Processo: 88881-159183/2017-01', 'Bolsas PPGPV/UAST'],
      description: 'Fomento aos cursos de Pós-Graduação em Produção Vegetal (PPGPV) da UFRPE/UAST e bolsas de formação de mestres e doutores.'
    },
    {
      id: 'ufrpe',
      name: 'UFRPE / UAST',
      fullName: 'Universidade Federal Rural de Pernambuco - Unidade Acadêmica de Serra Talhada',
      logo: '/images/partners/ufrpe.png',
      grantProcesses: ['Processo Institucional: 8072.292.073-15'],
      description: 'Instituição sede que fornece infraestrutura laboratorial, apoio administrativo e espaço físico para as atividades do NEFP.'
    }
  ],

  opportunities: {
    title: 'Venha Ser um Pesquisador no NEFP',
    subtitle: 'Oportunidades para Iniciação Científica (PIBIC/PIBITI), Mestrado, Doutorado e Pós-Doutorado',
    description: 'O NEFP-UFRPE-UAST é um grupo de pesquisa de vanguarda que realiza trabalhos de alto nível nas mais diversas áreas da fisiologia vegetal, biotecnologia e inovação digital. Se você tem paixão pela ciência aplicada e quer se destacar no cenário acadêmico e profissional, venha fazer parte de nossa equipe.',
    levels: [
      {
        title: 'Iniciação Científica & Tecnológica (PIBIC / PIBITI)',
        forWhom: 'Estudantes de graduação em Agronomia, Sistemas de Informação, Ciências Biológicas, Zootecnia e Engenharia.',
        benefits: 'Bolsa de pesquisa (CNPq/FACEPE/UFRPE), publicações em eventos, desenvolvimento de competências em IA, biopolímeros ou bancada laboratorial.'
      },
      {
        title: 'Mestrado e Doutorado em Produção Vegetal (PPGPV/UAST)',
        forWhom: 'Graduados e mestres interessados em avançar nas linhas de fisiologia pós-colheita, estresse ambiental e biomateriais.',
        benefits: 'Orientação de excelência, bolsas CAPES/FACEPE, infraestrutura moderna e participação em redes de pesquisa nacionais e internacionais.'
      },
      {
        title: 'Pós-Doutorado & Parcerias Interinstitucionais',
        forWhom: 'Doutores e pesquisadores de outras universidades para colaboração científica, cotutelas e projetos conjuntos.',
        benefits: 'Acesso a laboratórios consolidados, coautorias de alto impacto e aplicação prática em ecossistemas do Semiárido.'
      }
    ]
  }
};
