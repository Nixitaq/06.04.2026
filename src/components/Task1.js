
export function Home() {
  return (
    <div className="container">
      <div className="Image">
        <img src="faceit.png" alt="фото" />
      </div>
      <div className="Text">
        <p>Магазин игровых девайсов "CyberZone"</p>
        <p>Работаем ежедневно с 10:00 до 22:00</p>
        <p>Лучшие цены на периферию в вашем городе</p>
      </div>
    </div>
  );
}

export  function About(){
    return <h2>About</h2>;
}

export  function Products(){
    return <h2>Products</h2>;
}

export  function Contacts(){
    return <h2>Contacts</h2>;
}

export  function Info(){
    return <h2>Info</h2>;
}
export function NotFound(){
    return <h2>Ресурс не найден 404</h2>;
}
