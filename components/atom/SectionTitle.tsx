interface SectionTitleProps {
  firstTitle: string;
  secondTitle?: string;
  spanTitle: string;
  useBr: boolean;
  textColor?: string;
  spanColor?: string;
  useLeftHr?: boolean;
  useRightHr?: boolean;
  useHr?: boolean;
  hrWidth?: string;
}

export default function SectionTitle({
  firstTitle,
  secondTitle,
  spanTitle,
  useBr,
  textColor,
  spanColor,
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
          />
        )}
        <h2 className={`${textColor} text-2xl md:text-4xl font-bold`}>
          <span className={`${spanColor} font-bold`}>{spanTitle} </span>{" "}
          {firstTitle}
          {useBr ? <br /> : ""}
          {secondTitle}
        </h2>
        {useRightHr && (
          <hr
            className={`${hrWidth} border-primary border-t-2 mb-4 md:border-t-4`}
          />
        )}
      </div>
      {useHr && (
        <hr className='w-1/2 border-quinary border-t-2 mb-4 md:border-t-4' />
      )}
    </>
  );
}
