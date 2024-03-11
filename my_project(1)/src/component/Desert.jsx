import React from 'react';
import salate from './img/salate.jpg';

const Salate = () => {
  return (
    <>
      <section className="page_one2">
        <div className="biscuit">
          <div className="reteta_zilei">
            <h2>CHEESECAKE CU VIȘINĂ</h2>
            <div className="img_reteta">
              <img src="https://salat.md/files/thumbnail/380a3820-1-62a85571dcec8-279x279.png" alt="Cheesecake cu vișină" />
              <div className="caracteristica1"> Dificultate: <br /> mediu </div>
              <div className="caracteristica1"> Timp de preparare: <br /> 2 ore </div>
              <div className="caracteristica1"> Cantitatea: <br /> 500 grame </div>
            </div>
          </div>
          <div className="reteta">
            <b>Ingrediente:</b> <br />
            Pentru baza: <br />
            - 140 g biscuiti <br />
            - 75 g unt <br />
            Pentru compozitia de branza: <br />
            - 250 g mascarpone Granarolo <br />
            - 400 g crema de branza <br />
            - 5 linguri zahar pudra <br />
            - vanilie <br />
            - un praf de sare <br />
            - 8 g gelatina (4 foi) <br />
            Pentru jeleul de visine: <br />
            - 400 g visine congelate <br />
            - 5-6 linguri de zahar <br />
            - 6 g gelatina (3 foi) <br />
            <b>Mod de preparare:</b> <br />
            {/* Pasii de preparare */}
            <b>Poftă bună!</b> <br />
          </div>
        </div>
      </section>

      <section className="page_one2">
        <div className="biscuit">
          <div className="reteta_zilei">
            <h2>BROWNIE „KINDER”</h2>
            <div className="img_reteta">
              <img src="https://salat.md/files/thumbnail/380a3741-1-62a859908ce29-279x279.png" alt="Brownie Kinder" />
              <div className="caracteristica1"> Dificultate: <br /> mediu </div>
              <div className="caracteristica1"> Timp de preparare: <br /> 2 ore </div>
              <div className="caracteristica1"> Cantitatea: <br /> 500 grame </div>
            </div>
          </div>
          <div className="reteta">
            <b>Ingrediente:</b> <br />
            Pentru aluat: <br />
            {/* Ingrediente pentru aluat */}
            Pentru crema Kinder: <br />
            {/* Ingrediente pentru crema Kinder */}
            <b>Mod de preparare:</b> <br />
            {/* Pasii de preparare pentru brownie */}
            <b>Poftă bună!</b> <br />
          </div>
        </div>
      </section>

    </>
  );
}

export default Salate;
