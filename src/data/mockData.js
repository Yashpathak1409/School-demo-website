// src/data/mockData.js

export const coursesData = [
  {
    id: 'b-pharm',
    wing: 'Bachelor of Pharmacy (B.Pharm)',
    classes: '4-Year Undergraduate Degree',
    curriculum: 'PCI prescribed curriculum covering pharmacology, pharmaceutics, pharmaceutical chemistry, pharmacognosy, and clinical practice.',
    subjects: ['Pharmaceutics', 'Pharmacology & Toxicology', 'Pharmaceutical Chemistry', 'Pharmacognosy & Phytochemistry', 'Biochemistry', 'Human Anatomy & Physiology', 'Pharmacy Practice'],
    icon: 'GraduationCap'
  },
  {
    id: 'd-pharm',
    wing: 'Diploma in Pharmacy (D.Pharm)',
    classes: '2-Year Undergraduate Diploma',
    curriculum: 'State board curriculum focusing on foundational pharmaceutical knowledge, dispensing techniques, hospital pharmacy, and drug store management.',
    subjects: ['Pharmaceutics (Theory & Practical)', 'Pharmaceutical Chemistry', 'Pharmacognosy', 'Human Anatomy & Physiology', 'Social Pharmacy', 'Community Pharmacy & Management', 'Hospital & Clinical Pharmacy'],
    icon: 'BookOpen'
  },
  {
    id: 'medicinal-garden',
    wing: 'Medicinal Herbal Garden Wing',
    classes: 'Practical Research Field',
    curriculum: 'Acquiring hands-on identification and cultivation techniques of over 100 species of medicinal plants used in ayurvedic and modern formulations.',
    subjects: ['Herbal Drug Technology', 'Plant Tissue Culture', 'Extraction & Isolation Techniques', 'Organic Farming of Herbs', 'Taxonomical Classification'],
    icon: 'Palette'
  },
  {
    id: 'pharmaceutics-lab',
    wing: 'Pharmaceutics & Formulation Division',
    classes: 'Practical Lab Research',
    curriculum: 'Training on formulation development, dosage design (tablets, capsules, liquid dosage forms), sterilization practices, and industrial machinery operations.',
    subjects: ['Industrial Pharmacy', 'Biopharmaceutics', 'Physical Pharmaceutics', 'Novel Drug Delivery Systems (NDDS)', 'Cosmetics Technology'],
    icon: 'FlaskConical'
  },
  {
    id: 'pharmacology-wing',
    wing: 'Pharmacology & Toxicology Lab',
    classes: 'Pre-clinical Research',
    curriculum: 'Studying action mechanisms of drugs, physiological effects, toxicity screenings, receptor bindings, and clinical trials parameters.',
    subjects: ['General Pharmacology', 'Systemic Pharmacology', 'Experimental Pharmacology', 'Clinical Pharmacy', 'Toxicological Screenings'],
    icon: 'Award'
  },
  {
    id: 'pharmaceutical-chemistry-lab',
    wing: 'Pharmaceutical Chemistry Division',
    classes: 'Synthesis & Quality Control',
    curriculum: 'Hands-on practice in synthesis of active pharmaceutical ingredients (APIs), quality control analysis, chromatography, and drug designing methodologies.',
    subjects: ['Inorganic Chemistry', 'Organic Chemistry', 'Medicinal Chemistry', 'Pharmaceutical Analysis', 'Spectral Analysis (UV/IR/NMR)'],
    icon: 'TrendingUp'
  }
];

export const teachersData = [
  {
    id: 1,
    name: 'Mr. Manoj Kumar',
    role: 'Principal & Professor',
    qualification: 'M.Pharm, 15+ Years Research & Academic Experience',
    email: 'manoj.kumar@archanapharmacycballia.com',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Mr. Devendra Singh',
    role: 'Vice Principal & HOD Pharmacology',
    qualification: 'M.Pharm (Pharmacology), 12+ Years Experience',
    email: 'devendra.singh@archanapharmacycballia.com',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Mrs. Sarita Sharma',
    role: 'Associate Professor of Pharmacognosy',
    qualification: 'M.Pharm (Pharmacognosy), 10 Years Experience',
    email: 'sarita.sharma@archanapharmacycballia.com',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Mr. Rajesh Chaudhary',
    role: 'Senior Lecturer in Pharmacy Practice',
    qualification: 'M.Pharm (Clinical Pharmacy), 8 Years Experience',
    email: 'rajesh.chaudhary@archanapharmacycballia.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Dr. Amit Pathak',
    role: 'Assistant Professor of Pharmaceutical Chemistry',
    qualification: 'Ph.D (Pharmaceutical Chemistry), NET Qualified',
    email: 'amit.pathak@archanapharmacycballia.com',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Ms. Pooja Gautam',
    role: 'Lecturer in Biochemistry & Physiology',
    qualification: 'M.Pharm, 5 Years Academic Experience',
    email: 'pooja.gautam@archanapharmacycballia.com',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop'
  }
];

