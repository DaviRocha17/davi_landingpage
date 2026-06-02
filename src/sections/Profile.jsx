const Profile = () => {
  return (
    <div className="max-container mx-auto px-8 pb-24 pt-28">
      <section id="home" className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="space-y-8">
          <p className="inline-block rounded-full bg-slate-900 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white">
            Perfil Pessoal
          </p>
          <div>
            <h1 className="font-palanquin text-5xl md:text-6xl font-bold leading-tight">
              Olá, eu sou <span className="text-coral-red">Davi Juliano Fonseca Rocha</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Sou estudante de Economia no Ibmec, com interesse em transformar ideias financeiras em soluções digitais e acessíveis. Busco construir projetos claros, funcionais e com foco na experiência do usuário.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-700">
              Entrar em contato
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Saiba mais
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-3xl font-bold">5+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">anos de experiência</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-3xl font-bold">30+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">projetos entregues</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-3xl font-bold">100%</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">foco no usuário</p>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] bg-white p-8 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
          <div className="h-[360px] rounded-3xl bg-slate-100" />
          <div className="mt-8 space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Função</p>
              <h2 className="mt-3 text-3xl font-bold">Desenvolvedor Front-end</h2>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Localização</p>
              <p className="mt-3 text-base text-slate-700">Brasília-DF</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Idade</p>
              <p className="mt-3 text-base text-slate-700">21 anos</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Disponibilidade</p>
              <p className="mt-3 text-base text-slate-700">Projetos e novas oportunidades</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mt-24 rounded-[32px] bg-white p-10 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Sobre mim</p>
            <h2 className="mt-4 text-4xl font-bold">Transformo ideias em interfaces impactantes.</h2>
            <p className="mt-6 text-slate-600 leading-8">
              Tenho experiência em construir sites modernos com ótima usabilidade, desempenho e acessibilidade. Gosto de trabalhar em times colaborativos e entregar soluções que ajudam as pessoas a alcançar seus objetivos.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="font-semibold">UI/UX Design</p>
              <p className="mt-2 text-slate-600">Criação de interfaces intuitivas e experiências agradáveis.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="font-semibold">React</p>
              <p className="mt-2 text-slate-600">Componentes reutilizáveis e estados bem organizados.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="font-semibold">Responsivo</p>
              <p className="mt-2 text-slate-600">Sites que funcionam bem em celular, tablet e desktop.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mt-24 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Habilidades</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <h3 className="font-semibold">Desenvolvimento Web</h3>
              <p className="mt-3 text-slate-600">HTML, CSS, JavaScript, Tailwind e melhores práticas de acesso.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <h3 className="font-semibold">React</h3>
              <p className="mt-3 text-slate-600">Hooks, estado global, roteamento e componentes escaláveis.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <h3 className="font-semibold">Design Visual</h3>
              <p className="mt-3 text-slate-600">Layouts modernos, tipografia e foco em clareza visual.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <h3 className="font-semibold">Comunicação</h3>
              <p className="mt-3 text-slate-600">Colaboração com equipes e entrega alinhada com o negócio.</p>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] bg-slate-950 p-10 text-white shadow-[0_30px_70px_rgba(15,23,42,0.2)]">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Destaques</p>
          <h2 className="mt-4 text-4xl font-bold">O que eu entrego</h2>
          <ul className="mt-8 space-y-4 text-slate-200">
            <li>• Páginas responsivas e rápidas</li>
            <li>• Código limpo e bem organizado</li>
            <li>• Experiências coerentes em todos os dispositivos</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="mt-24 rounded-[32px] bg-white p-10 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Contato</p>
            <h2 className="mt-4 text-4xl font-bold">Vamos conversar?</h2>
            <p className="mt-6 text-slate-600 leading-8">
              Se você quer discutir um projeto ou simplesmente trocar ideias, envie uma mensagem. Estou disponível para novas oportunidades e parcerias.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
                <p className="mt-3 text-base text-slate-900">seu.email@exemplo.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Telefone</p>
                <p className="mt-3 text-base text-slate-900">+55 11 99999-9999</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">LinkedIn</p>
                <p className="mt-3 text-base text-slate-900">linkedin.com/in/seunome</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
