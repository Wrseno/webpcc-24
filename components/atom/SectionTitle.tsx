interface SectionTitleProps {
  firstTitle: string;
  secondTitle?: string;
  spanTitle: string;
  useBr: boolean;
  textColor?: string;
  spanColor?: string;
}

export default function SectionTitle({
  firstTitle,
  secondTitle,
  spanTitle,
  useBr,
  textColor,
  spanColor,
}: SectionTitleProps) {
  return (
    <>
      <h2 className={`${textColor} text-xl md:text-4xl font-bold`}>
        <span className={`${spanColor} font-bold`}>{spanTitle} </span>{" "}
        {firstTitle}
        {useBr ? <br /> : ""}
        {secondTitle}
      </h2>
      <hr className='w-1/2 border-quinary border-t-2 mb-4 md:border-t-4' />
    </>
  );
}
