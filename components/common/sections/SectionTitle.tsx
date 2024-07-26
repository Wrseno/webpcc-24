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
        {/* <h2
          className={`${textColor} text-2xl md:text-4xl font-bold mb-3`}
          data-aos={`${
            useRightHr ? "fade-right" : useLeftHr ? "fade-left" : ""
          }`}
        >
          <span className={`${spanColor} font-bold`}>
            {spanTitle?.toUpperCase()}{" "}
          </span>{" "}
          {firstTitle?.toUpperCase()}
          {useBr && <br />}
          {secondTitle?.toUpperCase()}
        </h2> */}
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
