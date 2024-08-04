import {ReactNode} from "react";

interface SectionTitleProps {
  children: ReactNode;
  hrWidth?: string;
  useLeftHr?: boolean;
  useRightHr?: boolean;
  useHr?: boolean;
}

export default function SectionTitle({
  children,
  useLeftHr,
  useRightHr,
  useHr,
  hrWidth,
}: SectionTitleProps) {
  return (
    <>
      <div className={`${useRightHr || useLeftHr ? "flex items-center" : ""}`}>
        {useLeftHr && (
          <hr
            className={`${hrWidth} border-primary border-t-2 mb-4 md:border-t-4`}
            data-aos='zoom-in'
          />
        )}
        {children}
        {useRightHr && (
          <hr
            className={`${hrWidth} border-primary border-t-2 mb-4 md:border-t-4`}
            data-aos='zoom-in'
          />
        )}
      </div>
      {useHr && (
        <hr className='w-1/2 border-quinary border-t-2 mb-4 md:border-t-4' />
      )}
    </>
  );
}
