import { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ChatBot from '@/components/ChatBot';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSection, setCurrentSection] = useState('home');
  const chatRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      chat: chatRef,
      features: featuresRef,
      docs: docsRef,
      contacts: contactsRef
    };

    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (refs[section]) {
      refs[section].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartChat = () => {
    handleNavigate('chat');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={handleNavigate} currentSection={currentSection} />
      
      <Hero onStartChat={handleStartChat} />
      
      <section ref={featuresRef} className="py-20 px-4" id="features">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Возможности Андтрона
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощный AI-помощник с расширенными функциями для решения любых задач
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6 glow-border">
                <Icon name="MessageSquare" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Чат-ассистент</h3>
              <p className="text-muted-foreground leading-relaxed">
                Интерактивный диалог с AI для ответов на вопросы. Поддержка естественного языка, 
                контекстное понимание и персонализированные ответы на основе ваших запросов.
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-pink-600 flex items-center justify-center mb-6 glow-border">
                <Icon name="Database" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Анализ данных</h3>
              <p className="text-muted-foreground leading-relaxed">
                Обработка больших объемов информации, выявление закономерностей и предоставление 
                аналитических выводов. Визуализация данных и создание отчетов.
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center mb-6 glow-border">
                <Icon name="Code" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Помощь с кодом</h3>
              <p className="text-muted-foreground leading-relaxed">
                Генерация, анализ и оптимизация кода на различных языках программирования. 
                Объяснение сложных концепций и помощь в отладке.
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-6 glow-border">
                <Icon name="Globe" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Многоязычность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Поддержка множества языков для общения и перевода. Понимание культурных особенностей 
                и адаптация ответов под различные регионы.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      <section ref={chatRef} className="py-20 px-4 bg-gradient-to-b from-background to-card/20" id="chat">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Попробуйте Андтрон прямо сейчас
            </h2>
            <p className="text-xl text-muted-foreground">
              Начните диалог и убедитесь в возможностях AI-помощника
            </p>
          </div>
          
          <ChatBot />
        </div>
      </section>
      
      <section ref={docsRef} className="py-20 px-4" id="docs">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Документация
            </h2>
            <p className="text-xl text-muted-foreground">
              Всё, что нужно знать для работы с Андтроном
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Icon name="BookOpen" size={28} className="text-primary" />
                Быстрый старт
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Начните работу с Андтроном за несколько простых шагов. Откройте чат, задайте вопрос 
                и получите мгновенный ответ. Нейросеть автоматически анализирует контекст и предоставляет 
                наиболее релевантную информацию.
              </p>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Icon name="ArrowRight" size={18} className="mr-2" />
                Подробнее
              </Button>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Icon name="Settings" size={28} className="text-secondary" />
                API и интеграция
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Интегрируйте Андтрон в ваши проекты через простой REST API. Полная документация, 
                примеры кода и SDK для популярных языков программирования. Поддержка webhook'ов 
                и потоковой передачи данных.
              </p>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Icon name="ArrowRight" size={18} className="mr-2" />
                API документация
              </Button>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Icon name="HelpCircle" size={28} className="text-accent" />
                FAQ и поддержка
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ответы на часто задаваемые вопросы, решение типичных проблем и советы по оптимизации. 
                Если не нашли ответ — наша служба поддержки работает 24/7 и готова помочь.
              </p>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Icon name="ArrowRight" size={18} className="mr-2" />
                Центр поддержки
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      <section ref={contactsRef} className="py-20 px-4 bg-gradient-to-b from-background to-card/20" id="contacts">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы всегда рады услышать ваши идеи и предложения
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-4 mx-auto glow-border">
                <Icon name="Mail" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">support@andtron.ai</p>
            </Card>
            
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-pink-600 flex items-center justify-center mb-4 mx-auto glow-border">
                <Icon name="MessageCircle" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground">@andtron_support</p>
            </Card>
            
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center mb-4 mx-auto glow-border">
                <Icon name="Github" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground">github.com/andtron</p>
            </Card>
          </div>
        </div>
      </section>
      
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Андтрон
              </span>
            </div>
            
            <p className="text-muted-foreground">
              © 2025 Андтрон. Все права защищены.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}