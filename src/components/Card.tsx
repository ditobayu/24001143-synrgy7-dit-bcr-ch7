interface CardProps {
  title: string;
  paragraph: string;
  content: string;
  onSubmit: () => void;
}
const CardComponent = ({ title, paragraph, content, onSubmit }: CardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className="font-bold underline">{paragraph}</p>
      <p>{content}</p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default CardComponent;
