import { Question, DiagnosisProfile, ProductModule, BonusItem, TestimonialItem, FaqItem } from '../types/funnel';

export const BRAND_CONFIG = {
  namePrefix: 'RAINHA',
  nameSuffix: 'DA CASA',
  slogan: 'Tenha uma casa organizada sem passar o dia inteiro arrumando',
  badge: 'Método Oficial de Rotina Doméstica',
  copyright: `© ${new Date().getFullYear()} Rainha da Casa. Todos os direitos reservados.`,
  colors: {
    primaryPink: '#E11D48',
    deepWine: '#4C0519',
    softPinkBg: '#FFF1F2',
    accentGreen: '#10B981',
    gold: '#F59E0B',
    white: '#FFFFFF',
  }
};

export const CHECKOUT_CONFIG = {
  checkoutUrl: 'https://pay.kiwify.com.br/placeholder', // Substitua pela URL de checkout real
  paymentMethodsText: 'Pagamento 100% Seguro • PIX ou Cartão • Acesso Imediato',
};

export const PRICE_CONFIG = {
  anchorFullValue: 227.00,
  promotionalPrice: 29.90,
  installmentCount: 3,
  installmentValue: 10.60,
  currencySymbol: 'R$',
  itemizedValues: [
    { name: 'Método Rainha da Casa Completo (10 Módulos)', value: 297.00 },
    { name: 'Assistente de Receitas com IA', value: 97.00 },
    { name: 'Receitas de Produtos Caseiros', value: 47.00 },
    { name: 'Casa Sempre Cheirosa', value: 37.00 },
    { name: 'Recebendo Visitas Sem Stress', value: 47.00 },
    { name: '4 Bônus Exclusivos de Entrada Rápida', value: 97.00 },
  ],
  // Helper to calculate total value
  get calculatedTotalValue(): number {
    return this.itemizedValues.reduce((acc, item) => acc + item.value, 0);
  },
  // Helper to calculate savings
  get calculatedSavings(): number {
    return Number((this.anchorFullValue - this.promotionalPrice).toFixed(2));
  }
};

export const OFFER_CONFIG = {
  headline: 'SEU ACESSO COMPLETO AO MÉTODO RAINHA DA CASA',
  subheadline: 'Condição exclusiva liberada para quem concluiu o diagnóstico de rotina.',
  countdownDurationMinutes: 15,
  scarcityNotice: '⚠️ Essa condição com 87% de desconto só fica ativa enquanto o cronômetro estiver rodando.',
  ctaText: 'QUERO MEU ACESSO AGORA',
  subCtaText: 'Clique para garantir seu acesso com desconto e todos os bônus',
};

export const GUARANTEE_CONFIG = {
  days: 30,
  title: 'GARANTIA BLINDADA DE 30 DIAS',
  text: 'Você pode conhecer o método, colocar as estratégias em prática e, caso perceba que o método não ajudou a simplificar sua rotina doméstica, você pode solicitar 100% do seu dinheiro de volta. Sem letras miúdas e sem ressentimentos.',
  badgeText: 'Risco Zero para Você',
};

export const IMAGE_CONFIG = {
  landingHero: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
  messyHouse: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  organizedHouse: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  relaxedWoman: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  productMockup: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
};

export const QUIZ_CONFIG = {
  totalQuestions: 7,
  autoAdvanceDelayMs: 380,
  processingDurationMs: 3000,
};

