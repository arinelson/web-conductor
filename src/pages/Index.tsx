
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, ShoppingCart, Link as LinkIcon, FileText, Check } from 'lucide-react';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const services = [
    {
      title: 'Landing Page',
      description: 'Página de alta conversão focada em vender um produto ou serviço específico.',
      icon: Layout,
      price: 'R$ 1.500,00',
      deliveryTime: '7 dias úteis'
    },
    {
      title: 'Site Institucional',
      description: 'Site completo para apresentar sua empresa, produtos e serviços.',
      icon: FileText,
      price: 'R$ 2.500,00',
      deliveryTime: '15 dias úteis'
    },
    {
      title: 'E-commerce',
      description: 'Loja virtual completa para venda de produtos ou serviços online.',
      icon: ShoppingCart,
      price: 'R$ 4.500,00',
      deliveryTime: '20 dias úteis'
    },
    {
      title: 'Link da Bio',
      description: 'Página simples e atraente para centralizar links importantes.',
      icon: LinkIcon,
      price: 'R$ 600,00',
      deliveryTime: '3 dias úteis'
    },
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO da Fashion Store',
      content: 'O site de e-commerce que criaram para minha loja superou todas as expectativas. As vendas aumentaram mais de 40% em apenas dois meses!',
      rating: 5,
    },
    {
      name: 'João Pereira',
      role: 'Advogado',
      content: 'Meu site institucional ficou exatamente como eu imaginava. Profissional, elegante e fácil de navegar. Já recebi vários elogios dos clientes.',
      rating: 5,
    },
    {
      name: 'Carla Mendes',
      role: 'Influenciadora Digital',
      content: 'O link da bio revolucionou minha presença online. Design moderno e estatísticas detalhadas que me ajudam a entender melhor meu público.',
      rating: 4,
    },
  ];

  const features = [
    {
      title: 'Design exclusivo',
      description: 'Criamos sites personalizados e exclusivos, sem uso de templates genéricos.',
      icon: Check,
    },
    {
      title: 'Otimização para campanhas',
      description: 'Sites preparados para campanhas de Google Ads e Facebook Ads.',
      icon: Check,
    },
    {
      title: 'Alto desempenho',
      description: 'Garantia de alto desempenho no Google PageSpeed Insights.',
      icon: Check,
    },
    {
      title: 'Suporte pós-entrega',
      description: 'Suporte técnico para ajustes e dúvidas após a entrega do projeto.',
      icon: Check,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 -z-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%234299e1" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E")'
          }}
        ></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-slide-in mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Crie um site único para o seu negócio
            </h1>
            <p className="animate-slide-in text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12">
              Design personalizado, alta performance e otimização para resultados. 
              Transformamos sua presença digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in animation-delay-300">
              <Button 
                asLink 
                to="/contact" 
                size="lg" 
                className="group"
              >
                Entre em contato
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                asLink 
                to="/services" 
                variant="outline" 
                size="lg"
              >
                Ver serviços
              </Button>
            </div>
          </div>
          
          <div className="relative mt-16 md:mt-24 glass rounded-xl p-6 md:p-10 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
              Transforme sua presença online com design excepcional
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              Criamos sites únicos, funcionais e visualmente impactantes que elevam a identidade da sua marca e otimizam a experiência do usuário.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 bg-primary/10 rounded-full p-1 h-fit">
                    <feature.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Nossos Serviços</h2>
            <p className="text-muted-foreground">
              Oferecemos soluções completas de desenvolvimento web para impulsionar o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                deliveryTime={service.deliveryTime}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asLink to="/services" variant="outline">
              Ver todos os serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">O que nossos clientes dizem</h2>
            <p className="text-muted-foreground">
              A satisfação dos nossos clientes é o maior indicador da qualidade do nosso trabalho.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato hoje mesmo e vamos criar algo excepcional juntos.
          </p>
          <Button 
            asLink 
            to="/contact" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
          >
            Peça um orçamento
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
