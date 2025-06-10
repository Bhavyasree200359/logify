function SummaryCard({ provider, model, language }) {

  return (
    <div style={{ marginTop: "20px", padding: "10px"}}>
      <p><strong>Provider:</strong> {provider.name} ({provider.value})</p>
      <p><strong>Model:</strong> {model.name} ({model.value})</p>
      <p><strong>Language:</strong> {language.name} ({language.value})</p>
    </div>


  );
}

export default SummaryCard;
