import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export default function Navigation({ onNavigate, currentSection }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'features', label: 'Возможности', icon: 'Sparkles' },
    { id: 'chat', label: 'Чат', icon: 'MessageSquare' },
    { id: 'docs', label: 'Документация', icon: 'FileText' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-border">
              <Icon name="Bot" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Андтрон
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? 'default' : 'ghost'}
                onClick={() => onNavigate(item.id)}
                className={currentSection === item.id ? 'bg-primary/20 hover:bg-primary/30' : ''}
              >
                <Icon name={item.icon as any} size={18} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </div>
          
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
}