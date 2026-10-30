import type { ServiceSlug } from "@/lib/services-registry";

export interface Bi {
  ar: string;
  en: string;
}

export interface ServiceFaq {
  q: Bi;
  a: Bi;
}

export interface ServiceDetail {
  heroSubAr: string;
  heroSubEn: string;
  introAr: string[];
  introEn: string[];
  problems: Bi[];
  included: Bi[];
  faqs: ServiceFaq[];
  waMessageAr: string;
  waMessageEn: string;
  metaDescriptionAr: string;
}

/** Promises that are true for every service. */
const included: Bi[] = [
  { ar: "السعر يُتفق عليه قبل بدء العمل", en: "Price agreed before work starts" },
  { ar: "ضمان على كل إصلاح: إذا عادت المشكلة نرجع بدون تكلفة إضافية", en: "A guarantee on every repair: if the issue returns, we come back at no extra cost" },
  { ar: "لا نغيّر أي قطعة إلا عند الحاجة", en: "No parts replaced unless needed" },
  { ar: "نعمل بترتيب ونترك مكان العمل نظيفاً", en: "We work neatly and leave the area clean" },
];

const faqPrice: ServiceFaq = {
  q: { ar: "هل يُحدد السعر قبل بدء العمل؟", en: "Is the price agreed before the work starts?" },
  a: {
    ar: "نعم. نفحص الجهاز ونخبرك بالسعر، ولا نبدأ إلا بعد موافقتك. لا توجد رسوم مخفية.",
    en: "Yes. We inspect the unit, tell you the price, and start only once you agree. No hidden fees.",
  },
};

const faqPhotos: ServiceFaq = {
  q: { ar: "هل أستطيع إرسال صور المشكلة على واتساب؟", en: "Can I send photos of the problem on WhatsApp?" },
  a: {
    ar: "نعم. صور المشكلة أو فيديو قصير يساعدنا على فهمها قبل الحضور، والمراسلة على واتساب مجانية.",
    en: "Yes. Photos or a short video help us understand the problem before we arrive, and messaging on WhatsApp is free.",
  },
};

const faqArea: ServiceFaq = {
  q: { ar: "هل تخدمون جميع أنحاء جدة؟", en: "Do you cover all of Jeddah?" },
  a: {
    ar: "نعم، نخدم جميع أنحاء جدة، يومياً من 8 صباحاً حتى منتصف الليل.",
    en: "Yes, we serve all of Jeddah, every day from 8 am to midnight.",
  },
};

const faqGuarantee: ServiceFaq = {
  q: { ar: "هل يوجد ضمان على الإصلاح؟", en: "Is the repair guaranteed?" },
  a: {
    ar: "نعم، على كل إصلاح ضمان. إذا عادت المشكلة نفسها نرجع ونصلحها بدون تكلفة إضافية.",
    en: "Yes. Every repair is guaranteed. If the same issue returns, we come back and fix it at no extra cost.",
  },
};

