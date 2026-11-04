import { useRef, useState } from 'react';
import './App.css';

const PROFILE_URL = 'https://www.doktortakvimi.com/profil/bedrika-kurt';
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('VOYA Psikoloji, Arabacıalanı Mahallesi, Mert Sokak No:18/1, Serdivan, Sakarya')}`;
const ASSETS = `${process.env.PUBLIC_URL}/assets`;

function Icon({ name = 'arrow', className = '' }) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    external: <path d="M7 17 17 7M7 7h10v10" />,
    pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
    leaf: <><path d="M20 4c-8-1-15 2-15 9a6 6 0 0 0 6 6c7 0 10-7 9-15Z" /><path d="M4 21 15 10" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    chat: <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />,
    book: <path d="M12 5v16M3 3c4-1 7 0 9 2 2-2 5-3 9-2v15c-4-1-7 0-9 2-2-2-5-3-9-2V3Z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  };
  return <svg className={`icon ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>;
}

function Botanical({ className = '' }) {
  return <svg className={className} viewBox="0 0 180 240" fill="none" aria-hidden="true"><path d="M45 228C86 178 95 96 125 16" stroke="currentColor" strokeWidth="1.5" /><path d="M70 186C28 177 22 150 25 129c32 2 50 21 45 57ZM85 149c38-4 59-30 58-55-36 4-56 25-58 55ZM98 111C64 99 58 74 61 54c29 9 43 29 37 57ZM112 72c31-3 47-23 49-47-28 1-44 18-49 47ZM57 210c31 8 62-5 72-24-30-10-56 0-72 24Z" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

function Brand({ footer = false, onClick }) {
  return <a className={`brand${footer ? ' brand-footer' : ''}`} href="#baslangic" onClick={onClick} aria-label="Psikolog Bedrika Kurt, ana sayfa"><span className="brand-symbol"><Icon name="leaf" /></span><span><span className="brand-title">Bedrika Kurt</span><span className="brand-subtitle">PSİKOLOG</span></span></a>;
}

const audiences = [
  { label: 'Yetişkinler', intro: 'Hayatın içinde kendinize ve hissettiklerinize yer açmak için.', topics: [
    { icon: 'leaf', title: 'Kaygı ve stres', text: 'Gündelik yaşamda zorlayıcı hale gelen kaygılar, stres ve bunlarla birlikte gelen duygular üzerine bir çalışma alanı.' },
    { icon: 'heart', title: 'Duygusal güçlükler', text: 'Üzüntü, isteksizlik, zorlayıcı yaşam olayları ve kendinizle kurduğunuz ilişkiyi anlamaya yönelik görüşmeler.' },
    { icon: 'chat', title: 'İlişkiler ve iletişim', text: 'Kendinizi ifade etme, kişilerarası ilişkiler ve aile içi iletişimde yaşadığınız güçlükler üzerine konuşmak.' },
  ] },
  { label: 'Çocuklar', intro: 'Çocuğun dünyasını, onun kendini ifade etme biçimiyle anlamak için.', topics: [
    { icon: 'sun', title: 'Oyunla ifade', text: 'Çocuk merkezli oyun terapisi yaklaşımıyla çocuğun duygu ve deneyimlerini ifade edebileceği bir alan.' },
    { icon: 'leaf', title: 'Duygular ve uyum', text: 'Çocukluk dönemindeki kaygılar, değişimler ve günlük yaşamda zorlanılan durumlar üzerine çalışmalar.' },
    { icon: 'heart', title: 'Ebeveyn ve çocuk', text: 'Çocuğu anlamak ve aile içindeki iletişim üzerine düşünmek için ebeveynlerin de sürece dahil olduğu görüşmeler.' },
  ] },
  { label: 'Ergenler', intro: 'Değişen bir dünyada kendi sesini bulmak ve anlaşılmak için.', topics: [
    { icon: 'sun', title: 'Kendini tanımak', text: 'Ergenlik dönemindeki duygular, kendini ifade etme ve özgüvenle ilgili konuları konuşabilmek.' },
    { icon: 'book', title: 'Sınav ve gelecek kaygısı', text: 'Okul yaşamı, sınavlar ve geleceğe ilişkin beklentilerin getirdiği kaygılara odaklanan görüşmeler.' },
    { icon: 'chat', title: 'İlişkiler ve iletişim', text: 'Akran ilişkileri, aile içi iletişim ve değişen ihtiyaçları anlamaya yönelik bir çalışma alanı.' },
  ] },
];

const faqs = [
  ['İlk görüşmede ne konuşulur?', 'İlk görüşme, başvurma nedeninizi ve beklentilerinizi paylaşabileceğiniz bir tanışma alanıdır. Sürecin nasıl ilerleyebileceği ve sorularınız bu görüşmede birlikte ele alınır.'],
  ['Hangi yaş gruplarıyla çalışıyorsunuz?', 'Bedrika Kurt; çocuk, ergen ve yetişkin danışanlarla çalışmaktadır. Yaşınıza ve başvuru nedeninize uygun çalışma biçimi hakkında iletişim sırasında bilgi alabilirsiniz.'],
  ['Görüşmeler nerede yapılıyor?', 'Mesleki profilde belirtilen görüşme adresi VOYA Psikoloji, Arabacıalanı Mahallesi, Mert Sokak, No:18/1, Serdivan / Sakarya’dır. Gelmeden önce güncel adres ve uygunluğu teyit edebilirsiniz.'],
  ['Nasıl randevu talep edebilirim?', 'Aşağıdaki DoktorTakvimi bağlantısından Bedrika Kurt’un mesleki profiline ulaşabilirsiniz. Güncel görüşme seçenekleri, ücret ve uygunluk bilgisi için profil üzerinden iletişim kurabilirsiniz.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState(0);
  const menuButton = useRef(null);
  const tabButtons = useRef([]);
  const audience = audiences[activeAudience];

  function handleTabKey(event, index) {
    const offsets = { ArrowRight: 1, ArrowLeft: -1 };
    let next;
    if (event.key in offsets) next = (index + offsets[event.key] + audiences.length) % audiences.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = audiences.length - 1;
    else return;
    event.preventDefault();
    setActiveAudience(next);
    tabButtons.current[next]?.focus();
  }

  function handleHeaderKey(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <div id="baslangic">
      <a className="skip-link" href="#ana-icerik">Ana içeriğe geç</a>
      <header className="site-header" onKeyDown={handleHeaderKey}>
        <div className="container header-inner">
          <Brand onClick={() => setMenuOpen(false)} />
          <button className="menu-toggle" ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="site-navigation" aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
          <nav id="site-navigation" className={`navigation${menuOpen ? ' is-open' : ''}`} aria-label="Ana menü">
            <a href="#hakkimda" onClick={() => setMenuOpen(false)}>Hakkımda</a>
            <a href="#calisma-alanlari" onClick={() => setMenuOpen(false)}>Çalışma Alanları</a>
            <a href="#surec" onClick={() => setMenuOpen(false)}>Süreç</a>
            <a href="#sorular" onClick={() => setMenuOpen(false)}>Sık Sorulanlar</a>
            <a className="button button-small" href="#iletisim" onClick={() => setMenuOpen(false)}>İletişime geçin <Icon name="external" /></a>
          </nav>
        </div>
      </header>
      <main id="ana-icerik" tabIndex="-1">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow location-eyebrow"><span /> SAKARYA · SERDİVAN</p>
              <h1 id="hero-title"><span className="hero-identity">Psikolog Bedrika Kurt</span>Kendinize<br /><em>alan açın.</em></h1>
              <p className="hero-description">Bazen ilk adım, kendinizi dinlemek için bir alan açmaktır. Hislerinize, hikâyenize ve kendi yolculuğunuza…</p>
              <div className="hero-actions"><a className="button" href="#iletisim">İlk adımı birlikte atalım <Icon /></a><a className="quiet-link" href="#hakkimda">Beni tanıyın <span aria-hidden="true">↗</span></a></div>
              <div className="hero-note"><span className="note-line" /><p>Çocuk, ergen ve yetişkinler için<br /><strong>psikolojik destek.</strong></p></div>
            </div>
            <div className="hero-visual">
              <div className="portrait-backdrop" /><Botanical className="hero-botanical" />
              <figure className="portrait-frame"><img src={`${ASSETS}/bedrika-kurt.jpg`} alt="Psikolog Bedrika Kurt, mesleki profil fotoğrafı" width="1280" height="1280" fetchPriority="high" /></figure>
              <div className="portrait-caption"><span className="caption-icon"><Icon name="leaf" /></span><span><strong>Bedrika Kurt</strong><span>Psikolog · VOYA Psikoloji</span></span><span className="caption-mark" aria-hidden="true">BK.</span></div>
              <p className="portrait-side-note">HER HİKÂYE KENDİNE ÖZGÜDÜR.</p>
            </div>
          </div>
          <div className="container hero-bottom"><span>Birlikte, sizin hızınızda.</span><a href="#hakkimda" aria-label="Hakkımda bölümüne ilerle"><span>KEŞFET</span><span aria-hidden="true">↓</span></a></div>
        </section>
        <div className="values-strip"><div className="container values-grid"><p><Icon name="heart" /><span>İnsanı merkeze alan yaklaşım</span></p><p><Icon name="book" /><span>Bilimsel temelli çalışmalar</span></p><p><Icon name="pin" /><span>Sakarya, Serdivan</span></p></div></div>
        <section id="hakkimda" className="section about-section" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">TANIŞALIM</p><h2 id="about-title">Her insan,<br /><em>biricik bir hikâye.</em></h2><p className="section-lead">Ben Psikolog Bedrika Kurt.</p>
              <p>Bülent Ecevit Üniversitesi Psikoloji Bölümü mezunuyum. Sakarya’da VOYA Psikoloji’nin kurucu psikoloğu olarak çocuk, ergen ve yetişkin danışanlarla çalışıyorum.</p>
              <p>Bilişsel Davranışçı Terapi, Çocuk Merkezli Oyun Terapisi ve MBSR (bilinçli farkındalık temelli stres azaltma) eğitimlerini tamamladım.</p>
              <a className="text-link" href={PROFILE_URL} target="_blank" rel="noopener noreferrer">Mesleki profilimi inceleyin <Icon name="external" /><span className="sr-only"> (yeni sekmede açılır)</span></a>
            </div>
            <div className="education-panel">
              <div className="education-heading"><span className="eyebrow">EĞİTİM & YAKLAŞIM</span><Icon name="leaf" /></div>
              <div className="education-item"><span className="education-number">01</span><div><h3>Psikoloji Lisans Eğitimi</h3><p>Bülent Ecevit Üniversitesi</p></div></div>
              <div className="education-item"><span className="education-number">02</span><div><h3>Bilişsel Davranışçı Terapi</h3><p>DATEM</p></div></div>
              <div className="education-item"><span className="education-number">03</span><div><h3>Çocuk Merkezli Oyun Terapisi</h3><p>Ahenk Psikoloji</p></div></div>
              <div className="education-item"><span className="education-number">04</span><div><h3>Bilinçli Farkındalık · MBSR</h3><p>Mindfulness Institute</p></div></div>
            </div>
          </div>
        </section>
        <section id="calisma-alanlari" className="section support-section" aria-labelledby="support-title">
          <div className="container">
            <div className="section-heading-row"><div><p className="eyebrow">ÇALIŞMA ALANLARI</p><h2 id="support-title">Farklı ihtiyaçlara,<br /><em>özenli bir yaklaşım.</em></h2></div><p>Her yaşın, her dönemin kendine özgü bir dili var.<br className="desktop-break" /> Size uygun bir yerden başlayalım.</p></div>
            <div className="audience-tabs" role="tablist" aria-label="Danışan yaş grupları">{audiences.map((item, index) => <button key={item.label} type="button" role="tab" id={`audience-tab-${index}`} aria-selected={activeAudience === index} aria-controls="audience-panel" tabIndex={activeAudience === index ? 0 : -1} ref={element => { tabButtons.current[index] = element; }} onClick={() => setActiveAudience(index)} onKeyDown={event => handleTabKey(event, index)}>{item.label}<Icon name="external" /></button>)}</div>
            <div id="audience-panel" role="tabpanel" aria-labelledby={`audience-tab-${activeAudience}`} tabIndex="0"><p className="audience-intro">{audience.intro}</p><div className="support-grid">{audience.topics.map((topic, index) => <article className="support-card" key={topic.title}><div className="support-card-top"><span className="topic-icon"><Icon name={topic.icon} /></span><span className="card-number">0{index + 1}</span></div><h3>{topic.title}</h3><p>{topic.text}</p></article>)}</div></div>
            <div className="support-bottom"><p>Sizi zorlayan şeyi adlandırmak zorunda değilsiniz.<br /><strong>Konuşmak istemeniz, başlamak için bir yer olabilir.</strong></p><a className="text-link" href="#iletisim">Birlikte konuşalım <Icon /></a></div>
          </div>
        </section>
        <section id="surec" className="section process-section" aria-labelledby="process-title">
          <div className="container"><div className="process-heading"><p className="eyebrow">GÖRÜŞME SÜRECİ</p><h2 id="process-title">Küçük bir adımla<br /><em>başlayan yolculuk.</em></h2><p>İhtiyaçlarınıza kulak veren, birlikte şekillenen bir süreç.</p></div>
            <ol className="process-grid"><li><span className="step-number">01<span aria-hidden="true">↗</span></span><h3>Tanışmak</h3><p>Başvuru nedeninizi, beklentilerinizi ve merak ettiklerinizi paylaşmak için ilk buluşma.</p></li><li><span className="step-number">02<span aria-hidden="true">↗</span></span><h3>Birlikte anlamak</h3><p>Yaşadıklarınızı ve ihtiyaçlarınızı ele alarak çalışmanın odağını birlikte belirlemek.</p></li><li><span className="step-number">03<span aria-hidden="true">↗</span></span><h3>Adım adım ilerlemek</h3><p>Kendi hızınıza ve ihtiyaçlarınıza alan tanıyarak görüşme sürecini birlikte sürdürmek.</p></li></ol>
          </div><Botanical className="process-botanical" />
        </section>
        <section id="sorular" className="section faq-section" aria-labelledby="faq-title"><div className="container faq-grid"><div><p className="eyebrow">MERAK ETTİKLERİNİZ</p><h2 id="faq-title">Aklınızdaki<br /><em>sorular.</em></h2><p>Başlamadan önce biraz daha<br />yakından tanıyalım.</p><a className="text-link" href="#iletisim">Başka bir sorunuz mu var? <Icon /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span className="faq-number">0{index + 1}</span><span>{question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
        <section id="iletisim" className="contact-section" aria-labelledby="contact-title">
          <div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">BİRLİKTE BAŞLAYALIM</p><h2 id="contact-title">İlk adım,<br /><em>bir merhaba.</em></h2><p>Görüşme seçenekleri ve güncel uygunluk hakkında bilgi almak için mesleki profilim üzerinden iletişime geçebilirsiniz.</p><a className="button button-light" href={PROFILE_URL} target="_blank" rel="noopener noreferrer">DoktorTakvimi profilini aç <Icon name="external" /><span className="sr-only"> (yeni sekmede açılır)</span></a></div><div className="contact-address"><Icon name="pin" /><p className="eyebrow">GÖRÜŞME ADRESİ</p><h3>VOYA Psikoloji</h3><address>Arabacıalanı Mahallesi<br />Mert Sokak, No:18/1<br />Serdivan / Sakarya</address><a className="text-link" href={MAP_URL} target="_blank" rel="noopener noreferrer">Yol tarifi alın <Icon name="external" /><span className="sr-only"> (yeni sekmede açılır)</span></a><span className="address-footnote">Ziyaret öncesi randevu uygunluğunu teyit edebilirsiniz.</span></div></div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-top"><Brand footer /><p>Kendinize ayırdığınız<br /><em>bu zaman kıymetli.</em></p><a href="#baslangic" className="back-to-top" aria-label="Sayfanın başına dön">Yukarı <span aria-hidden="true">↑</span></a></div><div className="container footer-bottom"><span>© 2026 Psikolog Bedrika Kurt</span><span>Sakarya · Serdivan</span><a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">Mesleki profil <Icon name="external" /><span className="sr-only"> (yeni sekmede açılır)</span></a></div></footer>
    </div>
  );
}
export default App;
