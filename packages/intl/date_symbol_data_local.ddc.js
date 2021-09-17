define(['dart_sdk', 'packages/intl/intl', 'packages/intl/date_time_patterns', 'packages/intl/date_symbols'], (function load__packages__intl__date_symbol_data_local(dart_sdk, packages__intl__intl, packages__intl__date_time_patterns, packages__intl__date_symbols) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date_format_internal = packages__intl__intl.src__date_format_internal;
  const date_time_patterns = packages__intl__date_time_patterns.date_time_patterns;
  const date_symbols = packages__intl__date_symbols.date_symbols;
  var date_symbol_data_local = Object.create(dart.library);
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var VoidToMapL = () => (VoidToMapL = dart.constFn(dart.fnType(MapL(), [])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(date_symbol_data_local.dateTimeSymbolMap, VoidToMapL());
    },
    get C1() {
      return C1 = dart.fn(date_time_patterns.dateTimePatternMap, VoidToMapL());
    },
    get C2() {
      return C2 = dart.constList(["BC", "AD"], StringL());
    },
    get C3() {
      return C3 = dart.constList(["Before Christ", "Anno Domini"], StringL());
    },
    get C4() {
      return C4 = dart.constList(["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], StringL());
    },
    get C5() {
      return C5 = dart.constList(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], StringL());
    },
    get C6() {
      return C6 = dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], StringL());
    },
    get C7() {
      return C7 = dart.constList(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], StringL());
    },
    get C8() {
      return C8 = dart.constList(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], StringL());
    },
    get C9() {
      return C9 = dart.constList(["S", "M", "T", "W", "T", "F", "S"], StringL());
    },
    get C10() {
      return C10 = dart.constList(["Q1", "Q2", "Q3", "Q4"], StringL());
    },
    get C11() {
      return C11 = dart.constList(["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], StringL());
    },
    get C12() {
      return C12 = dart.constList(["AM", "PM"], StringL());
    },
    get C13() {
      return C13 = dart.constList(["EEEE, y MMMM dd", "y MMMM d", "y MMM d", "yyyy-MM-dd"], StringL());
    },
    get C14() {
      return C14 = dart.constList(["HH:mm:ss v", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], StringL());
    },
    get C15() {
      return C15 = dart.constList(["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C16() {
      return C16 = dart.constList([5, 6], intL());
    },
    get C17() {
      return C17 = dart.constList(["v.C.", "n.C."], StringL());
    },
    get C18() {
      return C18 = dart.constList(["voor Christus", "na Christus"], StringL());
    },
    get C19() {
      return C19 = dart.constList(["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"], StringL());
    },
    get C20() {
      return C20 = dart.constList(["Jan.", "Feb.", "Mrt.", "Apr.", "Mei", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Des."], StringL());
    },
    get C21() {
      return C21 = dart.constList(["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"], StringL());
    },
    get C22() {
      return C22 = dart.constList(["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."], StringL());
    },
    get C23() {
      return C23 = dart.constList(["S", "M", "D", "W", "D", "V", "S"], StringL());
    },
    get C24() {
      return C24 = dart.constList(["K1", "K2", "K3", "K4"], StringL());
    },
    get C25() {
      return C25 = dart.constList(["1ste kwartaal", "2de kwartaal", "3de kwartaal", "4de kwartaal"], StringL());
    },
    get C26() {
      return C26 = dart.constList(["vm.", "nm."], StringL());
    },
    get C27() {
      return C27 = dart.constList(["EEEE, dd MMMM y", "dd MMMM y", "dd MMM y", "y-MM-dd"], StringL());
    },
    get C28() {
      return C28 = dart.constList(["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], StringL());
    },
    get C29() {
      return C29 = dart.constList(["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], StringL());
    },
    get C30() {
      return C30 = dart.constList(["ዓ/ዓ", "ዓ/ም"], StringL());
    },
    get C31() {
      return C31 = dart.constList(["ዓመተ ዓለም", "ዓመተ ምሕረት"], StringL());
    },
    get C32() {
      return C32 = dart.constList(["ጃ", "ፌ", "ማ", "ኤ", "ሜ", "ጁ", "ጁ", "ኦ", "ሴ", "ኦ", "ኖ", "ዲ"], StringL());
    },
    get C33() {
      return C33 = dart.constList(["ጃንዩወሪ", "ፌብሩወሪ", "ማርች", "ኤፕሪል", "ሜይ", "ጁን", "ጁላይ", "ኦገስት", "ሴፕቴምበር", "ኦክቶበር", "ኖቬምበር", "ዲሴምበር"], StringL());
    },
    get C34() {
      return C34 = dart.constList(["ጃንዩ", "ፌብሩ", "ማርች", "ኤፕሪ", "ሜይ", "ጁን", "ጁላይ", "ኦገስ", "ሴፕቴ", "ኦክቶ", "ኖቬም", "ዲሴም"], StringL());
    },
    get C35() {
      return C35 = dart.constList(["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], StringL());
    },
    get C36() {
      return C36 = dart.constList(["እሑድ", "ሰኞ", "ማክሰ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], StringL());
    },
    get C37() {
      return C37 = dart.constList(["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"], StringL());
    },
    get C38() {
      return C38 = dart.constList(["ሩብ1", "ሩብ2", "ሩብ3", "ሩብ4"], StringL());
    },
    get C39() {
      return C39 = dart.constList(["1ኛው ሩብ", "2ኛው ሩብ", "3ኛው ሩብ", "4ኛው ሩብ"], StringL());
    },
    get C40() {
      return C40 = dart.constList(["ጥዋት", "ከሰዓት"], StringL());
    },
    get C41() {
      return C41 = dart.constList(["EEEE ፣d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], StringL());
    },
    get C42() {
      return C42 = dart.constList(["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], StringL());
    },
    get C43() {
      return C43 = dart.constList(["ق.م", "م"], StringL());
    },
    get C44() {
      return C44 = dart.constList(["قبل الميلاد", "ميلادي"], StringL());
    },
    get C45() {
      return C45 = dart.constList(["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"], StringL());
    },
    get C46() {
      return C46 = dart.constList(["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], StringL());
    },
    get C47() {
      return C47 = dart.constList(["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], StringL());
    },
    get C48() {
      return C48 = dart.constList(["ح", "ن", "ث", "ر", "خ", "ج", "س"], StringL());
    },
    get C49() {
      return C49 = dart.constList(["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"], StringL());
    },
    get C50() {
      return C50 = dart.constList(["ص", "م"], StringL());
    },
    get C51() {
      return C51 = dart.constList(["EEEE، d MMMM y", "d MMMM y", "dd‏/MM‏/y", "d‏/M‏/y"], StringL());
    },
    get C52() {
      return C52 = dart.constList([4, 5], intL());
    },
    get C53() {
      return C53 = dart.constList(["ج", "ف", "م", "أ", "م", "ج", "ج", "أ", "س", "أ", "ن", "د"], StringL());
    },
    get C54() {
      return C54 = dart.constList(["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], StringL());
    },
    get C55() {
      return C55 = dart.constList(["e.ə.", "y.e."], StringL());
    },
    get C56() {
      return C56 = dart.constList(["eramızdan əvvəl", "yeni era"], StringL());
    },
    get C57() {
      return C57 = dart.constList(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], StringL());
    },
    get C58() {
      return C58 = dart.constList(["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"], StringL());
    },
    get C59() {
      return C59 = dart.constList(["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], StringL());
    },
    get C60() {
      return C60 = dart.constList(["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"], StringL());
    },
    get C61() {
      return C61 = dart.constList(["bazar", "bazar ertəsi", "çərşənbə axşamı", "çərşənbə", "cümə axşamı", "cümə", "şənbə"], StringL());
    },
    get C62() {
      return C62 = dart.constList(["B.", "B.E.", "Ç.A.", "Ç.", "C.A.", "C.", "Ş."], StringL());
    },
    get C63() {
      return C63 = dart.constList(["7", "1", "2", "3", "4", "5", "6"], StringL());
    },
    get C64() {
      return C64 = dart.constList(["1-ci kv.", "2-ci kv.", "3-cü kv.", "4-cü kv."], StringL());
    },
    get C65() {
      return C65 = dart.constList(["1-ci kvartal", "2-ci kvartal", "3-cü kvartal", "4-cü kvartal"], StringL());
    },
    get C66() {
      return C66 = dart.constList(["d MMMM y, EEEE", "d MMMM y", "d MMM y", "dd.MM.yy"], StringL());
    },
    get C67() {
      return C67 = dart.constList(["да н.э.", "н.э."], StringL());
    },
    get C68() {
      return C68 = dart.constList(["да нараджэння Хрыстова", "ад нараджэння Хрыстова"], StringL());
    },
    get C69() {
      return C69 = dart.constList(["с", "л", "с", "к", "м", "ч", "л", "ж", "в", "к", "л", "с"], StringL());
    },
    get C70() {
      return C70 = dart.constList(["студзеня", "лютага", "сакавіка", "красавіка", "мая", "чэрвеня", "ліпеня", "жніўня", "верасня", "кастрычніка", "лістапада", "снежня"], StringL());
    },
    get C71() {
      return C71 = dart.constList(["студзень", "люты", "сакавік", "красавік", "май", "чэрвень", "ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань"], StringL());
    },
    get C72() {
      return C72 = dart.constList(["сту", "лют", "сак", "кра", "мая", "чэр", "ліп", "жні", "вер", "кас", "ліс", "сне"], StringL());
    },
    get C73() {
      return C73 = dart.constList(["сту", "лют", "сак", "кра", "май", "чэр", "ліп", "жні", "вер", "кас", "ліс", "сне"], StringL());
    },
    get C74() {
      return C74 = dart.constList(["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"], StringL());
    },
    get C75() {
      return C75 = dart.constList(["нд", "пн", "аў", "ср", "чц", "пт", "сб"], StringL());
    },
    get C76() {
      return C76 = dart.constList(["н", "п", "а", "с", "ч", "п", "с"], StringL());
    },
    get C77() {
      return C77 = dart.constList(["1-шы кв.", "2-гі кв.", "3-ці кв.", "4-ты кв."], StringL());
    },
    get C78() {
      return C78 = dart.constList(["1-шы квартал", "2-гі квартал", "3-ці квартал", "4-ты квартал"], StringL());
    },
    get C79() {
      return C79 = dart.constList(["EEEE, d MMMM y 'г'.", "d MMMM y 'г'.", "d.MM.y", "d.MM.yy"], StringL());
    },
    get C80() {
      return C80 = dart.constList(["HH:mm:ss, zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], StringL());
    },
    get C81() {
      return C81 = dart.constList(["{1} 'у' {0}", "{1} 'у' {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C82() {
      return C82 = dart.constList(["пр.Хр.", "сл.Хр."], StringL());
    },
    get C83() {
      return C83 = dart.constList(["преди Христа", "след Христа"], StringL());
    },
    get C84() {
      return C84 = dart.constList(["я", "ф", "м", "а", "м", "ю", "ю", "а", "с", "о", "н", "д"], StringL());
    },
    get C85() {
      return C85 = dart.constList(["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"], StringL());
    },
    get C86() {
      return C86 = dart.constList(["яну", "фев", "март", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"], StringL());
    },
    get C87() {
      return C87 = dart.constList(["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"], StringL());
    },
    get C88() {
      return C88 = dart.constList(["нд", "пн", "вт", "ср", "чт", "пт", "сб"], StringL());
    },
    get C89() {
      return C89 = dart.constList(["н", "п", "в", "с", "ч", "п", "с"], StringL());
    },
    get C90() {
      return C90 = dart.constList(["1. трим.", "2. трим.", "3. трим.", "4. трим."], StringL());
    },
    get C91() {
      return C91 = dart.constList(["1. тримесечие", "2. тримесечие", "3. тримесечие", "4. тримесечие"], StringL());
    },
    get C92() {
      return C92 = dart.constList(["пр.об.", "сл.об."], StringL());
    },
    get C93() {
      return C93 = dart.constList(["EEEE, d MMMM y 'г'.", "d MMMM y 'г'.", "d.MM.y 'г'.", "d.MM.yy 'г'."], StringL());
    },
    get C94() {
      return C94 = dart.constList(["H:mm:ss 'ч'. zzzz", "H:mm:ss 'ч'. z", "H:mm:ss 'ч'.", "H:mm 'ч'."], StringL());
    },
    get C95() {
      return C95 = dart.constList(["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C96() {
      return C96 = dart.constList(["খ্রিস্টপূর্ব", "খৃষ্টাব্দ"], StringL());
    },
    get C97() {
      return C97 = dart.constList(["খ্রিস্টপূর্ব", "খ্রীষ্টাব্দ"], StringL());
    },
    get C98() {
      return C98 = dart.constList(["জা", "ফে", "মা", "এ", "মে", "জুন", "জু", "আ", "সে", "অ", "ন", "ডি"], StringL());
    },
    get C99() {
      return C99 = dart.constList(["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"], StringL());
    },
    get C100() {
      return C100 = dart.constList(["জানু", "ফেব", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"], StringL());
    },
    get C101() {
      return C101 = dart.constList(["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"], StringL());
    },
    get C102() {
      return C102 = dart.constList(["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহষ্পতিবার", "শুক্রবার", "শনিবার"], StringL());
    },
    get C103() {
      return C103 = dart.constList(["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"], StringL());
    },
    get C104() {
      return C104 = dart.constList(["র", "সো", "ম", "বু", "বৃ", "শু", "শ"], StringL());
    },
    get C105() {
      return C105 = dart.constList(["ত্রৈমাসিক", "দ্বিতীয় ত্রৈমাসিক", "তৃতীয় ত্রৈমাসিক", "চতুর্থ ত্রৈমাসিক"], StringL());
    },
    get C106() {
      return C106 = dart.constList(["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"], StringL());
    },
    get C107() {
      return C107 = dart.constList(["a-raok J.K.", "goude J.K."], StringL());
    },
    get C108() {
      return C108 = dart.constList(["a-raok Jezuz-Krist", "goude Jezuz-Krist"], StringL());
    },
    get C109() {
      return C109 = dart.constList(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], StringL());
    },
    get C110() {
      return C110 = dart.constList(["Genver", "Cʼhwevrer", "Meurzh", "Ebrel", "Mae", "Mezheven", "Gouere", "Eost", "Gwengolo", "Here", "Du", "Kerzu"], StringL());
    },
    get C111() {
      return C111 = dart.constList(["Gen.", "Cʼhwe.", "Meur.", "Ebr.", "Mae", "Mezh.", "Goue.", "Eost", "Gwen.", "Here", "Du", "Kzu."], StringL());
    },
    get C112() {
      return C112 = dart.constList(["Sul", "Lun", "Meurzh", "Mercʼher", "Yaou", "Gwener", "Sadorn"], StringL());
    },
    get C113() {
      return C113 = dart.constList(["Sul", "Lun", "Meu.", "Mer.", "Yaou", "Gwe.", "Sad."], StringL());
    },
    get C114() {
      return C114 = dart.constList(["Su", "L", "Mz", "Mc", "Y", "G", "Sa"], StringL());
    },
    get C115() {
      return C115 = dart.constList(["1añ trim.", "2l trim.", "3e trim.", "4e trim."], StringL());
    },
    get C116() {
      return C116 = dart.constList(["1añ trimiziad", "2l trimiziad", "3e trimiziad", "4e trimiziad"], StringL());
    },
    get C117() {
      return C117 = dart.constList(["A.M.", "G.M."], StringL());
    },
    get C118() {
      return C118 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], StringL());
    },
    get C119() {
      return C119 = dart.constList(["{1} 'da' {0}", "{1} 'da' {0}", "{1}, {0}", "{1} {0}"], StringL());
    },
    get C120() {
      return C120 = dart.constList(["p. n. e.", "n. e."], StringL());
    },
    get C121() {
      return C121 = dart.constList(["prije nove ere", "nove ere"], StringL());
    },
    get C122() {
      return C122 = dart.constList(["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], StringL());
    },
    get C123() {
      return C123 = dart.constList(["januar", "februar", "mart", "april", "maj", "juni", "juli", "avgust", "septembar", "oktobar", "novembar", "decembar"], StringL());
    },
    get C124() {
      return C124 = dart.constList(["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], StringL());
    },
    get C125() {
      return C125 = dart.constList(["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], StringL());
    },
    get C126() {
      return C126 = dart.constList(["ned", "pon", "uto", "sri", "čet", "pet", "sub"], StringL());
    },
    get C127() {
      return C127 = dart.constList(["N", "P", "U", "S", "Č", "P", "S"], StringL());
    },
    get C128() {
      return C128 = dart.constList(["n", "p", "u", "s", "č", "p", "s"], StringL());
    },
    get C129() {
      return C129 = dart.constList(["KV1", "KV2", "KV3", "KV4"], StringL());
    },
    get C130() {
      return C130 = dart.constList(["Prvi kvartal", "Drugi kvartal", "Treći kvartal", "Četvrti kvartal"], StringL());
    },
    get C131() {
      return C131 = dart.constList(["prijepodne", "popodne"], StringL());
    },
    get C132() {
      return C132 = dart.constList(["EEEE, d. MMMM y.", "d. MMMM y.", "d. MMM y.", "d.M.yy."], StringL());
    },
    get C133() {
      return C133 = dart.constList(["{1} 'u' {0}", "{1} 'u' {0}", "{1} {0}", "{1} {0}"], StringL());
    },
    get C134() {
      return C134 = dart.constList(["aC", "dC"], StringL());
    },
    get C135() {
      return C135 = dart.constList(["abans de Crist", "després de Crist"], StringL());
    },
    get C136() {
      return C136 = dart.constList(["GN", "FB", "MÇ", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"], StringL());
    },
    get C137() {
      return C137 = dart.constList(["de gener", "de febrer", "de març", "d’abril", "de maig", "de juny", "de juliol", "d’agost", "de setembre", "d’octubre", "de novembre", "de desembre"], StringL());
    },
    get C138() {
      return C138 = dart.constList(["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"], StringL());
    },
    get C139() {
      return C139 = dart.constList(["de gen.", "de febr.", "de març", "d’abr.", "de maig", "de juny", "de jul.", "d’ag.", "de set.", "d’oct.", "de nov.", "de des."], StringL());
    },
    get C140() {
      return C140 = dart.constList(["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."], StringL());
    },
    get C141() {
      return C141 = dart.constList(["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"], StringL());
    },
    get C142() {
      return C142 = dart.constList(["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."], StringL());
    },
    get C143() {
      return C143 = dart.constList(["dg", "dl", "dt", "dc", "dj", "dv", "ds"], StringL());
    },
    get C144() {
      return C144 = dart.constList(["1T", "2T", "3T", "4T"], StringL());
    },
    get C145() {
      return C145 = dart.constList(["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"], StringL());
    },
    get C146() {
      return C146 = dart.constList(["a. m.", "p. m."], StringL());
    },
    get C147() {
      return C147 = dart.constList(["EEEE, d MMMM 'de' y", "d MMMM 'de' y", "d MMM y", "d/M/yy"], StringL());
    },
    get C148() {
      return C148 = dart.constList(["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], StringL());
    },
    get C149() {
      return C149 = dart.constList(["{1} 'a' 'les' {0}", "{1} 'a' 'les' {0}", "{1}, {0}", "{1} {0}"], StringL());
    },
    get C150() {
      return C150 = dart.constList(["ᏧᏓᎷᎸ ᎤᎷᎯᏍᏗ ᎦᎶᏁᏛ", "ᎠᏃ ᏙᎻᏂ"], StringL());
    },
    get C151() {
      return C151 = dart.constList(["Ꭴ", "Ꭷ", "Ꭰ", "Ꭷ", "Ꭰ", "Ꮥ", "Ꭻ", "Ꭶ", "Ꮪ", "Ꮪ", "Ꮕ", "Ꭵ"], StringL());
    },
    get C152() {
      return C152 = dart.constList(["ᎤᏃᎸᏔᏅ", "ᎧᎦᎵ", "ᎠᏅᏱ", "ᎧᏬᏂ", "ᎠᏂᏍᎬᏘ", "ᏕᎭᎷᏱ", "ᎫᏰᏉᏂ", "ᎦᎶᏂ", "ᏚᎵᏍᏗ", "ᏚᏂᏅᏗ", "ᏅᏓᏕᏆ", "ᎥᏍᎩᏱ"], StringL());
    },
    get C153() {
      return C153 = dart.constList(["ᎤᏃ", "ᎧᎦ", "ᎠᏅ", "ᎧᏬ", "ᎠᏂ", "ᏕᎭ", "ᎫᏰ", "ᎦᎶ", "ᏚᎵ", "ᏚᏂ", "ᏅᏓ", "ᎥᏍ"], StringL());
    },
    get C154() {
      return C154 = dart.constList(["ᎤᎾᏙᏓᏆᏍᎬ", "ᎤᎾᏙᏓᏉᏅᎯ", "ᏔᎵᏁᎢᎦ", "ᏦᎢᏁᎢᎦ", "ᏅᎩᏁᎢᎦ", "ᏧᎾᎩᎶᏍᏗ", "ᎤᎾᏙᏓᏈᏕᎾ"], StringL());
    },
    get C155() {
      return C155 = dart.constList(["ᏆᏍᎬ", "ᏉᏅᎯ", "ᏔᎵᏁ", "ᏦᎢᏁ", "ᏅᎩᏁ", "ᏧᎾᎩ", "ᏈᏕᎾ"], StringL());
    },
    get C156() {
      return C156 = dart.constList(["Ꮖ", "Ꮙ", "Ꮤ", "Ꮶ", "Ꮕ", "Ꮷ", "Ꭴ"], StringL());
    },
    get C157() {
      return C157 = dart.constList(["1st ᎩᏄᏙᏗ", "2nd ᎩᏄᏙᏗ", "3rd ᎩᏄᏙᏗ", "4th ᎩᏄᏙᏗ"], StringL());
    },
    get C158() {
      return C158 = dart.constList(["ᏌᎾᎴ", "ᏒᎯᏱᎢᏗᏢ"], StringL());
    },
    get C159() {
      return C159 = dart.constList(["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], StringL());
    },
    get C160() {
      return C160 = dart.constList(["{1} ᎤᎾᎢ {0}", "{1} ᎤᎾᎢ {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C161() {
      return C161 = dart.constList(["př. n. l.", "n. l."], StringL());
    },
    get C162() {
      return C162 = dart.constList(["před naším letopočtem", "našeho letopočtu"], StringL());
    },
    get C163() {
      return C163 = dart.constList(["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"], StringL());
    },
    get C164() {
      return C164 = dart.constList(["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"], StringL());
    },
    get C165() {
      return C165 = dart.constList(["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"], StringL());
    },
    get C166() {
      return C166 = dart.constList(["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"], StringL());
    },
    get C167() {
      return C167 = dart.constList(["ne", "po", "út", "st", "čt", "pá", "so"], StringL());
    },
    get C168() {
      return C168 = dart.constList(["N", "P", "Ú", "S", "Č", "P", "S"], StringL());
    },
    get C169() {
      return C169 = dart.constList(["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"], StringL());
    },
    get C170() {
      return C170 = dart.constList(["dop.", "odp."], StringL());
    },
    get C171() {
      return C171 = dart.constList(["EEEE d. MMMM y", "d. MMMM y", "d. M. y", "dd.MM.yy"], StringL());
    },
    get C172() {
      return C172 = dart.constList(["CC", "OC"], StringL());
    },
    get C173() {
      return C173 = dart.constList(["Cyn Crist", "Oed Crist"], StringL());
    },
    get C174() {
      return C174 = dart.constList(["I", "Ch", "M", "E", "M", "M", "G", "A", "M", "H", "T", "Rh"], StringL());
    },
    get C175() {
      return C175 = dart.constList(["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"], StringL());
    },
    get C176() {
      return C176 = dart.constList(["Ion", "Chwef", "Maw", "Ebrill", "Mai", "Meh", "Gorff", "Awst", "Medi", "Hyd", "Tach", "Rhag"], StringL());
    },
    get C177() {
      return C177 = dart.constList(["Ion", "Chw", "Maw", "Ebr", "Mai", "Meh", "Gor", "Awst", "Medi", "Hyd", "Tach", "Rhag"], StringL());
    },
    get C178() {
      return C178 = dart.constList(["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"], StringL());
    },
    get C179() {
      return C179 = dart.constList(["Sul", "Llun", "Maw", "Mer", "Iau", "Gwen", "Sad"], StringL());
    },
    get C180() {
      return C180 = dart.constList(["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"], StringL());
    },
    get C181() {
      return C181 = dart.constList(["S", "Ll", "M", "M", "I", "G", "S"], StringL());
    },
    get C182() {
      return C182 = dart.constList(["Ch1", "Ch2", "Ch3", "Ch4"], StringL());
    },
    get C183() {
      return C183 = dart.constList(["chwarter 1af", "2il chwarter", "3ydd chwarter", "4ydd chwarter"], StringL());
    },
    get C184() {
      return C184 = dart.constList(["yb", "yh"], StringL());
    },
    get C185() {
      return C185 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], StringL());
    },
    get C186() {
      return C186 = dart.constList(["{1} 'am' {0}", "{1} 'am' {0}", "{1} {0}", "{1} {0}"], StringL());
    },
    get C187() {
      return C187 = dart.constList(["f.Kr.", "e.Kr."], StringL());
    },
    get C188() {
      return C188 = dart.constList(["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"], StringL());
    },
    get C189() {
      return C189 = dart.constList(["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], StringL());
    },
    get C190() {
      return C190 = dart.constList(["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"], StringL());
    },
    get C191() {
      return C191 = dart.constList(["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."], StringL());
    },
    get C192() {
      return C192 = dart.constList(["søn", "man", "tir", "ons", "tor", "fre", "lør"], StringL());
    },
    get C193() {
      return C193 = dart.constList(["S", "M", "T", "O", "T", "F", "L"], StringL());
    },
    get C194() {
      return C194 = dart.constList(["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."], StringL());
    },
    get C195() {
      return C195 = dart.constList(["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], StringL());
    },
    get C196() {
      return C196 = dart.constList(["EEEE 'den' d. MMMM y", "d. MMMM y", "d. MMM y", "dd/MM/y"], StringL());
    },
    get C197() {
      return C197 = dart.constList(["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"], StringL());
    },
    get C198() {
      return C198 = dart.constList(["{1} 'kl'. {0}", "{1} 'kl'. {0}", "{1} {0}", "{1} {0}"], StringL());
    },
    get C199() {
      return C199 = dart.constList(["v. Chr.", "n. Chr."], StringL());
    },
    get C200() {
      return C200 = dart.constList(["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], StringL());
    },
    get C201() {
      return C201 = dart.constList(["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], StringL());
    },
    get C202() {
      return C202 = dart.constList(["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], StringL());
    },
    get C203() {
      return C203 = dart.constList(["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], StringL());
    },
    get C204() {
      return C204 = dart.constList(["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], StringL());
    },
    get C205() {
      return C205 = dart.constList(["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], StringL());
    },
    get C206() {
      return C206 = dart.constList(["S", "M", "D", "M", "D", "F", "S"], StringL());
    },
    get C207() {
      return C207 = dart.constList(["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], StringL());
    },
    get C208() {
      return C208 = dart.constList(["vorm.", "nachm."], StringL());
    },
    get C209() {
      return C209 = dart.constList(["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.y", "dd.MM.yy"], StringL());
    },
    get C210() {
      return C210 = dart.constList(["{1} 'um' {0}", "{1} 'um' {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C211() {
      return C211 = dart.constList(["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], StringL());
    },
    get C212() {
      return C212 = dart.constList(["Jän.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], StringL());
    },
    get C213() {
      return C213 = dart.constList(["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], StringL());
    },
    get C214() {
      return C214 = dart.constList(["π.Χ.", "μ.Χ."], StringL());
    },
    get C215() {
      return C215 = dart.constList(["προ Χριστού", "μετά Χριστόν"], StringL());
    },
    get C216() {
      return C216 = dart.constList(["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"], StringL());
    },
    get C217() {
      return C217 = dart.constList(["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"], StringL());
    },
    get C218() {
      return C218 = dart.constList(["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"], StringL());
    },
    get C219() {
      return C219 = dart.constList(["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐ", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"], StringL());
    },
    get C220() {
      return C220 = dart.constList(["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"], StringL());
    },
    get C221() {
      return C221 = dart.constList(["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"], StringL());
    },
    get C222() {
      return C222 = dart.constList(["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"], StringL());
    },
    get C223() {
      return C223 = dart.constList(["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"], StringL());
    },
    get C224() {
      return C224 = dart.constList(["Τ1", "Τ2", "Τ3", "Τ4"], StringL());
    },
    get C225() {
      return C225 = dart.constList(["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"], StringL());
    },
    get C226() {
      return C226 = dart.constList(["π.μ.", "μ.μ."], StringL());
    },
    get C227() {
      return C227 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], StringL());
    },
    get C228() {
      return C228 = dart.constList(["{1} - {0}", "{1} - {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C229() {
      return C229 = dart.constList(["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."], StringL());
    },
    get C230() {
      return C230 = dart.constList(["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."], StringL());
    },
    get C231() {
      return C231 = dart.constList(["Su.", "M.", "Tu.", "W.", "Th.", "F.", "Sa."], StringL());
    },
    get C232() {
      return C232 = dart.constList(["am", "pm"], StringL());
    },
    get C233() {
      return C233 = dart.constList(["a.m.", "p.m."], StringL());
    },
    get C234() {
      return C234 = dart.constList(["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "y-MM-dd"], StringL());
    },
    get C235() {
      return C235 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], StringL());
    },
    get C236() {
      return C236 = dart.constList(["EEEE, d MMMM, y", "d MMMM y", "dd-MMM-y", "dd/MM/yy"], StringL());
    },
    get C237() {
      return C237 = dart.constList([6, 6], intL());
    },
    get C238() {
      return C238 = dart.constList(["EEEE, dd MMMM y", "dd MMMM y", "dd MMM y", "y/MM/dd"], StringL());
    },
    get C239() {
      return C239 = dart.constList(["a. C.", "d. C."], StringL());
    },
    get C240() {
      return C240 = dart.constList(["antes de Cristo", "después de Cristo"], StringL());
    },
    get C241() {
      return C241 = dart.constList(["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], StringL());
    },
    get C242() {
      return C242 = dart.constList(["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"], StringL());
    },
    get C243() {
      return C243 = dart.constList(["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."], StringL());
    },
    get C244() {
      return C244 = dart.constList(["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], StringL());
    },
    get C245() {
      return C245 = dart.constList(["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."], StringL());
    },
    get C246() {
      return C246 = dart.constList(["D", "L", "M", "X", "J", "V", "S"], StringL());
    },
    get C247() {
      return C247 = dart.constList(["T1", "T2", "T3", "T4"], StringL());
    },
    get C248() {
      return C248 = dart.constList(["1.er trimestre", "2.º trimestre", "3.er trimestre", "4.º trimestre"], StringL());
    },
    get C249() {
      return C249 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "d/M/yy"], StringL());
    },
    get C250() {
      return C250 = dart.constList(["H:mm:ss (zzzz)", "H:mm:ss z", "H:mm:ss", "H:mm"], StringL());
    },
    get C251() {
      return C251 = dart.constList(["{1}, {0}", "{1}, {0}", "{1} {0}", "{1} {0}"], StringL());
    },
    get C252() {
      return C252 = dart.constList(["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."], StringL());
    },
    get C253() {
      return C253 = dart.constList(["d", "l", "m", "m", "j", "v", "s"], StringL());
    },
    get C254() {
      return C254 = dart.constList(["D", "L", "M", "M", "J", "V", "S"], StringL());
    },
    get C255() {
      return C255 = dart.constList(["1.º trimestre", "2.º trimestre", "3.º trimestre", "4.º trimestre"], StringL());
    },
    get C256() {
      return C256 = dart.constList(["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], StringL());
    },
    get C257() {
      return C257 = dart.constList(["1er. trim.", "2º. trim.", "3er. trim.", "4º trim."], StringL());
    },
    get C258() {
      return C258 = dart.constList(["1.er trimestre", "2º. trimestre", "3.er trimestre", "4o. trimestre"], StringL());
    },
    get C259() {
      return C259 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "dd/MM/yy"], StringL());
    },
    get C260() {
      return C260 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "d/M/y"], StringL());
    },
    get C261() {
      return C261 = dart.constList(["eKr", "pKr"], StringL());
    },
    get C262() {
      return C262 = dart.constList(["enne Kristust", "pärast Kristust"], StringL());
    },
    get C263() {
      return C263 = dart.constList(["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], StringL());
    },
    get C264() {
      return C264 = dart.constList(["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"], StringL());
    },
    get C265() {
      return C265 = dart.constList(["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"], StringL());
    },
    get C266() {
      return C266 = dart.constList(["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"], StringL());
    },
    get C267() {
      return C267 = dart.constList(["P", "E", "T", "K", "N", "R", "L"], StringL());
    },
    get C268() {
      return C268 = dart.constList(["EEEE, d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.yy"], StringL());
    },
    get C269() {
      return C269 = dart.constList(["K.a.", "K.o."], StringL());
    },
    get C270() {
      return C270 = dart.constList(["K.a.", "Kristo ondoren"], StringL());
    },
    get C271() {
      return C271 = dart.constList(["U", "O", "M", "A", "M", "E", "U", "A", "I", "U", "A", "A"], StringL());
    },
    get C272() {
      return C272 = dart.constList(["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"], StringL());
    },
    get C273() {
      return C273 = dart.constList(["urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"], StringL());
    },
    get C274() {
      return C274 = dart.constList(["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe."], StringL());
    },
    get C275() {
      return C275 = dart.constList(["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"], StringL());
    },
    get C276() {
      return C276 = dart.constList(["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"], StringL());
    },
    get C277() {
      return C277 = dart.constList(["ig.", "al.", "ar.", "az.", "og.", "or.", "lr."], StringL());
    },
    get C278() {
      return C278 = dart.constList(["I", "A", "A", "A", "O", "O", "L"], StringL());
    },
    get C279() {
      return C279 = dart.constList(["1Hh", "2Hh", "3Hh", "4Hh"], StringL());
    },
    get C280() {
      return C280 = dart.constList(["1. hiruhilekoa", "2. hiruhilekoa", "3. hiruhilekoa", "4. hiruhilekoa"], StringL());
    },
    get C281() {
      return C281 = dart.constList(["y('e')'ko' MMMM'ren' d('a'), EEEE", "y('e')'ko' MMMM'ren' d('a')", "y MMM d", "yy/M/d"], StringL());
    },
    get C282() {
      return C282 = dart.constList(["HH:mm:ss (zzzz)", "HH:mm:ss (z)", "HH:mm:ss", "HH:mm"], StringL());
    },
    get C283() {
      return C283 = dart.constList(["ق.م.", "م."], StringL());
    },
    get C284() {
      return C284 = dart.constList(["قبل از میلاد", "میلادی"], StringL());
    },
    get C285() {
      return C285 = dart.constList(["ژ", "ف", "م", "آ", "م", "ژ", "ژ", "ا", "س", "ا", "ن", "د"], StringL());
    },
    get C286() {
      return C286 = dart.constList(["ژانویهٔ", "فوریهٔ", "مارس", "آوریل", "مهٔ", "ژوئن", "ژوئیهٔ", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], StringL());
    },
    get C287() {
      return C287 = dart.constList(["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], StringL());
    },
    get C288() {
      return C288 = dart.constList(["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], StringL());
    },
    get C289() {
      return C289 = dart.constList(["ی", "د", "س", "چ", "پ", "ج", "ش"], StringL());
    },
    get C290() {
      return C290 = dart.constList(["س‌م۱", "س‌م۲", "س‌م۳", "س‌م۴"], StringL());
    },
    get C291() {
      return C291 = dart.constList(["سه‌ماههٔ اول", "سه‌ماههٔ دوم", "سه‌ماههٔ سوم", "سه‌ماههٔ چهارم"], StringL());
    },
    get C292() {
      return C292 = dart.constList(["قبل‌ازظهر", "بعدازظهر"], StringL());
    },
    get C293() {
      return C293 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "y/M/d"], StringL());
    },
    get C294() {
      return C294 = dart.constList(["H:mm:ss (zzzz)", "H:mm:ss (z)", "H:mm:ss", "H:mm"], StringL());
    },
    get C295() {
      return C295 = dart.constList(["{1}، ساعت {0}", "{1}، ساعت {0}", "{1}،‏ {0}", "{1}،‏ {0}"], StringL());
    },
    get C296() {
      return C296 = dart.constList([4, 4], intL());
    },
    get C297() {
      return C297 = dart.constList(["eKr.", "jKr."], StringL());
    },
    get C298() {
      return C298 = dart.constList(["ennen Kristuksen syntymää", "jälkeen Kristuksen syntymän"], StringL());
    },
    get C299() {
      return C299 = dart.constList(["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"], StringL());
    },
    get C300() {
      return C300 = dart.constList(["tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta", "kesäkuuta", "heinäkuuta", "elokuuta", "syyskuuta", "lokakuuta", "marraskuuta", "joulukuuta"], StringL());
    },
    get C301() {
      return C301 = dart.constList(["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"], StringL());
    },
    get C302() {
      return C302 = dart.constList(["tammik.", "helmik.", "maalisk.", "huhtik.", "toukok.", "kesäk.", "heinäk.", "elok.", "syysk.", "lokak.", "marrask.", "jouluk."], StringL());
    },
    get C303() {
      return C303 = dart.constList(["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"], StringL());
    },
    get C304() {
      return C304 = dart.constList(["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"], StringL());
    },
    get C305() {
      return C305 = dart.constList(["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"], StringL());
    },
    get C306() {
      return C306 = dart.constList(["su", "ma", "ti", "ke", "to", "pe", "la"], StringL());
    },
    get C307() {
      return C307 = dart.constList(["S", "M", "T", "K", "T", "P", "L"], StringL());
    },
    get C308() {
      return C308 = dart.constList(["1. nelj.", "2. nelj.", "3. nelj.", "4. nelj."], StringL());
    },
    get C309() {
      return C309 = dart.constList(["1. neljännes", "2. neljännes", "3. neljännes", "4. neljännes"], StringL());
    },
    get C310() {
      return C310 = dart.constList(["ap.", "ip."], StringL());
    },
    get C311() {
      return C311 = dart.constList(["cccc d. MMMM y", "d. MMMM y", "d.M.y", "d.M.y"], StringL());
    },
    get C312() {
      return C312 = dart.constList(["H.mm.ss zzzz", "H.mm.ss z", "H.mm.ss", "H.mm"], StringL());
    },
    get C313() {
      return C313 = dart.constList(["{1} 'klo' {0}", "{1} 'klo' {0}", "{1} 'klo' {0}", "{1} {0}"], StringL());
    },
    get C314() {
      return C314 = dart.constList(["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], StringL());
    },
    get C315() {
      return C315 = dart.constList(["E", "P", "M", "A", "M", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], StringL());
    },
    get C316() {
      return C316 = dart.constList(["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"], StringL());
    },
    get C317() {
      return C317 = dart.constList(["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"], StringL());
    },
    get C318() {
      return C318 = dart.constList(["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"], StringL());
    },
    get C319() {
      return C319 = dart.constList(["ika-1 quarter", "ika-2 quarter", "ika-3 quarter", "ika-4 na quarter"], StringL());
    },
    get C320() {
      return C320 = dart.constList(["{1} 'nang' {0}", "{1} 'nang' {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C321() {
      return C321 = dart.constList(["av. J.-C.", "ap. J.-C."], StringL());
    },
    get C322() {
      return C322 = dart.constList(["avant Jésus-Christ", "après Jésus-Christ"], StringL());
    },
    get C323() {
      return C323 = dart.constList(["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"], StringL());
    },
    get C324() {
      return C324 = dart.constList(["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], StringL());
    },
    get C325() {
      return C325 = dart.constList(["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], StringL());
    },
    get C326() {
      return C326 = dart.constList(["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], StringL());
    },
    get C327() {
      return C327 = dart.constList(["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"], StringL());
    },
    get C328() {
      return C328 = dart.constList(["{1} 'à' {0}", "{1} 'à' {0}", "{1} 'à' {0}", "{1} {0}"], StringL());
    },
    get C329() {
      return C329 = dart.constList(["janv.", "févr.", "mars", "avr.", "mai", "juin", "juill.", "août", "sept.", "oct.", "nov.", "déc."], StringL());
    },
    get C330() {
      return C330 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "yy-MM-dd"], StringL());
    },
    get C331() {
      return C331 = dart.constList(["HH 'h' mm 'min' ss 's' zzzz", "HH 'h' mm 'min' ss 's' z", "HH 'h' mm 'min' ss 's'", "HH 'h' mm"], StringL());
    },
    get C332() {
      return C332 = dart.constList(["{1} 'à' {0}", "{1} 'à' {0}", "{1} {0}", "{1} {0}"], StringL());
    },
    get C333() {
      return C333 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd.MM.yy"], StringL());
    },
    get C334() {
      return C334 = dart.constList(["HH.mm:ss 'h' zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], StringL());
    },
    get C335() {
      return C335 = dart.constList(["RC", "AD"], StringL());
    },
    get C336() {
      return C336 = dart.constList(["Roimh Chríost", "Anno Domini"], StringL());
    },
    get C337() {
      return C337 = dart.constList(["E", "F", "M", "A", "B", "M", "I", "L", "M", "D", "S", "N"], StringL());
    },
    get C338() {
      return C338 = dart.constList(["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"], StringL());
    },
    get C339() {
      return C339 = dart.constList(["Ean", "Feabh", "Márta", "Aib", "Beal", "Meith", "Iúil", "Lún", "MFómh", "DFómh", "Samh", "Noll"], StringL());
    },
    get C340() {
      return C340 = dart.constList(["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"], StringL());
    },
    get C341() {
      return C341 = dart.constList(["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"], StringL());
    },
    get C342() {
      return C342 = dart.constList(["D", "L", "M", "C", "D", "A", "S"], StringL());
    },
    get C343() {
      return C343 = dart.constList(["R1", "R2", "R3", "R4"], StringL());
    },
    get C344() {
      return C344 = dart.constList(["1ú ráithe", "2ú ráithe", "3ú ráithe", "4ú ráithe"], StringL());
    },
    get C345() {
      return C345 = dart.constList(["r.n.", "i.n."], StringL());
    },
    get C346() {
      return C346 = dart.constList(["a.C.", "d.C."], StringL());
    },
    get C347() {
      return C347 = dart.constList(["antes de Cristo", "despois de Cristo"], StringL());
    },
    get C348() {
      return C348 = dart.constList(["x.", "f.", "m.", "a.", "m.", "x.", "x.", "a.", "s.", "o.", "n.", "d."], StringL());
    },
    get C349() {
      return C349 = dart.constList(["X", "F", "M", "A", "M", "X", "X", "A", "S", "O", "N", "D"], StringL());
    },
    get C350() {
      return C350 = dart.constList(["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"], StringL());
    },
    get C351() {
      return C351 = dart.constList(["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"], StringL());
    },
    get C352() {
      return C352 = dart.constList(["xan.", "feb.", "mar.", "abr.", "maio", "xuño", "xul.", "ago.", "set.", "out.", "nov.", "dec."], StringL());
    },
    get C353() {
      return C353 = dart.constList(["Xan.", "Feb.", "Mar.", "Abr.", "Maio", "Xuño", "Xul.", "Ago.", "Set.", "Out.", "Nov.", "Dec."], StringL());
    },
    get C354() {
      return C354 = dart.constList(["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"], StringL());
    },
    get C355() {
      return C355 = dart.constList(["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"], StringL());
    },
    get C356() {
      return C356 = dart.constList(["dom.", "luns", "mar.", "mér.", "xov.", "ven.", "sáb."], StringL());
    },
    get C357() {
      return C357 = dart.constList(["Dom.", "Luns", "Mar.", "Mér.", "Xov.", "Ven.", "Sáb."], StringL());
    },
    get C358() {
      return C358 = dart.constList(["d.", "l.", "m.", "m.", "x.", "v.", "s."], StringL());
    },
    get C359() {
      return C359 = dart.constList(["D", "L", "M", "M", "X", "V", "S"], StringL());
    },
    get C360() {
      return C360 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "dd/MM/y", "dd/MM/yy"], StringL());
    },
    get C361() {
      return C361 = dart.constList(["{0} 'do' {1}", "{0} 'do' {1}", "{0}, {1}", "{0}, {1}"], StringL());
    },
    get C362() {
      return C362 = dart.constList(["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "Auguscht", "Septämber", "Oktoober", "Novämber", "Dezämber"], StringL());
    },
    get C363() {
      return C363 = dart.constList(["Sunntig", "Määntig", "Ziischtig", "Mittwuch", "Dunschtig", "Friitig", "Samschtig"], StringL());
    },
    get C364() {
      return C364 = dart.constList(["Su.", "Mä.", "Zi.", "Mi.", "Du.", "Fr.", "Sa."], StringL());
    },
    get C365() {
      return C365 = dart.constList(["am Vormittag", "am Namittag"], StringL());
    },
    get C366() {
      return C366 = dart.constList(["ઈ.સ.પૂર્વે", "ઈ.સ."], StringL());
    },
    get C367() {
      return C367 = dart.constList(["ઈસવીસન પૂર્વે", "ઇસવીસન"], StringL());
    },
    get C368() {
      return C368 = dart.constList(["જા", "ફે", "મા", "એ", "મે", "જૂ", "જુ", "ઑ", "સ", "ઑ", "ન", "ડિ"], StringL());
    },
    get C369() {
      return C369 = dart.constList(["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટેમ્બર", "ઑક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"], StringL());
    },
    get C370() {
      return C370 = dart.constList(["જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટે", "ઑક્ટો", "નવે", "ડિસે"], StringL());
    },
    get C371() {
      return C371 = dart.constList(["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"], StringL());
    },
    get C372() {
      return C372 = dart.constList(["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"], StringL());
    },
    get C373() {
      return C373 = dart.constList(["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"], StringL());
    },
    get C374() {
      return C374 = dart.constList(["1લો ત્રિમાસ", "2જો ત્રિમાસ", "3જો ત્રિમાસ", "4થો ત્રિમાસ"], StringL());
    },
    get C375() {
      return C375 = dart.constList(["hh:mm:ss a zzzz", "hh:mm:ss a z", "hh:mm:ss a", "hh:mm a"], StringL());
    },
    get C376() {
      return C376 = dart.constList(["{1} એ {0} વાગ્યે", "{1} એ {0} વાગ્યે", "{1} {0}", "{1} {0}"], StringL());
    },
    get C377() {
      return C377 = dart.constList(["BCE", "CE"], StringL());
    },
    get C378() {
      return C378 = dart.constList(["Ianuali", "Pepeluali", "Malaki", "ʻApelila", "Mei", "Iune", "Iulai", "ʻAukake", "Kepakemapa", "ʻOkakopa", "Nowemapa", "Kekemapa"], StringL());
    },
    get C379() {
      return C379 = dart.constList(["Ian.", "Pep.", "Mal.", "ʻAp.", "Mei", "Iun.", "Iul.", "ʻAu.", "Kep.", "ʻOk.", "Now.", "Kek."], StringL());
    },
    get C380() {
      return C380 = dart.constList(["Lāpule", "Poʻakahi", "Poʻalua", "Poʻakolu", "Poʻahā", "Poʻalima", "Poʻaono"], StringL());
    },
    get C381() {
      return C381 = dart.constList(["LP", "P1", "P2", "P3", "P4", "P5", "P6"], StringL());
    },
    get C382() {
      return C382 = dart.constList(["לפנה״ס", "לספירה"], StringL());
    },
    get C383() {
      return C383 = dart.constList(["לפני הספירה", "לספירה"], StringL());
    },
    get C384() {
      return C384 = dart.constList(["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], StringL());
    },
    get C385() {
      return C385 = dart.constList(["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"], StringL());
    },
    get C386() {
      return C386 = dart.constList(["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"], StringL());
    },
    get C387() {
      return C387 = dart.constList(["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"], StringL());
    },
    get C388() {
      return C388 = dart.constList(["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], StringL());
    },
    get C389() {
      return C389 = dart.constList(["רבעון 1", "רבעון 2", "רבעון 3", "רבעון 4"], StringL());
    },
    get C390() {
      return C390 = dart.constList(["לפנה״צ", "אחה״צ"], StringL());
    },
    get C391() {
      return C391 = dart.constList(["EEEE, d בMMMM y", "d בMMMM y", "d בMMM y", "d.M.y"], StringL());
    },
    get C392() {
      return C392 = dart.constList(["{1} בשעה {0}", "{1} בשעה {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C393() {
      return C393 = dart.constList(["ईसा-पूर्व", "ईस्वी"], StringL());
    },
    get C394() {
      return C394 = dart.constList(["ईसा-पूर्व", "ईसवी सन"], StringL());
    },
    get C395() {
      return C395 = dart.constList(["ज", "फ़", "मा", "अ", "म", "जू", "जु", "अ", "सि", "अ", "न", "दि"], StringL());
    },
    get C396() {
      return C396 = dart.constList(["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्तूबर", "नवंबर", "दिसंबर"], StringL());
    },
    get C397() {
      return C397 = dart.constList(["जन॰", "फ़र॰", "मार्च", "अप्रैल", "मई", "जून", "जुल॰", "अग॰", "सित॰", "अक्तू॰", "नव॰", "दिस॰"], StringL());
    },
    get C398() {
      return C398 = dart.constList(["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"], StringL());
    },
    get C399() {
      return C399 = dart.constList(["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"], StringL());
    },
    get C400() {
      return C400 = dart.constList(["र", "सो", "मं", "बु", "गु", "शु", "श"], StringL());
    },
    get C401() {
      return C401 = dart.constList(["ति1", "ति2", "ति3", "ति4"], StringL());
    },
    get C402() {
      return C402 = dart.constList(["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"], StringL());
    },
    get C403() {
      return C403 = dart.constList(["{1} को {0}", "{1} को {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C404() {
      return C404 = dart.constList(["pr. Kr.", "po. Kr."], StringL());
    },
    get C405() {
      return C405 = dart.constList(["prije Krista", "poslije Krista"], StringL());
    },
    get C406() {
      return C406 = dart.constList(["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], StringL());
    },
    get C407() {
      return C407 = dart.constList(["siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenoga", "prosinca"], StringL());
    },
    get C408() {
      return C408 = dart.constList(["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"], StringL());
    },
    get C409() {
      return C409 = dart.constList(["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], StringL());
    },
    get C410() {
      return C410 = dart.constList(["1kv", "2kv", "3kv", "4kv"], StringL());
    },
    get C411() {
      return C411 = dart.constList(["EEEE, d. MMMM y.", "d. MMMM y.", "d. MMM y.", "dd. MM. y."], StringL());
    },
    get C412() {
      return C412 = dart.constList(["HH:mm:ss (zzzz)", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], StringL());
    },
    get C413() {
      return C413 = dart.constList(["i. e.", "i. sz."], StringL());
    },
    get C414() {
      return C414 = dart.constList(["Krisztus előtt", "időszámításunk szerint"], StringL());
    },
    get C415() {
      return C415 = dart.constList(["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"], StringL());
    },
    get C416() {
      return C416 = dart.constList(["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"], StringL());
    },
    get C417() {
      return C417 = dart.constList(["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."], StringL());
    },
    get C418() {
      return C418 = dart.constList(["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"], StringL());
    },
    get C419() {
      return C419 = dart.constList(["V", "H", "K", "Sze", "Cs", "P", "Szo"], StringL());
    },
    get C420() {
      return C420 = dart.constList(["V", "H", "K", "Sz", "Cs", "P", "Sz"], StringL());
    },
    get C421() {
      return C421 = dart.constList(["I. n.év", "II. n.év", "III. n.év", "IV. n.év"], StringL());
    },
    get C422() {
      return C422 = dart.constList(["I. negyedév", "II. negyedév", "III. negyedév", "IV. negyedév"], StringL());
    },
    get C423() {
      return C423 = dart.constList(["de.", "du."], StringL());
    },
    get C424() {
      return C424 = dart.constList(["y. MMMM d., EEEE", "y. MMMM d.", "y. MMM d.", "y. MM. dd."], StringL());
    },
    get C425() {
      return C425 = dart.constList(["մ.թ.ա.", "մ.թ."], StringL());
    },
    get C426() {
      return C426 = dart.constList(["Քրիստոսից առաջ", "Քրիստոսից հետո"], StringL());
    },
    get C427() {
      return C427 = dart.constList(["Հ", "Փ", "Մ", "Ա", "Մ", "Հ", "Հ", "Օ", "Ս", "Հ", "Ն", "Դ"], StringL());
    },
    get C428() {
      return C428 = dart.constList(["հունվարի", "փետրվարի", "մարտի", "ապրիլի", "մայիսի", "հունիսի", "հուլիսի", "օգոստոսի", "սեպտեմբերի", "հոկտեմբերի", "նոյեմբերի", "դեկտեմբերի"], StringL());
    },
    get C429() {
      return C429 = dart.constList(["հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր"], StringL());
    },
    get C430() {
      return C430 = dart.constList(["հնվ", "փտվ", "մրտ", "ապր", "մյս", "հնս", "հլս", "օգս", "սեպ", "հոկ", "նոյ", "դեկ"], StringL());
    },
    get C431() {
      return C431 = dart.constList(["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"], StringL());
    },
    get C432() {
      return C432 = dart.constList(["կիր", "երկ", "երք", "չրք", "հնգ", "ուր", "շբթ"], StringL());
    },
    get C433() {
      return C433 = dart.constList(["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"], StringL());
    },
    get C434() {
      return C434 = dart.constList(["1-ին եռմս.", "2-րդ եռմս.", "3-րդ եռմս.", "4-րդ եռմս."], StringL());
    },
    get C435() {
      return C435 = dart.constList(["1-ին եռամսյակ", "2-րդ եռամսյակ", "3-րդ եռամսյակ", "4-րդ եռամսյակ"], StringL());
    },
    get C436() {
      return C436 = dart.constList(["ԿԱ", "ԿՀ"], StringL());
    },
    get C437() {
      return C437 = dart.constList(["y թ. MMMM d, EEEE", "dd MMMM, y թ.", "dd MMM, y թ.", "dd.MM.yy"], StringL());
    },
    get C438() {
      return C438 = dart.constList(["SM", "M"], StringL());
    },
    get C439() {
      return C439 = dart.constList(["Sebelum Masehi", "Masehi"], StringL());
    },
    get C440() {
      return C440 = dart.constList(["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], StringL());
    },
    get C441() {
      return C441 = dart.constList(["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"], StringL());
    },
    get C442() {
      return C442 = dart.constList(["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], StringL());
    },
    get C443() {
      return C443 = dart.constList(["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], StringL());
    },
    get C444() {
      return C444 = dart.constList(["M", "S", "S", "R", "K", "J", "S"], StringL());
    },
    get C445() {
      return C445 = dart.constList(["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"], StringL());
    },
    get C446() {
      return C446 = dart.constList(["EEEE, dd MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], StringL());
    },
    get C447() {
      return C447 = dart.constList(["fyrir Krist", "eftir Krist"], StringL());
    },
    get C448() {
      return C448 = dart.constList(["J", "F", "M", "A", "M", "J", "J", "Á", "S", "O", "N", "D"], StringL());
    },
    get C449() {
      return C449 = dart.constList(["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"], StringL());
    },
    get C450() {
      return C450 = dart.constList(["jan.", "feb.", "mar.", "apr.", "maí", "jún.", "júl.", "ágú.", "sep.", "okt.", "nóv.", "des."], StringL());
    },
    get C451() {
      return C451 = dart.constList(["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"], StringL());
    },
    get C452() {
      return C452 = dart.constList(["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."], StringL());
    },
    get C453() {
      return C453 = dart.constList(["S", "M", "Þ", "M", "F", "F", "L"], StringL());
    },
    get C454() {
      return C454 = dart.constList(["F1", "F2", "F3", "F4"], StringL());
    },
    get C455() {
      return C455 = dart.constList(["1. fjórðungur", "2. fjórðungur", "3. fjórðungur", "4. fjórðungur"], StringL());
    },
    get C456() {
      return C456 = dart.constList(["f.h.", "e.h."], StringL());
    },
    get C457() {
      return C457 = dart.constList(["EEEE, d. MMMM y", "d. MMMM y", "d. MMM y", "d.M.y"], StringL());
    },
    get C458() {
      return C458 = dart.constList(["{1} 'kl'. {0}", "{1} 'kl'. {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C459() {
      return C459 = dart.constList(["avanti Cristo", "dopo Cristo"], StringL());
    },
    get C460() {
      return C460 = dart.constList(["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], StringL());
    },
    get C461() {
      return C461 = dart.constList(["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"], StringL());
    },
    get C462() {
      return C462 = dart.constList(["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], StringL());
    },
    get C463() {
      return C463 = dart.constList(["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"], StringL());
    },
    get C464() {
      return C464 = dart.constList(["dom", "lun", "mar", "mer", "gio", "ven", "sab"], StringL());
    },
    get C465() {
      return C465 = dart.constList(["D", "L", "M", "M", "G", "V", "S"], StringL());
    },
    get C466() {
      return C466 = dart.constList(["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"], StringL());
    },
    get C467() {
      return C467 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], StringL());
    },
    get C468() {
      return C468 = dart.constList(["{1} {0}", "{1} {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C469() {
      return C469 = dart.constList(["紀元前", "西暦"], StringL());
    },
    get C470() {
      return C470 = dart.constList(["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], StringL());
    },
    get C471() {
      return C471 = dart.constList(["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"], StringL());
    },
    get C472() {
      return C472 = dart.constList(["日", "月", "火", "水", "木", "金", "土"], StringL());
    },
    get C473() {
      return C473 = dart.constList(["第1四半期", "第2四半期", "第3四半期", "第4四半期"], StringL());
    },
    get C474() {
      return C474 = dart.constList(["午前", "午後"], StringL());
    },
    get C475() {
      return C475 = dart.constList(["y年M月d日EEEE", "y年M月d日", "y/MM/dd", "y/MM/dd"], StringL());
    },
    get C476() {
      return C476 = dart.constList(["H時mm分ss秒 zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], StringL());
    },
    get C477() {
      return C477 = dart.constList(["ძვ. წ.", "ახ. წ."], StringL());
    },
    get C478() {
      return C478 = dart.constList(["ძველი წელთაღრიცხვით", "ახალი წელთაღრიცხვით"], StringL());
    },
    get C479() {
      return C479 = dart.constList(["ი", "თ", "მ", "ა", "მ", "ი", "ი", "ა", "ს", "ო", "ნ", "დ"], StringL());
    },
    get C480() {
      return C480 = dart.constList(["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"], StringL());
    },
    get C481() {
      return C481 = dart.constList(["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"], StringL());
    },
    get C482() {
      return C482 = dart.constList(["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"], StringL());
    },
    get C483() {
      return C483 = dart.constList(["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"], StringL());
    },
    get C484() {
      return C484 = dart.constList(["კ", "ო", "ს", "ო", "ხ", "პ", "შ"], StringL());
    },
    get C485() {
      return C485 = dart.constList(["I კვ.", "II კვ.", "III კვ.", "IV კვ."], StringL());
    },
    get C486() {
      return C486 = dart.constList(["I კვარტალი", "II კვარტალი", "III კვარტალი", "IV კვარტალი"], StringL());
    },
    get C487() {
      return C487 = dart.constList(["EEEE, dd MMMM, y", "d MMMM, y", "d MMM. y", "dd.MM.yy"], StringL());
    },
    get C488() {
      return C488 = dart.constList(["б.з.д.", "б.з."], StringL());
    },
    get C489() {
      return C489 = dart.constList(["Біздің заманымызға дейін", "біздің заманымыз"], StringL());
    },
    get C490() {
      return C490 = dart.constList(["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"], StringL());
    },
    get C491() {
      return C491 = dart.constList(["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"], StringL());
    },
    get C492() {
      return C492 = dart.constList(["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"], StringL());
    },
    get C493() {
      return C493 = dart.constList(["қаң.", "ақп.", "нау.", "сәу.", "мам.", "мау.", "шіл.", "там.", "қыр.", "қаз.", "қар.", "жел."], StringL());
    },
    get C494() {
      return C494 = dart.constList(["Қаң.", "Ақп.", "Нау.", "Сәу.", "Мам.", "Мау.", "Шіл.", "Там.", "Қыр.", "Қаз.", "Қар.", "Жел."], StringL());
    },
    get C495() {
      return C495 = dart.constList(["жексенбі", "дүйсенбі", "сейсенбі", "сәрсенбі", "бейсенбі", "жұма", "сенбі"], StringL());
    },
    get C496() {
      return C496 = dart.constList(["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"], StringL());
    },
    get C497() {
      return C497 = dart.constList(["Жс", "Дс", "Сс", "Ср", "Бс", "Жм", "Сб"], StringL());
    },
    get C498() {
      return C498 = dart.constList(["Ж", "Д", "С", "С", "Б", "Ж", "С"], StringL());
    },
    get C499() {
      return C499 = dart.constList(["І тқс.", "ІІ тқс.", "ІІІ тқс.", "IV тқс."], StringL());
    },
    get C500() {
      return C500 = dart.constList(["І тоқсан", "ІІ тоқсан", "ІІІ тоқсан", "IV тоқсан"], StringL());
    },
    get C501() {
      return C501 = dart.constList(["y 'ж'. d MMMM, EEEE", "y 'ж'. d MMMM", "y 'ж'. dd MMM", "dd.MM.yy"], StringL());
    },
    get C502() {
      return C502 = dart.constList(["មុន គ.ស.", "គ.ស."], StringL());
    },
    get C503() {
      return C503 = dart.constList(["មុន​គ្រិស្តសករាជ", "គ្រិស្តសករាជ"], StringL());
    },
    get C504() {
      return C504 = dart.constList(["ម", "ក", "ម", "ម", "ឧ", "ម", "ក", "ស", "ក", "ត", "វ", "ធ"], StringL());
    },
    get C505() {
      return C505 = dart.constList(["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"], StringL());
    },
    get C506() {
      return C506 = dart.constList(["អាទិត្យ", "ច័ន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"], StringL());
    },
    get C507() {
      return C507 = dart.constList(["អ", "ច", "អ", "ព", "ព", "ស", "ស"], StringL());
    },
    get C508() {
      return C508 = dart.constList(["ត្រីមាសទី 1", "ត្រីមាសទី 2", "ត្រីមាសទី 3", "ត្រីមាសទី 4"], StringL());
    },
    get C509() {
      return C509 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], StringL());
    },
    get C510() {
      return C510 = dart.constList(["{1} នៅ​ម៉ោង {0}", "{1} នៅ​ម៉ោង {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C511() {
      return C511 = dart.constList(["ಕ್ರಿ.ಪೂ", "ಕ್ರಿ.ಶ"], StringL());
    },
    get C512() {
      return C512 = dart.constList(["ಕ್ರಿಸ್ತ ಪೂರ್ವ", "ಕ್ರಿಸ್ತ ಶಕ"], StringL());
    },
    get C513() {
      return C513 = dart.constList(["ಜ", "ಫೆ", "ಮಾ", "ಏ", "ಮೇ", "ಜೂ", "ಜು", "ಆ", "ಸೆ", "ಅ", "ನ", "ಡಿ"], StringL());
    },
    get C514() {
      return C514 = dart.constList(["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"], StringL());
    },
    get C515() {
      return C515 = dart.constList(["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿ", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗ", "ಸೆಪ್ಟೆಂ", "ಅಕ್ಟೋ", "ನವೆಂ", "ಡಿಸೆಂ"], StringL());
    },
    get C516() {
      return C516 = dart.constList(["ಜನ", "ಫೆಬ್ರ", "ಮಾರ್ಚ್", "ಏಪ್ರಿ", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗ", "ಸೆಪ್ಟೆಂ", "ಅಕ್ಟೋ", "ನವೆಂ", "ಡಿಸೆಂ"], StringL());
    },
    get C517() {
      return C517 = dart.constList(["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"], StringL());
    },
    get C518() {
      return C518 = dart.constList(["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"], StringL());
    },
    get C519() {
      return C519 = dart.constList(["ಭಾ", "ಸೋ", "ಮಂ", "ಬು", "ಗು", "ಶು", "ಶ"], StringL());
    },
    get C520() {
      return C520 = dart.constList(["ತ್ರೈ 1", "ತ್ರೈ 2", "ತ್ರೈ 3", "ತ್ರೈ 4"], StringL());
    },
    get C521() {
      return C521 = dart.constList(["1ನೇ ತ್ರೈಮಾಸಿಕ", "2ನೇ ತ್ರೈಮಾಸಿಕ", "3ನೇ ತ್ರೈಮಾಸಿಕ", "4ನೇ ತ್ರೈಮಾಸಿಕ"], StringL());
    },
    get C522() {
      return C522 = dart.constList(["ಪೂರ್ವಾಹ್ನ", "ಅಪರಾಹ್ನ"], StringL());
    },
    get C523() {
      return C523 = dart.constList(["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "d/M/yy"], StringL());
    },
    get C524() {
      return C524 = dart.constList(["기원전", "서기"], StringL());
    },
    get C525() {
      return C525 = dart.constList(["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], StringL());
    },
    get C526() {
      return C526 = dart.constList(["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], StringL());
    },
    get C527() {
      return C527 = dart.constList(["일", "월", "화", "수", "목", "금", "토"], StringL());
    },
    get C528() {
      return C528 = dart.constList(["1분기", "2분기", "3분기", "4분기"], StringL());
    },
    get C529() {
      return C529 = dart.constList(["제 1/4분기", "제 2/4분기", "제 3/4분기", "제 4/4분기"], StringL());
    },
    get C530() {
      return C530 = dart.constList(["오전", "오후"], StringL());
    },
    get C531() {
      return C531 = dart.constList(["y년 M월 d일 EEEE", "y년 M월 d일", "y. M. d.", "yy. M. d."], StringL());
    },
    get C532() {
      return C532 = dart.constList(["a h시 m분 s초 zzzz", "a h시 m분 s초 z", "a h:mm:ss", "a h:mm"], StringL());
    },
    get C533() {
      return C533 = dart.constList(["б.з.ч.", "б.з."], StringL());
    },
    get C534() {
      return C534 = dart.constList(["биздин заманга чейин", "биздин заман"], StringL());
    },
    get C535() {
      return C535 = dart.constList(["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], StringL());
    },
    get C536() {
      return C536 = dart.constList(["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"], StringL());
    },
    get C537() {
      return C537 = dart.constList(["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], StringL());
    },
    get C538() {
      return C538 = dart.constList(["янв.", "фев.", "мар.", "апр.", "май", "июн.", "июл.", "авг.", "сен.", "окт.", "ноя.", "дек."], StringL());
    },
    get C539() {
      return C539 = dart.constList(["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], StringL());
    },
    get C540() {
      return C540 = dart.constList(["жекшемби", "дүйшөмбү", "шейшемби", "шаршемби", "бейшемби", "жума", "ишемби"], StringL());
    },
    get C541() {
      return C541 = dart.constList(["жек.", "дүй.", "шейш.", "шарш.", "бейш.", "жума", "ишм."], StringL());
    },
    get C542() {
      return C542 = dart.constList(["Ж", "Д", "Ш", "Ш", "Б", "Ж", "И"], StringL());
    },
    get C543() {
      return C543 = dart.constList(["1-чей.", "2-чей.", "3-чей.", "4-чей."], StringL());
    },
    get C544() {
      return C544 = dart.constList(["1-чейрек", "2-чейрек", "3-чейрек", "4-чейрек"], StringL());
    },
    get C545() {
      return C545 = dart.constList(["таңкы", "түштөн кийинки"], StringL());
    },
    get C546() {
      return C546 = dart.constList(["y-'ж'., d-MMMM, EEEE", "y-'ж'., d-MMMM", "y-'ж'., d-MMM", "d/M/yy"], StringL());
    },
    get C547() {
      return C547 = dart.constList(["libóso ya", "nsima ya Y"], StringL());
    },
    get C548() {
      return C548 = dart.constList(["Yambo ya Yézu Krís", "Nsima ya Yézu Krís"], StringL());
    },
    get C549() {
      return C549 = dart.constList(["y", "f", "m", "a", "m", "y", "y", "a", "s", "ɔ", "n", "d"], StringL());
    },
    get C550() {
      return C550 = dart.constList(["sánzá ya yambo", "sánzá ya míbalé", "sánzá ya mísáto", "sánzá ya mínei", "sánzá ya mítáno", "sánzá ya motóbá", "sánzá ya nsambo", "sánzá ya mwambe", "sánzá ya libwa", "sánzá ya zómi", "sánzá ya zómi na mɔ̌kɔ́", "sánzá ya zómi na míbalé"], StringL());
    },
    get C551() {
      return C551 = dart.constList(["yan", "fbl", "msi", "apl", "mai", "yun", "yul", "agt", "stb", "ɔtb", "nvb", "dsb"], StringL());
    },
    get C552() {
      return C552 = dart.constList(["eyenga", "mokɔlɔ mwa yambo", "mokɔlɔ mwa míbalé", "mokɔlɔ mwa mísáto", "mokɔlɔ ya mínéi", "mokɔlɔ ya mítáno", "mpɔ́sɔ"], StringL());
    },
    get C553() {
      return C553 = dart.constList(["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"], StringL());
    },
    get C554() {
      return C554 = dart.constList(["e", "y", "m", "m", "m", "m", "p"], StringL());
    },
    get C555() {
      return C555 = dart.constList(["SM1", "SM2", "SM3", "SM4"], StringL());
    },
    get C556() {
      return C556 = dart.constList(["sánzá mísáto ya yambo", "sánzá mísáto ya míbalé", "sánzá mísáto ya mísáto", "sánzá mísáto ya mínei"], StringL());
    },
    get C557() {
      return C557 = dart.constList(["ntɔ́ngɔ́", "mpókwa"], StringL());
    },
    get C558() {
      return C558 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "d/M/y"], StringL());
    },
    get C559() {
      return C559 = dart.constList(["ກ່ອນ ຄ.ສ.", "ຄ.ສ."], StringL());
    },
    get C560() {
      return C560 = dart.constList(["ກ່ອນຄຣິດສັກກະລາດ", "ຄຣິດສັກກະລາດ"], StringL());
    },
    get C561() {
      return C561 = dart.constList(["ມັງກອນ", "ກຸມພາ", "ມີນາ", "ເມສາ", "ພຶດສະພາ", "ມິຖຸນາ", "ກໍລະກົດ", "ສິງຫາ", "ກັນຍາ", "ຕຸລາ", "ພະຈິກ", "ທັນວາ"], StringL());
    },
    get C562() {
      return C562 = dart.constList(["ມ.ກ.", "ກ.ພ.", "ມ.ນ.", "ມ.ສ.", "ພ.ພ.", "ມິ.ຖ.", "ກ.ລ.", "ສ.ຫ.", "ກ.ຍ.", "ຕ.ລ.", "ພ.ຈ.", "ທ.ວ."], StringL());
    },
    get C563() {
      return C563 = dart.constList(["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ", "ວັນພະຫັດ", "ວັນສຸກ", "ວັນເສົາ"], StringL());
    },
    get C564() {
      return C564 = dart.constList(["ອາທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", "ເສົາ"], StringL());
    },
    get C565() {
      return C565 = dart.constList(["ອາ", "ຈ", "ອ", "ພ", "ພຫ", "ສຸ", "ສ"], StringL());
    },
    get C566() {
      return C566 = dart.constList(["ຕມ1", "ຕມ2", "ຕມ3", "ຕມ4"], StringL());
    },
    get C567() {
      return C567 = dart.constList(["ໄຕຣມາດ 1", "ໄຕຣມາດ 2", "ໄຕຣມາດ 3", "ໄຕຣມາດ 4"], StringL());
    },
    get C568() {
      return C568 = dart.constList(["ກ່ອນທ່ຽງ", "ຫຼັງທ່ຽງ"], StringL());
    },
    get C569() {
      return C569 = dart.constList(["EEEE ທີ d MMMM G y", "d MMMM y", "d MMM y", "d/M/y"], StringL());
    },
    get C570() {
      return C570 = dart.constList(["H ໂມງ m ນາທີ ss ວິນາທີ zzzz", "H ໂມງ m ນາທີ ss ວິນາທີ z", "H:mm:ss", "H:mm"], StringL());
    },
    get C571() {
      return C571 = dart.constList(["pr. Kr.", "po Kr."], StringL());
    },
    get C572() {
      return C572 = dart.constList(["prieš Kristų", "po Kristaus"], StringL());
    },
    get C573() {
      return C573 = dart.constList(["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], StringL());
    },
    get C574() {
      return C574 = dart.constList(["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"], StringL());
    },
    get C575() {
      return C575 = dart.constList(["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis"], StringL());
    },
    get C576() {
      return C576 = dart.constList(["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], StringL());
    },
    get C577() {
      return C577 = dart.constList(["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"], StringL());
    },
    get C578() {
      return C578 = dart.constList(["sk", "pr", "an", "tr", "kt", "pn", "št"], StringL());
    },
    get C579() {
      return C579 = dart.constList(["S", "P", "A", "T", "K", "P", "Š"], StringL());
    },
    get C580() {
      return C580 = dart.constList(["I k.", "II k.", "III k.", "IV k."], StringL());
    },
    get C581() {
      return C581 = dart.constList(["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"], StringL());
    },
    get C582() {
      return C582 = dart.constList(["priešpiet", "popiet"], StringL());
    },
    get C583() {
      return C583 = dart.constList(["y 'm'. MMMM d 'd'., EEEE", "y 'm'. MMMM d 'd'.", "y-MM-dd", "y-MM-dd"], StringL());
    },
    get C584() {
      return C584 = dart.constList(["p.m.ē.", "m.ē."], StringL());
    },
    get C585() {
      return C585 = dart.constList(["pirms mūsu ēras", "mūsu ērā"], StringL());
    },
    get C586() {
      return C586 = dart.constList(["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris"], StringL());
    },
    get C587() {
      return C587 = dart.constList(["janv.", "febr.", "marts", "apr.", "maijs", "jūn.", "jūl.", "aug.", "sept.", "okt.", "nov.", "dec."], StringL());
    },
    get C588() {
      return C588 = dart.constList(["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"], StringL());
    },
    get C589() {
      return C589 = dart.constList(["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"], StringL());
    },
    get C590() {
      return C590 = dart.constList(["svētd.", "pirmd.", "otrd.", "trešd.", "ceturtd.", "piektd.", "sestd."], StringL());
    },
    get C591() {
      return C591 = dart.constList(["Svētd.", "Pirmd.", "Otrd.", "Trešd.", "Ceturtd.", "Piektd.", "Sestd."], StringL());
    },
    get C592() {
      return C592 = dart.constList(["S", "P", "O", "T", "C", "P", "S"], StringL());
    },
    get C593() {
      return C593 = dart.constList(["1. cet.", "2. cet.", "3. cet.", "4. cet."], StringL());
    },
    get C594() {
      return C594 = dart.constList(["1. ceturksnis", "2. ceturksnis", "3. ceturksnis", "4. ceturksnis"], StringL());
    },
    get C595() {
      return C595 = dart.constList(["priekšpusdienā", "pēcpusdienā"], StringL());
    },
    get C596() {
      return C596 = dart.constList(["EEEE, y. 'gada' d. MMMM", "y. 'gada' d. MMMM", "y. 'gada' d. MMM", "dd.MM.yy"], StringL());
    },
    get C597() {
      return C597 = dart.constList(["пр.н.е.", "н.е."], StringL());
    },
    get C598() {
      return C598 = dart.constList(["пред нашата ера", "од нашата ера"], StringL());
    },
    get C599() {
      return C599 = dart.constList(["ј", "ф", "м", "а", "м", "ј", "ј", "а", "с", "о", "н", "д"], StringL());
    },
    get C600() {
      return C600 = dart.constList(["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"], StringL());
    },
    get C601() {
      return C601 = dart.constList(["јан.", "фев.", "мар.", "апр.", "мај", "јун.", "јул.", "авг.", "септ.", "окт.", "ноем.", "дек."], StringL());
    },
    get C602() {
      return C602 = dart.constList(["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"], StringL());
    },
    get C603() {
      return C603 = dart.constList(["нед.", "пон.", "вт.", "сре.", "чет.", "пет.", "саб."], StringL());
    },
    get C604() {
      return C604 = dart.constList(["нед.", "пон.", "вто.", "сре.", "чет.", "пет.", "саб."], StringL());
    },
    get C605() {
      return C605 = dart.constList(["јан-мар", "апр-јун", "јул-сеп", "окт-дек"], StringL());
    },
    get C606() {
      return C606 = dart.constList(["прво тромесечје", "второ тромесечје", "трето тромесечје", "четврто тромесечје"], StringL());
    },
    get C607() {
      return C607 = dart.constList(["претпладне", "попладне"], StringL());
    },
    get C608() {
      return C608 = dart.constList(["EEEE, dd MMMM y", "dd MMMM y", "dd.M.y", "dd.M.yy"], StringL());
    },
    get C609() {
      return C609 = dart.constList(["ക്രി.മു.", "എഡി"], StringL());
    },
    get C610() {
      return C610 = dart.constList(["ക്രിസ്‌തുവിന് മുമ്പ്", "ആന്നോ ഡൊമിനി"], StringL());
    },
    get C611() {
      return C611 = dart.constList(["ജ", "ഫെ", "മാ", "ഏ", "മെ", "ജൂൺ", "ജൂ", "ഓ", "സെ", "ഒ", "ന", "ഡി"], StringL());
    },
    get C612() {
      return C612 = dart.constList(["ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്‌ടോബർ", "നവംബർ", "ഡിസംബർ"], StringL());
    },
    get C613() {
      return C613 = dart.constList(["ജനു", "ഫെബ്രു", "മാർ", "ഏപ്രി", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗ", "സെപ്റ്റം", "ഒക്ടോ", "നവം", "ഡിസം"], StringL());
    },
    get C614() {
      return C614 = dart.constList(["ഞായറാഴ്‌ച", "തിങ്കളാഴ്‌ച", "ചൊവ്വാഴ്ച", "ബുധനാഴ്‌ച", "വ്യാഴാഴ്‌ച", "വെള്ളിയാഴ്‌ച", "ശനിയാഴ്‌ച"], StringL());
    },
    get C615() {
      return C615 = dart.constList(["ഞായറാഴ്‌ച", "തിങ്കളാഴ്‌ച", "ചൊവ്വാഴ്‌ച", "ബുധനാഴ്‌ച", "വ്യാഴാഴ്‌ച", "വെള്ളിയാഴ്‌ച", "ശനിയാഴ്‌ച"], StringL());
    },
    get C616() {
      return C616 = dart.constList(["ഞായർ", "തിങ്കൾ", "ചൊവ്വ", "ബുധൻ", "വ്യാഴം", "വെള്ളി", "ശനി"], StringL());
    },
    get C617() {
      return C617 = dart.constList(["ഞ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"], StringL());
    },
    get C618() {
      return C618 = dart.constList(["ഞാ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"], StringL());
    },
    get C619() {
      return C619 = dart.constList(["ഒന്നാം പാദം", "രണ്ടാം പാദം", "മൂന്നാം പാദം", "നാലാം പാദം"], StringL());
    },
    get C620() {
      return C620 = dart.constList(["y, MMMM d, EEEE", "y, MMMM d", "y, MMM d", "d/M/yy"], StringL());
    },
    get C621() {
      return C621 = dart.constList(["МЭӨ", "МЭ"], StringL());
    },
    get C622() {
      return C622 = dart.constList(["манай эриний өмнөх", "манай эриний"], StringL());
    },
    get C623() {
      return C623 = dart.constList(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], StringL());
    },
    get C624() {
      return C624 = dart.constList(["Нэгдүгээр сар", "Хоёрдугаар сар", "Гуравдугаар сар", "Дөрөвдүгээр сар", "Тавдугаар сар", "Зургаадугаар сар", "Долдугаар сар", "Наймдугаар сар", "Есдүгээр сар", "Аравдугаар сар", "Арван нэгдүгээр сар", "Арван хоёрдугаар сар"], StringL());
    },
    get C625() {
      return C625 = dart.constList(["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"], StringL());
    },
    get C626() {
      return C626 = dart.constList(["ням", "даваа", "мягмар", "лхагва", "пүрэв", "баасан", "бямба"], StringL());
    },
    get C627() {
      return C627 = dart.constList(["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"], StringL());
    },
    get C628() {
      return C628 = dart.constList(["I улирал", "II улирал", "III улирал", "IV улирал"], StringL());
    },
    get C629() {
      return C629 = dart.constList(["1-р улирал", "2-р улирал", "3-р улирал", "4-р улирал"], StringL());
    },
    get C630() {
      return C630 = dart.constList(["ү.ө", "ү.х"], StringL());
    },
    get C631() {
      return C631 = dart.constList(["y.MM.dd, EEEE", "y.MM.dd", "y.MM.dd", "y.MM.dd"], StringL());
    },
    get C632() {
      return C632 = dart.constList(["इ. स. पू.", "इ. स."], StringL());
    },
    get C633() {
      return C633 = dart.constList(["ईसवीसनपूर्व", "ईसवीसन"], StringL());
    },
    get C634() {
      return C634 = dart.constList(["जा", "फे", "मा", "ए", "मे", "जू", "जु", "ऑ", "स", "ऑ", "नो", "डि"], StringL());
    },
    get C635() {
      return C635 = dart.constList(["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"], StringL());
    },
    get C636() {
      return C636 = dart.constList(["जाने", "फेब्रु", "मार्च", "एप्रि", "मे", "जून", "जुलै", "ऑग", "सप्टें", "ऑक्टो", "नोव्हें", "डिसें"], StringL());
    },
    get C637() {
      return C637 = dart.constList(["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"], StringL());
    },
    get C638() {
      return C638 = dart.constList(["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"], StringL());
    },
    get C639() {
      return C639 = dart.constList(["ति१", "ति२", "ति३", "ति४"], StringL());
    },
    get C640() {
      return C640 = dart.constList(["प्रथम तिमाही", "द्वितीय तिमाही", "तृतीय तिमाही", "चतुर्थ तिमाही"], StringL());
    },
    get C641() {
      return C641 = dart.constList(["म.पू.", "म.उ."], StringL());
    },
    get C642() {
      return C642 = dart.constList(["{1} रोजी {0}", "{1} रोजी {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C643() {
      return C643 = dart.constList(["S.M.", "TM"], StringL());
    },
    get C644() {
      return C644 = dart.constList(["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"], StringL());
    },
    get C645() {
      return C645 = dart.constList(["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"], StringL());
    },
    get C646() {
      return C646 = dart.constList(["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"], StringL());
    },
    get C647() {
      return C647 = dart.constList(["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"], StringL());
    },
    get C648() {
      return C648 = dart.constList(["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], StringL());
    },
    get C649() {
      return C649 = dart.constList(["A", "I", "S", "R", "K", "J", "S"], StringL());
    },
    get C650() {
      return C650 = dart.constList(["S1", "S2", "S3", "S4"], StringL());
    },
    get C651() {
      return C651 = dart.constList(["Suku pertama", "Suku Ke-2", "Suku Ke-3", "Suku Ke-4"], StringL());
    },
    get C652() {
      return C652 = dart.constList(["PG", "PTG"], StringL());
    },
    get C653() {
      return C653 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/MM/yy"], StringL());
    },
    get C654() {
      return C654 = dart.constList(["QK", "WK"], StringL());
    },
    get C655() {
      return C655 = dart.constList(["Qabel Kristu", "Wara Kristu"], StringL());
    },
    get C656() {
      return C656 = dart.constList(["J", "F", "M", "A", "M", "Ġ", "L", "A", "S", "O", "N", "D"], StringL());
    },
    get C657() {
      return C657 = dart.constList(["Jn", "Fr", "Mz", "Ap", "Mj", "Ġn", "Lj", "Aw", "St", "Ob", "Nv", "Dċ"], StringL());
    },
    get C658() {
      return C658 = dart.constList(["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Diċembru"], StringL());
    },
    get C659() {
      return C659 = dart.constList(["Jan", "Fra", "Mar", "Apr", "Mej", "Ġun", "Lul", "Aww", "Set", "Ott", "Nov", "Diċ"], StringL());
    },
    get C660() {
      return C660 = dart.constList(["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"], StringL());
    },
    get C661() {
      return C661 = dart.constList(["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"], StringL());
    },
    get C662() {
      return C662 = dart.constList(["Ħd", "T", "Tl", "Er", "Ħm", "Ġm", "Sb"], StringL());
    },
    get C663() {
      return C663 = dart.constList(["Ħd", "Tn", "Tl", "Er", "Ħm", "Ġm", "Sb"], StringL());
    },
    get C664() {
      return C664 = dart.constList(["1el kwart", "2ni kwart", "3et kwart", "4ba’ kwart"], StringL());
    },
    get C665() {
      return C665 = dart.constList(["EEEE, d 'ta'’ MMMM y", "d 'ta'’ MMMM y", "dd MMM y", "dd/MM/y"], StringL());
    },
    get C666() {
      return C666 = dart.constList(["ဘီစီ", "အေဒီ"], StringL());
    },
    get C667() {
      return C667 = dart.constList(["ခရစ်တော် မပေါ်မီနှစ်", "ခရစ်နှစ်"], StringL());
    },
    get C668() {
      return C668 = dart.constList(["ဇ", "ဖ", "မ", "ဧ", "မ", "ဇ", "ဇ", "ဩ", "စ", "အ", "န", "ဒ"], StringL());
    },
    get C669() {
      return C669 = dart.constList(["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "ဩဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"], StringL());
    },
    get C670() {
      return C670 = dart.constList(["ဇန်", "ဖေ", "မတ်", "ဧ", "မေ", "ဇွန်", "ဇူ", "ဩ", "စက်", "အောက်", "နို", "ဒီ"], StringL());
    },
    get C671() {
      return C671 = dart.constList(["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"], StringL());
    },
    get C672() {
      return C672 = dart.constList(["တ", "တ", "အ", "ဗ", "က", "သ", "စ"], StringL());
    },
    get C673() {
      return C673 = dart.constList(["ပထမ သုံးလပတ်", "ဒုတိယ သုံးလပတ်", "တတိယ သုံးလပတ်", "စတုတ္ထ သုံးလပတ်"], StringL());
    },
    get C674() {
      return C674 = dart.constList(["နံနက်", "ညနေ"], StringL());
    },
    get C675() {
      return C675 = dart.constList(["y၊ MMMM d၊ EEEE", "y၊ d MMMM", "y၊ MMM d", "dd-MM-yy"], StringL());
    },
    get C676() {
      return C676 = dart.constList(["zzzz HH:mm:ss", "z HH:mm:ss", "B HH:mm:ss", "B H:mm"], StringL());
    },
    get C677() {
      return C677 = dart.constList(["før Kristus", "etter Kristus"], StringL());
    },
    get C678() {
      return C678 = dart.constList(["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], StringL());
    },
    get C679() {
      return C679 = dart.constList(["jan.", "feb.", "mar.", "apr.", "mai", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "des."], StringL());
    },
    get C680() {
      return C680 = dart.constList(["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"], StringL());
    },
    get C681() {
      return C681 = dart.constList(["EEEE d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.y"], StringL());
    },
    get C682() {
      return C682 = dart.constList(["{1} {0}", "{1} 'kl'. {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C683() {
      return C683 = dart.constList(["ईसा पूर्व", "सन्"], StringL());
    },
    get C684() {
      return C684 = dart.constList(["जन", "फेब", "मार्च", "अप्र", "मे", "जुन", "जुल", "अग", "सेप", "अक्टो", "नोभे", "डिसे"], StringL());
    },
    get C685() {
      return C685 = dart.constList(["जन", "फेेब", "मार्च", "अप्र", "मे", "जुन", "जुल", "अग", "सेप", "अक्टो", "नोभे", "डिसे"], StringL());
    },
    get C686() {
      return C686 = dart.constList(["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"], StringL());
    },
    get C687() {
      return C687 = dart.constList(["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"], StringL());
    },
    get C688() {
      return C688 = dart.constList(["आइत", "सोम", "मङ्गल", "बुध", "बिहि", "शुक्र", "शनि"], StringL());
    },
    get C689() {
      return C689 = dart.constList(["आ", "सो", "म", "बु", "बि", "शु", "श"], StringL());
    },
    get C690() {
      return C690 = dart.constList(["पहिलो सत्र", "दोस्रो सत्र", "तेस्रो सत्र", "चौथो सत्र"], StringL());
    },
    get C691() {
      return C691 = dart.constList(["पूर्वाह्न", "अपराह्न"], StringL());
    },
    get C692() {
      return C692 = dart.constList(["y MMMM d, EEEE", "y MMMM d", "y MMM d", "yy/M/d"], StringL());
    },
    get C693() {
      return C693 = dart.constList(["v.Chr.", "n.Chr."], StringL());
    },
    get C694() {
      return C694 = dart.constList(["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], StringL());
    },
    get C695() {
      return C695 = dart.constList(["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], StringL());
    },
    get C696() {
      return C696 = dart.constList(["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], StringL());
    },
    get C697() {
      return C697 = dart.constList(["zo", "ma", "di", "wo", "do", "vr", "za"], StringL());
    },
    get C698() {
      return C698 = dart.constList(["Z", "M", "D", "W", "D", "V", "Z"], StringL());
    },
    get C699() {
      return C699 = dart.constList(["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"], StringL());
    },
    get C700() {
      return C700 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd-MM-yy"], StringL());
    },
    get C701() {
      return C701 = dart.constList(["{1} 'om' {0}", "{1} 'om' {0}", "{1} {0}", "{1} {0}"], StringL());
    },
    get C702() {
      return C702 = dart.constList(["ଖ୍ରୀଷ୍ଟପୂର୍ବ", "ଖ୍ରୀଷ୍ଟାବ୍ଦ"], StringL());
    },
    get C703() {
      return C703 = dart.constList(["ଜା", "ଫେ", "ମା", "ଅ", "ମଇ", "ଜୁ", "ଜୁ", "ଅ", "ସେ", "ଅ", "ନ", "ଡି"], StringL());
    },
    get C704() {
      return C704 = dart.constList(["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଅପ୍ରେଲ", "ମଇ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"], StringL());
    },
    get C705() {
      return C705 = dart.constList(["ରବିବାର", "ସୋମବାର", "ମଙ୍ଗଳବାର", "ବୁଧବାର", "ଗୁରୁବାର", "ଶୁକ୍ରବାର", "ଶନିବାର"], StringL());
    },
    get C706() {
      return C706 = dart.constList(["ରବି", "ସୋମ", "ମଙ୍ଗଳ", "ବୁଧ", "ଗୁରୁ", "ଶୁକ୍ର", "ଶନି"], StringL());
    },
    get C707() {
      return C707 = dart.constList(["ର", "ସୋ", "ମ", "ବୁ", "ଗୁ", "ଶୁ", "ଶ"], StringL());
    },
    get C708() {
      return C708 = dart.constList(["1ମ ତ୍ରୟମାସ", "2ୟ ତ୍ରୟମାସ", "3ୟ ତ୍ରୟମାସ", "4ର୍ଥ ତ୍ରୟମାସ"], StringL());
    },
    get C709() {
      return C709 = dart.constList(["{0} ଠାରେ {1}", "{0} ଠାରେ {1}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C710() {
      return C710 = dart.constList(["ਈ. ਪੂ.", "ਸੰਨ"], StringL());
    },
    get C711() {
      return C711 = dart.constList(["ਈਸਵੀ ਪੂਰਵ", "ਈਸਵੀ ਸੰਨ"], StringL());
    },
    get C712() {
      return C712 = dart.constList(["ਜ", "ਫ਼", "ਮਾ", "ਅ", "ਮ", "ਜੂ", "ਜੁ", "ਅ", "ਸ", "ਅ", "ਨ", "ਦ"], StringL());
    },
    get C713() {
      return C713 = dart.constList(["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"], StringL());
    },
    get C714() {
      return C714 = dart.constList(["ਜਨ", "ਫ਼ਰ", "ਮਾਰਚ", "ਅਪ੍ਰੈ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾ", "ਅਗ", "ਸਤੰ", "ਅਕਤੂ", "ਨਵੰ", "ਦਸੰ"], StringL());
    },
    get C715() {
      return C715 = dart.constList(["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨਿੱਚਰਵਾਰ"], StringL());
    },
    get C716() {
      return C716 = dart.constList(["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁੱਧ", "ਵੀਰ", "ਸ਼ੁੱਕਰ", "ਸ਼ਨਿੱਚਰ"], StringL());
    },
    get C717() {
      return C717 = dart.constList(["ਐ", "ਸੋ", "ਮੰ", "ਬੁੱ", "ਵੀ", "ਸ਼ੁੱ", "ਸ਼"], StringL());
    },
    get C718() {
      return C718 = dart.constList(["ਤਿਮਾਹੀ1", "ਤਿਮਾਹੀ2", "ਤਿਮਾਹੀ3", "ਤਿਮਾਹੀ4"], StringL());
    },
    get C719() {
      return C719 = dart.constList(["ਪਹਿਲੀ ਤਿਮਾਹੀ", "ਦੂਜੀ ਤਿਮਾਹੀ", "ਤੀਜੀ ਤਿਮਾਹੀ", "ਚੌਥੀ ਤਿਮਾਹੀ"], StringL());
    },
    get C720() {
      return C720 = dart.constList(["ਪੂ.ਦੁ.", "ਬਾ.ਦੁ."], StringL());
    },
    get C721() {
      return C721 = dart.constList(["p.n.e.", "n.e."], StringL());
    },
    get C722() {
      return C722 = dart.constList(["przed naszą erą", "naszej ery"], StringL());
    },
    get C723() {
      return C723 = dart.constList(["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"], StringL());
    },
    get C724() {
      return C724 = dart.constList(["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"], StringL());
    },
    get C725() {
      return C725 = dart.constList(["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"], StringL());
    },
    get C726() {
      return C726 = dart.constList(["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"], StringL());
    },
    get C727() {
      return C727 = dart.constList(["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"], StringL());
    },
    get C728() {
      return C728 = dart.constList(["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"], StringL());
    },
    get C729() {
      return C729 = dart.constList(["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."], StringL());
    },
    get C730() {
      return C730 = dart.constList(["n", "p", "w", "ś", "c", "p", "s"], StringL());
    },
    get C731() {
      return C731 = dart.constList(["N", "P", "W", "Ś", "C", "P", "S"], StringL());
    },
    get C732() {
      return C732 = dart.constList(["I kw.", "II kw.", "III kw.", "IV kw."], StringL());
    },
    get C733() {
      return C733 = dart.constList(["I kwartał", "II kwartał", "III kwartał", "IV kwartał"], StringL());
    },
    get C734() {
      return C734 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd.MM.y"], StringL());
    },
    get C735() {
      return C735 = dart.constList(["له میلاد وړاندې", "م."], StringL());
    },
    get C736() {
      return C736 = dart.constList(["له میلاد څخه وړاندې", "له میلاد څخه وروسته"], StringL());
    },
    get C737() {
      return C737 = dart.constList(["ج", "ف", "م", "ا", "م", "ج", "ج", "ا", "س", "ا", "ن", "د"], StringL());
    },
    get C738() {
      return C738 = dart.constList(["جنوري", "فبروري", "مارچ", "اپریل", "مۍ", "جون", "جولای", "اگست", "سېپتمبر", "اکتوبر", "نومبر", "دسمبر"], StringL());
    },
    get C739() {
      return C739 = dart.constList(["جنوري", "فېبروري", "مارچ", "اپریل", "مۍ", "جون", "جولای", "اگست", "سپتمبر", "اکتوبر", "نومبر", "دسمبر"], StringL());
    },
    get C740() {
      return C740 = dart.constList(["جنوري", "فبروري", "مارچ", "اپریل", "مۍ", "جون", "جولای", "اگست", "سپتمبر", "اکتوبر", "نومبر", "دسمبر"], StringL());
    },
    get C741() {
      return C741 = dart.constList(["يونۍ", "دونۍ", "درېنۍ", "څلرنۍ", "پينځنۍ", "جمعه", "اونۍ"], StringL());
    },
    get C742() {
      return C742 = dart.constList(["لومړۍ ربعه", "۲مه ربعه", "۳مه ربعه", "۴مه ربعه"], StringL());
    },
    get C743() {
      return C743 = dart.constList(["غ.م.", "غ.و."], StringL());
    },
    get C744() {
      return C744 = dart.constList(["EEEE د y د MMMM d", "د y د MMMM d", "y MMM d", "y/M/d"], StringL());
    },
    get C745() {
      return C745 = dart.constList([3, 4], intL());
    },
    get C746() {
      return C746 = dart.constList(["antes de Cristo", "depois de Cristo"], StringL());
    },
    get C747() {
      return C747 = dart.constList(["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"], StringL());
    },
    get C748() {
      return C748 = dart.constList(["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], StringL());
    },
    get C749() {
      return C749 = dart.constList(["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"], StringL());
    },
    get C750() {
      return C750 = dart.constList(["dom", "seg", "ter", "qua", "qui", "sex", "sáb"], StringL());
    },
    get C751() {
      return C751 = dart.constList(["D", "S", "T", "Q", "Q", "S", "S"], StringL());
    },
    get C752() {
      return C752 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d 'de' MMM 'de' y", "dd/MM/y"], StringL());
    },
    get C753() {
      return C753 = dart.constList(["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"], StringL());
    },
    get C754() {
      return C754 = dart.constList(["da manhã", "da tarde"], StringL());
    },
    get C755() {
      return C755 = dart.constList(["{1} 'às' {0}", "{1} 'às' {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C756() {
      return C756 = dart.constList(["î.Hr.", "d.Hr."], StringL());
    },
    get C757() {
      return C757 = dart.constList(["înainte de Hristos", "după Hristos"], StringL());
    },
    get C758() {
      return C758 = dart.constList(["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], StringL());
    },
    get C759() {
      return C759 = dart.constList(["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"], StringL());
    },
    get C760() {
      return C760 = dart.constList(["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."], StringL());
    },
    get C761() {
      return C761 = dart.constList(["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"], StringL());
    },
    get C762() {
      return C762 = dart.constList(["dum.", "lun.", "mar.", "mie.", "joi", "vin.", "sâm."], StringL());
    },
    get C763() {
      return C763 = dart.constList(["trim. I", "trim. II", "trim. III", "trim. IV"], StringL());
    },
    get C764() {
      return C764 = dart.constList(["trimestrul I", "trimestrul al II-lea", "trimestrul al III-lea", "trimestrul al IV-lea"], StringL());
    },
    get C765() {
      return C765 = dart.constList(["до н. э.", "н. э."], StringL());
    },
    get C766() {
      return C766 = dart.constList(["до Рождества Христова", "от Рождества Христова"], StringL());
    },
    get C767() {
      return C767 = dart.constList(["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"], StringL());
    },
    get C768() {
      return C768 = dart.constList(["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."], StringL());
    },
    get C769() {
      return C769 = dart.constList(["янв.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."], StringL());
    },
    get C770() {
      return C770 = dart.constList(["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"], StringL());
    },
    get C771() {
      return C771 = dart.constList(["вс", "пн", "вт", "ср", "чт", "пт", "сб"], StringL());
    },
    get C772() {
      return C772 = dart.constList(["В", "П", "В", "С", "Ч", "П", "С"], StringL());
    },
    get C773() {
      return C773 = dart.constList(["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."], StringL());
    },
    get C774() {
      return C774 = dart.constList(["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"], StringL());
    },
    get C775() {
      return C775 = dart.constList(["EEEE, d MMMM y 'г'.", "d MMMM y 'г'.", "d MMM y 'г'.", "dd.MM.y"], StringL());
    },
    get C776() {
      return C776 = dart.constList(["ක්‍රි.පූ.", "ක්‍රි.ව."], StringL());
    },
    get C777() {
      return C777 = dart.constList(["ක්‍රිස්තු පූර්ව", "ක්‍රිස්තු වර්ෂ"], StringL());
    },
    get C778() {
      return C778 = dart.constList(["ජ", "පෙ", "මා", "අ", "මැ", "ජූ", "ජූ", "අ", "සැ", "ඔ", "නෙ", "දෙ"], StringL());
    },
    get C779() {
      return C779 = dart.constList(["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"], StringL());
    },
    get C780() {
      return C780 = dart.constList(["ජන", "පෙබ", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"], StringL());
    },
    get C781() {
      return C781 = dart.constList(["ජන", "පෙබ", "මාර්", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"], StringL());
    },
    get C782() {
      return C782 = dart.constList(["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"], StringL());
    },
    get C783() {
      return C783 = dart.constList(["ඉරිදා", "සඳුදා", "අඟහ", "බදාදා", "බ්‍රහස්", "සිකු", "සෙන"], StringL());
    },
    get C784() {
      return C784 = dart.constList(["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"], StringL());
    },
    get C785() {
      return C785 = dart.constList(["කාර්:1", "කාර්:2", "කාර්:3", "කාර්:4"], StringL());
    },
    get C786() {
      return C786 = dart.constList(["1 වන කාර්තුව", "2 වන කාර්තුව", "3 වන කාර්තුව", "4 වන කාර්තුව"], StringL());
    },
    get C787() {
      return C787 = dart.constList(["පෙ.ව.", "ප.ව."], StringL());
    },
    get C788() {
      return C788 = dart.constList(["y MMMM d, EEEE", "y MMMM d", "y MMM d", "y-MM-dd"], StringL());
    },
    get C789() {
      return C789 = dart.constList(["pred Kr.", "po Kr."], StringL());
    },
    get C790() {
      return C790 = dart.constList(["pred Kristom", "po Kristovi"], StringL());
    },
    get C791() {
      return C791 = dart.constList(["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"], StringL());
    },
    get C792() {
      return C792 = dart.constList(["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"], StringL());
    },
    get C793() {
      return C793 = dart.constList(["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"], StringL());
    },
    get C794() {
      return C794 = dart.constList(["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"], StringL());
    },
    get C795() {
      return C795 = dart.constList(["ne", "po", "ut", "st", "št", "pi", "so"], StringL());
    },
    get C796() {
      return C796 = dart.constList(["n", "p", "u", "s", "š", "p", "s"], StringL());
    },
    get C797() {
      return C797 = dart.constList(["1. štvrťrok", "2. štvrťrok", "3. štvrťrok", "4. štvrťrok"], StringL());
    },
    get C798() {
      return C798 = dart.constList(["EEEE d. MMMM y", "d. MMMM y", "d. M. y", "d. M. y"], StringL());
    },
    get C799() {
      return C799 = dart.constList(["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1} {0}"], StringL());
    },
    get C800() {
      return C800 = dart.constList(["pred Kristusom", "po Kristusu"], StringL());
    },
    get C801() {
      return C801 = dart.constList(["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"], StringL());
    },
    get C802() {
      return C802 = dart.constList(["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."], StringL());
    },
    get C803() {
      return C803 = dart.constList(["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"], StringL());
    },
    get C804() {
      return C804 = dart.constList(["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."], StringL());
    },
    get C805() {
      return C805 = dart.constList(["n", "p", "t", "s", "č", "p", "s"], StringL());
    },
    get C806() {
      return C806 = dart.constList(["1. čet.", "2. čet.", "3. čet.", "4. čet."], StringL());
    },
    get C807() {
      return C807 = dart.constList(["1. četrtletje", "2. četrtletje", "3. četrtletje", "4. četrtletje"], StringL());
    },
    get C808() {
      return C808 = dart.constList(["dop.", "pop."], StringL());
    },
    get C809() {
      return C809 = dart.constList(["EEEE, dd. MMMM y", "dd. MMMM y", "d. MMM y", "d. MM. yy"], StringL());
    },
    get C810() {
      return C810 = dart.constList(["p.K.", "mb.K."], StringL());
    },
    get C811() {
      return C811 = dart.constList(["para Krishtit", "mbas Krishtit"], StringL());
    },
    get C812() {
      return C812 = dart.constList(["j", "sh", "m", "p", "m", "q", "k", "g", "sh", "t", "n", "dh"], StringL());
    },
    get C813() {
      return C813 = dart.constList(["J", "Sh", "M", "P", "M", "Q", "K", "G", "Sh", "T", "N", "Dh"], StringL());
    },
    get C814() {
      return C814 = dart.constList(["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor"], StringL());
    },
    get C815() {
      return C815 = dart.constList(["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"], StringL());
    },
    get C816() {
      return C816 = dart.constList(["jan", "shk", "mar", "pri", "maj", "qer", "korr", "gush", "sht", "tet", "nën", "dhj"], StringL());
    },
    get C817() {
      return C817 = dart.constList(["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Korr", "Gush", "Sht", "Tet", "Nën", "Dhj"], StringL());
    },
    get C818() {
      return C818 = dart.constList(["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"], StringL());
    },
    get C819() {
      return C819 = dart.constList(["E diel", "E hënë", "E martë", "E mërkurë", "E enjte", "E premte", "E shtunë"], StringL());
    },
    get C820() {
      return C820 = dart.constList(["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht"], StringL());
    },
    get C821() {
      return C821 = dart.constList(["D", "H", "M", "M", "E", "P", "Sh"], StringL());
    },
    get C822() {
      return C822 = dart.constList(["tremujori I", "tremujori II", "tremujori III", "tremujori IV"], StringL());
    },
    get C823() {
      return C823 = dart.constList(["tremujori i parë", "tremujori i dytë", "tremujori i tretë", "tremujori i katërt"], StringL());
    },
    get C824() {
      return C824 = dart.constList(["e paradites", "e pasdites"], StringL());
    },
    get C825() {
      return C825 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d.M.yy"], StringL());
    },
    get C826() {
      return C826 = dart.constList(["h:mm:ss a, zzzz", "h:mm:ss a, z", "h:mm:ss a", "h:mm a"], StringL());
    },
    get C827() {
      return C827 = dart.constList(["{1} 'në' {0}", "{1} 'në' {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C828() {
      return C828 = dart.constList(["п. н. е.", "н. е."], StringL());
    },
    get C829() {
      return C829 = dart.constList(["пре нове ере", "нове ере"], StringL());
    },
    get C830() {
      return C830 = dart.constList(["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"], StringL());
    },
    get C831() {
      return C831 = dart.constList(["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"], StringL());
    },
    get C832() {
      return C832 = dart.constList(["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"], StringL());
    },
    get C833() {
      return C833 = dart.constList(["нед", "пон", "уто", "сре", "чет", "пет", "суб"], StringL());
    },
    get C834() {
      return C834 = dart.constList(["н", "п", "у", "с", "ч", "п", "с"], StringL());
    },
    get C835() {
      return C835 = dart.constList(["К1", "К2", "К3", "К4"], StringL());
    },
    get C836() {
      return C836 = dart.constList(["први квартал", "други квартал", "трећи квартал", "четврти квартал"], StringL());
    },
    get C837() {
      return C837 = dart.constList(["пре подне", "по подне"], StringL());
    },
    get C838() {
      return C838 = dart.constList(["EEEE, dd. MMMM y.", "dd. MMMM y.", "dd.MM.y.", "d.M.yy."], StringL());
    },
    get C839() {
      return C839 = dart.constList(["pre nove ere", "nove ere"], StringL());
    },
    get C840() {
      return C840 = dart.constList(["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], StringL());
    },
    get C841() {
      return C841 = dart.constList(["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"], StringL());
    },
    get C842() {
      return C842 = dart.constList(["ned", "pon", "uto", "sre", "čet", "pet", "sub"], StringL());
    },
    get C843() {
      return C843 = dart.constList(["prvi kvartal", "drugi kvartal", "treći kvartal", "četvrti kvartal"], StringL());
    },
    get C844() {
      return C844 = dart.constList(["pre podne", "po podne"], StringL());
    },
    get C845() {
      return C845 = dart.constList(["före Kristus", "efter Kristus"], StringL());
    },
    get C846() {
      return C846 = dart.constList(["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"], StringL());
    },
    get C847() {
      return C847 = dart.constList(["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], StringL());
    },
    get C848() {
      return C848 = dart.constList(["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"], StringL());
    },
    get C849() {
      return C849 = dart.constList(["sön", "mån", "tis", "ons", "tors", "fre", "lör"], StringL());
    },
    get C850() {
      return C850 = dart.constList(["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"], StringL());
    },
    get C851() {
      return C851 = dart.constList(["fm", "em"], StringL());
    },
    get C852() {
      return C852 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "y-MM-dd"], StringL());
    },
    get C853() {
      return C853 = dart.constList(["'kl'. HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], StringL());
    },
    get C854() {
      return C854 = dart.constList(["KK", "BK"], StringL());
    },
    get C855() {
      return C855 = dart.constList(["Kabla ya Kristo", "Baada ya Kristo"], StringL());
    },
    get C856() {
      return C856 = dart.constList(["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"], StringL());
    },
    get C857() {
      return C857 = dart.constList(["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"], StringL());
    },
    get C858() {
      return C858 = dart.constList(["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"], StringL());
    },
    get C859() {
      return C859 = dart.constList(["Robo ya 1", "Robo ya 2", "Robo ya 3", "Robo ya 4"], StringL());
    },
    get C860() {
      return C860 = dart.constList(["கி.மு.", "கி.பி."], StringL());
    },
    get C861() {
      return C861 = dart.constList(["கிறிஸ்துவுக்கு முன்", "அன்னோ டோமினி"], StringL());
    },
    get C862() {
      return C862 = dart.constList(["ஜ", "பி", "மா", "ஏ", "மே", "ஜூ", "ஜூ", "ஆ", "செ", "அ", "ந", "டி"], StringL());
    },
    get C863() {
      return C863 = dart.constList(["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"], StringL());
    },
    get C864() {
      return C864 = dart.constList(["ஜன.", "பிப்.", "மார்.", "ஏப்.", "மே", "ஜூன்", "ஜூலை", "ஆக.", "செப்.", "அக்.", "நவ.", "டிச."], StringL());
    },
    get C865() {
      return C865 = dart.constList(["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"], StringL());
    },
    get C866() {
      return C866 = dart.constList(["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"], StringL());
    },
    get C867() {
      return C867 = dart.constList(["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"], StringL());
    },
    get C868() {
      return C868 = dart.constList(["காலா.1", "காலா.2", "காலா.3", "காலா.4"], StringL());
    },
    get C869() {
      return C869 = dart.constList(["ஒன்றாம் காலாண்டு", "இரண்டாம் காலாண்டு", "மூன்றாம் காலாண்டு", "நான்காம் காலாண்டு"], StringL());
    },
    get C870() {
      return C870 = dart.constList(["முற்பகல்", "பிற்பகல்"], StringL());
    },
    get C871() {
      return C871 = dart.constList(["a h:mm:ss zzzz", "a h:mm:ss z", "a h:mm:ss", "a h:mm"], StringL());
    },
    get C872() {
      return C872 = dart.constList(["{1} ’அன்று’ {0}", "{1} ’அன்று’ {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C873() {
      return C873 = dart.constList(["క్రీపూ", "క్రీశ"], StringL());
    },
    get C874() {
      return C874 = dart.constList(["క్రీస్తు పూర్వం", "క్రీస్తు శకం"], StringL());
    },
    get C875() {
      return C875 = dart.constList(["జ", "ఫి", "మా", "ఏ", "మే", "జూ", "జు", "ఆ", "సె", "అ", "న", "డి"], StringL());
    },
    get C876() {
      return C876 = dart.constList(["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జులై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"], StringL());
    },
    get C877() {
      return C877 = dart.constList(["జన", "ఫిబ్ర", "మార్చి", "ఏప్రి", "మే", "జూన్", "జులై", "ఆగ", "సెప్టెం", "అక్టో", "నవం", "డిసెం"], StringL());
    },
    get C878() {
      return C878 = dart.constList(["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"], StringL());
    },
    get C879() {
      return C879 = dart.constList(["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"], StringL());
    },
    get C880() {
      return C880 = dart.constList(["ఆ", "సో", "మ", "బు", "గు", "శు", "శ"], StringL());
    },
    get C881() {
      return C881 = dart.constList(["త్రై1", "త్రై2", "త్రై3", "త్రై4"], StringL());
    },
    get C882() {
      return C882 = dart.constList(["1వ త్రైమాసికం", "2వ త్రైమాసికం", "3వ త్రైమాసికం", "4వ త్రైమాసికం"], StringL());
    },
    get C883() {
      return C883 = dart.constList(["d, MMMM y, EEEE", "d MMMM, y", "d MMM, y", "dd-MM-yy"], StringL());
    },
    get C884() {
      return C884 = dart.constList(["{1} {0}కి", "{1} {0}కి", "{1} {0}", "{1} {0}"], StringL());
    },
    get C885() {
      return C885 = dart.constList(["ปีก่อน ค.ศ.", "ค.ศ."], StringL());
    },
    get C886() {
      return C886 = dart.constList(["ปีก่อนคริสต์ศักราช", "คริสต์ศักราช"], StringL());
    },
    get C887() {
      return C887 = dart.constList(["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], StringL());
    },
    get C888() {
      return C888 = dart.constList(["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], StringL());
    },
    get C889() {
      return C889 = dart.constList(["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"], StringL());
    },
    get C890() {
      return C890 = dart.constList(["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."], StringL());
    },
    get C891() {
      return C891 = dart.constList(["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"], StringL());
    },
    get C892() {
      return C892 = dart.constList(["ไตรมาส 1", "ไตรมาส 2", "ไตรมาส 3", "ไตรมาส 4"], StringL());
    },
    get C893() {
      return C893 = dart.constList(["ก่อนเที่ยง", "หลังเที่ยง"], StringL());
    },
    get C894() {
      return C894 = dart.constList(["EEEEที่ d MMMM G y", "d MMMM G y", "d MMM y", "d/M/yy"], StringL());
    },
    get C895() {
      return C895 = dart.constList(["H นาฬิกา mm นาที ss วินาที zzzz", "H นาฬิกา mm นาที ss วินาที z", "HH:mm:ss", "HH:mm"], StringL());
    },
    get C896() {
      return C896 = dart.constList(["MÖ", "MS"], StringL());
    },
    get C897() {
      return C897 = dart.constList(["Milattan Önce", "Milattan Sonra"], StringL());
    },
    get C898() {
      return C898 = dart.constList(["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"], StringL());
    },
    get C899() {
      return C899 = dart.constList(["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], StringL());
    },
    get C900() {
      return C900 = dart.constList(["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], StringL());
    },
    get C901() {
      return C901 = dart.constList(["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], StringL());
    },
    get C902() {
      return C902 = dart.constList(["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], StringL());
    },
    get C903() {
      return C903 = dart.constList(["P", "P", "S", "Ç", "P", "C", "C"], StringL());
    },
    get C904() {
      return C904 = dart.constList(["Ç1", "Ç2", "Ç3", "Ç4"], StringL());
    },
    get C905() {
      return C905 = dart.constList(["1. çeyrek", "2. çeyrek", "3. çeyrek", "4. çeyrek"], StringL());
    },
    get C906() {
      return C906 = dart.constList(["ÖÖ", "ÖS"], StringL());
    },
    get C907() {
      return C907 = dart.constList(["d MMMM y EEEE", "d MMMM y", "d MMM y", "d.MM.y"], StringL());
    },
    get C908() {
      return C908 = dart.constList(["до н. е.", "н. е."], StringL());
    },
    get C909() {
      return C909 = dart.constList(["до нашої ери", "нашої ери"], StringL());
    },
    get C910() {
      return C910 = dart.constList(["с", "л", "б", "к", "т", "ч", "л", "с", "в", "ж", "л", "г"], StringL());
    },
    get C911() {
      return C911 = dart.constList(["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"], StringL());
    },
    get C912() {
      return C912 = dart.constList(["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"], StringL());
    },
    get C913() {
      return C913 = dart.constList(["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"], StringL());
    },
    get C914() {
      return C914 = dart.constList(["січ.", "лют.", "бер.", "квіт.", "трав.", "черв.", "лип.", "серп.", "вер.", "жовт.", "лист.", "груд."], StringL());
    },
    get C915() {
      return C915 = dart.constList(["січ", "лют", "бер", "кві", "тра", "чер", "лип", "сер", "вер", "жов", "лис", "гру"], StringL());
    },
    get C916() {
      return C916 = dart.constList(["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"], StringL());
    },
    get C917() {
      return C917 = dart.constList(["Н", "П", "В", "С", "Ч", "П", "С"], StringL());
    },
    get C918() {
      return C918 = dart.constList(["дп", "пп"], StringL());
    },
    get C919() {
      return C919 = dart.constList(["EEEE, d MMMM y 'р'.", "d MMMM y 'р'.", "d MMM y 'р'.", "dd.MM.yy"], StringL());
    },
    get C920() {
      return C920 = dart.constList(["{1} 'о' {0}", "{1} 'о' {0}", "{1}, {0}", "{1}, {0}"], StringL());
    },
    get C921() {
      return C921 = dart.constList(["قبل مسیح", "عیسوی"], StringL());
    },
    get C922() {
      return C922 = dart.constList(["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"], StringL());
    },
    get C923() {
      return C923 = dart.constList(["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"], StringL());
    },
    get C924() {
      return C924 = dart.constList(["پہلی سہ ماہی", "دوسری سہ ماہی", "تیسری سہ ماہی", "چوتهی سہ ماہی"], StringL());
    },
    get C925() {
      return C925 = dart.constList(["EEEE، d MMMM، y", "d MMMM، y", "d MMM، y", "d/M/yy"], StringL());
    },
    get C926() {
      return C926 = dart.constList(["m.a.", "milodiy"], StringL());
    },
    get C927() {
      return C927 = dart.constList(["miloddan avvalgi", "milodiy"], StringL());
    },
    get C928() {
      return C928 = dart.constList(["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], StringL());
    },
    get C929() {
      return C929 = dart.constList(["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"], StringL());
    },
    get C930() {
      return C930 = dart.constList(["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"], StringL());
    },
    get C931() {
      return C931 = dart.constList(["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"], StringL());
    },
    get C932() {
      return C932 = dart.constList(["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"], StringL());
    },
    get C933() {
      return C933 = dart.constList(["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"], StringL());
    },
    get C934() {
      return C934 = dart.constList(["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"], StringL());
    },
    get C935() {
      return C935 = dart.constList(["Y", "D", "S", "C", "P", "J", "S"], StringL());
    },
    get C936() {
      return C936 = dart.constList(["1-ch", "2-ch", "3-ch", "4-ch"], StringL());
    },
    get C937() {
      return C937 = dart.constList(["1-chorak", "2-chorak", "3-chorak", "4-chorak"], StringL());
    },
    get C938() {
      return C938 = dart.constList(["TO", "TK"], StringL());
    },
    get C939() {
      return C939 = dart.constList(["EEEE, d-MMMM, y", "d-MMMM, y", "d-MMM, y", "dd/MM/yy"], StringL());
    },
    get C940() {
      return C940 = dart.constList(["H:mm:ss (zzzz)", "H:mm:ss (z)", "HH:mm:ss", "HH:mm"], StringL());
    },
    get C941() {
      return C941 = dart.constList(["Trước CN", "sau CN"], StringL());
    },
    get C942() {
      return C942 = dart.constList(["tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6", "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"], StringL());
    },
    get C943() {
      return C943 = dart.constList(["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"], StringL());
    },
    get C944() {
      return C944 = dart.constList(["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"], StringL());
    },
    get C945() {
      return C945 = dart.constList(["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"], StringL());
    },
    get C946() {
      return C946 = dart.constList(["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"], StringL());
    },
    get C947() {
      return C947 = dart.constList(["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"], StringL());
    },
    get C948() {
      return C948 = dart.constList(["CN", "T2", "T3", "T4", "T5", "T6", "T7"], StringL());
    },
    get C949() {
      return C949 = dart.constList(["Quý 1", "Quý 2", "Quý 3", "Quý 4"], StringL());
    },
    get C950() {
      return C950 = dart.constList(["SA", "CH"], StringL());
    },
    get C951() {
      return C951 = dart.constList(["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "dd/MM/y"], StringL());
    },
    get C952() {
      return C952 = dart.constList(["{0} {1}", "{0} {1}", "{0}, {1}", "{0}, {1}"], StringL());
    },
    get C953() {
      return C953 = dart.constList(["公元前", "公元"], StringL());
    },
    get C954() {
      return C954 = dart.constList(["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], StringL());
    },
    get C955() {
      return C955 = dart.constList(["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], StringL());
    },
    get C956() {
      return C956 = dart.constList(["周日", "周一", "周二", "周三", "周四", "周五", "周六"], StringL());
    },
    get C957() {
      return C957 = dart.constList(["日", "一", "二", "三", "四", "五", "六"], StringL());
    },
    get C958() {
      return C958 = dart.constList(["1季度", "2季度", "3季度", "4季度"], StringL());
    },
    get C959() {
      return C959 = dart.constList(["第一季度", "第二季度", "第三季度", "第四季度"], StringL());
    },
    get C960() {
      return C960 = dart.constList(["上午", "下午"], StringL());
    },
    get C961() {
      return C961 = dart.constList(["y年M月d日EEEE", "y年M月d日", "y年M月d日", "y/M/d"], StringL());
    },
    get C962() {
      return C962 = dart.constList(["zzzz ah:mm:ss", "z ah:mm:ss", "ah:mm:ss", "ah:mm"], StringL());
    },
    get C963() {
      return C963 = dart.constList(["週日", "週一", "週二", "週三", "週四", "週五", "週六"], StringL());
    },
    get C964() {
      return C964 = dart.constList(["第1季", "第2季", "第3季", "第4季"], StringL());
    },
    get C965() {
      return C965 = dart.constList(["y年M月d日EEEE", "y年M月d日", "y年M月d日", "d/M/y"], StringL());
    },
    get C966() {
      return C966 = dart.constList(["ah:mm:ss [zzzz]", "ah:mm:ss [z]", "ah:mm:ss", "ah:mm"], StringL());
    },
    get C967() {
      return C967 = dart.constList(["西元前", "西元"], StringL());
    },
    get C968() {
      return C968 = dart.constList(["y年M月d日 EEEE", "y年M月d日", "y年M月d日", "y/M/d"], StringL());
    },
    get C969() {
      return C969 = dart.constList(["J", "F", "M", "E", "M", "J", "J", "A", "S", "O", "N", "D"], StringL());
    },
    get C970() {
      return C970 = dart.constList(["Januwari", "Februwari", "Mashi", "Ephreli", "Meyi", "Juni", "Julayi", "Agasti", "Septhemba", "Okthoba", "Novemba", "Disemba"], StringL());
    },
    get C971() {
      return C971 = dart.constList(["Jan", "Feb", "Mas", "Eph", "Mey", "Jun", "Jul", "Aga", "Sep", "Okt", "Nov", "Dis"], StringL());
    },
    get C972() {
      return C972 = dart.constList(["ISonto", "UMsombuluko", "ULwesibili", "ULwesithathu", "ULwesine", "ULwesihlanu", "UMgqibelo"], StringL());
    },
    get C973() {
      return C973 = dart.constList(["Son", "Mso", "Bil", "Tha", "Sin", "Hla", "Mgq"], StringL());
    },
    get C974() {
      return C974 = dart.constList(["S", "M", "B", "T", "S", "H", "M"], StringL());
    },
    get C975() {
      return C975 = dart.constList(["ikota yesi-1", "ikota yesi-2", "ikota yesi-3", "ikota yesi-4"], StringL());
    }
  }, false);
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C56;
  var C57;
  var C58;
  var C59;
  var C60;
  var C61;
  var C62;
  var C63;
  var C64;
  var C65;
  var C66;
  var C67;
  var C68;
  var C69;
  var C70;
  var C71;
  var C72;
  var C73;
  var C74;
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C80;
  var C81;
  var C82;
  var C83;
  var C84;
  var C85;
  var C86;
  var C87;
  var C88;
  var C89;
  var C90;
  var C91;
  var C92;
  var C93;
  var C94;
  var C95;
  var C96;
  var C97;
  var C98;
  var C99;
  var C100;
  var C101;
  var C102;
  var C103;
  var C104;
  var C105;
  var C106;
  var C107;
  var C108;
  var C109;
  var C110;
  var C111;
  var C112;
  var C113;
  var C114;
  var C115;
  var C116;
  var C117;
  var C118;
  var C119;
  var C120;
  var C121;
  var C122;
  var C123;
  var C124;
  var C125;
  var C126;
  var C127;
  var C128;
  var C129;
  var C130;
  var C131;
  var C132;
  var C133;
  var C134;
  var C135;
  var C136;
  var C137;
  var C138;
  var C139;
  var C140;
  var C141;
  var C142;
  var C143;
  var C144;
  var C145;
  var C146;
  var C147;
  var C148;
  var C149;
  var C150;
  var C151;
  var C152;
  var C153;
  var C154;
  var C155;
  var C156;
  var C157;
  var C158;
  var C159;
  var C160;
  var C161;
  var C162;
  var C163;
  var C164;
  var C165;
  var C166;
  var C167;
  var C168;
  var C169;
  var C170;
  var C171;
  var C172;
  var C173;
  var C174;
  var C175;
  var C176;
  var C177;
  var C178;
  var C179;
  var C180;
  var C181;
  var C182;
  var C183;
  var C184;
  var C185;
  var C186;
  var C187;
  var C188;
  var C189;
  var C190;
  var C191;
  var C192;
  var C193;
  var C194;
  var C195;
  var C196;
  var C197;
  var C198;
  var C199;
  var C200;
  var C201;
  var C202;
  var C203;
  var C204;
  var C205;
  var C206;
  var C207;
  var C208;
  var C209;
  var C210;
  var C211;
  var C212;
  var C213;
  var C214;
  var C215;
  var C216;
  var C217;
  var C218;
  var C219;
  var C220;
  var C221;
  var C222;
  var C223;
  var C224;
  var C225;
  var C226;
  var C227;
  var C228;
  var C229;
  var C230;
  var C231;
  var C232;
  var C233;
  var C234;
  var C235;
  var C236;
  var C237;
  var C238;
  var C239;
  var C240;
  var C241;
  var C242;
  var C243;
  var C244;
  var C245;
  var C246;
  var C247;
  var C248;
  var C249;
  var C250;
  var C251;
  var C252;
  var C253;
  var C254;
  var C255;
  var C256;
  var C257;
  var C258;
  var C259;
  var C260;
  var C261;
  var C262;
  var C263;
  var C264;
  var C265;
  var C266;
  var C267;
  var C268;
  var C269;
  var C270;
  var C271;
  var C272;
  var C273;
  var C274;
  var C275;
  var C276;
  var C277;
  var C278;
  var C279;
  var C280;
  var C281;
  var C282;
  var C283;
  var C284;
  var C285;
  var C286;
  var C287;
  var C288;
  var C289;
  var C290;
  var C291;
  var C292;
  var C293;
  var C294;
  var C295;
  var C296;
  var C297;
  var C298;
  var C299;
  var C300;
  var C301;
  var C302;
  var C303;
  var C304;
  var C305;
  var C306;
  var C307;
  var C308;
  var C309;
  var C310;
  var C311;
  var C312;
  var C313;
  var C314;
  var C315;
  var C316;
  var C317;
  var C318;
  var C319;
  var C320;
  var C321;
  var C322;
  var C323;
  var C324;
  var C325;
  var C326;
  var C327;
  var C328;
  var C329;
  var C330;
  var C331;
  var C332;
  var C333;
  var C334;
  var C335;
  var C336;
  var C337;
  var C338;
  var C339;
  var C340;
  var C341;
  var C342;
  var C343;
  var C344;
  var C345;
  var C346;
  var C347;
  var C348;
  var C349;
  var C350;
  var C351;
  var C352;
  var C353;
  var C354;
  var C355;
  var C356;
  var C357;
  var C358;
  var C359;
  var C360;
  var C361;
  var C362;
  var C363;
  var C364;
  var C365;
  var C366;
  var C367;
  var C368;
  var C369;
  var C370;
  var C371;
  var C372;
  var C373;
  var C374;
  var C375;
  var C376;
  var C377;
  var C378;
  var C379;
  var C380;
  var C381;
  var C382;
  var C383;
  var C384;
  var C385;
  var C386;
  var C387;
  var C388;
  var C389;
  var C390;
  var C391;
  var C392;
  var C393;
  var C394;
  var C395;
  var C396;
  var C397;
  var C398;
  var C399;
  var C400;
  var C401;
  var C402;
  var C403;
  var C404;
  var C405;
  var C406;
  var C407;
  var C408;
  var C409;
  var C410;
  var C411;
  var C412;
  var C413;
  var C414;
  var C415;
  var C416;
  var C417;
  var C418;
  var C419;
  var C420;
  var C421;
  var C422;
  var C423;
  var C424;
  var C425;
  var C426;
  var C427;
  var C428;
  var C429;
  var C430;
  var C431;
  var C432;
  var C433;
  var C434;
  var C435;
  var C436;
  var C437;
  var C438;
  var C439;
  var C440;
  var C441;
  var C442;
  var C443;
  var C444;
  var C445;
  var C446;
  var C447;
  var C448;
  var C449;
  var C450;
  var C451;
  var C452;
  var C453;
  var C454;
  var C455;
  var C456;
  var C457;
  var C458;
  var C459;
  var C460;
  var C461;
  var C462;
  var C463;
  var C464;
  var C465;
  var C466;
  var C467;
  var C468;
  var C469;
  var C470;
  var C471;
  var C472;
  var C473;
  var C474;
  var C475;
  var C476;
  var C477;
  var C478;
  var C479;
  var C480;
  var C481;
  var C482;
  var C483;
  var C484;
  var C485;
  var C486;
  var C487;
  var C488;
  var C489;
  var C490;
  var C491;
  var C492;
  var C493;
  var C494;
  var C495;
  var C496;
  var C497;
  var C498;
  var C499;
  var C500;
  var C501;
  var C502;
  var C503;
  var C504;
  var C505;
  var C506;
  var C507;
  var C508;
  var C509;
  var C510;
  var C511;
  var C512;
  var C513;
  var C514;
  var C515;
  var C516;
  var C517;
  var C518;
  var C519;
  var C520;
  var C521;
  var C522;
  var C523;
  var C524;
  var C525;
  var C526;
  var C527;
  var C528;
  var C529;
  var C530;
  var C531;
  var C532;
  var C533;
  var C534;
  var C535;
  var C536;
  var C537;
  var C538;
  var C539;
  var C540;
  var C541;
  var C542;
  var C543;
  var C544;
  var C545;
  var C546;
  var C547;
  var C548;
  var C549;
  var C550;
  var C551;
  var C552;
  var C553;
  var C554;
  var C555;
  var C556;
  var C557;
  var C558;
  var C559;
  var C560;
  var C561;
  var C562;
  var C563;
  var C564;
  var C565;
  var C566;
  var C567;
  var C568;
  var C569;
  var C570;
  var C571;
  var C572;
  var C573;
  var C574;
  var C575;
  var C576;
  var C577;
  var C578;
  var C579;
  var C580;
  var C581;
  var C582;
  var C583;
  var C584;
  var C585;
  var C586;
  var C587;
  var C588;
  var C589;
  var C590;
  var C591;
  var C592;
  var C593;
  var C594;
  var C595;
  var C596;
  var C597;
  var C598;
  var C599;
  var C600;
  var C601;
  var C602;
  var C603;
  var C604;
  var C605;
  var C606;
  var C607;
  var C608;
  var C609;
  var C610;
  var C611;
  var C612;
  var C613;
  var C614;
  var C615;
  var C616;
  var C617;
  var C618;
  var C619;
  var C620;
  var C621;
  var C622;
  var C623;
  var C624;
  var C625;
  var C626;
  var C627;
  var C628;
  var C629;
  var C630;
  var C631;
  var C632;
  var C633;
  var C634;
  var C635;
  var C636;
  var C637;
  var C638;
  var C639;
  var C640;
  var C641;
  var C642;
  var C643;
  var C644;
  var C645;
  var C646;
  var C647;
  var C648;
  var C649;
  var C650;
  var C651;
  var C652;
  var C653;
  var C654;
  var C655;
  var C656;
  var C657;
  var C658;
  var C659;
  var C660;
  var C661;
  var C662;
  var C663;
  var C664;
  var C665;
  var C666;
  var C667;
  var C668;
  var C669;
  var C670;
  var C671;
  var C672;
  var C673;
  var C674;
  var C675;
  var C676;
  var C677;
  var C678;
  var C679;
  var C680;
  var C681;
  var C682;
  var C683;
  var C684;
  var C685;
  var C686;
  var C687;
  var C688;
  var C689;
  var C690;
  var C691;
  var C692;
  var C693;
  var C694;
  var C695;
  var C696;
  var C697;
  var C698;
  var C699;
  var C700;
  var C701;
  var C702;
  var C703;
  var C704;
  var C705;
  var C706;
  var C707;
  var C708;
  var C709;
  var C710;
  var C711;
  var C712;
  var C713;
  var C714;
  var C715;
  var C716;
  var C717;
  var C718;
  var C719;
  var C720;
  var C721;
  var C722;
  var C723;
  var C724;
  var C725;
  var C726;
  var C727;
  var C728;
  var C729;
  var C730;
  var C731;
  var C732;
  var C733;
  var C734;
  var C735;
  var C736;
  var C737;
  var C738;
  var C739;
  var C740;
  var C741;
  var C742;
  var C743;
  var C744;
  var C745;
  var C746;
  var C747;
  var C748;
  var C749;
  var C750;
  var C751;
  var C752;
  var C753;
  var C754;
  var C755;
  var C756;
  var C757;
  var C758;
  var C759;
  var C760;
  var C761;
  var C762;
  var C763;
  var C764;
  var C765;
  var C766;
  var C767;
  var C768;
  var C769;
  var C770;
  var C771;
  var C772;
  var C773;
  var C774;
  var C775;
  var C776;
  var C777;
  var C778;
  var C779;
  var C780;
  var C781;
  var C782;
  var C783;
  var C784;
  var C785;
  var C786;
  var C787;
  var C788;
  var C789;
  var C790;
  var C791;
  var C792;
  var C793;
  var C794;
  var C795;
  var C796;
  var C797;
  var C798;
  var C799;
  var C800;
  var C801;
  var C802;
  var C803;
  var C804;
  var C805;
  var C806;
  var C807;
  var C808;
  var C809;
  var C810;
  var C811;
  var C812;
  var C813;
  var C814;
  var C815;
  var C816;
  var C817;
  var C818;
  var C819;
  var C820;
  var C821;
  var C822;
  var C823;
  var C824;
  var C825;
  var C826;
  var C827;
  var C828;
  var C829;
  var C830;
  var C831;
  var C832;
  var C833;
  var C834;
  var C835;
  var C836;
  var C837;
  var C838;
  var C839;
  var C840;
  var C841;
  var C842;
  var C843;
  var C844;
  var C845;
  var C846;
  var C847;
  var C848;
  var C849;
  var C850;
  var C851;
  var C852;
  var C853;
  var C854;
  var C855;
  var C856;
  var C857;
  var C858;
  var C859;
  var C860;
  var C861;
  var C862;
  var C863;
  var C864;
  var C865;
  var C866;
  var C867;
  var C868;
  var C869;
  var C870;
  var C871;
  var C872;
  var C873;
  var C874;
  var C875;
  var C876;
  var C877;
  var C878;
  var C879;
  var C880;
  var C881;
  var C882;
  var C883;
  var C884;
  var C885;
  var C886;
  var C887;
  var C888;
  var C889;
  var C890;
  var C891;
  var C892;
  var C893;
  var C894;
  var C895;
  var C896;
  var C897;
  var C898;
  var C899;
  var C900;
  var C901;
  var C902;
  var C903;
  var C904;
  var C905;
  var C906;
  var C907;
  var C908;
  var C909;
  var C910;
  var C911;
  var C912;
  var C913;
  var C914;
  var C915;
  var C916;
  var C917;
  var C918;
  var C919;
  var C920;
  var C921;
  var C922;
  var C923;
  var C924;
  var C925;
  var C926;
  var C927;
  var C928;
  var C929;
  var C930;
  var C931;
  var C932;
  var C933;
  var C934;
  var C935;
  var C936;
  var C937;
  var C938;
  var C939;
  var C940;
  var C941;
  var C942;
  var C943;
  var C944;
  var C945;
  var C946;
  var C947;
  var C948;
  var C949;
  var C950;
  var C951;
  var C952;
  var C953;
  var C954;
  var C955;
  var C956;
  var C957;
  var C958;
  var C959;
  var C960;
  var C961;
  var C962;
  var C963;
  var C964;
  var C965;
  var C966;
  var C967;
  var C968;
  var C969;
  var C970;
  var C971;
  var C972;
  var C973;
  var C974;
  var C975;
  date_symbol_data_local.initializeDateFormatting = function initializeDateFormatting(locale = null, ignored = null) {
    date_format_internal.initializeDateSymbols(C0 || CT.C0);
    date_format_internal.initializeDatePatterns(C1 || CT.C1);
    return async.Future.value(null);
  };
  date_symbol_data_local.dateTimeSymbolMap = function dateTimeSymbolMap() {
    return new _js_helper.LinkedMap.from(["en_ISO", new date_symbols.DateSymbols.new({NAME: "en_ISO", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C13 || CT.C13, TIMEFORMATS: C14 || CT.C14, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "af", new date_symbols.DateSymbols.new({NAME: "af", ERAS: C17 || CT.C17, ERANAMES: C18 || CT.C18, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C19 || CT.C19, STANDALONEMONTHS: C19 || CT.C19, SHORTMONTHS: C20 || CT.C20, STANDALONESHORTMONTHS: C20 || CT.C20, WEEKDAYS: C21 || CT.C21, STANDALONEWEEKDAYS: C21 || CT.C21, SHORTWEEKDAYS: C22 || CT.C22, STANDALONESHORTWEEKDAYS: C22 || CT.C22, NARROWWEEKDAYS: C23 || CT.C23, STANDALONENARROWWEEKDAYS: C23 || CT.C23, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C25 || CT.C25, AMPMS: C26 || CT.C26, DATEFORMATS: C27 || CT.C27, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "am", new date_symbols.DateSymbols.new({NAME: "am", ERAS: C30 || CT.C30, ERANAMES: C31 || CT.C31, NARROWMONTHS: C32 || CT.C32, STANDALONENARROWMONTHS: C32 || CT.C32, MONTHS: C33 || CT.C33, STANDALONEMONTHS: C33 || CT.C33, SHORTMONTHS: C34 || CT.C34, STANDALONESHORTMONTHS: C34 || CT.C34, WEEKDAYS: C35 || CT.C35, STANDALONEWEEKDAYS: C35 || CT.C35, SHORTWEEKDAYS: C36 || CT.C36, STANDALONESHORTWEEKDAYS: C36 || CT.C36, NARROWWEEKDAYS: C37 || CT.C37, STANDALONENARROWWEEKDAYS: C37 || CT.C37, SHORTQUARTERS: C38 || CT.C38, QUARTERS: C39 || CT.C39, AMPMS: C40 || CT.C40, DATEFORMATS: C41 || CT.C41, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "ar", new date_symbols.DateSymbols.new({NAME: "ar", ZERODIGIT: "٠", ERAS: C43 || CT.C43, ERANAMES: C44 || CT.C44, NARROWMONTHS: C45 || CT.C45, STANDALONENARROWMONTHS: C45 || CT.C45, MONTHS: C46 || CT.C46, STANDALONEMONTHS: C46 || CT.C46, SHORTMONTHS: C46 || CT.C46, STANDALONESHORTMONTHS: C46 || CT.C46, WEEKDAYS: C47 || CT.C47, STANDALONEWEEKDAYS: C47 || CT.C47, SHORTWEEKDAYS: C47 || CT.C47, STANDALONESHORTWEEKDAYS: C47 || CT.C47, NARROWWEEKDAYS: C48 || CT.C48, STANDALONENARROWWEEKDAYS: C48 || CT.C48, SHORTQUARTERS: C49 || CT.C49, QUARTERS: C49 || CT.C49, AMPMS: C50 || CT.C50, DATEFORMATS: C51 || CT.C51, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 4}), "ar_DZ", new date_symbols.DateSymbols.new({NAME: "ar_DZ", ERAS: C43 || CT.C43, ERANAMES: C44 || CT.C44, NARROWMONTHS: C53 || CT.C53, STANDALONENARROWMONTHS: C53 || CT.C53, MONTHS: C54 || CT.C54, STANDALONEMONTHS: C54 || CT.C54, SHORTMONTHS: C54 || CT.C54, STANDALONESHORTMONTHS: C54 || CT.C54, WEEKDAYS: C47 || CT.C47, STANDALONEWEEKDAYS: C47 || CT.C47, SHORTWEEKDAYS: C47 || CT.C47, STANDALONESHORTWEEKDAYS: C47 || CT.C47, NARROWWEEKDAYS: C48 || CT.C48, STANDALONENARROWWEEKDAYS: C48 || CT.C48, SHORTQUARTERS: C49 || CT.C49, QUARTERS: C49 || CT.C49, AMPMS: C50 || CT.C50, DATEFORMATS: C51 || CT.C51, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 4}), "ar_EG", new date_symbols.DateSymbols.new({NAME: "ar_EG", ZERODIGIT: "٠", ERAS: C43 || CT.C43, ERANAMES: C44 || CT.C44, NARROWMONTHS: C45 || CT.C45, STANDALONENARROWMONTHS: C45 || CT.C45, MONTHS: C46 || CT.C46, STANDALONEMONTHS: C46 || CT.C46, SHORTMONTHS: C46 || CT.C46, STANDALONESHORTMONTHS: C46 || CT.C46, WEEKDAYS: C47 || CT.C47, STANDALONEWEEKDAYS: C47 || CT.C47, SHORTWEEKDAYS: C47 || CT.C47, STANDALONESHORTWEEKDAYS: C47 || CT.C47, NARROWWEEKDAYS: C48 || CT.C48, STANDALONENARROWWEEKDAYS: C48 || CT.C48, SHORTQUARTERS: C49 || CT.C49, QUARTERS: C49 || CT.C49, AMPMS: C50 || CT.C50, DATEFORMATS: C51 || CT.C51, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 4}), "az", new date_symbols.DateSymbols.new({NAME: "az", ERAS: C55 || CT.C55, ERANAMES: C56 || CT.C56, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C58 || CT.C58, STANDALONEMONTHS: C59 || CT.C59, SHORTMONTHS: C60 || CT.C60, STANDALONESHORTMONTHS: C60 || CT.C60, WEEKDAYS: C61 || CT.C61, STANDALONEWEEKDAYS: C61 || CT.C61, SHORTWEEKDAYS: C62 || CT.C62, STANDALONESHORTWEEKDAYS: C62 || CT.C62, NARROWWEEKDAYS: C63 || CT.C63, STANDALONENARROWWEEKDAYS: C63 || CT.C63, SHORTQUARTERS: C64 || CT.C64, QUARTERS: C65 || CT.C65, AMPMS: C12 || CT.C12, DATEFORMATS: C66 || CT.C66, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "be", new date_symbols.DateSymbols.new({NAME: "be", ERAS: C67 || CT.C67, ERANAMES: C68 || CT.C68, NARROWMONTHS: C69 || CT.C69, STANDALONENARROWMONTHS: C69 || CT.C69, MONTHS: C70 || CT.C70, STANDALONEMONTHS: C71 || CT.C71, SHORTMONTHS: C72 || CT.C72, STANDALONESHORTMONTHS: C73 || CT.C73, WEEKDAYS: C74 || CT.C74, STANDALONEWEEKDAYS: C74 || CT.C74, SHORTWEEKDAYS: C75 || CT.C75, STANDALONESHORTWEEKDAYS: C75 || CT.C75, NARROWWEEKDAYS: C76 || CT.C76, STANDALONENARROWWEEKDAYS: C76 || CT.C76, SHORTQUARTERS: C77 || CT.C77, QUARTERS: C78 || CT.C78, AMPMS: C12 || CT.C12, DATEFORMATS: C79 || CT.C79, TIMEFORMATS: C80 || CT.C80, DATETIMEFORMATS: C81 || CT.C81, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "bg", new date_symbols.DateSymbols.new({NAME: "bg", ERAS: C82 || CT.C82, ERANAMES: C83 || CT.C83, NARROWMONTHS: C84 || CT.C84, STANDALONENARROWMONTHS: C84 || CT.C84, MONTHS: C85 || CT.C85, STANDALONEMONTHS: C85 || CT.C85, SHORTMONTHS: C86 || CT.C86, STANDALONESHORTMONTHS: C86 || CT.C86, WEEKDAYS: C87 || CT.C87, STANDALONEWEEKDAYS: C87 || CT.C87, SHORTWEEKDAYS: C88 || CT.C88, STANDALONESHORTWEEKDAYS: C88 || CT.C88, NARROWWEEKDAYS: C89 || CT.C89, STANDALONENARROWWEEKDAYS: C89 || CT.C89, SHORTQUARTERS: C90 || CT.C90, QUARTERS: C91 || CT.C91, AMPMS: C92 || CT.C92, DATEFORMATS: C93 || CT.C93, TIMEFORMATS: C94 || CT.C94, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "bn", new date_symbols.DateSymbols.new({NAME: "bn", ZERODIGIT: "০", ERAS: C96 || CT.C96, ERANAMES: C97 || CT.C97, NARROWMONTHS: C98 || CT.C98, STANDALONENARROWMONTHS: C98 || CT.C98, MONTHS: C99 || CT.C99, STANDALONEMONTHS: C99 || CT.C99, SHORTMONTHS: C100 || CT.C100, STANDALONESHORTMONTHS: C99 || CT.C99, WEEKDAYS: C101 || CT.C101, STANDALONEWEEKDAYS: C102 || CT.C102, SHORTWEEKDAYS: C103 || CT.C103, STANDALONESHORTWEEKDAYS: C103 || CT.C103, NARROWWEEKDAYS: C104 || CT.C104, STANDALONENARROWWEEKDAYS: C104 || CT.C104, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C105 || CT.C105, AMPMS: C12 || CT.C12, DATEFORMATS: C106 || CT.C106, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "br", new date_symbols.DateSymbols.new({NAME: "br", ERAS: C107 || CT.C107, ERANAMES: C108 || CT.C108, NARROWMONTHS: C109 || CT.C109, STANDALONENARROWMONTHS: C109 || CT.C109, MONTHS: C110 || CT.C110, STANDALONEMONTHS: C110 || CT.C110, SHORTMONTHS: C111 || CT.C111, STANDALONESHORTMONTHS: C111 || CT.C111, WEEKDAYS: C112 || CT.C112, STANDALONEWEEKDAYS: C112 || CT.C112, SHORTWEEKDAYS: C113 || CT.C113, STANDALONESHORTWEEKDAYS: C113 || CT.C113, NARROWWEEKDAYS: C114 || CT.C114, STANDALONENARROWWEEKDAYS: C114 || CT.C114, SHORTQUARTERS: C115 || CT.C115, QUARTERS: C116 || CT.C116, AMPMS: C117 || CT.C117, DATEFORMATS: C118 || CT.C118, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C119 || CT.C119, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "bs", new date_symbols.DateSymbols.new({NAME: "bs", ERAS: C120 || CT.C120, ERANAMES: C121 || CT.C121, NARROWMONTHS: C122 || CT.C122, STANDALONENARROWMONTHS: C122 || CT.C122, MONTHS: C123 || CT.C123, STANDALONEMONTHS: C123 || CT.C123, SHORTMONTHS: C124 || CT.C124, STANDALONESHORTMONTHS: C124 || CT.C124, WEEKDAYS: C125 || CT.C125, STANDALONEWEEKDAYS: C125 || CT.C125, SHORTWEEKDAYS: C126 || CT.C126, STANDALONESHORTWEEKDAYS: C126 || CT.C126, NARROWWEEKDAYS: C127 || CT.C127, STANDALONENARROWWEEKDAYS: C128 || CT.C128, SHORTQUARTERS: C129 || CT.C129, QUARTERS: C130 || CT.C130, AMPMS: C131 || CT.C131, DATEFORMATS: C132 || CT.C132, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C133 || CT.C133, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ca", new date_symbols.DateSymbols.new({NAME: "ca", ERAS: C134 || CT.C134, ERANAMES: C135 || CT.C135, NARROWMONTHS: C136 || CT.C136, STANDALONENARROWMONTHS: C136 || CT.C136, MONTHS: C137 || CT.C137, STANDALONEMONTHS: C138 || CT.C138, SHORTMONTHS: C139 || CT.C139, STANDALONESHORTMONTHS: C140 || CT.C140, WEEKDAYS: C141 || CT.C141, STANDALONEWEEKDAYS: C141 || CT.C141, SHORTWEEKDAYS: C142 || CT.C142, STANDALONESHORTWEEKDAYS: C142 || CT.C142, NARROWWEEKDAYS: C143 || CT.C143, STANDALONENARROWWEEKDAYS: C143 || CT.C143, SHORTQUARTERS: C144 || CT.C144, QUARTERS: C145 || CT.C145, AMPMS: C146 || CT.C146, DATEFORMATS: C147 || CT.C147, TIMEFORMATS: C148 || CT.C148, DATETIMEFORMATS: C149 || CT.C149, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "chr", new date_symbols.DateSymbols.new({NAME: "chr", ERAS: C2 || CT.C2, ERANAMES: C150 || CT.C150, NARROWMONTHS: C151 || CT.C151, STANDALONENARROWMONTHS: C151 || CT.C151, MONTHS: C152 || CT.C152, STANDALONEMONTHS: C152 || CT.C152, SHORTMONTHS: C153 || CT.C153, STANDALONESHORTMONTHS: C153 || CT.C153, WEEKDAYS: C154 || CT.C154, STANDALONEWEEKDAYS: C154 || CT.C154, SHORTWEEKDAYS: C155 || CT.C155, STANDALONESHORTWEEKDAYS: C155 || CT.C155, NARROWWEEKDAYS: C156 || CT.C156, STANDALONENARROWWEEKDAYS: C156 || CT.C156, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C157 || CT.C157, AMPMS: C158 || CT.C158, DATEFORMATS: C159 || CT.C159, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C160 || CT.C160, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "cs", new date_symbols.DateSymbols.new({NAME: "cs", ERAS: C161 || CT.C161, ERANAMES: C162 || CT.C162, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C163 || CT.C163, STANDALONEMONTHS: C164 || CT.C164, SHORTMONTHS: C165 || CT.C165, STANDALONESHORTMONTHS: C165 || CT.C165, WEEKDAYS: C166 || CT.C166, STANDALONEWEEKDAYS: C166 || CT.C166, SHORTWEEKDAYS: C167 || CT.C167, STANDALONESHORTWEEKDAYS: C167 || CT.C167, NARROWWEEKDAYS: C168 || CT.C168, STANDALONENARROWWEEKDAYS: C168 || CT.C168, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C169 || CT.C169, AMPMS: C170 || CT.C170, DATEFORMATS: C171 || CT.C171, TIMEFORMATS: C148 || CT.C148, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "cy", new date_symbols.DateSymbols.new({NAME: "cy", ERAS: C172 || CT.C172, ERANAMES: C173 || CT.C173, NARROWMONTHS: C174 || CT.C174, STANDALONENARROWMONTHS: C174 || CT.C174, MONTHS: C175 || CT.C175, STANDALONEMONTHS: C175 || CT.C175, SHORTMONTHS: C176 || CT.C176, STANDALONESHORTMONTHS: C177 || CT.C177, WEEKDAYS: C178 || CT.C178, STANDALONEWEEKDAYS: C178 || CT.C178, SHORTWEEKDAYS: C179 || CT.C179, STANDALONESHORTWEEKDAYS: C180 || CT.C180, NARROWWEEKDAYS: C181 || CT.C181, STANDALONENARROWWEEKDAYS: C181 || CT.C181, SHORTQUARTERS: C182 || CT.C182, QUARTERS: C183 || CT.C183, AMPMS: C184 || CT.C184, DATEFORMATS: C185 || CT.C185, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C186 || CT.C186, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "da", new date_symbols.DateSymbols.new({NAME: "da", ERAS: C187 || CT.C187, ERANAMES: C187 || CT.C187, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C188 || CT.C188, STANDALONEMONTHS: C188 || CT.C188, SHORTMONTHS: C189 || CT.C189, STANDALONESHORTMONTHS: C189 || CT.C189, WEEKDAYS: C190 || CT.C190, STANDALONEWEEKDAYS: C190 || CT.C190, SHORTWEEKDAYS: C191 || CT.C191, STANDALONESHORTWEEKDAYS: C192 || CT.C192, NARROWWEEKDAYS: C193 || CT.C193, STANDALONENARROWWEEKDAYS: C193 || CT.C193, SHORTQUARTERS: C194 || CT.C194, QUARTERS: C195 || CT.C195, AMPMS: C12 || CT.C12, DATEFORMATS: C196 || CT.C196, TIMEFORMATS: C197 || CT.C197, DATETIMEFORMATS: C198 || CT.C198, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "de", new date_symbols.DateSymbols.new({NAME: "de", ERAS: C199 || CT.C199, ERANAMES: C199 || CT.C199, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C200 || CT.C200, STANDALONEMONTHS: C200 || CT.C200, SHORTMONTHS: C201 || CT.C201, STANDALONESHORTMONTHS: C202 || CT.C202, WEEKDAYS: C203 || CT.C203, STANDALONEWEEKDAYS: C203 || CT.C203, SHORTWEEKDAYS: C204 || CT.C204, STANDALONESHORTWEEKDAYS: C205 || CT.C205, NARROWWEEKDAYS: C206 || CT.C206, STANDALONENARROWWEEKDAYS: C206 || CT.C206, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C207 || CT.C207, AMPMS: C208 || CT.C208, DATEFORMATS: C209 || CT.C209, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C210 || CT.C210, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "de_AT", new date_symbols.DateSymbols.new({NAME: "de_AT", ERAS: C199 || CT.C199, ERANAMES: C199 || CT.C199, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C211 || CT.C211, STANDALONEMONTHS: C211 || CT.C211, SHORTMONTHS: C212 || CT.C212, STANDALONESHORTMONTHS: C213 || CT.C213, WEEKDAYS: C203 || CT.C203, STANDALONEWEEKDAYS: C203 || CT.C203, SHORTWEEKDAYS: C204 || CT.C204, STANDALONESHORTWEEKDAYS: C205 || CT.C205, NARROWWEEKDAYS: C206 || CT.C206, STANDALONENARROWWEEKDAYS: C206 || CT.C206, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C207 || CT.C207, AMPMS: C208 || CT.C208, DATEFORMATS: C209 || CT.C209, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C210 || CT.C210, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "de_CH", new date_symbols.DateSymbols.new({NAME: "de_CH", ERAS: C199 || CT.C199, ERANAMES: C199 || CT.C199, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C200 || CT.C200, STANDALONEMONTHS: C200 || CT.C200, SHORTMONTHS: C201 || CT.C201, STANDALONESHORTMONTHS: C202 || CT.C202, WEEKDAYS: C203 || CT.C203, STANDALONEWEEKDAYS: C203 || CT.C203, SHORTWEEKDAYS: C204 || CT.C204, STANDALONESHORTWEEKDAYS: C205 || CT.C205, NARROWWEEKDAYS: C206 || CT.C206, STANDALONENARROWWEEKDAYS: C206 || CT.C206, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C207 || CT.C207, AMPMS: C208 || CT.C208, DATEFORMATS: C209 || CT.C209, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C210 || CT.C210, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "el", new date_symbols.DateSymbols.new({NAME: "el", ERAS: C214 || CT.C214, ERANAMES: C215 || CT.C215, NARROWMONTHS: C216 || CT.C216, STANDALONENARROWMONTHS: C216 || CT.C216, MONTHS: C217 || CT.C217, STANDALONEMONTHS: C218 || CT.C218, SHORTMONTHS: C219 || CT.C219, STANDALONESHORTMONTHS: C220 || CT.C220, WEEKDAYS: C221 || CT.C221, STANDALONEWEEKDAYS: C221 || CT.C221, SHORTWEEKDAYS: C222 || CT.C222, STANDALONESHORTWEEKDAYS: C222 || CT.C222, NARROWWEEKDAYS: C223 || CT.C223, STANDALONENARROWWEEKDAYS: C223 || CT.C223, SHORTQUARTERS: C224 || CT.C224, QUARTERS: C225 || CT.C225, AMPMS: C226 || CT.C226, DATEFORMATS: C227 || CT.C227, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C228 || CT.C228, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "en", new date_symbols.DateSymbols.new({NAME: "en", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C159 || CT.C159, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_AU", new date_symbols.DateSymbols.new({NAME: "en_AU", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C229 || CT.C229, STANDALONESHORTMONTHS: C229 || CT.C229, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C230 || CT.C230, STANDALONESHORTWEEKDAYS: C230 || CT.C230, NARROWWEEKDAYS: C231 || CT.C231, STANDALONENARROWWEEKDAYS: C231 || CT.C231, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C232 || CT.C232, DATEFORMATS: C227 || CT.C227, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_CA", new date_symbols.DateSymbols.new({NAME: "en_CA", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C229 || CT.C229, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C230 || CT.C230, STANDALONESHORTWEEKDAYS: C230 || CT.C230, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C233 || CT.C233, DATEFORMATS: C234 || CT.C234, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_GB", new date_symbols.DateSymbols.new({NAME: "en_GB", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C232 || CT.C232, DATEFORMATS: C235 || CT.C235, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "en_IE", new date_symbols.DateSymbols.new({NAME: "en_IE", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C233 || CT.C233, DATEFORMATS: C118 || CT.C118, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 2}), "en_IN", new date_symbols.DateSymbols.new({NAME: "en_IN", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C236 || CT.C236, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "en_MY", new date_symbols.DateSymbols.new({NAME: "en_MY", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C235 || CT.C235, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "en_SG", new date_symbols.DateSymbols.new({NAME: "en_SG", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C227 || CT.C227, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_US", new date_symbols.DateSymbols.new({NAME: "en_US", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C159 || CT.C159, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_ZA", new date_symbols.DateSymbols.new({NAME: "en_ZA", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C238 || CT.C238, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "es", new date_symbols.DateSymbols.new({NAME: "es", ERAS: C239 || CT.C239, ERANAMES: C240 || CT.C240, NARROWMONTHS: C241 || CT.C241, STANDALONENARROWMONTHS: C241 || CT.C241, MONTHS: C242 || CT.C242, STANDALONEMONTHS: C242 || CT.C242, SHORTMONTHS: C243 || CT.C243, STANDALONESHORTMONTHS: C243 || CT.C243, WEEKDAYS: C244 || CT.C244, STANDALONEWEEKDAYS: C244 || CT.C244, SHORTWEEKDAYS: C245 || CT.C245, STANDALONESHORTWEEKDAYS: C245 || CT.C245, NARROWWEEKDAYS: C246 || CT.C246, STANDALONENARROWWEEKDAYS: C246 || CT.C246, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C248 || CT.C248, AMPMS: C146 || CT.C146, DATEFORMATS: C249 || CT.C249, TIMEFORMATS: C250 || CT.C250, DATETIMEFORMATS: C251 || CT.C251, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "es_419", new date_symbols.DateSymbols.new({NAME: "es_419", ERAS: C239 || CT.C239, ERANAMES: C240 || CT.C240, NARROWMONTHS: C241 || CT.C241, STANDALONENARROWMONTHS: C241 || CT.C241, MONTHS: C242 || CT.C242, STANDALONEMONTHS: C242 || CT.C242, SHORTMONTHS: C252 || CT.C252, STANDALONESHORTMONTHS: C252 || CT.C252, WEEKDAYS: C244 || CT.C244, STANDALONEWEEKDAYS: C244 || CT.C244, SHORTWEEKDAYS: C245 || CT.C245, STANDALONESHORTWEEKDAYS: C245 || CT.C245, NARROWWEEKDAYS: C253 || CT.C253, STANDALONENARROWWEEKDAYS: C254 || CT.C254, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C255 || CT.C255, AMPMS: C233 || CT.C233, DATEFORMATS: C249 || CT.C249, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C251 || CT.C251, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "es_ES", new date_symbols.DateSymbols.new({NAME: "es_ES", ERAS: C239 || CT.C239, ERANAMES: C240 || CT.C240, NARROWMONTHS: C241 || CT.C241, STANDALONENARROWMONTHS: C241 || CT.C241, MONTHS: C242 || CT.C242, STANDALONEMONTHS: C242 || CT.C242, SHORTMONTHS: C243 || CT.C243, STANDALONESHORTMONTHS: C243 || CT.C243, WEEKDAYS: C244 || CT.C244, STANDALONEWEEKDAYS: C244 || CT.C244, SHORTWEEKDAYS: C245 || CT.C245, STANDALONESHORTWEEKDAYS: C245 || CT.C245, NARROWWEEKDAYS: C246 || CT.C246, STANDALONENARROWWEEKDAYS: C246 || CT.C246, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C248 || CT.C248, AMPMS: C146 || CT.C146, DATEFORMATS: C249 || CT.C249, TIMEFORMATS: C250 || CT.C250, DATETIMEFORMATS: C251 || CT.C251, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "es_MX", new date_symbols.DateSymbols.new({NAME: "es_MX", ERAS: C239 || CT.C239, ERANAMES: C240 || CT.C240, NARROWMONTHS: C241 || CT.C241, STANDALONENARROWMONTHS: C241 || CT.C241, MONTHS: C242 || CT.C242, STANDALONEMONTHS: C242 || CT.C242, SHORTMONTHS: C256 || CT.C256, STANDALONESHORTMONTHS: C252 || CT.C252, WEEKDAYS: C244 || CT.C244, STANDALONEWEEKDAYS: C244 || CT.C244, SHORTWEEKDAYS: C245 || CT.C245, STANDALONESHORTWEEKDAYS: C245 || CT.C245, NARROWWEEKDAYS: C254 || CT.C254, STANDALONENARROWWEEKDAYS: C254 || CT.C254, SHORTQUARTERS: C257 || CT.C257, QUARTERS: C258 || CT.C258, AMPMS: C146 || CT.C146, DATEFORMATS: C259 || CT.C259, TIMEFORMATS: C148 || CT.C148, DATETIMEFORMATS: C251 || CT.C251, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "es_US", new date_symbols.DateSymbols.new({NAME: "es_US", ERAS: C239 || CT.C239, ERANAMES: C240 || CT.C240, NARROWMONTHS: C241 || CT.C241, STANDALONENARROWMONTHS: C241 || CT.C241, MONTHS: C242 || CT.C242, STANDALONEMONTHS: C242 || CT.C242, SHORTMONTHS: C252 || CT.C252, STANDALONESHORTMONTHS: C252 || CT.C252, WEEKDAYS: C244 || CT.C244, STANDALONEWEEKDAYS: C244 || CT.C244, SHORTWEEKDAYS: C245 || CT.C245, STANDALONESHORTWEEKDAYS: C245 || CT.C245, NARROWWEEKDAYS: C254 || CT.C254, STANDALONENARROWWEEKDAYS: C254 || CT.C254, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C248 || CT.C248, AMPMS: C146 || CT.C146, DATEFORMATS: C260 || CT.C260, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C251 || CT.C251, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "et", new date_symbols.DateSymbols.new({NAME: "et", ERAS: C261 || CT.C261, ERANAMES: C262 || CT.C262, NARROWMONTHS: C263 || CT.C263, STANDALONENARROWMONTHS: C263 || CT.C263, MONTHS: C264 || CT.C264, STANDALONEMONTHS: C264 || CT.C264, SHORTMONTHS: C265 || CT.C265, STANDALONESHORTMONTHS: C265 || CT.C265, WEEKDAYS: C266 || CT.C266, STANDALONEWEEKDAYS: C266 || CT.C266, SHORTWEEKDAYS: C267 || CT.C267, STANDALONESHORTWEEKDAYS: C267 || CT.C267, NARROWWEEKDAYS: C267 || CT.C267, STANDALONENARROWWEEKDAYS: C267 || CT.C267, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C195 || CT.C195, AMPMS: C12 || CT.C12, DATEFORMATS: C268 || CT.C268, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "eu", new date_symbols.DateSymbols.new({NAME: "eu", ERAS: C269 || CT.C269, ERANAMES: C270 || CT.C270, NARROWMONTHS: C271 || CT.C271, STANDALONENARROWMONTHS: C271 || CT.C271, MONTHS: C272 || CT.C272, STANDALONEMONTHS: C273 || CT.C273, SHORTMONTHS: C274 || CT.C274, STANDALONESHORTMONTHS: C274 || CT.C274, WEEKDAYS: C275 || CT.C275, STANDALONEWEEKDAYS: C276 || CT.C276, SHORTWEEKDAYS: C277 || CT.C277, STANDALONESHORTWEEKDAYS: C277 || CT.C277, NARROWWEEKDAYS: C278 || CT.C278, STANDALONENARROWWEEKDAYS: C278 || CT.C278, SHORTQUARTERS: C279 || CT.C279, QUARTERS: C280 || CT.C280, AMPMS: C12 || CT.C12, DATEFORMATS: C281 || CT.C281, TIMEFORMATS: C282 || CT.C282, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "fa", new date_symbols.DateSymbols.new({NAME: "fa", ZERODIGIT: "۰", ERAS: C283 || CT.C283, ERANAMES: C284 || CT.C284, NARROWMONTHS: C285 || CT.C285, STANDALONENARROWMONTHS: C285 || CT.C285, MONTHS: C286 || CT.C286, STANDALONEMONTHS: C287 || CT.C287, SHORTMONTHS: C286 || CT.C286, STANDALONESHORTMONTHS: C287 || CT.C287, WEEKDAYS: C288 || CT.C288, STANDALONEWEEKDAYS: C288 || CT.C288, SHORTWEEKDAYS: C288 || CT.C288, STANDALONESHORTWEEKDAYS: C288 || CT.C288, NARROWWEEKDAYS: C289 || CT.C289, STANDALONENARROWWEEKDAYS: C289 || CT.C289, SHORTQUARTERS: C290 || CT.C290, QUARTERS: C291 || CT.C291, AMPMS: C292 || CT.C292, DATEFORMATS: C293 || CT.C293, TIMEFORMATS: C294 || CT.C294, DATETIMEFORMATS: C295 || CT.C295, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C296 || CT.C296, FIRSTWEEKCUTOFFDAY: 4}), "fi", new date_symbols.DateSymbols.new({NAME: "fi", ERAS: C297 || CT.C297, ERANAMES: C298 || CT.C298, NARROWMONTHS: C299 || CT.C299, STANDALONENARROWMONTHS: C299 || CT.C299, MONTHS: C300 || CT.C300, STANDALONEMONTHS: C301 || CT.C301, SHORTMONTHS: C302 || CT.C302, STANDALONESHORTMONTHS: C303 || CT.C303, WEEKDAYS: C304 || CT.C304, STANDALONEWEEKDAYS: C305 || CT.C305, SHORTWEEKDAYS: C306 || CT.C306, STANDALONESHORTWEEKDAYS: C306 || CT.C306, NARROWWEEKDAYS: C307 || CT.C307, STANDALONENARROWWEEKDAYS: C307 || CT.C307, SHORTQUARTERS: C308 || CT.C308, QUARTERS: C309 || CT.C309, AMPMS: C310 || CT.C310, DATEFORMATS: C311 || CT.C311, TIMEFORMATS: C312 || CT.C312, DATETIMEFORMATS: C313 || CT.C313, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "fil", new date_symbols.DateSymbols.new({NAME: "fil", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C314 || CT.C314, STANDALONENARROWMONTHS: C315 || CT.C315, MONTHS: C316 || CT.C316, STANDALONEMONTHS: C316 || CT.C316, SHORTMONTHS: C314 || CT.C314, STANDALONESHORTMONTHS: C314 || CT.C314, WEEKDAYS: C317 || CT.C317, STANDALONEWEEKDAYS: C317 || CT.C317, SHORTWEEKDAYS: C318 || CT.C318, STANDALONESHORTWEEKDAYS: C318 || CT.C318, NARROWWEEKDAYS: C318 || CT.C318, STANDALONENARROWWEEKDAYS: C318 || CT.C318, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C319 || CT.C319, AMPMS: C12 || CT.C12, DATEFORMATS: C159 || CT.C159, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C320 || CT.C320, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "fr", new date_symbols.DateSymbols.new({NAME: "fr", ERAS: C321 || CT.C321, ERANAMES: C322 || CT.C322, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C323 || CT.C323, STANDALONEMONTHS: C323 || CT.C323, SHORTMONTHS: C324 || CT.C324, STANDALONESHORTMONTHS: C324 || CT.C324, WEEKDAYS: C325 || CT.C325, STANDALONEWEEKDAYS: C325 || CT.C325, SHORTWEEKDAYS: C326 || CT.C326, STANDALONESHORTWEEKDAYS: C326 || CT.C326, NARROWWEEKDAYS: C254 || CT.C254, STANDALONENARROWWEEKDAYS: C254 || CT.C254, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C327 || CT.C327, AMPMS: C12 || CT.C12, DATEFORMATS: C118 || CT.C118, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C328 || CT.C328, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "fr_CA", new date_symbols.DateSymbols.new({NAME: "fr_CA", ERAS: C321 || CT.C321, ERANAMES: C322 || CT.C322, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C323 || CT.C323, STANDALONEMONTHS: C323 || CT.C323, SHORTMONTHS: C329 || CT.C329, STANDALONESHORTMONTHS: C329 || CT.C329, WEEKDAYS: C325 || CT.C325, STANDALONEWEEKDAYS: C325 || CT.C325, SHORTWEEKDAYS: C326 || CT.C326, STANDALONESHORTWEEKDAYS: C326 || CT.C326, NARROWWEEKDAYS: C254 || CT.C254, STANDALONENARROWWEEKDAYS: C254 || CT.C254, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C327 || CT.C327, AMPMS: C233 || CT.C233, DATEFORMATS: C330 || CT.C330, TIMEFORMATS: C331 || CT.C331, DATETIMEFORMATS: C332 || CT.C332, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "fr_CH", new date_symbols.DateSymbols.new({NAME: "fr_CH", ERAS: C321 || CT.C321, ERANAMES: C322 || CT.C322, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C323 || CT.C323, STANDALONEMONTHS: C323 || CT.C323, SHORTMONTHS: C324 || CT.C324, STANDALONESHORTMONTHS: C324 || CT.C324, WEEKDAYS: C325 || CT.C325, STANDALONEWEEKDAYS: C325 || CT.C325, SHORTWEEKDAYS: C326 || CT.C326, STANDALONESHORTWEEKDAYS: C326 || CT.C326, NARROWWEEKDAYS: C254 || CT.C254, STANDALONENARROWWEEKDAYS: C254 || CT.C254, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C327 || CT.C327, AMPMS: C12 || CT.C12, DATEFORMATS: C333 || CT.C333, TIMEFORMATS: C334 || CT.C334, DATETIMEFORMATS: C328 || CT.C328, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "ga", new date_symbols.DateSymbols.new({NAME: "ga", ERAS: C335 || CT.C335, ERANAMES: C336 || CT.C336, NARROWMONTHS: C337 || CT.C337, STANDALONENARROWMONTHS: C337 || CT.C337, MONTHS: C338 || CT.C338, STANDALONEMONTHS: C338 || CT.C338, SHORTMONTHS: C339 || CT.C339, STANDALONESHORTMONTHS: C339 || CT.C339, WEEKDAYS: C340 || CT.C340, STANDALONEWEEKDAYS: C340 || CT.C340, SHORTWEEKDAYS: C341 || CT.C341, STANDALONESHORTWEEKDAYS: C341 || CT.C341, NARROWWEEKDAYS: C342 || CT.C342, STANDALONENARROWWEEKDAYS: C342 || CT.C342, SHORTQUARTERS: C343 || CT.C343, QUARTERS: C344 || CT.C344, AMPMS: C345 || CT.C345, DATEFORMATS: C118 || CT.C118, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 2}), "gl", new date_symbols.DateSymbols.new({NAME: "gl", ERAS: C346 || CT.C346, ERANAMES: C347 || CT.C347, NARROWMONTHS: C348 || CT.C348, STANDALONENARROWMONTHS: C349 || CT.C349, MONTHS: C350 || CT.C350, STANDALONEMONTHS: C351 || CT.C351, SHORTMONTHS: C352 || CT.C352, STANDALONESHORTMONTHS: C353 || CT.C353, WEEKDAYS: C354 || CT.C354, STANDALONEWEEKDAYS: C355 || CT.C355, SHORTWEEKDAYS: C356 || CT.C356, STANDALONESHORTWEEKDAYS: C357 || CT.C357, NARROWWEEKDAYS: C358 || CT.C358, STANDALONENARROWWEEKDAYS: C359 || CT.C359, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C255 || CT.C255, AMPMS: C233 || CT.C233, DATEFORMATS: C360 || CT.C360, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C361 || CT.C361, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "gsw", new date_symbols.DateSymbols.new({NAME: "gsw", ERAS: C199 || CT.C199, ERANAMES: C199 || CT.C199, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C362 || CT.C362, STANDALONEMONTHS: C362 || CT.C362, SHORTMONTHS: C202 || CT.C202, STANDALONESHORTMONTHS: C202 || CT.C202, WEEKDAYS: C363 || CT.C363, STANDALONEWEEKDAYS: C363 || CT.C363, SHORTWEEKDAYS: C364 || CT.C364, STANDALONESHORTWEEKDAYS: C364 || CT.C364, NARROWWEEKDAYS: C206 || CT.C206, STANDALONENARROWWEEKDAYS: C206 || CT.C206, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C207 || CT.C207, AMPMS: C365 || CT.C365, DATEFORMATS: C209 || CT.C209, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "gu", new date_symbols.DateSymbols.new({NAME: "gu", ERAS: C366 || CT.C366, ERANAMES: C367 || CT.C367, NARROWMONTHS: C368 || CT.C368, STANDALONENARROWMONTHS: C368 || CT.C368, MONTHS: C369 || CT.C369, STANDALONEMONTHS: C369 || CT.C369, SHORTMONTHS: C370 || CT.C370, STANDALONESHORTMONTHS: C370 || CT.C370, WEEKDAYS: C371 || CT.C371, STANDALONEWEEKDAYS: C371 || CT.C371, SHORTWEEKDAYS: C372 || CT.C372, STANDALONESHORTWEEKDAYS: C372 || CT.C372, NARROWWEEKDAYS: C373 || CT.C373, STANDALONENARROWWEEKDAYS: C373 || CT.C373, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C374 || CT.C374, AMPMS: C12 || CT.C12, DATEFORMATS: C106 || CT.C106, TIMEFORMATS: C375 || CT.C375, DATETIMEFORMATS: C376 || CT.C376, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "haw", new date_symbols.DateSymbols.new({NAME: "haw", ERAS: C377 || CT.C377, ERANAMES: C377 || CT.C377, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C378 || CT.C378, STANDALONEMONTHS: C378 || CT.C378, SHORTMONTHS: C379 || CT.C379, STANDALONESHORTMONTHS: C379 || CT.C379, WEEKDAYS: C380 || CT.C380, STANDALONEWEEKDAYS: C380 || CT.C380, SHORTWEEKDAYS: C381 || CT.C381, STANDALONESHORTWEEKDAYS: C381 || CT.C381, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C10 || CT.C10, AMPMS: C12 || CT.C12, DATEFORMATS: C227 || CT.C227, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "he", new date_symbols.DateSymbols.new({NAME: "he", ERAS: C382 || CT.C382, ERANAMES: C383 || CT.C383, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C384 || CT.C384, STANDALONEMONTHS: C384 || CT.C384, SHORTMONTHS: C385 || CT.C385, STANDALONESHORTMONTHS: C385 || CT.C385, WEEKDAYS: C386 || CT.C386, STANDALONEWEEKDAYS: C386 || CT.C386, SHORTWEEKDAYS: C387 || CT.C387, STANDALONESHORTWEEKDAYS: C387 || CT.C387, NARROWWEEKDAYS: C388 || CT.C388, STANDALONENARROWWEEKDAYS: C388 || CT.C388, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C389 || CT.C389, AMPMS: C390 || CT.C390, DATEFORMATS: C391 || CT.C391, TIMEFORMATS: C148 || CT.C148, DATETIMEFORMATS: C392 || CT.C392, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 5}), "hi", new date_symbols.DateSymbols.new({NAME: "hi", ERAS: C393 || CT.C393, ERANAMES: C394 || CT.C394, NARROWMONTHS: C395 || CT.C395, STANDALONENARROWMONTHS: C395 || CT.C395, MONTHS: C396 || CT.C396, STANDALONEMONTHS: C396 || CT.C396, SHORTMONTHS: C397 || CT.C397, STANDALONESHORTMONTHS: C397 || CT.C397, WEEKDAYS: C398 || CT.C398, STANDALONEWEEKDAYS: C398 || CT.C398, SHORTWEEKDAYS: C399 || CT.C399, STANDALONESHORTWEEKDAYS: C399 || CT.C399, NARROWWEEKDAYS: C400 || CT.C400, STANDALONENARROWWEEKDAYS: C400 || CT.C400, SHORTQUARTERS: C401 || CT.C401, QUARTERS: C402 || CT.C402, AMPMS: C232 || CT.C232, DATEFORMATS: C227 || CT.C227, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C403 || CT.C403, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "hr", new date_symbols.DateSymbols.new({NAME: "hr", ERAS: C404 || CT.C404, ERANAMES: C405 || CT.C405, NARROWMONTHS: C406 || CT.C406, STANDALONENARROWMONTHS: C406 || CT.C406, MONTHS: C407 || CT.C407, STANDALONEMONTHS: C408 || CT.C408, SHORTMONTHS: C409 || CT.C409, STANDALONESHORTMONTHS: C409 || CT.C409, WEEKDAYS: C125 || CT.C125, STANDALONEWEEKDAYS: C125 || CT.C125, SHORTWEEKDAYS: C126 || CT.C126, STANDALONESHORTWEEKDAYS: C126 || CT.C126, NARROWWEEKDAYS: C127 || CT.C127, STANDALONENARROWWEEKDAYS: C128 || CT.C128, SHORTQUARTERS: C410 || CT.C410, QUARTERS: C195 || CT.C195, AMPMS: C12 || CT.C12, DATEFORMATS: C411 || CT.C411, TIMEFORMATS: C412 || CT.C412, DATETIMEFORMATS: C133 || CT.C133, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "hu", new date_symbols.DateSymbols.new({NAME: "hu", ERAS: C413 || CT.C413, ERANAMES: C414 || CT.C414, NARROWMONTHS: C415 || CT.C415, STANDALONENARROWMONTHS: C415 || CT.C415, MONTHS: C416 || CT.C416, STANDALONEMONTHS: C416 || CT.C416, SHORTMONTHS: C417 || CT.C417, STANDALONESHORTMONTHS: C417 || CT.C417, WEEKDAYS: C418 || CT.C418, STANDALONEWEEKDAYS: C418 || CT.C418, SHORTWEEKDAYS: C419 || CT.C419, STANDALONESHORTWEEKDAYS: C419 || CT.C419, NARROWWEEKDAYS: C420 || CT.C420, STANDALONENARROWWEEKDAYS: C420 || CT.C420, SHORTQUARTERS: C421 || CT.C421, QUARTERS: C422 || CT.C422, AMPMS: C423 || CT.C423, DATEFORMATS: C424 || CT.C424, TIMEFORMATS: C148 || CT.C148, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "hy", new date_symbols.DateSymbols.new({NAME: "hy", ERAS: C425 || CT.C425, ERANAMES: C426 || CT.C426, NARROWMONTHS: C427 || CT.C427, STANDALONENARROWMONTHS: C427 || CT.C427, MONTHS: C428 || CT.C428, STANDALONEMONTHS: C429 || CT.C429, SHORTMONTHS: C430 || CT.C430, STANDALONESHORTMONTHS: C430 || CT.C430, WEEKDAYS: C431 || CT.C431, STANDALONEWEEKDAYS: C431 || CT.C431, SHORTWEEKDAYS: C432 || CT.C432, STANDALONESHORTWEEKDAYS: C432 || CT.C432, NARROWWEEKDAYS: C433 || CT.C433, STANDALONENARROWWEEKDAYS: C433 || CT.C433, SHORTQUARTERS: C434 || CT.C434, QUARTERS: C435 || CT.C435, AMPMS: C436 || CT.C436, DATEFORMATS: C437 || CT.C437, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "id", new date_symbols.DateSymbols.new({NAME: "id", ERAS: C438 || CT.C438, ERANAMES: C439 || CT.C439, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C440 || CT.C440, STANDALONEMONTHS: C440 || CT.C440, SHORTMONTHS: C441 || CT.C441, STANDALONESHORTMONTHS: C441 || CT.C441, WEEKDAYS: C442 || CT.C442, STANDALONEWEEKDAYS: C442 || CT.C442, SHORTWEEKDAYS: C443 || CT.C443, STANDALONESHORTWEEKDAYS: C443 || CT.C443, NARROWWEEKDAYS: C444 || CT.C444, STANDALONENARROWWEEKDAYS: C444 || CT.C444, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C445 || CT.C445, AMPMS: C12 || CT.C12, DATEFORMATS: C446 || CT.C446, TIMEFORMATS: C197 || CT.C197, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "in", new date_symbols.DateSymbols.new({NAME: "in", ERAS: C438 || CT.C438, ERANAMES: C439 || CT.C439, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C440 || CT.C440, STANDALONEMONTHS: C440 || CT.C440, SHORTMONTHS: C441 || CT.C441, STANDALONESHORTMONTHS: C441 || CT.C441, WEEKDAYS: C442 || CT.C442, STANDALONEWEEKDAYS: C442 || CT.C442, SHORTWEEKDAYS: C443 || CT.C443, STANDALONESHORTWEEKDAYS: C443 || CT.C443, NARROWWEEKDAYS: C444 || CT.C444, STANDALONENARROWWEEKDAYS: C444 || CT.C444, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C445 || CT.C445, AMPMS: C12 || CT.C12, DATEFORMATS: C446 || CT.C446, TIMEFORMATS: C197 || CT.C197, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "is", new date_symbols.DateSymbols.new({NAME: "is", ERAS: C187 || CT.C187, ERANAMES: C447 || CT.C447, NARROWMONTHS: C448 || CT.C448, STANDALONENARROWMONTHS: C448 || CT.C448, MONTHS: C449 || CT.C449, STANDALONEMONTHS: C449 || CT.C449, SHORTMONTHS: C450 || CT.C450, STANDALONESHORTMONTHS: C450 || CT.C450, WEEKDAYS: C451 || CT.C451, STANDALONEWEEKDAYS: C451 || CT.C451, SHORTWEEKDAYS: C452 || CT.C452, STANDALONESHORTWEEKDAYS: C452 || CT.C452, NARROWWEEKDAYS: C453 || CT.C453, STANDALONENARROWWEEKDAYS: C453 || CT.C453, SHORTQUARTERS: C454 || CT.C454, QUARTERS: C455 || CT.C455, AMPMS: C456 || CT.C456, DATEFORMATS: C457 || CT.C457, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C458 || CT.C458, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "it", new date_symbols.DateSymbols.new({NAME: "it", ERAS: C346 || CT.C346, ERANAMES: C459 || CT.C459, NARROWMONTHS: C460 || CT.C460, STANDALONENARROWMONTHS: C460 || CT.C460, MONTHS: C461 || CT.C461, STANDALONEMONTHS: C461 || CT.C461, SHORTMONTHS: C462 || CT.C462, STANDALONESHORTMONTHS: C462 || CT.C462, WEEKDAYS: C463 || CT.C463, STANDALONEWEEKDAYS: C463 || CT.C463, SHORTWEEKDAYS: C464 || CT.C464, STANDALONESHORTWEEKDAYS: C464 || CT.C464, NARROWWEEKDAYS: C465 || CT.C465, STANDALONENARROWWEEKDAYS: C465 || CT.C465, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C466 || CT.C466, AMPMS: C12 || CT.C12, DATEFORMATS: C467 || CT.C467, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C468 || CT.C468, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "it_CH", new date_symbols.DateSymbols.new({NAME: "it_CH", ERAS: C346 || CT.C346, ERANAMES: C459 || CT.C459, NARROWMONTHS: C460 || CT.C460, STANDALONENARROWMONTHS: C460 || CT.C460, MONTHS: C461 || CT.C461, STANDALONEMONTHS: C461 || CT.C461, SHORTMONTHS: C462 || CT.C462, STANDALONESHORTMONTHS: C462 || CT.C462, WEEKDAYS: C463 || CT.C463, STANDALONEWEEKDAYS: C463 || CT.C463, SHORTWEEKDAYS: C464 || CT.C464, STANDALONESHORTWEEKDAYS: C464 || CT.C464, NARROWWEEKDAYS: C465 || CT.C465, STANDALONENARROWWEEKDAYS: C465 || CT.C465, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C466 || CT.C466, AMPMS: C12 || CT.C12, DATEFORMATS: C333 || CT.C333, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C468 || CT.C468, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "iw", new date_symbols.DateSymbols.new({NAME: "iw", ERAS: C382 || CT.C382, ERANAMES: C383 || CT.C383, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C384 || CT.C384, STANDALONEMONTHS: C384 || CT.C384, SHORTMONTHS: C385 || CT.C385, STANDALONESHORTMONTHS: C385 || CT.C385, WEEKDAYS: C386 || CT.C386, STANDALONEWEEKDAYS: C386 || CT.C386, SHORTWEEKDAYS: C387 || CT.C387, STANDALONESHORTWEEKDAYS: C387 || CT.C387, NARROWWEEKDAYS: C388 || CT.C388, STANDALONENARROWWEEKDAYS: C388 || CT.C388, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C389 || CT.C389, AMPMS: C390 || CT.C390, DATEFORMATS: C391 || CT.C391, TIMEFORMATS: C148 || CT.C148, DATETIMEFORMATS: C392 || CT.C392, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 5}), "ja", new date_symbols.DateSymbols.new({NAME: "ja", ERAS: C469 || CT.C469, ERANAMES: C469 || CT.C469, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C470 || CT.C470, STANDALONEMONTHS: C470 || CT.C470, SHORTMONTHS: C470 || CT.C470, STANDALONESHORTMONTHS: C470 || CT.C470, WEEKDAYS: C471 || CT.C471, STANDALONEWEEKDAYS: C471 || CT.C471, SHORTWEEKDAYS: C472 || CT.C472, STANDALONESHORTWEEKDAYS: C472 || CT.C472, NARROWWEEKDAYS: C472 || CT.C472, STANDALONENARROWWEEKDAYS: C472 || CT.C472, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C473 || CT.C473, AMPMS: C474 || CT.C474, DATEFORMATS: C475 || CT.C475, TIMEFORMATS: C476 || CT.C476, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "ka", new date_symbols.DateSymbols.new({NAME: "ka", ERAS: C477 || CT.C477, ERANAMES: C478 || CT.C478, NARROWMONTHS: C479 || CT.C479, STANDALONENARROWMONTHS: C479 || CT.C479, MONTHS: C480 || CT.C480, STANDALONEMONTHS: C480 || CT.C480, SHORTMONTHS: C481 || CT.C481, STANDALONESHORTMONTHS: C481 || CT.C481, WEEKDAYS: C482 || CT.C482, STANDALONEWEEKDAYS: C482 || CT.C482, SHORTWEEKDAYS: C483 || CT.C483, STANDALONESHORTWEEKDAYS: C483 || CT.C483, NARROWWEEKDAYS: C484 || CT.C484, STANDALONENARROWWEEKDAYS: C484 || CT.C484, SHORTQUARTERS: C485 || CT.C485, QUARTERS: C486 || CT.C486, AMPMS: C12 || CT.C12, DATEFORMATS: C487 || CT.C487, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "kk", new date_symbols.DateSymbols.new({NAME: "kk", ERAS: C488 || CT.C488, ERANAMES: C489 || CT.C489, NARROWMONTHS: C490 || CT.C490, STANDALONENARROWMONTHS: C490 || CT.C490, MONTHS: C491 || CT.C491, STANDALONEMONTHS: C492 || CT.C492, SHORTMONTHS: C493 || CT.C493, STANDALONESHORTMONTHS: C494 || CT.C494, WEEKDAYS: C495 || CT.C495, STANDALONEWEEKDAYS: C496 || CT.C496, SHORTWEEKDAYS: C497 || CT.C497, STANDALONESHORTWEEKDAYS: C497 || CT.C497, NARROWWEEKDAYS: C498 || CT.C498, STANDALONENARROWWEEKDAYS: C498 || CT.C498, SHORTQUARTERS: C499 || CT.C499, QUARTERS: C500 || CT.C500, AMPMS: C12 || CT.C12, DATEFORMATS: C501 || CT.C501, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "km", new date_symbols.DateSymbols.new({NAME: "km", ERAS: C502 || CT.C502, ERANAMES: C503 || CT.C503, NARROWMONTHS: C504 || CT.C504, STANDALONENARROWMONTHS: C504 || CT.C504, MONTHS: C505 || CT.C505, STANDALONEMONTHS: C505 || CT.C505, SHORTMONTHS: C505 || CT.C505, STANDALONESHORTMONTHS: C505 || CT.C505, WEEKDAYS: C506 || CT.C506, STANDALONEWEEKDAYS: C506 || CT.C506, SHORTWEEKDAYS: C506 || CT.C506, STANDALONESHORTWEEKDAYS: C506 || CT.C506, NARROWWEEKDAYS: C507 || CT.C507, STANDALONENARROWWEEKDAYS: C507 || CT.C507, SHORTQUARTERS: C508 || CT.C508, QUARTERS: C508 || CT.C508, AMPMS: C12 || CT.C12, DATEFORMATS: C509 || CT.C509, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C510 || CT.C510, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "kn", new date_symbols.DateSymbols.new({NAME: "kn", ERAS: C511 || CT.C511, ERANAMES: C512 || CT.C512, NARROWMONTHS: C513 || CT.C513, STANDALONENARROWMONTHS: C513 || CT.C513, MONTHS: C514 || CT.C514, STANDALONEMONTHS: C514 || CT.C514, SHORTMONTHS: C515 || CT.C515, STANDALONESHORTMONTHS: C516 || CT.C516, WEEKDAYS: C517 || CT.C517, STANDALONEWEEKDAYS: C517 || CT.C517, SHORTWEEKDAYS: C518 || CT.C518, STANDALONESHORTWEEKDAYS: C518 || CT.C518, NARROWWEEKDAYS: C519 || CT.C519, STANDALONENARROWWEEKDAYS: C519 || CT.C519, SHORTQUARTERS: C520 || CT.C520, QUARTERS: C521 || CT.C521, AMPMS: C522 || CT.C522, DATEFORMATS: C523 || CT.C523, TIMEFORMATS: C375 || CT.C375, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "ko", new date_symbols.DateSymbols.new({NAME: "ko", ERAS: C2 || CT.C2, ERANAMES: C524 || CT.C524, NARROWMONTHS: C525 || CT.C525, STANDALONENARROWMONTHS: C525 || CT.C525, MONTHS: C525 || CT.C525, STANDALONEMONTHS: C525 || CT.C525, SHORTMONTHS: C525 || CT.C525, STANDALONESHORTMONTHS: C525 || CT.C525, WEEKDAYS: C526 || CT.C526, STANDALONEWEEKDAYS: C526 || CT.C526, SHORTWEEKDAYS: C527 || CT.C527, STANDALONESHORTWEEKDAYS: C527 || CT.C527, NARROWWEEKDAYS: C527 || CT.C527, STANDALONENARROWWEEKDAYS: C527 || CT.C527, SHORTQUARTERS: C528 || CT.C528, QUARTERS: C529 || CT.C529, AMPMS: C530 || CT.C530, DATEFORMATS: C531 || CT.C531, TIMEFORMATS: C532 || CT.C532, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "ky", new date_symbols.DateSymbols.new({NAME: "ky", ERAS: C533 || CT.C533, ERANAMES: C534 || CT.C534, NARROWMONTHS: C535 || CT.C535, STANDALONENARROWMONTHS: C535 || CT.C535, MONTHS: C536 || CT.C536, STANDALONEMONTHS: C537 || CT.C537, SHORTMONTHS: C538 || CT.C538, STANDALONESHORTMONTHS: C539 || CT.C539, WEEKDAYS: C540 || CT.C540, STANDALONEWEEKDAYS: C540 || CT.C540, SHORTWEEKDAYS: C541 || CT.C541, STANDALONESHORTWEEKDAYS: C541 || CT.C541, NARROWWEEKDAYS: C542 || CT.C542, STANDALONENARROWWEEKDAYS: C542 || CT.C542, SHORTQUARTERS: C543 || CT.C543, QUARTERS: C544 || CT.C544, AMPMS: C545 || CT.C545, DATEFORMATS: C546 || CT.C546, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ln", new date_symbols.DateSymbols.new({NAME: "ln", ERAS: C547 || CT.C547, ERANAMES: C548 || CT.C548, NARROWMONTHS: C549 || CT.C549, STANDALONENARROWMONTHS: C549 || CT.C549, MONTHS: C550 || CT.C550, STANDALONEMONTHS: C550 || CT.C550, SHORTMONTHS: C551 || CT.C551, STANDALONESHORTMONTHS: C551 || CT.C551, WEEKDAYS: C552 || CT.C552, STANDALONEWEEKDAYS: C552 || CT.C552, SHORTWEEKDAYS: C553 || CT.C553, STANDALONESHORTWEEKDAYS: C553 || CT.C553, NARROWWEEKDAYS: C554 || CT.C554, STANDALONENARROWWEEKDAYS: C554 || CT.C554, SHORTQUARTERS: C555 || CT.C555, QUARTERS: C556 || CT.C556, AMPMS: C557 || CT.C557, DATEFORMATS: C558 || CT.C558, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "lo", new date_symbols.DateSymbols.new({NAME: "lo", ERAS: C559 || CT.C559, ERANAMES: C560 || CT.C560, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C561 || CT.C561, STANDALONEMONTHS: C561 || CT.C561, SHORTMONTHS: C562 || CT.C562, STANDALONESHORTMONTHS: C562 || CT.C562, WEEKDAYS: C563 || CT.C563, STANDALONEWEEKDAYS: C563 || CT.C563, SHORTWEEKDAYS: C564 || CT.C564, STANDALONESHORTWEEKDAYS: C564 || CT.C564, NARROWWEEKDAYS: C565 || CT.C565, STANDALONENARROWWEEKDAYS: C565 || CT.C565, SHORTQUARTERS: C566 || CT.C566, QUARTERS: C567 || CT.C567, AMPMS: C568 || CT.C568, DATEFORMATS: C569 || CT.C569, TIMEFORMATS: C570 || CT.C570, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "lt", new date_symbols.DateSymbols.new({NAME: "lt", ERAS: C571 || CT.C571, ERANAMES: C572 || CT.C572, NARROWMONTHS: C573 || CT.C573, STANDALONENARROWMONTHS: C573 || CT.C573, MONTHS: C574 || CT.C574, STANDALONEMONTHS: C575 || CT.C575, SHORTMONTHS: C576 || CT.C576, STANDALONESHORTMONTHS: C576 || CT.C576, WEEKDAYS: C577 || CT.C577, STANDALONEWEEKDAYS: C577 || CT.C577, SHORTWEEKDAYS: C578 || CT.C578, STANDALONESHORTWEEKDAYS: C578 || CT.C578, NARROWWEEKDAYS: C579 || CT.C579, STANDALONENARROWWEEKDAYS: C579 || CT.C579, SHORTQUARTERS: C580 || CT.C580, QUARTERS: C581 || CT.C581, AMPMS: C582 || CT.C582, DATEFORMATS: C583 || CT.C583, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "lv", new date_symbols.DateSymbols.new({NAME: "lv", ERAS: C584 || CT.C584, ERANAMES: C585 || CT.C585, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C586 || CT.C586, STANDALONEMONTHS: C586 || CT.C586, SHORTMONTHS: C587 || CT.C587, STANDALONESHORTMONTHS: C587 || CT.C587, WEEKDAYS: C588 || CT.C588, STANDALONEWEEKDAYS: C589 || CT.C589, SHORTWEEKDAYS: C590 || CT.C590, STANDALONESHORTWEEKDAYS: C591 || CT.C591, NARROWWEEKDAYS: C592 || CT.C592, STANDALONENARROWWEEKDAYS: C592 || CT.C592, SHORTQUARTERS: C593 || CT.C593, QUARTERS: C594 || CT.C594, AMPMS: C595 || CT.C595, DATEFORMATS: C596 || CT.C596, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "mk", new date_symbols.DateSymbols.new({NAME: "mk", ERAS: C597 || CT.C597, ERANAMES: C598 || CT.C598, NARROWMONTHS: C599 || CT.C599, STANDALONENARROWMONTHS: C599 || CT.C599, MONTHS: C600 || CT.C600, STANDALONEMONTHS: C600 || CT.C600, SHORTMONTHS: C601 || CT.C601, STANDALONESHORTMONTHS: C601 || CT.C601, WEEKDAYS: C602 || CT.C602, STANDALONEWEEKDAYS: C602 || CT.C602, SHORTWEEKDAYS: C603 || CT.C603, STANDALONESHORTWEEKDAYS: C604 || CT.C604, NARROWWEEKDAYS: C89 || CT.C89, STANDALONENARROWWEEKDAYS: C89 || CT.C89, SHORTQUARTERS: C605 || CT.C605, QUARTERS: C606 || CT.C606, AMPMS: C607 || CT.C607, DATEFORMATS: C608 || CT.C608, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ml", new date_symbols.DateSymbols.new({NAME: "ml", ERAS: C609 || CT.C609, ERANAMES: C610 || CT.C610, NARROWMONTHS: C611 || CT.C611, STANDALONENARROWMONTHS: C611 || CT.C611, MONTHS: C612 || CT.C612, STANDALONEMONTHS: C612 || CT.C612, SHORTMONTHS: C613 || CT.C613, STANDALONESHORTMONTHS: C613 || CT.C613, WEEKDAYS: C614 || CT.C614, STANDALONEWEEKDAYS: C615 || CT.C615, SHORTWEEKDAYS: C616 || CT.C616, STANDALONESHORTWEEKDAYS: C616 || CT.C616, NARROWWEEKDAYS: C617 || CT.C617, STANDALONENARROWWEEKDAYS: C618 || CT.C618, SHORTQUARTERS: C619 || CT.C619, QUARTERS: C619 || CT.C619, AMPMS: C12 || CT.C12, DATEFORMATS: C620 || CT.C620, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "mn", new date_symbols.DateSymbols.new({NAME: "mn", ERAS: C621 || CT.C621, ERANAMES: C622 || CT.C622, NARROWMONTHS: C623 || CT.C623, STANDALONENARROWMONTHS: C623 || CT.C623, MONTHS: C624 || CT.C624, STANDALONEMONTHS: C624 || CT.C624, SHORTMONTHS: C625 || CT.C625, STANDALONESHORTMONTHS: C625 || CT.C625, WEEKDAYS: C626 || CT.C626, STANDALONEWEEKDAYS: C626 || CT.C626, SHORTWEEKDAYS: C627 || CT.C627, STANDALONESHORTWEEKDAYS: C627 || CT.C627, NARROWWEEKDAYS: C627 || CT.C627, STANDALONENARROWWEEKDAYS: C627 || CT.C627, SHORTQUARTERS: C628 || CT.C628, QUARTERS: C629 || CT.C629, AMPMS: C630 || CT.C630, DATEFORMATS: C631 || CT.C631, TIMEFORMATS: C282 || CT.C282, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "mr", new date_symbols.DateSymbols.new({NAME: "mr", ZERODIGIT: "०", ERAS: C632 || CT.C632, ERANAMES: C633 || CT.C633, NARROWMONTHS: C634 || CT.C634, STANDALONENARROWMONTHS: C634 || CT.C634, MONTHS: C635 || CT.C635, STANDALONEMONTHS: C635 || CT.C635, SHORTMONTHS: C636 || CT.C636, STANDALONESHORTMONTHS: C636 || CT.C636, WEEKDAYS: C637 || CT.C637, STANDALONEWEEKDAYS: C637 || CT.C637, SHORTWEEKDAYS: C638 || CT.C638, STANDALONESHORTWEEKDAYS: C638 || CT.C638, NARROWWEEKDAYS: C400 || CT.C400, STANDALONENARROWWEEKDAYS: C400 || CT.C400, SHORTQUARTERS: C639 || CT.C639, QUARTERS: C640 || CT.C640, AMPMS: C641 || CT.C641, DATEFORMATS: C106 || CT.C106, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C642 || CT.C642, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "ms", new date_symbols.DateSymbols.new({NAME: "ms", ERAS: C643 || CT.C643, ERANAMES: C643 || CT.C643, NARROWMONTHS: C644 || CT.C644, STANDALONENARROWMONTHS: C644 || CT.C644, MONTHS: C645 || CT.C645, STANDALONEMONTHS: C645 || CT.C645, SHORTMONTHS: C646 || CT.C646, STANDALONESHORTMONTHS: C646 || CT.C646, WEEKDAYS: C647 || CT.C647, STANDALONEWEEKDAYS: C647 || CT.C647, SHORTWEEKDAYS: C648 || CT.C648, STANDALONESHORTWEEKDAYS: C648 || CT.C648, NARROWWEEKDAYS: C649 || CT.C649, STANDALONENARROWWEEKDAYS: C649 || CT.C649, SHORTQUARTERS: C650 || CT.C650, QUARTERS: C651 || CT.C651, AMPMS: C652 || CT.C652, DATEFORMATS: C653 || CT.C653, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C468 || CT.C468, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "mt", new date_symbols.DateSymbols.new({NAME: "mt", ERAS: C654 || CT.C654, ERANAMES: C655 || CT.C655, NARROWMONTHS: C656 || CT.C656, STANDALONENARROWMONTHS: C657 || CT.C657, MONTHS: C658 || CT.C658, STANDALONEMONTHS: C658 || CT.C658, SHORTMONTHS: C659 || CT.C659, STANDALONESHORTMONTHS: C659 || CT.C659, WEEKDAYS: C660 || CT.C660, STANDALONEWEEKDAYS: C660 || CT.C660, SHORTWEEKDAYS: C661 || CT.C661, STANDALONESHORTWEEKDAYS: C661 || CT.C661, NARROWWEEKDAYS: C662 || CT.C662, STANDALONENARROWWEEKDAYS: C663 || CT.C663, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C664 || CT.C664, AMPMS: C12 || CT.C12, DATEFORMATS: C665 || CT.C665, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "my", new date_symbols.DateSymbols.new({NAME: "my", ZERODIGIT: "၀", ERAS: C666 || CT.C666, ERANAMES: C667 || CT.C667, NARROWMONTHS: C668 || CT.C668, STANDALONENARROWMONTHS: C668 || CT.C668, MONTHS: C669 || CT.C669, STANDALONEMONTHS: C669 || CT.C669, SHORTMONTHS: C670 || CT.C670, STANDALONESHORTMONTHS: C670 || CT.C670, WEEKDAYS: C671 || CT.C671, STANDALONEWEEKDAYS: C671 || CT.C671, SHORTWEEKDAYS: C671 || CT.C671, STANDALONESHORTWEEKDAYS: C671 || CT.C671, NARROWWEEKDAYS: C672 || CT.C672, STANDALONENARROWWEEKDAYS: C672 || CT.C672, SHORTQUARTERS: C673 || CT.C673, QUARTERS: C673 || CT.C673, AMPMS: C674 || CT.C674, DATEFORMATS: C675 || CT.C675, TIMEFORMATS: C676 || CT.C676, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "nb", new date_symbols.DateSymbols.new({NAME: "nb", ERAS: C187 || CT.C187, ERANAMES: C677 || CT.C677, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C678 || CT.C678, STANDALONEMONTHS: C678 || CT.C678, SHORTMONTHS: C679 || CT.C679, STANDALONESHORTMONTHS: C680 || CT.C680, WEEKDAYS: C190 || CT.C190, STANDALONEWEEKDAYS: C190 || CT.C190, SHORTWEEKDAYS: C191 || CT.C191, STANDALONESHORTWEEKDAYS: C191 || CT.C191, NARROWWEEKDAYS: C193 || CT.C193, STANDALONENARROWWEEKDAYS: C193 || CT.C193, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C195 || CT.C195, AMPMS: C233 || CT.C233, DATEFORMATS: C681 || CT.C681, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C682 || CT.C682, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "ne", new date_symbols.DateSymbols.new({NAME: "ne", ZERODIGIT: "०", ERAS: C683 || CT.C683, ERANAMES: C683 || CT.C683, NARROWMONTHS: C684 || CT.C684, STANDALONENARROWMONTHS: C685 || CT.C685, MONTHS: C686 || CT.C686, STANDALONEMONTHS: C686 || CT.C686, SHORTMONTHS: C686 || CT.C686, STANDALONESHORTMONTHS: C686 || CT.C686, WEEKDAYS: C687 || CT.C687, STANDALONEWEEKDAYS: C687 || CT.C687, SHORTWEEKDAYS: C688 || CT.C688, STANDALONESHORTWEEKDAYS: C688 || CT.C688, NARROWWEEKDAYS: C689 || CT.C689, STANDALONENARROWWEEKDAYS: C689 || CT.C689, SHORTQUARTERS: C690 || CT.C690, QUARTERS: C690 || CT.C690, AMPMS: C691 || CT.C691, DATEFORMATS: C692 || CT.C692, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C468 || CT.C468, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "nl", new date_symbols.DateSymbols.new({NAME: "nl", ERAS: C693 || CT.C693, ERANAMES: C18 || CT.C18, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C694 || CT.C694, STANDALONEMONTHS: C694 || CT.C694, SHORTMONTHS: C695 || CT.C695, STANDALONESHORTMONTHS: C695 || CT.C695, WEEKDAYS: C696 || CT.C696, STANDALONEWEEKDAYS: C696 || CT.C696, SHORTWEEKDAYS: C697 || CT.C697, STANDALONESHORTWEEKDAYS: C697 || CT.C697, NARROWWEEKDAYS: C698 || CT.C698, STANDALONENARROWWEEKDAYS: C698 || CT.C698, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C699 || CT.C699, AMPMS: C233 || CT.C233, DATEFORMATS: C700 || CT.C700, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C701 || CT.C701, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "no", new date_symbols.DateSymbols.new({NAME: "no", ERAS: C187 || CT.C187, ERANAMES: C677 || CT.C677, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C678 || CT.C678, STANDALONEMONTHS: C678 || CT.C678, SHORTMONTHS: C679 || CT.C679, STANDALONESHORTMONTHS: C680 || CT.C680, WEEKDAYS: C190 || CT.C190, STANDALONEWEEKDAYS: C190 || CT.C190, SHORTWEEKDAYS: C191 || CT.C191, STANDALONESHORTWEEKDAYS: C191 || CT.C191, NARROWWEEKDAYS: C193 || CT.C193, STANDALONENARROWWEEKDAYS: C193 || CT.C193, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C195 || CT.C195, AMPMS: C233 || CT.C233, DATEFORMATS: C681 || CT.C681, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C682 || CT.C682, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "no_NO", new date_symbols.DateSymbols.new({NAME: "no_NO", ERAS: C187 || CT.C187, ERANAMES: C677 || CT.C677, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C678 || CT.C678, STANDALONEMONTHS: C678 || CT.C678, SHORTMONTHS: C679 || CT.C679, STANDALONESHORTMONTHS: C680 || CT.C680, WEEKDAYS: C190 || CT.C190, STANDALONEWEEKDAYS: C190 || CT.C190, SHORTWEEKDAYS: C191 || CT.C191, STANDALONESHORTWEEKDAYS: C191 || CT.C191, NARROWWEEKDAYS: C193 || CT.C193, STANDALONENARROWWEEKDAYS: C193 || CT.C193, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C195 || CT.C195, AMPMS: C233 || CT.C233, DATEFORMATS: C681 || CT.C681, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C682 || CT.C682, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "or", new date_symbols.DateSymbols.new({NAME: "or", ERAS: C2 || CT.C2, ERANAMES: C702 || CT.C702, NARROWMONTHS: C703 || CT.C703, STANDALONENARROWMONTHS: C703 || CT.C703, MONTHS: C704 || CT.C704, STANDALONEMONTHS: C704 || CT.C704, SHORTMONTHS: C704 || CT.C704, STANDALONESHORTMONTHS: C704 || CT.C704, WEEKDAYS: C705 || CT.C705, STANDALONEWEEKDAYS: C705 || CT.C705, SHORTWEEKDAYS: C706 || CT.C706, STANDALONESHORTWEEKDAYS: C706 || CT.C706, NARROWWEEKDAYS: C707 || CT.C707, STANDALONENARROWWEEKDAYS: C707 || CT.C707, SHORTQUARTERS: C708 || CT.C708, QUARTERS: C708 || CT.C708, AMPMS: C12 || CT.C12, DATEFORMATS: C159 || CT.C159, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C709 || CT.C709, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "pa", new date_symbols.DateSymbols.new({NAME: "pa", ERAS: C710 || CT.C710, ERANAMES: C711 || CT.C711, NARROWMONTHS: C712 || CT.C712, STANDALONENARROWMONTHS: C712 || CT.C712, MONTHS: C713 || CT.C713, STANDALONEMONTHS: C713 || CT.C713, SHORTMONTHS: C714 || CT.C714, STANDALONESHORTMONTHS: C714 || CT.C714, WEEKDAYS: C715 || CT.C715, STANDALONEWEEKDAYS: C715 || CT.C715, SHORTWEEKDAYS: C716 || CT.C716, STANDALONESHORTWEEKDAYS: C716 || CT.C716, NARROWWEEKDAYS: C717 || CT.C717, STANDALONENARROWWEEKDAYS: C717 || CT.C717, SHORTQUARTERS: C718 || CT.C718, QUARTERS: C719 || CT.C719, AMPMS: C720 || CT.C720, DATEFORMATS: C227 || CT.C227, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C468 || CT.C468, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "pl", new date_symbols.DateSymbols.new({NAME: "pl", ERAS: C721 || CT.C721, ERANAMES: C722 || CT.C722, NARROWMONTHS: C723 || CT.C723, STANDALONENARROWMONTHS: C724 || CT.C724, MONTHS: C725 || CT.C725, STANDALONEMONTHS: C726 || CT.C726, SHORTMONTHS: C727 || CT.C727, STANDALONESHORTMONTHS: C727 || CT.C727, WEEKDAYS: C728 || CT.C728, STANDALONEWEEKDAYS: C728 || CT.C728, SHORTWEEKDAYS: C729 || CT.C729, STANDALONESHORTWEEKDAYS: C729 || CT.C729, NARROWWEEKDAYS: C730 || CT.C730, STANDALONENARROWWEEKDAYS: C731 || CT.C731, SHORTQUARTERS: C732 || CT.C732, QUARTERS: C733 || CT.C733, AMPMS: C12 || CT.C12, DATEFORMATS: C734 || CT.C734, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C468 || CT.C468, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "ps", new date_symbols.DateSymbols.new({NAME: "ps", ZERODIGIT: "۰", ERAS: C735 || CT.C735, ERANAMES: C736 || CT.C736, NARROWMONTHS: C737 || CT.C737, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C738 || CT.C738, STANDALONEMONTHS: C739 || CT.C739, SHORTMONTHS: C738 || CT.C738, STANDALONESHORTMONTHS: C740 || CT.C740, WEEKDAYS: C741 || CT.C741, STANDALONEWEEKDAYS: C741 || CT.C741, SHORTWEEKDAYS: C741 || CT.C741, STANDALONESHORTWEEKDAYS: C741 || CT.C741, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C742 || CT.C742, QUARTERS: C742 || CT.C742, AMPMS: C743 || CT.C743, DATEFORMATS: C744 || CT.C744, TIMEFORMATS: C294 || CT.C294, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C745 || CT.C745, FIRSTWEEKCUTOFFDAY: 4}), "pt", new date_symbols.DateSymbols.new({NAME: "pt", ERAS: C346 || CT.C346, ERANAMES: C746 || CT.C746, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C747 || CT.C747, STANDALONEMONTHS: C747 || CT.C747, SHORTMONTHS: C748 || CT.C748, STANDALONESHORTMONTHS: C748 || CT.C748, WEEKDAYS: C749 || CT.C749, STANDALONEWEEKDAYS: C749 || CT.C749, SHORTWEEKDAYS: C750 || CT.C750, STANDALONESHORTWEEKDAYS: C750 || CT.C750, NARROWWEEKDAYS: C751 || CT.C751, STANDALONENARROWWEEKDAYS: C751 || CT.C751, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C466 || CT.C466, AMPMS: C12 || CT.C12, DATEFORMATS: C752 || CT.C752, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "pt_BR", new date_symbols.DateSymbols.new({NAME: "pt_BR", ERAS: C346 || CT.C346, ERANAMES: C746 || CT.C746, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C747 || CT.C747, STANDALONEMONTHS: C747 || CT.C747, SHORTMONTHS: C748 || CT.C748, STANDALONESHORTMONTHS: C748 || CT.C748, WEEKDAYS: C749 || CT.C749, STANDALONEWEEKDAYS: C749 || CT.C749, SHORTWEEKDAYS: C750 || CT.C750, STANDALONESHORTWEEKDAYS: C750 || CT.C750, NARROWWEEKDAYS: C751 || CT.C751, STANDALONENARROWWEEKDAYS: C751 || CT.C751, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C466 || CT.C466, AMPMS: C12 || CT.C12, DATEFORMATS: C752 || CT.C752, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "pt_PT", new date_symbols.DateSymbols.new({NAME: "pt_PT", ERAS: C346 || CT.C346, ERANAMES: C746 || CT.C746, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C747 || CT.C747, STANDALONEMONTHS: C747 || CT.C747, SHORTMONTHS: C748 || CT.C748, STANDALONESHORTMONTHS: C748 || CT.C748, WEEKDAYS: C749 || CT.C749, STANDALONEWEEKDAYS: C749 || CT.C749, SHORTWEEKDAYS: C753 || CT.C753, STANDALONESHORTWEEKDAYS: C753 || CT.C753, NARROWWEEKDAYS: C751 || CT.C751, STANDALONENARROWWEEKDAYS: C751 || CT.C751, SHORTQUARTERS: C247 || CT.C247, QUARTERS: C255 || CT.C255, AMPMS: C754 || CT.C754, DATEFORMATS: C360 || CT.C360, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C755 || CT.C755, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "ro", new date_symbols.DateSymbols.new({NAME: "ro", ERAS: C756 || CT.C756, ERANAMES: C757 || CT.C757, NARROWMONTHS: C758 || CT.C758, STANDALONENARROWMONTHS: C758 || CT.C758, MONTHS: C759 || CT.C759, STANDALONEMONTHS: C759 || CT.C759, SHORTMONTHS: C760 || CT.C760, STANDALONESHORTMONTHS: C760 || CT.C760, WEEKDAYS: C761 || CT.C761, STANDALONEWEEKDAYS: C761 || CT.C761, SHORTWEEKDAYS: C762 || CT.C762, STANDALONESHORTWEEKDAYS: C762 || CT.C762, NARROWWEEKDAYS: C254 || CT.C254, STANDALONENARROWWEEKDAYS: C254 || CT.C254, SHORTQUARTERS: C763 || CT.C763, QUARTERS: C764 || CT.C764, AMPMS: C233 || CT.C233, DATEFORMATS: C734 || CT.C734, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ru", new date_symbols.DateSymbols.new({NAME: "ru", ERAS: C765 || CT.C765, ERANAMES: C766 || CT.C766, NARROWMONTHS: C535 || CT.C535, STANDALONENARROWMONTHS: C535 || CT.C535, MONTHS: C767 || CT.C767, STANDALONEMONTHS: C536 || CT.C536, SHORTMONTHS: C768 || CT.C768, STANDALONESHORTMONTHS: C769 || CT.C769, WEEKDAYS: C770 || CT.C770, STANDALONEWEEKDAYS: C770 || CT.C770, SHORTWEEKDAYS: C771 || CT.C771, STANDALONESHORTWEEKDAYS: C771 || CT.C771, NARROWWEEKDAYS: C771 || CT.C771, STANDALONENARROWWEEKDAYS: C772 || CT.C772, SHORTQUARTERS: C773 || CT.C773, QUARTERS: C774 || CT.C774, AMPMS: C12 || CT.C12, DATEFORMATS: C775 || CT.C775, TIMEFORMATS: C148 || CT.C148, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "si", new date_symbols.DateSymbols.new({NAME: "si", ERAS: C776 || CT.C776, ERANAMES: C777 || CT.C777, NARROWMONTHS: C778 || CT.C778, STANDALONENARROWMONTHS: C778 || CT.C778, MONTHS: C779 || CT.C779, STANDALONEMONTHS: C779 || CT.C779, SHORTMONTHS: C780 || CT.C780, STANDALONESHORTMONTHS: C781 || CT.C781, WEEKDAYS: C782 || CT.C782, STANDALONEWEEKDAYS: C782 || CT.C782, SHORTWEEKDAYS: C783 || CT.C783, STANDALONESHORTWEEKDAYS: C783 || CT.C783, NARROWWEEKDAYS: C784 || CT.C784, STANDALONENARROWWEEKDAYS: C784 || CT.C784, SHORTQUARTERS: C785 || CT.C785, QUARTERS: C786 || CT.C786, AMPMS: C787 || CT.C787, DATEFORMATS: C788 || CT.C788, TIMEFORMATS: C197 || CT.C197, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sk", new date_symbols.DateSymbols.new({NAME: "sk", ERAS: C789 || CT.C789, ERANAMES: C790 || CT.C790, NARROWMONTHS: C122 || CT.C122, STANDALONENARROWMONTHS: C122 || CT.C122, MONTHS: C791 || CT.C791, STANDALONEMONTHS: C792 || CT.C792, SHORTMONTHS: C793 || CT.C793, STANDALONESHORTMONTHS: C793 || CT.C793, WEEKDAYS: C794 || CT.C794, STANDALONEWEEKDAYS: C794 || CT.C794, SHORTWEEKDAYS: C795 || CT.C795, STANDALONESHORTWEEKDAYS: C795 || CT.C795, NARROWWEEKDAYS: C796 || CT.C796, STANDALONENARROWWEEKDAYS: C796 || CT.C796, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C797 || CT.C797, AMPMS: C12 || CT.C12, DATEFORMATS: C798 || CT.C798, TIMEFORMATS: C148 || CT.C148, DATETIMEFORMATS: C799 || CT.C799, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "sl", new date_symbols.DateSymbols.new({NAME: "sl", ERAS: C571 || CT.C571, ERANAMES: C800 || CT.C800, NARROWMONTHS: C122 || CT.C122, STANDALONENARROWMONTHS: C122 || CT.C122, MONTHS: C801 || CT.C801, STANDALONEMONTHS: C801 || CT.C801, SHORTMONTHS: C802 || CT.C802, STANDALONESHORTMONTHS: C802 || CT.C802, WEEKDAYS: C803 || CT.C803, STANDALONEWEEKDAYS: C803 || CT.C803, SHORTWEEKDAYS: C804 || CT.C804, STANDALONESHORTWEEKDAYS: C804 || CT.C804, NARROWWEEKDAYS: C805 || CT.C805, STANDALONENARROWWEEKDAYS: C805 || CT.C805, SHORTQUARTERS: C806 || CT.C806, QUARTERS: C807 || CT.C807, AMPMS: C808 || CT.C808, DATEFORMATS: C809 || CT.C809, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sq", new date_symbols.DateSymbols.new({NAME: "sq", ERAS: C810 || CT.C810, ERANAMES: C811 || CT.C811, NARROWMONTHS: C812 || CT.C812, STANDALONENARROWMONTHS: C813 || CT.C813, MONTHS: C814 || CT.C814, STANDALONEMONTHS: C815 || CT.C815, SHORTMONTHS: C816 || CT.C816, STANDALONESHORTMONTHS: C817 || CT.C817, WEEKDAYS: C818 || CT.C818, STANDALONEWEEKDAYS: C819 || CT.C819, SHORTWEEKDAYS: C820 || CT.C820, STANDALONESHORTWEEKDAYS: C820 || CT.C820, NARROWWEEKDAYS: C821 || CT.C821, STANDALONENARROWWEEKDAYS: C821 || CT.C821, SHORTQUARTERS: C822 || CT.C822, QUARTERS: C823 || CT.C823, AMPMS: C824 || CT.C824, DATEFORMATS: C825 || CT.C825, TIMEFORMATS: C826 || CT.C826, DATETIMEFORMATS: C827 || CT.C827, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sr", new date_symbols.DateSymbols.new({NAME: "sr", ERAS: C828 || CT.C828, ERANAMES: C829 || CT.C829, NARROWMONTHS: C599 || CT.C599, STANDALONENARROWMONTHS: C599 || CT.C599, MONTHS: C830 || CT.C830, STANDALONEMONTHS: C830 || CT.C830, SHORTMONTHS: C831 || CT.C831, STANDALONESHORTMONTHS: C831 || CT.C831, WEEKDAYS: C832 || CT.C832, STANDALONEWEEKDAYS: C832 || CT.C832, SHORTWEEKDAYS: C833 || CT.C833, STANDALONESHORTWEEKDAYS: C833 || CT.C833, NARROWWEEKDAYS: C834 || CT.C834, STANDALONENARROWWEEKDAYS: C834 || CT.C834, SHORTQUARTERS: C835 || CT.C835, QUARTERS: C836 || CT.C836, AMPMS: C837 || CT.C837, DATEFORMATS: C838 || CT.C838, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sr_Latn", new date_symbols.DateSymbols.new({NAME: "sr_Latn", ERAS: C120 || CT.C120, ERANAMES: C839 || CT.C839, NARROWMONTHS: C122 || CT.C122, STANDALONENARROWMONTHS: C122 || CT.C122, MONTHS: C840 || CT.C840, STANDALONEMONTHS: C840 || CT.C840, SHORTMONTHS: C124 || CT.C124, STANDALONESHORTMONTHS: C124 || CT.C124, WEEKDAYS: C841 || CT.C841, STANDALONEWEEKDAYS: C841 || CT.C841, SHORTWEEKDAYS: C842 || CT.C842, STANDALONESHORTWEEKDAYS: C842 || CT.C842, NARROWWEEKDAYS: C128 || CT.C128, STANDALONENARROWWEEKDAYS: C128 || CT.C128, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C843 || CT.C843, AMPMS: C844 || CT.C844, DATEFORMATS: C838 || CT.C838, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sv", new date_symbols.DateSymbols.new({NAME: "sv", ERAS: C187 || CT.C187, ERANAMES: C845 || CT.C845, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C846 || CT.C846, STANDALONEMONTHS: C846 || CT.C846, SHORTMONTHS: C847 || CT.C847, STANDALONESHORTMONTHS: C847 || CT.C847, WEEKDAYS: C848 || CT.C848, STANDALONEWEEKDAYS: C848 || CT.C848, SHORTWEEKDAYS: C849 || CT.C849, STANDALONESHORTWEEKDAYS: C849 || CT.C849, NARROWWEEKDAYS: C193 || CT.C193, STANDALONENARROWWEEKDAYS: C193 || CT.C193, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C850 || CT.C850, AMPMS: C851 || CT.C851, DATEFORMATS: C852 || CT.C852, TIMEFORMATS: C853 || CT.C853, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "sw", new date_symbols.DateSymbols.new({NAME: "sw", ERAS: C854 || CT.C854, ERANAMES: C855 || CT.C855, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C856 || CT.C856, STANDALONEMONTHS: C856 || CT.C856, SHORTMONTHS: C857 || CT.C857, STANDALONESHORTMONTHS: C857 || CT.C857, WEEKDAYS: C858 || CT.C858, STANDALONEWEEKDAYS: C858 || CT.C858, SHORTWEEKDAYS: C858 || CT.C858, STANDALONESHORTWEEKDAYS: C858 || CT.C858, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C859 || CT.C859, QUARTERS: C859 || CT.C859, AMPMS: C12 || CT.C12, DATEFORMATS: C235 || CT.C235, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ta", new date_symbols.DateSymbols.new({NAME: "ta", ERAS: C860 || CT.C860, ERANAMES: C861 || CT.C861, NARROWMONTHS: C862 || CT.C862, STANDALONENARROWMONTHS: C862 || CT.C862, MONTHS: C863 || CT.C863, STANDALONEMONTHS: C863 || CT.C863, SHORTMONTHS: C864 || CT.C864, STANDALONESHORTMONTHS: C864 || CT.C864, WEEKDAYS: C865 || CT.C865, STANDALONEWEEKDAYS: C865 || CT.C865, SHORTWEEKDAYS: C866 || CT.C866, STANDALONESHORTWEEKDAYS: C866 || CT.C866, NARROWWEEKDAYS: C867 || CT.C867, STANDALONENARROWWEEKDAYS: C867 || CT.C867, SHORTQUARTERS: C868 || CT.C868, QUARTERS: C869 || CT.C869, AMPMS: C870 || CT.C870, DATEFORMATS: C106 || CT.C106, TIMEFORMATS: C871 || CT.C871, DATETIMEFORMATS: C872 || CT.C872, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "te", new date_symbols.DateSymbols.new({NAME: "te", ERAS: C873 || CT.C873, ERANAMES: C874 || CT.C874, NARROWMONTHS: C875 || CT.C875, STANDALONENARROWMONTHS: C875 || CT.C875, MONTHS: C876 || CT.C876, STANDALONEMONTHS: C876 || CT.C876, SHORTMONTHS: C877 || CT.C877, STANDALONESHORTMONTHS: C877 || CT.C877, WEEKDAYS: C878 || CT.C878, STANDALONEWEEKDAYS: C878 || CT.C878, SHORTWEEKDAYS: C879 || CT.C879, STANDALONESHORTWEEKDAYS: C879 || CT.C879, NARROWWEEKDAYS: C880 || CT.C880, STANDALONENARROWWEEKDAYS: C880 || CT.C880, SHORTQUARTERS: C881 || CT.C881, QUARTERS: C882 || CT.C882, AMPMS: C12 || CT.C12, DATEFORMATS: C883 || CT.C883, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C884 || CT.C884, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C237 || CT.C237, FIRSTWEEKCUTOFFDAY: 5}), "th", new date_symbols.DateSymbols.new({NAME: "th", ERAS: C885 || CT.C885, ERANAMES: C886 || CT.C886, NARROWMONTHS: C887 || CT.C887, STANDALONENARROWMONTHS: C887 || CT.C887, MONTHS: C888 || CT.C888, STANDALONEMONTHS: C888 || CT.C888, SHORTMONTHS: C887 || CT.C887, STANDALONESHORTMONTHS: C887 || CT.C887, WEEKDAYS: C889 || CT.C889, STANDALONEWEEKDAYS: C889 || CT.C889, SHORTWEEKDAYS: C890 || CT.C890, STANDALONESHORTWEEKDAYS: C890 || CT.C890, NARROWWEEKDAYS: C891 || CT.C891, STANDALONENARROWWEEKDAYS: C891 || CT.C891, SHORTQUARTERS: C892 || CT.C892, QUARTERS: C892 || CT.C892, AMPMS: C893 || CT.C893, DATEFORMATS: C894 || CT.C894, TIMEFORMATS: C895 || CT.C895, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "tl", new date_symbols.DateSymbols.new({NAME: "tl", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C314 || CT.C314, STANDALONENARROWMONTHS: C315 || CT.C315, MONTHS: C316 || CT.C316, STANDALONEMONTHS: C316 || CT.C316, SHORTMONTHS: C314 || CT.C314, STANDALONESHORTMONTHS: C314 || CT.C314, WEEKDAYS: C317 || CT.C317, STANDALONEWEEKDAYS: C317 || CT.C317, SHORTWEEKDAYS: C318 || CT.C318, STANDALONESHORTWEEKDAYS: C318 || CT.C318, NARROWWEEKDAYS: C318 || CT.C318, STANDALONENARROWWEEKDAYS: C318 || CT.C318, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C319 || CT.C319, AMPMS: C12 || CT.C12, DATEFORMATS: C159 || CT.C159, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C320 || CT.C320, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "tr", new date_symbols.DateSymbols.new({NAME: "tr", ERAS: C896 || CT.C896, ERANAMES: C897 || CT.C897, NARROWMONTHS: C898 || CT.C898, STANDALONENARROWMONTHS: C898 || CT.C898, MONTHS: C899 || CT.C899, STANDALONEMONTHS: C899 || CT.C899, SHORTMONTHS: C900 || CT.C900, STANDALONESHORTMONTHS: C900 || CT.C900, WEEKDAYS: C901 || CT.C901, STANDALONEWEEKDAYS: C901 || CT.C901, SHORTWEEKDAYS: C902 || CT.C902, STANDALONESHORTWEEKDAYS: C902 || CT.C902, NARROWWEEKDAYS: C903 || CT.C903, STANDALONENARROWWEEKDAYS: C903 || CT.C903, SHORTQUARTERS: C904 || CT.C904, QUARTERS: C905 || CT.C905, AMPMS: C906 || CT.C906, DATEFORMATS: C907 || CT.C907, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "uk", new date_symbols.DateSymbols.new({NAME: "uk", ERAS: C908 || CT.C908, ERANAMES: C909 || CT.C909, NARROWMONTHS: C910 || CT.C910, STANDALONENARROWMONTHS: C911 || CT.C911, MONTHS: C912 || CT.C912, STANDALONEMONTHS: C913 || CT.C913, SHORTMONTHS: C914 || CT.C914, STANDALONESHORTMONTHS: C915 || CT.C915, WEEKDAYS: C916 || CT.C916, STANDALONEWEEKDAYS: C916 || CT.C916, SHORTWEEKDAYS: C88 || CT.C88, STANDALONESHORTWEEKDAYS: C88 || CT.C88, NARROWWEEKDAYS: C917 || CT.C917, STANDALONENARROWWEEKDAYS: C917 || CT.C917, SHORTQUARTERS: C773 || CT.C773, QUARTERS: C774 || CT.C774, AMPMS: C918 || CT.C918, DATEFORMATS: C919 || CT.C919, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C920 || CT.C920, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ur", new date_symbols.DateSymbols.new({NAME: "ur", ERAS: C921 || CT.C921, ERANAMES: C921 || CT.C921, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C922 || CT.C922, STANDALONEMONTHS: C922 || CT.C922, SHORTMONTHS: C922 || CT.C922, STANDALONESHORTMONTHS: C922 || CT.C922, WEEKDAYS: C923 || CT.C923, STANDALONEWEEKDAYS: C923 || CT.C923, SHORTWEEKDAYS: C923 || CT.C923, STANDALONESHORTWEEKDAYS: C923 || CT.C923, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C924 || CT.C924, QUARTERS: C924 || CT.C924, AMPMS: C12 || CT.C12, DATEFORMATS: C925 || CT.C925, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "uz", new date_symbols.DateSymbols.new({NAME: "uz", ERAS: C926 || CT.C926, ERANAMES: C927 || CT.C927, NARROWMONTHS: C928 || CT.C928, STANDALONENARROWMONTHS: C928 || CT.C928, MONTHS: C929 || CT.C929, STANDALONEMONTHS: C930 || CT.C930, SHORTMONTHS: C931 || CT.C931, STANDALONESHORTMONTHS: C932 || CT.C932, WEEKDAYS: C933 || CT.C933, STANDALONEWEEKDAYS: C933 || CT.C933, SHORTWEEKDAYS: C934 || CT.C934, STANDALONESHORTWEEKDAYS: C934 || CT.C934, NARROWWEEKDAYS: C935 || CT.C935, STANDALONENARROWWEEKDAYS: C935 || CT.C935, SHORTQUARTERS: C936 || CT.C936, QUARTERS: C937 || CT.C937, AMPMS: C938 || CT.C938, DATEFORMATS: C939 || CT.C939, TIMEFORMATS: C940 || CT.C940, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "vi", new date_symbols.DateSymbols.new({NAME: "vi", ERAS: C941 || CT.C941, ERANAMES: C941 || CT.C941, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C942 || CT.C942, STANDALONEMONTHS: C943 || CT.C943, SHORTMONTHS: C944 || CT.C944, STANDALONESHORTMONTHS: C945 || CT.C945, WEEKDAYS: C946 || CT.C946, STANDALONEWEEKDAYS: C946 || CT.C946, SHORTWEEKDAYS: C947 || CT.C947, STANDALONESHORTWEEKDAYS: C947 || CT.C947, NARROWWEEKDAYS: C948 || CT.C948, STANDALONENARROWWEEKDAYS: C948 || CT.C948, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C949 || CT.C949, AMPMS: C950 || CT.C950, DATEFORMATS: C951 || CT.C951, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C952 || CT.C952, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "zh", new date_symbols.DateSymbols.new({NAME: "zh", ERAS: C953 || CT.C953, ERANAMES: C953 || CT.C953, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C954 || CT.C954, STANDALONEMONTHS: C954 || CT.C954, SHORTMONTHS: C470 || CT.C470, STANDALONESHORTMONTHS: C470 || CT.C470, WEEKDAYS: C955 || CT.C955, STANDALONEWEEKDAYS: C955 || CT.C955, SHORTWEEKDAYS: C956 || CT.C956, STANDALONESHORTWEEKDAYS: C956 || CT.C956, NARROWWEEKDAYS: C957 || CT.C957, STANDALONENARROWWEEKDAYS: C957 || CT.C957, SHORTQUARTERS: C958 || CT.C958, QUARTERS: C959 || CT.C959, AMPMS: C960 || CT.C960, DATEFORMATS: C961 || CT.C961, TIMEFORMATS: C962 || CT.C962, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "zh_CN", new date_symbols.DateSymbols.new({NAME: "zh_CN", ERAS: C953 || CT.C953, ERANAMES: C953 || CT.C953, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C954 || CT.C954, STANDALONEMONTHS: C954 || CT.C954, SHORTMONTHS: C470 || CT.C470, STANDALONESHORTMONTHS: C470 || CT.C470, WEEKDAYS: C955 || CT.C955, STANDALONEWEEKDAYS: C955 || CT.C955, SHORTWEEKDAYS: C956 || CT.C956, STANDALONESHORTWEEKDAYS: C956 || CT.C956, NARROWWEEKDAYS: C957 || CT.C957, STANDALONENARROWWEEKDAYS: C957 || CT.C957, SHORTQUARTERS: C958 || CT.C958, QUARTERS: C959 || CT.C959, AMPMS: C960 || CT.C960, DATEFORMATS: C961 || CT.C961, TIMEFORMATS: C962 || CT.C962, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "zh_HK", new date_symbols.DateSymbols.new({NAME: "zh_HK", ERAS: C953 || CT.C953, ERANAMES: C953 || CT.C953, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C470 || CT.C470, STANDALONEMONTHS: C470 || CT.C470, SHORTMONTHS: C470 || CT.C470, STANDALONESHORTMONTHS: C470 || CT.C470, WEEKDAYS: C955 || CT.C955, STANDALONEWEEKDAYS: C955 || CT.C955, SHORTWEEKDAYS: C963 || CT.C963, STANDALONESHORTWEEKDAYS: C963 || CT.C963, NARROWWEEKDAYS: C957 || CT.C957, STANDALONENARROWWEEKDAYS: C957 || CT.C957, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C964 || CT.C964, AMPMS: C960 || CT.C960, DATEFORMATS: C965 || CT.C965, TIMEFORMATS: C966 || CT.C966, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "zh_TW", new date_symbols.DateSymbols.new({NAME: "zh_TW", ERAS: C967 || CT.C967, ERANAMES: C967 || CT.C967, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C470 || CT.C470, STANDALONEMONTHS: C470 || CT.C470, SHORTMONTHS: C470 || CT.C470, STANDALONESHORTMONTHS: C470 || CT.C470, WEEKDAYS: C955 || CT.C955, STANDALONEWEEKDAYS: C955 || CT.C955, SHORTWEEKDAYS: C963 || CT.C963, STANDALONESHORTWEEKDAYS: C963 || CT.C963, NARROWWEEKDAYS: C957 || CT.C957, STANDALONENARROWWEEKDAYS: C957 || CT.C957, SHORTQUARTERS: C964 || CT.C964, QUARTERS: C964 || CT.C964, AMPMS: C960 || CT.C960, DATEFORMATS: C968 || CT.C968, TIMEFORMATS: C966 || CT.C966, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "zu", new date_symbols.DateSymbols.new({NAME: "zu", ERAS: C2 || CT.C2, ERANAMES: C2 || CT.C2, NARROWMONTHS: C969 || CT.C969, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C970 || CT.C970, STANDALONEMONTHS: C970 || CT.C970, SHORTMONTHS: C971 || CT.C971, STANDALONESHORTMONTHS: C971 || CT.C971, WEEKDAYS: C972 || CT.C972, STANDALONEWEEKDAYS: C972 || CT.C972, SHORTWEEKDAYS: C973 || CT.C973, STANDALONESHORTWEEKDAYS: C973 || CT.C973, NARROWWEEKDAYS: C974 || CT.C974, STANDALONENARROWWEEKDAYS: C974 || CT.C974, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C975 || CT.C975, AMPMS: C12 || CT.C12, DATEFORMATS: C159 || CT.C159, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5})]);
  };
  dart.trackLibraries("packages/intl/date_symbol_data_local", {
    "package:intl/date_symbol_data_local.dart": date_symbol_data_local
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_symbol_data_local.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sFA4BwC,eAAe;AACb,IAAxC;AAC0C,IAA1C;AACA,UAAW,oBAAa;EAC1B;;AAK2B,0CAErB,UAAc,wCACJ,ylBAkJU,oDAEI,KAGxB,MAAU,wCACA,6mBAkJU,oDAEI,KAExB,MAAU,wCACA,inBA6HU,oDAEI,KAExB,MAAU,wCACA,iBACK,gnBAuJK,oDAEI,KAExB,SAAa,wCACH,onBAuJU,oDAEI,KAGxB,SAAa,wCACH,oBACK,gnBAuJK,oDAEI,KAExB,MAAU,wCACA,inBA0IU,oDAEI,KAExB,MAAU,wCACA,inBA+IU,oDAEI,KAExB,MAAU,wCACA,inBA+IU,oDAEI,KAExB,MAAU,wCACA,iBACK,koBA0JK,oDAEI,KAExB,MAAU,wCACA,upBAoKU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,ypBA0JU,oDAEI,KAExB,OAAW,wCACD,kpBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAqIU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,+oBAuJU,oDAEI,KAExB,MAAU,wCACA,6oBAuJU,oDAEI,KAExB,SAAa,wCACH,gpBAuJU,oDAEI,KAGxB,SAAa,wCACH,gpBAuJU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,ulBAuJU,oDAEI,KAExB,SAAa,wCACH,onBA+JU,oDAEI,KAExB,SAAa,wCACH,wmBAuJU,oDAEI,KAExB,SAAa,wCACH,4lBAuJU,oDAEI,KAExB,SAAa,wCACH,4lBAuJU,oDAEI,KAExB,SAAa,wCACH,0lBAuJU,sDAEI,KAExB,SAAa,wCACH,0lBAuJU,oDAEI,KAExB,SAAa,wCACH,0lBAuJU,oDAEI,KAGxB,SAAa,wCACH,0lBAuJU,oDAEI,KAExB,SAAa,wCACH,0lBAuJU,oDAEI,KAExB,MAAU,wCACA,ypBA6IU,oDAEI,KAExB,UAAc,wCACJ,2pBAkJU,oDAEI,KAGxB,SAAa,wCACH,4pBA6IU,oDAEI,KAExB,SAAa,wCACH,4pBAkJU,oDAEI,KAExB,SAAa,wCACH,0pBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAkIU,oDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,MAAU,wCACA,iBACK,wpBAkJK,sDAEI,KAExB,MAAU,wCACA,ypBAwIU,oDAEI,KAExB,OAAW,wCACD,4oBAuKU,oDAEI,KAExB,MAAU,wCACA,6oBAuJU,oDAEI,KAExB,SAAa,wCACH,opBAuJU,oDAEI,KAExB,SAAa,wCACH,kpBAuJU,oDAEI,KAExB,MAAU,wCACA,qpBA6IU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,OAAW,wCACD,4oBAkJU,oDAEI,KAExB,MAAU,wCACA,qpBA+JU,sDAEI,KAExB,OAAW,wCACD,ooBAqIU,oDAEI,KAExB,MAAU,wCACA,mpBAqJU,oDAEI,KAExB,MAAU,wCACA,upBA+JU,sDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,upBA6IU,oDAEI,KAExB,MAAU,wCACA,qpBA4JU,oDAEI,KAExB,MAAU,wCACA,2oBAkJU,oDAEI,KAExB,MAAU,wCACA,2oBAkJU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,SAAa,wCACH,wpBAkJU,oDAEI,KAExB,MAAU,wCACA,mpBAqJU,oDAEI,KAExB,MAAU,wCACA,ipBA2GU,oDAEI,KAExB,MAAU,wCACA,mpBAuJU,oDAEI,KAExB,MAAU,wCACA,mpBA0IU,oDAEI,KAExB,MAAU,wCACA,qpBAuJU,oDAEI,KAExB,MAAU,wCACA,upBA0JU,sDAEI,KAExB,MAAU,wCACA,mpBAqHU,oDAEI,KAExB,MAAU,wCACA,qpBA6IU,oDAEI,KAExB,MAAU,wCACA,qpBA6IU,oDAEI,KAExB,MAAU,wCACA,mpBA0JU,oDAEI,KAExB,MAAU,wCACA,qpBA0IU,oDAEI,KAExB,MAAU,wCACA,6oBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAkJU,oDAEI,KAExB,MAAU,wCACA,mpBA+JU,sDAEI,KAExB,MAAU,wCACA,upBAkJU,oDAEI,KAExB,MAAU,wCACA,iBACK,spBA+JK,sDAEI,KAExB,MAAU,wCACA,upBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAqJU,oDAEI,KAExB,MAAU,wCACA,iBACK,spBAuJK,oDAEI,KAExB,MAAU,wCACA,6oBAuJU,oDAEI,KAExB,MAAU,wCACA,iBACK,spBA+JK,oDAEI,KAExB,MAAU,wCACA,2oBA+IU,oDAEI,KAExB,MAAU,wCACA,6oBAuJU,oDAEI,KAGxB,SAAa,wCACH,gpBAuJU,oDAEI,KAExB,MAAU,wCACA,ipBAoKU,sDAEI,KAExB,MAAU,wCACA,upBA0JU,sDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,MAAU,wCACA,iBACK,4oBAkJK,sDAEI,KAExB,MAAU,wCACA,2oBAkJU,oDAEI,KAGxB,SAAa,wCACH,8oBAkJU,oDAEI,KAExB,SAAa,wCACH,kpBAuJU,oDAEI,KAExB,MAAU,wCACA,qpBAuJU,oDAEI,KAExB,MAAU,wCACA,qpBA0IU,oDAEI,KAExB,MAAU,wCACA,upBA0JU,oDAEI,KAExB,MAAU,wCACA,qpBA0IU,oDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,MAAU,wCACA,ypBA4JU,oDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,WAAe,wCACL,wpBAkJU,oDAEI,KAExB,MAAU,wCACA,6oBAkJU,oDAEI,KAExB,MAAU,wCACA,moBAkJU,oDAEI,KAExB,MAAU,wCACA,ypBA+JU,sDAEI,KAExB,MAAU,wCACA,qpBA+JU,sDAEI,KAExB,MAAU,wCACA,upBAqIU,oDAEI,KAExB,MAAU,wCACA,2oBAuKU,oDAEI,KAExB,MAAU,wCACA,qpBAwIU,oDAEI,KAExB,MAAU,wCACA,mpBA+IU,oDAEI,KAExB,MAAU,wCACA,moBAuJU,oDAEI,KAExB,MAAU,wCACA,upBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAqJU,oDAEI,KAExB,MAAU,wCACA,mpBAwHU,oDAEI,KAGxB,SAAa,wCACH,spBAwHU,oDAEI,KAExB,SAAa,wCACH,opBAwHU,oDAEI,KAExB,SAAa,wCACH,spBAwHU,oDAEI,KAExB,MAAU,wCACA,qoBAkJU,oDAEI;EACzB","file":"date_symbol_data_local.ddc.js"}');
  // Exports:
  return {
    date_symbol_data_local: date_symbol_data_local
  };
}));

//# sourceMappingURL=date_symbol_data_local.ddc.js.map
