import logo from './assets/logo.png';
import avatar from './assets/avatar.png';
import { BuildingOffice2Icon, GlobeAltIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import './App.css';

const contactInfo = {
  firstName: 'Sami',
  lastName: 'Mohammed',
  company: 'Applicatino SRL',
  website: 'https://applicatino.ro',
  email: 'sami@applicatino.ro',
  phone: '0743350040',
};

const contactRows = [
  {
    icon: <BuildingOffice2Icon className="contact-icon" />, label: 'Companie', value: contactInfo.company
  },
  {
    icon: <GlobeAltIcon className="contact-icon" />, label: 'Website', value: (
      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">{contactInfo.website}</a>
    )
  },
  {
    icon: <PhoneIcon className="contact-icon" />, label: 'Telefon', value: (
      <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
    )
  },
  {
    icon: <EnvelopeIcon className="contact-icon" />, label: 'Email', value: (
      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
    )
  },
];

function handleSaveContact() {
  const vCardData = `\nBEGIN:VCARD\nVERSION:3.0\nFN:${contactInfo.firstName} ${contactInfo.lastName}\nORG:${contactInfo.company}\nURL:${contactInfo.website}\nTEL;TYPE=CELL:${contactInfo.phone}\nEMAIL:${contactInfo.email}\nEND:VCARD\n  `.trim();

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${contactInfo.firstName}_${contactInfo.lastName}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#232228', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="card-contact">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
          <a href="https://applicatino.ro" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <img src={logo} alt="Applicatino Logo" className="logo-anim" style={{ width: '8rem', borderRadius: '1rem', marginBottom: '1.5rem', boxShadow: '0 4px 16px 0 rgba(80,60,120,0.10)', cursor: 'pointer' }} />
          </a>
          <img src={avatar} alt="Avatar" className="avatar-anim" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #a78bfa', marginBottom: '1rem', marginTop: '-1rem', boxShadow: '0 2px 8px 0 rgba(80,60,120,0.15)' }} />
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', textAlign: 'center', margin: 0, lineHeight: 1.1 }}>
            Salvează Contactul Meu
          </h1>
          <p style={{ color: '#a78bfa', fontWeight: 600, textAlign: 'center', margin: '0.5rem 0 0 0' }}>Applicatino SRL</p>
          <button
            onClick={handleSaveContact}
            className="contact-button"
            style={{ marginTop: '1.5rem', marginBottom: 0, boxShadow: '0 2px 8px 0 rgba(80, 60, 120, 0.10)', border: 'none' }}
          >
            Salvează în Telefon
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div className="contact-row"><span className="contact-label">Prenume:</span><span className="contact-value">{contactInfo.firstName}</span></div>
          <div className="contact-row"><span className="contact-label">Nume:</span><span className="contact-value">{contactInfo.lastName}</span></div>
          {contactRows.map((row, idx) => (
            <div key={idx} className="contact-row">
              {row.icon}
              <span className="contact-label">{row.label}:</span>
              <span className="contact-value">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
