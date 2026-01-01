
export type Teacher = {
  id: number;
  name: string;
  designation: string;
  imageId: string;
  department: string;
  bio: string;
};

export type Notice = {
  id: number;
  title: string;
  date: string;
  content: string;
};

export const teachers: Teacher[] = [
  {
    id: 1,
    name: "Mrs. Farida Yasmin",
    designation: "Headmistress & Senior Teacher",
    department: "English",
    imageId: "teacher-1",
    bio: "Mrs. Farida Yasmin is a dedicated educator with over 20 years of experience in nurturing young minds. She specializes in English language and literature, and as Headmistress, she is committed to creating a safe, inclusive, and stimulating learning environment for all students.",
  },
  {
    id: 2,
    name: "Mr. Abdul Karim",
    designation: "Senior Teacher",
    department: "Mathematics",
    imageId: "teacher-2",
    bio: "Mr. Abdul Karim makes mathematics enjoyable and easy to understand for his students. He uses innovative teaching methods to build a strong foundation in numeracy and problem-solving skills from an early age.",
  },
  {
    id: 3,
    name: "Ms. Ritu Porna",
    designation: "Senior Teacher",
    department: "Science",
    imageId: "teacher-3",
    bio: "Ms. Ritu Porna sparks curiosity in her students with her passion for science. Her hands-on experiments and engaging lessons make learning about the world a fun and exciting adventure for young learners.",
  },
  {
    id: 4,
    name: "Ms. Sadia Islam",
    designation: "Assistant Teacher",
    department: "General Knowledge",
    imageId: "teacher-4",
    bio: "Ms. Sadia Islam broadens the horizons of her students by teaching them about the world. Her classes are filled with interesting facts and discussions that encourage curiosity and a love for learning.",
  },
  {
    id: 5,
    name: "Mr. Hasan Mahmud",
    designation: "Senior Teacher",
    department: "Bangla",
    imageId: "teacher-5",
    bio: "Mr. Hasan Mahmud is an expert in Bangla language and grammar. He fosters a love for our mother tongue through engaging stories, poems, and interactive activities, ensuring students develop strong communication skills.",
  },
  {
    id: 6,
    name: "Mrs. Ayesha Siddika",
    designation: "Senior Teacher",
    department: "Religion",
    imageId: "teacher-6",
    bio: "Mrs. Ayesha Siddika brings history and religious studies to life. She helps students understand their religion, culture, heritage, and the world around them, fostering a sense of responsible religious personhood from a young age.",
  },
  {
    id: 7,
    name: "Mr. Kamal Hossain",
    designation: "Physical Education Teacher",
    department: "Sports",
    imageId: "teacher-7",
    bio: "Mr. Kamal Hossain is dedicated to promoting a healthy and active lifestyle. He organizes various sports and activities that help in the physical development and teamwork skills of the students.",
  },
  {
    id: 8,
    name: "Ms. Kazi Maria Rahman",
    designation: "Assistant Teacher",
    department: "English",
    imageId: "teacher-8",
    bio: "Ms. Kazi Maria Rahman is a dedicated educator committed to nurturing young minds. She specializes in English language and literature, and as an assistant teacher, she is committed to creating a safe, inclusive, and stimulating learning environment for all students.",
  },
  {
    id: 9,
    name: "Mr. Rafiq Ahmed",
    designation: "Senior Teacher",
    department: "Social Studies",
    imageId: "teacher-9",
    bio: "Mr. Rafiq Ahmed inspires students with stories of history and society. His interactive lessons on geography, civics, and current events help build informed and empathetic young citizens.",
  },
  {
    id: 10,
    name: "Ms. Nusrat Jahan",
    designation: "Assistant Teacher",
    department: "Art & Crafts",
    imageId: "teacher-10",
    bio: "Ms. Nusrat Jahan unleashes creativity in her students through vibrant art projects and crafts. She encourages self-expression and fine motor skills development in a joyful, mess-free environment.",
  },
  {
    id: 11,
    name: "Ms. Fatima Begum",
    designation: "Senior Teacher",
    department: "Music",
    imageId: "teacher-11",
    bio: "Ms. Fatima Begum ignites a passion for music in her young students. Through songs, rhythms, and simple instruments, she helps them discover the joy of melody and build confidence in performance.",
  },
  {
    id: 12,
    name: "Mr. Sharif Uddin",
    designation: "Assistant Teacher",
    department: "Computer Basics",
    imageId: "teacher-12",
    bio: "Mr. Sharif Uddin introduces the wonders of technology in a fun way. His basic coding games and digital storytelling lessons prepare students for a digital world while emphasizing safe online habits.",
  },
  {
    id: 13,
    name: "Md Arif Hossain",
    designation: "Assistant Teacher",
    department: "Environmental Studies",
    imageId: "teacher-13",
    bio: "Md Arif Hossain cultivates environmental awareness through nature walks and eco-projects. He teaches students to appreciate and protect our planet, fostering habits of sustainability from an early age.",
  },

];

export const notices: Notice[] = [
    {
        id: 1,
        title: "Parent-Teacher Meeting Schedule",
        date: "2024-07-15",
        content: "A parent-teacher meeting for all classes will be held on Saturday, July 27th, 2024, to discuss the half-yearly academic progress of our students. The meeting will take place from 10:00 AM to 1:00 PM. All parents are requested to attend to collect their child's report card and discuss their progress with the respective class teachers. Your presence and cooperation are highly anticipated. We will cover topics such as student's classroom performance, social skills development, and strategies for improvement. This is a valuable opportunity for you to connect with our teachers and gain insight into your child's educational journey."
    },
    {
        id: 2,
        title: "Annual School Picnic Registration",
        date: "2024-07-12",
        content: "We are excited to announce the annual school picnic for students of all classes, to be held at a nearby park. Registrations are now open. Interested parents can register their children with the school office by July 25th. The picnic is a great opportunity for students to socialize and have fun outside the classroom. The day will be filled with games, a healthy lunch, and lots of fun activities. The fee for the picnic is BDT 500 per student, which covers transportation, food, and entry fees. More details about the venue and date will be shared soon."
    },
    {
        id: 3,
        title: "School Closure for Summer Vacation",
        date: "2024-07-10",
        content: "The school will remain closed for summer vacation from August 1st to August 15th. The school office will remain open on weekdays from 10:00 AM to 2:00 PM for any administrative work. We wish all our students a happy and restful vacation. We encourage students to engage in reading and other creative activities during the break. The school will reopen on August 16th with the regular schedule. Enjoy your holidays!"
    },
    {
        id: 4,
        title: "Art Competition for All Classes",
        date: "2024-07-08",
        content: "An inter-class art competition will be held on July 25th in the school auditorium. The theme for the competition is 'My Beautiful Bangladesh'. All students from Playgroup to Class V are encouraged to participate. Please bring your own art supplies (drawing paper will be provided). The best artworks will be displayed on the school notice board and will receive prizes during the morning assembly. Let your child's creativity shine!"
    }
];

export const marqueeNotices: string[] = [
    "Admission for the new academic year is now open.",
    "The half-yearly examination results will be published on July 27th.",
    "Enrollment for extracurricular activities is ongoing.",
    "The Annual Cultural Program 'Shorot Utshob' will be held in September.",
];

export const galleryImageIds: string[] = [
    "gallery-1",
    "gallery-2",
    "gallery-3",
    "gallery-4",
    "gallery-5",
    "gallery-6",
    "gallery-7",
    "gallery-8",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admission", label: "Admission" },
  { href: "/teachers", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
];

    