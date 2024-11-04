import { useEffect, useState } from "react";

export default function Qabul() {
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
      <h1 className="qa">Qabul</h1>
      <p className="qa2">
        Nabi universda talim olish imkoniyatlarini urganing.
      </p>
      <br />
      <br />
      <br />
      <div className="qa-pej1">
        {data.slice(38, 39).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 39}`}
            />
          </div>
        ))}
      </div>

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
            <h1 className="raqam">7841</h1>
            <p className="raqam-i">Bakalavr talabalari</p>
          </div>
          <div className="ch-ichi">
            <h1 className="raqam">Sinf 2027</h1>
            <p className="raqam-i">76 mamlakatdan + 49 ta davlatdan</p>
          </div>
          <div className="ch-ichi">
            <h1 className="raqam">9 688</h1>
            <p className="raqam-i">Magistratura talabalari</p>
          </div>
        </div>
        <br />

        <div className="chiziq"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="qa-pej2">
        <h1 className="bh">Bakalavrlar</h1>
        <br />
        <br />
        <br />
        <br />
        <div className="aka-pej4">
          <div className="rasmodam">
            <div className="baka">
              <h1 className="baka2">Bakalavriatga qabul</h1>
              <p className="une">
                Har yili Stenfordda 1700 ga yaqin birinchi kurs talabalari va 30
                nafar transfer talabalari ruyxatga olinadi. Biz har bir
                abituriyentni akademik mukammallik, intellektual hayotiylik va
                shaxsiy kontekstni hisobga olgan holda korib chiqamiz.
              </p>
            </div>
            <div className="baka">
              <h1 className="baka2">Mayorlar</h1>
              <p className="une">
                Stenford yordam olish huquqiga ega bolgan har bir qabul qilingan
                bakalavrning moliyaviy ehtiyojlarini toliq qondiradi. Oila
                daromadi 150 000 dollardan kam bolgan bakalavrlar uchun oqish
                tolanadi. Oila daromadi 100 000 dollardan past bolgan
                bakalavrlar uchun oqish, xona va ovqat qoplanadi.
              </p>
            </div>

            <div className="baka">
              <h1 className="baka2">Bakalavriat faktlari va raqamlari</h1>
              <p className="une">
                universitet 7800 ga yaqin bakalavr talabalari tahsil oladi.
                Bakalavr dasturi va talabalar jamoasi haqida koproq bilib oling.
              </p>
            </div>
          </div>

          <div className="combined-container-wrapper">
            {data.slice(39, 40).map((item, index) => (
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
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="bh">Magistratura</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="q-pej6">
        <div className="combined-container-wrapper">
          {data.slice(40, 41).map((item, index) => (
            <div className="combined-container" key={item.id}>
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className={`image-${index + 41}`}
              />
            </div>
          ))}
        </div>
        <div className="rasmodam">
          <div className="baka">
            <h1 className="baka2">Magistraturaga kirish</h1>
            <p className="une">
              Stenforddagi yettita maktabda 200 dan ortiq daraja dasturlari
              taklif etiladi. Qabul qilish talablari ular orasida juda farq
              qiladi.
            </p>
          </div>
          <div className="baka">
            <h1 className="baka2">Magistraturani moliyalashtirish</h1>
            <p className="une">
              Stenfordda magistraturada uqish narxi - va moliyaviy yordam uchun
              mavjud resurslar - daraja, maktab va ruyxatga olish holatiga qarab
              farq qiladi. Stenford magistrantlarining 85% ga yaqini moliyaviy
              yordam oladi.
            </p>
          </div>

          <div className="baka">
            <h1 className="baka2">
              Oliy taʼlim boʻyicha prorektor oʻrinbosari
            </h1>
            <p className="une">
              Oliy taʼlim boʻyicha vitse-provost idorasi boʻlajak talabalar
              uchun Stenfordda taqdim etilgan 200 dan ortiq magistratura
              dasturlari boʻyicha maʼlumotlarni taqdim etadi.
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
      <br />
      <br />
      <div className="bosh-pej8"></div>
    </div>
  );
}
