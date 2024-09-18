import { useState } from "react";
import "../styles/pages/FrontEndeVerde.css";

import salgadinho from "/assets/Salgadinho.png";
import garrafa from "/assets/Garrafa.png";
import flecha from "/assets/arrow.svg";
import fecha_esquerda from "/assets/left_arrow.svg";
import reciclagem from "/assets/icon2.png";
import reciclagem_plastico from "/assets/Reciclagem_Plastico.png";
import tipo_rec_1 from "/assets/Rec_Plastico.png";
import tipo_rec_2 from "/assets/Rec_Tereftalato.png";
import tipo_rec_3 from "/assets/Rec_Alta_Densidade.png";
import tipo_rec_4 from "/assets/Rec_Vinila.png";
import tipo_rec_5 from "/assets/Rec_Baixa_Densidade.png";
import tipo_rec_6 from "/assets/Rec_Polipropileno.png";
import tipo_rec_7 from "/assets/Rec_Poliestireno.png";
import tipo_rec_8 from "/assets/Rec_Outros.png";

function FrontEndVerde() {
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [mostrarCorpo, setMostrarCorpo] = useState(true);

  const mostrarTiposReciclagem = (index) => {
    setItemSelecionado(index);
    setMostrarCorpo(false);
  };

  const voltarAoCorpo = () => {
    setItemSelecionado(null);
    setMostrarCorpo(true);
  };

  const lista = [
    tipo_rec_1,
    tipo_rec_2,
    tipo_rec_3,
    tipo_rec_4,
    tipo_rec_5,
    tipo_rec_6,
    tipo_rec_7,
    tipo_rec_8,
  ];

  const nomes_reciclagem = [
    "♻ Reciclagem de Plástico:",
    "♻1 (PET) Polietileno tereftalato:",
    "♻2 (PEAD) Polietileno de Alta Densidade:",
    "♻3 (PVC) Cloreto de Polivinil:",
    "♻4 (PE) Polietileno de Baixa Densidade:",
    '♻5 (PP) Polipropileno:", "♻6 (PS) Poliestireno:',
    "♻7 Outros ou Material Não Rotulado:",
  ];

  const ids = [
    "rec_0",
    "rec_1",
    "rec_2",
    "rec_3",
    "rec_4",
    "rec_5",
    "rec_6",
    "rec_7",
  ];

  const descricoes = [
    "Os símbolos da reciclagem são encontrados normalmente na parte inferior da embalagem e possuem um triângulo com um número dentro.<br>Com os códigos na embalagem, é possível descobrir qual tipo de plástico foi usado em sua composição, e portanto, como ele deve ser reciclado.<br>Eles ajudam os centros de reciclagem a classificar e separar corretamente os produtos para o correto reaproveitamento. Isso porque, nem todos os centros de reciclagem são equipados para lidar com todos os tipos de plástico. Dessa forma, os códigos auxiliam o consumidor a saber quais recipientes devem ser entregues em determinados locais de coleta de resíduos e quais são mais indicados para armazenar alimentos.",
    "O PET é reciclado após a coleta dos resíduos pós-consumo. <br>Os materiais são classificado por tipo e cor, triturados e limpos para remover impurezas.<br>Em seguida, o PET triturado é derretido e transformado<br>em novos produtos, como garrafas, embalagens de alimentos, e tecidos reciclados.",
    "É obtido pela polimerização do etileno (e também é conhecido como eteno). <br>Deste modo, devido a sua característica de ter estrutura variável de acordo com a temperatura (termoplástico), o PEAD é reciclável e terá o símbolo de material reciclável. <br>Ele é um plástico inquebrável, resistente a baixas temperaturas, leve e impermeável.<br>Uma vez que o plástico já foi extrusado ele pode se transformar em: balões, sacolas plásticas, recipientes que não sejam de uso alimentício, entre outros.",
    "Você já deve ter visto esse plástico em tubos usados em construções. Ele é o PVC, formado por 57% de cloro e 43% de eteno (derivado do petróleo) e traz o símobolo de número 3 nas embalagens de plástico.<br>Tem como característica ser mais rígido, transparente (quando desejável pelo fabricante), impermeável, e inquebrável. <br>Onde encontrar: Na construção civil ele é usado em tubulações de água e de esgoto e também é muito encontrado em encapamentos de cabos elétricos, equipamentos médico-cirúrgicos, lonas, esquadrias e revestimentos. Também é bastante utilizado em produtos resistentes como cones de sinalização, calhas e até mesmo, brinquedos.<br>Depois de reciclado, o plástico PVC pode ser encontrado: mangueira de jardim, tubulação de esgoto e cone de tráfego e cabos.",
    "O Polietileno de Baixa Densidade é o polímero mais utilizado no Brasil, segundo relatório anual publicado pela Abiplast. Em 2019, o PE correspondeu a 20,6% de todo o plástico consumido. Esse tipo de plástico tem como símbolo reciclagem o número quatro dentro de um triângulo e é obtido através da polimerização do eteno. Ele também é o polímero mais simples e mais barato do mercado devido à sua alta produção mundial.<br>Onde encontrar: plástico filme, utilidades domésticas,  sacolas plásticas de supermercados, bolsas de soro fisiológico, entre outros<br>Depois de reciclado o plástico PE se transforma em: saco de lixo e tubulação para irrigadores.",
    "Esse tipo de plástico é uma resina de baixa densidade e tem propriedades muito parecidas com a do polietileno (PE), porém seu ponto de amolecimento quando aquecido é mais elevado. Uma característica interessante do plástico polipropileno é seu efeito “dobradiça” que permite confeccionar peças com dobras no próprio material – pode ser usado para estojos de óculos e tampas de frascos, por exemplo.<br>Onde encontrar o polipropileno: embalagens flexíveis, sacos para grãos e fertilizantes, brinquedos, copos plásticos, potes de margarina, tampas de refrigerantes, seringas de injeção, autopeças, tupperware, copos descartáveis entre outros.<br>Depois de reciclado o plástico polipropileno pode ser transformado:  caixas e cabos para bateria de carro etc.",
    "O poliestireno é um dos plásticos mais usados no mundo por ser leve e barato. O uso do PS deve ser restringido pois possui substâncias cancerígenas que podem ser liberadas quando o material é aquecido.<br>Onde encontrar: copos descartáveis de isopor, caixas de ovos, talheres de plástico e alguns recipientes de alimentos.<br>Depois de reciclado o poliestireno pode ser usado para confecção de: bandejas, itens para escritório, enchimento de puffs e bancos, placas para isolamento térmico, acessórios para escritório e bandejas.",
    "Produtos que não possuem símbolos da reciclagem ou que possuem o número 7 frequentemente são feitos à base de policarbonato (PC), ABS, poliamida ou acrílicos. <br>Logo, a reciclagem desses materiais plásticos é inviável na maioria das vezes e por isso, o destino mais ecologicamente correto é o coprocessamento.",
  ];

  return (
    <div>
      {mostrarCorpo ? (
        <div className="corpo">
          <div className="titulo">
            <img
              id="rodar_reciclagem"
              style={{ width: "50px" }}
              src={reciclagem}
            />
            <h1>APRENDA A RECICLAR</h1>
          </div>

          <h2>Encontre o ícone de reciclagem no produto</h2>

          <div className="desc">
            Normalmente pode ser encontrado no verso da embalagem do produto
          </div>

          <div className="png">
            <div className="box_imagens">
              <img className="imagens" src={salgadinho}></img>
            </div>
            <div className="box_imagens">
              <img className="imagens" src={garrafa}></img>
            </div>
          </div>
          <img
            id="scroll"
            className="filter-white"
            style={{ width: "50px" }}
            href="#meuelemento"
            src={flecha}
            onClick={() => {
              window.scroll({ top: window.innerHeight });
            }}
          />

          <div className="tipos_embalagem">
            <h2>
              Clique no ícone que você encontrou em sua embalagem para saber
              mais.
            </h2>
            <div className="box_icones">
              {lista.map((item, index) => (
                <img
                  key={index}
                  className="icones"
                  src={item}
                  onClick={() => mostrarTiposReciclagem(index)}
                  alt={`Ícone ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={"tiposReciclagem open"}>
          <div className="cabecalho">
            <div className="voltar" onClick={voltarAoCorpo}>
              Voltar
              <img
                className="filter-white"
                style={{ width: "45px" }}
                src={fecha_esquerda}
                onClick={voltarAoCorpo}
              />
            </div>
            <div className="titulo">
              <img
                id="rodar_reciclagem"
                style={{ width: "50px" }}
                src={reciclagem}
              />
              <h1>APRENDA A RECICLAR</h1>
            </div>
          </div>

          <div className="parte_inferior">
            <div id={ids[itemSelecionado]} className="nome">
              {nomes_reciclagem[itemSelecionado]}
            </div>
            <div
              className="explicação"
              dangerouslySetInnerHTML={{ __html: descricoes[itemSelecionado] }}
            ></div>
            <div className="box_ilustrativa">
              <div className="tipo_lixo">
                <img style={{ width: "200px" }} src={reciclagem_plastico} />
              </div>
              <div className="descrição">
                <div className="local_descarte_img">
                  <img src={lista[itemSelecionado]} />
                </div>
                <div className="local_descarte">
                  Deve ser descartado na lixeira vermelha.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FrontEndVerde;
