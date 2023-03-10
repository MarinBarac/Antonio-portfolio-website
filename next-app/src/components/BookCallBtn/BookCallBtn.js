import Button from "../Button/Button";

const BookCallBtn = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  return (
    <Button
      href={`https://calendly.com/antoniovidakovic/30min?month=${year}-${
        +month < 10 ? "0" + month : month
      }`}
      target="_blank"
      styleClass="purple"
    >
      Book 30min call
    </Button>
  );
};

export default BookCallBtn;
