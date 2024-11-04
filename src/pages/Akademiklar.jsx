import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';






function Akademiklar() {
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
      <div className="aka-pej1">
        <h1 className="akadem1">Akademiklar</h1>
        <p className="akadem2">
          Universitet talabalari fikrlash va harakat qilish orqali bilim
          yaratadi <br /> va qollaydi, tez ozgaruvchan dunyoda etakchilikka
          tayyorgarlik koradi.
        </p>
      </div>

      <div className="aka-pej2">
        <div className="combined-container-wrapper">
          {data.slice(15, 16).map((item, index) => (
            <div className="combined-container" key={item.id}>
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className={`image-${index + 17}`}
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
      <div className="aka-pej3">
        <div className="chiziq"></div>
        <br />
        <div className="ichi-1">
          <div className="ch-ichi">
            <h1 className="raqam">2323</h1>
            <p className="raqam-i">Fakultet azolari</p>
          </div>
          <div className="ch-ichi">
            <h1 className="raqam">6:1</h1>
            <p className="raqam-i">Talaba-o‘qituvchilar nisbati</p>
          </div>
          <div className="ch-ichi">
            <h1 className="raqam">200 ga yaqin</h1>
            <p className="raqam-i">Magistratura talim yonalishlari</p>
          </div>
        </div>
        <br />

        <div className="chiziq"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1 className="b">Bakalavriat tadqiqotlari</h1>
      <br />
      <br />
      <br />
      <div className="aka-pej4">
        <div className="rasmodam">
          <div className="baka">
            <h1 className="baka1">Bakalavr talimi</h1>
            <p className="une">
              Undergrad - bu sizning bakalavriat akademiklari va bakalavriat
              talimi boyicha vitse-provost tomonidan boshqariladigan
              imkoniyatlar uchun qollanma.
            </p>
          </div>
          <div className="baka">
            <h1 className="baka1">Mayorlar</h1>
            <p className="une">
              Universitet bakalavriat talimining 66 asosiy yonalishlarini
              urganing.
            </p>
          </div>

          <div className="baka">
            <h1 className="baka1">Bakalavriat faktlari va raqamlari</h1>
            <p className="une">
              universitet 7800 ga yaqin bakalavr talabalari tahsil oladi.
              Bakalavr dasturi va talabalar jamoasi haqida koproq bilib oling.
            </p>
          </div>
        </div>

        <div className="combined-container-wrapper">
          {data.slice(17, 18).map((item, index) => (
            <div className="combined-container" key={item.id}>
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className={`image-${index + 19}`}
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
      <div className="aka-pej5">
        <h1 className="bitt">
          Bitta kampusdagi yettita maktab talabalarga uz ehtiroslarini taqib
          qilish va murakkab global muammolarni hal qilishda hamkorlik qilish
          uchun cheksiz imkoniyatlarni taqdim etadi.
        </h1>

        <Link to="/Maktab"> 
        <button className="btn3"> Maktab haqida kuproq</button>

        </Link>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="m">Magistratuta</h1>
      <br />
      <br />
      <div className="aka-pej6">
        <div className="combined-container-wrapper">
          {data.slice(18, 19).map((item, index) => (
            <div className="combined-container" key={item.id}>
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className={`image-${index + 20}`}
              />
            </div>
          ))}
        </div>
        <div className="rasmodam1">
          <div className="baka">
            <h1 className="baka1">Oliy taʼlim</h1>
            <p className="une">
              {" "}
              Undergrad - bu sizning bakalavriat akademiklari va bakalavriat
              talimi boyicha vitse-provost tomonidan boshqariladigan
              imkoniyatlar uchun qollanma.
            </p>
          </div>
          <div className="baka">
            <h1 className="baka1">Bitiruvchilar</h1>
            <p className="une">
              Universitet bakalavriat talimining 66 asosiy yonalishlarini
              urganing.
            </p>
          </div>

          <div className="baka">
            <h1 className="baka1">Bakalavriat faktlari va raqamlari</h1>
            <p className="une">
              universitet 7800 ga yaqin bakalavr talabalari tahsil oladi.
              Bakalavr dasturi va talabalar jamoasi haqida koproq bilib oling.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1 className="usm">Usimliklar</h1>
      <div className="aka-pej7">
        <div className="image-container">
          <div className="combined-container-wrapper">
            {data.slice(19, 20).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 21}`}
                />
              </div>
            ))}
          </div>
          <div className="overlay">
            <h3>Paperbark Maple</h3>
            <p>
              Arboretum bir arsdan koproq vaqt davomida yoqolib ketish xavfi
              ostida turgan ushbu xitoy daraxti saqlanishda faol ish olib
              boradi.
            </p>


            <Link className="more-info" to="/Usimliklar">
    Koproq bilish
</Link>


 
          
            
          
          
          </div>
        </div>

        <div className="image-container">
          <div className="combined-container-wrapper">
            {data.slice(20, 21).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 21}`}
                />
              </div>
            ))}
          </div>
          <div className="overlay">
            <h3>Bahor gullari</h3>
            <p>
              Frenk Morton Jons 20-asr tabiatshunosi boʻlib, asosan
              entomologiyani, xususan Lepidoptera va ular bilan bogʻliq boʻlgan
              hasharotlarni oʻrgangan.
            </p>
         
            <Link className="more-info" to="/Usimliklar">
    Koproq bilish
</Link>
          </div>
        </div>

        <div className="image-container">
          <div className="combined-container-wrapper">
            {data.slice(21, 22).map((item, index) => (
              <div className="combined-container" key={item.id}>
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className={`image-${index + 21}`}
                />
              </div>
            ))}
          </div>
          <div className="overlay">
            <h3>Qaragay bariklari</h3>
            <p>
            Rafflesiaceae deb ataladi, ularning ildizlari, poyalari va barglari yuq. Hayotlarining kop qismida ular kurinmas bolib, faqat uy egasining yogochli
            </p>
            <Link className="more-info" to="/Usimliklar">
    Koproq bilish
</Link>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

<div className="aka-pej8">





<div className="combined-container-wrapper">
          {data.slice(22, 23).map((item, index) => (
            <div className="combined-container" key={item.id}>
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className={`image-${index + 23}`}
              />
            </div>
          ))}
        </div>
        
<div className="plpl">
<h1 className="io">Urmonda yurish</h1>
<p className="yu">Tadqiqotlar shuni korsatadiki, yurish va urmon vannalari jismoniy va ruhiy foyda keltiradi.
Har yili olimlar er yuzida boshqa hech bir joyda uchramaydigan sharoitlarda tadqiqotlar otkazish uchun yashash uchun qulay bolmagan Janubiy qutbga sayohat qilishadi.
</p>
</div>




</div>

    </div>
  );
}

export default Akademiklar;
