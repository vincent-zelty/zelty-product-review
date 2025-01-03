import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const FeatureImage = ({
  children,
  src,
}: {
  children?: string;
  src: string | StaticImport;
}) => {
  return <Image src={src} alt={children as string} width={500} height={500} className="mt-4" />;
};
