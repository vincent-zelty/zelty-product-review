import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const FeatureImage = ({
  children,
  src,
  priority,
}: {
  children?: string;
  src: string | StaticImport;
  priority?: boolean;
}) => {
  return (
    <Image
      src={src}
      alt={children as string}
      sizes="80vw"
      style={{
        width: "80%",
        height: "auto",
      }}
      priority={priority}
      className="mt-4"
    />
  );
};
