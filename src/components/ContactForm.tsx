
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { toast } from 'sonner';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Criar a mensagem formatada para o WhatsApp
    const whatsappMessage = `Oi, preenchi o formulário e vi pelo Web Condutor:\n\nNOME: ${formData.name}\nEMAIL: ${formData.email}\nTELEFONE: ${formData.phone}\nMENSAGEM: ${formData.message}`;
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número do WhatsApp
    const whatsappNumber = "558291799095";
    
    // URL do WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Simulando um pequeno atraso antes de redirecionar (para feedback visual)
    setTimeout(() => {
      // Mostrar mensagem de sucesso
      toast.success('Redirecionando para o WhatsApp...', {
        description: 'Você será redirecionado em instantes.',
      });
      
      // Abrir o WhatsApp em uma nova aba
      window.open(whatsappUrl, '_blank');
      
      // Limpar o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      setLoading(false);
    }, 1000);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn('space-y-4', className)}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Seu nome"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="seu@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Telefone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="(00) 00000-0000"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          placeholder="Digite sua mensagem aqui..."
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  );
};

export default ContactForm;
