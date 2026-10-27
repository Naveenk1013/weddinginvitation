export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    sacredInvocation: string;
    sacredInvocationSubtitle?: string;
    brideName: string;
    groomName: string;
    connector: string;
    scrollPrompt: string;
    portraitAlt?: string;
  };
  invitation: {
    heading: string;
    message: string;
  };
  timeline: {
    heading: string;
    subheading: string;
  };
  events: {
    tilak: {
      title: string;
      weekday: string;
      dateFormatted: string;
    };
    vivah: {
      title: string;
      weekday: string;
      dateFormatted: string;
    };
    detailsSoon: string;
    addToCalendar: string;
    googleCalendar: string;
    appleCalendar: string;
    viewOnMap: string;
    venueLabel: string;
  };
  hosts: {
    heading: string;
    brideParentsTitle: string;
    brideParentsNames: string;
  };
  countdown: {
    heading: string;
    daysLabel: string;
    hoursLabel: string;
    minutesLabel: string;
    secondsLabel: string;
    todayMessage: string;
    completedMessage: string;
  };
  share: {
    buttonLabel: string;
    copiedMessage: string;
    shareTitle: string;
    shareText: string;
  };
  closing: {
    blessing: string;
    familyGreeting: string;
  };
  ui: {
    languageSwitchLabel: string;
    languageChangedAnnouncement: string;
    reduceMotionToggle: string;
  };
}
