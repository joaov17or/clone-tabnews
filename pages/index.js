import { useEffect, useState } from "react";

function Home() {
  // DATA INICIAL (MUDE AQUI)

  return (
    <div
      style={{
        backgroundColor: "#1f1f1f",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        //fontFamily: "Poppins', sans-serif", - fonte padrão
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.15)", //deixa o card transparente
          backdropFilter: "blur(10px)", //desfoca o fundo de trás
          WebkitBackdropFilter: "blur(10px)", // Safari
          borderRadius: "20px",
          padding: "40px 60px",
          border: "1px solid rgba(255, 255, 255, 0.3)", //borda de vidro
          color: "white",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)", // profundidade
        }}
      >
        <h1
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600" }}
        >
          Minha primeira página
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: "300",
            opacity: 0.8,
          }}
        >
          Funciona 🎉
        </p>
      </div>
    </div>
  );
}

export default Home; //exportando essa função padrão para fora do arquivo;
//export Teste2 se eu tivesse outra função
