import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const [translate] = useTranslation();

  return (
    <h1 className="text-3xl font-bold underline text-red-600">
      {translate("global.lblHelloWorld")}
    </h1>
  );
}

export default App;
