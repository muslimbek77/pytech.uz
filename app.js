const roles = [
  {id:'frontend',name:'Veb-sahifa dasturçisi',desc:'Sayt va ilovalarning körinadigan qismini yaratadi',icon:'⌘'},
  {id:'backend',name:'Server dasturçisi',desc:'Saytlarning içki tizimi va ma’lumotlar bilan işlaydi',icon:'◈'},
  {id:'data',name:'Ma’lumotlar tahlilçisi',desc:'Raqam va ma’lumotlardan foydali xulosa çiqaradi',icon:'▥'},
  {id:'ai',name:'Sun’iy intellekt mutaxassisi',desc:'Aqlli dastur va avtomatlaştiriş yeçimlarini yaratadi',icon:'✳'},
  {id:'ux',name:'Veb va ilova dizayneri',desc:'Raqamli mahsulotlarni qulay va çiroyli loyihalaydi',icon:'◌'},
  {id:'cyber',name:'Kiberxavfsizlik mutaxassisi',desc:'Dastur va ma’lumotlarni raqamli hujumlardan himoya qiladi',icon:'⬡'},
  {id:'devops',name:'Bulutli tizimlar muhandisi',desc:'Saytlar va xizmatlar barqaror işlaşini ta’minlaydi',icon:'☁'},
  {id:'product',name:'Raqamli mahsulot menejeri',desc:'Jamoa bilan mahsulot ğoyasini rivojlantiradi',icon:'✦'},
  {id:'video',name:'Video montaj ustasi',desc:'Rolik, dars va reklama videolarini tahrirlaydi',icon:'▶'},
  {id:'smm',name:'Ijtimoiy tarmoqlar mutaxassisi (SMM)',desc:'Brendlar uçun ijtimoiy tarmoq sahifalarini yuritadi',icon:'◎'},
  {id:'graphic',name:'Grafik dizayner',desc:'E’lon, taqdimot, belgi va raqamli tasvirlar yaratadi',icon:'▧'},
  {id:'copy',name:'Matn yozuvçi (kopirayter)',desc:'Sayt, e’lon va tarmoqlar uçun tuşunarli matn yozadi',icon:'✎'},
  {id:'content',name:'Raqamli kontent yaratuvçi',desc:'Surat, matn va qisqa videolar tayyorlaydi',icon:'◉'},
  {id:'qa',name:'Dastur sinovçisi',desc:'Sayt va ilovalardagi xato va noqulayliklarni topadi',icon:'✓'},
  {id:'seo',name:'Qidiruv tizimlari mutaxassisi',desc:'Saytlarni qidiruvda oson topiladigan qiladi',icon:'⌕'},
  {id:'motion',name:'Harakatli tasvirlar dizayneri',desc:'Animatsiya va jonli grafika tayyorlaydi',icon:'✺'},
  {id:'noCode',name:'Kodsiz sayt yaratuvçi',desc:'Tayyor raqamli vositalar bilan sayt va iş jarayoni tuzadi',icon:'▤'},
  {id:'teacher',name:'Onlayn ta’lim muallimi',desc:'Masofadan dars, qöllanma yoki öquv kursi tayyorlaydi',icon:'⌂'},
  {id:'ecommerce',name:'Onlayn savdo mutaxassisi',desc:'Internet dökoni va mahsulot savdosini boşqaradi',icon:'◇'},
  {id:'assistant',name:'Masofaviy yordamçi',desc:'Internet orqali jadval, yozişma va kundalik işlarni yuritadi',icon:'✧'}
];

