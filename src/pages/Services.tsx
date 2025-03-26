
import React from 'react';
import { Layout, ShoppingCart, Link as LinkIcon, FileText, Clock, CheckCircle } from 'lucide-react';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';

interface ServiceFeature {
  title: string;
  included: boolean;
}

interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  price: string;
  deliveryTime: string;
  features: ServiceFeature[];
  sections: string[];
}

const Services = () => {
  const services: ServiceType[] = [
    {
      id: 'landing-page',
      title: 'Landing Page',
      description: 'Uma página de alta conversão focada em vender um produto ou serviço específico.',
      icon: Layout,
      price: 'R$ 1.200,00',
      deliveryTime: '7 dias úteis',
      features: [
        { title: 'Design responsivo (móvel e desktop)', included: true },
        { title: 'Integração com ferramentas de marketing', included: true },
        { title: 'Formulário de captura de leads', included: true },
        { title: 'SEO básico configurado', included: true },
        { title: 'Velocidade otimizada (PageSpeed acima de 85/100)', included: true },
        { title: 'Hospedagem incluída', included: false },
        { title: 'Domínio personalizado', included: false },
      ],
      sections: [
        'Cabeçalho com chamada principal',
        'Sobre o produto/serviço',
        'Benefícios',
        'Depoimentos',
        'Call-to-action (CTA)'
      ]
    },
    {
      id: 'institutional',
      title: 'Site Institucional',
      description: 'Um site completo para apresentar sua empresa, produtos e serviços.',
      icon: FileText,
      price: 'R$ 2.500,00',
      deliveryTime: '15 dias úteis',
      features: [
        { title: 'Até 5 páginas personalizadas', included: true },
        { title: 'Design exclusivo e responsivo', included: true },
        { title: 'SEO avançado configurado', included: true },
        { title: 'Integração com redes sociais', included: true },
        { title: 'Formulários de contato funcionais', included: true },
        { title: 'Velocidade otimizada (PageSpeed acima de 90/100)', included: true },
        { title: 'Hospedagem incluída', included: false },
        { title: 'Domínio personalizado', included: false },
      ],
      sections: [
        'Home com destaque para serviços',
        'Página "Sobre Nós"',
        'Página de serviços detalhada',
        'Blog com até 3 posts iniciais',
        'Página de contato com mapa e formulário'
      ]
    },
    {
      id: 'ecommerce',
      title: 'Site Personalizado de E-commerce',
      description: 'Loja virtual completa para venda de produtos ou serviços online.',
      icon: ShoppingCart,
      price: 'R$ 4.500,00',
      deliveryTime: '20 dias úteis',
      features: [
        { title: 'Até 10 categorias de produtos', included: true },
        { title: 'Carrinho de compras integrado', included: true },
        { title: 'Gateway de pagamento configurado', included: true },
        { title: 'SEO avançado configurado', included: true },
        { title: 'Integração com Google Analytics e Pixel do Facebook', included: true },
        { title: 'Design responsivo e personalizado', included: true },
        { title: 'Velocidade otimizada (PageSpeed acima de 85/100)', included: true },
        { title: 'Hospedagem incluída', included: false },
        { title: 'Domínio personalizado', included: false },
      ],
      sections: [
        'Home com destaques de produtos',
        'Página de produtos',
        'Página de checkout segura',
        'Página de política de privacidade',
        'Blog com até 5 posts iniciais'
      ]
    },
    {
      id: 'bio-link',
      title: 'Link da Bio',
      description: 'Uma página simples e visualmente atraente para centralizar links importantes.',
      icon: LinkIcon,
      price: 'R$ 600,00',
      deliveryTime: '3 dias úteis',
      features: [
        { title: 'Design responsivo e moderno', included: true },
        { title: 'Links personalizados para redes sociais', included: true },
        { title: 'Estatísticas básicas de cliques', included: true },
        { title: 'Integração com plataformas de análise', included: true },
        { title: 'Hospedagem incluída', included: false },
        { title: 'Domínio personalizado', included: false },
      ],
      sections: [
        'Foto de perfil',
        'Links personalizados',
        'Botão de contato direto'
      ]
    },
    {
      id: 'blog',
      title: 'Blog Personalizado',
      description: 'Um blog completo para compartilhar conteúdo relevante e atrair tráfego orgânico.',
      icon: FileText,
      price: 'R$ 1.800,00',
      deliveryTime: '10 dias úteis',
      features: [
        { title: 'Design exclusivo e responsivo', included: true },
        { title: 'Até 10 posts iniciais', included: true },
        { title: 'SEO avançado configurado', included: true },
        { title: 'Ferramentas de compartilhamento social', included: true },
        { title: 'Velocidade otimizada (PageSpeed acima de 90/100)', included: true },
        { title: 'Hospedagem incluída', included: false },
        { title: 'Domínio personalizado', included: false },
      ],
      sections: [
        'Home com lista de posts',
        'Página de categorias',
        'Página de contato'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Services Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl text-muted-foreground">
            Soluções personalizadas para transformar sua presença digital.
          </p>
        </div>
      </section>

      {/* Individual Services */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={cn(
            "py-20",
            index % 2 === 0 ? "bg-secondary/30" : ""
          )}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                <div className="mb-4 inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center mb-6 space-x-8">
                  <div className="flex items-center">
                    <Clock className="text-primary mr-2" size={20} />
                    <span>{service.deliveryTime}</span>
                  </div>
                  <div>
                    <span className="font-medium text-lg">{service.price}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Recursos inclusos:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle 
                          className={cn(
                            "mr-2 mt-0.5",
                            feature.included ? "text-primary" : "text-muted-foreground opacity-50"
                          )} 
                          size={18} 
                        />
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.title}
                          {!feature.included && " (opcional)"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asLink to="/contact" className="mr-4">
                  Solicitar orçamento
                </Button>
                <Button asLink to="/pricing" variant="outline">
                  Ver preços
                </Button>
              </div>
              
              <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                <div className="glass p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Seções padrão:</h3>
                  <ul className="space-y-4">
                    {service.sections.map((section, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary font-medium">
                          {idx + 1}
                        </div>
                        <span>{section}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Não encontrou o que procura?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato para discutirmos um projeto personalizado que atenda exatamente às suas necessidades.
          </p>
          <Button 
            asLink 
            to="/contact" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
          >
            Fale conosco
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
