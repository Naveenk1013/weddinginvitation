export type Locale = "hi" | "en";

export type LocaleText = {
  hi: string;
  en: string;
};

export interface WeddingEvent {
  id: "tilak" | "vivah" | string;
  title: LocaleText;
  date: string; // ISO date "YYYY-MM-DD"
  time: string | null; // "HH:mm" local, null until confirmed
  timezone: "Asia/Kolkata";
  venue: {
    name: LocaleText;
    address: LocaleText;
  } | null;
  mapUrl: string | null;
  dressCode: LocaleText | null;
  notes: LocaleText | null;
  image?: string;
  imageAlt?: LocaleText;
}

export interface WeddingHost {
  name: LocaleText;
  relation: LocaleText;
}

export interface WeddingRsvp {
  method: "phone" | "whatsapp" | "form";
  value: string;
  deadline: string | null;
}

export interface WeddingGalleryItem {
  src: string;
  alt: LocaleText;
}

export interface WeddingMusic {
  src: string;
  title: string;
}

export interface WeddingData {
  couple: {
    bride: LocaleText;
    groom: LocaleText;
    portrait?: string;
  };
  invocation: string;
  invitationHeading: LocaleText;
  invitationMessage: LocaleText;
  events: WeddingEvent[];
  closingBlessing: LocaleText;
  hosts: WeddingHost[] | null;
  rsvp: WeddingRsvp | null;
  accommodation: LocaleText | null;
  gallery: WeddingGalleryItem[] | null;
  music: WeddingMusic | null;
}

export const wedding: WeddingData = {
  couple: {
    bride: { hi: "रचना कुमारी", en: "Rachna Kumari" },
    groom: { hi: "उदित", en: "Udit" },
    portrait: "/images/couple.png",
  },
  invocation: "॥ श्री गणेशाय नमः ॥",
  invitationHeading: {
    hi: "सप्रेम आमंत्रण",
    en: "With love, we invite you",
  },
  invitationMessage: {
    hi: "आप सपरिवार पधारकर रचना एवं उदित के शुभ विवाह उत्सव की शोभा बढ़ाएँ और नवयुगल को अपना स्नेह एवं आशीर्वाद प्रदान करें।",
    en: "Please join us with your family to celebrate the wedding of Rachna and Udit and bless the couple as they begin this beautiful new chapter.",
  },
  events: [
    {
      id: "tilak",
      title: { hi: "शुभ तिलक", en: "Shubh Tilak" },
      date: "2026-11-25",
      time: null,
      timezone: "Asia/Kolkata",
      venue: {
        name: {
          hi: "दोइला बिनटोली (गृहग्राम)",
          en: "Doila Bintoli (Hometown)",
        },
        address: {
          hi: "दोइला बिनटोली, बिहार",
          en: "Doila Bintoli, Bihar",
        },
      },
      mapUrl: "https://maps.app.goo.gl/tQhtXHdjyp7GPzuD7",
      dressCode: null,
      notes: null,
      image: "/images/events/tilak.jpg",
      imageAlt: {
        hi: "शुभ तिलक समारोह की पारंपरिक मंगल थाली एवं दीप",
        en: "Traditional sacred auspicious thali and diyas for Shubh Tilak ceremony",
      },
    },
    {
      id: "vivah",
      title: { hi: "शुभ विवाह", en: "Shubh Vivah" },
      date: "2026-12-02",
      time: null,
      timezone: "Asia/Kolkata",
      venue: {
        name: {
          hi: "दोइला बिनटोली (गृहग्राम)",
          en: "Doila Bintoli (Hometown)",
        },
        address: {
          hi: "दोइला बिनटोली, बिहार",
          en: "Doila Bintoli, Bihar",
        },
      },
      mapUrl: "https://maps.app.goo.gl/tQhtXHdjyp7GPzuD7",
      dressCode: null,
      notes: null,
      image: "/images/events/vivah.jpg",
      imageAlt: {
        hi: "शुभ विवाह का दिव्य वैदिक मंडप एवं पवित्र अग्नि कुंड",
        en: "Divine Vedic wedding mandap and sacred havan kund for Shubh Vivah",
      },
    },
  ],
  closingBlessing: {
    hi: "सस्नेह आपकी उपस्थिति की प्रतीक्षा में",
    en: "Warmly awaiting your gracious presence",
  },
  hosts: [
    {
      name: {
        hi: "श्रीमती रंजू प्रसाद एवं श्री योगेंद्र प्रसाद",
        en: "Mrs. Ranju Prasad & Mr. Yogendra Prasad",
      },
      relation: {
        hi: "वधू के पूज्य माता-पिता",
        en: "Parents of the Bride",
      },
    },
  ],
  rsvp: null,
  accommodation: null,
  gallery: null,
  music: null,
};
