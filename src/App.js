import React, { useState } from 'react';
import logo from "../src/img/hmlogo.jpg"; // Ajuste o caminho com base em onde seu logo está localizado
import qrCodeImage from "../src/img/12.jpg"; // Ajuste o caminho para o arquivo da imagem QR code

const GeradorDeContrato = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nomeCliente: '',
    emailCliente: '',
    telefoneCliente: '',
    tituloProjeto: '',
    descricaoProjeto: '',
    dataInicio: '',
    dataFim: '',
    valor: '',
    cpfCnpjCliente: '', // CPF/CNPJ do Cliente
    enderecoCliente: '' // Endereço do Cliente
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
            .qr-code {
              margin-top: 30px;
              text-align: center;
            }
            .qr-code img {
              width: 150px;
              height: 150px;
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
                  Website: www.himalayastechies.com<br/>
                  CPF/CNPJ: 348.213.608-45<br/>
                  Endereço: Av Marcos Penteado, 939, Alphaville Barueri SP</p>
                </div>
                <div class="party-box">
                  <h3>Cliente:</h3>
                  <p><strong>${dadosFormulario.nomeCliente}</strong><br/>
                  Email: ${dadosFormulario.emailCliente}<br/>
                  Telefone: ${dadosFormulario.telefoneCliente}</p>
                  <p><strong>CPF/CNPJ:</strong> ${dadosFormulario.cpfCnpjCliente}</p>
                  <p><strong>Endereço:</strong> ${dadosFormulario.enderecoCliente}</p>
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
                <p>CPF/CNPJ: 348.213.608-45</p>
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
<p>“Obrigada por confiar em nosso trabalho e por nos permitir fazer parte deste projeto com você! 💙 Aqui na Himalayas Techies, somos apaixonados pelo que fazemos ❤️ e queremos dividir essa paixão com você. Vamos juntos transformar essa ideia em realidade! 🚀♥️</p>
            <div class="qr-code">
              <p><strong>QR Code:</strong></p>
              <img src="${qrCodeImage}" alt="QR Code" />
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
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '15px',
    },
    button: {
      padding: '12px 20px',
      backgroundColor: '#ff6f61',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={logo} alt="Logo" style={{ width: '150px' }} />
        <h1>Gerador de Contrato</h1>
      </div>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="nomeCliente"
          placeholder="Nome do Cliente"
          value={dadosFormulario.nomeCliente}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <input
          type="email"
          name="emailCliente"
          placeholder="Email do Cliente"
          value={dadosFormulario.emailCliente}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <input
          type="text"
          name="telefoneCliente"
          placeholder="Telefone do Cliente"
          value={dadosFormulario.telefoneCliente}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <input
          type="text"
          name="tituloProjeto"
          placeholder="Título do Projeto"
          value={dadosFormulario.tituloProjeto}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <textarea
          name="descricaoProjeto"
          placeholder="Descrição do Projeto"
          value={dadosFormulario.descricaoProjeto}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <input
          type="date"
          name="dataInicio"
          value={dadosFormulario.dataInicio}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <input
          type="date"
          name="dataFim"
          value={dadosFormulario.dataFim}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <input
          type="text"
          name="valor"
          placeholder="Valor do Projeto"
          value={dadosFormulario.valor}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <input
          type="text"
          name="cpfCnpjCliente"
          placeholder="CPF/CNPJ do Cliente"
          value={dadosFormulario.cpfCnpjCliente}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <input
          type="text"
          name="enderecoCliente"
          placeholder="Endereço do Cliente"
          value={dadosFormulario.enderecoCliente}
          onChange={handleAlteracaoInput}
          style={styles.input}
        />
        <button onClick={gerarContrato} style={styles.button}>Gerar Contrato</button>
      </form>
    </div>
  );
};

export default GeradorDeContrato;
