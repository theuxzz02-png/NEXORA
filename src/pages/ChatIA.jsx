
import { useState } from 'react';
import './ChatIA.css';

export default function ChatIA() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);

  function enviarMensagem(evento) {
    evento.preventDefault();

    const texto = mensagem.trim();

    if (!texto) return;

    setMensagens((anteriores) => [
      ...anteriores,
      {
        id: crypto.randomUUID(),
        texto: texto
      }
    ]);

    setMensagem('');
  }

  return (
    <main className="chat-page">
      <section className="chat-container">

        <header className="chat-header">
          <a href="/" className="chat-voltar">
            ← Voltar
          </a>

          <div>
            <h1>NEXORA AI</h1>
            <p>Sua inteligência artificial</p>
          </div>
        </header>

        <div className="chat-mensagens">
          {mensagens.length === 0 ? (
            <div className="chat-boas-vindas">
              <div className="chat-logo">AI</div>

              <h2>Como posso ajudar você?</h2>

              <p>Digite uma mensagem para começar.</p>

              <span>Interface em desenvolvimento</span>
            </div>
          ) : (
            mensagens.map((item) => (
              <div className="chat-mensagem" key={item.id}>
                {item.texto}
              </div>
            ))
          )}
        </div>

        <form className="chat-form" onSubmit={enviarMensagem}>
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            value={mensagem}
            onChange={(evento) => setMensagem(evento.target.value)}
            aria-label="Sua mensagem"
          />

          <button type="submit" disabled={!mensagem.trim()}>
            Enviar
          </button>
        </form>

        <p className="chat-aviso">
          A inteligência artificial ainda não está conectada.
        </p>

      </section>
    </main>
  );
}