const q = (text, options) => ({text, options});
// Tanlov mos kasbga 2, yaqin kasbga 1 ball beradi.
const pick = (label, primary, adjacent) => ({label, scores:{[primary]:2,...(adjacent ? {[adjacent]:1} : {})}});
const questions = [
  q('Böş vaqtingizda nima bilan şuğullaniş sizga köproq yoqadi?',[pick('Rasm, rang va çiroyli sahifalar yaratiş','graphic','ux'),pick('Video suratga oliş va montaj qiliş','video','content'),pick('Yangi ğoyalarni odamlarga tuşuntiriş','smm','copy'),pick('Kompyuterdagi muammoni topib, yeçiş','frontend','qa'),pick('Masofadan öqiş yoki boşqalarga örgatiş','teacher','assistant')]),
  q('Qaysi vazifa sizga qiziqarli tuyuladi?',[pick('Rolik uçun musiqa, kadr va matnlarni moslaş','video','motion'),pick('Ijtimoiy tarmoq uçun haftalik reja tuziş','smm','content'),pick('Sayt yoki ilovaga qulay köriniş çiziş','ux','graphic'),pick('Ma’lumotlarni körib, qanday özgariş borligini topiş','data','ecommerce'),pick('Sayt yoki ilovaning xatolarini sinaş','qa','frontend')]),
  q('Uyda yoki özingizga qulay joyda bajariladigan qaysi iş sizga mos?',[pick('Video, surat yoki tasvirlarni tahrirlaş','video','graphic'),pick('Matn yoziş, tarjima qiliş yoki e’lon tayyorlaş','copy','content'),pick('Onlayn dars yoki foydali qöllanma tayyorlaş','teacher','content'),pick('Jadval, xat va uçraşuvlarni masofadan boşqariş','assistant','product'),pick('Sayt yasaş va uni internetga joylaş','noCode','frontend')]),
  q('Biror sahifa yoki ilovaga kirganda nimani birinçi sezasiz?',[pick('Rang, şrift va tasvirlar qanday uyğunlaşganini','graphic','ux'),pick('Tugmalar işlaşi va sahifa tezligini','frontend','qa'),pick('Matn qiziqarlimi va tuşunarlimi','copy','smm'),pick('Qayerdan topilganini va kimlar körayotganini','seo','data'),pick('Buyurtma beriş va tölaş qançalik osonligini','ecommerce','ux')]),
  q('Qaysi natijani tayyorlaş sizni xursand qiladi?',[pick('Tomoşabin oxirigaça köradigan ta’sirli video','video','motion'),pick('Köp odam ulaşadigan ijtimoiy tarmoq posti','content','smm'),pick('Çiroyli va işlatiş oson sayt','noCode','ux'),pick('Biror işni özi bajaradigan aqlli yordamçi','ai','backend'),pick('Yangi mijoz olib kelgan reklama yoki kampaniya','smm','ecommerce')]),
  q('Yangi mavzuni örganişda qaysi usul sizga ma’qul?',[pick('Körib, keyin özim bajarib köriş','video','graphic'),pick('Qadam-baqadam yozma körsatmani öqiş','copy','teacher'),pick('Raqam va misollarni soliştiriş','data','seo'),pick('Tajriba qilib, qayerda xato bölganini izlaş','qa','cyber'),pick('Boşqa odam bilan gaplaşib fikr almaşiş','product','assistant')]),
  q('Qaysi mavzu haqida köproq bilişni istardingiz?',[pick('Qisqa videolar qanday ommalaşişi','smm','content'),pick('Saytlar va mobil ilovalar qanday yaratilişi','frontend','noCode'),pick('Sun’iy intellekt va aqlli dasturlar','ai','data'),pick('Ma’lumot va hisoblarni qanday himoyalaş','cyber','backend'),pick('Internet dökoni savdosini qanday oşiriş','ecommerce','seo')]),
  q('Jamoaviy loyihada qaysi vazifani tanlardingiz?',[pick('Loyiha uçun belgi va tasvirlar tayyorlaş','graphic','motion'),pick('Videoni kesib, tayyor holga keltiriş','video','content'),pick('Auditoriya va e’lonlar rejasini tuziş','smm','product'),pick('Sayt işlaşini sinab, xatolar röyxatini beriş','qa','frontend'),pick('Iş rejasini tuzib, vazifalarni muvofiqlaştiriş','product','assistant')]),
  q('Qanday iş jadvali sizga köproq mos keladi?',[pick('Uyda, vazifalarni öz vaqtimda bajariş','copy','video'),pick('Masofadan jamoa bilan muntazam muloqot qiliş','assistant','product'),pick('Aniq muddatli ijodiy loyihalarda işlaş','graphic','motion'),pick('Har kuni yangi odam va mijozlar bilan işlaş','smm','ecommerce'),pick('Çuqur diqqat bilan kompyuterda masala yeçiş','backend','data')]),
  q('Kiçik biznesning internetdagi sahifasiga yordam berişingiz kerak. Nimadan boşlaysiz?',[pick('Brend uslubiga mos rasmlar tayyorlayman','graphic','content'),pick('Xizmatlarini tuşuntiradigan matn yozaman','copy','seo'),pick('Ijtimoiy tarmoqlar uçun postlar rejasini tuzaman','smm','content'),pick('Oddiy sayt yoki internet dökoni yarataman','noCode','ecommerce'),pick('Sahifaga kiruvçilarni örganib, natijalarni tahlil qilaman','data','seo')]),
  q('Qaysi muammo yeçimini izlaş sizga qiziq?',[pick('Nega roliklar körilmayapti?','video','smm'),pick('Nega mijozlar saytdan buyurtma bermayapti?','ecommerce','ux'),pick('Nega matn odamlarni qiziqtirmayapti?','copy','content'),pick('Nega dastur kutilgandek işlamayapti?','qa','backend'),pick('Qaysi takroriy işni avtomatlaştiriş mumkin?','ai','noCode')]),
  q('Qaysi könikmangizni rivojlantirişni xohlaysiz?',[pick('Video tahriri va jonli tasvir yaratiş','video','motion'),pick('Rang, şrift va sahifa tuzilişini tanlaş','graphic','ux'),pick('Yoziş va fikrni aniq ifodalaş','copy','teacher'),pick('Reklama natijalarini tahlil qiliş','smm','data'),pick('Kod yoziş yoki saytni mustaqil tuziş','frontend','noCode')]),
  q('Odamlarga qanday yordam berişni istardingiz?',[pick('Foydali ma’lumotni sodda tilda yetkaziş','content','teacher'),pick('Kasb yoki mavzuni onlayn örgatiş','teacher','copy'),pick('Internet orqali kundalik işlarni yengillaştiriş','assistant','ai'),pick('Xizmat va mahsulotlarni internetdan topişga kömaklaşiş','seo','ecommerce'),pick('Foydalanişga qulay raqamli xizmat yaratiş','ux','product')]),
  q('Biror işni tugatganingizda qaysi natija sizni köproq quvontiradi?',[pick('Tayyor videoni tomoşabinlar maqtaşi','video','content'),pick('Dizayn odamlar uçun tuşunarli bölişi','ux','graphic'),pick('Sayt köproq mijoz olib kelişi','seo','ecommerce'),pick('Tizim işonçli va xatosiz işlaşi','devops','qa'),pick('Jamoa yoki mijoz rejalangan maqsadga yetişi','product','smm')]),
  q('Kelasi yili qaysi işni qilib körgan bölişni xohlaysiz?',[pick('Buyurtma asosida video va rolik tahrirlaş','video','motion'),pick('Bir neçta brendning ijtimoiy sahifalarini yuritiş','smm','content'),pick('Masofadan matn yoziş yoki dars beriş','copy','teacher'),pick('Mustaqil sayt, dökon yoki ilova tayyorlaş','noCode','frontend'),pick('Raqamli jamoada dastur yoki ma’lumot bilan işlaş','data','backend')])
];

