function carregaAdoteUmGatinho() {
    var carregaAdoteUmGatinho = {
      bio01: {
        nome: "Bigodin",
  
        imagem: "https://i.ibb.co/TL5GHWG/1g.jpg",
  
        descricao:
          "Gatinha fêmea ",
  
        citacao:
          "Nasci 22/11/22 , alguém que venha me dar um lar e muito carinho ,tenho um bigodinho e cavanhaque ,sou uma  dorminhoca, gosto de brincar com bolinha de papel e adoro tomar um leitinho.",
      },
  
      bio02: {
        nome: "Carnerita",
  
        imagem: "https://i.ibb.co/fr0YRpk/4g.jpg",
  
        descricao:
          " Sou uma Gatinha fêmea  super dócil, gosto de brincar e adoro um cafuné, gosto de dormir",
  
        citacao:
          "Nasci 22/11/22 , alguém que venha me dar um lar e muito carinho.",
      },
  
      bio03: {
        nome: "Gata Lili",
  
        imagem: "https://i.ibb.co/qyX3ZPg/3g.jpg",
  
        descricao:
          "Gatinha fêmea  ",
  
        citacao:
          "Nasci 22/11/22 , alguém que venha me dar um lar e muito carinho, Sou  carinhosa ,sou beje com branco e cinza , tenho olhos azuis e adoro tomar leitinho e brincar com bolinha de papel.",
      },
  
      bio04: {
        nome: "Gata Lady",
  
        imagem: "https://i.ibb.co/xDnDTzg/2g.jpg",
  
        descricao:
          " Gatinha fêmea.",
  
        citacao:
          "Nasci 22/11/22 , alguém que venha me dar um lar e muito carinho sou bem fofinha ,adoro tomar leitinho e brincar com bolinha de papel .",
      },
  
      bio05: {
        nome: "Gagau",
  
        imagem: "https://i.ibb.co/tPs42dK/5g.jpg",
  
        descricao:
          "Gatinha fêmea",
  
        citacao:
          "Nasci 21/08/20 , alguém que venha me dar um lar e muito carinho sou uma gata pretinha e muito esperta, gosto de tomar leitinho e brincar com outros animais, sou um pouco assustada com quem não conheço",
      },
  
      bio06: {
        nome: "Kika",
  
        imagem: "https://i.ibb.co/MCwdF5L/6g.jpg",
  
        descricao:
          "Gata Femea super carinhosa, busca alguém que venha dar um lar e muito carinho",
  
        citacao:
          "⁠Avó da Bigodin,Lili,Gata Lady.Tem aproximadamente 2 anos muito tranquila e adoro um catinho para dormir, ",
      },
      bio07: {
        nome: "Gata Cantora(Dôdô)",
  
        imagem:
          "https://i.ibb.co/1Q5SvGb/7g.jpg",
  
        descricao:
          "Gata fêmea.",
  
        citacao:
          "Nasceu no dia 31/12/21 Aguém que venha me dar um lar e muito carinho ,⁠Mãe de Bigodin,Carnerita,Lili,Gata Lady e Filha da Kika.",
      },
  
      bio08: {
        nome: "Teletube",
  
        imagem:
          "https://i.ibb.co/s9CLVsx/8g.jpg",
  
        descricao:
          " Gata fêmea.",
  
        citacao:
          "Nasceu no dia 31/12/21 Alguém que venha me dar um lar e muito carinho ,⁠irmã da Gata Cantora e tia de Bigodin,Carnerita,Lili,Gata Lady e Filha da Kika..",
      },
  
      bio09: {
        nome: "Mio",
  
        imagem:
          "https://i.ibb.co/PTcbFL5/9g.png",
  
        descricao:
          "Gato Macho.",
  
        citacao:
          "Nasceu no dia 31/12/21 Alguém que venha me dar um lar e muito carinho ,⁠irmão da Gata Cantora e Teletube tio de Bigodin,Carnerita,Lili,Gata Lady e Filho da Kika Nasceu preso no cordão umbilical junto com meus 3 irmãos perdi minha  perninha traseira, mais isso não impede de bricar e vivo uma vida normal.",
      },
    };
  
    var content = document.getElementById("content");
  
    for (var adote in carregaAdoteUmGatinho) {
  
      content.innerHTML +=
  
        '<div class="card">' +
  
        '<img src="' +
  
        carregaAdoteUmGatinho[adote].imagem +
  
        '"/>' +
  
        "<details>" +
  
        "<summary>" +
  
        carregaAdoteUmGatinho[adote].nome +
  
        "</summary>" +
  
        "<p>" +
  
        carregaAdoteUmGatinho[adote].descricao +
  
        "</p>" +
  
        "<blockquote><q>" +
  
        carregaAdoteUmGatinho[adote].citacao +
  
        "</q></blockquote>" +
  
        "</details></div>";
  
    }
  }
  
  carregaAdoteUmGatinho();
  