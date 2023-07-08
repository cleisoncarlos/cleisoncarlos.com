import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Login from "@/components/Login";

import {
  WhatsappLogo,
  Devices,
  Storefront,
  DeviceMobile,
  GoogleLogo,
  Chats,
  ArrowSquareUpRight,
} from "@phosphor-icons/react";

import Lottie from "lottie-react";
import animateRocket from "../lottie/95296-mobile-orange.json";
import Logos from "@/components/Logos";
import Tecnologies from "@/components/Tecnologies";

const title = `text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#e44095] to-[#374ff0]`;

export default function Home() {
  return (
    <>
      <main>
        <div class="container mx-auto bg-base-200 mt-10">
          <Header />

          <section>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse sm: mx-10">
                <Lottie animationData={animateRocket} />
                <div>
                  <h1 className="text-5xl font-bold text-white">
                    Box Office News!
                  </h1>

                  <h1 class="text-6xl font-extrabold text-[#FF4A57] ">
                    Bem-vindo ao mundo digital!
                  </h1>

                  <p className="py-2 text-white">
                    Desenvolvemos sistemas inovadores para a internet,
                    permitindo que sua empresa se destaque no mercado digital e
                    aproveite todas as oportunidades que a tecnologia oferece.
                  </p>

                  <p className="py-2 text-white">
                    Aproveite o poder dos aplicativos móveis para expandir sua
                    empresa, proporcionando conveniência e acessibilidade aos
                    seus clientes, onde quer que estejam.
                  </p>

                  <p className="py-2 text-white">
                    Seu site é a vitrine online do seu negócio. Desenvolvemos
                    sites e portais personalizados, focados em usabilidade e
                    design responsivo, para atrair e envolver seus visitantes
                  </p>
                  <p className="py-2 text-white">
                    Entre em contato para discutirmos como posso ajudá-lo a
                    levar seu projeto para o próximo nível.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="columns-2 py-20 px-16">
              <div>
                <Tecnologies />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Tecnologias mais Modernas para Impulsionar o Sucesso da Sua
                  Empresa
                </h1>
                Em um mundo cada vez mais digital, é essencial que as empresas
                estejam na vanguarda das tecnologias mais modernas para se
                destacarem em seus setores. A adoção inteligente e estratégica
                dessas tecnologias pode impulsionar o sucesso do seu negócio,
                aumentar a eficiência operacional e aprimorar a experiência do
                cliente.
              </div>
            </div>
          </section>

          <section>
            <div className="lg:mx-20">
              <div className="ml-5">
                <h1 className="text-5xl font-bold text-white">
                  Box Office News!
                </h1>

                <h1 class="text-6xl font-extrabold text-[#FF4A57] pb-4 ">
                  Alguns Serviços
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-5 p-4 lg:w-3/4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div className="bg-[#2B2D41] p-4 rounded">
                  <Devices weight="duotone" size={120} color="#d4ecff" />

                  <p className="text-lg font-bold mb-4">
                    Desenvolvimento de Websites, Portais e Blogs:
                  </p>

                  <p>
                    Os aplicativos web oferecem interações avançadas e
                    funcionalidades personalizadas para os usuários. Eles podem
                    ser úteis para automatizar processos, fornecer serviços
                    personalizados e melhorar a eficiência dos negócios online.
                  </p>

                  <ArrowSquareUpRight
                    size={40}
                    color="#fff"
                    weight="light"
                    className="mt-5"
                  />
                </div>

                <div className="bg-[#2B2D41] p-4 rounded">
                  <DeviceMobile weight="duotone" size={120} color="#d4ecff" />

                  <p className="text-lg font-bold mb-4">
                    Desenvolvimento de aplicativos:
                  </p>

                  <p>
                    Os aplicativos web oferecem interações avançadas e
                    funcionalidades personalizadas para os usuários. Eles podem
                    ser úteis para automatizar processos, fornecer serviços
                    personalizados e melhorar a eficiência dos negócios online.
                  </p>

                  <ArrowSquareUpRight
                    size={40}
                    color="#fff"
                    weight="light"
                    className="mt-5"
                  />
                </div>

                <div className="bg-[#2B2D41] p-4 rounded">
                  <Storefront weight="duotone" size={120} color="#d4ecff" />

                  <p className="text-lg font-bold mb-4">
                    {" "}
                    Desenvolvimento de comércio eletrônico:
                  </p>

                  <p>
                    Ao criar uma loja virtual, o cliente pode expandir seus
                    negócios para o comércio eletrônico, permitindo que os
                    clientes comprem seus produtos ou serviços online. Isso
                    aumenta a acessibilidade e a conveniência para os
                    consumidores, além de ampliar o alcance geográfico da
                    empresa.
                  </p>
                  <ArrowSquareUpRight
                    size={40}
                    color="#fff"
                    weight="light"
                    className="mt-5"
                  />
                </div>

                <div className="bg-[#2B2D41] p-4 rounded">
                  <GoogleLogo weight="duotone" size={120} color="#d4ecff" />

                  <p className="text-lg font-bold mb-4">
                    Otimização de mecanismos de busca (SEO):
                  </p>

                  <p>
                    A otimização de mecanismos de busca ajuda o site do cliente
                    a obter uma melhor visibilidade nos resultados de pesquisa
                    orgânica. Isso significa que mais pessoas podem encontrar o
                    site quando procuram por produtos, serviços ou informações
                    relevantes, aumentando o tráfego e a chance de conversões.
                  </p>
                  <ArrowSquareUpRight
                    size={40}
                    color="#fff"
                    weight="light"
                    className="mt-5"
                  />
                </div>

                <div className="bg-[#2B2D41] p-4 rounded">
                  <Chats weight="duotone" size={120} color="#d4ecff" />

                  <p className="text-lg font-bold mb-4">
                    Websites, Portais e Blogs:
                  </p>

                  <p>
                    A presença online é essencial nos dias de hoje. Com
                    habilidades em design atraente e programação avançada, vou
                    criar um site ou blog personalizado que se destaque da
                    concorrência. Transmita sua mensagem de forma cativante,
                    compartilhe seus conhecimentos ou promova seus serviços de
                    maneira profissional e intuitiva.
                  </p>
                  <ArrowSquareUpRight
                    size={40}
                    color="#fff"
                    weight="light"
                    className="mt-5"
                  />
                </div>

                <div className="bg-[#2B2D41] p-4 rounded hover:bg-[#fd816e]">
                  <Devices size={120} color="#d4ecff" />

                  <p className="text-lg font-bold mb-4">
                    Websites, Portais e Blogs:
                  </p>

                  <p>
                    O marketing digital abrange várias estratégias, como
                    publicidade em mídias sociais, e-mail marketing e marketing
                    de conteúdo. Essas atividades ajudam a promover a marca do
                    cliente, atrair tráfego qualificado para o site, aumentar o
                    reconhecimento da marca e engajar o público-alvo.
                  </p>
                  <ArrowSquareUpRight
                    size={40}
                    color="#fff"
                    weight="light"
                    className="mt-5"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="lg:mx-20 mt-10">
              <h1 className="text-5xl font-bold text-[#2B2D41]">
                Box Office News!
              </h1>

              <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#e44095] to-[#374ff0] ">
                Tailwind CSS Custom <br />
                Gradient Text Color
              </h1>
              <Logos />
            </div>
          </section>

          <Login />

          <Footer />
        </div>

        <div className="toast toast-end">
          <div className="bg-green-600 rounded-lg p-1">
            <WhatsappLogo size={40} color="#fff" weight="duotone" />
          </div>
        </div>
      </main>
    </>
  );
}
