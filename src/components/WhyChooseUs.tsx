'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/music.avif"
                width={300}
                height={300}
                className="h-full w-full object-fit"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/images (1).jpeg"
                width={300}
                height={300}
                className="h-full w-full object-fit"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/images (2).jpeg"
                width={300}
                height={300}
                className="h-full w-full object-fit"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/images.jpeg"
                width={300}
                height={300}
                className="h-full w-full object-fit"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/img.jpg"
                width={300}
                height={300}
                className="h-full w-full object-fit"
                alt="linear board demo"
              />
            </div>
          ),
    },
   
    
  ];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
