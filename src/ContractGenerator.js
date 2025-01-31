import React, { useState } from 'react';
import logo from "../src/img/hmlogo.png"; // Adjust the path based on where your logo is located

const ContractGenerator = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    projectTitle: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
    amount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateContract = () => {
    const contractRef = `HT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    
    const contractContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Professional Service Agreement - ${formData.clientName}</title>
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
              <h1 class="contract-title">Professional Service Agreement</h1>
              <p>Contract Reference: ${contractRef}</p>
            </div>

            <div class="section">
              <h2 class="section-title">PARTIES TO THE AGREEMENT</h2>
              <div class="party-info">
                <div class="party-box">
                  <h3>Service Provider:</h3>
                  <p><strong>HIMALAYAS TECH</strong><br/>
                  Digital Technology Solutions<br/>
                  Contact: Fernanda<br/>
                  Phone: +55 11 947727979<br/>
                  Website: www.himalayastechies.com</p>
                </div>
                <div class="party-box">
                  <h3>Client:</h3>
                  <p><strong>${formData.clientName}</strong><br/>
                  Email: ${formData.clientEmail}<br/>
                  Phone: ${formData.clientPhone}</p>
                </div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">PROJECT SPECIFICATIONS</h2>
              <div class="project-details">
                <div><strong>Project Title:</strong></div>
                <div>${formData.projectTitle}</div>
                <div><strong>Start Date:</strong></div>
                <div>${formData.startDate}</div>
                <div><strong>End Date:</strong></div>
                <div>${formData.endDate}</div>
                <div><strong>Project Amount:</strong></div>
                <div>${formData.amount}</div>
              </div>
              <div class="description">
                <strong>Project Description:</strong>
                <p>${formData.projectDescription.replace(/\n/g, '</p><p>')}</p>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">TERMS AND CONDITIONS</h2>
              <ol>
                <li><strong>Scope of Services:</strong> HIMALAYAS TECH agrees to provide digital technology services as outlined in the Project Specifications section.</li>
                <li><strong>Payment Terms:</strong> 50% upon signing, 25% at midpoint, 25% upon completion.</li>
                <li><strong>Timeline:</strong> Project will commence on the specified start date and end on the specified end date.</li>
                <li><strong>Intellectual Property:</strong> Rights transfer upon final payment.</li>
                <li><strong>Confidentiality:</strong> Both parties agree to maintain confidentiality of shared information.</li>
              </ol>
            </div>

            <div class="signatures">
              <div class="signature-box">
                <p>For HIMALAYAS TECH:</p>
                <div class="signature-line">
                  <p>Fernanda</p>
                  <p>Position: Director</p>
                  <p>Date: ${new Date().toLocaleDateString()}</p>
                </div>
              </div>
              <div class="signature-box">
                <p>For Client:</p>
                <div class="signature-line">
                  <p>${formData.clientName}</p>
                  <p>Position: _________________</p>
                  <p>Date: _________________</p>
                </div>
              </div>
            </div>

            <div class="footer">
              <p>HIMALAYAS TECH - Professional Service Agreement - Confidential</p>
              <p class="footer-page">Page 1 of 1</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(contractContent);
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
        <img src={logo} alt="Logo" style={{ width: '150px', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '28px', color: '#ff6f61' }}>Contract Generator</h1>
      </div>
      <form style={styles.form}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Client Information</h2>
          <label style={styles.label}>Client Name</label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            style={styles.input}
          />
          <label style={styles.label}>Client Email</label>
          <input
            type="email"
            name="clientEmail"
            value={formData.clientEmail}
            onChange={handleInputChange}
            style={styles.input}
          />
          <label style={styles.label}>Client Phone</label>
          <input
            type="text"
            name="clientPhone"
            value={formData.clientPhone}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Project Information</h2>
          <label style={styles.label}>Project Title</label>
          <input
            type="text"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleInputChange}
            style={styles.input}
          />
          <label style={styles.label}>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            style={styles.input}
          />
          <label style={styles.label}>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            style={styles.input}
          />
          <label style={styles.label}>Amount</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            style={styles.input}
          />
          <label style={styles.label}>Project Description</label>
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            style={styles.textarea}
          />
        </div>

        <button type="button" onClick={generateContract} style={styles.button}>
          Generate Contract
        </button>
      </form>
    </div>
  );
};

export default ContractGenerator;
