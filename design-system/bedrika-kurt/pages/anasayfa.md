# Ana sayfa — projeye uygulanan tasarım kararları

Bu dosya `../MASTER.md` içindeki genel renk ve tipografi önerilerini bu kişisel
psikolog sitesi için özelleştirir. UI UX Pro Max çıktıları öneridir; bu sayfadaki
uyarlamalar uygulamanın gerçek tasarımını tanımlar.

## Kaynak ve yön

- Ana sorgu: `psychologist practice minimal editorial --design-system`.
- Doğrulanan stil: Minimalism & Swiss Style; düzenli grid, boşluk, okunabilirlik.
- Tipografi sorgusu: `wellness editorial serif --domain typography`.
- Doğrulanan eşleşme: Wellness Calm — Lora + Raleway.
- React sorgusu: `semantic components accessibility --stack react`.
- UX sorgusu: `keyboard focus navigation --domain ux`.
- Renkler, genel çıktının siyah/pembe paleti yerine konuya uygun sıcak doğal
  tonlarla uyarlanmıştır. Bunlar skill'in aynen ürettiği bir palet değildir.

## Uygulanan tokenlar

| Rol | Değer |
| --- | --- |
| Zemin | `#f8f6f0` |
| Kart | `#fffdf8` |
| Ana metin | `#2f4235` |
| Ana eylem | `#354d3e` |
| Ana eylem metni | `#fffdf8` |
| İkincil vurgu | `#596d52` |
| İkincil metin | `#62685e` |
| Sakin yüzey | `#e8ecdf` |
| Kenarlık | `#dedfd3` |
| Klavye odağı | `#94644e` |

Lora 400 normal/italik başlıklarda, Raleway 400/600 gövde ve kontrollerde
kullanılır. Fontlar açık lisanslarıyla `public/assets` altında yereldir.
Renkler ve ortak aralıklar `src/index.css` içindeki semantik tokenlardan gelir.

## İçerik ve etkileşim

1. Mesleki kimlik ve gerçek portre.
2. Biyografi, eğitim ve mesleki profil bağlantısı.
3. Klavye ile erişilebilir yaş grubu sekmeleri.
4. Görüşme sürecinin genel tanıtımı.
5. Yerel `details` / `summary` ile sık sorulan sorular.
6. Gerçek mesleki profile ve doğrulanmış adrese yönlendirme.

Unvan `Psikolog` olarak kalır; `Klinik Psikolog`, yıl/sayı, sahte yorum,
garanti sonuç, doğrulanmamış telefon, fiyat veya takvim eklenmez.
Online görüşme uygunluğu kaynaklarda çelişkili olduğundan kesin vaat verilmez.
Mesleki araştırma: `docs/mesleki-arastirma.md`.

## Kontrol

375, 768, 1024 ve 1440 piksel düzenleri; yatay taşma, klavye odağı,
mobil menü, sekmeler, açılır sorular ve azaltılmış hareket tercihi kontrol edilir.
Bu site açık temalıdır; ayrıca bir koyu tema sunulmaz.

## Portre kartı hizalaması

Portre ve isim kartı aynı CSS grid hücresini paylaşır. Kartın iki kenarı
fotoğrafla eşleşir; 21 piksel alt taşma grid içindeki negatif kenar boşluğuyla
korunur. Ekran boyutuna göre bağımsız sağ/sol konum değerleri kullanılmaz.

Bu salt CSS yerleşim sorunu için React veri kümesinde özel bir eşleşme
bulunmadı. Skill’in doğrulanmış responsive UX kayıtları ve mevcut CSS düzeni
esas alındı.

## Görsel incelik

`warm editorial minimal --domain style` sorgusu mevcut minimal stil ile
eşleşti. Kullanıcının daha estetik görünüm isteği, var olan Lora/Raleway
eşleşmesi ve doğal renkler üzerinde uygulandı: daha belirgin serif hiyerarşisi,
sıcak kırık beyaz yüzeyler, oval eylemler, ince çizgiler ve yumuşak kart köşeleri.
Gerçek portre sunumu hafifçe yakınlaştırıldı; fotoğraf dosyası değiştirilmedi.
İsim kartı fotoğrafla ortak grid hizasını korur.
