function Greetings({ lang, children }) {
  let language = 'Hello';
  switch (lang) {
    case 'de':
      language = 'Hallo';
      break;
    case 'en':
      language = 'Hello';
      break;
    case 'es':
      language = 'Hola';
      break;
    case 'fr':
      language = 'Bonjour';
      break;
    default:
      language = '-';
      break;
  }
  return (
    <div className="border border-dark">
      <h3>
        {language} {children}
      </h3>
    </div>
  );
}

export default Greetings;
