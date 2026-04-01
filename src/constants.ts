export const COLORS = {
  navyDeep: '#0A1633',
  navyPetrol: '#101C3D',
  charcoal: '#0B0B0B',
  graphite: '#171717',
  steel: '#232323',
  ice: '#F4F4F4',
  orangeBurnt: '#E5662E',
  orangeVibrant: '#F47A2A',
  silver: '#B8BCC6',
};

export const LOGO_URL = "https://i.postimg.cc/n9fF4ZLs/Pedro-mascavo-(logo-do-site).jpg"; // Direct image link from Postimages

export const CONTENT = {
  hero: {
    title: "Seu visual fala antes de você.",
    subtitle: "Atendimento masculino com precisão, personalidade e alto padrão em Maceió. Agende seu horário com Pedro Mascavo e eleve sua imagem.",
    ctaPrimary: "Quais horários disponível",
    ctaSecondary: "Explorar Cortes",
    whatsappUrl: "https://wa.me/5582987223080?text=Olá,%20gostaria%20de%20agendar%20um%20horário.%20Quais%20horários%20disponível?",
  },
  positioning: {
    main: "Mais do que um corte. Uma imagem que impõe presença.",
    support: "Cada detalhe do seu visual comunica algo. O corte certo valoriza sua postura, sua confiança e a forma como você é percebido.",
  },
  differentials: [
    { title: "Atendimento personalizado", icon: "User" },
    { title: "Precisão no acabamento", icon: "Scissors" },
    { title: "Cortes alinhados ao seu estilo", icon: "Target" },
    { title: "Barba com definição e presença", icon: "Zap" },
    { title: "Experiência premium na Arena", icon: "Award" },
    { title: "Agendamento rápido e direto", icon: "Calendar" },
    { title: "Visual que valoriza sua imagem", icon: "Eye" },
    { title: "Ambiente profissional", icon: "Shield" },
  ],
  services: [
    {
      name: "Corte Masculino",
      description: "Visual alinhado, preciso e pensado para valorizar sua identidade.",
    },
    {
      name: "Barba",
      description: "Acabamento limpo e definido para reforçar presença e estilo.",
    },
    {
      name: "Corte + Barba",
      description: "A combinação ideal para um visual completo, forte e bem construído.",
    },
    {
      name: "Acabamento",
      description: "Detalhes que fazem diferença no resultado final.",
    },
    {
      name: "Estilo Personalizado",
      description: "Um atendimento pensado para combinar imagem, presença e personalidade.",
    },
  ],
  cuts: [
    {
      id: "fade",
      title: "Degradê / Fade",
      categorySelo: "Impacto & Modernidade",
      description: "Precisão, limpeza e impacto visual. Um estilo moderno para quem quer presença logo no primeiro olhar.",
      paraQuemCombina: "Homens dinâmicos, modernos e que valorizam uma imagem marcante.",
      sensacaoTransmite: "Confiança, presença e cuidado com os detalhes.",
      idealPara: "Quem quer presença no dia a dia",
      image: "https://cdn.manualdohomem.com.br/?w=700&h=400&key=aHR0cHM6Ly9tYW51YWxkb2hvbWVtbW9kZXJuby5jb20uYnI=&u=%2Ffiles%2F_2016%2F10%2Fcortefaded7.jpg"
    },
    {
      id: "low-fade",
      title: "Low Fade",
      categorySelo: "Elegância Masculina",
      description: "Um degradê mais baixo e sutil, ideal para quem busca um visual moderno mas com um toque de discrição e classe.",
      paraQuemCombina: "Homens que buscam um visual limpo e moderno sem exageros.",
      sensacaoTransmite: "Sofisticação, cuidado e atenção aos detalhes.",
      idealPara: "Quem busca um visual limpo e moderno",
      image: "https://cdn.prod.website-files.com/6691f4c15ef1cd5c89763f60/6998a8d55f8e08ecf3543909_ChatGPT-Image-Aug-26-2025-09_13_16-PM.webp"
    },
    {
      id: "mid-fade",
      title: "Mid Fade",
      categorySelo: "Presença & Precisão",
      description: "O equilíbrio perfeito entre o clássico e o moderno. Um degradê médio que impõe respeito e estilo.",
      paraQuemCombina: "Homens que querem um visual equilibrado e versátil.",
      sensacaoTransmite: "Equilíbrio, força e estilo.",
      idealPara: "Quem prefere elegância com personalidade",
      image: "https://i.pinimg.com/736x/b4/02/46/b40246184cb483ef551a1b39adc599ed.jpg"
    },
    {
      id: "high-fade",
      title: "High Fade",
      categorySelo: "Impacto & Atitude",
      description: "Um degradê alto e marcante para quem não tem medo de se destacar. Máximo contraste e estilo.",
      paraQuemCombina: "Homens de atitude que buscam um visual forte e impactante.",
      sensacaoTransmite: "Ousadia, modernidade e presença.",
      idealPara: "Quem quer um estilo forte e atual",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CnoHA-kCWFO3gYijX6BYPCRK_u9208NXbg&s"
    },
    {
      id: "taper-fade",
      title: "Taper Fade",
      categorySelo: "Estilo & Personalidade",
      description: "Um acabamento refinado nas costeletas e nuca, mantendo o comprimento no restante. Versatilidade pura.",
      paraQuemCombina: "Homens que valorizam a naturalidade com um toque de precisão.",
      sensacaoTransmite: "Naturalidade, estilo e cuidado.",
      idealPara: "Quem busca um visual autêntico",
      image: "https://i.pinimg.com/736x/ca/d4/cd/cad4cd5fcaf82fc0834608b2aec0048a.jpg"
    },
    {
      id: "classic",
      title: "Social / Clássico",
      categorySelo: "Imagem Limpa & Forte",
      description: "Elegância masculina com acabamento refinado. Ideal para quem busca postura, versatilidade e imagem alinhada.",
      paraQuemCombina: "Executivos, líderes e homens que prezam por uma imagem impecável.",
      sensacaoTransmite: "Postura, seriedade e elegância.",
      idealPara: "Quem busca uma imagem executiva e forte",
      image: "https://i.postimg.cc/66gr5Dj7/Pedro-mascavo-(corte-social).jpg"
    },
    {
      id: "americano",
      title: "Americano",
      categorySelo: "Modernidade & Praticidade",
      description: "Um clássico atemporal que une praticidade e estilo. O corte que nunca sai de moda.",
      paraQuemCombina: "Homens práticos que não abrem mão de estar sempre bem apresentados.",
      sensacaoTransmite: "Praticidade, estilo e confiança.",
      idealPara: "Quem quer estar sempre pronto",
      image: "https://i.pinimg.com/originals/8f/21/ee/8f21eee80da59c885121575bd40df067.jpg"
    },
    {
      id: "modern",
      title: "Moderno / Texturizado",
      categorySelo: "Autenticidade & Estilo",
      description: "Um visual mais atual, autêntico e marcante, pensado para quem quer estilo sem perder identidade.",
      paraQuemCombina: "Mentes criativas e homens que buscam um visual diferenciado.",
      sensacaoTransmite: "Criatividade, estilo e personalidade.",
      idealPara: "Quem busca um visual autêntico e moderno",
      image: "https://blog.newoldman.com.br/wp-content/uploads/2024/09/Cortes-de-Cabelo-Masculino-Ondulado-Curto-Texturizado-1.jpg"
    },
    {
      id: "undercut",
      title: "Undercut",
      categorySelo: "Estilo & Atitude",
      description: "Laterais raspadas e topo longo. Um corte de alto contraste para uma imagem de impacto.",
      paraQuemCombina: "Homens que buscam um visual marcante e cheio de atitude.",
      sensacaoTransmite: "Atitude, estilo e modernidade.",
      idealPara: "Quem quer um visual de impacto",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDalWPzWfASm4U0r1X49vpqmVTStM7nvvdLw&s"
    },
    {
      id: "buzz-cut",
      title: "Buzz Cut / Militar",
      categorySelo: "Praticidade & Força",
      description: "O máximo da praticidade com uma estética forte e masculina. Imagem limpa e sem distrações.",
      paraQuemCombina: "Homens que buscam força e praticidade absoluta no dia a dia.",
      sensacaoTransmite: "Força, disciplina e clareza.",
      idealPara: "Quem busca praticidade máxima",
      image: "https://i.pinimg.com/736x/ec/e1/b2/ece1b21a626172d5fd6de38e462f1bba.jpg"
    },
    {
      id: "risco",
      title: "Corte com Risco",
      categorySelo: "Personalidade & Detalhe",
      description: "Adicione um detalhe de impacto ao seu corte. O risco traz uma camada extra de personalidade.",
      paraQuemCombina: "Homens que gostam de detalhes que fazem a diferença.",
      sensacaoTransmite: "Personalidade, ousadia e estilo.",
      idealPara: "Quem valoriza os detalhes",
      image: "https://scontent.fmcz3-1.fna.fbcdn.net/v/t39.30808-6/659639472_122322531908011085_985649734228929976_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=OGooS7rWD0MQ7kNvwFyFM2H&_nc_oc=AdpN9eFkte68ElP7_bT3KW19aZttPKQMNgY0pNj0VkREHktQE4segQbiX5hx5mwAhMzoNaCiSDdjkf-luSJGG4tD&_nc_zt=23&_nc_ht=scontent.fmcz3-1.fna&_nc_gid=D_QgEGM-fq82738AYskdCw&_nc_ss=7a3a8&oh=00_Af3LiXTlxV4iD4cGP-wsRepTLhdG_i4_IO0ytUTdskA9TQ&oe=69D34C66"
    },
    {
      id: "beard",
      title: "Barba + Corte Alinhado",
      categorySelo: "Presença & Cuidado",
      description: "Um resultado completo para reforçar presença, cuidado e personalidade em cada detalhe.",
      paraQuemCombina: "Homens de atitude que valorizam um visual completo e bem cuidado.",
      sensacaoTransmite: "Presença, cuidado e masculinidade.",
      idealPara: "Quem quer um visual completo",
      image: "https://scontent.fmcz3-1.fna.fbcdn.net/v/t39.30808-6/661067415_122322532436011085_1473820538161046482_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=qMbxizcAo_AQ7kNvwGv4XUf&_nc_oc=Adom8Sp3ALd-o_ZTOy5yJwHSV2rsStRThrCaK-7BuXdTNyT0DBHoeT1o7i3qUWnO_DDRlxQ7HLQcRsJ3VFQ-z9Mh&_nc_zt=23&_nc_ht=scontent.fmcz3-1.fna&_nc_gid=VYoXDOzuqDn8imCwG2C-lQ&_nc_ss=7a3a8&oh=00_Af19nFe52f0jmXi-MSKraYoBQ71q3svJD_VKY7ZEyfnpXw&oe=69D33C12"
    },
    {
      id: "clean",
      title: "Visual Clean / Executivo",
      categorySelo: "Sofisticação & Maturidade",
      description: "Sofisticação, leveza e imagem limpa para quem valoriza uma presença mais discreta, madura e forte.",
      paraQuemCombina: "Homens maduros, executivos e que buscam uma imagem de alta credibilidade.",
      sensacaoTransmite: "Credibilidade, maturidade e sofisticação.",
      idealPara: "Quem busca alta credibilidade",
      image: "https://i.pinimg.com/originals/f1/ac/85/f1ac85e4bec3f7b5405db310126014fb.jpg"
    },
  ],
  highlights: {
    title: "Quem já passou pela cadeira do Pedro",
    subtitle: "Pedro Mascavo já assinou o visual de nomes que vivem em destaque.",
    mainPersonalities: [
      {
        name: "Carlinhos Maia",
        image: "https://i.postimg.cc/NjpLLXs7/Pedro-mascavo-(carlinhos-maia).jpg",
        description: "Influenciador & Empresário"
      },
      {
        name: "Pedro Sampaio",
        image: "https://i.postimg.cc/76p5wyH2/Pedro-mascavo-(Pedro-sampaio).jpg",
        description: "DJ & Produtor Musical"
      },
      {
        name: "Mano Walter",
        image: "https://i.postimg.cc/m23Pfq0H/Pedro-mascavo-(mano-walter).jpg",
        description: "Cantor & Compositor"
      }
    ],
    supportPhrase: "Pedro Mascavo já assinou o visual de nomes como Carlinhos Maia, Pedro Sampaio e Mano Walter.",
    secondaryTitle: "Entre outros nomes de destaque",
    secondaryNames: [
      "Christian Bell", "Abrão Meron", "Thiago Freitas", "Lucas Halbert", 
      "Ed Gama", "Iguinho e Lulinha", "Wesley Beltrão", "Mandarrari", 
      "Galeguinho", "Verinha e Babai", "Davi Braga", "Mauro Henrique"
    ],
    microcopy: "Quem vive em evidência sabe o peso dos detalhes."
  },
  about: {
    intro: "Pedro Mascavo não trabalha apenas com corte. Ele trabalha com presença.",
    complement: "Seu objetivo é entregar mais do que um visual alinhado: é fazer cada cliente sair com mais confiança, mais identidade e mais segurança na própria imagem.",
    philosophy: "Cada rosto, cada estilo e cada personalidade exigem atenção aos detalhes. Por isso, cada atendimento é pensado para valorizar aquilo que torna cada cliente único.",
    values: ["Precisão", "Respeito", "Estilo", "Identidade", "Confiança", "Presença"],
    arena: "Atendendo dentro da Arena Barbearia, Pedro une marca pessoal, técnica e experiência premium em um ambiente pensado para o homem moderno.",
    image: "https://i.postimg.cc/Y91HLcNw/Pedro-mascavo-(apresentacao).jpg",
  },
  authority: {
    title: "Presença dentro e fora da cadeira",
    subtitle: "Além do atendimento, Pedro Mascavo também constrói sua trajetória em eventos e ambientes que reúnem nomes fortes da barbearia.",
    cards: [
      {
        name: "Juarez Leite",
        selo: "Referência do setor",
        image: "https://i.postimg.cc/1R8Rszj6/Pedro-mascavo-(cursos).jpg",
        text: "Participação em eventos ligados a grandes referências da barbearia, fortalecendo presença profissional e vivência em ambientes de alto nível."
      },
      {
        name: "Seu Elias",
        selo: "Vivência & Reconhecimento",
        image: "https://i.postimg.cc/CxsSmnzv/imagem-2026-03-31-204643304.png",
        text: "Experiência em eventos com nomes respeitados do meio barber, ampliando repertório, visão estética e posicionamento profissional."
      },
      {
        name: "Barber Nordeste",
        selo: "Cena Barber Regional",
        image: "https://i.postimg.cc/0jSqmbTJ/imagem-2026-03-31-204740913.png",
        text: "Presença em um dos ambientes mais relevantes da cena barber regional, reforçando conexão com o cenário profissional e a cultura da barbearia."
      }
    ],
    impactPhrase: "Autoridade não se constrói só no resultado final — ela também se constrói nos ambientes certos.",
    microcopy: "Estar nos ambientes certos também constrói assinatura.",
    supportText: "Além da cadeira, Pedro Mascavo também constrói sua presença em ambientes que fortalecem técnica, visão e posicionamento dentro da barbearia.",
    cta: {
      title: "Presença se constrói em cada detalhe.",
      subtext: "Do atendimento ao ambiente certo, tudo comunica nível.",
      button: "Agendar no WhatsApp"
    }
  },
  arena: {
    title: "Atendimento em um ambiente à altura do seu estilo.",
    text: "Pedro Mascavo atende na Arena Barbearia, unindo atendimento profissional, ambiente refinado e uma experiência pensada para valorizar sua imagem do início ao fim.",
  },
  footer: {
    headline: "Seu próximo corte começa com uma decisão simples.",
    subheadline: "Escolha seu estilo, fale direto com Pedro Mascavo e marque seu atendimento com rapidez, presença e praticidade.",
    contact: {
      pedro: "(82) 98722-3080",
      arena: "(82) 99831-4344",
    }
  }
};