export const QUESTION_CONFIG: Question[] = [
  {
    id: 1,
    title: 'Hoje, cuidar da sua casa te traz mais tranquilidade ou mais cansaço?',
    subtitle: 'Seja sincera com o seu momento atual',
    options: [
      { id: 'q1_a', text: 'Mais cansaço do que tranquilidade', emoji: '😮‍💨', tag: 'energy' },
      { id: 'q1_b', text: 'Vivo cansada e nunca fica como eu queria', emoji: '😩', tag: 'overwhelmed' },
      { id: 'q1_c', text: 'Tem dias bons e dias complicados', emoji: '🤍', tag: 'routine' },
      { id: 'q1_d', text: 'Está razoável, mas quero melhorar', emoji: '🙂', tag: 'maintenance' },
    ],
  },
  {
    id: 2,
    title: 'O que mais pesa para você na rotina da casa?',
    subtitle: 'Qual desses sentimentos é mais frequente?',
    options: [
      { id: 'q2_a', text: 'Sentir que tudo depende de mim', emoji: '😮‍💨', tag: 'overwhelmed' },
      { id: 'q2_b', text: 'Viver cansada e sem energia', emoji: '😴', tag: 'energy' },
      { id: 'q2_c', text: 'Arrumar e pouco depois estar tudo bagunçado', emoji: '🔄', tag: 'maintenance' },
      { id: 'q2_d', text: 'Ficar com vergonha quando alguém aparece', emoji: '🙈', tag: 'routine' },
    ],
  },
  {
    id: 3,
    title: 'Você cuida da casa e de mais quem?',
    subtitle: 'Entender sua dinâmica familiar nos ajuda no diagnóstico',
    options: [
      { id: 'q3_a', text: 'Filhos pequenos', emoji: '👶', tag: 'overwhelmed' },
      { id: 'q3_b', text: 'Filhos maiores', emoji: '👨‍👩‍👧', tag: 'routine' },
      { id: 'q3_c', text: 'Meu marido/companheiro e a casa', emoji: '👩‍❤️‍👨', tag: 'maintenance' },
      { id: 'q3_d', text: 'Só de mim e da minha casa', emoji: '🏠', tag: 'energy' },
    ],
  },
  {
    id: 4,
    title: 'Em casa, quem fica responsável pela maior parte das tarefas?',
    subtitle: 'Como é a divisão da carga no dia a dia?',
    options: [
      { id: 'q4_a', text: 'Praticamente tudo fica comigo', emoji: '😩', tag: 'overwhelmed' },
      { id: 'q4_b', text: 'Eu faço e às vezes peço ajuda', emoji: '🤷', tag: 'energy' },
      { id: 'q4_c', text: 'Tenho ajuda, mas o peso ainda é meu', emoji: '🙏', tag: 'maintenance' },
      { id: 'q4_d', text: 'A gente divide, mas falta organização', emoji: '👫', tag: 'routine' },
    ],
  },
  {
    id: 5,
    title: 'Qual dessas situações mais parece com sua rotina?',
    subtitle: 'Identifique o que mais rouba sua paz',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
    options: [
      { id: 'q5_a', text: 'Arrumo e pouco depois está tudo bagunçado', emoji: '🔄', tag: 'maintenance' },
      { id: 'q5_b', text: 'Nunca sei o que preparar para comer', emoji: '🍳', tag: 'routine' },
      { id: 'q5_c', text: 'Termino o dia exausta e sinto que não rendeu', emoji: '😴', tag: 'energy' },
      { id: 'q5_d', text: 'Fico constrangida quando alguém aparece', emoji: '😳', tag: 'overwhelmed' },
    ],
  },
  {
    id: 6,
    title: 'O que mais te trava na hora de organizar?',
    subtitle: 'O principal obstáculo que você enfrenta',
    options: [
      { id: 'q6_a', text: 'Não sei por onde começar', emoji: '🤯', tag: 'routine' },
      { id: 'q6_b', text: 'Começo, mas nunca termino', emoji: '⌛', tag: 'energy' },
      { id: 'q6_c', text: 'Falta tempo e energia', emoji: '😮‍💨', tag: 'overwhelmed' },
      { id: 'q6_d', text: 'Arrumo e logo tudo volta ao normal', emoji: '🔄', tag: 'maintenance' },
    ],
  },
  {
    id: 7,
    title: 'Se você pudesse resolver apenas uma coisa primeiro, qual seria?',
    subtitle: 'Sua prioridade número um para transformar hoje',
    options: [
      { id: 'q7_a', text: 'Ter uma rotina de limpeza que funcione', emoji: '🧹', tag: 'routine' },
      { id: 'q7_b', text: 'Parar de sofrer pensando nas refeições', emoji: '🍽️', tag: 'energy' },
      { id: 'q7_c', text: 'Conseguir manter cada coisa no lugar', emoji: '🗂️', tag: 'maintenance' },
      { id: 'q7_d', text: 'Ter mais tempo para mim', emoji: '⏰', tag: 'overwhelmed' },
    ],
  },
];

