'use client';

import { useChat } from 'ai/react';
import { Bot, X, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
  });

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl z-50 transition-transform ${isOpen ? 'scale-0' : 'scale-100'}`}
        title="Falar com o Clone IA"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-card border border-border rounded-xl shadow-2xl flex flex-col z-50 transition-all origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{ height: '500px', maxHeight: 'calc(100vh - 48px)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30 rounded-t-xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">O Clone (IA)</h3>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-muted-foreground">
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Bot className="w-3.5 h-3.5 text-primary" />
            </div>
            <div className="bg-muted p-2.5 rounded-xl rounded-tl-none text-sm text-foreground">
              Olá! Eu sou o Clone IA do Daniel. Como posso ajudar você a conhecer melhor o trabalho dele?
            </div>
          </div>

          {messages.map(m => (
            <div key={m.id} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              {m.role !== 'user' && (
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                </div>
              )}
              <div 
                className={`p-2.5 rounded-xl text-sm max-w-[85%] whitespace-pre-wrap ${m.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-none' : 'bg-muted text-foreground rounded-tl-none'}`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="bg-muted p-2.5 rounded-xl rounded-tl-none text-sm text-muted-foreground flex gap-1 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce" style={{animationDelay: '0.2s'}}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce" style={{animationDelay: '0.4s'}}></span>
              </div>
            </div>
          )}
          
          {error && (
            <div className="text-xs text-red-500 text-center p-2 bg-red-500/10 rounded-lg">
              {error.message.includes('API Key') 
                ? 'O dono do portfólio ainda não configurou a chave de API da IA. Volte mais tarde!'
                : 'Ops, ocorreu um erro de conexão.'}
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-border bg-muted/10 rounded-b-xl flex gap-2">
          <Input 
            value={input} 
            onChange={handleInputChange} 
            placeholder="Pergunte sobre as habilidades..." 
            className="flex-1 bg-background"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </>
  );
}
