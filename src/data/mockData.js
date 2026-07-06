// src/data/mockData.js

export const coursesData = [
  {
    id: 'primary',
    wing: 'Primary Wing',
    classes: 'Nursery to Class V',
    curriculum: 'State board curriculum with strong focus on basic numeracy, literacy, and interactive play-based learning.',
    subjects: ['English', 'Mathematics', 'Hindi', 'Environmental Studies (EVS)', 'General Knowledge', 'Art & Craft', 'Physical Education'],
    icon: 'BookOpen'
  },
  {
    id: 'middle-secondary',
    wing: 'Secondary Wing',
    classes: 'Class VI to Class X',
    curriculum: 'Comprehensive subject study focusing on scientific inquiry, algebraic thinking, social structures, and language proficiency.',
    subjects: ['English Literature & Grammar', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science (History, Civics, Geography)', 'Hindi', 'Sanskrit / Computer Science', 'Art education', 'Physical Education'],
    icon: 'Award'
  },
  {
    id: 'senior-secondary-science',
    wing: 'Senior Secondary - Science Stream',
    classes: 'Class XI & Class XII',
    curriculum: 'Advanced academic curriculum structured for students preparing for medical, engineering, and pure science careers.',
    subjects: ['Physics', 'Chemistry', 'Mathematics / Biology', 'English Core', 'Computer Science / Physical Education'],
    icon: 'FlaskConical'
  },
  {
    id: 'senior-secondary-commerce',
    wing: 'Senior Secondary - Commerce Stream',
    classes: 'Class XI & Class XII',
    curriculum: 'Business-oriented stream focusing on financial markets, economic policies, accounting standards, and business studies.',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'English Core', 'Mathematics / Informatics Practices / Physical Education'],
    icon: 'TrendingUp'
  },
  {
    id: 'senior-secondary-arts',
    wing: 'Senior Secondary - Arts/Humanities Stream',
    classes: 'Class XI & Class XII',
    curriculum: 'Liberal arts stream focusing on social sciences, political frameworks, history, and language arts.',
    subjects: ['History', 'Political Science', 'Geography / Sociology', 'English Core', 'Hindi / Physical Education'],
    icon: 'Palette'
  },
  {
    id: 'sports-athletics',
    wing: 'Sports & Athletics Wing',
    classes: 'Nursery to Class XII',
    curriculum: 'State level physical fitness guidance, standard coaching for track & field athletics, drill parades, yogic conditioning, and inter-house cups.',
    subjects: ['Athletics (Running, Jumps)', 'Cricket Academy', 'Basketball & Volleyball', 'Yoga & Meditation', 'Self Defense Classes', 'Indoor Sports (Chess, Carrom)'],
    icon: 'Trophy'
  }
];

export const teachersData = [
  {
    id: 1,
    name: 'Mr. Devendra Singh',
    role: 'Principal',
    qualification: 'M.Sc (Physics), M.Ed, 15+ Years Experience',
    email: 'devendra.singh@brijsthali.com',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Mrs. Sarita Sharma',
    role: 'Vice Principal & HOD English',
    qualification: 'M.A (English), B.Ed, 12+ Years Experience',
    email: 'sarita.sharma@brijsthali.com',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Mr. Rajesh Chaudhary',
    role: 'Senior Math Faculty',
    qualification: 'M.Sc (Mathematics), B.Ed, 10 Years Experience',
    email: 'rajesh.maths@brijsthali.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Dr. Amit Pathak',
    role: 'Chemistry Lecturer',
    qualification: 'Ph.D (Chemistry), Net Qualified, 8 Years Experience',
    email: 'amit.chemistry@brijsthali.com',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Ms. Pooja Gautam',
    role: 'PGT Biology',
    qualification: 'M.Sc (Zoology), B.Ed, 6 Years Experience',
    email: 'pooja.biology@brijsthali.com',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Mr. Hariom Singh',
    role: 'Computer Science Instructor',
    qualification: 'MCA, B.Tech, 5 Years Experience',
    email: 'hariom.cs@brijsthali.com',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop'
  }
];

