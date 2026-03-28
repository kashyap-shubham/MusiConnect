import Image from "next/image";
import { motion} from "motion/react";

type Props = {
  img: string;
  positionClass?: string;
  rotateClass?: string;
  gradientClass?: string;
  imageScale?: string;
  containerClass?: string;
};

export default function ArtistCard({
  img,
  positionClass,
  rotateClass,
  gradientClass = "bg-white/90",
  imageScale,
  containerClass = "h-48 w-50"
}: Props) {
  
  return (
    <motion.div 
      whileHover={{ scale: 1.2 }} 
      transition={{ duration: 0.25 }} 
      className={`${positionClass} ${rotateClass}`}>

        <div className={`${containerClass} rounded-2xl overflow-hidden shadow-xl ${gradientClass}`}>
          <Image
            src={img}
            alt="artist"
            width={800}
            height={800}
            className={`object-cover rounded-xl w-full h-full ${imageScale}`}
          />
        </div>
    </motion.div>
  );
}