export const serviceContent: Record<ServiceSlug, ServiceDetail> = {
  "window-ac-repair": {
    heroSubAr: "فحص وإصلاح مكيفات الشباك في منزلك بجدة، مع الاتفاق على السعر قبل البدء.",
    heroSubEn: "Window AC inspection and repair at your home in Jeddah, with the price agreed first.",
    introAr: [
      "مكيف الشباك يعمل ساعات طويلة في حر جدة، ومع الغبار والرطوبة قد تظهر أعطال مثل ضعف التبريد أو تنقيط الماء أو الضجيج.",
      "نفحص الجهاز في مكانه ونشرح لك السبب بوضوح، ولا نصلح إلا ما يحتاج إلى إصلاح.",
    ],
    introEn: [
      "A window AC runs for long hours in Jeddah's heat, and dust and humidity bring faults like weak cooling, dripping or noise.",
      "We inspect the unit where it sits, explain the cause clearly and repair only what needs repairing.",
    ],
    problems: [
      { ar: "المكيف يعمل لكن التبريد ضعيف", en: "The AC runs but cooling is weak" },
      { ar: "تنقيط ماء داخل الغرفة", en: "Water dripping into the room" },
      { ar: "صوت مزعج أو اهتزاز", en: "Unusual noise or vibration" },
      { ar: "الجهاز لا يعمل أو ينطفئ فجأة", en: "The unit will not start or shuts off suddenly" },
      { ar: "تجمّد الثلج على الملف", en: "Ice forming on the coil" },
      { ar: "الحاجة إلى تعبئة غاز التبريد", en: "Refrigerant that needs topping up" },
    ],
    included,
    faqs: [
      {
        q: { ar: "ما أسباب تنقيط الماء من مكيف الشباك؟", en: "Why is my window AC dripping water?" },
        a: {
          ar: "من الأسباب الشائعة انسداد مجرى التصريف، أو ميل الجهاز ميلاً خاطئاً، أو اتساخ الفلتر. نفحص الجهاز ونحدد السبب ثم نعالجه.",
          en: "Common causes are a blocked drain path, a wrongly tilted unit or a dirty filter. We find the cause and fix it.",
        },
      },
      faqPrice,
      faqPhotos,
    ],
    waMessageAr: "السلام عليكم، أحتاج إصلاح مكيف شباك في جدة.",
    waMessageEn: "Hello, I need a window AC repaired in Jeddah.",
    metaDescriptionAr: "فحص وإصلاح مكيفات الشباك في جدة: ضعف التبريد وتنقيط الماء والضجيج. نتفق على السعر قبل العمل، وعلى كل إصلاح ضمان. اتصل أو راسل عادل على واتساب.",
  },
  "split-ac-repair": {
    heroSubAr: "تشخيص وإصلاح مكيفات السبليت وتعبئة الفريون في جميع أنحاء جدة.",
    heroSubEn: "Split AC diagnosis, repair and refrigerant refill across Jeddah.",
    introAr: [
      "عندما لا يبرّد مكيف السبليت أو ينقّط الماء من الوحدة الداخلية، فهناك غالباً سبب محدد نصل إليه بالفحص لا بالتخمين.",
      "نشخّص العطل أولاً، ثم نخبرك بالسعر، ثم نصلح. ولا نعبّئ الفريون إلا عند الحاجة.",
    ],
    introEn: [
      "When a split AC stops cooling or drips from the indoor unit, there is usually a specific cause that an inspection can find, not guesswork.",
      "We diagnose first, tell you the price, then repair. We top up refrigerant only when it is needed.",
    ],
    problems: [
      { ar: "المكيف لا يبرّد", en: "The AC is not cooling" },
      { ar: "تسرّب ماء من الوحدة الداخلية", en: "Water leaking from the indoor unit" },
      { ar: "صوت غريب من الوحدة الداخلية أو الخارجية", en: "Odd noise from the indoor or outdoor unit" },
      { ar: "الوحدة الخارجية أو المكيف كله لا يعمل", en: "The outdoor unit, or the whole AC, will not start" },
      { ar: "تجمّد الملف أو ضعف الهواء الخارج", en: "A frozen coil or weak airflow" },
      { ar: "نقص الفريون والحاجة إلى تعبئته", en: "Refrigerant top-up when it is low" },
    ],
    included,
    faqs: [
      {
        q: { ar: "هل تقومون بتعبئة الفريون؟", en: "Do you refill refrigerant?" },
        a: {
          ar: "نعم. نعبّئ الفريون في مكيفات السبليت عند الحاجة، بعد الفحص والاتفاق على السعر.",
          en: "Yes. We refill refrigerant in split units when needed, after inspection and an agreed price.",
        },
      },
      faqGuarantee,
      faqPhotos,
    ],
    waMessageAr: "السلام عليكم، أحتاج إصلاح مكيف سبليت في جدة.",
    waMessageEn: "Hello, I need a split AC repaired in Jeddah.",
    metaDescriptionAr: "إصلاح مكيفات السبليت في جدة: ضعف التبريد وتسرّب الماء والضجيج وتعبئة الفريون. نتفق على السعر قبل العمل، وعلى كل إصلاح ضمان. اتصل أو راسلنا.",
  },
  "central-ac": {
    heroSubAr: "صيانة وإصلاح أنظمة التكييف المركزي في جدة.",
    heroSubEn: "Maintenance and repair of central AC systems in Jeddah.",
    introAr: [
      "التكييف المركزي نظام متكامل، وعطل بسيط في الدكت أو الثرموستات قد يجعل التبريد غير متساوٍ بين الغرف.",
      "نفحص النظام كاملاً ونحدد مصدر المشكلة قبل أي إصلاح، ونتفق معك على السعر أولاً.",
    ],
    introEn: [
      "A central AC is a complete system, and a small fault in the ducts or thermostat can leave rooms unevenly cooled.",
      "We check the full system and find the source of the problem before any repair, with the price agreed first.",
    ],
    problems: [
      { ar: "تبريد غير متساوٍ بين الغرف", en: "Uneven cooling between rooms" },
      { ar: "ضعف تدفق الهواء من الفتحات", en: "Weak airflow from the vents" },
      { ar: "مشاكل في الدكت وتوزيع الهواء", en: "Duct and air distribution problems" },
      { ar: "عطل في الثرموستات أو نظام التحكم", en: "Thermostat or control faults" },
      { ar: "النظام لا يعمل أو ينطفئ باستمرار", en: "The system will not start or keeps shutting off" },
      { ar: "صيانة دورية للنظام", en: "Routine system maintenance" },
    ],
    included,
    faqs: [
      {
        q: { ar: "التبريد ضعيف في غرفة واحدة فقط، ما السبب؟", en: "Cooling is weak in just one room. What could cause it?" },
        a: {
          ar: "قد يكون السبب في الدكت أو فتحة الهواء أو الثرموستات. صف لنا الحالة على واتساب، ونفحص النظام لنحدد السبب.",
          en: "It can come from the duct, the vent or the thermostat. Describe the case on WhatsApp and we will inspect the system to find the cause.",
        },
      },
      faqPrice,
      faqArea,
    ],
    waMessageAr: "السلام عليكم، أحتاج صيانة أو إصلاح تكييف مركزي في جدة.",
    waMessageEn: "Hello, I need central AC maintenance or repair in Jeddah.",
    metaDescriptionAr: "صيانة وإصلاح التكييف المركزي في جدة: تبريد غير متساوٍ ومشاكل الدكت والثرموستات والصيانة الدورية. نتفق على السعر قبل العمل، وعلى الإصلاح ضمان.",
  },
  "washing-machine-repair": {
    heroSubAr: "إصلاح الغسالات الأتوماتيك وأعطال اللوحات الإلكترونية في منزلك بجدة.",
    heroSubEn: "Automatic washing machine repair, including control-board faults, at your home in Jeddah.",
    introAr: [
      "الغسالة التي لا تصرّف الماء، أو لا يدور طبلها، أو تظهر عليها رموز أعطال، تحتاج غالباً إلى فحص دقيق لمعرفة السبب.",
      "نفحص الغسالة في مكانها، ونصلح اللوحة الإلكترونية أو القطعة المعطلة فقط، بعد الاتفاق على السعر.",
    ],
    introEn: [
      "A washer that will not drain, will not spin or shows an error code usually needs a careful check to find the cause.",
      "We inspect it where it stands and repair the control board or the faulty part only, after agreeing the price.",
    ],
    problems: [
      { ar: "الغسالة لا تصرّف الماء", en: "The washer will not drain" },
      { ar: "ظهور رمز عطل على الشاشة", en: "An error code on the display" },
      { ar: "الطبل لا يدور", en: "The drum does not spin" },
      { ar: "تسرّب ماء من الغسالة", en: "Water leaking from the machine" },
      { ar: "عطل في اللوحة الإلكترونية", en: "An electronic control-board fault" },
      { ar: "الغسالة لا تعمل أو تتوقف في منتصف الدورة", en: "The washer will not start or stops mid-cycle" },
    ],
    included,
    faqs: [
      {
        q: { ar: "هل تصلحون أعطال اللوحة الإلكترونية؟", en: "Do you repair control-board faults?" },
        a: {
          ar: "نعم، إصلاح أعطال اللوحات الإلكترونية في الغسالات الأتوماتيك من خدماتنا.",
          en: "Yes. Electronic control-board faults in automatic washers are part of what we repair.",
        },
      },
      faqGuarantee,
      faqPhotos,
    ],
    waMessageAr: "السلام عليكم، أحتاج إصلاح غسالة أتوماتيك في جدة.",
    waMessageEn: "Hello, I need an automatic washing machine repaired in Jeddah.",
    metaDescriptionAr: "إصلاح الغسالات الأتوماتيك في جدة: عدم تصريف الماء، توقف الطبل، رموز الأعطال وأعطال اللوحة الإلكترونية. نتفق على السعر قبل العمل، وعلى الإصلاح ضمان.",
  },
  "refrigerator-repair": {
    heroSubAr: "إصلاح مشاكل التبريد والتسرّب والكمبروسر في الثلاجات داخل منزلك بجدة.",
    heroSubEn: "Refrigerator repair for cooling faults, leaks and compressor issues at your home in Jeddah.",
    introAr: [
      "الثلاجة التي لا تبرّد، أو يتجمد فيها الطعام بشكل غير طبيعي، مشكلة لا تحتمل التأجيل، خصوصاً في صيف جدة.",
      "نفحص الثلاجة ونحدد العطل بوضوح، ونتفق معك على السعر قبل البدء.",
    ],
    introEn: [
      "A fridge that stops cooling, or freezes food oddly, is a problem you cannot leave for long, especially in Jeddah's summer.",
      "We inspect the fridge, identify the fault clearly and agree the price with you before starting.",
    ],
    problems: [
      { ar: "الثلاجة لا تبرّد", en: "The fridge is not cooling" },
      { ar: "تراكم ثلج زائد في الفريزر", en: "Excess frost building up in the freezer" },
      { ar: "تسرّب ماء تحت الثلاجة", en: "Water leaking under the fridge" },
      { ar: "صوت مرتفع من الكمبروسر", en: "Loud noise from the compressor" },
      { ar: "الكمبروسر لا يعمل", en: "The compressor will not start" },
      { ar: "الثلاجة تعمل دون توقف", en: "The fridge runs non-stop" },
    ],
    included,
    faqs: [
      {
        q: { ar: "هل تصلحون الكمبروسر؟", en: "Do you repair compressor problems?" },
        a: {
          ar: "نعم، فحص مشاكل الكمبروسر جزء من إصلاح الثلاجات، ونخبرك بالسعر قبل أي عمل.",
          en: "Yes. Compressor problems are part of our refrigerator repair, and we give you the price before any work.",
        },
      },
      faqGuarantee,
      faqArea,
    ],
    waMessageAr: "السلام عليكم، أحتاج إصلاح ثلاجة في جدة.",
    waMessageEn: "Hello, I need a refrigerator repaired in Jeddah.",
    metaDescriptionAr: "إصلاح الثلاجات في جدة: ضعف التبريد، تراكم الثلج، التسرّب وأعطال الكمبروسر. نتفق على السعر قبل العمل، وعلى كل إصلاح ضمان. اتصل أو راسلنا.",
  },
  "appliance-pipe-installation": {
    heroSubAr: "تمديد مواسير الأجهزة الكهربائية بترتيب ونظافة في منزلك بجدة.",
    heroSubEn: "Neat, tidy pipe installation for electrical appliances at your home in Jeddah.",
    introAr: [
      "التمديد الصحيح للمواسير يوصل الجهاز بالماء أو بالتصريف دون تسرّب، ويحافظ على مظهر المكان.",
      "نخبرك بالسعر قبل أن نبدأ، وننفذ العمل بترتيب ونظافة.",
    ],
    introEn: [
      "Piping done properly connects the appliance to its water supply or drain without leaks and keeps the space looking neat.",
      "We tell you the price before starting and carry out the work tidily.",
    ],
    problems: [
      { ar: "توصيل غسالة جديدة بالماء والتصريف", en: "Connecting a new washer to water and drain" },
      { ar: "تمديد خط تصريف المكيف", en: "Running an AC drain line" },
      { ar: "تغيير مواسير قديمة أو متسرّبة", en: "Replacing old or leaking pipes" },
      { ar: "نقل جهاز إلى مكان جديد", en: "Moving an appliance to a new spot" },
      { ar: "ترتيب المواسير وإخفاؤها", en: "Routing and hiding pipes neatly" },
      { ar: "فحص التسريب بعد التوصيل", en: "Checking for leaks after connection" },
    ],
    included,
    faqs: [
      {
        q: { ar: "ما الأجهزة التي تمدّدون لها المواسير؟", en: "Which appliances do you run pipes for?" },
        a: {
          ar: "نمدد المواسير للأجهزة الكهربائية في المنازل. أخبرنا عن جهازك على واتساب لنؤكد لك.",
          en: "We run pipes for electrical appliances in homes. Tell us about yours on WhatsApp and we will confirm.",
        },
      },
      faqPrice,
      faqPhotos,
    ],
    waMessageAr: "السلام عليكم، أحتاج تمديد مواسير لجهاز كهربائي في جدة.",
    waMessageEn: "Hello, I need pipe installation for an electrical appliance in Jeddah.",
    metaDescriptionAr: "تمديد مواسير الأجهزة الكهربائية في جدة بترتيب ونظافة، من توصيل الغسالات إلى تصريف المكيفات. نتفق على السعر قبل العمل. اتصل أو راسلنا على واتساب.",
  },
};
