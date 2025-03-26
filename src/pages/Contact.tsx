
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessagesSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contato@webconductor.com',
      href: 'mailto:contato@webconductor.com',
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: 'Av. Paulista, 1578, São Paulo - SP',
      href: 'https://maps.google.com/?q=Av.+Paulista,+1578,+São+Paulo+-+SP',
    },
    {
      icon: Clock,
      title: 'Horário',
      details: 'Seg-Sex: 9h às 18h',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Contact Header */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground">
            Estamos aqui para transformar sua visão em realidade digital.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="glass p-5 rounded-xl flex items-start"
                >
                  <div className="bg-primary/10 p-2 rounded-lg mr-4">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{info.title}</h3>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-80 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976156945937!2d-46.65767738439809!3d-23.562611284682913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1635789876543!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa do nosso escritório"
              ></iframe>
            </div>
            
            {/* Additional info */}
            <div className="glass p-6 rounded-xl flex items-start">
              <div className="bg-primary/10 p-2 rounded-lg mr-4">
                <MessagesSquare className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Atendimento Rápido</h3>
                <p className="text-muted-foreground">
                  Respondemos a todas as mensagens em até 24 horas úteis. 
                  Para assuntos urgentes, recomendamos o contato por telefone.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Envie uma mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-5">
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Quanto tempo leva para criar um site?</h3>
              <p className="text-muted-foreground">
                O prazo de entrega varia de acordo com a complexidade do projeto. 
                Para uma landing page simples, o prazo é de aproximadamente 7 dias úteis. 
                Já para um e-commerce completo, pode levar até 20 dias úteis.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Como funciona o processo de criação?</h3>
              <p className="text-muted-foreground">
                Nosso processo começa com uma reunião para entender suas necessidades. 
                Em seguida, desenvolvemos o design para aprovação, implementamos o site, 
                realizamos testes e finalmente fazemos a entrega final com as instruções de uso.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Vocês também oferecem serviços de marketing digital?</h3>
              <p className="text-muted-foreground">
                Sim, oferecemos serviços complementares de marketing digital, incluindo SEO, 
                campanhas de Google Ads, Facebook Ads e estratégias de conteúdo. 
                Consulte-nos para conhecer os pacotes disponíveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
