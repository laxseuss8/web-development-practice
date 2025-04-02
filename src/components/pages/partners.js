import React from "react";
import dexma from "../../assets/images/principals/17.png";
import skywalker from "../../assets/images/principals/18.png";
import plcgroup from "../../assets/images/principals/19.png";
import userful from "../../assets/images/principals/20.png";
import ni2 from "../../assets/images/principals/21.png";
import telkhaconnect from "../../assets/images/principals/22.png";
import humax from "../../assets/images/principals/23.png";
import proxim from "../../assets/images/principals/24.png";
import comarcom from "../../assets/images/principals/25.png";
import radioinnovation from "../../assets/images/principals/26.png";
import tambora from "../../assets/images/principals/27.png";
import rain from "../../assets/images/principals/28.png";
import kenmei from "../../assets/images/principals/29.png";
import proto from "../../assets/images/principals/30.png";
import tekmonks from "../../assets/images/principals/31.png";
import securityscorecard from "../../assets/images/principals/32.png";
import fortinet from "../../assets/images/principals/33.png";
import accuenergy from "../../assets/images/principals/34.png";

import smart from "../../assets/images/clients/36.png";
import pldt from "../../assets/images/clients/37.png";
import globe from "../../assets/images/clients/38.png";
import rlc from "../../assets/images/clients/39.png";
import robinsonsmalls from "../../assets/images/clients/40.png";
import robinsonsestates from "../../assets/images/clients/41.png";
import megaworld from "../../assets/images/clients/42.png";
import barmm from "../../assets/images/clients/43.png";
import pnp from "../../assets/images/clients/44.png";
import dict from "../../assets/images/clients/45.png";
import deped from "../../assets/images/clients/46.png";
import dot from "../../assets/images/clients/47.png";
import sss from "../../assets/images/clients/48.png";
import nowtelecom from "../../assets/images/clients/49.png";
import sti from "../../assets/images/clients/50.png";
import pse from "../../assets/images/clients/51.png";
import wgroup from "../../assets/images/clients/52.png";
import themedicalcity from "../../assets/images/clients/53.png";
import bsp from "../../assets/images/clients/54.png";
import ayala from "../../assets/images/clients/56.png";
import infinivan from "../../assets/images/clients/57.png";
import eastern from "../../assets/images/clients/58.png";
import radius from "../../assets/images/clients/59.png";
import sb from "../../assets/images/clients/60.png";
import dlsuzobel from "../../assets/images/clients/61.png";
import ahmc from "../../assets/images/clients/62.png";
import lukes from "../../assets/images/clients/63.png";
import mitsukoshi from "../../assets/images/clients/64.png";
import asia from "../../assets/images/clients/66.png";
import pnb from "../../assets/images/clients/67.png";
import generika from "../../assets/images/clients/68.png";
import dito from "../../assets/images/clients/70.png";
import asianvision from "../../assets/images/clients/71.png";
import philcom from "../../assets/images/clients/72.png";
import festival from "../../assets/images/clients/73.png";
import maya from "../../assets/images/clients/74.png";
import britishschool from "../../assets/images/clients/75.png";
import aivee from "../../assets/images/clients/76.png";
import beeinfotech from "../../assets/images/clients/77.png";
import marriott from "../../assets/images/clients/78.png";
import worldresorts from "../../assets/images/clients/79.png";
import crimson from "../../assets/images/clients/80.png";

const partners = [
  { name: "Dexma", src: dexma },
  { name: "SkyWalker", src: skywalker },
  { name: "PLCGroup", src: plcgroup },
  { name: "Userful", src: userful },
  { name: "Ni2", src: ni2 },
  { name: "TelkhaConnect", src: telkhaconnect },
  { name: "Humax", src: humax },
  { name: "Proxim", src: proxim },
  { name: "Comarcom", src: comarcom },
  { name: "Radio Innovation", src: radioinnovation },
  { name: "Tambora", src: tambora },
  { name: "Rain", src: rain },
  { name: "Kenmei", src: kenmei },
  { name: "Proto", src: proto },
  { name: "TekMonks", src: tekmonks },
  { name: "SecurityScorecard", src: securityscorecard },
  { name: "Fortinet", src: fortinet },
  { name: "Accuenergy", src: accuenergy },
];

