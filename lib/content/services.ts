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
  { ar: "ضمان على كل إصلاح: إذا عادت المشكلة نرجع بدون تكلفة إضافية", en: "A guarantee on every repair: if the issue returns we come back at no extra cost" },
  { ar: "لا نستبدل أي قطعة إلا عند الحاجة", en: "No unnecessary parts replaced" },
  { ar: "عمل مرتب ونظيف في منزلك", en: "Tidy, clean work in your home" },
];

const faqPrice: ServiceFaq = {
  q: { ar: "هل يُحدد السعر قبل بدء العمل؟", en: "Is the price agreed before the work starts?" },
  a: {
    ar: "نعم، نفحص الجهاز ونخبرك بالسعر ثم نبدأ بعد موافقتك فقط، بدون رسوم مخفية.",
    en: "Yes. We inspect the unit, tell you the price, and start only once you agree. No hidden fees.",
  },
};

const faqPhotos: ServiceFaq = {
  q: { ar: "هل أستطيع إرسال صور المشكلة على واتساب؟", en: "Can I send photos of the problem on WhatsApp?" },
  a: {
    ar: "نعم، الصور والفيديو القصير تساعدنا على فهم المشكلة قبل الحضور، والمراسلة على واتساب مجانية.",
    en: "Yes. Photos or a short video help us understand the problem before we arrive, and messaging on WhatsApp is free.",
  },
};

const faqArea: ServiceFaq = {
  q: { ar: "هل تخدمون جميع أنحاء جدة؟", en: "Do you cover all of Jeddah?" },
  a: {
    ar: "نعم، نخدم جميع أنحاء جدة، يومياً من الثامنة صباحاً حتى منتصف الليل.",
    en: "Yes, we serve all of Jeddah, every day from 8:00 AM to midnight.",
  },
};

const faqGuarantee: ServiceFaq = {
  q: { ar: "هل يوجد ضمان على الإصلاح؟", en: "Is the repair guaranteed?" },
  a: {
    ar: "نعم، كل إصلاح عليه ضمان: إذا عادت نفس المشكلة نرجع لإصلاحها بدون تكلفة إضافية.",
    en: "Yes. Every repair is guaranteed: if the same issue returns, we come back and fix it at no extra cost.",
  },
};

