import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Home() {
  const [panjangSisi, setPanjangSisi] = useState("");
  const [tinggiLimas, setTinggiLimas] = useState("");
  const [luasPermukaan, setLuasPermukaan] = useState(null);

  const hitungLuasPermukaan = (e) => {
    e.preventDefault();

    const sisi = parseFloat(panjangSisi);
    const tinggi = parseFloat(tinggiLimas);

    if (sisi <= 0 || tinggi <= 0 || isNaN(sisi) || isNaN(tinggi)) {
      alert("Mohon masukkan nilai yang valid dan positif!");
      return;
    }
    const luasAlas = sisi * sisi;
    const tinggiSegitiga = Math.sqrt(
      Math.pow(0.5 * sisi, 2) + Math.pow(tinggi, 2)
    );
    const luasKeempatSisi = 4 * (0.5 * sisi * tinggiSegitiga);
    const totalLuas = luasAlas + luasKeempatSisi;

    setLuasPermukaan(totalLuas.toFixed(2));
  };

  const resetForm = () => {
    setPanjangSisi("");
    setTinggiLimas("");
    setLuasPermukaan(null);
  };

  return (
    <div className="item3 p-2">
      <h1 className="mb-3">Limas Segi Empat</h1>
      <Form onSubmit={hitungLuasPermukaan}>
        <Form.Group className="mb-3 form1" controlId="formPanjangSisi">
          <Form.Label>Panjang Sisi</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Panjang sisi"
            value={panjangSisi}
            onChange={(e) => setPanjangSisi(e.target.value)}
            step="0.01"
            min="0"
          />
        </Form.Group>

        <Form.Group className="mb-3 form1" controlId="formTinggiLimas">
          <Form.Label>Tinggi Limas</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Tinggi Limas"
            value={tinggiLimas}
            onChange={(e) => setTinggiLimas(e.target.value)}
            step="0.01"
            min="0"
          />
        </Form.Group>

        <div className="d-flex gap-2">
          <Button variant="primary" type="submit">
            Hitung
          </Button>
          <Button variant="secondary" type="button" onClick={resetForm}>
            Reset
          </Button>
        </div>
      </Form>

      <div className="mt-3">
        <p>
          <strong>Luas Permukaan: </strong>
          {luasPermukaan !== null
            ? `${luasPermukaan} satuan²`
            : "Belum dihitung"}
        </p>

        {luasPermukaan !== null && (
          <div className="mt-2 p-2 bg-light rounded">
            <small>
              <strong>Rumus:</strong> LP = S² + (4 × (½ × S × T_segitiga))
              <br />
              <strong>T_segitiga:</strong> √((½ × S)² + T_Limas²)
              <br />
              <strong>Keterangan:</strong> S = panjang sisi, T_Limas = tinggi
              limas
            </small>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
