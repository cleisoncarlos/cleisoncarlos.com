import React from "react";

import Image from "next/image";
import Head from "next/head";

import {
  LinkedinLogo,
  GithubLogo,
  Envelope,
  DribbbleLogo,
} from "@phosphor-icons/react";

import minhaLogo from "../../images/logo-cleisoncarlos.png";

const structData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Learning Next.js SEO",
  description: "All about Next.js features and more",
  author: [
    {
      "@type": "Person",
      name: "Cleison Carlos",
    },
  ],
  datePublished: "2023-02-16T09:00:00.000Z",
};

export default function Header() {
  return (
    <>
      <Head>
        <title>cleisoncarlos.com</title>
        <meta
          name="description"
          content="Cleison Carlos | Desenvolvimento Web / Mobile"
        />
        <meta
          property="og:title"
          content="Cleison Carlos | Desenvolvimento Web / Mobile"
        />
        <meta
          property="og:description"
          content="Cleison Carlos | Desenvolvimento Web / Mobile"
        />
        <meta property="og:url" content="https://lanchoneteagarikov.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="caminho/para/imagem.jpg" />
        <meta
          name="keywords"
          content="Desenvolvimento web, Belém, web design, programação, sites responsivos, agência web, desenvolvedor web, criação de sites, SEO, e-commerce, marketing digital, hospedagem de sites, manutenção de sites, consultoria web, UI/UX design, mobile app development, WordPress, front-end development, back-end development, desenvolvimento de loja virtual, soluções web, desenvolvimento de software, branding digital, otimização de sites, marketing online, comércio eletrônico, mídia social, estratégias digitais, consultoria de TI, design responsivo, tecnologia da informação, consultoria em marketing, serviços de web design, soluções personalizadas, marketing de conteúdo, otimização para mecanismos de busca, mídias sociais, branding online, criação de identidade visual, aplicativos móveis, experiência do usuário, estratégias de marketing, desenvolvimento ágil, consultoria em tecnologia, soluções empresariais"
        />
        <meta name="author" content="Seu Nome" />
        <link rel="icon" href="/favicon.ico" />

        <script
          key="structured-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structData) }}
        />

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div className="navbar bg-base-100 mt-3 py-4">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case">
            <Image src={minhaLogo} alt="cleisoncarlos.com" />
          </a>
        </div>

        <div className="navbar-end">
          <a href="#" className="mx-1">
            <LinkedinLogo size={36} color="#fff" weight="duotone" />
          </a>

          <a href="#" className="mx-1">
            <GithubLogo size={36} color="#8b7475" weight="duotone" />
          </a>

          <a href="#" className="mx-1">
            <Envelope size={36} color="#8b7475" weight="duotone" />
          </a>

          <a href="#" className="mx-1">
            <DribbbleLogo size={36} color="#8b7475" weight="duotone" />
          </a>
        </div>
      </div>
    </>
  );
}
