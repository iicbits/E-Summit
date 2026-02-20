"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";

const facultyMembers = [
  {
    name: "Prof. D.K. Singh",
    role: "Chief Patron",
    image: "/team/dk.singh.png",
  },
  {
    name: "Prof. Pankaj Rai",
    role: "Patron",
    image: "/team/pankajrai.webp",
  },
  {
    name: "Prof. Prakash Kumar",
    role: "Chairman cum Convener",
    image: "/team/prakash.jpg",
  },
  {
    name: "Dr. S C Dutta",
    role: "Secretary",
    image: "/team/sc.webp",
  },
  { name: "Dr. Rahul Kumar", role: "Co-Convener", image: "/team/rahul.webp" },
  { name: "Prof. R.K. Verma", role: "Co-Convener", image: "/team/rahul.webp" },
  {
    name: "Dr. Mukesh Chandra",
    role: "Faculty Coordinator",
    image: "/team/mukesh.webp",
  },
  {
    name: "Mr. Khustar Ansari",
    role: "Faculty Coordinator",
    image: "/team/khustar.webp",
  },
  {
    name: "Mr. Sanjay Pal",
    role: "Faculty Coordinator",
    image: "/team/fac.webp",
  },
  {
    name: "Mr. Vijay Kr. Besra",
    role: "Faculty Coordinator",
    image: "/team/vijay.webp",
  },
  {
    name: "Mr. Izhar Hussain",
    role: "Faculty Coordinator",
    image: "/team/mam.webp",
  },
  {
    name: "Dr. Priyanka Kumari",
    role: "Faculty Coordinator",
    image: "/team/mam.webp",
  },
  {
    name: "Dr. Kashif Hasan Kazmi",
    role: "Faculty Coordinator",
    image: "/team/kashif.webp",
  },
  {
    name: "Mr. Sanjay Oraon",
    role: "Faculty Coordinator",
    image: "/team/sanjay.webp",
  },
  {
    name: "Dr. Abhijeet Anand",
    role: "Faculty Coordinator",
    image: "/team/abhijit.webp",
  },
  {
    name: "Dr. Arvind Kumar",
    role: "Faculty Coordinator",
    image: "/team/abhijit.webp",
  },
  {
    name: "Mr. Roshan Shankar",
    role: "Faculty Coordinator",
    image: "/team/roshan.webp",
  },
  {
    name: "Ms. Meenu Manjari",
    role: "Faculty Coordinator",
    image: "/team/abhijit.webp",
  },
];

const executiveMembers = [
  {
    name: "Syed Adnan Ahmad",
    role: " President",
    image: "/team/syedd.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/syedadnan03/",
      instagram: "https://www.instagram.com/s.addy_3/",
      mail: "mailto:chief.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Vivek Tiwari",
    role: "Vice President",
    image: "/team/vivek_sir.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/vivek-tiwari-b929a822b/",
      instagram: "https://www.instagram.com/_vivek_tiwarii/",
      mail: "mailto:vicechief.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Amit Kumar Mishra",
    role: "General Secretary",
    image: "/team/amit.png",
    socials: {
      linkedin: "https://iic.bitsindri.ac.in/Team",
      instagram: "https://iic.bitsindri.ac.in/Team",
      mail: "mailto:#",
    },
  },
  {
    name: "Manohar Jha",
    role: "Treasurer",
    image: "/team/manoharr.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/manoharjhaa/",
      instagram:
        "https://www.instagram.com/_manohar.jha_5?igsh=b2ZkYjExcjV2cmFq",
      mail: "mailto:manoharjha809@gmail.com",
    },
  },
  {
    name: "Harsh Bhargav",
    role: "Technical Secretary",
    image: "/team/Harsh.png",
    socials: {
      linkedin: "https://iic.bitsindri.ac.in/Team",
      instagram: "https://iic.bitsindri.ac.in/Team",
      mail: "mailto:#",
    },
  },
  {
    name: "Tisha Agrawal",
    role: "Joint Secretary",
    image: "/team/tisha.png",
    socials: {
      linkedin: "https://iic.bitsindri.ac.in/Team",
      instagram: "https://iic.bitsindri.ac.in/Team",
      mail: "mailto:#",
    },
  },
  {
    name: "Kashish Jain",
    role: "Operations Executive",
    image: "/team/kashish_mam.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/kashish-jain-a92b05256/",
      instagram: "https://www.instagram.com/kashish_7029",
      mail: "mailto:#",
    },
  },
];

