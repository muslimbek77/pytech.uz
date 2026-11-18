# Pytech kasb yönalişi testi

`career.pytech.uz` uçun röyxatdan ötiş talab qilinmaydigan, 2026-yilgi özbek lotin alifbosidagi raqamli kasb tanlaş sahifasi. Unda 15 ta savol, 20 ta kasb yönalişi va ism-familiya bilan PNG sertifikat yuklab oliş imkoniyati bor.

## Işga tuşiriş

Loyiha papkasida quyidagini işga tuşiring:

```sh
python3 -m http.server 8080
```

Söng `http://localhost:8080` manzilini oçing.

## Loyiha fayllari

- `index.html` — sahifa va matnlar
- `styles.css` — moslaşuvçan dizayn
- `app.js` — savollar, ball hisoblaş va natijalarni saralaş
- `deploy/career.pytech.uz.apache.conf` — Apache va HTTPS sozlamasi

Javoblar brauzerda hisoblanadi, serverga yuborilmaydi va saqlanmaydi. Kasblar orasida dasturlaş, ma’lumotlar tahlili, sun’iy intellekt, dizayn, video montaj, ijtimoiy tarmoqlar, matn va kontent yaratiş, onlayn ta’lim, internet savdosi, masofaviy yordam kabi yönalişlar bor.

## Natijani talqin qiliş

Har bir javob vizual ijod, tahlil, texnik yeçim, muloqot va işni tartibga soliş kabi könikmalarga boğlangan. Kasblar şu könikmalar profili böyiça qiyoslanadi, şu sababli foizlar turli kasblar böyiça bir xil mezon bilan hisoblanadi. Bu böşlanğiç tahririy model hali kasb mutaxassislari va real ishtirokçilar bilan tekşirilmagan. Natija yönaliş beradi, ammo rasmiy kasbiy yoki psixologik taşxis emas; mavjud malaka, ta’lim, iş tajribasi va mehnat bozori talabini ölçamaydi.

## Server sozlamasi

`career.pytech.uz` `192.168.4.249` manzilidagi Apache proxy serveridan bevosita statik sayt sifatida xizmat qiladi. Sozlama namunasi `deploy/career.pytech.uz.apache.conf` faylida. HTTPS sertifikati Let’s Encrypt orqali olingan; HTTP sörovlari HTTPS’ga yönaltiriladi.
