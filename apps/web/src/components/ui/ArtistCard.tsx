import Image from "next/image";

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
    <div className={`${positionClass} ${rotateClass}`}>
      <div
        className={`${containerClass} rounded-2xl overflow-hidden shadow-xl ${gradientClass}`}>
        <Image
          src={img}
          alt="artist"
          width={800}
          height={800}
          className={`object-cover w-full h-full ${imageScale}`}
        />
      </div>
    </div>
  );
}



