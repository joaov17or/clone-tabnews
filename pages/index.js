function Home() {
    return (
        <div style={{ 
            display: "flex",
            justifyContent: "center", // alinhando na horizontal
            alignItems: "center", // alinhando na vertical
            backgroundColor: "#ec9876ff", height: "100vh" }}> 
            
            <h1 style={{ 
                fontSize: "96px",   // aumenta a fonte
                fontWeight: "bold",  // negrito
                fontFamily: "Monaco, sans-serif" }}> curso.dev 
            </h1> 
        </div>
    );
} //criando uma apresentação;

export default Home; //exportando essa função padrão para fora do arquivo;
//export Teste2 se eu tivesse outra função