export const DIAGNOSIS_CONFIG: Record<string, DiagnosisProfile> = {
  energy: {
    id: 'energy',
    tagMatch: 'energy',
    title: 'CASA QUE CONSOME SUA ENERGIA',
    subtitle: 'Cansaço constante por falta de um fluxo automatizado',
    description: 'Você não necessariamente precisa limpar mais. Precisa parar de carregar a casa inteira na cabeça e transformar as tarefas em uma rotina previsível para recuperar sua disposição.',
    stressLevel: 'Sobrecarregada',
    stressPercent: 88,
    personalizedBenefits: [
      'Uma rotina de limpeza simplificada em blocos de tempo rápidos',
      'Método de faxina express para nunca mais terminar o dia exausta',
      'Técnicas para poupar seu esforço físico e preservar sua energia para o que importa',
    ],
    recommendedFocus: 'Módulos de Faxina Express e Limpeza Inteligente',
  },
  maintenance: {
    id: 'maintenance',
    tagMatch: 'maintenance',
    title: 'CASA QUE NUNCA FICA PRONTA',
    subtitle: 'Ciclo repetitivo de arrumar e ver desarrumar',
    description: 'Você até arruma, mas sente que precisa começar tudo novamente pouco tempo depois. O problema não é seu esforço, e sim a manutenção e a falta de pontos fixos na rotina.',
    stressLevel: 'No Sufoco',
    stressPercent: 74,
    personalizedBenefits: [
      'Sistemas de pontos de ancoragem para cada objeto ter seu lugar definitivo',
      'Rotina de manutenção diária de 15 minutos que evita acúmulos',
      'Regras simples que fazem a família colaborar sem discussões',
    ],
    recommendedFocus: 'Módulos de Organização que Dura e Rotina 30 Dias',
  },
  routine: {
    id: 'routine',
    tagMatch: 'routine',
    title: 'CASA SEM ROTINA',
    subtitle: 'Sensação de estar sempre correndo atrás do atraso',
    description: 'Você sabe o que precisa fazer, mas não existe uma sequência clara. Por isso cada dia começa com a dúvida: "por onde eu começo?" e a sensação de estar sempre apagando incêndios.',
    stressLevel: 'No Sufoco',
    stressPercent: 68,
    personalizedBenefits: [
      'Um passo a passo diário em checklist para acordar sabendo exatamente o que fazer',
      'Cronograma inteligente de lavanderia, cozinha e limpeza por dias da semana',
      'Eliminação total da paralisia de decisão matinal',
    ],
    recommendedFocus: 'Módulos de Rotina em 30 Dias e Cozinha sem Estresse',
  },
  overwhelmed: {
    id: 'overwhelmed',
    tagMatch: 'overwhelmed',
    title: 'CASA SOBRECARREGADA',
    subtitle: 'Carga mental extrema e sensação de solidão nas tarefas',
    description: 'São muitas tarefas, pouco tempo e várias decisões ao mesmo tempo. Você precisa urgentemente simplificar a rotina para conseguir manter a casa sem se esgotar emocionalmente.',
    stressLevel: 'Sobrecarregada',
    stressPercent: 95,
    personalizedBenefits: [
      'Descentralização de tarefas com um método visual e acolhedor',
      'Planejamento de cardápio e refeições que elimina o peso de "o que fazer para o almoço"',
      'Recuperação de até 2 horas livres todos os dias para seu descanso e autocuidado',
    ],
    recommendedFocus: 'Plano Completo Rainha da Casa + Assistente de Refeições',
  },
};

