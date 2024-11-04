import { useEffect, useState } from "react";

export default function KampusIchi() {
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
      <div className="bodycha">
        <div className="kap-pej1">
          <br />
          <br />
          <h1 className="st">UniversitetReport</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="qara-uragich">
            <div className="qara1">
              {data.slice(35, 36).map((item, index) => (
                <div className="combined-container" key={item.id}>
                  <img
                    src={item.image}
                    alt={`Image ${item.id}`}
                    className={`image-${index + 37}`}
                  />
                </div>
              ))}
              <div className="qara1-tagi">
                <div className="qara1-tagi1">
                  <h2>Voqealar</h2>
                  <br />
                  <h1 className="den">
                    Demokratiya kuni haqida <br /> nimalarni bilish kerak
                  </h1>
                  <br />
                  <p className="yangi">Yandiliklar</p>
                  <br />
                  <p className="yili">
                    Nabining turtinchi yillik Demokratiya kuni -
                    prezidentlik saylovlari yilidagi birinchi - tomosha
                    partiyalari, martaba mikserlari, panel muhokamalari va
                    boshqalar uchun minglab odamlarni jalb qilishi kutilmoqda.
                  </p>
                </div>
              </div>
            </div>
<div className="chiziq1"></div>

            <div className="qara">
                
              <div className="qara-2">
                <div className="qara2-tagi">
                  <div className="qara2-1">
                    {data.slice(36, 37).map((item, index) => (
                      <div className="combined-container" key={item.id}>
                        <img
                          src={item.image}
                          alt={`Image ${item.id}`}
                          className={`image-${index + 38}`}
                        />
                      </div>
                    ))}
                    <div className="qara2-1-tagi">
                      <h2>Qonun</h2>
                      <h1 className="den1">
                        Neyt Persilining saylov <br /> tarixi mini muzeyi
                      </h1>
                      <p>surat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chiziq2"></div>


              <div className="qara-2">
                <div className="qara2-tagi">
                  <div className="qara2-1">
                    {data.slice(37, 38).map((item, index) => (
                      <div className="combined-container" key={item.id}>
                        <img
                          src={item.image}
                          alt={`Image ${item.id}`}
                          className={`image-${index + 38}`}
                        />
                      </div>
                    ))}
                    <div className="qara2-1-tagi">
                      <h2>Salomatlik va qonun</h2>
                      <br />
                      <h1 className="den2">
                        Qonga asoslangan yangi skrining uchun <br /> 
                        kolonoskopiyani otkazib yubormang,
                      </h1>
                      <p>surat</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
