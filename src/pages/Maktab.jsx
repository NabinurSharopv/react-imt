import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Maktab() {
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
    <div className="conteaner">
      <br />
      <br />
      <br />
      <div className="aka-pej1">
        <h1 className="akadem1">Nabi universitetni etti maktab</h1>
        <p className="akadem2">
          Stenford uzining tengdosh institutlari orasida yagona bulib, ettita
          <br />
          maktab bitta qushni kampusda joylashgan bulib, ularning barchasi
          ajoyib <br /> kenglik va chuqurlikka ega. Bu tabiiy ravishda kup
          tarmoqli hamkorlikni osonlashtiradi.
        </p>
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
      <div className="aka-pej4">
        <div className="rasmodam">
          <div className="baka">
            <h1 className="baka1">Oliy biznes maktabi</h1>
            <br />
            <p className="une2">
              Stenford Oliy Biznes Maktabi hayotni ozgartirish, tashkilotlarni
              ozgartirish va dunyoni ozgartirish uchun shaxsiy rivojlanish bilan
              birgalikda qatiy boshqaruv talimini taqdim etib, printsipial
              global liderlarning keyingi avlodini rivojlantirmoqda.
            </p>
            <br />
            <br />
            <Link className="link" to="https://www.gsb.stanford.edu/programs">
              Akademik dasturlar
            </Link>
          </div>
        </div>

        <div className="combined-container-wrapper">
          {data.slice(41, 42).map((item, index) => (
            <div className="combined-container" key={item.id}>
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className={`image-${index + 27}`}
              />
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

      <div className="aka-pej44">
        <div className="combined-container-wrapper">
          {data.slice(42, 43).map((item, index) => (
            <div className="combined-container" key={item.id}>
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className={`image-${index + 27}`}
              />
            </div>
          ))}
        </div>

        <div className="rasmodam">
          <div className="baka">
            <h1 className="baka1">Gumanitar fanlar maktabi</h1>
            <br />
            <p className="une2">
              Stenford gumanitar va fanlar maktabi bakalavriat darajalarining 75
              foizini va doktoranturaning qariyb 40 foizini taqdim etuvchi
              Stenford taʼlimining asosini taʼminlaydi va universitetning eng
              yirik maktabidir.
            </p>
            <br />
            <br />
            <Link className="link" to="https://humsci.stanford.edu/">
              Gumanitar fanlar va  fanlar bosh sahifasi
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br /><br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="bosh-pej8"></div>


      
    </div>
  );
}
