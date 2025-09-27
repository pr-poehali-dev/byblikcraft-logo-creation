import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    experience: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Ваша заявка отправлена! Мы рассмотрим её в течение 24 часов.');
  };

  const serverStats = {
    online: 127,
    maxPlayers: 500,
    uptime: "99.8%",
    version: "1.20.4"
  };

  const knowledgeBase = [
    {
      title: "Как начать играть на сервере",
      content: "1. Заполните анкету для доступа\n2. Дождитесь одобрения\n3. Подключитесь к серверу: byblikcraft.ru\n4. Прочитайте правила в игре"
    },
    {
      title: "Система экономики",
      content: "На сервере действует развитая экономическая система с магазинами, аукционом и возможностью торговли между игроками."
    },
    {
      title: "Регионы и приват",
      content: "Защитите свои постройки с помощью системы регионов. Используйте команду /rg claim для создания региона."
    },
    {
      title: "Команды для новичков",
      content: "/spawn - телепорт на спавн\n/home - телепорт домой\n/sethome - установить дом\n/help - список команд"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-orbitron font-bold text-neon-green animate-neon-pulse">
              BYBLIKCRAFT
            </h1>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-neon-cyan border-neon-cyan">
                <Icon name="Users" size={16} className="mr-1" />
                {serverStats.online}/{serverStats.maxPlayers}
              </Badge>
              <Badge variant="outline" className="text-neon-purple border-neon-purple">
                v{serverStats.version}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="home" className="font-orbitron">Главная</TabsTrigger>
            <TabsTrigger value="application" className="font-orbitron">Анкета</TabsTrigger>
            <TabsTrigger value="knowledge" className="font-orbitron">База знаний</TabsTrigger>
          </TabsList>

          {/* Главная страница */}
          <TabsContent value="home" className="space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-card via-card/80 to-card p-8 text-center">
              <div className="absolute inset-0 bg-[url('/img/7a766c74-672a-4afe-9a36-3cc609fd643b.jpg')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10">
                <h2 className="text-5xl font-orbitron font-bold mb-4 text-neon-green animate-neon-pulse">
                  ВЫЖИВАНИЕ НА НОВОМ УРОВНЕ
                </h2>
                <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Присоединяйся к лучшему серверу выживания в Minecraft! 
                  Уникальная экономика, развитая система регионов и дружелюбное сообщество ждут тебя.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="font-orbitron bg-neon-green text-background hover:bg-neon-green/80">
                    <Icon name="Play" size={20} className="mr-2" />
                    Начать играть
                  </Button>
                  <Button variant="outline" size="lg" className="font-orbitron border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                    <Icon name="Info" size={20} className="mr-2" />
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>

            {/* Статистика сервера */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-card to-card/50 border-neon-green/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Users" size={32} className="mx-auto mb-2 text-neon-green" />
                  <div className="text-2xl font-orbitron font-bold text-neon-green">{serverStats.online}</div>
                  <div className="text-sm text-muted-foreground">Игроков онлайн</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-card/50 border-neon-purple/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Activity" size={32} className="mx-auto mb-2 text-neon-purple" />
                  <div className="text-2xl font-orbitron font-bold text-neon-purple">{serverStats.uptime}</div>
                  <div className="text-sm text-muted-foreground">Аптайм сервера</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-card/50 border-neon-cyan/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Globe" size={32} className="mx-auto mb-2 text-neon-cyan" />
                  <div className="text-2xl font-orbitron font-bold text-neon-cyan">{serverStats.version}</div>
                  <div className="text-sm text-muted-foreground">Версия</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-card/50 border-neon-pink/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Shield" size={32} className="mx-auto mb-2 text-neon-pink" />
                  <div className="text-2xl font-orbitron font-bold text-neon-pink">24/7</div>
                  <div className="text-sm text-muted-foreground">Защита</div>
                </CardContent>
              </Card>
            </div>

            {/* Особенности сервера */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/30 transition-all duration-300 animate-float">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-neon-green font-orbitron">
                    <Icon name="Coins" size={24} />
                    Экономика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Развитая экономическая система с магазинами, аукционом и возможностью торговли.</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/30 transition-all duration-300 animate-float [animation-delay:0.5s]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-neon-purple font-orbitron">
                    <Icon name="Home" size={24} />
                    Регионы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Защити свои постройки с помощью продвинутой системы регионов и приватов.</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/30 transition-all duration-300 animate-float [animation-delay:1s]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-neon-cyan font-orbitron">
                    <Icon name="Zap" size={24} />
                    События
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Регулярные события, конкурсы и турниры с крутыми призами.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Анкета */}
          <TabsContent value="application">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-neon-green text-center">
                  Анкета для доступа на сервер
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-neon-cyan">Никнейм в Minecraft</Label>
                    <Input
                      id="username"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      placeholder="Введите ваш никнейм"
                      required
                      className="bg-input border-border focus:border-neon-green"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-neon-cyan">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                      className="bg-input border-border focus:border-neon-green"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-neon-cyan">Возраст</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      placeholder="16"
                      min="12"
                      required
                      className="bg-input border-border focus:border-neon-green"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-neon-cyan">Опыт игры в Minecraft</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      placeholder="2 года"
                      required
                      className="bg-input border-border focus:border-neon-green"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason" className="text-neon-cyan">Почему хотите играть на нашем сервере?</Label>
                    <Textarea
                      id="reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({...formData, reason: e.target.value})}
                      placeholder="Расскажите о себе и своих планах на сервере..."
                      required
                      className="bg-input border-border focus:border-neon-green min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full font-orbitron bg-neon-green text-background hover:bg-neon-green/80"
                    size="lg"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* База знаний */}
          <TabsContent value="knowledge">
            <Card className="bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-neon-purple text-center">
                  База знаний
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {knowledgeBase.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border">
                      <AccordionTrigger className="text-left font-orbitron text-neon-cyan hover:text-neon-cyan/80">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-orbitron font-bold text-neon-green">BYBLIKCRAFT</h3>
            <p className="text-muted-foreground">Лучший сервер выживания в Minecraft</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" className="font-orbitron border-neon-purple text-neon-purple">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Discord
              </Button>
              <Button variant="outline" size="sm" className="font-orbitron border-neon-cyan text-neon-cyan">
                <Icon name="Youtube" size={16} className="mr-2" />
                YouTube
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              IP сервера: <span className="text-neon-green font-mono">byblikcraft.ru</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;