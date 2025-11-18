import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Привет! Я Андтрон, ваш AI-помощник. Чем могу помочь?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('привет') || lowerMessage.includes('здравствуй')) {
      return 'Привет! Рад помочь вам. Задавайте любые вопросы!';
    }
    
    if (lowerMessage.includes('как дела') || lowerMessage.includes('что нового')) {
      return 'Отлично работаю! Готов отвечать на ваши вопросы 24/7.';
    }
    
    if (lowerMessage.includes('возможности') || lowerMessage.includes('что умеешь')) {
      return 'Я могу отвечать на вопросы, помогать с информацией, анализировать данные и общаться на естественном языке. Моя нейросеть постоянно обучается!';
    }
    
    if (lowerMessage.includes('спасибо') || lowerMessage.includes('благодарю')) {
      return 'Всегда пожалуйста! Обращайтесь, если нужна помощь.';
    }
    
    if (lowerMessage.includes('помощь') || lowerMessage.includes('помоги')) {
      return 'Конечно! Опишите вашу задачу подробнее, и я постараюсь помочь.';
    }
    
    return 'Интересный вопрос! Я обработал ваш запрос. Моя нейросеть анализирует контекст и предоставляет наиболее релевантный ответ.';
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-4xl mx-auto">
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-card/30 rounded-t-xl border border-border">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`flex gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                message.sender === 'bot' 
                  ? 'bg-gradient-to-br from-primary to-secondary glow-border' 
                  : 'bg-accent'
              }`}>
                {message.sender === 'bot' ? (
                  <Icon name="Bot" size={20} className="text-primary-foreground" />
                ) : (
                  <Icon name="User" size={20} className="text-accent-foreground" />
                )}
              </div>
              <Card className={`p-4 ${
                message.sender === 'bot' 
                  ? 'bg-card' 
                  : 'bg-primary/20 border-primary'
              }`}>
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {message.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </Card>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="flex gap-3 max-w-[80%]">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-primary to-secondary glow-border">
                <Icon name="Bot" size={20} className="text-primary-foreground" />
              </div>
              <Card className="p-4 bg-card">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-150"></div>
                </div>
              </Card>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 bg-card border border-t-0 border-border rounded-b-xl">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Напишите сообщение..."
            className="flex-1 bg-background"
          />
          <Button 
            onClick={handleSend}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            size="icon"
          >
            <Icon name="Send" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}