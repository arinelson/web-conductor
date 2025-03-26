
import React, { useState } from 'react';
import { Layout, ShoppingCart, Link as LinkIcon, FileText, CheckCircle, XCircle } from 'lucide-react';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  icon: React.ComponentType<any>;
  features: { title: string; included: boolean }[];
  deliveryTime: string;
  popular?: boolean;
}

const Pricing = () => {
  const [period, setPeriod] = useState<'monthly' | 'annual'>('monthly');
  
  const pricingPlans: PricingPlan[] = [
    {
      id: 'landing-page',
      name: 'Landing Page',
      price: 'R$ 1.200,00',
      description: 'Perfeito para promover um produto ou serviço específico.',
      icon: Layout,
      features: [
        { title: 'Design responsivo', included: true },
        { title: 'Integração com ferramentas de marketing', included: true },
        { title: 'Formulário de captura de leads', included: true },
        { title: 'SEO básico configurado', included: true },
        { title: 'Velocidade otimizada', included: true },
        { title: 'Até 3 revisões', included: true },
        { title: 'Suporte por 30 dias', included: true },
        { title: 'Hospedagem incluída', included: false },
        { title: 'Domínio personalizado', included: false },
      ],
      deliveryTime: '7 dias úteis',
    },
    {
      id: 'institutional',
      name: 'Site Institucional',
      price: 'R$ 2.500,00',
      description: 'Para apresentar sua empresa de forma profissional e completa.',
      icon: FileText,
      features: [
        { title: 'Até 5 páginas personalizadas', included: true },
        { title: 'Design exclusivo e responsivo', included: true },
        { title: 'SEO avançado configurado', included: true },
        { title: 'Integração com redes sociais', included: true },
        { title: 'Formulários de contato funcionais', included: true },
        { title: 'Velocidade otimizada', included: true },
        { title: 'Até 5 revisões', included: true },
        { title: 'Suporte por 60 dias', included: true },
        { title: 'Hospedagem incluída', included: false },
        { title: 'Domínio personalizado', included: false },
      ],
      deliveryTime: '15 dias úteis',
      popular: true,
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      price: 'R$ 4.500,00',
      description: 'Loja virtual completa para vender online com facilidade.',
      icon: ShoppingCart,
      features: [
        { title: 'Até 10 categorias de produtos', included: true },
        { title: 'Carrinho de compras integrado', included: true },
        { title: 'Gateway de pagamento configurado', included: true },
        { title: 'SEO avançado configurado', included: true },
        { title: 'Integração com Google Analytics', included: true },
        { title: 'Design responsivo e personalizado', included: true },
        { title: 'Velocidade otimizada', included: true },
        { title: 'Até 7 revisões', included: true },
        { title: 'Suporte por 90 dias', included: true },
        { title: 'Hospedagem incluída', included: false },
        { title: 'Domínio personalizado', included: false },
      ],
      deliveryTime: '20 dias úteis',
    },
    {
      id: 'bio-link',
      name: 'Link da Bio',
      price: 'R$ 600,00',
      description: 'Página para centralizar todos os seus links importantes.',
      icon: LinkIcon,
      features: [
        { title: 'Design responsivo e moderno', included: true },
        { title: 'Links personalizados', included: true },
        { title: 'Estatísticas básicas de cliques', included: true },
        { title: 'Integração com plataformas de análise', included: true },
        { title: 'Até 2 revisões', included: true },
        { title: 'Suporte por 30 dias', included: true },
        { title: 'Hospedagem incluída', included: false },
        { title: 'Domínio personalizado', included: false },
      ],
      deliveryTime: '3 dias úteis',
    },
  ];

  const additionalServices = [
    { name: 'Hospedagem', price: 'R$ 25,00/mês' },
    { name: 'Domínio personalizado', price: 'A partir de R$ 40,00/ano' },
    { name: 'Manutenção mensal', price: 'R$ 150,00/mês' },
    { name: 'Criação de conteúdo', price: 'A partir de R$ 300,00' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Pricing Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Preços transparentes</h1>
          <p className="text-xl text-muted-foreground mb-10">
            Escolha o plano ideal para o seu negócio, sem taxas ocultas.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={cn(
                'relative rounded-xl border border-border p-8 bg-white shadow-subtle transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1',
                plan.popular && 'border-primary/30 shadow-lg shadow-primary/5'
              )}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                  Popular
                </span>
              )}
              
              <div className="mb-4 inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg">
                <plan.icon className="text-primary" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm block mt-1">
                  Prazo: {plan.deliveryTime}
                </span>
              </div>
              
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-3 text-muted-foreground">O que está incluído:</h4>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <CheckCircle className="text-primary mr-2 mt-0.5" size={16} />
                      ) : (
                        <XCircle className="text-muted-foreground opacity-50 mr-2 mt-0.5" size={16} />
                      )}
                      <span className={!feature.included ? "text-muted-foreground" : ""}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button asLink to="/contact" className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                Solicitar
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Serviços Adicionais</h2>
          
          <div className="glass rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {additionalServices.map((service, index) => (
                <div key={index} className="p-6">
                  <h3 className="font-medium mb-1">{service.name}</h3>
                  <p className="text-primary font-semibold">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Perguntas Frequentes</h2>
          
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">O que acontece após eu solicitar um orçamento?</h3>
              <p className="text-muted-foreground">
                Após solicitar um orçamento, entraremos em contato em até 24 horas para discutir os detalhes do seu projeto e confirmar o valor final.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Quais formas de pagamento são aceitas?</h3>
              <p className="text-muted-foreground">
                Aceitamos pagamento via PIX, transferência bancária, boleto e cartão de crédito em até 12x.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">O que é incluído no serviço de hospedagem?</h3>
              <p className="text-muted-foreground">
                Nossa hospedagem inclui servidores de alta performance, certificado SSL, backup diário, e suporte técnico prioritário.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Posso solicitar alterações após a entrega do site?</h3>
              <p className="text-muted-foreground">
                Sim, oferecemos revisões gratuitas durante o período de suporte incluído no seu plano. Após esse período, as alterações serão cobradas separadamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Pronto para iniciar seu projeto?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato para um orçamento personalizado e comece a transformar sua presença online hoje mesmo.
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

export default Pricing;