export const PRODUCT_CONFIG: {
  name: string;
  headline: string;
  description: string;
  modules: ProductModule[];
} = {
  name: 'MÉTODO RAINHA DA CASA',
  headline: 'TUDO PARA SUA CASA FUNCIONAR DE FORMA MAIS LEVE.',
  description: 'O Método Rainha da Casa reúne rotinas, planejamentos e estratégias práticas para ajudar você a cuidar da casa sem transformar todos os seus dias em uma corrida contra a bagunça.',
  modules: [
    {
      id: 1,
      title: 'MÉTODO DE LIMPEZA INTELIGENTE',
      description: 'Uma rotina de limpeza organizada por tarefas e zonas para facilitar a manutenção da casa sem exaustão.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80',
      iconName: 'Sparkles',
      badge: 'Módulo 01',
    },
    {
      id: 2,
      title: 'COZINHA SEM ESTRESSE',
      description: 'Planejamento e ideias práticas para tornar a rotina da cozinha, louça e pré-preparo muito mais simples.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80',
      iconName: 'UtensilsCrossed',
      badge: 'Módulo 02',
    },
    {
      id: 3,
      title: 'ORGANIZAÇÃO QUE DURA',
      description: 'Estratégias para organizar os ambientes e armários de um jeito que a bagunça não retorne no dia seguinte.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80',
      iconName: 'Boxes',
      badge: 'Módulo 03',
    },
    {
      id: 4,
      title: 'ROTINA DA CASA EM 30 DIAS',
      description: 'Um plano progressivo e guiado dia após dia para colocar a rotina doméstica nos trilhos sem desespero.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=500&q=80',
      iconName: 'CalendarDays',
      badge: 'Módulo 04',
    },
    {
      id: 5,
      title: 'LAVANDERIA EM ORDEM',
      description: 'Organização inteligente para roupas sujas, lavagem, secagem e passagem sem acumular montanhas de roupas.',
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=500&q=80',
      iconName: 'Shirt',
      badge: 'Módulo 05',
    },
    {
      id: 6,
      title: 'ECONOMIA DOMÉSTICA',
      description: 'Formas práticas de organizar compras do mês, feira e reduzir desperdícios de alimentos e produtos de limpeza.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80',
      iconName: 'PiggyBank',
      badge: 'Módulo 06',
    },
    {
      id: 7,
      title: 'CONSERVAÇÃO DE ALIMENTOS',
      description: 'Orientações infalíveis para armazenar, congelar e conservar melhor frutas, verduras e marmitas prontas.',
      image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=500&q=80',
      iconName: 'Apple',
      badge: 'Módulo 07',
    },
    {
      id: 8,
      title: 'BANHEIRO SEMPRE LIMPO',
      description: 'Uma rotina express de 5 minutos diários para manter o banheiro sempre higienizado, seco e agradável.',
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=500&q=80',
      iconName: 'Droplet',
      badge: 'Módulo 08',
    },
    {
      id: 9,
      title: 'CASA LIVRE DE PRAGAS',
      description: 'Cuidados preventivos naturais e organização para manter formigas, traças e insetos longe dos seus armários.',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&q=80',
      iconName: 'ShieldCheck',
      badge: 'Módulo 09',
    },
    {
      id: 10,
      title: 'FAXINA RÁPIDA DE 15 MINUTOS',
      description: 'Uma rotina de emergência prática para quando a casa precisa de um aspecto impecável em tempo recorde.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80',
      iconName: 'Zap',
      badge: 'Módulo 10',
    },
  ],
};

export const BONUS_CONFIG: BonusItem[] = [
  {
    id: 'bonus_1',
    number: 'BÔNUS 01',
    title: 'ASSISTENTE DE RECEITAS COM IA',
    description: 'Uma ferramenta inteligente para você digitar os ingredientes que tem na geladeira e receber sugestões práticas de refeições em segundos.',
    estimatedValue: 97.00,
    iconName: 'Bot',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'bonus_2',
    number: 'BÔNUS 02',
    title: 'RECEITAS DE PRODUTOS CASEIROS',
    description: 'Guia passo a passo com misturinhas potentes, seguras e baratas usando vinagre, bicarbonato e essências para economizar no mercado.',
    estimatedValue: 47.00,
    iconName: 'FlaskConical',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'bonus_3',
    number: 'BÔNUS 03',
    title: 'CASA SEMPRE CHEIROSA',
    description: 'Segredos e estratégias de aromatização duradoura para deixar sua sala, quartos e banheiros com cheiro de casa de novela.',
    estimatedValue: 37.00,
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'bonus_4',
    number: 'BÔNUS 04',
    title: 'RECEBENDO VISITAS SEM STRESS',
    description: 'Um checklist relâmpago de preparação rápida para deixar a casa acolhedora quando alguém avisar de surpresa que está chegando.',
    estimatedValue: 47.00,
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&q=80',
  },
];

