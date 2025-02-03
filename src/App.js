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
              <img src="data:image/jpeg;base64,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"  alt="HIMALAYAS TECH" class="logo" />
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
              <img src="data:image/jpeg;base64,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" alt="QR Code" />
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
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAPgA+AAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCACcAV4DASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAQFAQMGAgf/xABBEAABAwMCAgYGBggGAwAAAAABAAIDBAUREjEGIRMyQVFhcQcUIoGRoRUjU7HB0RY1NkJzdJOyM1JiwuHxVWPw/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAMEBQIB/8QAIREBAAMBAAIBBQEAAAAAAAAAAAECAxEEEjETFCFBYUL/2gAMAwEAAhEDEQA/APoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiKLXVYpYs7vPVC8mYrHZe1rNp5DVX3D1Y6IwHP8exeKC5GZ/RzYDjsRsVTuc57i5xy4nJKwCQQQcEKhPkW9u/pox4tfTn7dUsqFbqwVEWl5+sbv4+Kmq9W0WjsM+1ZrPJERF05EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARQKy5Np39Gxut3bz2W2jrGVbDgaXjdq4jSs29e/l3Odor7c/CUuduL3PrZNR6pwF0SqLtRnUahgJ/wAw/FReRWZp+E3jWit/yq0RFnNR6ikdDIJGHDguipahtTCHt37R3Fc2t9JUuppg4c2nrDvU+OvpPJ+FbfH6kdj5dIi8RyNlYHsOQV7WkyxERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAUO4Vgpo8N5yO2H4rdVVDaaEvd7h3lc7NK6eUyPPM/JV99fSOR8rPj4+89n4eSS5xJOSeZK9wTOglbIw8x81rRZ8TMT1pzETHJdNTTsqIg9h33HcVsIBBB2K52iq3UsueZYesF0LHNewOacgjIK0stI0j+snbKc7fxRXCjNNJqaPq3beHgoa6eaJs0bmPGQVz1VTuppix23Ye8Krvl6z7R8Lnj7e8es/LSiIqy2m22s9Xk6N5+rd8ir0HIyFyqtrVW5AgkPP90/grnj6/4lR8nH/dVqiIrqgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAvL3tjYXOIAG5KyqS51nTPMUZ+rbue8qPTSKV6lyznS3IaKyqdVS6jkMHVCjoiy7Wm09lrVrFY5AiIvHQrC2VvQv6KQ+w48j3FV6Lul5pPYcaUi9eS6paKylbVQlp5OHNp7iolrrekAglPtjqnvCs1p1mulWTatsrf1y0jHRyFjxhw3XlXlyounZ0kY+sb81RrO1zmluNPHWNK9/YgJBBBwQiKJMvrdWCoj0vIEjd/HxU1cvFK6GRsjDghdDSVDamEPbv2juK0cNfeOT8svyMfSex8N6IisKwiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiKHcKwU0WG85HbD8V5a0Vjsuq1m08hHulboBgjPtHrHuCqFkkuJJOSdysLL00m9uy1ss4zryBEWWMdI8MYMuPIBRpJnjCLoKKiZTRDIBedytFyoA9hlibh45kDtVmfGtFeqseVWbc/SmREVZbZa4tcHNOCNiFf2+rFTFz5SN6wXPrZBM+CUSMPMfNTY6/Tn+INso0r/XTKputFpJniHL94D71ZU07aiESM7dx3LYQHAg7FX71jSvGbS9srdcqil3CjNNLqaPq3beHgoizLVms8lrUvF47At9HUupZg4c2nrDvC0IvImaz2HtqxaOS6iORsrA9hy0r2qK21hp5Ojefq3H4FXm61M9IvXrJ1znO3GURFIiEREBERAREQEREBERAREQEREBERAREQEREBERAVDd9XrvPbSMK+UeqpIqpoEgORsRuotqTevITY6RnfsucRXP0PD9pJ8k+h4ftJPl+Sp/bXXvus1Mrq2UXQt6WQfWO2HcF7htkEMgflziNtSmqfHD1n2srb+R7x61+GVhZRWlRS3Si6NxmjHsnrDuVcupc0OaWuGQdwoDrRAXEhz2juBVPXx5me1XsfJiteXUqK5+h4ftJPl+Sz9Dwf55PiFF9tdN91m12TVol305GFarXDCyCMMjGAFsV7OvrWIZ+lve82a5omzRuY8ZBC56qp3U0xY7bsPeF0q0VNNHUs0yDbYjcLjbL6kfj5d4bfTn8/Dm0Vz9Dw/aSfJPoeH7ST5Kp9tdd+6zUy6al1erRat9IyosVqgjeHEudjsOynKxhlNOzKr5G1dORVlERWVUREQEREBERAREQEREBERAREQEVNdeJ7ZaKsUtZI9spaHgNYTyOfyVuxwexr27OGQg9Iqal4otlXdDboZHmpDnM0lhAyM55+5LnxPbLVXCjq5HtmIBADCRg7ILlFXXa9UVnp45617mxyO0tLWl3PGexSaCtguFHHVUr9cUgy0oJCLTVVEVJTSVE7wyKNpc5x7AoVnv1De+l9Re94ixq1NLcZ238kFmi01lVFRUktTO7TFE0ucfAKrtPFNrvFWaakleZdJdh7C3ICC6RYJwCe5U1p4ntt4rHUtG+R0rWl5DmEDAIH4oLpEXlzgxpc44AGSUHpFQUXGForq5lHBM/pXnS3UwgE+au5pBDC+Qtc4MBOGjJPkg2Iqe0cTWy81D6ekld0rW6tL2lpI8FMulzpbTRmqrH6IwQOQyST2AIJiKFarpT3ek9apRJ0RJAL26c47lGvPEduskkcdbI4PkBIDWlxwgtkUW23CnulEyrpHF0T84JGDyOFmvrqa3UrqmsmbFE3dx+4d5QSUXJu9INnEmkCdzc9YM5K+tV3orxTmehl6RjTpdlpBB7uaCcij11XFQUctVOSIom6nEDJwuf/AE+sf2s39IoOoRcv+n1j+1m/pFTrpxTbbTJGyrfIHSM1t0sJ5ILpFy/6fWP7Sb+kVdWi7Ut4pTU0ZcYw7T7Tcc0E5FQ3fi61WmYwSyulmb1o4hkt8+xRKLj2zVUrY3manLjgGVvL4jOEHUoq663qitNLHU1chEUjg1rmNLsnGezyW+23CnulEyspXF0MmdJIweRwfuQSkVNc+J7Zaq0UlXI9spAcAGEjBVxugyiIgIiICIiAiIg+W+kg44mj/l2fe5dJDx/ZY4Y2EVOWtAP1Y7vNc36R/wBpo/5dn3uXYwcIWF8Eb3W9mXNBPtu7vNBxHCszajjxk8edEssr253wQ4rd6QP2ui/hR/eVq4YiZDx8IoxpYyaVrR3ABwC2+kD9rov4Uf3lBc+kj9RUH8Uf2lVno+vZoq36MqTphqPaiLuWH/kVZ+kj9RUH8Uf2lQrrZHVXCFsulI0+s00DdWnct3z5g/ig3ekO9OmkbZ6Ql2Pbn089uYH4n3LPot6lx84/9y1cOWiX6Fud7r9T6iaGQRl/Wxg5d7/w8V79F7gyK5ucQGt0Ek9nWQSvSTdDFRw2yE+3OdUgG+kbD3n7lzdZb6nhC5Wut5uLmCRw/wBX7zfgV4qHXHifiaeqtkZkkY4PjBIAa1uAOty8ceKm3q28YV1EXXSLpIIMybxAtwP9PNB9LimZU0jZojqZIzU094IXzT0b/tNN/Lv/ALmq/wDR5dfW7NJQyOzJS9XPaw7fA5HwXKcF3SktF9lqK6QxxGJzA4NJ5kg9nkg+urmePLr9HWJ8Mb8TVX1bcb4/ePw+9b6fjKx1NRHBFVudJK4MaOicMknA7FxPFVRU8R8U+pULDL0OYom5xkjm489tvkghVdkqLVZbbeGuc2SV+o/6O1hHuC+qWa4R3W1U9ZGeUjfaHcdiPiuCrLXxrW0PqdTEH0+B7GqEYxttzUr0bXN0ctRapjg/4kYPYdnD7vmghcU0M3DPEcV1oRiKV5eB2B37zT4H8+5LvcZONL7SUNEHspm4J1dn+Zx8th/yuw42gjm4XrOkaHFjQ9p7iDuuf9F8EfR1tQWDpchgd3DfCDt6SmhoKKOnhaGRQsDQPAL5mYXcacW1Wl7mwMY7S7uaOTfiTldhxzdfo2wyNjdiap+qZ3gHc/BcZw/beKqal9as8WiKpAOrMeXAZx1uaC19HdwfS1tVZqk6XZLmNPY4cnD/AO7itvpPhqHw0UrA407C4PxsHHGM/NczXR3ixXuC5XKLRUPk6QEOb7eNx7PIb/NfQrtxTbqCko5Z2umhrG6gGjJDcbke9BzNjuvCTrfDTVtCyGZrA175ItQce06hk/HC7Wx09tpqANtBjNM5xdljtQyfFcVearguropnwM6OpLDoEMbme12ctlv9GDKgCtedQpjpAzsXc8492EHdVNPFV074J2B8Ugw5p7QuC49slttlohmo6VkUjpg0ub3YP5L6EuN9Jv6ip/5gf2uQa+DuHrVX8N01TVUcckry/U47nDiFTekpoZdqVjRgCHAHvXW8A/slSecn95XKek39c0/8H8UE6nruBxTxCWGPWGDVmBx5459iuqyro7XwfPW2aMRxSMzGWtxzPLOCqSCs4GFPGJIWaw0avq3745q80W7iHhaoorQcQsBZH7JAa4cwOaDl+A7BTXd1RXXBvTNjfpaxx5F25J79111fwfZa0xk0jYSxwP1Ps6h3FcVwpfzwxV1NDcoZGxud7QA5scOW3aF0dd6QrbC6NtGySpy4azgtDW9u+5QafSREyDh+jiiaGRsnDWtGwGlyicL8YWu02GnoqoT9LGXZ0MBHNxPf4qV6Rpm1HDtFMwODZJmuAcMEZadwnCHDdouPDlNVVdG2SZ5fqcXOGcOIGx8EHK8U3amvN/jqqTX0eljPbGDkE/mvsDeqPJfJOMbfS2ziOOnoohFFoY7SCTzye/yX1tvVHkgyiIgIiICIiAiIgq7jw9a7pUipraUSyhoaHa3DkPI+KsmtDWhrRgAYC9Igqqfh21UtwNfDShtSXF2vW48zvyzjtWa/h613KrFVWUokmAADtbhyG2xVoiCDcrTQ3WFkNdAJY2HU0aiMHbsUilpoaSmjp4GaIoxpa3OcBbkQa5oY54Xwyt1RvBa4d4VfScPWuip6iCmpujjqBplAe72h8fFWi1VEwgj1ua53MNAbuSThBEtdkt1oMhoKcQmTGo6ic423PipzmhzS1wyCMELU2qaXtZIx8TndUPG/vHJevWIwJCXACI4cT2cs/iggW7h212ud09FS9FI5paSHuOR3cyop4MsBJJoBk/8Asf8AmreOpbI5o6OVod1S5hAP5e9ZdUAatEb5Cx2khuOXLPagqYuELFDKyWOh0vYQ5rhI/II2O6kW/h6122qNTR0ojmIILy5zjg+ZUykqm1cYkZHI1jhkOcAM/NeoKmOoMgjJPRu0nIwg2qri4ctUNx9fjpdNVqL+kD3Dmd+WcKyjkbI0luwJHvBwvM8phbqEb3jt045fFB5rKWGtpZKapZrikGHNyRke5aLZaKG0seyggELXnLhqJyfeVsZWtfT9P0UrWEAtyBl2dsc1simc92HQSRjGcuxj5FBEudjt13ex9fT9MYwQ3L3DGfIqbBDHTwMhhaGxxtDWtHYAtXrkZ5tbI5g5F7WEj/n3La2VrpnRDrNAJ8j/ANIItztNDdomR18Amaw6m5JGD5hePoO2+osonUkb6ePOhrxq057iealS1UUMU8ryQ2AEvwCcDGV6NRH0LZQ7Ux2MEc852QUw4NsDZNYt7c9xe4j4ZVzBBFTQtigjZHG3ZrBgBYkqGsfoDXPfjOlgyQPHuXk1cQhllJIEQJeCMEY8EEhQ7la6O6wNhroelja7UBqI5+7zUvIxnsUb16PBcGSmP7QMJb/14oM0FDT26kZS0kfRwszpbknGTk7qLcrBbLrM2WuphK9o0glzhge4qbJUxxtaclxf1QwZLvJYFS3Q9zmSM0DLg5uw/FBT/oXw/wD+PH9R/wCas7Za6O0wOhoYeijc7UW6iefv8lIfKxmjJ65w3HavaCDcbLbrpg1tJHK4ctRGHfEc1HouGLNQSiWnoIw8HIc7LiD4ZyrdEEK5WqiusDYa6ESxsdqDckYO3Z5rbQ0VPbqRlLSR9HCzOluScZOTv5qQiCrr+HrXcqsVVZSiWYAAO1uHIbbFWayiAiIgIiICIiAiIgIiICIiAiIgKJcntZTNc8hrRIwkns9oKWsIINTNHWRtipnCQl7TqbzDcEHOfctZieRUnQTpqWv046wAarJEEU1jJHMbA7U8vAcNJyB257l6pQRNU5G8n+0KQiCso3TRWKFsbfry3S0O7HE9q9tZPTzQvdHG2MARuLHEnHYTy7/vVgiCBTVlNCHxyzsY/pX+y44O5UybJgk07lpx8F7RBXOBFjhDnGPEceXdrdufPuXqF0crZY4q9073MIAJby8eQCnogiQ1kLImxvBjkaMdHpOfd3rW6B8tymc2eaIdEwewG4PN3eCp6IK10T46WvaZJJSdi8DPVHcAsVbX0wboY58MsjOTRkscXDn5Ht7lZoghteKWqqDOS1krg5rztjSBjw2+aj1uaiCtljYdHq5YHY5vPPbw/NWiIIcs8NXSy09PUMMr43Nbh2xwsx1sLYWtcHNkDcdFpOr4KWiCvgBpOifM0taWaeQyI+eceX5LdFUGere1mHU4jB1Y5F2Tyz5KUiCFQxOFRPqPswu6OIY2bgH8ce5TlhZQEREBERAREQEREBERB//Z" alt="Logo" style={{ width: '150px' }} />
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