const clients = [
  { name: "Smart", src: smart },
  { name: "PLDT", src: pldt },
  { name: "Globe", src: globe },
  { name: "Robinsons Land Corporation", src: rlc },
  { name: "Robinsons Malls", src: robinsonsmalls },
  { name: "Robinsons Estates", src: robinsonsestates },
  { name: "Megaworld", src: megaworld },
  { name: "BARMM", src: barmm },
  { name: "PNP", src: pnp },
  { name: "DICT", src: dict },
  { name: "DepEd", src: deped },
  { name: "DOT", src: dot },
  { name: "SSS", src: sss },
  { name: "NOW Telecom", src: nowtelecom },
  { name: "STI", src: sti },
  { name: "PSE", src: pse },
  { name: "The Medical City", src: themedicalcity },
  { name: "BSP", src: bsp },
  { name: "Ayala", src: ayala },
  { name: "Infinivan", src: infinivan },
  { name: "Eastern", src: eastern },
  { name: "Radius", src: radius },
  { name: "Security Bank", src: sb },
  { name: "DLSU Zobel", src: dlsuzobel },
  { name: "Asian Hospital & Medical Center", src: ahmc },
  { name: "St. Luke's Medical Center", src: lukes },
  { name: "Mitsukoshi", src: mitsukoshi },
  { name: "Asia", src: asia },
  { name: "PNB", src: pnb },
  { name: "Generika", src: generika },
  { name: "DITO", src: dito },
  { name: "Asian Vision", src: asianvision },
  { name: "PhilCom", src: philcom },
  { name: "Festival Mall", src: festival },
  { name: "Maya", src: maya },
  { name: "British School Manila", src: britishschool },
  { name: "Aivee Clinic", src: aivee },
  { name: "Beeinfotech", src: beeinfotech },
  { name: "Marriott", src: marriott },
  { name: "World Resorts", src: worldresorts },
  { name: "Crimson Hotel", src: crimson },
  { name: "WGroup", src: wgroup },
];

const PartnerLogo = ({ name, src }) => (
  <img
    alt={name}
    src={src}
    width={158}
    height={48}
    className="col-span-1 max-h-15 w-full object-contain 
      lg:col-span-1 transition delay-150 duration-200 ease-in-out 
      hover:-translate-y-1 hover:scale-125 max-w-none"
  />
);

const Partners = () => (
  <div className="mx-auto max-w-7xl px-6 lg:px-7">
    <h2 className="py-1 mt-8 text-center text-3xl font-semibold tracking-tight text-black sm:text-4xl">
      Trusted by the most forward-thinking teams worldwide
    </h2>
    <div
      className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center px-6 gap-x-12 gap-y-10
    sm:max-w-xl sm:grid-cols-6 sm:gap-x-3 lg:mx-0 lg:max-w-none lg:grid-cols-5 pb-16 py-6"
    >
      {partners.map((partner, index) => (
        <PartnerLogo key={index} {...partner} />
      ))}
    </div>
    <h2 className="py-1 mt-8 text-center text-3xl font-semibold tracking-tight text-black sm:text-4xl">
      Serving Clients with Innovation and Excellence
    </h2>
    <div
      className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center px-6 gap-x-12 gap-y-10
    sm:max-w-xl sm:grid-cols-6 sm:gap-x-3 lg:mx-0 lg:max-w-none lg:grid-cols-5 pb-16 py-6"
    >
      {clients.map((partner, index) => (
        <PartnerLogo key={index} {...partner} />
      ))}
    </div>
  </div>
);

export default Partners;
