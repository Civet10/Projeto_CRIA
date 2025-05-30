export interface CommunityPost {
  id: string;
  username: string;
  avatarColor: string;
  topic: string;
  topicColor: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

export const communityPosts: CommunityPost[] = [
  {
    id: '1',
    username: 'sementeira',
    avatarColor: '#4CAF50',
    topic: 'Sustentabilidade',
    topicColor: '#4CAF50',
    content: 'Hoje plantei minha primeira horta urbana! É incrível como um pequeno espaço pode produzir alimentos saudáveis e ainda trazer mais vida para casa. Quem mais está nessa jornada?',
    image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg',
    likes: 47,
    comments: 12,
    shares: 5
  },
  {
    id: '2',
    username: 'pensador',
    avatarColor: '#2196F3',
    topic: 'Tecnologia',
    topicColor: '#2196F3',
    content: 'A tecnologia deve servir para aproximar, não para separar. Como podemos usar as ferramentas digitais para fortalecer comunidades reais e criar pontes entre diferentes realidades?',
    likes: 33,
    comments: 21,
    shares: 8
  },
  {
    id: '3',
    username: 'diversa',
    avatarColor: '#9C27B0',
    topic: 'Diversidade',
    topicColor: '#9C27B0',
    content: 'Celebrei uma festividade da minha cultura hoje e percebi como tradições podem ser pontes para conversas importantes. Compartilhar nossas raízes é um ato de resistência e construção coletiva.',
    image: 'https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg',
    likes: 65,
    comments: 14,
    shares: 19
  },
  {
    id: '4',
    username: 'construtor',
    avatarColor: '#FF9800',
    topic: 'Crises',
    topicColor: '#FF9800',
    content: 'Nossa comunidade se uniu para ajudar famílias afetadas pelas recentes enchentes. É impressionante como momentos de crise podem revelar a força da solidariedade e mobilização coletiva.',
    likes: 88,
    comments: 32,
    shares: 42
  },
  {
    id: '5',
    username: 'esperança',
    avatarColor: '#CDDC39',
    topic: 'Empatia',
    topicColor: '#CDDC39',
    content: 'Hoje pratiquei escuta ativa com alguém que pensa muito diferente de mim. Foi desafiador, mas saí da conversa com uma compreensão mais profunda. A empatia não significa concordar, mas sim tentar entender.',
    likes: 41,
    comments: 17,
    shares: 6
  }
];