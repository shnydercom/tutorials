import { AgileManifestoDisplay } from './components/agile-manifesto/Display';
import { AGILE_MANIFESTO_EN } from './data/agileManifestoEN';
import { AGILE_MANIFESTO_ZH } from './data/agileManifestoZH';
import { AGILE_MANIFESTO_ES } from './data/agileManifestoES';
import { AGILE_MANIFESTO_FR } from './data/agileManifestoFR';
import { AGILE_MANIFESTO_DE } from './data/agileManifestoDE';
import { CRAAppHeader } from './components/CRAAppHeader';

function App() {
  return (
    <div className="App">
      <CRAAppHeader/>
      <AgileManifestoDisplay content={AGILE_MANIFESTO_EN} />
      <AgileManifestoDisplay content={AGILE_MANIFESTO_ZH} isDense={true} className="top-to-bottom-chars"/>
      <AgileManifestoDisplay content={AGILE_MANIFESTO_ES} />
      <AgileManifestoDisplay content={AGILE_MANIFESTO_FR} />
      <AgileManifestoDisplay content={AGILE_MANIFESTO_DE} isDense={true}/>
    </div>
  );
}

export default App;
