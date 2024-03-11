import React from 'react';
import cvas from './img/cvas.jpg';

const Salate = () => {
  return (
    <>
      <section className="page_one3">
  <div className="biscuit">
    <div className="reteta_zilei"> 
      <h2>Cvas de casă</h2>
      <div className="img_reteta">
        <img src={cvas} alt="Cvas de casă" />
        <div className="caracteristica1"> Dificultate: foarte ușor </div>
        <div className="caracteristica1"> Timp de preparare: 15 min </div>
        <div className="caracteristica1"> Cantitatea: 500 grame </div>
      </div>
    </div>

    <div className="reteta">
      <b>Pasul 1</b> Tăiați 3 felii de pâine neagră cuburi și uscați-le sau prăjiți-le într-o tigaie uscată. Crutoanele trebuie să fie prăjite bine, dar nu arse. <br />
      <b>Pasul 2</b> Puneți crutoanele într-un borcan de 3 l și adăugați zahărul și o bucățică mică de drojdie proaspătă. Masa din borcan trebuie să aibă înălțimea de 1.5-2 cm. <br />
      <b>Pasul 3</b> Turnați deasupra apă caldă. După o zi cvasul va fi gata. Strecurați-l prin tifon și îl puteți bea. <br />
      <b>Pasul 4</b> Ca să obțineți un cvas fenomenal, trebuie să așteptați câteva zile. Preparați acest cvas în zilele toride de vară. <br />
      <b>Notă:</b> Amestecul rămas poate fi utilizat de mai multe ori. Nu trebuie să adăugați nimic a doua oară, dar la a ...
    </div>
  </div>
</section>


    </>
  );
}

export default Salate;