const associateMembers = [
  {
    name: "Adarsh Kumar",
    role: "Technicals",
    image: "/team/adarsh.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/adarsh-kumar-03a459200",
      instagram:
        "https://www.instagram.com/_aadi005?utm_source=qr&igsh=dmIzNDZqY3c2M2h6",
      mail: "mailto:adarsh.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Utsav Jha",
    role: "Operations",
    image: "/team/utsav.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/utsav-jha-021009211",
      instagram:
        "https://www.instagram.com/utsavjha744?igsh=MWl0eWJhMXVudXhobg==",
      mail: "mailto:ukjha2004@gmail.com",
    },
  },
  {
    name: "Rahul Kumar",
    role: "Community Engagement",
    image: "/team/rahul.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/rahul-kumar-98b607290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/im_rahul3651?igsh=MTVpd3BhZm5mYnl5MA==",
      mail: "mailto:rahul.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Dhruv Gupta",
    role: "Design",
    image: "/team/dhruv.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/dhruv-gupta-a70346292",
      instagram: "https://www.instagram.com/_0xdhruv?igsh=MXA4bWszMWIxYTdmbQ==",
      mail: "mailto:dhruv.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Kunal Kumar Sonkar",
    role: "Startup & Incubation",
    image: "/team/kunal.png",
    socials: {
      linkedin: "https://www.linkedin.com/kunal-sonkar-bits",
      instagram: "https://www.instagram.com/oye_kunaaal?igsh=MzV2eDR2emUzamt4",
      mail: "mailto:Kunal.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Shivangi Kumari",
    role: "Innovation Program",
    image: "/team/shivangi.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shivangi-kumari-67b927287/",
      instagram:
        "https://www.instagram.com/shiv_shiviiii_45?igsh=MXcxd2UxdWxvdmo4aA%3D%3D&utm_source=qr",
      mail: "mailto:shivangi.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Shreya Pandey",
    role: "Marketing",
    image: "/team/shreya.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/shreya-p-55b909219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/shrey_apandey19?igsh=MW1xOTRkbzlpdGRmbQ==",
      mail: "mailto:pandeyshre19@gmail.com",
    },
  },
  {
    name: "Ayush Bhagat",
    role: "Finance",
    image: "/team/ayush.png",
    socials: {
      linkedin: "www.linkedin.com/in/ ayush-k-bhagat",
      instagram: "https://www.instagram.com/ayush_26373?igsh=NTNmZmZzbTI0anE2",
      mail: "mailto:ayush.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Aastha Agarwal",
    role: "Research & Development",
    image: "/team/aastha.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/aastha-agarwal-043883294",
      instagram: "https://www.instagram.com/aastha28._",
      mail: "mailto:aastha.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Aman Kumar Arya",
    role: "Editorial",
    image: "/team/aman_arya.png",
    socials: {
      linkedin: "www.linkedin.com/in/aman-arya-b8458b2b4",
      instagram: "https://www.instagram.com/amanarya7968/",
      mail: "mailto:aman.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Shashi Kumar",
    role: "Media",
    image: "/team/shashii.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/shashi-kumar-60b0b3325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/shashisuprabhat106?igsh=dTVhZnU4M2Riajli",
      mail: "mailto:shashi.iic@bitsindri.ac.in",
    },
  },
];

