import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Glowing brain-like elements */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-[30%] right-[15%] w-64 h-64 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] left-[25%] w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
        
        {/* Yellow accent shapes */}
        <div className="absolute top-[15%] right-[10%] w-24 h-2 bg-[rgb(var(--focus-yellow))] opacity-30 rotate-45"></div>
        <div className="absolute bottom-[30%] right-[20%] w-32 h-2 bg-[rgb(var(--focus-yellow))] opacity-20 rotate-12"></div>
        <div className="absolute top-[60%] left-[10%] w-20 h-2 bg-[rgb(var(--focus-yellow))] opacity-30 rotate-[30deg]"></div>
        
        {/* Neural connection lines */}
        <div className="absolute top-[25%] left-[40%] w-[1px] h-[70px] bg-white/10"></div>
        <div className="absolute bottom-[30%] right-[35%] w-[1px] h-[100px] bg-white/10"></div>
        <div className="absolute top-[45%] left-[15%] w-[80px] h-[1px] bg-white/10"></div>
      </div>

      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 mb-6">
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
                <Image src="/images/focus.png" alt="Logo" width={200} height={200} className="rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">Escola Focus</h1>
          <p className="text-xl mb-6 text-white/80">Aulas particulares que transformam o aprendizado</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-[rgba(var(--focus-navy-lighter),0.3)] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <div className="mb-4 text-[rgb(var(--focus-yellow))]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3 text-white">Ensino Personalizado</h2>
            <p className="text-white/70">Metodologia adaptada às necessidades individuais de cada aluno para maximizar resultados.</p>
          </div>
          
          <div className="bg-[rgba(var(--focus-navy-lighter),0.3)] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <div className="mb-4 text-[rgb(var(--focus-yellow))]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3 text-white">Professores Qualificados</h2>
            <p className="text-white/70">Equipe de educadores especializados com experiência e paixão pelo ensino.</p>
          </div>
          
          <div className="bg-[rgba(var(--focus-navy-lighter),0.3)] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <div className="mb-4 text-[rgb(var(--focus-yellow))]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3 text-white">Todas as Disciplinas</h2>
            <p className="text-white/70">Do fundamental ao vestibular, oferecemos suporte em todas as matérias escolares.</p>
          </div>
        </div>

        <div className="mt-8">
          <a
            className="rounded-full border border-[rgb(var(--focus-yellow))] transition-colors flex items-center justify-center bg-[rgba(var(--focus-yellow),0.1)] text-[rgb(var(--focus-yellow))] gap-2 hover:bg-[rgba(var(--focus-yellow),0.2)] font-medium px-8 py-3"
            href="#contato"
          >
            Agende uma Aula Experimental
          </a>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-white/60">
        <p>© 2024 Escola Focus - Todos os direitos reservados</p>
        <a 
          className="hover:text-[rgb(var(--focus-yellow))] transition-colors"
          href="#contato"
        >
          Contato
        </a>
        <a 
          className="hover:text-[rgb(var(--focus-yellow))] transition-colors"
          href="#sobre"
        >
          Sobre Nós
        </a>
      </footer>
    </div>
  );
}