import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import { RocketFooterLogo } from './RocketFooterLogo'

export function Video() {
    return (
       <div className="flex-1">
          <div className="bg-black flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
          </div>

          <div className="p-8 max-w-[1100px] mx-auto">
            <div className="flex items-start gap-16">
              <div className="flex-1">
                <h1 className="text-2xl font-bold">
                  Aula 01 - Abertura do Ignite Lab
                </h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <img 
                  className="rounded-full h-16 w-16 border-2 border-blue-500" 
                  src="https://github.com/diego3g.png" 
                  alt="Teacher Image"
                  />

                  <div className='leading-relaxed'>
                    <strong className="font-bold text-2xl block">
                      Diego Fernandes
                    </strong>
                    <span className="text-gray-200 text-sm block">
                      Co-Fundador e CTO na Rocketseat
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a href='#' className="p-4 bg-green-500 flex items-center justify-center gap-2 rounded text-sm font-bold uppercase text-gray-200 hover:bg-green-700 transition-colors">
                  <DiscordLogo size={24}/>
                  Comunidade do Discord
                  </a>
                <a href='#' className='border border-blue-500 text-blue-500 rounded px-9 py-4 flex items-center gap-2 font-medium text-sm uppercase hover:bg-blue-500 hover:text-gray-900 transition-colors'>
                  <Lightning size={24}/>
                  Acesse o Desafio
                </a>
              </div>
            </div>

            <div className="gap-8 mt-20 grid grid-cols-2">
              <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <FileArrowDown size={40} />
                </div>
                <div className="py-6 leading-relaxed">
                  <strong className="text-2xl">Material complementar</strong>
                  <p className="text-sm text-gray-200 mt-2">
                    Acesse o material complementar para acelerar o seu desenvolvimento
                  </p>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
                </a>

                <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                <div className="bg-green-700 h-full p-6 flex items-center">
                  <FileArrowDown size={40} />
                </div>
                <div className="py-6 leading-relaxed">
                  <strong className="text-2xl">Wallpapers exclusivos</strong>
                  <p className="text-sm text-gray-200 mt-2">
                    Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                  </p>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
              </a>
            </div>
          </div>

          <footer className="mt-20 p-6 gap-6 flex items-center justify-between text-gray-200 text-sm border-t border-gray-600">
            <div className='flex items-center gap-6'>
            <RocketFooterLogo/>
            <span>Rocketseat - Todos os direitos reservados</span>
            </div>
            <span>Políticas de Privacidade</span>
          </footer>
       </div>
    )
}