const coordinators = [
  {
    name: "Krrish Raj",
    role: "Community Engagement",
    image: "/team/krrish.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/krrish-raj-333926335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/krrish6887?igsh=MWgwc2k0NWVmd2Vt",
      mail: "mailto:krrish01sahu@gmail.com",
    },
  },
  {
    name: "Samir Kumar",
    role: "Finance",
    image: "/team/samir.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/samir-kumar-650520305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/i_samir17?igsh=MTB5Z3R2cjl1MmwxMQ==",
      mail: "mailto:emailonebrown@gmail.com",
    },
  },
  {
    name: "Ravi kant",
    role: "Design",
    image: "/team/ravikant.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/ravi-kant-b1612b356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/ravi15_12?igsh=cnFrcDRyaDVhNnNp",
      mail: "mailto:ravi.eceug24@bitsindri.ac.in",
    },
  },
  {
    name: "Praveen Kumar Chaurasiya",
    role: "Editorial",
    image: "/team/pravin.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/praveen-kumar-chaurasiya-a4abb7333/",
      instagram: "https://www.instagram.com/5022.praveen/?hl=en",
      mail: "mailto:praveen.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Bibek Kumar",
    role: "Technicals",
    image: "/team/bibek.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/bibek-kumbhakar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/bibekkumbhakr000?igsh=MTN2NGhrdHJyZWp2YQ==",
      mail: "mailto:bibekkumbhakr000@gmail.com",
    },
  },
  {
    name: "Abhas Kumar",
    role: "Startup & Incubation",
    image: "/team/abhas.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/abhas-kumar-bardhan-74b13132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/abhas25_?igsh=ZnRxc3lpbThzYWho",
      mail: "mailto:abhaskumarbardhan@gmail.com",
    },
  },
  {
    name: "Prajjwal Jha",
    role: "Media",
    image: "/team/prajjwal.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/prajjwal-jha-98476133b",
      instagram: "https://www.instagram.com/prajjwalx9",
      mail: "mailto:Prajjwalx9@gmail.com",
    },
  },
  {
    name: "Rakesh Kumar Pandey",
    role: "Marketing",
    image: "/team/rakesh.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/rakesh-pandey-493b7435b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram:
        "https://www.instagram.com/iiamrakeshh?igsh=bTRwb2h3aWdsbzIy&utm_source=qr",
      mail: "mailto:rakeshpandey5510@gmail.com",
    },
  },
  {
    name: "Shashank Gupta",
    role: "Operations",
    image: "/team/shashank.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/shashank-gupta-230489338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/i_have_no_idea000_?igsh=aHNrZGs3ZzB2bmZv&utm_source=ig_contact_invite",
      mail: "mailto:shashank.sg.6002@gmail.com",
    },
  },
  {
    name: "Rimsha",
    role: "Finance",
    image: "/team/rimsha.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/rimsha-taslim-5a8724336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/rimshaaax._?igsh=YWtjMGppMXF2dTlt",
      mail: "mailto:rimsha.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Tanishq Raj",
    role: "Editorial",
    image: "/team/tanishq.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/tanishq-raj58",
      instagram: "https://www.instagram.com/tanishkraj58",
      mail: "mailto:tanishq.iic@bitsindri.ac.in",
    },
  },
  {
    name: "Anish Kumar",
    role: "Operations",
    image: "/team/anish.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/anish-kumar-29a9a2336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/anish_official_71?igsh=Nng0OHd2MmM2eDNt",
      mail: "mailto:anish2406012@gmail.com",
    },
  },
  {
    name: "Prakhar Pratyush Jha",
    role: "Media",
    image: "/team/prakhar.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/prakhar-pratyush-jha911?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/prakharjha911?igsh=cGtrZmk5bDI3bHJq",
      mail: "mailto:prakharjhapratyush@gmail.com",
    },
  },
  {
    name: "Aradhana Sharma",
    role: "Technicals",
    image: "/team/aradhna.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/aradhana-sharma-b486a7358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/aarchi34645?igsh=MWp3dDRmeHRiNDgzNA==",
      mail: "mailto:sharmaarchi70046@gmail.com",
    },
  },
  {
    name: "Varsha Rani",
    role: "Community Engagement",
    image: "/team/varsha.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/varsha-rani-a33078294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/varsharani_2005?igsh=ZDc2ZTkxOTV3aGVu",
      mail: "mailto:varshu1929@gmail.com",
    },
  },
  {
    name: "Vatsal Krishna",
    role: "Design",
    image: "/team/vatsal.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/vatsal-krishna-890093359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/vatsalkrishn_?igsh=MTB3c3d1OWFocm44Yg==",
      mail: "mailto:Vatsal.kr85fri@gmail.com",
    },
  },
  {
    name: "Diptanshu Jaiswal",
    role: "Marketing",
    image: "/team/diptanshu.png",
    socials: {
      linkedin: "http://linkedin.com/in/diptanshu-jaiswal-b765b421b",
      instagram:
        "https://www.instagram.com/diptanshu.jaiswal?igsh=bW52MnVzY2Zja2V0",
      mail: "mailto:diptanshujaiswal2000@gmail.com",
    },
  },
  {
    name: "Pratiush Chourasia",
    role: "Research & Development",
    image: "/team/pratuish.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/pratiush-chourasia-95a510229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/pratiush2023?igsh=am91M3cyN2V2YXE5",
      mail: "mailto:chourasiapratiush@gmail.com",
    },
  },
  {
    name: "Dipak Kumar Ram",
    role: "Media",
    image: "/team/dipak.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/deepak-chandrawanshi-a22631337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/invites/contact/?igsh=1t1althpx6hx1&utm_content=m3hraui",
      mail: "mailto:deepakkrram70@gmail.com",
    },
  },
  {
    name: "Shital Sandhya",
    role: "Marketing",
    image: "/team/shital.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/shital-sandhya-b83085320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/SHITAL_45341",
      mail: "mailto:sandhyashital4801@gmail.com",
    },
  },
  {
    name: "Megha",
    role: "Startup & Incubation",
    image: "/team/megha.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/megha-s-708717338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/_megh.a_._?igsh=MW92MGEyc2Vqajd6bA==",
      mail: "mailto:megh.workk@gmail.com",
    },
  },
  {
    name: "Kajal",
    role: "Innovation Program",
    image: "/team/kajal.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/kajal-kumari-687a78322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/kajalkumari__2803?igsh=d2d2MWU5OXNmNzV3",
      mail: "mailto:k6404019@gmail.com",
    },
  },
  {
    name: "Ankit Kumar",
    role: "Innovation Program",
    image: "/team/ankit.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/akprofilelink",
      instagram: "https://www.instagram.com/_ankit.kr___",
      mail: "mailto:ankit.in22@gmail.com",
    },
  },
  {
    name: "Vineet Verma",
    role: "Startup & Incubation",
    image: "/team/vineet.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/vineet-verma-b81a0a361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/__vineet.verma?igsh=MWo1eHFyZzE4cXlrdg==",
      mail: "mailto:vineetverma163@gmail.com",
    },
  },
  {
    name: "Shivam Kumar Singh",
    role: "Research & Development",
    image: "/team/shivam.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/shivam-singh-343222366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/shivam.singh.03?igsh=NHk2YXJrZ2R4MGFp",
      mail: "mailto:shivamsingh20052005@gmail.com",
    },
  },
  {
    name: "Parth Kumar",
    role: "Marketing",
    image: "/team/parth.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/parth-kumar-b023a836a",
      instagram: "https://www.instagram.com/itsparth_557",
      mail: "pa825408@gmail.com",
    },
  },
  {
    name: "Abhijeet Kumar Chauhan",
    role: "Design",
    image: "/team/abhijeet.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/abhijeet-chouhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/realabhijeett?igsh=MTVuNWp6eHVmNDVnNg==",
      mail: "mailto:abhijeetkumarchouhan5@gmail.com",
    },
  },
  {
    name: "Sudhir Verma",
    role: "Community Engagement",
    image: "/team/sudhir.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/sudhir-kumar-verma-681793354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/sudhir4_?igsh=MTN4aThrMmgyZHJyOQ==",
      mail: "mailto:sudhirkrverma8@gmail.com",
    },
  },
  {
    name: "Piyush Dwivedi",
    role: "Technicals",
    image: "/team/piyush.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/piyush-dwivedi-679319272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/piyush.dwivedi_27?igsh=MTc5dDI3OHZmMTVz",
      mail: "mailto:piyushdwivedi8709@gmail.com",
    },
  },
  {
    name: "Maitri",
    role: "Operations",
    image: "/team/maitri.png",
    socials: {
      linkedin: "#",
      instagram: "#",
      mail: "mailto:singhmaitri233@gmail.com",
    },
  },
];

