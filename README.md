# Psikolog Bedrika Kurt

React 19, Create React App (`react-scripts` 5) ve CSS ile hazırlanmış Türkçe
kişisel psikolog sitesi. Mevcut `psk` projesi üzerinde geliştirilmiştir.

## Çalıştırma

```sh
npm start
npm run build
CI=true npm test -- --watchAll=false --runInBand
```

## İçerik ve tasarım

- Biyografi, eğitim, çalışma alanları, görüşme süreci, SSS ve iletişim bölümleri.
- Çalışma alanlarında klavye destekli yaş grubu sekmeleri ve mobil menü.
- Gerçek mesleki profile ve harita adresine bağlantılar; başvuru formu veya
  uydurma randevu takvimi yoktur.
- Kaynaklar ve belirsizlikler: [mesleki araştırma](docs/mesleki-arastirma.md).
- Tasarım: [ana sistem](design-system/bedrika-kurt/MASTER.md) ve uygulanan
  [ana sayfa uyarlamaları](design-system/bedrika-kurt/pages/anasayfa.md).
- Yazı tipleri yereldir; Lora ve Raleway açık lisansları `public/assets` altındadır.

## UI UX Pro Max

[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), yerel
Codex skills klasörüne kurulmuştur. [AGENTS.md](AGENTS.md), bu projedeki UI/UX
çalışmalarında skill'in kullanılmasını belirtir. React bağımlılığı değildir.
Python 3 arama betikleri yalnızca standart kütüphaneyi kullanır.

Varsayılan kurulumda örnek arama:

```sh
python3 "$HOME/.codex/skills/ui-ux-pro-max/scripts/search.py" \
  "semantic components accessibility" --stack react
```

`CODEX_HOME` tanımlıysa betik yolu olarak
`$CODEX_HOME/skills/ui-ux-pro-max/scripts/search.py` kullanılır.
Yeni bir görsel yön için `--design-system` ile önerileri oluşturun, uygunluğunu
inceleyin ve `--persist --output-dir` ile mutlak proje köküne kaydedin.
Mevcut ana sistem ve sayfa uyarlamalarını değişikliklerden önce okuyun.

## Yayın

Canlı adres: https://merttburma-arch.github.io/pskbeddy/

GitHub deposunda **Settings → Pages → Build and deployment → Source** ayarını
**GitHub Actions** olarak seçin. Satın alınmış ve yapılandırılmış bir alan adı
kullanılmıyorsa **Custom domain** alanını boş bırakın.

`.github/workflows/deploy-pages.yml`, `main` dalına her push sonrasında
`npm ci` ve `npm run build` komutlarını çalıştırır; yalnızca `build/`
dizinindeki derlenmiş siteyi yayımlar. README veya proje kökünü doğrudan
yayımlayan **Deploy from a branch** ayarı bu React projesi için kullanılmaz.

`package.json` içindeki `homepage: "."`, dosya yollarını göreli tutar;
fotoğraflar, yazı tipleri, CSS ve JavaScript `/pskbeddy/` altında da yüklenir.
Yayın durumunu deponun **Actions** sekmesinden izleyebilirsiniz. İlk kurulumu
push işleminden sonra yaptıysanız **Deploy website to GitHub Pages → Run workflow**
ile yayını yeniden başlatabilirsiniz.

Önceki Sites yayınının kimliği `.openai/hosting.json` içinde korunur.