export const FAST_ACTION_BONUS_CONFIG: BonusItem[] = [
  {
    id: 'fast_1',
    number: 'PRESENTE 01',
    title: 'PLANNER SEMANAL DA DONA DE CASA',
    description: 'Sua semana inteira organizada visualmente em um só lugar para imprimir ou usar no celular.',
    estimatedValue: 37.00,
    iconName: 'CalendarCheck2',
  },
  {
    id: 'fast_2',
    number: 'PRESENTE 02',
    title: 'LISTA DE COMPRAS PERSONALIZADA',
    description: 'Organize suas idas ao supermercado por corredores e reduza o risco de esquecer o essencial.',
    estimatedValue: 27.00,
    iconName: 'ShoppingCart',
  },
  {
    id: 'fast_3',
    number: 'PRESENTE 03',
    title: 'MANUAL DAS MANCHAS DIFÍCEIS',
    description: 'Guia de consulta rápida para salvar roupas, sofás e tapetes de gordura, café, vinho e mofo.',
    estimatedValue: 37.00,
    iconName: 'Sparkle',
  },
  {
    id: 'fast_4',
    number: 'PRESENTE 04',
    title: '300 RECEITAS EXCLUSIVAS',
    description: 'Um acervo completo de pratos rápidos de até 20 minutos para você nunca mais travar no almoço ou jantar.',
    estimatedValue: 47.00,
    iconName: 'BookOpenCheck',
  },
];

export const TESTIMONIALS_CONFIG: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Juliana Mendes',
    city: 'Curitiba - PR',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    timeAgo: 'há 2 dias',
    text: 'Eu vivia chorando no fim de tarde de tanto cansaço. Parecia que eu limpava a casa e no segundo seguinte meus dois filhos pequenos viravam tudo do avesso. Com a rotina de 30 dias do método, a casa fica limpa em 25 minutos e eu finalmente tenho tempo de assistir uma série à noite!',
    tag: 'Mãe de 2 filhos • Casa de 3 quartos',
    verified: true,
  },
  {
    id: 't2',
    name: 'Patrícia Albuquerque',
    city: 'São Paulo - SP',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    timeAgo: 'há 4 dias',
    text: 'Trabalho fora o dia todo e chegava em casa às 19h para começar o segundo turno de faxina. O Método de Zonas e o Assistente de Receitas salvaram meu casamento e meu descanso. Valeu cada centavo!',
    tag: 'Trabalha CLT + Casada',
    verified: true,
  },
  {
    id: 't3',
    name: 'Cláudia Silveira',
    city: 'Belo Horizonte - MG',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    timeAgo: 'ontem',
    text: 'Aquele módulo das misturinhas caseiras já me economizou mais de R$ 120 reais no mercado este mês. Minha casa fica cheirosa o dia inteiro e sem aquele cheiro forte de cloro que me dava dor de cabeça.',
    tag: 'Dona de casa há 18 anos',
    verified: true,
  },
];

export const FAQ_CONFIG: FaqItem[] = [
  {
    question: 'Funciona para quem trabalha fora o dia todo?',
    answer: 'Sim! Na verdade foi especialmente pensado para quem não tem o dia livre. As rotinas são divididas em blocos rápidos de 15 a 20 minutos por dia, permitindo manter tudo limpo antes de sair ou ao chegar, sem acumular faxinas pesadas no fim de semana.',
  },
  {
    question: 'Como vou receber o acesso ao material?',
    answer: 'Imediatamente após a aprovação do pagamento, você receberá no seu e-mail e no WhatsApp os dados de acesso à nossa área de membros exclusiva, com todos os módulos em vídeo, guias em PDF e os bônus para baixar.',
  },
  {
    question: 'Preciso comprar produtos caros ou organizadores sofisticados?',
    answer: 'Não! O método preza pela simplicidade e economia. Ensinamos você a usar o que já tem em casa e damos receitas caseiras econômicas que custam centavos para fazer.',
  },
  {
    question: 'E se eu tiver dúvidas ao longo do método?',
    answer: 'Você conta com suporte dedicado por e-mail e dentro da plataforma de alunas para esclarecer qualquer dúvida sobre a sua rotina.',
  },
  {
    question: 'Por quanto tempo tenho acesso ao Método Rainha da Casa?',
    answer: 'Seu acesso é vitalício com direito a todas as futuras atualizações de módulos e materiais complementares.',
  },
];
