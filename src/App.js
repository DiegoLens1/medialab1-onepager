import "./App.css";
import placeholder from "./img/placeholder.webp";
import chartJS1 from "./img/chart-js1.png";
import chartJS2 from "./img/chart-js2.png";
import machineLearning1 from "./img/machine-learning1.png";
import machineLearning2 from "./img/machine-learning2.png";
import steadySteps1 from "./img/SteadySteps1.png";
import steadySteps2 from "./img/SteadySteps2.png";
import steadySteps3 from "./img/SteadySteps3.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="headerText">
          <h1>Valpreventie Team 4</h1>
        </div>
      </header>
      <div className="introWrapper">
        <h2>Wie zijn wij?</h2>
        <p>Mark, Robin, Quinten, Aiden en Diego</p>
        <p>
          Wij zijn een team van studenten aan de hoge school Rotterdam. Ons doel
          is om fysiotherapeuten te helpen met het visualiseren van de data die
          uit een valpreventie test komt.
        </p>
        <p></p>
      </div>
      <div className="prototypeWrapper">
        <div className="first-prototype prototype">
          <div className="imageWrapper">
            <img src={chartJS1} />
            <img src={chartJS2} />
          </div>
          <div className="descriptionWrapper">
            <h2>prototype een</h2>
            <h3>Chart.js</h3>
            <p>
              In dit prototype word de data die uit een valpreventie test komt
              gebruikt om grafieken te maken waarin makkelijk en duidelijk alle
              waarden terug te vinden zijn.
            </p>
            <p>
              In deze grafieken kan je makkelijk zien wanneer een waarde buiten
              de norm valt en dit ook aan de patient laten zien en dit
              bespreken.
            </p>
            <p>
              De grafieken worden per patiënt opgeslagen zodat deze later kunnen
              worden gebruikt om te vergeleken en vooruitgang of achteruitgang
              te zien.
            </p>
          </div>
        </div>
        <div className="second-prototype prototype">
          <div className="imageWrapper">
            <img src={machineLearning1} />
            <img src={machineLearning2} />
          </div>
          <div className="descriptionWrapper">
            <h2>prototype twee</h2>
            <h3>Machine learning</h3>
            <p>
              In dit prototype maken wij gebruik van machine learning om te
              meten hoe groot de kans is op een val door het met andere data te
              vergelijken.
            </p>
            <p>
              In het resultatenscherm word er ook aangegeven op welke data de AI
              deze kans berekening heeft beoordeeld. Op basis hiervan kan de
              fysiotherapeut zelf kiezen of hij vind dat de AI gelijk heeft of
              zelf een andere conclusie trekken.
            </p>
            <p>
              De AI word getraind met veel gevallen waarin mensen geen kans
              hebben om te vallen en gevallen waar er wel kans is om te vallen.
              De AI kan daarna met deze training alles vergelijken en bepalen of
              er een hoge of lage kans is om te vallen
            </p>
          </div>
        </div>
        <div className="third-prototype prototype">
          <div className="imageWrapper">
            <img src={steadySteps1} />
            <img src={steadySteps2} />
            <img src={steadySteps3} />
          </div>
          <div className="descriptionWrapper">
            <h2>prototype drie</h2>
            <h3>SteadySteps</h3>
            <p>
              In dit prototype werken we met een 3D model om te visualiseren
              waar het probleem zit. Hiermee proberen wij het ook meer geschikt
              te maken om direct aan de patiënt te laten zien zodat deze ook een
              beeld heeft van wat er goed en fout gaat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
