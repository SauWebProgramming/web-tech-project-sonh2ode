# 🎬 Sonayflix - Modern Content Streaming Platform
Bu proje, bir "Video on Demand" (VoD) platformunun temel kullanıcı arayüzü ve işlevselliğini simüle etmek amacıyla geliştirilmiştir. Kullanıcı deneyimi, performans ve dinamik veri yönetimi ön planda tutulmuştur.

---

## 🚀 Temel Fonksiyonlar

* **Dinamik İçerik Yönetimi:** Tüm veriler (film adı, türü, puanı, yorumlar, benzer filmler) harici bir `data.json` dosyasından asenkron (Fetch API) olarak çekilmektedir.
* **SPA (Single Page Application) Mimarisi:** Kullanıcı ana sayfa ile detay sayfası arasında geçiş yaparken sayfa yenilenmez. Bu, uygulama akıcılığını sağlar.
* **Gelişmiş Filtreleme ve Arama:** Kullanıcılar hem metin aramasıyla hem de kategori seçimiyle içeriklere anlık olarak ulaşabilir.
* **Akıllı Favori Sistemi:** `localStorage` entegrasyonu sayesinde kullanıcı favorileri tarayıcı oturumu kapansa dahi saklanır.
* **Dinamik Detay Sayfası:** Her içerik için oyuncu kadrosu, özel yorumlar ve algoritma tabanlı "Benzer İçerikler" bölümü otomatik oluşturulur.

## 🛠️ Teknik Altyapı

* **Frontend:** HTML5 (Semantic), CSS3 (Modern Flexbox & Grid)
* **Scripting:** ES6+ JavaScript (Async/Await, DOM Manipulation)
* **Veri Yapısı:** JSON tabanlı NoSQL mantığında veri saklama.
* **Responsive Tasarım:** Mobil öncelikli (Mobile-First) yaklaşım ile her ekran boyutuna tam uyumluluk.

## 📁 Proje Dosya Yapısı

- `index.html`: Uygulamanın iskeleti ve SPA katmanları.
- `style.css`: Renk paleti, animasyonlar ve responsive düzenler.
- `script.js`: İş mantığı, veri çekme ve UI güncellemeleri.
- `data.json`: Uygulamanın veri tabanı rolünü üstlenen içerik seti.

---

## 🔗 Proje Canlı Linki (Demo)
Aşağıdaki bağlantı üzerinden projeyi canlı olarak test edebilirsiniz:

👉 **[PROJEYİ CANLI İZLEMEK İÇİN TIKLAYIN](https://sauwebprogramming.github.io/web-tech-project-sonh2ode/)**

---
Ad Soyad: Sonay Sude Savcı
Öğrenci Numarası: B241200069
*Bu proje Web Teknolojileri dersi kapsamında geliştirilmiştir.*
