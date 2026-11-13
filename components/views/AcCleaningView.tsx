"use client";

import Link from "next/link";
import { RingingPhone } from "@/components/motion/RingingPhone";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { GoogleLogo } from "@/components/GoogleLogo";
import { RatingStars } from "@/components/RatingStars";
import { SendLocationButton } from "@/components/SendLocationButton";
import { useSite } from "@/lib/site-context";
import { PHONE_PRIMARY, RATING, wa } from "@/lib/constants";
import { serviceContent } from "@/lib/content/services";

type Bi = { ar: string; en: string };

const SYMPTOMS: { say: Bi; why: Bi }[] = [
  {
    say: { ar: "المكيف يعمل لكن التبريد ضعيف", en: "It runs, but it just does not cool like before" },
    why: {
      ar: "الغبار على الفلتر والملف يسدّ طريق الهواء، فيصل إلى الغرفة هواء أقل وأقل برودة.",
      en: "Dust on the filter and coil blocks the way for the air, so less, and less cool, air reaches the room.",
    },
  },
  {
    say: { ar: "تخرج رائحة غير طيبة أول ما أشغّله", en: "A bad smell comes out when I switch it on" },
    why: {
      ar: "الغبار والرطوبة يجتمعان على الملف وفي الصينية، والمروحة تدفع رائحتهما إلى الغرفة.",
      en: "Dust and moisture sit together on the coil and in the pan, and the fan pushes the smell into the room.",
    },
  },
  {
    say: { ar: "ماء ينقّط من الوحدة الداخلية", en: "Water drips from the indoor unit" },
    why: {
      ar: "قد تسدّ الأوساخ مجرى التصريف، فلا يجد الماء طريقه إلى الخارج ويقطر داخل الغرفة.",
      en: "Dirt can block the drain line, so the water cannot get out and drips into the room instead.",
    },
  },
  {
    say: { ar: "أرى غبارًا عند الفتحات وحولها", en: "I can see dust around the vents" },
    why: {
      ar: "حين يمتلئ الفلتر لا يعود يحبس الغبار كما يجب، فيمرّ جزء منه مع الهواء إلى الغرفة.",
      en: "Once the filter is full it stops catching dust properly, and some of it travels with the air into the room.",
    },
  },
  {
    say: { ar: "لا أذكر متى نظّفته آخر مرة", en: "I cannot remember when it was last cleaned" },
    why: {
      ar: "الغبار يتراكم بهدوء شهرًا بعد شهر، ولا ننتبه له إلا حين تظهر المشكلة.",
      en: "Dust builds up quietly, month after month, and we only notice it when a problem shows up.",
    },
  },
  {
    say: { ar: "أريده جاهزًا قبل الصيف", en: "I want it ready before summer" },
    why: {
      ar: "من الأفضل أن تعرف حالة المكيف قبل أن تحتاجه كل يوم في حرّ جدة.",
      en: "Better to know the state of your AC before you depend on it every day in the Jeddah heat.",
    },
  },
];

const PARTS: { t: Bi; d: Bi }[] = [
  {
    t: { ar: "الفلتر", en: "The filter" },
    d: {
      ar: "أول ما يلتقط الغبار من هواء الغرفة. حين يمتلئ يضعف تدفق الهواء كله.",
      en: "The first thing to catch dust from the room air. When it fills up, all the airflow weakens.",
    },
  },
  {
    t: { ar: "ملف التبريد", en: "The cooling coil" },
    d: {
      ar: "زعانف رقيقة تبرّد الهواء. إذا لصق عليها الغبار مع الرطوبة صعب على البرودة أن تنتقل.",
      en: "Thin fins that cool the air. When dust and moisture stick to them, the cold has a harder time getting through.",
    },
  },
  {
    t: { ar: "الصينية ومجرى التصريف", en: "The drain pan and line" },
    d: {
      ar: "تجمع ماء التكثف وتخرجه من الغرفة. إذا انسدّ المجرى فاض الماء وقطر.",
      en: "They collect the condensation and carry it out of the room. If the line clogs, the water overflows and drips.",
    },
  },
  {
    t: { ar: "مروحة النفخ", en: "The blower fan" },
    d: {
      ar: "تدفع الهواء البارد إلى الغرفة. الغبار على ريشها يقلل الهواء ويحمل الرائحة.",
      en: "It pushes the cooled air into the room. Dust on its blades means less air, and it can carry a smell.",
    },
  },
];

