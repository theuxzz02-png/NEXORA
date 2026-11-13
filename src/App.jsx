

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <a href="#" className="logo">
          NEXORA<span>.</span>
        </a>

        <nav className="navigation">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a href="#servicos" className="header-button">
          Começar agora
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <div className="tag">
              <span className="status-dot"></span>
              INTELIGÊNCIA E AUTOMAÇÃO
            </div>

            <h1>
              O futuro da tecnologia
              <span> começa aqui.</span>
            </h1>

            <p>
              Inteligência artificial, comunicação e automação
              reunidas em uma única plataforma.
            </p>

            <div className="hero-buttons">
              <a href="#servicos" className="primary-button">
                Explorar plataforma →
              </a>

              <a href="#sobre" className="secondary-button">
                Conhecer projeto
              </a>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="orb">
              <span>AI</span>
            </div>
            <div className="floating-card">
              <span>✦</span> Tecnologia inteligente
            </div>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="section-heading">
            <span>NOSSAS SOLUÇÕES</span>
            <h2>Tudo conectado. Um só lugar.</h2>
            <p>Conheça os recursos que estamos desenvolvendo.</p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">✧</div>
              <h3>Inteligência Artificial</h3>
              <p>
                Assistente inteligente para conversas,
                respostas e automações.
              </p>

              <a href="/ia">Explorar recurso →</a>
            </article>

            <article className="service-card">
              <div className="service-icon">◈</div>
              <h3>WhatsApp</h3>
              <p>
                Comunicação e atendimento por meio
                de integrações oficiais.
              </p>
              <a href="#sobre">Explorar recurso →</a>
            </article>

            <article className="service-card">
              <div className="service-icon">⌁</div>
              <h3>Telefonia</h3>
              <p>
                Solicitações e recursos de chamadas
                telefônicas autorizadas.
              </p>
              <a href="#sobre">Explorar recurso →</a>
            </article>
          </div>
        </section>

        <section className="about" id="sobre">
          <span>UM NOVO CONCEITO</span>
          <h2>Tecnologia trabalhando a seu favor.</h2>
          <p>
            Estamos construindo uma plataforma que une
            diferentes tecnologias em uma experiência simples.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="logo">
          NEXORA<span>.</span>
        </a>
        <p>© 2026 Nexora. Projeto em desenvolvimento.</p>
      </footer>
    </div>
  );
}

export default App;