export const resultsData = [
  {
    rollNumber: '202601',
    studentName: 'Amit Chaudhary',
    fatherName: 'Mr. Satish Chaudhary',
    motherName: 'Mrs. Laxmi Devi',
    class: 'B.Pharm - VII Semester',
    session: '2025-2026',
    examType: 'University Examination (Mock)',
    attendance: '92%',
    marks: [
      { subject: 'Instrumental Methods of Analysis', theory: 72, practical: 18, maxTheory: 80, maxPractical: 20, total: 90 },
      { subject: 'Industrial Pharmacy II', theory: 58, practical: 29, maxTheory: 70, maxPractical: 30, total: 87 },
      { subject: 'Pharmacy Practice', theory: 62, practical: 28, maxTheory: 70, maxPractical: 30, total: 90 },
      { subject: 'Novel Drug Delivery System', theory: 76, practical: 19, maxTheory: 80, maxPractical: 20, total: 95 },
      { subject: 'Seminar & Journal Club', theory: 65, practical: 29, maxTheory: 70, maxPractical: 30, total: 94 }
    ],
    overallPercentage: 91.2,
    division: 'First Division with Distinction',
    status: 'PASSED'
  },
  {
    rollNumber: '202602',
    studentName: 'Priya Sharma',
    fatherName: 'Mr. Ramesh Sharma',
    motherName: 'Mrs. Suman Sharma',
    class: 'D.Pharm - II Year',
    session: '2025-2026',
    examType: 'Board Examination (Mock)',
    attendance: '95%',
    marks: [
      { subject: 'Pharmacology', theory: 68, practical: 19, maxTheory: 80, maxPractical: 20, total: 87 },
      { subject: 'Community Pharmacy & Mgmt', theory: 75, practical: 20, maxTheory: 80, maxPractical: 20, total: 95 },
      { subject: 'Biochemistry & Pathology', theory: 70, practical: 19, maxTheory: 80, maxPractical: 20, total: 89 },
      { subject: 'Pharmacotherapeutics', theory: 64, practical: 18, maxTheory: 80, maxPractical: 20, total: 82 },
      { subject: 'Hospital & Clinical Pharmacy', theory: 62, practical: 28, maxTheory: 70, maxPractical: 30, total: 90 }
    ],
    overallPercentage: 88.6,
    division: 'First Division with Distinction',
    status: 'PASSED'
  },
  {
    rollNumber: '202603',
    studentName: 'Rahul Singh',
    fatherName: 'Mr. Devendra Singh',
    motherName: 'Mrs. Kanti Devi',
    class: 'B.Pharm - I Semester',
    session: '2025-2026',
    examType: 'University Assessment (Mock)',
    attendance: '88%',
    marks: [
      { subject: 'Human Anatomy & Physiology I', theory: 62, practical: 19, maxTheory: 80, maxPractical: 20, total: 81 },
      { subject: 'Pharmaceutical Analysis I', theory: 68, practical: 20, maxTheory: 80, maxPractical: 20, total: 88 },
      { subject: 'Pharmaceutics I', theory: 55, practical: 18, maxTheory: 80, maxPractical: 20, total: 73 },
      { subject: 'Pharm. Inorganic Chemistry', theory: 59, practical: 19, maxTheory: 80, maxPractical: 20, total: 78 },
      { subject: 'Communication Skills', theory: 65, practical: 18, maxTheory: 80, maxPractical: 20, total: 83 }
    ],
    overallPercentage: 80.6,
    division: 'First Division',
    status: 'PASSED'
  }
];

