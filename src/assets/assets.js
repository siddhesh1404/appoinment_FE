import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        available:true,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:12
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        available:true,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:15
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        available:true,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:10
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
         available:true,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:20
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
         available:true,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:25
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        available:true,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:18
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
         available:true,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:22
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
         available:true,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:14
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
         available:true,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:16
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
         available:true,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:19
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
         available:true,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        fee:30
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
         available:true,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
         available:true,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
         available:true,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
         available:true,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
    _id: 'doc16',
    name: 'Dr. Richard James',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. He strives to provide compassionate care for his patients.',
    fees: 50,
    available: true,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc17',
    name: 'Dr. Emily Larson',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'Gynecologist',
    degree: 'MBBS, MD',
    experience: '6 Years',
    about: 'Dr. Emily Larson specializes in women’s health and gynecology, offering patient-centered care with expertise in preventive health and reproductive wellness.',
    fees: 70,
    available: true,
    address: {
      line1: '5th Avenue, Green Park',
      line2: 'Downtown, London'
    }
  },
  {
    _id: 'doc18',
    name: 'Dr. Sarah Patel',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '5 Years',
    about: 'Dr. Sarah Patel is dedicated to diagnosing and treating skin conditions with a holistic approach to skincare and dermatological health.',
    fees: 60,
    available: true,
    address: {
      line1: '10 Baker Street',
      line2: 'Westminster, London'
    }
  },
  {
    _id: 'doc19',
    name: 'Dr. Christopher Lee',
    image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'Pediatrician',
    degree: 'MBBS, DCH',
    experience: '8 Years',
    about: 'Dr. Christopher Lee is passionate about children’s healthcare and committed to providing personalized care for young patients and their families.',
    fees: 55,
    available: true,
    address: {
      line1: '12 King’s Road',
      line2: 'Chelsea, London'
    }
  },
  {
    _id: 'doc20',
    name: 'Dr. Jennifer Garcia',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '7 Years',
    about: 'Dr. Jennifer Garcia focuses on diagnosing and treating neurological conditions with compassion and evidence-based medical care.',
    fees: 90,
    available: true,
    address: {
      line1: '8 Queen Street',
      line2: 'Marylebone, London'
    }
  },
  {
    _id: 'doc21',
    name: 'Dr. Michael Brown',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'Cardiologist',
    degree: 'MBBS, DM (Cardiology)',
    experience: '10 Years',
    about: 'Dr. Michael Brown is committed to cardiovascular health, offering advanced treatments and preventive strategies for heart diseases.',
    fees: 100,
    available: true,
    address: {
      line1: '45 Oxford Street',
      line2: 'Soho, London'
    }
  },
  {
    _id: 'doc22',
    name: 'Dr. David Wilson',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'Orthopedic',
    degree: 'MBBS, MS (Orthopedics)',
    experience: '9 Years',
    about: 'Dr. David Wilson provides expert care in treating musculoskeletal issues, with a patient-first approach and focus on mobility restoration.',
    fees: 85,
    available: true,
    address: {
      line1: '20 Bridge Road',
      line2: 'Camden, London'
    }
  },
  {
    _id: 'doc23',
    name: 'Dr. Lisa Anderson',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'Psychiatrist',
    degree: 'MBBS, MD (Psychiatry)',
    experience: '6 Years',
    about: 'Dr. Lisa Anderson specializes in mental health care, with expertise in managing anxiety, depression, and other psychiatric conditions.',
    fees: 75,
    available: true,
    address: {
      line1: '18 Rose Lane',
      line2: 'Hampstead, London'
    }
  },
  {
    _id: 'doc24',
    name: 'Dr. Robert Taylor',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM (Gastro)',
    experience: '12 Years',
    about: 'Dr. Robert Taylor has extensive expertise in diagnosing and treating digestive disorders, offering advanced gastroenterology care.',
    fees: 95,
    available: false,
    address: {
      line1: '25 Market Street',
      line2: 'Kensington, London'
    }
  },
  {
    _id: 'doc25',
    name: 'Dr. Maria Rodriguez',
    image: 'https://images.pexels.com/photos/4167449/pexels-photo-4167449.jpeg?auto=compress&cs=tinysrgb&w=400',
    speciality: 'Endocrinologist',
    degree: 'MBBS, DM (Endocrinology)',
    experience: '8 Years',
    about: 'Dr. Maria Rodriguez provides specialized care in hormonal and metabolic disorders, focusing on long-term patient wellness.',
    fees: 80,
    available: true,
    address: {
      line1: '30 Regent Street',
      line2: 'Piccadilly, London'
    }
  }
]