/* ================= VERTICAL CARD ================= */

const TeamCard = ({ member, card }) => (
  <div className="relative h-115 w-full rounded-xl overflow-hidden shadow-2xl group">
    {/* Background Image */}
    <Image
      src={member.image}
      alt={member.name}
      fill
      className="object-cover z-5"
    />

    {/* Bottom Gradient */}
    <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10" />

    {/* Right Vertical Purple Strip */}
    <div className="absolute top-0 right-0 h-full w-16 bg-[#160021] flex items-start justify-center pt-16 z-0">
      <span className="rotate-90 text-white/40 font-semibold tracking-widest text-xl">
        {member.role.toUpperCase()}
      </span>
    </div>

    {/* Text Content */}
    <div className="absolute bottom-6 left-6 text-white/80 z-30">
      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
      {card === "faculty" && (
        <p className="text-sm opacity-80 uppercase tracking-wide">
          {member.role}
        </p>
      )}

      {member.socials && (
        <div className="flex gap-4 mt-4 text-gray-400">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={18}
                className="cursor-pointer hover:text-purple-300"
              />
            </a>
          )}

          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={18}
                className="cursor-pointer hover:text-purple-300"
              />
            </a>
          )}

          {member.socials.mail && (
            <a href={member.socials.mail}>
              <Mail
                size={18}
                className="cursor-pointer hover:text-purple-300"
              />
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

/* ================= PAGE ================= */

export default function Page() {
  const [activeTab, setActiveTab] = useState("Executive");

  const renderMembers = () => {
    switch (activeTab) {
      case "Executive":
        return executiveMembers;
      case "Associate":
        return associateMembers;
      case "Coordinator":
        return coordinators;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0014] text-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 bg-cover opacity-50">
          <Image
            src="/images/team-hero.webp"
            alt="Team Background"
            priority
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0c0014] via-transparent to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <div className="relative z-10 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">
              MEET THE
              <span className="block text-transparent bg-clip-text bg-linear-to-t from-accent-600 via-accent-400 to-accent-400">
                VISIONARIES
              </span>
            </h1>
          </div>

          <p className="text-gray-300 font-kiona text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto">
            The passionate minds behind E-Summit 2026, driving innovation,
            strategy, and execution.
          </p>
        </div>
      </section>

      <section className="px-8">
        {/* Faculty Section */}
<h2 className="text-2xl md:text-3xl uppercase font-bold text-center mb-2 md:mb-4">
  Faculty Members
</h2>
<p className="h-0.5 w-2xs md:w-sm bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto mb-16"></p>

<div className="max-w-7xl mx-auto mb-20">

  {/* FIRST ROW → 2 CARDS (centered inside 4-column grid) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

    {/* Empty Column (for centering on lg) */}
    <div className="hidden lg:block"></div>

    {facultyMembers.slice(0, 2).map((member) => (
      <TeamCard
        key={member.name}
        member={member}
        card={"faculty"}
      />
    ))}

    {/* Empty Column (for centering on lg) */}
    <div className="hidden lg:block"></div>

  </div>

  {/* REMAINING → 4 PER ROW ALWAYS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
    {facultyMembers.slice(2).map((member) => (
      <TeamCard
        key={member.name}
        member={member}
        card={"faculty"}
      />
    ))}
  </div>

</div>



        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {["Executive", "Associate", "Coordinator"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-purple-900 text-white"
                  : "bg-[#160021] text-gray-400 hover:text-white"
              }`}
            >
              {tab} Members
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {renderMembers().map((member, index) => (
            <TeamCard key={index} member={member} card={"student"} />
          ))}
        </div>
      </section>
    </div>
  );
}