export const tcData = [
  {
    tcNumber: 'TC-202601',
    studentName: 'Saurabh Kumar',
    fatherName: 'Mr. Hariom Singh',
    motherName: 'Mrs. Shanti Devi',
    admissionNumber: 'ADM-1489',
    dateOfBirth: '15/08/2010',
    classLeft: 'B.Pharm - VII Semester',
    dateOfLeaving: '31/03/2026',
    reasonForLeaving: 'Higher Studies Elsewhere',
    conduct: 'Excellent',
    verifiedStatus: 'VERIFIED',
    issueDate: '15/04/2026'
  },
  {
    tcNumber: 'TC-202602',
    studentName: 'Anjali Agrawal',
    fatherName: 'Mr. Vishnu Agrawal',
    motherName: 'Mrs. Preeti Agrawal',
    admissionNumber: 'ADM-2011',
    dateOfBirth: '22/11/2008',
    classLeft: 'D.Pharm - II Year',
    dateOfLeaving: '31/03/2026',
    reasonForLeaving: 'Completed Pharmacy Board Exam',
    conduct: 'Good',
    verifiedStatus: 'VERIFIED',
    issueDate: '20/04/2026'
  }
];

export const blogData = [
  {
    id: 1,
    title: 'National Pharmacy Week 2026: A Grand Success',
    date: 'February 18, 2026',
    author: 'Principal Office',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Archana Pharmacy College organized National Pharmacy Week with extreme zeal. Students participated in health camps and formulation showcases.',
    content: 'Archana Pharmacy College celebrated National Pharmacy Week with enthusiasm. The program started with a keynote address by the Principal Mr. Manoj Kumar on the role of pharmacists in diagnostic sciences and healthcare. The Chief Guest, a state pharmacy council director, inaugurated the event. Over 10 events including formulation contests, scientific poster presentations, and pharmacological quiz boards were conducted. Prizes were distributed to students for innovative herbal drugs. The Principal congratulated the students and teachers for showcasing excellence in clinical and formulation studies.'
  },
  {
    id: 2,
    title: 'Advanced Research Laboratory: Fostering Young Researchers',
    date: 'November 12, 2025',
    author: 'Pharmaceutics Department',
    category: 'Academics',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f35116f?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Students showcased advanced pharmaceutics and drug analysis models representing novel delivery systems at the Pharmacy Innovation Expo.',
    content: 'Our college hosted the annual pharmacy and analysis exhibition, "PHARMA-INNOVATE 2025." Over 150 students from B.Pharm and D.Pharm courses presented working models on themes like Smart Drug Delivery, Targeted Liposomes, and Natural Herbal Formulations. Parents and local clinical coordinators visited the exhibition and praised the high-quality chemical synthesis shown by students. A panel of judges awarded prizes to top projects, selecting two groups to present at the national pharmacy convention.'
  },
  {
    id: 3,
    title: 'Understanding GPAT Examinations: Tips for Final Years',
    date: 'December 05, 2025',
    author: 'Career Advisory Cell',
    category: 'Guidance',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Actionable study maps curated by senior lecturing staff to help students excel in the Graduate Pharmacy Aptitude Test (GPAT).',
    content: 'GPAT examinations can be competitive, but with the right preparation techniques, B.Pharm students can score exceptionally well and secure fellowships. Our senior lecturing staff recommends setting a strict timeline focusing on Pharmacology, Organic Chemistry, and Pharmaceutics. We also advice practicing online mock tests, revising analytical spectra (NMR/IR), and attending special guidance workshops. The college is conducting special coaching and mock screenings for final year students during the spring break.'
  }
];

export const galleryData = [
  {
    id: 101,
    title: 'National Pharmacy Week & Keynote Assemblies',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 102,
    title: 'Meritorious Students Convocation & Certificates',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 103,
    title: 'Advanced Pharmaceutics Laboratory Research',
    category: 'labs',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f35116f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 104,
    title: 'Medicinal Herbal Garden Collection & Classification',
    category: 'campus',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 1,
    title: 'Pharmacognosy Extraction Lab',
    category: 'labs',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Annual College Sports & Athletic meet',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Computer-Aided Drug Design Center',
    category: 'labs',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Herbal Exhibition & Festivities',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Comprehensive Pharmacy & Medical Library',
    category: 'campus',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Interactive Digital Lecture Theatre',
    category: 'campus',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Inter-College Sports Championship Awards',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Pharmacist Day Pledge Celebrations',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop'
  }
];
