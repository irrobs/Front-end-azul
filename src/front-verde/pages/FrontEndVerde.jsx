import "../styles/FrontEndeVerde.css";

import salgadinho from "/assets/Salgadinho.png";
import garrafa from "/assets/Garrafa.png";
import flecha from "/assets/arrow.svg";
import fecha_esquerda from "/assets/left_arrow.svg";
import reciclagem from "/assets/icon2.png";

import Plastico from "/assets/Plastico.png";
import Papel from "/assets/Papel.png";
import Metal from "/assets/Metal.png";
import Vidro from "/assets/Vidro.png";
import Organico from "/assets/Organico.png";
import Nao_Reciclavel from "/assets/Nao_Reciclavel.png";
import Pilhas from "/assets/Pilhas.png";
import LixoEletronico from "/assets/Lixo_Eletronico.png";

import LixeiraPlastico from "/assets/Lixeira_Plastico.png";
import LixeiraPapel from "/assets/Lixeira_Papel.png"
import LixeiraMetal from "/assets/Lixeira_Metal.png"
import LixeiraVidro from "/assets/Lixeira_Vidro.png"
import LixeiraOrganico from "/assets/Lixeira_Organico.png"
import LixeiraNaoReciclavel from "/assets/Lixeira_Nao_Reciclavel.png"
import LixeiraPilha from "/assets/Lixeira_Pilha.png"

import PET from "/assets/PET.png";
import PEAD from "/assets/PEAD.png";
import PVC from "/assets/PVC.png";
import PEBD from "/assets/PEBD.png";
import PP from "/assets/PP.png";
import PS from "/assets/PS.png";
import Outros from "/assets/Outros.png";

import { useOutletContext } from "react-router";

