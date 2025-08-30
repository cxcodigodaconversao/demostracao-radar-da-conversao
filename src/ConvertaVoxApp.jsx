import React, { useState } from 'react';

const markers = [
  { label: "Fala rápida e direta", profile: "D" },
  { label: "Fala animada e com histórias", profile: "I" },
  { label: "Fala pausada e cuidadosa", profile: "S" },
  { label: "Fala técnica e analítica", profile: "C" },
  { label: "Tom de voz firme e decidido", profile: "D" },
  { label: "Tom de voz expressivo e emocional", profile: "I" },
  { label: "Tom de voz suave e estável", profile: "S" },
  { label: "Tom de voz neutro e racional", profile: "C" },
  { label: "Olhar direto e assertivo", profile: "D" },
  { label: "Sorriso, contato visual constante", profile: "I" },
  { label: "Expressão calma, receptiva", profile: "S" },
  { label: "Expressão séria, analítica", profile: "C" }
];

const suggestions = {
  D: {
    label: "🟥 Perfil Dominante",
    approach: "🎯 Seja direto, foque em resultado e ROI",
    trigger: "🔥 Resultados tangíveis, liderança, ganho de tempo",
    caracteristicas: {
      busca: "resultado, ganho de tempo, autoridade e impacto direto",
      evita: "conversa fiada, detalhes excessivos e falta de foco",
      foco: "Isso me dá resultado? Quanto eu ganho? Em quanto tempo?",
      personalidade: "Pessoa prática, impaciente e direta."
    },
    objections: [
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Se esse investimento voltasse pra você em dobro, faria sentido agora?",
        response: "A pergunta certa não é quanto custa — mas quanto você já perdeu por não resolver isso. O que você decide aqui vira retorno, não é gasto. Te mostro como clientes no seu perfil recuperaram o investimento em semanas."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "Você já superou desafios antes. O que torna esse diferente pra você duvidar da sua capacidade?",
        response: "Você já passou por coisas muito maiores. Aqui, você só precisa executar com direção. E essa direção eu te dou. Posso te mostrar o plano, os dados e os checkpoints que garantem o resultado — se você fizer, funciona."
      }
    ]
  },
  I: {
    label: "🟨 Perfil Influente",
    approach: "🎯 Conecte com emoção e energia positiva",
    trigger: "🔥 Pertencimento, apoio, entusiasmo, reconhecimento",
    caracteristicas: {
      busca: "pertencimento, ser ouvido, leveza no processo, reconhecimento",
      evita: "conversas técnicas, frieza, falta de empatia, ambientes sem energia",
      foco: "Conexão emocional e reconhecimento",
      personalidade: "Pessoa carismática, criativa, expressiva e guiada por emoções, reconhecimento e conexão humana."
    },
    objections: [
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Como seria sair desse ciclo e respirar de novo, com leveza?",
        response: "Você merece sair desse sufoco. Já vi pessoas no limite financeiro mudarem tudo porque encontraram apoio real. A gente te ajuda a construir um caminho viável — e você não precisa passar por isso sozinho(a)."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "O que faria você acreditar mais em si mesmo(a) agora?",
        response: "Nem todo mundo começa acreditando — mas com o apoio certo, você se surpreende com o que é capaz. Aqui você vai se sentir escutado(a), apoiado(a) e valorizado(a). E quando isso acontece, você flui."
      }
    ]
  },
  S: {
    label: "🟩 Perfil Estável",
    approach: "🎯 Acolha, ofereça passo a passo e segurança",
    trigger: "🔥 Segurança, suporte, constância, processo claro",
    caracteristicas: {
      busca: "apoio, passo a passo claro, estrutura confiável, relacionamento de confiança",
      evita: "pressão, mudanças bruscas, decisões rápidas, ambiente agressivo",
      foco: "Segurança e estabilidade no processo",
      personalidade: "Pessoa leal, gentil, colaborativa, com foco em segurança, previsibilidade e ambiente harmonioso."
    },
    objections: [
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Se a gente encaixasse isso na sua realidade atual, com segurança, faria sentido pra você agora?",
        response: "Entendo você. Já vimos isso muitas vezes. E é por isso que temos formas acessíveis e planejadas de entrar com leveza. A ideia não é te sobrecarregar — é construir com firmeza, no seu ritmo."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "Se você tivesse alguém do seu lado durante o processo, isso te faria se sentir mais confiante?",
        response: "Você não vai estar sozinho(a). E com cada pequeno avanço, sua confiança cresce. O método é passo a passo, com acompanhamento constante. Juntos, a gente constrói o seu ritmo de vitória."
      }
    ]
  },
  C: {
    label: "🟦 Perfil Conforme",
    approach: "🎯 Traga lógica, processo e prova social",
    trigger: "🔥 Dados, método validado, clareza técnica",
    caracteristicas: {
      busca: "dados concretos, processo validado, prova técnica, autonomia com segurança",
      evita: "exageros, emoções exageradas, pressão, informação vaga",
      foco: "Análise e validação baseada em dados",
      personalidade: "Pessoa analítica, lógica, objetiva, exigente e crítica."
    },
    objections: [
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Quer que eu te mostre uma simulação de ROI com projeção de tempo e comparativo de investimento?",
        response: "Faz sentido querer clareza. Posso te mostrar números reais de retorno, com projeções e formas inteligentes de parcelamento. Assim, você toma sua decisão com base em lógica, não pressão."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "Você teria mais confiança se soubesse exatamente o passo a passo e tivesse suporte pra cada fase?",
        response: "Totalmente compreensível. Posso te mostrar o mapa do processo, os módulos, os checkpoints e os recursos de apoio. Você vai saber o que fazer, quando e como — com base em dados reais. Assim, você segue com precisão."
      }
    ]
  }
};

