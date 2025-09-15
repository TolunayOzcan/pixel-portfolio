```markdown
# Pixel Art Portfolio — Başlangıç Şablonu

Bu repo pixel artistler için hızlı, pastel tonlu ve pixel-art'a uygun bir portfolio/landing şablonudur.

İçerik
- index.html — ana sayfa
- styles.css — pastel renk paleti ve pixel-art için image-rendering: pixelated
- script.js — galeri lightbox
- images/ — kendi png/webp dosyalarını koy

Kullanım
1. Bu dosyaları bir klasöre koy.
2. images/ klasörüne görsellerini ekle: hero.png, art1.png ... art6.png. Büyük gösterimler için art1@2x.png gibi yüksek çözünürlüklü versiyonlar koy.
3. index.html'ı tarayıcıda aç.

Pixel-art için ipuçları
- Görselleri PNG (veya gerektiğinde lossless WebP) olarak sakla.
- Retina ekranlar için @2x sürümler üret (ör. art1@2x.png). index.html'de data-full olarak bu tam boy dosyaları göster.
- Önizlemeler için 160–400px genişlikte küçük versiyonlar oluştur; ışık kutusunda tam boy göster.

Optimize etme
- PNG sıkıştırma: pngcrush / zopflipng veya lossless WebP dönüştürme.
- Lazy-loading zaten eklendi: loading="lazy". Daha gelişmiş yükleme istiyorsan IntersectionObserver ekleyebilirim.

Deploy (GitHub Pages)
- Repo'yu oluşturduysan (ve ana branch main olarak ayarlıysa) dosyaları push et.
- GitHub -> Settings -> Pages kısmına gidip Source olarak "main" branch ve "/" (root) seç, kaydet. Birkaç dakika içinde site aktif olur.
- İstersen özel domain (CNAME) ekleyebilirsin — bunun için repo köküne CNAME dosyası koy ve Pages ayarlarından domain ekle.

Not: Eğer istersen repo'ya yazma izni ver, ben dosyaları doğrudan push edip Pages'i aktifleştireyim. Alternatif olarak aşağıdaki git komutlarıyla kendin de hızlıca push edebilirsin.
```