import Image from "next/image";

type Props = {
  img: string;
  positionClass: string;
  rotateClass: string;
  gradientClass?: string;
  imageScale?: string;
};

export default function ArtistCard({
  img,
  positionClass,
  rotateClass,
  gradientClass = "bg-white/90",
  imageScale = "scale-100",
}: Props) {
  
  return (
    <div className={`absolute ${positionClass} ${rotateClass}`}>
      <div
        className={`h-48 w-50 rounded-2xl overflow-hidden shadow-xl ${gradientClass}`}>
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