export const serviceContent: Record<ServiceSlug, ServiceDetail> = {
  "window-ac-repair": {
    heroSubAr: "فحص وإصلاح مكيفات الشباك في منزلك بجدة، والسعر يُتفق عليه قبل البدء.",
    heroSubEn: "Window AC inspection and repair at your home in Jeddah, with the price agreed first.",
    introAr: [
      "مكيف الشباك يعمل ساعات طويلة في حر جدة، ومع الغبار والرطوبة تظهر أعطال مثل ضعف التبريد أو التنقيط أو الضجيج.",
      "نفحص الجهاز في مكانه، نشرح لك السبب بوضوح، ونصلح فقط ما يحتاج إصلاحاً.",
    ],
    introEn: [
      "A window AC runs for long hours in Jeddah's heat, and dust and humidity bring faults like weak cooling, dripping or noise.",
      "We inspect the unit where it sits, explain the cause clearly, and repair only what needs repairing.",
    ],
    problems: [
      { ar: "المكيف يعمل ولا يبرد كفاية", en: "The AC runs but does not cool enough" },
      { ar: "تنقيط ماء داخل الغرفة", en: "Water dripping into the room" },
      { ar: "ضجيج غير معتاد أو اهتزاز", en: "Unusual noise or vibration" },
      { ar: "الجهاز لا يشتغل أو يفصل فجأة", en: "The unit will not start or shuts off suddenly" },
      { ar: "تجمد الثلج على الملف", en: "Ice forming on the coil" },
      { ar: "الحاجة لتعبئة غاز التبريد", en: "Refrigerant that needs topping up" },
    ],
    included,
    faqs: [
      {
        q: { ar: "ما أسباب تنقيط الماء من مكيف الشباك؟", en: "Why is my window AC dripping water?" },
        a: {
          ar: "من الأسباب الشائعة انسداد مجرى التصريف أو ميل الجهاز بشكل خاطئ أو اتساخ الفلتر. نفحص السبب ونعالجه.",
          en: "Common causes are a blocked drain path, a wrongly tilted unit or a dirty filter. We find the cause and fix it.",
        },
      },
      faqPrice,
      faqPhotos,
    ],
    waMessageAr: "السلام عليكم، أحتاج إصلاح مكيف شباك في جدة.",
    waMessageEn: "Hello, I need a window AC repaired in Jeddah.",
    metaDescriptionAr: "فحص وإصلاح مكيفات الشباك في جدة: ضعف التبريد والتنقيط والضجيج. السعر يُتفق عليه قبل العمل وضمان على كل إصلاح. تواصل واتساب أو اتصال.",
  },
  "split-ac-repair": {
    heroSubAr: "تشخيص وإصلاح مكيفات السبليت وتعبئة الفريون في جميع أنحاء جدة.",
    heroSubEn: "Split AC diagnosis, repair and refrigerant refill across Jeddah.",
    introAr: [
      "عندما لا يبرد السبليت أو ينقط من الوحدة الداخلية، فغالباً هناك سبب محدد يمكن الوصول إليه بالفحص وليس بالتخمين.",
      "نشخّص العطل أولاً، نخبرك بالسعر، ثم نصلح. وتعبئة الفريون تتم عند الحاجة فقط.",
    ],
    introEn: [
      "When a split AC stops cooling or drips from the indoor unit, there is usually a specific cause that inspection can find, not guesswork.",
      "We diagnose first, tell you the price, then repair. Refrigerant is topped up only when it is needed.",
    ],
    problems: [
      { ar: "المكيف لا يبرد", en: "The AC is not cooling" },
      { ar: "تسرب ماء من الوحدة الداخلية", en: "Water leaking from the indoor unit" },
      { ar: "صوت غريب من الوحدة الداخلية أو الخارجية", en: "Odd noise from the indoor or outdoor unit" },
      { ar: "الوحدة الخارجية أو الجهاز لا يشتغل", en: "The outdoor unit or the whole system will not start" },
      { ar: "تجمد الملف أو خروج هواء ضعيف", en: "A frozen coil or weak airflow" },
      { ar: "تعبئة الفريون عند نقصه", en: "Refrigerant top-up when it is low" },
    ],
    included,
    faqs: [
      {
        q: { ar: "هل تقومون بتعبئة الفريون؟", en: "Do you refill refrigerant?" },
        a: {
          ar: "نعم، نعبئ الفريون في مكيفات السبليت عند الحاجة، بعد الفحص والاتفاق على السعر.",
          en: "Yes. We refill refrigerant in split units when needed, after inspection and an agreed price.",
        },
      },
      faqGuarantee,
      faqPhotos,
    ],
    waMessageAr: "السلام عليكم، أحتاج إصلاح مكيف سبليت في جدة.",
    waMessageEn: "Hello, I need a split AC repaired in Jeddah.",
    metaDescriptionAr: "إصلاح مكيفات السبليت في جدة: لا يبرد، تسريب ماء، ضجيج، وتعبئة فريون. السعر قبل العمل وضمان على كل إصلاح. تواصل معنا واتساب أو اتصال.",
  },
  "central-ac": {
    heroSubAr: "صيانة وإصلاح أنظمة التكييف المركزي للمنازل والمنشآت في جدة.",
    heroSubEn: "Maintenance and repair of central AC systems for homes and buildings in Jeddah.",
    introAr: [
      "التكييف المركزي نظام متكامل، وعطل صغير في الدكت أو الثرموستات قد يسبب تبريداً غير متساوٍ بين الغرف.",
      "نفحص النظام كاملاً ونحدد مصدر المشكلة قبل أي إصلاح، ونتفق معك على السعر أولاً.",
    ],
    introEn: [
      "A central AC is a whole system, and a small fault in the ducts or thermostat can leave rooms unevenly cooled.",
      "We check the full system and find the source of the problem before any repair, with the price agreed first.",
    ],
    problems: [
      { ar: "تبريد غير متساوٍ بين الغرف", en: "Uneven cooling between rooms" },
      { ar: "ضعف تدفق الهواء من الفتحات", en: "Weak airflow from the vents" },
      { ar: "مشاكل في الدكت والتوزيع", en: "Duct and air distribution problems" },
      { ar: "عطل في الثرموستات أو التحكم", en: "Thermostat or control faults" },
      { ar: "النظام لا يشتغل أو يفصل", en: "The system will not start or keeps shutting off" },
      { ar: "صيانة دورية للنظام", en: "Routine system maintenance" },
    ],
    included,
    faqs: [
      {
        q: { ar: "هل تصلحون التكييف المركزي للمنشآت أيضاً؟", en: "Do you repair central AC in buildings too?" },
        a: {
          ar: "نخدم المنازل والمنشآت، ويمكنك وصف حالتك على واتساب لنخبرك كيف نساعدك.",
          en: "We serve homes and buildings. Describe your case on WhatsApp and we will tell you how we can help.",
        },
      },
      faqPrice,
      faqArea,
    ],
    waMessageAr: "السلام عليكم، أحتاج صيانة أو إصلاح تكييف مركزي في جدة.",
    waMessageEn: "Hello, I need central AC maintenance or repair in Jeddah.",
    metaDescriptionAr: "صيانة وإصلاح التكييف المركزي في جدة: تبريد غير متساوٍ، الدكت، الثرموستات والصيانة الدورية. السعر قبل العمل وضمان على الإصلاح. تواصل معنا.",
  },
  "washing-machine-repair": {
    heroSubAr: "إصلاح الغسالات الأتوماتيك وأعطال اللوحات الإلكترونية في منزلك بجدة.",
    heroSubEn: "Automatic washing machine repair, including control-board faults, at your home in Jeddah.",
    introAr: [
      "الغسالة التي لا تصرّف الماء أو لا يدور طبلها أو تظهر عليها رموز أعطال غالباً تحتاج فحصاً دقيقاً للعثور على السبب.",
      "نفحص الغسالة في مكانها، ونصلح اللوحة الإلكترونية أو القطعة المعطلة فقط، بعد الاتفاق على السعر.",
    ],
    introEn: [
      "A washer that will not drain, will not spin or shows error codes usually needs a careful check to find the cause.",
      "We inspect it where it stands and repair the control board or the faulty part only, after agreeing the price.",
    ],
    problems: [
      { ar: "الغسالة لا تصرّف الماء", en: "The washer will not drain" },
      { ar: "ظهور رموز أعطال على الشاشة", en: "Error codes on the display" },
      { ar: "الطبل لا يدور", en: "The drum does not spin" },
      { ar: "تسرب ماء من الغسالة", en: "Water leaking from the machine" },
      { ar: "أعطال اللوحة الإلكترونية", en: "Electronic control-board faults" },
      { ar: "الغسالة لا تشتغل أو تتوقف أثناء الدورة", en: "The washer will not start or stops mid-cycle" },
    ],
    included,
    faqs: [
      {
        q: { ar: "هل تصلحون أعطال اللوحة الإلكترونية؟", en: "Do you repair control-board faults?" },
        a: {
          ar: "نعم، أعطال اللوحات الإلكترونية في الغسالات الأتوماتيك ضمن خدماتنا.",
          en: "Yes. Electronic control-board faults in automatic washers are part of what we repair.",
        },
      },
      faqGuarantee,
      faqPhotos,
    ],
    waMessageAr: "السلام عليكم، أحتاج إصلاح غسالة أتوماتيك في جدة.",
    waMessageEn: "Hello, I need an automatic washing machine repaired in Jeddah.",
    metaDescriptionAr: "إصلاح الغسالات الأتوماتيك في جدة: لا تصرّف الماء، الطبل لا يدور، رموز أعطال وأعطال اللوحة الإلكترونية. السعر قبل العمل وضمان على الإصلاح.",
  },
  "refrigerator-repair": {
    heroSubAr: "إصلاح مشاكل التبريد والتسريب والكمبروسر في الثلاجات داخل منزلك بجدة.",
    heroSubEn: "Refrigerator repair for cooling faults, leaks and compressor issues at your home in Jeddah.",
    introAr: [
      "ثلاجة لا تبرد أو تتجمد فيها الأطعمة بشكل غير طبيعي مشكلة لا تحتمل التأجيل، خصوصاً في صيف جدة.",
      "نفحص الثلاجة ونحدد العطل بوضوح، ونتفق معك على السعر قبل البدء.",
    ],
    introEn: [
      "A fridge that stops cooling, or freezes food oddly, is a problem you cannot leave for long, especially in Jeddah's summer.",
      "We inspect the fridge, identify the fault clearly, and agree the price with you before starting.",
    ],
    problems: [
      { ar: "الثلاجة لا تبرد", en: "The fridge is not cooling" },
      { ar: "تكوّن ثلج زائد في الفريزر", en: "Excess frost building up in the freezer" },
      { ar: "تسرب ماء تحت الثلاجة", en: "Water leaking under the fridge" },
      { ar: "صوت من الكمبروسر", en: "Noise from the compressor" },
      { ar: "الكمبروسر لا يشتغل", en: "The compressor will not start" },
      { ar: "الثلاجة تعمل بلا توقف", en: "The fridge runs non-stop" },
    ],
    included,
    faqs: [
      {
        q: { ar: "هل تصلحون الكمبروسر؟", en: "Do you repair compressor problems?" },
        a: {
          ar: "نعم، نفحص مشاكل الكمبروسر ضمن إصلاح الثلاجات، ونخبرك بالسعر قبل أي عمل.",
          en: "Yes. Compressor problems are part of our refrigerator repair, and we give you the price before any work.",
        },
      },
      faqGuarantee,
      faqArea,
    ],
    waMessageAr: "السلام عليكم، أحتاج إصلاح ثلاجة في جدة.",
    waMessageEn: "Hello, I need a refrigerator repaired in Jeddah.",
    metaDescriptionAr: "إصلاح الثلاجات في جدة: لا تبرد، ثلج زائد، تسريب وأعطال الكمبروسر. السعر يُتفق عليه قبل العمل وضمان على كل إصلاح. اتصل أو راسلنا واتساب.",
  },
  "appliance-pipe-installation": {
    heroSubAr: "تمديد مواسير الأجهزة الكهربائية بشكل مرتب ونظيف في منزلك بجدة.",
    heroSubEn: "Neat, tidy pipe installation for electrical appliances at your home in Jeddah.",
    introAr: [
      "تمديد المواسير بشكل صحيح يوصل الجهاز بمصدر الماء أو التصريف دون تسريب ويحافظ على شكل المكان.",
      "نخبرك بالسعر قبل البدء وننفذ العمل بترتيب ونظافة.",
    ],
    introEn: [
      "Piping done properly connects the appliance to its water supply or drain without leaks and keeps the space looking neat.",
      "We tell you the price before starting and carry out the work tidily.",
    ],
    problems: [
      { ar: "توصيل غسالة جديدة بالماء والتصريف", en: "Connecting a new washer to water and drain" },
      { ar: "تمديد تصريف المكيف", en: "Running an AC drain line" },
      { ar: "تغيير مواسير قديمة أو متسربة", en: "Replacing old or leaking pipes" },
      { ar: "نقل جهاز إلى مكان جديد", en: "Moving an appliance to a new spot" },
      { ar: "ترتيب المواسير وإخفاؤها بشكل نظيف", en: "Routing and hiding pipes neatly" },
      { ar: "فحص التسريب بعد التوصيل", en: "Checking for leaks after connection" },
    ],
    included,
    faqs: [
      {
        q: { ar: "ما الأجهزة التي تمدّدون لها المواسير؟", en: "Which appliances do you run pipes for?" },
        a: {
          ar: "نمدد المواسير للأجهزة الكهربائية في المنازل. أخبرنا بجهازك على واتساب لنتأكد من الخدمة.",
          en: "We run pipes for electrical appliances in homes. Tell us about yours on WhatsApp and we will confirm.",
        },
      },
      faqPrice,
      faqPhotos,
    ],
    waMessageAr: "السلام عليكم، أحتاج تمديد مواسير لجهاز كهربائي في جدة.",
    waMessageEn: "Hello, I need pipe installation for an electrical appliance in Jeddah.",
    metaDescriptionAr: "تمديد مواسير الأجهزة الكهربائية في جدة بشكل مرتب ونظيف، من توصيل الغسالات إلى تصريف المكيفات. السعر قبل العمل. تواصل معنا واتساب أو اتصال.",
  },
};