export default function CXconversão() {
  const [selected, setSelected] = useState([]);
  const [expandedProfiles, setExpandedProfiles] = useState([]);
  const [expandedObjections, setExpandedObjections] = useState({});

  const handleCheck = (label, profile) => {
    const exists = selected.find((s) => s.label === label);
    setSelected(exists ? selected.filter((s) => s.label !== label) : [...selected, { label, profile }]);
  };

  const toggleExpand = (profile) => {
    setExpandedProfiles((prev) =>
      prev.includes(profile) ? prev.filter((p) => p !== profile) : [...prev, profile]
    );
  };

  const toggleObjection = (profile, index) => {
    const key = `${profile}-${index}`;
    setExpandedObjections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const profileCount = selected.reduce((acc, cur) => {
    acc[cur.profile] = (acc[cur.profile] || 0) + 1;
    return acc;
  }, {});

  const sortedProfiles = Object.keys(profileCount).sort((a, b) => profileCount[b] - profileCount[a]);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem',
      backgroundColor: '#0c121c',
      color: 'white',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh'
    }}>
      <div style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        color: '#d2bc8f'
      }}>
        CXconversão
      </div>
      <p style={{
        textAlign: 'center',
        color: '#888',
        fontSize: '1.2rem',
        marginBottom: '2rem'
      }}>
        Radar Comportamental em Calls 1:1
      </p>

      {/* Marcadores de Observação */}
      <div style={{
        background: '#1a2332',
        border: '1px solid #333',
        borderRadius: '10px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        transition: 'all 0.3s ease'
      }}>
        <h2 style={{ color: '#d2bc8f' }}>Marque os sinais observados durante a call:</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '0.5rem',
          marginTop: '1rem'
        }}>
          {markers.map((item, index) => (
            <label key={index} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.label, item.profile)}
                checked={selected.some((s) => s.label === item.label)}
                style={{
                  width: '18px',
                  height: '18px',
                  marginRight: '0.75rem',
                  accentColor: '#d2bc8f'
                }}
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>

      {/* Análise de Perfis */}
      {sortedProfiles.length > 0 && (
        <div>
          <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>
            🎯 Análise de Perfil Comportamental
          </h2>
          
          {sortedProfiles.map((profileKey) => {
            const suggestion = suggestions[profileKey];
            const count = profileCount[profileKey];
            
            return (
              <div key={profileKey} style={{
                background: '#1a2332',
                border: '1px solid #333',
                borderLeft: profileKey === 'D' ? '4px solid #ff6b6b' :
                           profileKey === 'I' ? '4px solid #ffd43b' :
                           profileKey === 'S' ? '4px solid #51cf66' :
                           '4px solid #339af0',
                borderRadius: '10px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ color: '#d2bc8f', margin: '0 0 0.5rem 0' }}>
                      {suggestion.label} ({count} indicadores)
                    </h2>
                    <p>{suggestion.approach}</p>
                    <p>{suggestion.trigger}</p>
                  </div>
                  <button onClick={() => toggleExpand(profileKey)} style={{
                    background: '#d2bc8f',
                    color: '#0c121c',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}>
                    {expandedProfiles.includes(profileKey) ? 'Ocultar Conteúdo' : 'Ver Conteúdo'}
                  </button>
                </div>
                
                {expandedProfiles.includes(profileKey) && (
                  <div style={{marginTop: '1.5rem'}}>
                    {/* Características do Perfil */}
                    <div style={{
                      background: '#2a3441',
                      border: '1px solid #444',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      <h3>🎯 Características do Perfil:</h3>
                      <div style={{marginTop: '1rem'}}>
                        <p><strong>Personalidade:</strong> {suggestion.caracteristicas.personalidade}</p>
                        <p><strong>Busca:</strong> {suggestion.caracteristicas.busca}</p>
                        <p><strong>Evita:</strong> {suggestion.caracteristicas.evita}</p>
                        <p><strong>Foco:</strong> {suggestion.caracteristicas.foco}</p>
                      </div>
                    </div>

                    {/* Objeções */}
                    <div>
                      <h3>💬 Objeções e Respostas Calibradas:</h3>
                      {suggestion.objections.map((objection, index) => (
                        <div key={index} style={{
                          background: '#2a3441',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleObjection(profileKey, index)}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#ff6b6b',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span>{objection.title}</span>
                            <span>{expandedObjections[`${profileKey}-${index}`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedObjections[`${profileKey}-${index}`] && (
                            <div style={{marginTop: '1rem'}}>
                              <div style={{
                                background: '#1a2332',
                                borderLeft: '4px solid #4dabf7',
                                padding: '0.75rem',
                                margin: '0.5rem 0',
                                borderRadius: '0 6px 6px 0'
                              }}>
                                <div style={{ color: '#4dabf7', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                  💬 Pergunta Calibrada:
                                </div>
                                <em>"{objection.question}"</em>
                              </div>
                              <div style={{
                                background: '#1a2332',
                                borderLeft: '4px solid #51cf66',
                                padding: '0.75rem',
                                margin: '0.5rem 0',
                                borderRadius: '0 6px 6px 0'
                              }}>
                                <div style={{ color: '#51cf66', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                  💡 Resposta Adaptada:
                                </div>
                                "{objection.response}"
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Estado inicial */}
      {sortedProfiles.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#888',
          background: '#1a2332',
          borderRadius: '10px',
          border: '2px dashed #444'
        }}>
          <h2>Análise em Tempo Real</h2>
          <p>Marque os sinais comportamentais observados para receber as estratégias de conversão personalizadas.</p>
        </div>
      )}

      {/* Rodapé */}
      <div style={{marginTop: '2rem', textAlign: 'center'}}>
        <p style={{color: '#888', fontSize: '0.9rem'}}>
          CXconversão - Sistema de Análise Comportamental para Conversão em Calls
        </p>
      </div>
    </div>
  );
}
