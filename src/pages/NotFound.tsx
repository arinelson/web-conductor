
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '@/components/Button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="glass rounded-xl p-10 max-w-lg text-center">
        <div className="text-9xl font-bold text-primary/50 mb-6">404</div>
        <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asLink to="/" className="inline-flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          Voltar para a página inicial
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
