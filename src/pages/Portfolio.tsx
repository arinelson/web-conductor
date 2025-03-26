
import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  tags: string[];
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'project-1',
      title: 'Fashion Store',
      category: 'ecommerce',
      description: 'E-commerce completo para uma loja de moda feminina com mais de 200 produtos.',
      imageUrl: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      tags: ['E-commerce', 'Design Responsivo', 'UX/UI']
    },
    {
      id: 'project-2',
      title: 'Escritório de Advocacia',
      category: 'institutional',
      description: 'Site institucional para um escritório de advocacia, com apresentação dos advogados e áreas de atuação.',
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      tags: ['Site Institucional', 'SEO Avançado', 'Performance']
    },
    {
      id: 'project-3',
      title: 'Landing Page de Evento',
      category: 'landing',
      description: 'Landing page para um evento de tecnologia, com formulário de inscrição e contagem regressiva.',
      imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      tags: ['Landing Page', 'Conversão', 'Marketing']
    },
    {
      id: 'project-4',
      title: 'Blog de Viagens',
      category: 'blog',
      description: 'Blog para um viajante que compartilha suas experiências e dicas de viagem.',
      imageUrl: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      tags: ['Blog', 'SEO', 'Conteúdo']
    },
    {
      id: 'project-5',
      title: 'Influenciador Digital',
      category: 'biolink',
      description: 'Link da bio para uma influenciadora com mais de 500 mil seguidores.',
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      tags: ['Link da Bio', 'Redes Sociais', 'Minimalista']
    },
    {
      id: 'project-6',
      title: 'Restaurante Gourmet',
      category: 'institutional',
      description: 'Site institucional para um restaurante premium, com cardápio digital e sistema de reservas.',
      imageUrl: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      tags: ['Site Institucional', 'Restaurante', 'Reservas Online']
    },
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'institutional', label: 'Institucional' },
    { id: 'landing', label: 'Landing Page' },
    { id: 'blog', label: 'Blog' },
    { id: 'biolink', label: 'Link da Bio' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Portfolio Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosso Portfólio</h1>
          <p className="text-xl text-muted-foreground">
            Projetos recentes desenvolvidos por nossa equipe.
          </p>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="glass rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    {item.liveUrl && (
                      <a 
                        href={item.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white text-sm font-medium hover:underline"
                      >
                        Ver site <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary text-sm font-medium group/link"
                >
                  Ver detalhes 
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="glass rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vamos criar seu próximo projeto juntos?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato para discutir como podemos ajudar a transformar sua ideia em realidade.
          </p>
          <Button asLink to="/contact" size="lg">
            Iniciar projeto
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
