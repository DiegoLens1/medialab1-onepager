import "./App.css";
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
          Wij zijn een team van studenten aan de Hogeschool Rotterdam. Ons doel
          is om fysiotherapeuten te helpen met het visualiseren van de data die
          uit een valpreventie test komt.
        </p>
        <p></p>
      </div>
      <div className="prototypeWrapper">
        <div className="first-prototype prototype">
          <div className="imageWrapper">
            <img src={chartJS1} alt="Chart.js prototype one" />
            <img src={chartJS2} alt="Chart.js prototype two" />
          </div>
          <div className="descriptionWrapper">
            <h2>Prototype 1</h2>
            <h3>Datavisualisatie aan de hand van grafieken</h3>
            <p>
              In dit prototype word de data die uit een valpreventie test komt,
              dus van de sensor, gebruikt om grafieken te maken waarin makkelijk en 
              duidelijk alle waarden terug te vinden zijn.
            </p>
            <p>
              In deze grafieken kan je makkelijk zien wanneer een waarde buiten
              de norm valt. Dit kan de fysiotherapeut ook laten zien en bespreken
              met zijn/haar patiënt.
            </p>
            <p>
              De grafieken worden per patiënt opgeslagen zodat deze later kunnen
              worden gebruikt om te vergelijken en vooruitgang of achteruitgang
              te zien. Er zijn zowel wekelijkse grafieken als maandelijkse grafieken
              die de fysiotherapeuten kunnen gebruiken.
            </p>
          </div>
        </div>
        <div className="second-prototype prototype">
          <div className="imageWrapper">
            <img
              src={machineLearning1}
              alt="Machinelearning prototype one"
            />
            <img
              src={machineLearning2}
              alt="Machinelearning prototype two"
            />
          </div>
          <div className="descriptionWrapper">
            <h2>Prototype 2</h2>
            <h3>AI (Machine learning)</h3>
            <p>
              In dit prototype maken wij gebruik van machine learning om te
              meten hoe groot de kans is op een val door het met andere data te
              vergelijken.
            </p>
            <p>
              De AI word getraind met veel gevallen waarin mensen geen kans
              hebben om te vallen en gevallen waar er wel kans is om te vallen.
              Dit wordt gedaan door de AI te trainen met data vanuit de sensoren, dus
              de CSV-bestanden. Fysiotherapeuten kunnen hierdoor gemakkelijk hun CSV-bestand
              uploaden en de AI hun werk laten doen. De AI vergelijkt de data uit het
              CSV-bestand met alle andere data die ooit door de AI heen is gegaan, waardoor
              de AI een weloverwogen keuze kan maken hoe groot de kans is voor deze patiënt
              om te vallen.
            </p>
            <p>
              Wanneer de AI klaar is met de data uitlezen, komt de fysiotherapeut op het tweede
              scherm terecht, waarop hij/zij kan zien hoe groot het risico is voor de patiënt
              om te vallen. Dit wordt gedaan aan de hand van een percentage. Ook komt er op dit
              scherm de redenen waarom de AI denkt dat iemand een hoog risico heeft om te vallen.
              Op basis van deze redenen kan de fysiotherapeut oefeningen opgeven voor de patiënt
              of toch een andere keuze maken, als hij/zij er niet mee eens is.
            </p>
            <p>
              Al deze data wordt ook opgeslagen onder de naam van de patiënt. Hierdoor kan de
              fysiotherapeut alijd terug gaan naar deze data. Ook kan de fysiotherapeut een latere
              meting van de patiënt ook invoegen, waardoor er meerdere versies ontstaan, waardoor
              de fysiotherapeut de data kan vergelijken met vorige data om te kijken of er 
              verbetering in zit.
            </p>
          </div>
        </div>
        <div className="third-prototype prototype">
          <div className="imageWrapper">
            <img src={steadySteps1} alt="Steadysteps prototype one" />
            <img src={steadySteps2} alt="Steadysteps prototype two" />
            <img src={steadySteps3} alt="Steadysteps prototype Three" />
          </div>
          <div className="descriptionWrapper">
            <h2>Prototype 3</h2>
            <h3>SteadySteps (Datavisualisatie aan de hand van 3D-modellen)</h3>
            <p>
              In dit prototype werken we met een 3D-modellen om te visualiseren
              hoe een patiënt loopt, waardoor te achterhalen is waar het probleem zit. 
              Ook kan de fysiotherapeut hiermee goed laten zien aan de patiënt wat
              het precieze probleem is.
            </p>
            <p>
              De fysiotherapeut heeft login-gegevens waarmee hij/zij kan inloggen
              in de beveiligde omgeving. Wanneer de fysiotherapeut ingelogd is, krijgt
              de fysiotherapeut eerst het overzicht te zien met al zijn/haar patiënten in
              het systeem. De fysiotherapeut kan per patiënt een klein overzicht krijgen,
              wanneer er op een patiënt gedrukt wordt. De fysiotherapeut krijgt dan eerst
              een klein gedeelte van de beschikbare data te zien. Als hij/zij meer wilt zien,
              kan de fysiotherapeut op de knop 'bekijk meer' klikken. Ook kan de fysiotherapeut
              een nieuwe patiënt toevoegen en zoeken naar specifieke patiënten.
            </p>
            <p>
              Op het uitgebreide overzicht van een patiënt, kan de fysiotherapeut meer data lezen.
              Door middel van een 3D-geanimeerd model, wordt er een samenvatting afgespeeld van het
              loop- en beweegpatroon van de patiënt. Daarin worden aan de hand van de rode gebieden
              op het figuur, opvallende bewegingen of afwijkingen extra benadrukt. Dit 3D-model kan
              door de fysiotherapeut worden gedraaid, zodat de bewegingen vanuit verschillende hoeken
              bekeken kan worden. Naast het model worden nog meer gegevens getoond die te maken hebben
              met het valrisico van de patiënt. Deze data wordt uiteindelijk samengebracht tot het 
              valrisico-percentage, dus hoe groot de kans is om te vallen. Op dit scherm kunnen ook
              nieuwe CSV-bestanden van de patiënt worden toegevoegd van een nieuwe meting. Ook kunnen
              er vorige metingen bij worden gepakt, zodat er vergelijkingen gemaakt kunnen worden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
