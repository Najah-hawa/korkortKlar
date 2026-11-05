import type { Question } from '@/types/question'

export const trafiksakerhetQuestions: Question[] = [

    // ===== Flyttad från vägmärkena (varningsmärken) =====
  {
    id: 'q_a18',
    categoryId: 'Trafiksäkerhet',
    questionText: {
      sv: 'Hur bör du passera ridande eller hästfordon när detta märke uppmärksammats?',
      en: 'How should you pass riders or horse-drawn vehicles when this sign is observed?',
      ar: 'كيف يجب أن تتجاوز الفرسان أو المركبات التي تجرها الخيول عند ملاحظة هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a18.-varning-for-ridande/a18-1.png',
    options: [
      { id: 'A', text: { sv: 'Med ett snabbt omkörningsmanöver så hästen inte blir nyfiken.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Genom att använda signalhorn för att varna hästen.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Genom att stanna motorn helt tills hästen passerat.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'I låg hastighet, med stort sidoavstånd och utan plötsliga ljud.', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Hästar är flyktdjur och skräms lätt. Passera alltid försiktigt med låg fart och brett avstånd, och tuta aldrig.',
      en: '',
      ar: ''
    },
    signRefId: 'a18'
  }

  
]