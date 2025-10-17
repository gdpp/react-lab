interface PreviousSearchesProps {
  title: string;
  data: string[];
  onLabelClicked: (term: string) => void;
}

const PreviousSearches = ({
  title,
  data,
  onLabelClicked,
}: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        {data.map((term) => (
          <li key={term} onClick={() => onLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousSearches;
