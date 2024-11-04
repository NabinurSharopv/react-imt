import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';



function Tadqiqod() {
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
        <h1 className="akadem1">Tadqiqod</h1>
        <p className="akadem2">
          Nobel mukofoti sovrindorlaridan tortib bakalavrlargacha, <br />{" "}
          Stenford hamjamiyatining barcha azolari bilim yaratish bilan
          shugullanadilar.
        </p>
      </div>

      <div className="aka-pej2">
        <div className="combined-container-wrapper">
          {data.slice(23, 24).map((item, index) => (
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
            <h1 className="raqam">15 ta institut</h1>
            <p className="raqam-i">Fanlararo chegaralarni kesib utish</p>
          </div>
          <div className="ch-ichi">
            <h1 className="raqam">20 kutubxona</h1>
            <p className="raqam-i">12 milliondan ortiq narsalarni saqlang</p>
          </div>
          <div className="ch-ichi">
            <h1 className="raqam">21,98 milliard dollar</h1>
            <p className="raqam-i">Homiylik qilingan tadqiqot byudjeti</p>
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
      <h1 className="akadem3">Tadqiqot korxonasi</h1>
      <p className="t-tex">
        Stenford hamkorlik madaniyati bizning dunyomiz, sogligimiz va <br />
        intellektual hayotimiz uchun muhim bolgan sohalarda <br /> innovatsion
        kashfiyotlarni keltirib chiqaradi.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="tad-pej1">
        {data.slice(24, 25).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 25}`}
            />
          </div>
        ))}

        <div className="tadpej1-yoni">
          <h1 className="o">Fanlararo tadqiqotlar</h1>
          <p className="ff">
            Fanlar chorrahasida yangi goyalar paydo boladi va innovatsion
            tadqiqotlar sodir boladi.
          </p>
          <h1 className="o">Institutlar, laboratoriyalar va markazlar</h1>
          <p className="ff">
            On beshta mustaqil laboratoriya, markaz va institutlar universitet
            boylab professor-uqituvchilar va talabalarni jalb qiladi.
          </p>

          <h1 className="o">
            Boshqa tadqiqot markazlari va <br /> laboratoriyalari
          </h1>
          <p className="ff">
            Akademik bolimlar koplab boshqa tadqiqot markazlari va
            laboratoriyalariga homiylik qiladi.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="akadem3">Tadqiqot qayerda sodir buladi</h1>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="tad-pej2">
        <div className="tad-uragich">
          <div className="tad1">
            <div className="i-1">
              <div className="combined-container-wrapper">
                {data.slice(25, 26).map((item, index) => (
                  <div className="combined-container" key={item.id}>
                    <img
                      src={item.image}
                      alt={`Image ${item.id}`}
                      className={`image-${index + 26}`}
                    />
                  </div>
                ))}
              </div>
              <div className="ta-1">
                <h3 className="cl">SLAC Milliy tezlatgich laboratoriyasi</h3>
                <br />
                <p className="c">
                  SLAC — Stenford tomonidan boshqariladigan AQSh Energetika
                  vazirligi milliy laboratoriyasi boʻlib, kimyo, material va
                  energetika fanlari, biofan, termoyadroviy energiya fani,
                  yuqori energiya fizikasi, kosmologiya va boshqa sohalarda
                  tadqiqotlar olib boradi.
                </p>
              </div>
            </div>
          </div>

          <div className="tad1">
            <div className="i-1">
              <div className="combined-container-wrapper">
                {data.slice(26, 27).map((item, index) => (
                  <div className="combined-container" key={item.id}>
                    <img
                      src={item.image}
                      alt={`Image ${item.id}`}
                      className={`image-${index + 26}`}
                    />
                  </div>
                ))}
              </div>
              <div className="ta-1">
                <h3 className="cl">Guver instituti</h3>
                <br />
                <p className="c">
                  Ichki va xalqaro munosabatlarni organishga bagishlangan Guver
                  instituti 1919 yilda Stenfordning 1895 yildagi kashshoflar
                  sinfining azosi va AQShning 31-prezidenti Gerbert Guver
                  tomonidan tashkil etilgan. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Libero
                </p>
              </div>
            </div>
          </div>

          <div className="tad1">
            <div className="i-1">
              <div className="combined-container-wrapper">
                {data.slice(27, 28).map((item, index) => (
                  <div className="combined-container" key={item.id}>
                    <img
                      src={item.image}
                      alt={`Image ${item.id}`}
                      className={`image-${index + 26}`}
                    />
                  </div>
                ))}
              </div>
              <div className="ta-1">
                <h3 className="cl">Stenford Vuds atrof-muhit instituti</h3>
                <br />
                <p className="c">
                  Jamiyatlar odamlarning suv, oziq-ovqat va soglikka bolgan
                  ehtiyojlarini qondiradigan kelajak sari harakat qilish, shu
                  bilan birga sayyorani himoya qilish va parvarish qilish. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                  ipsa odit rem deleniti expedita distinctio
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="tad-uragich">
          <div className="tad1">
            <div className="i-1">
              <div className="combined-container-wrapper">
                {data.slice(28, 29).map((item, index) => (
                  <div className="combined-container" key={item.id}>
                    <img
                      src={item.image}
                      alt={`Image ${item.id}`}
                      className={`image-${index + 26}`}
                    />
                  </div>
                ))}
              </div>
              <div className="ta-1">
                <h3 className="cl">Stenford gumanitar fanlar markazi</h3>
                <br />
                <p className="c">
                  Insoniyat tajribasining tarixiy, falsafiy, adabiy, badiiy va
                  madaniy jihatlari boyicha tadqiqotlarni rivojlantirish. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                  non voluptas soluta nam blanditiis eos maxime, totam molestias
                  mollitia laboriosam?
                </p>
              </div>
            </div>
          </div>

          <div className="tad1">
            <div className="i-1">
              <div className="combined-container-wrapper">
                {data.slice(29, 30).map((item, index) => (
                  <div className="combined-container" key={item.id}>
                    <img
                      src={item.image}
                      alt={`Image ${item.id}`}
                      className={`image-${index + 26}`}
                    />
                  </div>
                ))}
              </div>
              <div className="ta-1">
                <h3 className="cl">Stenford Bio-X</h3>
                <br />
                <p className="c">
                  Biotibbiyot va hayot fanlari tadqiqotchilari, klinisyenler,
                  muhandislar, fiziklar va kompyuter olimlari inson tanasining
                  sirlarini ochish uchun birlashadilar. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Consequuntur molestias
                  vitae quasi sed repellendus.
                </p>
              </div>
            </div>
          </div>

          <div className="tad1">
            <div className="i-1">
              <div className="combined-container-wrapper">
                {data.slice(30, 31).map((item, index) => (
                  <div className="combined-container" key={item.id}>
                    <img
                      src={item.image}
                      alt={`Image ${item.id}`}
                      className={`image-${index + 26}`}
                    />
                  </div>
                ))}
              </div>
              <div className="ta-1">
                <h3 className="cl">
                  Freeman Spogli xalqaro tadqiqotlar instituti (FSI)
                </h3>
                <br />
                <p className="c">
                  Chegaralarni kesib otadigan va butun dunyo hayotiga tasir
                  qiladigan muammolar, siyosat va jarayonlarni tushunish. Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
                  asperiores, ad inventore !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />



      <Link to="/Tadqiqod2"> 
        <button className="btn3">Kuproq tadqiqod </button>
        </Link>



      <br />
      <br />
      <br />
      <br />

      <div className="tad-pej3">
        <div className="tad3">
          <h2>Stenford universiteti kutubxonalari</h2>
          <p className="s">
            Stenfordda 20 dan ortiq shaxsiy kutubxonalar joylashgan bolib,
            ularning har biri jahon darajasidagi kitoblar, jurnallar, filmlar,
            xaritalar va malumotlar bazalari toplamiga ega.
          </p>

          <h2>Onlayn katalog</h2>
          <p className="s">
            SearchWorks - bu bizning jismoniy va onlayn toplamlarimizdagi 8
            milliondan ortiq manbalar haqida metamalumotlarni taqdim etuvchi
            Stenford universiteti kutubxonalarining rasmiy onlayn qidiruv
            vositasi.
          </p>
        </div>
        {data.slice(31, 32).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 27}`}
            />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="tad-pej4">
        <div className="eng-tag">
          <h3 className="ba">Bakalavr tadqiqotlari</h3>
          <p className="bb">
            Bakalavriat ilmiy-tadqiqotlari va mustaqil loyihalari tadqiqot,
            ilgor stipendiya va ijodiy loyihalarni amalga oshirish uchun
            bakalavrlarni professor-oqituvchilar boglaydi.
          </p>
        </div>
        <div className="eng-tag">
          <h3>Tadqiqot boshqarmasi</h3>
          <p>
            Provost orinbosari va tadqiqot dekani idorasi Stenforddagi tadqiqot
            korxonasi haqida toliq malumot beradi.
          </p>
        </div>
        <div className="eng-tag">
          <h3>Tadqiqotchi toping</h3>
          <p>
            Stenford oqituvchilari, xodimlari, talabalari va postdoclarning
            profillarini qidiring va uqing. Siz hamkorlik qilmoqchi bulgan
            tadqiqotchilarni toping.
          </p>
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
  );
}

export default Tadqiqod;