const STEPS: { t: Bi; d: Bi }[] = [
  {
    t: { ar: "راسلنا", en: "Message us" },
    d: {
      ar: "أخبرنا بنوع المكيف وعدد الوحدات على واتساب. ويمكنك إرسال صورة أو فيديو قصير، والمراسلة مجانية.",
      en: "Tell us the type of AC and how many units on WhatsApp. You can send a photo or short video too, and messaging is free.",
    },
  },
  {
    t: { ar: "نتفق على السعر", en: "We agree the price" },
    d: {
      ar: "نخبرك بالسعر قبل أن نبدأ، ولا نبدأ العمل إلا بعد موافقتك. لا رسوم مخفية.",
      en: "We tell you the price before we begin, and start only after you agree. No hidden fees.",
    },
  },
  {
    t: { ar: "ننظف بترتيب", en: "We clean, neatly" },
    d: {
      ar: "نحمي المكان حول المكيف، وننظفه، ونترك المكان نظيفًا بعد أن ننتهي.",
      en: "We protect the area around the unit, clean it, and leave the place tidy when we are done.",
    },
  },
  {
    t: { ar: "وإن ظهر عطل", en: "And if there is a fault" },
    d: {
      ar: "نخبرك به ونتفق على الإصلاح قبل أي عمل. لا يتم شيء دون موافقتك.",
      en: "We tell you and agree the repair with you first. Nothing happens without your yes.",
    },
  },
];

/** Cross-section of an indoor split unit. Geometry is physical, so it is kept left-to-right in both languages. */
function UnitDiagram({ isAr }: { isAr: boolean }) {
  const blades = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180;
    const p = (r: number) => `${(Math.cos(a) * r).toFixed(2)} ${(Math.sin(a) * r).toFixed(2)}`;
    return { key: i, d: `M${p(16)} L${p(33)}` };
  });
  const dust: [number, number][] = [
    [130, 66], [152, 67], [206, 65], [240, 67], [262, 66], [330, 66], [372, 67], [410, 65], [440, 67],
    [180, 128], [214, 118], [352, 108], [408, 126], [442, 142],
    [49, 204], [43, 214],
    [278, 196], [322, 240], [300, 190],
  ];
  const title = isAr ? "مقطع في وحدة مكيف سبليت داخلية يبيّن أين يتجمع الغبار" : "Cross-section of an indoor split AC unit showing where dust collects";
  const desc = isAr
    ? "رسم توضيحي بأربعة مواضع مرقمة: 1 الفلتر في الأعلى، 2 ملف التبريد، 3 الصينية ومجرى التصريف، 4 مروحة النفخ. النقاط البرتقالية تمثل الغبار."
    : "A simple diagram with four numbered places: 1 the filter at the top, 2 the cooling coil, 3 the drain pan and line, 4 the blower fan. The orange dots stand for dust.";
  return (
    <svg className="acx-svg" viewBox="0 0 560 340" role="img" aria-labelledby="acx-svg-t acx-svg-d" style={{ direction: "ltr" }} focusable="false">
      <title id="acx-svg-t">{title}</title>
      <desc id="acx-svg-d">{desc}</desc>
      <defs>
        <pattern id="acx-mesh" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" className="acx-mesh" />
        </pattern>
      </defs>

      {/* room air in */}
      <text x="300" y="16" textAnchor="middle" className="acx-label">{isAr ? "هواء الغرفة" : "Room air"}</text>
      {[170, 300, 430].map((x) => (
        <g key={x} className="acx-air">
          <line x1={x} y1="24" x2={x} y2="44" />
          <polyline points={`${x - 5},38 ${x},45 ${x + 5},38`} />
        </g>
      ))}

      {/* housing */}
      <path className="acx-wall" d="M200 262 H70 V54 H530 V262 H420" />
      <line className="acx-grille" x1="74" y1="54" x2="526" y2="54" />
      <path className="acx-flap" d="M200 262 L238 280" />

      {/* 1 filter */}
      <rect className="acx-filter" x="100" y="72" width="380" height="9" fill="url(#acx-mesh)" />

      {/* 2 coil: two angled banks of fins */}
      <line className="acx-coil" x1="300" y1="102" x2="120" y2="158" />
      <line className="acx-coil" x1="300" y1="102" x2="480" y2="158" />

      {/* 3 pan + drain line */}
      <path className="acx-pan" d="M100 166 V184 H500 V166" />
      <rect className="acx-water" x="104" y="178" width="392" height="4" />
      <path className="acx-pipe" d="M104 182 H46 V236" />
      <circle className="acx-drop" cx="46" cy="252" r="3.5" />
      <circle className="acx-drop" cx="46" cy="268" r="3.5" />

      {/* 4 blower fan */}
      <g transform="translate(300 224)">
        <circle className="acx-fan-ring" r="34" />
        {blades.map((b) => (
          <path key={b.key} className="acx-blade" d={b.d} />
        ))}
        <circle className="acx-fan-hub" r="7" />
      </g>

      {/* dust */}
      {dust.map(([x, y]) => (
        <rect key={`${x}-${y}`} className="acx-dust" x={x} y={y} width="7" height="7" />
      ))}

      {/* cooled air out */}
      {[270, 310, 350].map((x) => (
        <g key={x} className="acx-air acx-air--cool">
          <line x1={x} y1="274" x2={x} y2="298" />
          <polyline points={`${x - 5},292 ${x},299 ${x + 5},292`} />
        </g>
      ))}
      <text x="310" y="326" textAnchor="middle" className="acx-label">{isAr ? "هواء بارد" : "Cooled air"}</text>

      {/* markers */}
      <g className="acx-marker">
        <circle cx="506" cy="76" r="16" /><text x="506" y="82" textAnchor="middle">1</text>
      </g>
      <g className="acx-marker">
        <line className="acx-lead" x1="442" y1="116" x2="428" y2="132" />
        <circle cx="452" cy="104" r="16" /><text x="452" y="110" textAnchor="middle">2</text>
      </g>
      <g className="acx-marker">
        <circle cx="20" cy="204" r="16" /><text x="20" y="210" textAnchor="middle">3</text>
      </g>
      <g className="acx-marker">
        <line className="acx-lead" x1="338" y1="224" x2="360" y2="224" />
        <circle cx="374" cy="224" r="16" /><text x="374" y="230" textAnchor="middle">4</text>
      </g>
    </svg>
  );
}

