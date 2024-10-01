import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class news extends Component {
  constructor() {
    super();
    console.log("I am a constructor");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    // let url =
    //   "https://newsapi.org/v2/everything?q=movie&language=en&from=2024-09-01&sortBy=publishedAt&pageSize=20&apiKey=87548a2330b446aa9c1e6a3347e50155";
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(data);
    // console.log(parsedData);
    let myarticles = [
        {
          source: { id: null, name: "Diariomotor.com" },
          author: "David Durán",
          title:
            "La lección de seguridad que las marcas, chinas en particular, parecen no entender",
          description:
            "Hay un elemento, uno en particular, en el que distinguimos el interior de un coche moderno de uno antiguo. No es el volante o los pedales, podría ser la consola central o incluso el cuadro de mandos, aunque los hay digitales ya desde la década de los ochenta.…",
          url: "https://www.diariomotor.com/noticia/leccion-seguridad-marcas-chinas/",
          urlToImage:
            "https://www.diariomotor.com/imagenes/2021/10/mg-marvel-r-precios-octubre-2021-19-interior-salpicadero-puesto-conduccion-6175db423c2f3.jpg",
          publishedAt: "2024-09-30T10:18:02Z",
          content:
            "Hay un elemento, uno en particular, en el que distinguimos el interior de un coche moderno de uno antiguo. No es el volante o los pedales, podría ser la consola central o incluso el cuadro de mandos,… [+3555 chars]",
        },
        {
          source: { id: null, name: "Siècle Digital" },
          author: "Guillaume Fleureau",
          title:
            "X en perte de vitesse : comment la valorisation de l’ancien Twitter a chuté de 79% en moins de deux ans",
          description:
            "En octobre 2022, Elon Musk a fait sensation en achetant Twitter pour la somme astronomique de 44 milliards de dollars, rebaptisant la plateforme « X ». Aujourd’hui, la plateforme ne vaudrait plus qu’un quart de son prix d’achat initial, soit environ 4,19 mill…",
          url: "https://siecledigital.fr/2024/09/30/x-en-perte-de-vitesse-comment-la-valorisation-de-lancien-twitter-a-chute-de-79-en-moins-de-deux-ans/",
          urlToImage:
            "https://siecledigital.fr/wp-content/uploads/2024/09/perte-vitesse-x.jpg",
          publishedAt: "2024-09-30T10:15:38Z",
          content:
            "En octobre 2022, Elon Musk a fait sensation en achetant Twitter pour la somme astronomique de 44 milliards de dollars, rebaptisant la plateforme « X ». Aujourd’hui, la plateforme ne vaudrait plus qu’… [+4185 chars]",
        },
        {
          source: { id: null, name: "mobiFlip.de" },
          author: "Oliver Schwuchow",
          title: "Kia EV3 und EV4: Nächster Schritt für die Elektroautos",
          description:
            "Kia hat bereits einige Einheiten des EV3 produzieren und Medien damit fahren lassen, aber jetzt beginnt der richtige Hochlauf. Passend dazu hat man jetzt das neue Gwangmyeong EVO-Werk eröffnet, welches […]",
          url: "https://www.mobiflip.de/shortnews/kia-ev3-und-ev4-naechster-schritt-fuer-die-elektroautos/",
          urlToImage:
            "https://www.mobiflip.de/wp-content/uploads/2024/01/kia-ev4-konzept-2025-header.jpg",
          publishedAt: "2024-09-30T10:12:21Z",
          content:
            "Kia hat bereits einige Einheiten des EV3 produzieren und Medien damit fahren lassen, aber jetzt beginnt der richtige Hochlauf. Passend dazu hat man jetzt das neue Gwangmyeong EVO-Werk eröffnet, welch… [+953 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "Leo Sun, The Motley Fool",
          title: "Better Buy: Plug Power vs. ChargePoint",
          description:
            "Which of these green energy stocks will stop turning red in the future?",
          url: "https://finance.yahoo.com/news/better-buy-plug-power-vs-101100742.html/",
          urlToImage:
            "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
          publishedAt: "2024-09-30T10:11:00Z",
          content:
            "Plug Power(NASDAQ: PLUG) and ChargePoint (NYSE: CHPT) are both green energy stocks that delivered ugly red losses for most of their investors.\r\nPlug Power, which was once considered a promising play … [+6533 chars]",
        },
        {
          source: { id: null, name: "Abertoatedemadrugada.com" },
          author: "Carlos Martins",
          title: "XPeng lança 3 modelos em Portugal",
          description:
            "A XPeng estreia-se em Portugal com três modelos: os SUVs G6 e G9, e o sedan desportivo P7.",
          url: "https://abertoatedemadrugada.com/2024/09/xpeng-lanca-3-modelos-em-portugal.html",
          urlToImage:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQd24G0HFxRiI3uY6RWX1k1kzzOo7uRJCIfLIshs_x8ELuHeOZ8lj3zukhd3bd9gCswREHw8vKqIYEVqAnfLwHco5Vj8EiU0c0M0Ic_eYI17evsK6YJaUUAJ2Qu11BxSR362e9t7DpMhRp8lI0JJNngBrJlU-DJ5RTjCO8aY6njfnLB1SuEh1CZcPLgwzl/w1200-h630-p-k-no-nu/g6.jpg",
          publishedAt: "2024-09-30T10:00:00Z",
          content:
            "A XPeng estreia-se em Portugal com três modelos: os SUVs G6 e G9, e o sedan desportivo P7.\n\n\nTal como tinha sido prometido, a XPeng passa a esta representada em Portugal (e Espanha) pela Salvador Cae… [+949 chars]",
        },
        {
          source: { id: null, name: "Ilfattoquotidiano.it" },
          author: "F. Q.",
          title:
            "Zuckerberg sempre più ricco, scala la classifica dei miliardari: “Presto potrebbe superare Arnault e Bezos”",
          description:
            "Con un balzo in avanti di 73,4 miliardi di dollari nel 2024, il suo patrimonio personale ha raggiunto la cifra record di 201 miliardi, consacrandolo come quarto uomo più ricco del mondo\nL'articolo Zuckerberg sempre più ricco, scala la classifica dei miliardar…",
          url: "https://www.ilfattoquotidiano.it/2024/09/30/zuckerberg-sempre-piu-ricco-scala-la-classifica-dei-miliardari-presto-potrebbe-superare-arnault-e-bezos/7712833/",
          urlToImage:
            "https://st.ilfattoquotidiano.it/wp-content/uploads/2022/02/03/zuckerberg1200-1200x630.jpg",
          publishedAt: "2024-09-30T09:54:13Z",
          content:
            "Mark Zuckerberg, il visionario fondatore di Facebook, è sempre più vicino alla vetta dell’Olimpo dei miliardari. Con un balzo in avanti di 73,4 miliardi di dollari nel 2024, il suo patrimonio persona… [+1850 chars]",
        },
        {
          source: { id: null, name: "Les Numériques" },
          author: "Aurélien Piot",
          title:
            "Actualité : Tesla : un mystérieux prototype basé sur la Model 3 aperçu sur la route",
          description:
            "Une Tesla Model 3 camouflée a été aperçue aux États-Unis. Ce prototype pourrait être un mulet de développement des futures Tesla plus abordables que les Model 3 et Model Y, parmi d'autres hypothèses.",
          url: "https://www.lesnumeriques.com/voiture-electrique/tesla-un-mysterieux-prototype-base-sur-la-model-3-apercu-sur-la-route-n226911.html",
          urlToImage:
            "https://cdn.lesnumeriques.com/optim/news/22/226911/ba13c672-tesla-un-etonnant-prototype-base-sur-la-model-3-apercu-sur-la-route_png__1200_678__0-246-2328-1468.jpg",
          publishedAt: "2024-09-30T09:54:00Z",
          content:
            "Tesla ne lance pas un nouveau modèle tous les quatre matins, alors quand un prototype de la marque est aperçu sur la route, cela n'a généralement rien d'anodin. C'est ce que l'on peut se dire en déco… [+1870 chars]",
        },
        {
          source: { id: null, name: "Business Standard" },
          author: "Nandini Singh",
          title:
            "Mark Zuckerberg enters $200 billion club, becomes world's fourth-richest",
          description:
            "World's 4th Richest, Mark Zuckerberg's rapid climb in wealth is largely fuelled by his 13 per cent stake in Meta, the parent company of Facebook, Instagram, and WhatsApp",
          url: "https://www.business-standard.com/world-news/mark-zuckerberg-enters-200-billion-club-becomes-world-s-fourth-richest-124093000615_1.html",
          urlToImage:
            "https://bsmedia.business-standard.com/_media/bs/img/article/2024-09/30/thumb/featurecrop/400X400/1727687973-2932.jpg",
          publishedAt: "2024-09-30T09:53:24Z",
          content:
            "Mark Zuckerberg's rapid climb in wealth is largely fuelled by his 13 per cent stake in Meta, the parent company of Facebook, Instagram, and WhatsApp\r\nPhoto: Shutterstock\r\nNandini SinghNew Delhi\r\nMeta… [+2244 chars]",
        },
        {
          source: { id: null, name: "Frandroid" },
          author: "Marie Lizak",
          title:
            "Pourquoi il faudra surveiller de près ce méconnu constructeur chinois de voitures électriques au Mondial de Paris",
          description:
            "Encore méconnu en France, le constructeur chinois Skyworth fera ses premiers pas en France lors du Mondial de Paris, qui ouvrira ses portes dans deux semaines. Il amènera son Model K, un SUV électrique concurrent de la Tesla Model Y, vendu sous le nom d’EV6 e…",
          url: "https://www.frandroid.com/survoltes/voitures-electriques/2353620_pourquoi-il-faudra-surveiller-de-pres-ce-meconnu-constructeur-chinois-de-voitures-electriques-au-mondial-de-paris",
          urlToImage:
            "https://images.frandroid.com/wp-content/uploads/2024/09/skyworth-ev6-3-1200x800-1.jpeg",
          publishedAt: "2024-09-30T09:50:42Z",
          content:
            "Encore méconnu en France, le constructeur chinois Skyworth fera ses premiers pas en France lors du Mondial de Paris, qui ouvrira ses portes dans deux semaines. Il amènera son Model K, un SUV électriq… [+4471 chars]",
        },
        {
          source: { id: "politico", name: "Politico" },
          author: "Daniel Payne",
          title: "How the Trump-Vance platform could win or lose",
          description:
            "Donald Trump never stops talking about immigration, trade and the economy. Those policy areas have animated all three of the former president’s campaigns for the White House, and he often finds ways to morph other topics into border security, tariffs, taxes a…",
          url: "https://www.politico.com/interactives/2024/donald-trump-jd-vance-policy-positions-2024-election/",
          urlToImage:
            "https://www.politico.com/interactives/2024/donald-trump-jd-vance-policy-positions-2024-election/share.jpg",
          publishedAt: "2024-09-30T09:49:12Z",
          content:
            "Trump has pledged to make America the dominant global energy producer and scrap government action to stop climate change.\r\nHe said he would again withdraw the U.S. from the Paris Climate Agreement an… [+2488 chars]",
        },
        {
          source: { id: null, name: "Thepinknews.com" },
          author: "Erik Niewiarowski",
          title:
            "Vast majority of Amazon staff unhappy with full-time office return, poll suggests",
          description:
            "A new poll of Amazon employees highlights their dismay at having to return to the office (RTO) full time. Corporate employees at Amazon are joining the ranks of upset employees at other tech firms such as Grindr, Salesforce and X/Twitter, after learning that …",
          url: "https://www.thepinknews.com/2024/09/30/vast-majority-of-amazon-staff-unhappy-with-full-time-office-return-poll-suggests/",
          urlToImage:
            "https://www.thepinknews.com/wp-content/uploads/2024/09/Amazon-employees-protest-outside-headquarters-in-Seattle-Washington.jpg",
          publishedAt: "2024-09-30T09:47:50Z",
          content:
            "A new poll of Amazon employees highlights their dismay at having to return to the office (RTO) full time.\r\nCorporate employees at Amazon are joining the ranks of upset employees at other tech firms s… [+3245 chars]",
        },
        {
          source: { id: null, name: "mobiFlip.de" },
          author: "Oliver Schwuchow",
          title: "Audi steht vor einem ganz großen Umbau",
          description:
            "Bei Audi blickt man auf einen großen Umbau der VW-Marke, denn laut Handelsblatt soll das Baureihenprinzip eingeführt werden, welches schon bei Porsche sehr gut funktioniert und bereits von anderen VW-Marken adaptiert wurde.",
          url: "https://www.mobiflip.de/shortnews/audi-steht-vor-einem-ganz-grossen-umbau/",
          urlToImage:
            "https://www.mobiflip.de/wp-content/uploads/2024/03/audi-a3-2024-header.jpg",
          publishedAt: "2024-09-30T09:24:43Z",
          content:
            "Bei Audi blickt man auf einen großen Umbau der VW-Marke, denn laut Handelsblatt soll das Baureihenprinzip eingeführt werden, welches schon bei Porsche sehr gut funktioniert und bereits von anderen VW… [+962 chars]",
        },
        {
          source: { id: null, name: "Portfolio.hu" },
          author: "Portfolio.hu",
          title:
            "Hamarosan leadhatja a figyelmeztető lövést Brüsszel, Magyarország lobbija kevés lehet",
          description:
            "Az Európai Bizottság folytatja a tárgyalásokat Kínával az elektromos járművek importvámjairól azután is, ha a tagállamok megszavazzák a végleges vámok kivetését. Brüsszel már elküldte javaslatát az EU 27 tagországának, a szavazást péntekre tűzték ki.",
          url: "https://www.portfolio.hu/unios-forrasok/20240930/hamarosan-leadhatja-a-figyelmezteto-lovest-brusszel-magyarorszag-lobbija-keves-lehet-713121",
          urlToImage:
            "https://pcdn.hu/articles/images-xl/e/u/_/eu-kina-618245.jpg",
          publishedAt: "2024-09-30T09:24:00Z",
          content:
            "A büntetvámokról javaslat mellett egy kiegészít szöveg is szerepel, amely szerint az eddigi tárgyalások nem oldották meg az állítólagos kínai támogatásokról szóló vitát, de a megbeszélések folytatódh… [+1171 chars]",
        },
        {
          source: { id: null, name: "Sch.news" },
          author: null,
          title: "OTD Bergen: Treffpunkt for verdensledende industri",
          description:
            "16. – 17. oktober samles landets offshore- og energibransje i Bergen. Norges viktigste næring er midt i en eventyrlig oppgang, og tema for årets messe er leverandørenes muligheter innen olje, gass og fornybar.",
          url: "https://sno-commercial.hyperion.pro.sch.news/brandstudio/i/OojzOO/otd-bergen-treffpunkt-for-verdensledende-industri",
          urlToImage:
            "https://shared.cdn.smp.schibsted.com/v2/images/e659ff74-e382-4610-8627-c039f149e53f?fit=crop&h=1267&w=1900&s=0c011f76c2c575dc5902a91852cf7ac63fd80c26",
          publishedAt: "2024-09-30T09:17:56Z",
          content:
            "16. 17. oktober samles landets offshore- og energibransje i Bergen. Norges viktigste næring er midt i en eventyrlig oppgang, og tema for årets messe er leverandørenes muligheter innen olje, gass og f… [+6976 chars]",
        },
        {
          source: { id: null, name: "Uol.com.br" },
          author: null,
          title: null,
          description:
            "Fabricantes como Toyota e Volkswagen têm lutado para acompanhar o ritmo enquanto foco se desloca do motor para o o computador",
          url: "https://www1.folha.uol.com.br/mercado/2024/09/montadoras-tradicionais-estao-em-desvantagem-na-corrida-pelos-softwares-automotivos.shtml",
          urlToImage:
            "https://f.i.uol.com.br/fotografia/2024/09/23/172714356566f21e8d0ceeb_1727143565_3x2_rt.jpg",
          publishedAt: "2024-09-30T09:12:05Z",
          content:
            "Fabricantes globais de automóveis têm ficado para trás no desenvolvimento de softwares fundamentais para automóveis. Isso ameaça a capacidade das empresas de lucrar na era dos veículos elétricos.\r\nA … [+4501 chars]",
        },
        {
          source: { id: null, name: "Aajtak.in" },
          author: "aajtak.in",
          title:
            "दुनिया के चौथे सबसे अमीर शख्स बने Mark Zuckerberg, बनाया ये रिकॉर्ड",
          description:
            "Mark Zuckerberg अब 200 बिलियन डॉलर क्लब में शामिल हो गए हैं, जिसके बाद वह दुनिया के सबसे अमीर लोगों की लिस्ट में चौथे स्थान पर पहुंच गए हैं. अब उनकी नेटवर्थ 201 बिलियन अमेरिकी डॉलर हो गए हैं. उनसे पहले इस ग्रुप में तीन लोग हैं और उनके नाम Elon Musk, Jeff Bezo…",
          url: "https://www.aajtak.in/technology/tech-news/story/mark-zuckerberg-become-world-fourth-richest-man-in-world-200-million-dollar-club-ttec-dskc-2057244-2024-09-30",
          urlToImage:
            "https://akm-img-a-in.tosshub.com/aajtak/images/story/202409/66fa5c5be96eb-meta-ceo-mark-zuckerberg-tries-on-orion-ar-glasses-at-the-meta-connect-annual-event-at-the-companys-300754634-16x9.jpg",
          publishedAt: "2024-09-30T09:08:50Z",
          content:
            "Mark Zuckerberg 200 . .  Tesla CEO Elon Musk,  Jeff Bezos  Bernard Arnault . Bloomberg , Meta CEO 201 .  . \r\nMark Zuckerberg   . - . . 200 . . 201 ,  1,68,43,97,08,50,000 .  \r\nMeta Platforms Inc  \r\nM… [+434 chars]",
        },
      ]
    this.setState({ articles : myarticles });
  }

  render() {
    return (
      <div className="container">
        <h2 className="my-3">Daily News - Top Headings</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default news;