export const resultsData = [
  {
    rollNumber: '202601',
    studentName: 'Amit Chaudhary',
    fatherName: 'Mr. Satish Chaudhary',
    motherName: 'Mrs. Laxmi Devi',
    class: 'XII - Science',
    session: '2025-2026',
    examType: 'Board Examination (Mock)',
    attendance: '92%',
    marks: [
      { subject: 'English Core', theory: 72, practical: 18, maxTheory: 80, maxPractical: 20, total: 90 },
      { subject: 'Physics', theory: 58, practical: 29, maxTheory: 70, maxPractical: 30, total: 87 },
      { subject: 'Chemistry', theory: 62, practical: 28, maxTheory: 70, maxPractical: 30, total: 90 },
      { subject: 'Mathematics', theory: 76, practical: 19, maxTheory: 80, maxPractical: 20, total: 95 },
      { subject: 'Physical Education', theory: 65, practical: 29, maxTheory: 70, maxPractical: 30, total: 94 }
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
    class: 'XII - Commerce',
    session: '2025-2026',
    examType: 'Board Examination (Mock)',
    attendance: '95%',
    marks: [
      { subject: 'English Core', theory: 68, practical: 19, maxTheory: 80, maxPractical: 20, total: 87 },
      { subject: 'Accountancy', theory: 75, practical: 20, maxTheory: 80, maxPractical: 20, total: 95 },
      { subject: 'Business Studies', theory: 70, practical: 19, maxTheory: 80, maxPractical: 20, total: 89 },
      { subject: 'Economics', theory: 64, practical: 18, maxTheory: 80, maxPractical: 20, total: 82 },
      { subject: 'Physical Education', theory: 62, practical: 28, maxTheory: 70, maxPractical: 30, total: 90 }
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
    class: 'X',
    session: '2025-2026',
    examType: 'Annual Board Assessment (Mock)',
    attendance: '88%',
    marks: [
      { subject: 'English Lang & Lit', theory: 62, practical: 19, maxTheory: 80, maxPractical: 20, total: 81 },
      { subject: 'Hindi Course A', theory: 68, practical: 20, maxTheory: 80, maxPractical: 20, total: 88 },
      { subject: 'Mathematics (Standard)', theory: 55, practical: 18, maxTheory: 80, maxPractical: 20, total: 73 },
      { subject: 'Science', theory: 59, practical: 19, maxTheory: 80, maxPractical: 20, total: 78 },
      { subject: 'Social Science', theory: 65, practical: 18, maxTheory: 80, maxPractical: 20, total: 83 }
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
    classLeft: 'Class X',
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
    classLeft: 'Class XII - Commerce',
    dateOfLeaving: '31/03/2026',
    reasonForLeaving: 'Completed Senior Secondary Board Exam',
    conduct: 'Good',
    verifiedStatus: 'VERIFIED',
    issueDate: '20/04/2026'
  }
];

export const blogData = [
  {
    id: 1,
    title: 'Annual Sports Day 2026: A Grand Success',
    date: 'February 18, 2026',
    author: 'Principal Office',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Brij Sthali Academy organized its Annual Sports Day with extreme zeal and sportsmanship. Students from all houses participated in various events.',
    content: 'Brij Sthali Academy Senior Secondary School celebrated its Annual Sports Meet with enthusiasm. The program started with a march past by the students of all four houses: Shivaji, Pratap, Ashoka, and Raman. The Chief Guest, a state-level sports coordinator, unfurled the flag and declared the meet open. Over 40 events including relays, high jump, shot put, and archery were conducted. Raman House bagged the Overall Championship Trophy. The Principal congratulated the students and teachers for making the event a grand success, highlighting the importance of fitness and sportsmanship in student life.'
  },
  {
    id: 2,
    title: 'Science Exhibition 2025: Fostering Young Innovators',
    date: 'November 12, 2025',
    author: 'Science Department',
    category: 'Academics',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Students showcased working science models representing sustainability, robotics, and environment conservation at our regional Science Expo.',
    content: 'Our school hosted the annual science and arts exhibition, "NEO-SCIENCE 2025." Over 150 students from classes VI to XII presented working models on themes like Smart Green Cities, Solid Waste Management, Hydrogen Fuel cells, and Automated Agricultural Robots. Parents and local academic coordinators visited the exhibition and praised the high-quality engineering shown by students. A panel of judges awarded prizes to top projects, selecting two groups to represent the school at the state-level CBSE science fair.'
  },
  {
    id: 3,
    title: 'Understanding CBSE Boards: Tips for Students',
    date: 'December 05, 2025',
    author: 'Counseling Cell',
    category: 'Guidance',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Actionable tips and study plans curated by our senior lecturers to help students excel in board examinations without anxiety.',
    content: 'Board examinations can be a stressful time, but with the right preparation techniques, students can score exceptionally well. Our senior lecturing staff recommends setting a strict timeline, dividing syllabus blocks into manageable units, and practicing previous years question papers. We also advice maintaining a healthy sleep pattern, having a balanced diet, and allocating 15 minutes of physical recreation daily. The school is conducting special remedial classes and personal doubts sessions for all board students during winter break.'
  }
];

export const galleryData = [
  {
    id: 101,
    title: 'Academic Excellence & Certificate Distribution',
    category: 'cultural',
    image: '/gallery/event1.jpg'
  },
  {
    id: 102,
    title: 'Meritorious Students Felicitation Ceremony',
    category: 'cultural',
    image: '/gallery/event2.jpg'
  },
  {
    id: 103,
    title: 'School Management and Faculty Assembly',
    category: 'campus',
    image: '/gallery/event3.jpg'
  },
  {
    id: 104,
    title: 'Morning General Assembly & Pledge',
    category: 'campus',
    image: '/gallery/event4.jpg'
  },
  {
    id: 1,
    title: 'Modern Science Laboratory',
    category: 'labs',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Annual Sports Parade',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'State-of-the-Art Computer Center',
    category: 'labs',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Cultural Dance Festival',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Spacious School Library',
    category: 'campus',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Smart Classroom View',
    category: 'campus',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Basketball Championship Trophy',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Independence Day Celebrations',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop'
  }
];
