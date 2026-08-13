'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Settings, Lock, Bot, MessageSquare, Save, Loader2 } from 'lucide-react';

export function SettingsPanel() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    adminPassword: '',
    geminiApiKey: '',
    telegramBotToken: '',
    telegramChatId: ''
  });

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setFormData({
            adminPassword: data.adminPassword || '',
            geminiApiKey: data.geminiApiKey || '',
            telegramBotToken: data.telegramBotToken || '',
            telegramChatId: data.telegramChatId || ''
          });
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      alert('Configurações salvas com sucesso!');
    } catch (e) {
      alert('Erro ao salvar as configurações.');
    }
    setSaving(false);
  };

  if (loading) {
    return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      <Card className="bg-card/60 backdrop-blur-md border-border shadow-lg">
        <CardHeader className="border-b border-border/50 bg-muted/20 pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Lock className="w-5 h-5 text-primary" />
            Segurança do Painel
          </CardTitle>
          <CardDescription>Configure a senha de acesso a esta área administrativa.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label>Senha de Administrador</Label>
            <Input 
              name="adminPassword" 
              type="password" 
              value={formData.adminPassword} 
              onChange={handleChange} 
              placeholder="Ex: admin123" 
            />
            <p className="text-xs text-muted-foreground">Esta é a senha que você digita para entrar no /dashboard.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/60 backdrop-blur-md border-border shadow-lg">
        <CardHeader className="border-b border-border/50 bg-muted/20 pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Bot className="w-5 h-5 text-purple-500" />
            Inteligência Artificial (O Clone)
          </CardTitle>
          <CardDescription>Configure a chave da API do Google Gemini para dar vida ao seu Chatbot.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label>Google Gemini API Key</Label>
            <Input 
              name="geminiApiKey" 
              type="password" 
              value={formData.geminiApiKey} 
              onChange={handleChange} 
              placeholder="AIzaSy..." 
            />
            <p className="text-xs text-muted-foreground">Obtenha sua chave gratuita em <a href="https://aistudio.google.com/app/apikey" target="_blank" className="text-primary hover:underline">Google AI Studio</a>.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/60 backdrop-blur-md border-border shadow-lg">
        <CardHeader className="border-b border-border/50 bg-muted/20 pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            Alertas em Tempo Real (Telegram)
          </CardTitle>
          <CardDescription>Receba uma mensagem no seu celular assim que um recrutador acessar seu portfólio.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label>Bot Token</Label>
            <Input 
              name="telegramBotToken" 
              type="password" 
              value={formData.telegramBotToken} 
              onChange={handleChange} 
              placeholder="Ex: 123456789:ABCdefGHIjklmNOPqrstUVWxyz" 
            />
            <p className="text-xs text-muted-foreground">Crie um bot no <a href="https://t.me/BotFather" target="_blank" className="text-primary hover:underline">@BotFather</a> no Telegram e cole o HTTP API Token aqui.</p>
          </div>
          <div className="space-y-2">
            <Label>Seu Chat ID (Destinatário)</Label>
            <Input 
              name="telegramChatId" 
              value={formData.telegramChatId} 
              onChange={handleChange} 
              placeholder="Ex: 12345678" 
            />
            <p className="text-xs text-muted-foreground">Fale com o <a href="https://t.me/userinfobot" target="_blank" className="text-primary hover:underline">@userinfobot</a> para descobrir o seu ID numérico.</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end pt-4 pb-12">
        <Button onClick={handleSave} disabled={saving} size="lg" className="gap-2 shadow-lg hover:shadow-primary/20 transition-all">
          {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
          {saving ? 'Salvando...' : 'Salvar Todas as Configurações'}
        </Button>
      </div>

    </div>
  );
}
