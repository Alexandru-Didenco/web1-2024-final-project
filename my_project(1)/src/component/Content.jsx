import React from 'react';
import './App.css';
import pateu from './img/pate.png';
import { Link } from 'react-router-dom';

function Content() {
  return (
	<>
    <section className="page_one">
      <div className="biscuit">
        <h2>Pate de curcan</h2>
        <div className="img_reteta">
          <img src={pateu} alt="Pate de curcan"/>
          <div className="caracteristica"> Dificultate: <br/> ușor </div>
          <div className="caracteristica"> Timp de preparare: <br/> 60 min </div>
          <div className="caracteristica"> Cantitatea: <br/> o porție </div>
        </div>
      </div>

      <div className="logare">
        Vrei să primești rețete noi pe email? <br/>
        <input type="text" name="" placeholder="Numele tău"/> <br/>
        <input type="text" name="" placeholder="Email-ul tău"/> <br/>
        <button>Abonează-te</button>
      </div>

	  <div className="reteta">
  <b>Ingrediente:</b> <br/>

  - 500 g ficat de curcan <br/>
  - 500 g carne de curcan <br/>
  - 200 g ceapă albă <br/>
  - 30 g usturoi <br/>
  - 150 g unt <br/>
  - 300 g smântână dulce cu minim 32% grăsime <br/>
  - 50 ml cognac <br/>
  - Sare și piper după gust <br/>
  - 1 crenguță de cimbru proaspăt <br/>

  <b>Mod de preparare</b> <br/>

  <b>Pasul 1</b> Curățăm ceapa și usturoiul, le tăiem peștișori. <br/>
  <b>Pasul 2</b> Încingem o cratiță în care punem untul și ceapa cu usturoiul la călit, adăugăm sare și lăsăm să calească bine. <br/>
  <b>Pasul 3</b> Adăugăm carnea de curcan și lăsăm la foc mic să se înmoaie și carnea. <br/>
  <b>Pasul 4</b> Punem și ficatul, smântâna și cognacul, sare și piper după gust, acoperim cu un capac. Lăsăm să fiarbă la foc mic și mai amestecăm din când în când să nu se prindă. <br/>
  <b>Pasul 5</b> Dacă este nevoie putem adăuga câte puțină apă. <br/>
  <b>Pasul 6</b> Simplu, rapid și de casă, fără conservanți sau ingrediente necunoscute. <br/>
  
  <b>Poftă bună!</b><br/>
</div>

    </section>

	
	<section className="page_one">
  <div className="biscuit">
    <h2>Platou asorti de cașcavaluri</h2>
    <div className="img_reteta">
      <img src="https://salat.md/files/thumbnail/380a4261-1-279x279.png" alt="Platou asorti de cașcavaluri" />
      <div className="caracteristica">Dificultate: <br/>ușor</div>
      <div className="caracteristica">Timp de preparare: <br/>15 min</div>
      <div className="caracteristica">Cantitatea: <br/>4 porții</div>
    </div>
  </div>

  <div className="reteta">
    <b>Ingrediente:</b> <br/>
    - struguri roz <br/>
    - cașcaval MLEK CHEDDAR <br/>
    - brânză „Gouda afumată” <br/>
    - brânză „Dor Blue cu mucegai albastru” <br/>
    - brânză „Brie” <br/>
    - brânză semitare matură grasă „Maasdam” <br/>
    - miere naturală <br/>
    - biscuiți sărați cu semințe de susan <br/>
    - nuci <br/>

    <b>Mod de preparare</b> <br/>
    <b>Pasul 1</b> Se scot sâmburii din curmale, se umple cu dorblu și se învelește cu prosciutto. <br/>
    <b>Pasul 2</b> Se ung foile de plăcintă cu unt topit și se suprapun una peste alta. Se taie în pătrățele de 6 cm, se coc la 180°C pentru 10-15 minute. Se scot pătrațelele din cuptor, se aranjează deasupra brânza brie, gem de căpșuni și busuioc. <br/>
    <b>Pasul 3</b> Se aranjează pe un tocător aperitivele împreună cu cașcaval și se decorează cu migdale, afine, mandarine, mere, pâine coaptă, caise uscate, rachițele, kaki, rodie și miere. <br/>
    <b>Savurați cu plăcere!</b><br/>
  </div>
</section>

	</>
  );
}
export default Content;


