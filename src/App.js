import React, { useState } from 'react';
import logo from "../src/img/hmlogo.png"; // Ajuste o caminho com base em onde seu logo está localizado

const GeradorDeContrato = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nomeCliente: '',
    emailCliente: '',
    telefoneCliente: '',
    tituloProjeto: '',
    descricaoProjeto: '',
    dataInicio: '',
    dataFim: '',
    valor: ''
  });

  const handleAlteracaoInput = (e) => {
    const { name, value } = e.target;
    setDadosFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const gerarContrato = () => {
    const referenciaContrato = `HT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    
    const conteudoContrato = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Contrato de Prestação de Serviço - ${dadosFormulario.nomeCliente}</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #2d3748;
              margin: 0;
              padding: 40px;
              background: #f7fafc;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              padding: 40px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              padding-bottom: 30px;
              border-bottom: 2px solid #ff6f61;
            }
            .logo {
              width: 180px;
              margin-bottom: 20px;
            }
            .contract-title {
              font-size: 28px;
              color: #2d3748;
              margin: 20px 0;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-weight: bold;
            }
            .section {
              margin: 30px 0;
              padding: 20px;
              background: #f8fafc;
              border-radius: 6px;
            }
            .section-title {
              font-size: 20px;
              color: #ff6f61;
              margin-bottom: 20px;
              padding-bottom: 10px;
              border-bottom: 1px solid #e2e8f0;
              font-weight: bold;
            }
            .party-info {
              display: flex;
              justify-content: space-between;
              gap: 20px;
            }
            .party-box {
              flex: 1;
              padding: 20px;
              background: white;
              border-radius: 6px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }
            .project-details {
              display: grid;
              grid-template-columns: 140px 1fr;
              gap: 10px;
              margin: 10px 0;
            }
            .signatures {
              display: flex;
              justify-content: space-between;
              margin-top: 50px;
              padding-top: 30px;
              border-top: 2px solid #ff6f61;
            }
            .signature-box {
              flex: 1;
              margin: 0 20px;
              text-align: center;
            }
            .signature-line {
              margin-top: 50px;
              border-top: 1px solid #cbd5e0;
              padding-top: 10px;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              color: #718096;
              font-size: 14px;
            }
            .description {
              padding: 10px;
              background-color: #f4f7fa;
              border-left: 5px solid #ff6f61;
              font-style: italic;
              margin-top: 20px;
            }
            .description p {
              margin-bottom: 15px;
            }
            .footer-page {
              margin-top: 10px;
              text-align: center;
              font-size: 12px;
              color: #A0AEC0;
            }
            @media print {
              body { background: white; padding: 0; }
              .container { box-shadow: none; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logo}"  alt="HIMALAYAS TECH" class="logo" />
              <h1 class="contract-title">Contrato de Prestação de Serviço</h1>
              <p>Referência do Contrato: ${referenciaContrato}</p>
            </div>

            <div class="section">
              <h2 class="section-title">PARTES DO CONTRATO</h2>
              <div class="party-info">
                <div class="party-box">
                  <h3>Prestador de Serviço:</h3>
                  <p><strong>HIMALAYAS TECH</strong><br/>
                  Soluções em Tecnologia Digital<br/>
                  Contato: Fernanda<br/>
                  Telefone: +55 11 947727979<br/>
                  Website: www.himalayastechies.com</p>
                </div>
                <div class="party-box">
                  <h3>Cliente:</h3>
                  <p><strong>${dadosFormulario.nomeCliente}</strong><br/>
                  Email: ${dadosFormulario.emailCliente}<br/>
                  Telefone: ${dadosFormulario.telefoneCliente}</p>
                </div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">ESPECIFICAÇÕES DO PROJETO</h2>
              <div class="project-details">
                <div><strong>Título do Projeto:</strong></div>
                <div>${dadosFormulario.tituloProjeto}</div>
                <div><strong>Data de Início:</strong></div>
                <div>${dadosFormulario.dataInicio}</div>
                <div><strong>Data de Término:</strong></div>
                <div>${dadosFormulario.dataFim}</div>
                <div><strong>Valor do Projeto:</strong></div>
                <div>${dadosFormulario.valor}</div>
              </div>
              <div class="description">
                <strong>Descrição do Projeto:</strong>
                <p>${dadosFormulario.descricaoProjeto.replace(/\n/g, '</p><p>')}</p>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">TERMOS E CONDIÇÕES</h2>
              <ol>
                <li><strong>Escopo dos Serviços:</strong> HIMALAYAS TECH se compromete a fornecer serviços de tecnologia digital conforme descrito na seção de Especificações do Projeto.</li>
                <li><strong>Condições de Pagamento:</strong> 50% na assinatura, 25% na metade do caminho, 25% na conclusão.</li>
                <li><strong>Prazo:</strong> O projeto terá início na data de início especificada e término na data de término especificada.</li>
                <li><strong>Propriedade Intelectual:</strong> Os direitos serão transferidos após o pagamento final.</li>
                <li><strong>Confidencialidade:</strong> Ambas as partes concordam em manter a confidencialidade das informações compartilhadas.</li>
              </ol>
            </div>

            <div class="signatures">
              <div class="signature-box">
                <p>Por HIMALAYAS TECH:</p>
                <div class="signature-line">
                  <p>Fernanda</p>
                  <p>Cargo: Diretora</p>
                  <p>Data: ${new Date().toLocaleDateString()}</p>
                </div>
              </div>
              <div class="signature-box">
                <p>Por Cliente:</p>
                <div class="signature-line">
                  <p>${dadosFormulario.nomeCliente}</p>
                  <p>Cargo: _________________</p>
                  <p>Data: _________________</p>
                </div>
              </div>
            </div>

            <div class="footer">
              <p>HIMALAYAS TECH - Av Marcos Penteado de Ulhoa Rodrigues , 939 , Alphaville Barueri SP</p>
              <p class="footer-page">Página 1 de 1</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(conteudoContrato);
    printWindow.document.close();
    printWindow.onload = () => printWindow.print();
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      padding: '20px',
      borderBottom: '2px solid #ff6f61'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    section: {
      backgroundColor: '#f8fafc',
      padding: '20px',
      borderRadius: '6px',
      marginBottom: '20px'
    },
    sectionTitle: {
      color: '#ff6f61',
      marginBottom: '15px',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '14px'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      resize: 'vertical',
      height: '150px'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#FF7F50',
      color: 'white',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Gerador de Contrato</h1>
      </div>

      <div>
        <form onSubmit={(e) => { e.preventDefault(); gerarContrato(); }} style={styles.form}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Informações do Cliente</h2>
            <label style={styles.label}>Nome do Cliente</label>
            <input
              type="text"
              name="nomeCliente"
              value={dadosFormulario.nomeCliente}
              onChange={handleAlteracaoInput}
              style={styles.input}
              required
            />
            <label style={styles.label}>Email do Cliente</label>
            <input
              type="email"
              name="emailCliente"
              value={dadosFormulario.emailCliente}
              onChange={handleAlteracaoInput}
              style={styles.input}
              required
            />
            <label style={styles.label}>Telefone do Cliente</label>
            <input
              type="text"
              name="telefoneCliente"
              value={dadosFormulario.telefoneCliente}
              onChange={handleAlteracaoInput}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Informações do Projeto</h2>
            <label style={styles.label}>Título do Projeto</label>
            <input
              type="text"
              name="tituloProjeto"
              value={dadosFormulario.tituloProjeto}
              onChange={handleAlteracaoInput}
              style={styles.input}
              required
            />
            <label style={styles.label}>Descrição do Projeto</label>
            <textarea
              name="descricaoProjeto"
              value={dadosFormulario.descricaoProjeto}
              onChange={handleAlteracaoInput}
              style={styles.textarea}
              required
            />
            <label style={styles.label}>Data de Início</label>
            <input
              type="date"
              name="dataInicio"
              value={dadosFormulario.dataInicio}
              onChange={handleAlteracaoInput}
              style={styles.input}
              required
            />
            <label style={styles.label}>Data de Término</label>
            <input
              type="date"
              name="dataFim"
              value={dadosFormulario.dataFim}
              onChange={handleAlteracaoInput}
              style={styles.input}
              required
            />
            <label style={styles.label}>Valor do Projeto</label>
            <input
              type="text"
              name="valor"
              value={dadosFormulario.valor}
              onChange={handleAlteracaoInput}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>Gerar Contrato</button>
        </form>
      </div>
    </div>
  );
};

export default GeradorDeContrato;
