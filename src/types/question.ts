export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D'
  text: {
    sv: string
    en?: string
    ar?: string
  }
}

export interface Question {
  id: string
  categoryId: string // 'vagmarken' | 'trafikregler' | 'miljo-sakerhet' | etc.
  questionText: {
    sv: string
    en?: string
    ar?: string
  }
  image?: string // مسار الصورة الخاصة بالسؤال
  options: QuestionOption[]
  correctAnswerId: 'A' | 'B' | 'C' | 'D'
  explanation: {
    sv: string
    en?: string
    ar?: string
  }
  signRefId?: string // ربط مع الشاخصة المرورية إن وجدت (لقراءة المزيد)
}