function FrontEndVerde() {
  const {
    itemSelecionado,
    mostrarCorpo,
    mostrarTiposReciclagem,
    voltarAoCorpo,
  } = useOutletContext();


  const lista = [
    Nao_Reciclavel,
    Papel,
    Metal,
    Vidro,
    Organico,
    Pilhas,
    LixoEletronico,
    Plastico,
  ];

  const lixeiras = [
    LixeiraNaoReciclavel,
    LixeiraPapel,
    LixeiraMetal,
    LixeiraVidro,
    LixeiraOrganico,
    LixeiraPilha,
    LixeiraVidro,
    LixeiraPlastico,
  ];

  const tipos_de_plastico = [
    PET,
    PEAD,
    PVC,
    PEBD,
    PP,
    PS,
    Outros,
  ];

  const nomes_reciclagem = [
    "Não Reciclável",
    "Papel",
    "Metal",
    "Vidro",
    "Orgânico",
    "Pilhas",
    "Lixo Eletrônico",
    "Plástico",
    "♻1 (PET) Polietileno tereftalato:",
    "♻2 (PEAD) Polietileno de Alta Densidade:",
    "♻3 (PVC) Cloreto de Polivinil:",
    "♻4 (PE) Polietileno de Baixa Densidade:",
    "♻5 (PP) Polipropileno:",
    "♻6 (PS) Poliestireno:",
    "♻7 Outros ou Material Não Rotulado:",
  ];

  const ids = [
    "rec_nao-reciclavel",
    "rec_papel",
    "rec_metal",
    "rec_vidro",
    "rec_organico",
    "rec_pilha",
    "rec_eletronico",
    "rec_plastico",
    "rec_PET",
    "rec_PEAD",
    "rec_PVC",
    "rec_PEBD",
    "rec_PP",
    "rec_PS",
    "rec_O",
  ];

  const descricoes = [
    "O recipiente de cor cinza é destinado aos resíduos não recicláveis ou rejeitos, ou seja, aqueles que não podem ser reciclados ou reutilizados. Exemplos incluem papel higiênico, fraldas descartáveis e outros materiais similares.",
    "O recipiente de cor azul é destinado à coleta de papel e papelão. Nele, devem ser descartados jornais, revistas, embalagens de papelão, caixas e outros materiais similares.",
    "A lixeira amarela é utilizada para descarte de metal. Geralmente metais aceitos são: latas de alumínio, latas de aço e embalagens de alumínio. Entretanto não devem ser descartados nela: Pilhas e baterias, Metais pesados e aparelhos eletrônicos. Com esses contendo outro protocolo de reciclagem.",
    "A lixeira verde é utilizada para a coleta de qualquer recipiente de vidro. Tomando cautela com o manuseio sem quebrá-los antes de descartar.",
    "Os resíduos orgânicos, como restos de alimentos, cascas de frutas e legumes, podas de plantas e outros materiais biodegradáveis, devem ser depositados em recipientes de cor marrom.",
    "O descarte de pilhas e baterias devem ser realizados em locais específicos que não tem contem um padrão. Mas podem ser localizados em estabelecimentos e instituições de ensino.",
    "Assim como as pilhas, lixo eletrônico também podem conter metais pesados e devem ser descartados corretamente geralmente em pontos de coleta especializados.",
    "O recipiente vermelho é utilizado para o descarte de plásticos. Garrafas PET, embalagens plásticas, sacolas, potes e tampas são alguns exemplos de materiais que devem ser colocados nesse recipiente.",
    "Um dos tipos de plástico mais populares por ser transparente, maleável, impermeável e leve. Normalmente compõe garrafas para uso alimentício, cosméticos e fibras têxteis.",
    "Conhecido por sua alta resistência, o polietileno de alta densidade suporta baixas temperaturas. Está presente em embalagens de detergente e óleos automotivos, sacolas de supermercados, embalagens de produtos de limpeza.",
    "Conhecido por sua alta resistência, o polietileno de alta densidade suporta baixas temperaturas. Está presente em embalagens de detergente e óleos automotivos, sacolas de supermercados, embalagens de produtos de limpeza.Também pode ser encontrado na construção civil, onde é usado em tubulações de água e de esgoto e também é muito encontrado em encapamentos de cabos elétricos, equipamentos médico-cirúrgicos, lonas, esquadrias e revestimentos.",
    "Plástico flexível, leve e transparente. Está presente em sacolas para supermercado, filmes para embalar leite e outros alimentos, sacaria industrial, filmes para fraldas descartáveis, sacos de lixo, entre outros.",
    "Plástico muito resistente a mudanças de temperatura. Utilizados em Caixas industriais, Lixeiras, tubos para água quente, fios e cabos, frascos, utilidades domésticas, etc. Uma característica interessante do plástico polipropileno é seu efeito “dobradiça” que permite confeccionar peças com dobras no próprio material – pode ser usado para estojos de óculos e tampas de frascos, por exemplo.",
    "O poliestireno tem como características: leveza, isolamento térmico, baixo custo e flexibilidade. Muito utilizado em potes para iogurtes, sorvetes, doces, tampas, copos descartáveis, aparelhos de barbear descartáveis e brinquedos.",
    "Neste grupo estão classificados os outros tipos de plásticos, como ABS/SAN, EVA e PA. Normalmente são encontrados em peças técnicas e de engenharia, peças de computadores e telefones, entre outros. Quando misturados podem ser aproveitados em madeira plástica e na reciclagem energética.",
  ];

  const localreciclagem = [
    "Deve ser reciclado na lixeira Cinza",
    "Deve ser reciclado na lixeira Azul",
    "Deve ser reciclado na lixeira Amarela",
    "Deve ser reciclado na lixeira Verde",
    "Deve ser reciclado na lixeira Marrom",
    "Deve ser reciclado na lixeira Laranja",
    "Deve ser reciclado na lixeira específica de lixo eletrônico",
    "Deve ser reciclado na lixeira Vermelha",
  ];

  return (
    <div>
      {mostrarCorpo ? (
        <div className="corpo">
          <div className="overlay" />
          <div className="titulo">
            <img
              className="filter-inverter"
              style={{ width: "70px" }}
              src={reciclagem}
            />
            <h1 id="tituloh1">APRENDA A RECICLAR</h1>
          </div>

          <h2>Encontre o ícone de reciclagem no produto</h2>

          <div className="desc">
            Normalmente pode ser encontrado no verso da embalagem do produto
          </div>

          <div className="png">

            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <img className="imagens" src={salgadinho}></img>
                </div>
                <div class="back">
                  <p>O tipo de embalagem é encontrado no verso do produto</p>
                </div>
              </div>
            </div>

            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <img className="imagens" src={garrafa}></img>
                </div>
                <div class="back">
                  <p>O tipo de embalagem é encontrado no verso do produto</p>
                </div>
              </div>
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
              Qual o tipo de material você deseja aprender a reciclar?
            </h2>
            <div className="box_icones">
              {lista.map((item, index) => (
                <img
                  key={index}
                  className="icones"
                  src={item}
                  onClick={() => {mostrarTiposReciclagem(index), window.scrollTo(0, 0)}}
                  alt={`Ícone ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {
            ids[itemSelecionado] == "rec_plastico" ? (
              <>

                <div className={"tiposReciclagem open"}>
                  <div className="overlay" />
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
                        style={{ width: "70px" }}
                        src={reciclagem}
                      />
                      <h1 id="tituloh1">APRENDA A RECICLAR</h1>
                    </div>
                  </div>
                  <div className="parte_inferior">
                    <div className="nome">
                      Qual tipo de Plástico você deseja aprender a reciclar?
                    </div>
                    <div class="tipos_plastico">
                      {tipos_de_plastico.map((item, index) => (
                        <img
                          key={index}
                          className="icones2"
                          src={item}
                          onClick={() => {mostrarTiposReciclagem(index + 8), window.scrollTo(0, 0)}}
                          alt={`Ícone ${index}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </>
            ) :
              (
                <div className={"tiposReciclagem open"}>
                  <div className="overlay" />
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
                        style={{ width: "70px" }}
                        src={reciclagem}
                      />
                      <h1 id="tituloh1">APRENDA A RECICLAR</h1>
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
                    <div className="descrição">
                      <div className="tipo_lixo">
                        {<img style={{ width: "400px" }} src={itemSelecionado > 7 ? lixeiras[7] : lixeiras[itemSelecionado]}/>}
                      </div>
                      <div className="local_descarte">
                          {itemSelecionado > 7 ? localreciclagem[7] : localreciclagem[itemSelecionado]}
                        </div>
                        </div>
                        <div className="local_descarte_img">
                          <img style={{ width: "300px" }} src={itemSelecionado > 7 ? tipos_de_plastico[itemSelecionado - 8] : lista[itemSelecionado]} />
                        </div>
                    </div>
                  </div>
                </div>
              )
          }
        </>
      )}
    </div>
  );
}

export default FrontEndVerde;
