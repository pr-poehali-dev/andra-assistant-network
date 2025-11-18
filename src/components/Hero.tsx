import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onStartChat: () => void;
}

export default function Hero({ onStartChat }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-sm text-primary font-medium">Нейросеть нового поколения</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in text-glow">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Андтрон
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
          Интеллектуальный AI-помощник для решения ваших задач. 
          Быстрые ответы, глубокий анализ, естественное общение.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
          <Button 
            onClick={onStartChat}
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 glow-border"
          >
            <Icon name="MessageSquare" className="mr-2" size={24} />
            Начать диалог
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-primary/50 hover:bg-primary/10"
          >
            <Icon name="FileText" className="mr-2" size={24} />
            Документация
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/70 transition-all">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-4 mx-auto glow-border">
              <Icon name="Zap" size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Мгновенные ответы</h3>
            <p className="text-muted-foreground">Получайте ответы за миллисекунды благодаря оптимизированной архитектуре</p>
          </div>
          
          <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/70 transition-all">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-pink-600 flex items-center justify-center mb-4 mx-auto glow-border">
              <Icon name="Brain" size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Глубокое понимание</h3>
            <p className="text-muted-foreground">Анализ контекста и понимание сложных запросов на естественном языке</p>
          </div>
          
          <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/70 transition-all">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center mb-4 mx-auto glow-border">
              <Icon name="Shield" size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Безопасность данных</h3>
            <p className="text-muted-foreground">Шифрование и защита ваших данных на всех уровнях взаимодействия</p>
          </div>
        </div>
      </div>
    </div>
  );
}