let current = 0;
let answers = Array(questions.length).fill(null);
const $ = (id) => document.getElementById(id);
const hero = document.querySelector('.hero');
const how = document.querySelector('.how');
const footer = document.querySelector('footer');
const quizView = $('quizView');
const resultsView = $('resultsView');

function showQuiz() {
  hero.classList.add('hidden'); how.classList.add('hidden'); footer.classList.add('hidden');
  resultsView.classList.add('hidden'); quizView.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'}); renderQuestion();
}
function renderQuestion() {
  const item = questions[current];
  const num = String(current + 1).padStart(2,'0');
  $('currentNum').textContent = num; $('footNum').textContent = num;
  $('progressFill').style.width = `${((current + 1) / questions.length) * 100}%`;
  $('questionText').textContent = item.text;
  $('backBtn').style.visibility = current === 0 ? 'hidden' : 'visible';
  $('answers').replaceChildren(...item.options.map((option,index) => {
    const button = document.createElement('button'); button.className = `answer-option${answers[current] === index ? ' selected' : ''}`;
    button.innerHTML = `<span class="answer-key">${String.fromCharCode(65+index)}</span><span>${option.label}</span><span class="answer-arrow">→</span>`;
    button.addEventListener('click', () => { answers[current] = index; if(current < questions.length-1){current++;renderQuestion()}else showResults() });
    return button;
  }));
}
function showResults() {
  quizView.classList.add('hidden'); resultsView.classList.remove('hidden'); footer.classList.remove('hidden');
  const points = Object.fromEntries(roles.map(role => [role.id,0]));
  answers.forEach((answerIndex, questionIndex) => {
    if(answerIndex === null) return;
    const scores = questions[questionIndex].options[answerIndex].scores;
    Object.entries(scores).forEach(([id,value]) => points[id] += value);
  });
  const ranked = roles.map(role => {
    const possible = questions.reduce((total,question) => total + Math.max(...question.options.map(option => option.scores[role.id] || 0)),0);
    return {...role,percent:possible ? Math.round(points[role.id]/possible*100) : 0};
  }).sort((a,b)=>b.percent-a.percent);
  $('resultsList').replaceChildren(...ranked.map((role,index) => {
    const row=document.createElement('div');row.className='result-row';
    row.innerHTML=`<span class="rank-num">${String(index+1).padStart(2,'0')}</span><span class="role-icon">${role.icon}</span><span><span class="role-name">${role.name}</span><span class="role-desc">${role.desc}</span></span><span class="role-meter"><i style="width:${role.percent}%"></i></span><span class="role-percent">${role.percent}%</span>`;
    return row;
  }));
  $('insightTitle').textContent = ranked[0].name;
  $('insightText').textContent = `${ranked[0].name} javoblaringizga eng mos keldi. ${ranked[1].name} ham siz uchun munosib variant bo‘lishi mumkin.`;
  window.scrollTo({top:0,behavior:'smooth'});
}
function reset() { current=0; answers=Array(questions.length).fill(null); resultsView.classList.add('hidden');quizView.classList.add('hidden');hero.classList.remove('hidden');how.classList.remove('hidden');footer.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'}); }
$('startBtn').addEventListener('click',showQuiz);
$('backBtn').addEventListener('click',()=>{if(current>0){current--;renderQuestion()}});
$('exitBtn').addEventListener('click',reset);
$('restartBtn').addEventListener('click',reset);
