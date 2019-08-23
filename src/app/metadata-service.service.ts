import { Injectable } from '@angular/core';
import { MetaServiceData, MetaData } from './modals/api-types';

@Injectable({
  providedIn: 'root'
})
export class MetadataServiceService {
  metaActiveData: MetaServiceData;
  metaData: MetaServiceData[] = [
    {
      language: 'English',
      code: 'en',
      data: {
        url: '',
        nativeName: 'العربية',
        title: 'Instant Domain Search - Fastest Availability Checker',
        description: 'Domain search results appear instantly. No loading or waiting for results. Check domain availability instantly.',
        extensionsTitle: 'Check 800+ Domain Extensions',
        extensionsDescription: 'Instantly check 800+ Domain extensions at the same time. Instant results with no loading.',
        generatorTitle: 'Domain Name Generator',
        generatorDescription: 'Domain Name Generator with 55 different industry filters. With instant domain availability. Find thousands of domain suggestions in an instant.',
        saleTitle: 'Search Premium Domain Names For Sale',
        saleDescription: 'Search premium and aftermarket domains for sale in an instant. Find the right name for your project in an instant.',
      }
    },
    {
      language: 'Arabic',
      code: 'ar',
      data: {
        url: '/ar/',
        nativeName: 'العربية',
        title: ' موقع للبحث الفوري عن أسماء المجالات ',
        description: 'تعد أسرع أداة بحث عن اسم نطاق تم إنشاؤها على الإطلاق . تحقق أكثر من 800 امتدادات لنطاقات في المللي ثانية الواحدة.',
        extensionsTitle: 'تحقق أكثر من 800 امتدادات النطاق على الفور ',
        extensionsDescription: 'تحقق على الفور أكثر من 800 امتدادات المجال لمعرفة مدى توفر اسم النطاق',
        generatorTitle: 'مولد اسم المجال',
        generatorDescription: 'يتم توليد أفكار المجال المتاحة و تصفية أكثر من 55 من الصناعات المختلفة للنتائج ذات الصلة ',
        saleTitle: 'أسماء النطاقات الممتازة للبيع ',
        saleDescription: 'البحث عن أسماء النطاقات الممتازة المتاحة للبيع.',
      }
    },
    {
      language: 'Bengali',
      code: 'bn',
      data: {
        url: '/bn/',
        nativeName: 'বাংলা',
        title: 'তাৎক্ষনিকভাবে ডোমেইন নাম অনুসন্ধান',
        description: 'ডোমেন নেম অনুসন্ধানের সবচেয়ে দ্রুততম টুল ব্যবহার করুন। মিলিসেকেন্ডের মধ্যে ৮০০+ ডোমেন এক্সটেনশন যাচাই করে দেখুন।',
        extensionsTitle: 'মুহূর্তের মধ্যে ৮০০+ ডোমেন এক্সটেনশন খুঁজে দেখুন',
        extensionsDescription: 'মুহূর্তের মধ্যে ৮০০+ ডোমেন এক্সটেনশন থেকে আপনার পছন্দের ডোমেন নেমটি খুঁজে নিন।',
        generatorTitle: 'ডোমেন নেম জেনারেটর',
        generatorDescription: 'ডোমেন সম্পর্কিত ধারণা খুঁজে দেখুন এবং প্রাসঙ্গিক ফলাফলের জন্য ৫৫টি ইন্ডাস্ট্রির মাধ্যমে ফিল্টার করে নিন।',
        saleTitle: 'প্রিমিয়াম ডোমেন নেম বিক্রি হচ্ছে',
        saleDescription: 'বিক্রয়যোগ্য প্রিমিয়াম ডোমেন নেম খুঁজে দেখুন।',
      }
    },
    {
      language: 'Croatian',
      code: 'hr',
      data: {
        url: '/hr/',
        nativeName: 'Hrvatski jezik',
        title: 'Trenutno pretraživanje imena domene',
        description: 'Najbrža tražilica za nazive domena ikad napravljena. Provjerite 800+ različitih ekstenzija domena za nekoliko milisekundi.',
        extensionsTitle: 'Provjerite 800+ ekstenzija za domene odmah',
        extensionsDescription: 'Odmah provjerite 800+ ekstenzija domene za dostupnost naziva za domenu',
        generatorTitle: 'Generator naziva domene',
        generatorDescription: 'Generirajte ideje za dostupne domene i filtrirajte ih u 55 različitih industrija za relevantne podatke',
        saleTitle: 'Premium nazivi domena za prodaju',
        saleDescription: 'Pretraži nazive za premium domene koje su dostupne za prodaju',
      }
    },
    {
      language: 'Czech',
      code: 'cs',
      data: {
        url: '/cs/',
        nativeName: 'Čeština',
        title: 'Okamžité vyhledávání názvů domén',
        description: 'Nejrychlejší nástroj pro vyhledávání názvů domén, který byl kdy vytvořen. Podívejte se na 800 + různých doménových rozšíření v milisekundách.',
        extensionsTitle: 'Okamžitě zkontrolujte 800 a více doménových rozšíření',
        extensionsDescription: 'Dostupnost doménových jmen okamžitě zkontrolujte na 800 a více domén.',
        generatorTitle: 'Generátor doménových jmen',
        generatorDescription: 'Vytvářejte dostupné nápady na domény a filtrujte podle 55 různých odvětví pro relevantní výsledky.',
        saleTitle: 'Prémiové doménová jména na prodej',
        saleDescription: 'Vyhledejte prémiové doménová jména, které jsou k dispozici pro prodej.',
      }
    },
    {
      language: 'Dutch',
      code: 'nl',
      data: {
        url: '/nl/',
        nativeName: 'Nederlands',
        title: 'Directe zoekopdracht naar domeinnamen',
        description: 'De snelste zoekmachine voor domeinnamen ooit gebouwd. Bekijk 800+ verschillende domeinextensies in milliseconden.',
        extensionsTitle: 'Bekijk onmiddellijk 800+ domeinextensies',
        extensionsDescription: 'Bekijk onmiddellijk 800+ domeinextensies voor de beschikbaarheid van domeinnamen.',
        generatorTitle: 'Domeinnaamgenerator',
        generatorDescription: 'Genereer beschikbare domeinnamen en filter op 55 verschillende sectoren voor relevante resultaten.',
        saleTitle: 'Premium Domeinnamen Te koop',
        saleDescription: 'Zoek naar premium domeinnamen die beschikbaar zijn voor verkoop.',
      }
    },
    {
      language: 'Finnish',
      code: 'fi',
      data: {
        url: '/fi/',
        nativeName: 'Suomi',
        title: 'Hae verkkotunnusta suoraan',
        description: 'Nopein verkkotunnusten hakutyökalu ikinä. Tarkista yli 800+ eri ylätason verkkotunnusta millisekunteissa.',
        extensionsTitle: 'Tarkista 800+ ylätason verkkotunnusta heti',
        extensionsDescription: 'Tarkista 800+ ylätason verkkotunnuksen saatavuus.',
        generatorTitle: 'Verkkotunnuksen nimigeneraattori',
        generatorDescription: 'Generoi saatavilla olevia verkkotunnuksia, ja suodata 55 eri toimialan mukaan saadaksesi relevantteja vastauksia.',
        saleTitle: 'Korkealuokkaisia verkkotunnuksia myynnissä',
        saleDescription: 'Hae korkealuokkaisia verkkotunnuksia, jotka ovat myynnissä',
      }
    },
    {
      language: 'French',
      code: 'fr',
      data: {
        url: '/fr/',
        nativeName: 'Français',
        title: 'Recherche instantanée de noms de domaine',
        description: 'L\'outil de recherche de noms de domaine le plus rapide jamais réalisé. Vérifier plus de 800 extensions différentes de domaines en quelques millisecondes.',
        extensionsTitle: 'Consulter plus de 800 extensions de domaines instantanément',
        extensionsDescription: 'Vérifier instantanément plus de 800 extensions de domaines pour connaître la disponibilité des noms de domaine',
        generatorTitle: 'Générateur de nom de domaine',
        generatorDescription: 'Générer des propositions de domaines disponibles et les filtrer via 55 industries différentes pour obtenir des résultats pertinents.',
        saleTitle: 'Noms de Domaine Premium à Vendre',
        saleDescription: 'Rechercher la disponibilité des noms de domaine premium à vendre',
      }
    },
    {
      language: 'German',
      code: 'de',
      data: {
        url: '/de/',
        nativeName: 'Deutsch',
        title: 'Sofortige Domainnamen-Suche',
        description: 'Das schnellste jemals erstellte Domainnamen-Suchwerkzeug. Überprüfe mehr als 800 verschiedene Endungen im Bruchteil einer Sekunde.',
        extensionsTitle: 'Überprüfe sofort mehr als 800 Domain-Endungen ',
        extensionsDescription: 'Überprüfe sofort die Verfügbarkeit von über 800 Domain-Endungen für deinen Domainnamen',
        generatorTitle: 'Domainnamen-Generator',
        generatorDescription: 'Generiert verfügbare Domainnamen und filtert nach 55 verschiedenen Brachen für noch relevantere Ergebnisse.',
        saleTitle: 'Zum Kauf angebotene Premium Domainnamen ',
        saleDescription: 'Suche verfügbare, zum Kauf angebotene Premium Domainnamen.',
      }
    },
    {
      language: 'Greek',
      code: 'el',
      data: {
        url: '/el/',
        nativeName: 'Eλληνικά',
        title: 'Αμεση αναζήτηση για όνομα domain',
        description: 'Το γρηγορότερο εργαλείο αναζήτησης ονόματος domain που φτιάχτηκε ποτέ. Δείτε 800+ διαφορετικές προεκτάσεις domain σε κλάσματα του δευτερολέπτου.',
        extensionsTitle: 'Δείτε 800+ Επεκτάσεις Domain Άμεσα',
        extensionsDescription: 'Δείτε άμεσα 800+ επεκτάσεις domain για τη διαθεσιμότητα των ονομάτων domain.',
        generatorTitle: 'Δημιουργία Ονόματος Domain',
        generatorDescription: 'Εμφανίστε τις διαθέσιμες ιδέες για domain για φιλτράρετέ τις με βάση 55 διαφορετικούς κλάδους για να βγουν σχετικά αποτελέσματα.',
        saleTitle: 'Premium Ονόματα Domain Προς Πώληση',
        saleDescription: 'Αναζητήστε premium ονόματα domain που είναι διαθέσιμα προς πώληση.',
      }
    },
    {
      language: 'Hindi',
      code: 'hi',
      data: {
        url: '/hi/',
        nativeName: 'हिन्दी',
        title: 'डोमेन नाम की त्वरित खोज',
        description: 'अब तक का सब से तेज़ डोमेन नाम खोजने वाला टूल। मिली सेकंडस में 800+ विभिन्न डोमेन एक्स्टेंशनों की जाँच करें। ',
        extensionsTitle: 'तुरंत 800+ डोमेन एक्स्टेंशनों की जाँच करें',
        extensionsDescription: 'डोमेन नाम की उपलब्धता के लिए तुरंत 800+ डोमेन एक्स्टेंशनों की जाँच करें।',
        generatorTitle: 'डोमेन नेम जनरेटर',
        generatorDescription: 'उपलब्ध डोमेन सुझाव देखें और प्रासंगिक परिणामों के लिए 55 विभिन्न उद्योगों के लिए फिल्टर करें।',
        saleTitle: 'बिक्री के लिए प्रीमियम डोमेन नाम',
        saleDescription: 'बिक्री के लिए उपलब्ध प्रीमियम डोमेन नाम खोजें।',
      }
    },
    {
      language: 'Hungarian',
      code: 'hu',
      data: {
        url: '/hu/',
        nativeName: 'Magyar',
        title: 'Domainnév azonnali keresése ',
        description: 'A valaha készült leggyorsabb domain név kereső alkalmazás. Több mint 800 domain név kiterjesztés ellenőrzésére képes a másodperc tört része alatt.',
        extensionsTitle: 'Ellenőrizzen le több mint 800 domain név kiterjesztést azonnal',
        extensionsDescription: 'Azonnal leellenőrzi több mint 800 domain név kiterjesztés elérhetőségét.',
        generatorTitle: 'Domain név generátor',
        generatorDescription: 'Hozzon létre elérhető domain neveket és szűrje ki a releváns eredményeket 55 különböző iparág figyelembevételével.',
        saleTitle: 'Eladó prémium domain nevek',
        saleDescription: 'Megvásárolható prémium domain nevek keresése.',
      }
    },
    {
      language: 'Indonesian',
      code: 'id',
      data: {
        url: '/id/',
        nativeName: 'Bahasa',
        title: 'Pencarian Nama Domain Secara Instan',
        description: 'Alat pencarian nama domain tercepat yang pernah dibuat. Periksa 800+ ekstensi domain dalam hitungan milidetik.',
        extensionsTitle: 'Periksa 800+ Ekstensi Domain dengan Instan',
        extensionsDescription: 'Periksa ketersediaan nama domain untuk 800+ ekstensi domain secara instan.',
        generatorTitle: 'Penghasil Nama Domain',
        generatorDescription: 'Hasilkan ide-ide domain yang tersedia dan filter hasilnya yang relevan berdasarkan 55 industri.',
        saleTitle: 'Nama Domain Premium Untuk Dijual',
        saleDescription: 'Cari nama domain premium yang tersedia untuk dijual.',
      }
    },
    {
      language: 'Italian',
      code: 'it',
      data: {
        url: '/it/',
        nativeName: 'Italiano',
        title: 'Ricerca Instantanea di Dominio',
        description: 'Il più veloce strumento di ricerca per nomi di domini mai costruito. Controlla più di 800 estensioni di dominio in millisecondi',
        extensionsTitle: 'Controlla più di 800 Estensioni di Dominio Instantaneamente',
        extensionsDescription: 'Controlla instantaneamente più di 800 estensioni di domini per vedere se un nome sia disponibile',
        generatorTitle: 'Generatore di Nomi di Dominio',
        generatorDescription: 'Genera idee disponibili per nomi di domini e filtrale tra 55 differenti industrie per risultati rilevanti',
        saleTitle: 'Nomi di Dominio Premium In Vendita',
        saleDescription: 'Cerca nomi di domini premium disponibili e in vendita',
      }
    },
    {
      language: 'Japanese',
      code: 'ja',
      data: {
        url: '/ja/',
        nativeName: '日本語',
        title: '即座ドメイン名検索',
        description: 'かつてない最速のドメイン名検索ツール。わずかミリ秒で800＋類のドメイン名エクステンションを調べる。',
        extensionsTitle: '即時で800+類のドメイン名エクステンションを調べる',
        extensionsDescription: '即時で800＋類のドメイン名エクステンションの使用可能性を調べる。',
        generatorTitle: 'ドメイン名ジェネレータ',
        generatorDescription: '使用可能のドメイン名アイデアをジェネレートし、お客様のご条件に合うように55の別々の業界で検索結果を絞り込める。',
        saleTitle: '販売中のプレミアムドメイン名',
        saleDescription: '販売中のプレミアムドメイン名を検索',
      }
    },
    {
      language: 'Korean',
      code: 'ko',
      data: {
        url: '/ko/',
        nativeName: '한국어',
        title: '도메인명 빠른 검색',
        description: '사상 최고로 빠른 도메인 이름 검색 도구입니다. 순식간에 800가지가 넘는 최상위 도메인을 확인해 보세요.',
        extensionsTitle: '800가지 이상의 최상위 도메인을 순식간에 확인해 보세요.',
        extensionsDescription: '800가지 이상의 최상위 도메인 사용 가능 여부를 순식간에 확인해 보세요.',
        generatorTitle: '도메인 이름 생성기',
        generatorDescription: '도메인 이름을 생성하고 관련성 검색을 위해 55가지 분야로 필터 가능합니다.',
        saleTitle: '프리미엄 도메인 이름 구매',
        saleDescription: '구매 가능한 프리미엄 도메인 이름을 검색해 보세요.',
      }
    },
    {
      language: 'Mandarin (Chinese)',
      code: 'zh',
      data: {
        url: '/zh/',
        nativeName: '中文',
        title: '快速查阅域名',
        description: '目前市场上拥有最快速度的域名搜索引擎。用毫秒的时间来搜索高达800多个域名后缀。',
        extensionsTitle: '立即查看高达800多个域名后缀',
        extensionsDescription: '立即搜索高达800多个域名后缀以及查看可用的网域名称。',
        generatorTitle: '网域名称生成器',
        generatorDescription: '提供域名的启发并通过筛选55个不同行业以查看相关结果。',
        saleTitle: '可供购买的优质网域名称',
        saleDescription: '搜索可供购买的优质网域名称。',
      }
    },
    {
      language: 'Marathi',
      code: 'mr',
      data: {
        url: '/mr/',
        nativeName: 'मराठी',
        title: 'डोमेन नावाचा जलद शोध',
        description: 'जलद गतीने डोमेन चे नाव शोधण्यासाठी निर्माण करण्यात आलेले टूल. एका सेकंदाच्या १००० व्या भागात ८००+ हून अधिक डोमेन एक्स्टेंशन चा शोध घ्या.',
        extensionsTitle: '८००+ पेक्षा जास्त डोमेन एक्स्टेंशनचा  जलद गतीने शोध.',
        extensionsDescription: '८००+ पेक्षा जास्त डोमेन एक्स्टेंशन डोमेन नावाच्या उपलब्धतेसाठी त्वरित  तपासा.',
        generatorTitle: 'डोमेन नाव निर्माता ',
        generatorDescription: 'उपलब्ध असणाऱ्या डोमेन कल्पना निर्माण करा आणि ५५ विविध उद्योगा आधारे हवे असलेले डोमेन निवडा. ',
        saleTitle: 'विक्रीकरिता प्रीमिअम डोमेन ',
        saleDescription: 'विक्रीकरिता उपलब्ध असलेले प्रीमिअम डोमेन नाव शोधा.',
      }
    },
    {
      language: 'Norwegian',
      code: 'no',
      data: {
        url: '/no/',
        nativeName: 'Norsk',
        title: 'Direkte søk etter domenenavn',
        description: 'Det raskeste domenenavn søkverktøyet som noensinne er laget. Sjekk 800+ forskjellige domene forlengelser i milisekunder',
        extensionsTitle: 'Sjekk 800+ domene forlengelser med det samme',
        extensionsDescription: 'Øyeblikkelig sjekk 800+ domene forlengelser for tilgjengelighet av domenenavn ',
        generatorTitle: 'Domenenavn generator',
        generatorDescription: 'Skape ledige domene ideer og filtrer dem etter 55 forskjellige bransjene for relevante resultater',
        saleTitle: 'Premium domenenavn for salg',
        saleDescription: 'Søk premium domenenavn til salgs',
      }
    },
    {
      language: 'Polish',
      code: 'pl',
      data: {
        url: '/pl/',
        nativeName: 'Język polski',
        title: 'Natychmiastowe wyszukiwanie nazw domen',
        description: 'Najszybsze narzędzie do wyszukiwania nazw domen, jakie kiedykolwiek zbudowano. Sprawdź ponad 800 różnych rozszerzeń domen w milisekundach.',
        extensionsTitle: 'Sprawdź błyskawicznie ponad 800 rozszerzeń domen ',
        extensionsDescription: 'Sprawdź błyskawicznie ponad 800 rozszerzeń dostępnych domen ',
        generatorTitle: 'Generator Nazw Domen',
        generatorDescription: 'Wygeneruj dostępne pomysły na nazwę domeny i przefiltruj je przez 55 różnych branż aby uzyskać trafne rezultaty. ',
        saleTitle: 'Nazwy Domen Premium Na Sprzedaż',
        saleDescription: 'Przeszukaj dostępne w sprzedaży nazwy domen premium.',
      }
    },
    {
      language: 'Portuguese',
      code: 'pt',
      data: {
        url: '/pt/',
        nativeName: 'Português',
        title: 'Pesquisa de Nomes Domínio Instantâneo',
        description: 'A mais rápida ferramenta de pesquisa já criada. Consulte +800 extensões de domínios diferentes em milissegundos.',
        extensionsTitle: 'Consulte +800 Extensões de Domínio Instantaneamente',
        extensionsDescription: 'Consulte instantaneamente +800 extensões de domínio para checar a disponibilidade do nome de domínio.',
        generatorTitle: 'Gerador de Nome de Domínio',
        generatorDescription: 'Gere ideias de nome de domínio e filtre entre 55 segmentos diferentes para resultados relevantes.',
        saleTitle: 'Nomes de Domínio Premium À Venda',
        saleDescription: 'Pesquise nomes de domínio premium disponíveis para venda.',
      }
    },
    {
      language: 'Punjabi',
      code: 'pa',
      data: {
        url: '/pa/',
        nativeName: 'ਪੰਜਾਬੀ',
        title: 'ਤਤਕਾਲ ਡੋਮੇਨ ਨਾਂ ਦੀ ਖੋਜ',
        description: 'ਅੱਜ ਤੱਕ ਬਣਾਇਆ ਗਿਆ ਸਭ ਤੋਂ ਤੇਜ਼ ਡੋਮੇਨ ਨਾਮ ਖੋਜ ਟੂਲ। ਮਿਲੀਸਕਿੰਟਾਂ ਵਿੱਚ 800+ ਵੱਖਰੀਆਂ ਡੋਮੇਨ ਐਕਸਟੈਂਸ਼ਨਾਂ ਦੀ ਜਾਂਚ ਕਰੋ।',
        extensionsTitle: 'ਫੌਰਨ 800+ ਡੋਮੇਨ ਐਕਸਟੈਂਸ਼ਨਾਂ ਦੀ ਜਾਂਚ ਕਰੋ',
        extensionsDescription: 'ਡੋਮੇਨ ਨਾਮ ਦੀ ਉਪਲਬਧਤਾ ਲਈ ਫੌਰਨ 800+ ਡੋਮੇਨ ਐਕਸਟੈਂਸ਼ਨਾਂ ਦੀ ਜਾਂਚ ਕਰੋ।',
        generatorTitle: 'ਡੋਮੇਨ ਨਾਮ ਜਰਨੇਟਰ',
        generatorDescription: 'ਉਪਲਬਧ ਡੋਮੇਨ ਵਿਚਾਰ ਦੇਖੋ ਅਤੇ ਢੁੱਕਵੇਂ ਨਤੀਜਿਆਂ ਲਈ 55 ਵੱਖ-ਵੱਖ ਉਦਯੋਗਾਂ ਮੁਤਾਬਕ ਫਿਲਟਰ ਕਰੋ।',
        saleTitle: 'ਵਿਕਰੀ ਲਈ ਪ੍ਰੀਮੀਅਮ ਡੋਮੇਨ ਨਾਮ',
        saleDescription: 'ਵਿਕਰੀ ਲਈ ਉਪਲਬਧ ਪ੍ਰੀਮੀਅਮ ਡੋਮੇਨ ਨਾਮ ਖੋਜੋ।',
      }
    },
    {
      language: 'Romanian',
      code: 'ro',
      data: {
        url: '/ro/',
        nativeName: 'Română',
        title: 'Căutare instantanee nume Domeniu',
        description: 'Cel mai rapid mod de căutare a unui nume de domeniu. Vedeți peste 800 de extensii diferite pentru domeniu în câteva secunde. ',
        extensionsTitle: 'Vedeți imediat peste 800 de extensii de domeniu ',
        extensionsDescription: 'Vedeți imediat peste 800 de extensii de domeniu pentru a verifica disponibilitatea numelui domeniului.',
        generatorTitle: 'Generator nume domeniu',
        generatorDescription: 'Generați idei de domeniu disponibile în 55 de industrii diferite pentru rezultate relevante.',
        saleTitle: 'Nume domeniu premium la reducere',
        saleDescription: 'Căutați nume de domeniu premium disponibile la reducere. ',
      }
    },
    {
      language: 'Russian',
      code: 'ru',
      data: {
        url: '/ru/',
        nativeName: 'Pусский',
        title: 'Мгновенный Поиск Доменного Имени',
        description: 'Самый быстрый инструмент поиска доменных имен из когда-либо созданных. Проверьте 800+ различных расширений домена в миллисекундах.',
        extensionsTitle: 'Проверьте 800+ доменных расширений мгновенно',
        extensionsDescription: 'Мгновенная проверка 800+ доменных расширений для доступности доменного имени.',
        generatorTitle: 'Генератор доменных имен',
        generatorDescription: 'Сгенерируйте доступные доменные имена и фильтруйте  по 55 различным отраслям для соответствующих результатов.',
        saleTitle: 'Премиум доменные имена для продажи',
        saleDescription: 'Поиск премиум доменных имен, доступных для продажи.',
      }
    },
    {
      language: 'Slovak',
      code: 'sk',
      data: {
        url: '/sk/',
        nativeName: 'Slovenčina',
        title: 'Okamžité vyhľadávanie názvov domén',
        description: 'Najrýchlejší nástroj na vyhľadávanie názvov domén, aký bol kedy vytvorený. Vyskúšajte 800+ rôznych rozšírení domén v milisekundách.',
        extensionsTitle: 'Okamžite vyskúšajte viac ako 800 doménových rozšírení',
        extensionsDescription: 'Dostupnosť doménových mien okamžite skontrolujte pomocou rozšírení o 800 a viac domén.',
        generatorTitle: 'Generátor doménových mien',
        generatorDescription: 'Generujte dostupné nápady na domény a filtrujte podľa relevantných výsledkov 55 rôznych výsledkov.',
        saleTitle: 'Prémiové doménové mená na predaj',
        saleDescription: 'Vyhľadajte prémiové doménové mená, ktoré sú k dispozícii na predaj.',
      }
    },
    {
      language: 'Spanish',
      code: 'es',
      data: {
        url: '/es/',
        nativeName: 'Español',
        title: 'Búsqueda instántanea de nombres de dominio',
        description: 'La herramienta de búsqueda de nombres de dominio nunca antes creada. Verifique más de 800 extensiones de dominio en milisegundos.',
        extensionsTitle: 'Verifique más de 800 Extensiones de Dominio al Instante',
        extensionsDescription: 'Verifique al Instante la disponibilidad de más de 800 extensiones para nombres de dominio. ',
        generatorTitle: 'Generador de Nombres de Dominio',
        generatorDescription: 'Genere ideas de dominios disponibles y fíltrelos por 55 diferentes industrias para obtener resultados relevantes.  ',
        saleTitle: 'Nombres de Dominio Premium A la Venta',
        saleDescription: 'Busque nombres de dominio premium disponibles a la venta.',
      }
    },
    {
      language: 'Swedish',
      code: 'sv',
      data: {
        url: '/sv/',
        nativeName: 'Svenska',
        title: 'Snabb namnsökning efter domäner',
        description: 'Det snabbaste domännamnssökverktyget som någonsin har skapats. Kolla in över 800+ olika domänförlängningar på bara några millisekunder.',
        extensionsTitle: 'Kolla in 800+ domänförlängningar på ett ögonblick',
        extensionsDescription: 'Kolla på ett ögonblick in 800+ olika domänförlängningar för domännamnstillgänglighet',
        generatorTitle: 'Domännamnsgenerator',
        generatorDescription: 'Generera tillgängliga domänidéer och filtrera mellan 55 olika industrier för att få relevanta resultat.',
        saleTitle: 'Premiumdomännamn på rea',
        saleDescription: 'Sök efter tillgängliga premiumdomännamn på rea',
      }
    },
    {
      language: 'Tamil',
      code: 'ta',
      data: {
        url: '/ta/',
        nativeName: 'தமிழ்',
        title: 'உடனடியாக தளத்தின் பெயர் தேடல்',
        description: 'மிகவும் விரைவான தளத்தின் பெயர் தேடல் கருவி இதுவரை இல்லாத அளவிற்கு உருவாக்கப்பட்டுள்ளது. மில்லி நொடிகளில் 800க்கும் மேல் வேறுபட்ட தளத்தின் நீட்டிப்புகளை சரிபபார்க்கலாம்',
        extensionsTitle: 'உடனடியாக 800 க்கும் மேல் தளத்தின் நீட்டிப்புகளை சரி பார்க்கவும்',
        extensionsDescription: 'தளத்தின் பெயர் கிடைப்பதற்கு 800க்கும் மேற்பட்ட நீட்டிப்புகளை உடனடியாக சரிபார்த்துக் கொள்ளலாம்',
        generatorTitle: 'தளத்தின் பெயர் உருவாக்கி',
        generatorDescription: 'கிடைக்கக்கூடிய தளத்தின் பெயரை உருவாக்குவதன் மூலம் உரிய முடிவுகளுக்கு 55 வெவ்வேறு தொழில்களைக் கொண்டு வடிகட்டலாம்.',
        saleTitle: 'உயர் மதிப்புள்ள தளத்தின் பெயர்கள் விற்பனைக்கு',
        saleDescription: 'விற்பனைக்குரிய உயர் மதிப்புள்ள தளத்தின் பெயர்களை தேடவும்',
      }
    },
    {
      language: 'Telugu',
      code: 'te',
      data: {
        url: '/te/',
        nativeName: 'తెలుగు',
        title: 'తక్షణ డొమైన్ నేమ్ శోధన',
        description: 'ఇప్పటివరకు నిర్మించబడిన వేగవంతమైన డొమైన్ నేమ్ సెర్చ్ టూల్. మిల్లీసెకన్లు లో 800+ విభిన్న డొమైన్ ఎక్స్టెన్షన్లను తనిఖీ చేయండి.',
        extensionsTitle: 'తక్షణమే 800+ డొమైన్ ఎక్స్టెన్షన్లను తనిఖీ చేయండి.',
        extensionsDescription: 'డొమైన్ నేమ్ లభ్యత కోసం తక్షణమే 800+ డొమైన్ ఎక్స్టెన్షన్లను తనిఖీ చేయండి.',
        generatorTitle: 'డొమైన్ నేమ్ జనరేటర్',
        generatorDescription: 'అందుబాటులో ఉన్న డొమైన్ ఐడియా లను రూపొందించి, సంబంధిత ఫలితాల కోసం 55 వేర్వేరు పరిశ్రమల ద్వారా ఫిల్టర్ చేయండి.',
        saleTitle: 'ప్రీమియం డొమైన్ నేమ్స్ అమ్మకానికి కలవు',
        saleDescription: 'అమ్మకానికి కల ప్రీమియం డొమైన్ నేమ్స్ ను శోధించండి',
      }
    },
    {
      language: 'Thai',
      code: 'th',
      data: {
        url: '/th/',
        nativeName: 'ไทย',
        title: 'ค้นหาชื่อโดเมนได้ทันที',
        description: 'เครื่องมือค้นหาชื่อโดเมนที่เร็วที่สุดที่เคยถูกสร้างขึ้น สามารถตรวจสอบนามสกุลของโดเมนที่แตกต่างกันมากกว่า 800 โดเมน ในเสี้ยววินาที',
        extensionsTitle: 'ตรวจสอบนามสกุลของโดเมนมากกว่า 800 โดเมนทันที',
        extensionsDescription: 'ตรวจสอบนามสกุลของโดเมนต่างๆมากกว่า 800 โดเมน เพื่อตรวจสอบชื่อโดเมนที่พร้อมใช้งานในทันที',
        generatorTitle: 'เครื่องมือช่วยตั้งชื่อโดเมน',
        generatorDescription: 'ให้แนวคิดสำหรับสร้างชื่อโดเมนที่สามารถใช้งานได้ และคัดกรองตามอุตสาหกรรมที่แตกต่างกันถึง 55 อุตสาหกรรมสำหรับผลลัพธ์ที่เกี่ยวข้อง ',
        saleTitle: 'ชื่อโดเมนพรีเมี่ยมสำหรับขาย',
        saleDescription: 'ค้นหาชื่อโดเมนพรีเมี่ยมที่มีอยู่สำหรับการขาย',
      }
    },
    {
      language: 'Turkish',
      code: 'tr',
      data: {
        url: '/tr/',
        nativeName: 'Türkçe',
        title: 'Hızlı Alan Adı Arama',
        description: 'Şimdiye kadar geliştirilmiş en hızlı alan adı arama aracı. 800\'den fazla farklı etki alanı uzantısını milisaniyeler içinde kontrol edin.',
        extensionsTitle: '800\'den Fazla Etki Alanı Uzantısını Anında Kontrol Edin',
        extensionsDescription: 'Alan adının kullanılabilirliği için 800\'den fazla etki alanı uzantısını hemen kontrol edin.',
        generatorTitle: 'Alan Adı Üretici',
        generatorDescription: 'Kullanılabilir etki alanı fikirleri üretin ve ilgili sonuçlar için 55 farklı endüstriye göre filtreleyin.',
        saleTitle: 'Satılık Premium Alan Adları',
        saleDescription: 'Kullanıma hazır satılık premium alan adlarını arayın.',
      }
    },
    {
      language: 'Urdu',
      code: 'ur',
      data: {
        url: '/ur/',
        nativeName: 'اردو',
        title: 'ڈومین نام کی فوری تلاش',
        description: 'تیز ترین ڈومین نام سرچ ٹول جو کبھی بنایا گیا ہو۔ ملی سیکنڈز میں +800 مختلف ڈومین ایکسٹیشنز کی پڑتال کریں. ',
        extensionsTitle: 'فوری طور پر +800 ڈومین ایکسٹینشز کی پڑتال کریں',
        extensionsDescription: 'ڈومین نام کی دستیابی کے لیے +800 ڈومین ایکسٹینشز کی فوری پڑتال کریں.',
        generatorTitle: 'ڈومین نام جنریٹر',
        generatorDescription: 'دستیاب ڈومین آئیڈیاز جنریٹ کریں اور متعلقہ نتائج کے لیے 55 مختلف انڈسٹریز کے ذریعے فلٹر کریں.',
        saleTitle: 'پریمیر ڈومین نام برائے فروخت',
        saleDescription: 'فروخت کے لیے دستیاب پریمیم ڈومین ناموں کو تلاش کریں.',
      }
    },
    {
      language: 'Vietnamese',
      code: 'vi',
      data: {
        url: '/vi/',
        nativeName: 'Tiếng Việt',
        title: 'Tìm nhanh tên miền',
        description: 'Công cụ tìm kiếm tên miền nhanh nhất trên thị trường. Tìm kiếm hơn 800 tên đuôi miền chỉ trong mili giây.',
        extensionsTitle: 'Tìm kiếm hơn 800 tên đuôi miền trong tức khắc',
        extensionsDescription: 'Nhanh chóng tìm kiếm hơn 800 tên đuôi miền và xác định tên miền đã đăng kí hay chưa. ',
        generatorTitle: 'Công cụ tạo tên miền',
        generatorDescription: 'Cung cấp những ý tưởng tên miền chưa được sử dụng và nhận được kết quả tương ứng thông qua việc sàng lọc hơn 55 ngành nghề khác nhau',
        saleTitle: 'Mua tên miền chất lượng cao ',
        saleDescription: 'Tìm kiếm tên miền chất lượng cao chưa được sử dụng',
      }
    }
  ];
  constructor() { }
}
