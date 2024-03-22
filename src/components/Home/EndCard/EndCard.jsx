import SectionHeading from "../SectionHeading";
import ButtonPrimary from "../../others/ButtonPrimary";

const EndCard = () => {
  return (
    <div className="h-40 flex flex-col gap-y-12 items-center">
      <SectionHeading>Start automating your form backend</SectionHeading>
      <div className="flex items-center justify-center">
        <ButtonPrimary variant="bright" size="lg" to="/auth/signup">
          Create endpoint for free
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default EndCard;
