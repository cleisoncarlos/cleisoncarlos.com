import Image from "next/image";
import React from "react";

import node from "../../images/icons/nodejs.png";
import css from "../../images/icons/css.png";
import docker from "../../images/icons/docker.png";
import git from "../../images/icons/git.png";
import graphql from "../../images/icons/graphql.png";
import javascript from "../../images/icons/javascript.png";
import mongodb from "../../images/icons/mongodb.png";
import prismaorm from "../../images/icons/prismaorm.png";
import tailwindcss from "../../images/icons/tailwindcss.png";
import wordpress from "../../images/icons/wordpress.png";
import sass from "../../images/icons/sass.png";
import html from "../../images/icons/html.png";
import typescript from "../../images/icons/typescript.png";
import codigoaberto from "../../images/icons/codigoaberto.png";
import reactjs from "../../images/icons/reactjs.png";
import nextjs from "../../images/icons/nextjs.png";
import bootstrap from "../../images/icons/bootstrap.png";
import postgreesql from "../../images/icons/postgreesql.png";

import mysql from "../../images/icons/mysql.png";

export default function Tecnologies() {
  return (
    <div className="flex flex-wrap">
      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={nextjs} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={postgreesql} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={mysql} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={bootstrap} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={html} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={typescript} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={reactjs} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={codigoaberto} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={node} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={css} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={docker} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={git} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={graphql} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={javascript} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={mongodb} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={prismaorm} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={tailwindcss} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={wordpress} alt="nodejs" width={64} height={64} />
      </div>

      <div className="bg-slate-800 align-middle rounded-2xl p-1 m-1">
        <Image src={sass} alt="nodejs" width={64} height={64} />
      </div>
    </div>
  );
}
