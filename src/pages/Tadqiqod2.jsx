import { useEffect, useState } from "react";

export default function Tadqiqod2() {
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
      <div className="t2-pej1">
        <div className="t2-pej1-i">
          <h1 className="ta1">
            Nabi <br /> univers <br /> Tadqiqodchilari{" "}
          </h1>
          <br />
          <p className="ta2">
            Stenford Suniy intellekt laboratoriyasi (SAIL) 1963 yilda tashkil
            etilganidan beri suniy intellekt boyicha tadqiqotlar, oqitish,
            nazariya va amaliyot uchun mukammallik markazi bolib kelgan.
          </p>
        </div>
        <br />

        {data.slice(52, 53).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 53}`}
            />
          </div>
        ))}

        {data.slice(49, 50).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 50}`}
            />
          </div>
        ))}

        {data.slice(50, 51).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 51}`}
            />
          </div>
        ))}

        {data.slice(51, 52).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 52}`}
            />
          </div>
        ))}

        {data.slice(53, 54).map((item, index) => (
          <div className="combined-container" key={item.id}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`image-${index + 54}`}
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

      <h1 className="sun">Sungi yangiliklar</h1>
      <div className="t2-pej2">
        <div className="t2-ichi">
          <div className="s-ichi">
            <h2 className="ai">
              Nabi AI laboratoriyasining PhD talabasi Dora Chjaoni ICML 2024 eng
              yaxshi qog‘oz mukofoti bilan tabriklaymiz!
            </h2>
            <br />
            <p className="ai1">
              Nabi AI laboratoriyasining PhD talabasi Dora Chjaoni Sony AI-dagi
              ishidan olingan maqola uchun ICML 2024 eng yaxshi qog‘oz mukofoti
              bilan tabriklaymiz: Ma’lumotlar to‘plami xilma-xilligini o‘lchash,
              shunchaki da’vo qilmang
            </p>
          </div>

          <div className="s-ichi">
            <h2 className="ai">
              Marko Pavonni Robototexnika: fan va tizimlar konferensiyasining
              eng yaxshi maqola mukofoti bilan tabriklaymiz!
            </h2>
            <br />
            <p className="ai1">
              Marko Pavoneni avtonom tizimlar uchun AI xavfsizligi bo‘yicha
              Robototexnika: fan va tizimlar konferensiyasida eng yaxshi qog‘oz
              mukofotini qo‘lga kiritgani uchun tabriklaymiz.
            </p>
          </div>

          <div className="s-ichi">
            <h2 className="ai">
              Nabi Menningni IEEE 2024 Jon fon Neyman medali bilan taqdirlangani
              bilan tabriklaymiz!
            </h2>
            <br />
            <p className="ai1">
              Kris Menning 2024 yilgi IEEE Jon von Neumann medali bilan tabiiy
              tilni hisoblash va tahlil qilishdagi yutuqlari uchun taqdirlangan.
              Bu IEEE ning hisoblash sohasidagi eng yuqori mukofotlaridan biri
              bolib, kompyuter bilan bogliq fan va texnologiya sohasidagi ajoyib
              yutuqlar uchun juda keng qamrovli.
            </p>
          </div>
        </div>

        <div className="t2-ichi">
          <div className="s-ichi">
            <h2 className="ai">
              Aaron Lou, Chenlin Meng va Stefano Ermonni ICML 2024 eng yaxshi
              qog‘oz mukofoti bilan tabriklaymiz!
            </h2>
            <br />
            <p className="ai1">
              Aaron Lou, Chenlin Meng va Stefano Ermonni ICML 2024 eng yaxshi
              qogʻoz mukofoti bilan tabriklaymiz: maʼlumotlar taqsimoti
              nisbatlarini baholash orqali diskret diffuziyani modellashtirish
            </p>
          </div>

          <div className="s-ichi">
            <h2 className="ai">
              Karlos Guestrinni NAEga saylangani bilan tabriklaymiz!
            </h2>
            <br />
            <p className="ai1">
              Karlos Guestrin Milliy muhandislik akademiyasiga mashinalarni
              organishni fan va sanoatda keng qollash imkonini beruvchi
              kengaytiriladigan tizimlar va algoritmlar uchun saylangan.
            </p>
          </div>

          <div className="s-ichi">
            <h2 className="ai">
              SAIL oqituvchilari va talabalari NeurIPS ajoyib qogoz
              mukofotlarini qolga kiritdilar
            </h2>
            <br />
            <p className="ai1">
              Sanmi Koyejo va uning shogirdlarini NeurIPSning eng yaxshi qog‘oz
              mukofoti, Kris Menning, Stefano Ermon, Chelsi Finn va ularning
              shogirdlarini NeurIPSda Qog‘ozda eng yaxshi ikkinchi o‘rinni
              egallaganliklari bilan tabriklaymiz!
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
      <br />
      <br />
      <br />
      <br />
      <div className="bosh-pej8">
 
</div>
    </div>
  );
}
