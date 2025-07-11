import "../App.css";

function HeadTitle() {
  return (
    <div className="item1 text-center bg-primary text-white">
      <div className="d-flex justify-content-around align-items-center">
        <h1 className="m-4">IchsanCh</h1>
        <img
          src="https://iwima.ac.id/img/logo-2.svg"
          style={{ width: "65px", height: "60px", objectFit: "contain" }}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default HeadTitle;
