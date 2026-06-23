import Spam from './Spam';

const Spamalot = () => {
const spamArray = Array.from({ length: 500 });

  return (
    <div>
      {spamArray.map((_, i) => (
        <Spam key={i} />
      ))}
    </div>
  );
};
export default Spamalot;
