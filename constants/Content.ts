export interface ContentItem {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  author: string;
  likes: number;
  image: string;
}

export const contentItems = {
  popular: [
    {
      id: '1',
      title: 'Como criar uma horta urbana em espaços pequenos',
      tag: 'Sustentabilidade',
      tagColor: '#4CAF50',
      author: 'Ana Lima',
      likes: 256,
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg'
    },
    {
      id: '2',
      title: 'Tecnologias inclusivas transformando vidas',
      tag: 'Tecnologia',
      tagColor: '#2196F3',
      author: 'Miguel Santos',
      likes: 187,
      image: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg'
    },
    {
      id: '3',
      title: 'A arte como expressão de resistência',
      tag: 'Justiça Social',
      tagColor: '#FF5722',
      author: 'Júlia Costa',
      likes: 132,
      image: 'https://images.pexels.com/photos/3640180/pexels-photo-3640180.jpeg'
    },
    {
      id: '4',
      title: 'Sabedoria indígena e preservação ambiental',
      tag: 'Diversidade',
      tagColor: '#9C27B0',
      author: 'Carlos Tupã',
      likes: 209,
      image: 'https://images.pexels.com/photos/5746254/pexels-photo-5746254.jpeg'
    }
  ],
  recent: [
    {
      id: '5',
      title: 'Meditação e escuta ativa na resolução de conflitos',
      tag: 'Empatia',
      tagColor: '#CDDC39',
      author: 'Mariana Souza',
      likes: 78,
      image: 'https://images.pexels.com/photos/7969918/pexels-photo-7969918.jpeg'
    },
    {
      id: '6',
      title: 'Comunidades resilientes após desastres naturais',
      tag: 'Crises',
      tagColor: '#FF9800',
      author: 'Ricardo Mendes',
      likes: 94,
      image: 'https://images.pexels.com/photos/5723228/pexels-photo-5723228.jpeg'
    },
    {
      id: '7',
      title: 'Sistemas alimentares sustentáveis para segurança alimentar',
      tag: 'Sustentabilidade',
      tagColor: '#4CAF50',
      author: 'Fernanda Oliveira',
      likes: 113,
      image: 'https://images.pexels.com/photos/7730064/pexels-photo-7730064.jpeg'
    },
    {
      id: '8',
      title: 'Design universal: criando espaços para todos',
      tag: 'Diversidade',
      tagColor: '#9C27B0',
      author: 'Paulo Ribeiro',
      likes: 67,
      image: 'https://images.pexels.com/photos/8386365/pexels-photo-8386365.jpeg'
    }
  ]
};