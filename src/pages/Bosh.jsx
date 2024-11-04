import { useEffect, useState, } from "react";
import Marquee from "react-fast-marquee";
Marquee
import { Link } from 'react-router-dom';



function Bosh() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);


  return (
    <>
      <div className="conteaner">
        <div className="bosh-pej1">
          <h1 className="nom">NABINUR</h1>
        </div>

        <br />
        <br />
        <br />
        <br />

<h1 className="mis">Ijtimoiy missiya</h1>
<br />
        <div className="bosh-pej2">
          <h1 className="h1">
            Nabi deyarli 150 yil oldin ijtimoiy maqsadlar uchun asos
            solingan. Bizning vazifamiz talabalarni etakchilik hayotiga va
            halollik bilan hissa qoshishga orgatish orqali dunyoga hissa
            qoshishdir.
          </h1>
        </div>

        <Link to="/IjtimoiyMissiya"> 
        <button className="btn3">kuproq</button>

        </Link>
<br />
<br />
<br />
<br />
<br />
<br />


        <br />
        <br />
        <br />
        <br />

        <div className="bosh-pej3">
          <h1 className="kom">Kampus yangiliklari</h1>
          <p className="frema">
            Ferma boylab odamlar, tadqiqotlar va innovatsiyalar haqida hikoyalar
          </p>
          <br />
          <br />
          <br />

          <div className="yon1-yon2-ura">
            <div className="yon1">
              {data.slice(0, 3).map((item, index) => (
                <div className="combined-container" key={item.id}>
                  <img
                    src={item.image}
                    alt={`Image ${item.id}`}
                    className={`image-${index + 1}`} // Class dinamik ravishda qo'shiladi
                  />
                  <p className="salom">Salomatlik va tibbiyot</p>
                  <h3>
                    Innovatsion texnikalar sportchilarning son jarohatlarini
                    yoritadi
                  </h3>
                </div>
              ))}
            </div>

            <div className="yon2">
              {data.slice(3, 6).map((item, index) => (
                <div className="combined-container" key={item.id}>
                  <img
                    src={item.image}
                    alt={`Image ${item.id}`}
                    className={`image-${index + 4}`} // Class dinamik ravishda qo'shiladi
                  />

                  <p className="tex1"> Texnologiya va taraqqiyot</p>
                  <h3 className="tex">
                    Texnologik rivojlanish orqali yangi imkoniyatlar ochiladi
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <Link to="/KampusIchi"> 
        <button className="btn3">kuproq</button>

        </Link>
          
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="bosh-pej4">
          <h1 className="aka">Akademiklar</h1>
          <p className="p1">
            Talabalarni murakkab dunyoda faol fuqarolar va etakchilar sifatida
            jamiyatga <br /> mazmunli hissa qushishga tayyorlash
          </p>

          <div className="combined-container-wrapper">
            {data.slice(6, 9).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 7}`}
                />

                <h4 className="tex">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
<br />

        <div className="bosh-pej5">
          <div className="marquee">
            <span className="marquee-text">
              <div className="combined-container-wrapper">
                {data.slice(9, 14).map((item, index) => (
                  <div className="combined-container" key={item.id}>
                    
                    <img
                      src={item.image}
                      alt={`Image ${item.id}`}
                      className={`image-${index + 11}`}
                    />
                  </div>
                ))}
              </div>
            </span>
          </div>

          <div className="marquee-right">
            <span className="marquee-text">
              <div className="combined-container-wrapper">
                {data.slice(9, 14).map((item, index) => (
                  <div className="combined-container" key={item.id}>
                    <img
                      src={item.image}
                      alt={`Image ${item.id}`}
                      className={`image-${index + 11}`}
                    />
                  </div>
                ))}
              </div>
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />










<br />
<br />
        <div className="bosh-pej7">
              <h1>Qabul</h1>
              <p>Tadqiq qilish, hamkorlik qilish va ozingizni sinab korish uchun ajoyib erkinlikni taklif qiling</p>
 
              <div className="combined-container-wrapper">
            {data.slice(14, 15).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 16}`}
                />
<br />
<br />
<br />
                <h2 className="kolex">{item.title}</h2>
                <br />

                <Link to="/Qabul"> 
        <button className="btn2">kuproq</button>

        </Link>
                

              </div>
            ))}
          </div>               
 
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

<div className="bosh-pej8">
 
</div>

      </div>
    </>
  );
}

export default Bosh;