export function AcCleaningView() {
  const { L, isAr } = useSite();
  const c = serviceContent["ac-cleaning"];
  const t = (b: Bi) => (isAr ? b.ar : b.en);

  const callBtn = (cls: string) => (
    <a
      href={`tel:${PHONE_PRIMARY}`}
      className={`acx-btn acx-btn--call tap ${cls}`}
      data-call
      onClick={(e) => { e.preventDefault(); window.trackPhoneConversion?.(e.currentTarget.href); }}
    >
      <RingingPhone size={22} />
      <span className="acx-btn__text">
        <span>{L.callBtn}</span>
        <span className="acx-btn__num" dir="ltr">{PHONE_PRIMARY}</span>
      </span>
    </a>
  );
  const waBtn = (cls: string) => (
    <a
      href={wa(isAr ? c.waMessageAr : c.waMessageEn)}
      className={`acx-btn acx-btn--wa tap ${cls}`}
      data-call
      onClick={(e) => { e.preventDefault(); window.trackWhatsappConversion?.(e.currentTarget.href); }}
    >
      <WhatsAppIcon size={22} />
      <span>{isAr ? "راسلنا على واتساب" : "Message us on WhatsApp"}</span>
    </a>
  );

  return (
    <div className="acx">
      {/* 1. Hero */}
      <section className="acx-hero">
        <div className="acx-hero__air" aria-hidden="true">
          <svg viewBox="0 0 320 320" fill="none">
            <path d="M10 70 C70 40 110 100 170 70 S260 40 310 70" />
            <path d="M10 130 C70 100 110 160 170 130 S260 100 310 130" />
            <path d="M10 190 C70 160 110 220 170 190 S260 160 310 190" />
            <path d="M10 250 C70 220 110 280 170 250 S260 220 310 250" />
          </svg>
        </div>
        <div className="acx-in">
          <nav aria-label={isAr ? "مسار التنقل" : "Breadcrumb"} className="crumbs">
            <ol>
              <li><Link href="/">{isAr ? "الرئيسية" : "Home"}</Link></li>
              <li><Link href="/services">{isAr ? "خدماتنا" : "Services"}</Link></li>
              <li><span aria-current="page">{isAr ? "تنظيف مكيفات" : "AC cleaning"}</span></li>
            </ol>
          </nav>
          <p className="acx-kicker">{isAr ? "تنظيف مكيفات في منزلك، جدة" : "AC cleaning at your home, Jeddah"}</p>
          <h1 className="acx-h1">
            {isAr ? (
              <>المكيف يبرّد ضعيفًا،<br />أو تخرج منه <span className="acx-h1__mark">رائحة؟</span></>
            ) : (
              <>AC blowing weak or <span className="acx-h1__mark">smelly air?</span></>
            )}
          </h1>
          <p className="acx-lead-p">
            {isAr
              ? "الغبار المتراكم داخل المكيف سبب شائع. نأتي إلى منزلك ونتفق معك على السعر قبل أن نبدأ، ولا نعمل إلا بموافقتك."
              : "Dust packed inside the unit is a common cause. We come to your home, agree the price before we start, and only work once you say yes."}
          </p>
          <div className="acx-actions">
            {callBtn("")}
            {waBtn("")}
          </div>
          <p className="acx-micro">{isAr ? "صور أو فيديو قصير للمشكلة على واتساب قبل أي شيء، مجانًا." : "Send a photo or short video of the problem on WhatsApp first, free."}</p>

          <ul className="acx-strip" aria-label={isAr ? "لماذا نحن" : "Why us"}>
            <li className="acx-strip__rating">
              <GoogleLogo size={22} />
              <strong dir="ltr">{RATING}</strong>
              <RatingStars value={Number(RATING)} size={16} />
              <span>{isAr ? "من 18 تقييمًا على Google" : "from 18 ratings on Google"}</span>
            </li>
            <li>{isAr ? "طوارئ 24/7، كل أيام الأسبوع" : "24/7 emergency, every day"}</li>
            <li>{isAr ? "السعر قبل العمل" : "Price before work"}</li>
          </ul>
        </div>
      </section>

      {/* 2. Symptoms */}
      <section className="acx-sec">
        <div className="acx-in">
          <header className="acx-head" data-reveal>
            <span className="acx-no" aria-hidden="true">01</span>
            <h2 className="acx-h2">{isAr ? "هل يظهر على مكيفك أحد هذه الأعراض؟" : "Does your AC do any of this?"}</h2>
            <p className="acx-sub">{isAr ? "هذا ما يقوله عادةً من يتصل بنا، ومعه سبب كل عرض بكلمات بسيطة." : "This is what people usually tell us, with the plain reason behind each one."}</p>
          </header>
          <ul className="acx-sym" data-stagger>
            {SYMPTOMS.map((s, i) => (
              <li key={s.say.en} className="acx-sym__item" data-reveal>
                <span className="acx-sym__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <p className="acx-sym__say">{isAr ? `«${s.say.ar}»` : `“${s.say.en}”`}</p>
                <p className="acx-sym__why">{t(s.why)}</p>
              </li>
            ))}
          </ul>
          <div className="acx-inline-cta" data-reveal>
            <p>{isAr ? "عرفت مكيفك في واحد منها؟" : "Recognise your AC in one of these?"}</p>
            {waBtn("acx-btn--sm")}
          </div>
        </div>
      </section>

      {/* 3. Diagram */}
      <section className="acx-sec acx-sec--paper">
        <div className="acx-in">
          <header className="acx-head" data-reveal>
            <span className="acx-no" aria-hidden="true">02</span>
            <h2 className="acx-h2">{isAr ? "ما الذي يتسخ داخل مكيفك" : "What gets dirty inside your AC"}</h2>
            <p className="acx-sub">
              {isAr
                ? "أربعة أماكن ينظر إليها التنظيف الجيد. وهي نفسها مصدر الأعراض أعلاه."
                : "Four places a proper cleaning looks at. They are also where the symptoms above come from."}
            </p>
          </header>
          <div className="acx-fig" data-reveal>
            <figure className="acx-fig__art">
              <UnitDiagram isAr={isAr} />
              <figcaption className="acx-fig__cap">
                <span className="acx-fig__key" aria-hidden="true" />
                {isAr ? "المربعات البرتقالية: الغبار. رسم توضيحي لأماكن تجمّعه، وليس وصفًا لطريقة عمل محددة." : "Orange squares: dust. An illustration of where it collects, not a description of one specific method."}
              </figcaption>
            </figure>
            <ol className="acx-legend">
              {PARTS.map((p, i) => (
                <li key={p.t.en} className="acx-legend__item">
                  <span className="acx-legend__n" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className="acx-legend__t">{t(p.t)}</h3>
                    <p className="acx-legend__d">{t(p.d)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4. Steps */}
      <section className="acx-sec">
        <div className="acx-in">
          <header className="acx-head" data-reveal>
            <span className="acx-no" aria-hidden="true">03</span>
            <h2 className="acx-h2">{isAr ? "كيف تتم الزيارة" : "How the visit works"}</h2>
          </header>
          <ol className="acx-steps" data-stagger>
            {STEPS.map((s, i) => (
              <li key={s.t.en} className="acx-step" data-reveal>
                <span className="acx-step__n" aria-hidden="true">{i + 1}</span>
                <h3 className="acx-step__t">{t(s.t)}</h3>
                <p className="acx-step__d">{t(s.d)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Trust */}
      <section className="acx-trust">
        <div className="acx-in acx-trust__grid">
          <div className="acx-trust__rate" data-reveal>
            <p className="acx-trust__label">{isAr ? "تقييمنا الحقيقي على Google" : "Our real rating on Google"}</p>
            <div className="acx-trust__score">
              <GoogleLogo size={34} />
              <span className="acx-trust__num" dir="ltr">{RATING}</span>
            </div>
            <RatingStars value={Number(RATING)} size={24} />
            <p className="acx-trust__count">{isAr ? "من 18 تقييمًا" : "from 18 ratings"}</p>
            <Link href="/reviews" className="acx-trust__link">{isAr ? "اقرأ التقييمات" : "Read the reviews"}</Link>
          </div>
          <ul className="acx-trust__facts" data-stagger>
            <li data-reveal>
              <strong>{isAr ? "عادل، فني مستقل" : "Adel, an independent technician"}</strong>
              <span>{isAr ? "عادل هو صاحب العمل، وهو فني مستقل في جدة." : "Adel is the owner, and an independent technician in Jeddah."}</span>
            </li>
            <li data-reveal>
              <strong>{isAr ? "السعر قبل العمل" : "Price before work"}</strong>
              <span>{isAr ? "نبدأ بعد موافقتك فقط، ولا رسوم مخفية." : "We start only after you agree, and there are no hidden fees."}</span>
            </li>
            <li data-reveal>
              <strong>{isAr ? "كل جدة، 24/7" : "All of Jeddah, 24/7"}</strong>
              <span>{isAr ? "خدمة طوارئ كل يوم على مدار الساعة." : "Emergency service every day, around the clock."}</span>
            </li>
            <li data-reveal>
              <strong>{isAr ? "ضمان على الإصلاحات" : "A guarantee on repairs"}</strong>
              <span>{isAr ? "إن ظهر عطل نتفق على إصلاحه معك أولًا، وعلى الإصلاح ضمان." : "If a fault turns up we agree the repair with you first, and the repair is guaranteed."}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="acx-sec">
        <div className="acx-in acx-faqwrap">
          <header className="acx-head" data-reveal>
            <span className="acx-no" aria-hidden="true">04</span>
            <h2 className="acx-h2">{isAr ? "قبل أن تحجز" : "Before you book"}</h2>
          </header>
          <div className="svcp-faq acx-faq" data-reveal>
            {c.faqs.map((f) => (
              <details key={f.q.en} className="svcp-faq__item">
                <summary className="svcp-faq__sum">
                  <span className="svcp-faq__q">{isAr ? f.q.ar : f.q.en}</span>
                  <span className="svcp-faq__icon" aria-hidden="true" />
                </summary>
                <p className="svcp-faq__a">{isAr ? f.a.ar : f.a.en}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="cta-section acx-cta">
        <div className="cta-section__glow" />
        <div className="cta-section__inner" data-reveal>
          <h2 className="cta-section__title">{isAr ? "جاهز لتنظيف مكيفك؟" : "Ready to get your AC cleaned?"}</h2>
          <p className="cta-section__sub">
            {isAr
              ? "اتصل أو راسلنا على واتساب. نتفق على السعر أولًا، ونخدم كل جدة. طوارئ 24/7 كل يوم."
              : "Call or message us on WhatsApp. We agree the price first and cover all of Jeddah. 24/7 emergency, every day."}
          </p>
          <div className="cta-section__actions">
            {waBtn("acx-btn--light")}
            {callBtn("acx-btn--ghost")}
          </div>
          <SendLocationButton isAr={isAr} />
        </div>
      </section>
    </div>
  );
}
