//Pagina Inicial

const introd = {
	titulo:"Equipes do College Football",
	logo:"data:image/png;base64,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",
	subtitulo:"O College Football: O Espírito da Competição e da Tradição Universitária",
	textoIntrod:[
		"O college football é uma das formas mais emocionantes e apaixonantes de futebol americano nos Estados Unidos. Diferente da NFL (National Football League), que envolve equipes profissionais, o college football é disputado por times universitários. O que torna essa modalidade tão especial é a combinação de talento jovem, rivalidades históricas e uma atmosfera única de campus universitário.",
		"Cada equipe de college football representa uma universidade e seus jogadores são principalmente estudantes-atletas. Esses times competem em diferentes divisões, com a FBS (Football Bowl Subdivision) sendo a divisão mais alta e a FCS (Football Championship Subdivision) sendo a divisão logo abaixo. A FBS é conhecida por suas equipes de elite e frequentemente realiza os maiores e mais emocionantes jogos do país.",
		"As rivalidades são uma parte fundamental do college football, com clássicos confrontos entre universidades gerando rivalidades ferozes e momentos históricos. Os jogos são disputados em estádios que variam em tamanho e tradição, mas todos eles são palcos de uma intensa paixão pelos times. O espírito da torcida, as bandas universitárias e os mascotes são elementos icônicos que tornam os jogos de college football uma experiência única e empolgante.",
		"Cada temporada culmina em jogos de pós-temporada, incluindo os famosos Bowls e os playoffs do College Football Playoff (CFP), onde os melhores times competem pelo título nacional. Assim, o college football oferece aos fãs uma mistura emocionante de tradição, competição de alto nível e o orgulho de representar sua alma mater. É uma experiência esportiva que vai além do campo de jogo e se estende para a cultura e a paixão das universidades e comunidades em todo o país."
	]
}
const conferencias = [
	//ACC
	{
		nomeConferencia:"Atlantic Coastal Conference",
		logoConferencia:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgR3m_koKhaK5NHKtrYEqAN8x7rN60lX8Y05-xBfE&s",
		introdConferencia:[
			"A Atlantic Coast Conference, ou ACC, é uma das principais conferências esportivas universitárias dos Estados Unidos e desempenha um papel significativo no cenário do college football. Fundada em 1953, a ACC é composta por escolas da região do Atlântico e do Sul dos Estados Unidos, e é conhecida por sua forte tradição esportiva e competitividade em várias modalidades, incluindo o futebol americano.",
			"No college football, a ACC é reconhecida por abrigar algumas das equipes mais respeitadas e talentosas do país. Times como Clemson, Florida State, Miami e Virginia Tech são membros proeminentes da conferência e têm uma longa história de sucesso no esporte. A ACC também é conhecida por seu calendário de jogos desafiador, que frequentemente inclui confrontos emocionantes entre suas equipes de elite.",
			"O sucesso da ACC não se limita apenas ao campo de jogo. A conferência é conhecida por sua dedicação à excelência acadêmica e ao desenvolvimento de estudantes-atletas. Muitos jogadores da ACC passam para a NFL, o que demonstra a qualidade do futebol americano universitário que é jogado na conferência.",
			"Além disso, a ACC desempenha um papel importante na determinação dos times que participarão dos playoffs do College Football Playoff (CFP), onde os melhores times do país competem pelo título nacional. As equipes da ACC frequentemente estão entre as favoritas para disputar o campeonato nacional, tornando a conferência um dos pontos focais do college football a cada temporada.",
			"Em resumo, a Atlantic Coast Conference é uma conferência dinâmica e altamente competitiva que desempenha um papel central no cenário do college football, oferecendo uma mistura emocionante de tradição, talento e rivalidades apaixonadas aos fãs do esporte em todo o país.",
		],
		equipesConferencia: [
				{
					nomeEquipe:"Boston College Eagles",
					cidadeEquipe:"Chestnut Hill, Massachusetts",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/bceagles.com/images/2018/11/29/20181110_BC_FBALL_v_Clemson_189.JPG",
					textoEquipe:"Os Boston College Eagles têm uma história de participação competitiva na ACC, conhecidos por seu espírito de luta e determinação em campo.",
					fundoEquipe:"#98002E",
					corEquipe:"#BC9B6A",
					titulos:"0 títulos nacionais de futebol americano reconhecidos pela NCAA.",
					nomeEstadio:" Alumni Stadium",
					maiorRival:" Notre Dame Fighting Irish",
					nomeDaRivalidade:"",
					logoEquipe:"https://cdn.freebiesupply.com/logos/large/2x/boston-college-eagles-1-logo-png-transparent.png"
				},
				{
					nomeEquipe:"Clemson Tigers",
					cidadeEquipe:"Clemson, Carolina do Sul",
					estadioEquipe:"https://clemsontigers.com/amt-media/202170",
					textoEquipe:"Os Clemson Tigers são uma potência do college football, com um ataque explosivo e uma rica tradição de sucesso.",
					fundoEquipe:"#F56600",
					corEquipe:"#522D80",
					titulos:"3 títulos nacionais (1981, 2016, 2018).",
					nomeEstadio:'Memorial Stadium (também conhecido como "Death Valley")',
					maiorRival:"South Carolina Gamecocks",
					nomeDaRivalidade:"Palmetto Bowl.",
					logoEquipe:"https://1000logos.net/wp-content/uploads/2022/11/Clemson-Tigers-Logo.png"
				},
				{
					nomeEquipe:"Duke Blue Devils",
					cidadeEquipe:"Durham, Carolina do Norte",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/goduke.com/images/2022/10/18/20221015_football_unc003_zq6mV.jpg",
					textoEquipe:"Os Duke Blue Devils são conhecidos por sua excelência acadêmica e competem arduamente na ACC.",
					fundoEquipe:"#003087",
					corEquipe:"#FFFFFF",
					titulos:"0 títulos nacionais de futebol americano reconhecidos pela NCAA.",
					nomeEstadio:"Wallace Wade Stadium",
					maiorRival:"North Carolina Tar Heels",
					nomeDaRivalidade:"The Battle for the Victory Bell",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/1212px-Duke_Blue_Devils_logo.svg.png"
				},
				{
					nomeEquipe:"Florida State Seminoles",
					cidadeEquipe:"Tallahassee, Flórida",
					estadioEquipe:"https://www.fsunews.com/gcdn/presto/2019/09/01/PFSU/f0428ea4-b339-4755-9503-b634ec3a7970-FSV_FoootballvsBoiseState_MM_083119-8.jpg",
					textoEquipe:"Os Florida State Seminoles têm uma história rica no college football e são conhecidos por sua tradição e paixão por jogos emocionantes.",
					fundoEquipe:"#782F40",
					corEquipe:"#CEB888",
					titulos:"3 títulos nacionais (1993, 1999, 2013).",
					nomeEstadio:"Doak Campbell Stadium",
					maiorRival:"Miami Hurricanes",
					nomeDaRivalidade:"The Sunshine Showdown",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Florida_State_Seminoles_old_logo.svg/1113px-Florida_State_Seminoles_old_logo.svg.png"
				},
				{
					nomeEquipe:"Georgia Tech Yellow Jackets",
					cidadeEquipe:"Atlanta, Geórgia",
					estadioEquipe:"https://cloudfront-us-east-1.images.arcpublishing.com/ajc/NP72D45G5J3WTTLBZ5NIEDVRKU.jpg",
					textoEquipe:"Os Georgia Tech Yellow Jackets são reconhecidos por sua inovação e têm uma história marcante no college football.",
					fundoEquipe:"#B3A369",
					corEquipe:"#003057",
					titulos:"4 títulos nacionais (1917, 1928, 1952, 1990).",
					nomeEstadio:" Bobby Dodd Stadium",
					maiorRival:"Georgia Bulldogs",
					nomeDaRivalidade:"Clean, Old-Fashioned Hate",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg/1280px-Georgia_Tech_Yellow_Jackets_logo.svg.png"
				},
				{
					nomeEquipe:"Louisville Cardinals",
					cidadeEquipe:"Louisville, Kentucky",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/gocards.com/images/2020/8/24/Cardinal_Stadium_web.jpg",
					textoEquipe:"Os Louisville Cardinals são uma equipe competitiva da ACC, conhecida por seus talentos individuais e estilo de jogo agressivo.",
					fundoEquipe:"#AD0000",
					corEquipe:"#000000",
					titulos:"0 títulos nacionais de futebol americano reconhecidos pela NCAA.",
					nomeEstadio:"Cardinal Stadium",
					maiorRival:"Kentucky Wildcats",
					nomeDaRivalidade:"Governor's Cup",
					logoEquipe:"https://cdn.freebiesupply.com/logos/large/2x/louisville-cardinals-logo-png-transparent.png"
				},
				{
					nomeEquipe:"Miami Hurricanes",
					cidadeEquipe:"Miami Gardens, Flórida",
					estadioEquipe:"https://miamihurricanes.com/imgproxy/Gn87GYxT1fmtphCD4ms4gamJ8TlWwpGhGyPzd0qi_ho/fit/2500/2500/ce/0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2h1cnJpY2FuZXNwb3J0cy1jb20vMjAyMC8wNi8wZDFlOGQ3Ny1ocnMtZW5kLXpvbmUuanBn.jpg",
					textoEquipe:" Os Miami Hurricanes são conhecidos por seu estilo de jogo ousado e agressivo, além de suas rivalidades intensas.",
					fundoEquipe:"#F47321",
					corEquipe:"#005030",
					titulos:"5 títulos nacionais (1983, 1987, 1989, 1991, 2001).",
					nomeEstadio:"Hard Rock Stadium",
					maiorRival:"Florida State Seminoles",
					nomeDaRivalidade:"The Sunshine Showdown",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/1280px-Miami_Hurricanes_logo.svg.png"
				},
				{
					nomeEquipe:"North Carolina Tar Heels",
					cidadeEquipe:"Chapel Hill, Carolina do Norte",
					estadioEquipe:"https://www.unc.edu/wp-content/uploads/2018/01/019517_fb_notre_dame_north_carolina109.jpg",
					textoEquipe:"Os North Carolina Tar Heels são uma equipe em ascensão na ACC, com uma base de fãs leal e promissora.",
					fundoEquipe:"#7BAFD4",
					corEquipe:"#FFFFFF",
					titulos:"0 títulos nacionais de futebol americano reconhecidos pela NCAA.",
					nomeEstadio:"Kenan Memorial Stadium",
					maiorRival:"Duke Blue Devils",
					nomeDaRivalidade:"The Battle for the Victory Bell",
					logoEquipe:"https://seeklogo.com/images/U/unc-tar-heels-logo-B3ABC215A0-seeklogo.com.png"
				},
				{
					nomeEquipe:"NC State Wolfpack",
					cidadeEquipe:"Raleigh, Carolina do Norte",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/gopack.com/images/2019/1/16/CarterFinley2_2018.jpg",
					textoEquipe:"Os NC State Wolfpack competem com paixão e têm uma tradição de excelência em várias modalidades esportivas.",
					fundoEquipe:"#CC0000",
					corEquipe:"#000000",
					titulos:"2 títulos nacionais (1917, 1979).",
					nomeEstadio:"Carter-Finley Stadium",
					maiorRival:"North Carolina Tar Heels",
					nomeDaRivalidade:"The Battle for the Victory Bell",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/North_Carolina_State_University_Athletic_logo.svg/1720px-North_Carolina_State_University_Athletic_logo.svg.png"
				},
				{
					nomeEquipe:"Pittsburgh Panthers",
					cidadeEquipe:"Pittsburgh, Pensilvânia",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/pittsburghpanthers.com/images/2017/6/21/B2P_6157.jpg",
					textoEquipe:"Os Pittsburgh Panthers são uma equipe respeitada na ACC, com uma história de sucesso em várias modalidades esportivas.",
					fundoEquipe:"#003594",
					corEquipe:"#FFB81C",
					titulos:"9 títulos nacionais (1915, 1916, 1918, 1929, 1931, 1934, 1936, 1937, 1976).",
					nomeEstadio:"Heinz Field",
					maiorRival:"West Virginia Mountaineers",
					nomeDaRivalidade:"(Antiga rivalidade, menos frequente agora)",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pitt_Panthers_wordmark.svg/2560px-Pitt_Panthers_wordmark.svg.png"
				},
				{
					nomeEquipe:"Syracuse Orange",
					cidadeEquipe:"Syracuse, Nova York",
					estadioEquipe:"https://footballstadiumdigest.com/wp-content/uploads/2016/06/Carrier-Dome.jpg",
					textoEquipe:"Os Syracuse Orange são conhecidos por suas equipes de basquete de elite, mas também têm uma presença sólida no college football.",
					fundoEquipe:"#F76900",
					corEquipe:"#000E54",
					titulos:"1 título nacional (1959).",
					nomeEstadio:"Carrier Dome",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Syracuse_Orange_logo.svg/758px-Syracuse_Orange_logo.svg.png"
				},
				{
					nomeEquipe:"Virginia Cavaliers",
					cidadeEquipe:"Charlottesville, Virgínia",
					estadioEquipe:"https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgzNjU1Nzg4MTg5ODUzMzYw/scott-stadium.jpg",
					textoEquipe:"Os Virginia Cavaliers são uma equipe competitiva da ACC, com uma base de fãs leal e orgulhosa de sua universidade.",
					fundoEquipe:"#232D4B",
					corEquipe:"#F84C1E",
					titulos:"0 títulos nacionais de futebol americano reconhecidos pela NCAA.",
					nomeEstadio:"Scott Stadium",
					maiorRival:" Virginia Tech Hokies",
					nomeDaRivalidade:"Commonwealth Cup",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Virginia_Cavaliers_sabre.svg/2560px-Virginia_Cavaliers_sabre.svg.png"
				},
				{
					nomeEquipe:"Virginia Tech Hokies",
					cidadeEquipe:"Blacksburg, Virgínia",
					estadioEquipe:"https://www.omnibron.com/cdn/shop/products/Lane_18FB_nd_DK_1861E_1_023ea72b-6529-4b8b-944b-895115cd72bc_1024x1024@2x.png?v=1692130227",
					textoEquipe:"Os Virginia Tech Hokies são famosos por sua tradição de defesa robusta e estão sempre entre as principais equipes da ACC.",
					fundoEquipe:"#630031",
					corEquipe:"#CF4420",
					titulos:"0 títulos nacionais de futebol americano reconhecidos pela NCAA.",
					nomeEstadio:"Lane Stadium",
					maiorRival:"Virginia Cavaliers",
					nomeDaRivalidade:"Commonwealth Cup",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png"
				},
				{
					nomeEquipe:"Wake Forest Demon Deacons",
					cidadeEquipe:"Winston-Salem, Carolina do Norte",
					estadioEquipe:"https://i.pinimg.com/736x/dd/a4/b2/dda4b25c55db8d1bafec16ef0b7113e8--wake-forest-university-football-stadiums.jpg",
					textoEquipe:"Os Wake Forest Demon Deacons representam a Universidade de Wake Forest, localizada em Winston-Salem, Carolina do Norte. A equipe é conhecida por seu compromisso com a excelência acadêmica, bem como por sua determinação em campo. Embora tenham uma história de conquistas modestas em termos de títulos nacionais, os Demon Deacons são valorizados por sua dedicação e espírito de equipe",
					fundoEquipe:"#9E7E38",
					corEquipe:"#000000",
					titulos:"1 título nacional (1944).",
					nomeEstadio:"Truist Field",
					maiorRival:" North Carolina State Wolfpack",
					nomeDaRivalidade:"The Textile Bowl",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wake_Forest_University_Athletic_logo.svg/2560px-Wake_Forest_University_Athletic_logo.svg.png"
				},
				{
					nomeEquipe:"California Golden Bears (Cal)",
					cidadeEquipe:" Berkeley, Califórnia",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/calberk.sidearmsports.com/images/2022/8/22/stadiumenhancementspic.jpg",
					textoEquipe:"Os California Golden Bears, ou simplesmente Cal, representam a Universidade da Califórnia, localizada em Berkeley, Califórnia. Este time tem uma rica história no esporte, com cinco títulos nacionais em sua bagagem. Conhecidos por sua paixão e tradição, os Golden Bears são uma parte integral da cultura esportiva da Califórnia e têm uma base de fãs leal.",
					fundoEquipe:"#003262",
					corEquipe:"#FDB515",
					titulos:"5 títulos nacionais (1920, 1921, 1922, 1923, 1937).",
					nomeEstadio:"California Memorial Stadium",
					maiorRival:"Stanford Cardinal",
					nomeDaRivalidade:"The Big Game",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/archive/8/8b/20170601035437%21California_Golden_Bears_logo.svg/120px-California_Golden_Bears_logo.svg.png"
				},
				{
					nomeEquipe:"Stanford Cardinal",
					cidadeEquipe:" Stanford, Califórnia",
					estadioEquipe:"https://www.collegegridirons.com/wp-content/uploads/2017/05/stanford17953.jpg",
					textoEquipe:"Os Stanford Cardinal representam a Universidade de Stanford, localizada em Stanford, Califórnia. Eles são uma força a ser reconhecida, tanto no campo quanto na sala de aula, enfatizando a excelência acadêmica e esportiva. Com dois títulos nacionais em sua história, os Cardinal são conhecidos por seu comprometimento com a inovação e a excelência em todos os aspectos.",
					fundoEquipe:"#8C1515",
					corEquipe:"#4D4F53",
					titulos:"2 títulos nacionais (1926, 1940)",
					nomeEstadio:"Stanford Stadium",
					maiorRival:"California Golden Bears",
					nomeDaRivalidade:"The Big Game",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png"
				},
				{
					nomeEquipe:"SMU Mustangs (Southern Methodist University)",
					cidadeEquipe:"Dallas, Texas",
					estadioEquipe:"https://www.smu.edu/-/media/Images/News/CampusBuildings/4508648.jpg",
					textoEquipe:"Os SMU Mustangs representam a Universidade Metodista do Sul (Southern Methodist University), localizada em Dallas, Texas. Esta equipe possui uma história notável, com três títulos nacionais, e é lembrada por sua época de ouro nos anos 1980. Os Mustangs são valorizados por sua tradição e dedicação ao futebol americano universitário, tendo conquistado um lugar especial na história do esporte.",
					fundoEquipe:"#0033A0",
					corEquipe:"#C8102E",
					titulos:"3 títulos nacionais (1935, 1981, 1982).",
					nomeEstadio:" Gerald J. Ford Stadium",
					maiorRival:"TCU Horned Frogs",
					nomeDaRivalidade:"Iron Skillet",
					logoEquipe:"https://upload.wikimedia.org/wikipedia/commons/3/33/SMU_Mustang_logo.svg"
				}
			]
	},
	//SEC
	{
		nomeConferencia:"Southeastern Conference",
		logoConferencia:"https://upload.wikimedia.org/wikipedia/commons/9/90/SEC_new_logo.png?20101229161133",
		introdConferencia:[
			"A Southeastern Conference (SEC) é uma das conferências mais proeminentes e competitivas no mundo do college football. Fundada em 1932, a SEC é composta por 14 universidades do sudeste dos Estados Unidos, e sua presença na cena do futebol americano universitário é verdadeiramente impactante. Com uma rica história e uma tradição de sucesso, a SEC é frequentemente considerada uma das principais forças impulsionadoras por trás do esporte universitário no país",
			"A SEC é conhecida por sua abordagem implacável à competição, onde algumas das maiores rivalidades do college football se desenrolam ano após ano. Times icônicos como Alabama Crimson Tide, LSU Tigers, Georgia Bulldogs e Florida Gators fazem parte dessa conferência, e eles frequentemente competem em jogos que capturam a atenção de fãs de todo o país.",
			"Uma das características distintivas da SEC é sua dedicação ao recrutamento de talentos de elite. As universidades da conferência investem pesadamente em programas de futebol americano, atraindo alguns dos melhores jogadores do ensino médio para suas equipes. Como resultado, a SEC continua a produzir atletas de alto nível que se destacam na NFL e contribuem para o sucesso do esporte profissional.",
			"Além disso, a SEC desempenha um papel de destaque na corrida pelo Campeonato Nacional de Futebol Americano Universitário (College Football Playoff), com suas equipes frequentemente figurando entre as favoritas para conquistar o título. A intensa competição e o alto nível de habilidade da conferência a tornam uma das mais assistidas e respeitadas em todo o college football.",
			"Em resumo, a Southeastern Conference é muito mais do que uma conferência esportiva; é um símbolo da paixão, tradição e excelência que permeiam o college football. Seus jogos emocionantes, rivalidades acirradas e a busca constante pela supremacia nacional fazem da SEC uma parte essencial da história e da cultura do esporte universitário nos Estados Unidos.",
		],
		equipesConferencia: [
				{
					nomeEquipe:"Alabama Crimson Tide",
					cidadeEquipe:"Tuscaloosa, Alabama",
					estadioEquipe:"https://www.collegegridirons.com/wp-content/uploads/2017/05/bryant14951.png",
					textoEquipe:"Os Alabama Crimson Tide são uma das equipes mais lendárias e bem-sucedidas da história do college football. Com inúmeras conquistas de campeonatos nacionais, eles são liderados pelo lendário treinador Nick Saban e representam a tradição e a excelência do futebol americano universitário.",
					fundoEquipe:"#C8102E",
					corEquipe:"#BC9B6A",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Arkansas Razorbacks ",
					cidadeEquipe:"Fayetteville, Arkansas",
					estadioEquipe:'https://www.razorbackstadium.com/wp-content/uploads/2018/12/Razorback-Stadium.gif',
					textoEquipe:'Os Arkansas Razorbacks são conhecidos por sua paixão e comprometimento com o esporte. A equipe é uma parte fundamental da cultura esportiva do estado e é conhecida por suas impressionantes defesas e um lema de "Never Yield".',
					fundoEquipe:"#9D2235",
					corEquipe:"#000000",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Auburn Tigers ",
					cidadeEquipe:"Auburn, Alabama",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/auburntigers.com/images/2021/6/4/12_alabama_20171125_362_2.jpg",
					textoEquipe:"Os Auburn Tigers são conhecidos por seu espírito de luta e paixão. Eles competem ferozmente na SEC e são famosos por seu grito de guerra, 'War Eagle,' que ressoa pelo Jordan-Hare Stadium.",
					fundoEquipe:"#03244D",
					corEquipe:"#FFC627",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Florida Gators",
					cidadeEquipe:"Gainesville, Flórida",
					estadioEquipe:"https://www.collegegridirons.com/wp-content/uploads/2017/05/ben2012952.jpg",
					textoEquipe:" Os Florida Gators são sinônimo de velocidade e agressividade. A equipe representa a Universidade da Flórida e é conhecida por sua forte presença nas competições de futebol americano universitário.",
					fundoEquipe:"#0021A5",
					corEquipe:"#FFCD00",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Georgia Bulldogs",
					cidadeEquipe:"Athens, Georgia",
					estadioEquipe:"https://thegeorgiabulldogclub.com/wp-content/uploads/2019/10/page-wchf-m-1466x823.jpg",
					textoEquipe:" Os Georgia Bulldogs são um dos times mais respeitados da SEC. Com uma defesa sólida e tradição vitoriosa, eles representam a paixão e o orgulho da Universidade da Geórgia.",
					fundoEquipe:"#BA0C2F",
					corEquipe:"#000000",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Kentucky Wildcats",
					cidadeEquipe:"Lexington, Kentucky",
					estadioEquipe:"https://cdn.vox-cdn.com/thumbor/GPAecbzGwdKE6nbSvpzLlxOM6pY=/0x156:3000x1844/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/54905203/usa_today_8794865.0.jpg",
					textoEquipe:" Os Kentucky Wildcats são conhecidos por sua perseverança. A equipe da Universidade de Kentucky compete com determinação, buscando sempre superar desafios.",
					fundoEquipe:"#0033A0",
					corEquipe:"#666666",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"LSU Tigers",
					cidadeEquipe:"Baton Rouge, Louisiana",
					estadioEquipe:"https://lsusports.net/imgproxy/8awPpHRcW_c7NmmzSSbGnzTKGB30G_3WoaBfhGWGAKk/fit/3840/1720/ce/0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2xzdXNwb3J0cy1jb20vMjAyMS8wNi9kZGU2Mzc0OS10aWdlcl9zdGFkaXVtXzIxNzEtZTE2MjM1MTQwNjUxNDQuanBn.png",
					textoEquipe:"Os LSU Tigers são famosos por sua intensidade e paixão. Representando a Louisiana State University, eles são conhecidos por sua defesa formidável e ataques explosivos.",
					fundoEquipe:"#461D7C",
					corEquipe:"#FDD023",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Mississippi State Bulldogs",
					cidadeEquipe:"Starkville, Mississippi",
					estadioEquipe:"https://www.collegegridirons.com/wp-content/uploads/2017/05/davis17951.jpg",
					textoEquipe:" Os Mississippi State Bulldogs personificam a força e a coragem. Eles competem ferozmente e são uma parte fundamental da cena esportiva do Mississippi.",
					fundoEquipe:"#660000",
					corEquipe:"#FFFFFF",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Missouri Tigers",
					cidadeEquipe:"Columbia, Missouri",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/mutigers.com/images/2015/7/9/20141025_mu_benwalton_vanderbilt_homecomiong_125.JPG",
					textoEquipe:" Os Missouri Tigers são conhecidos por sua agilidade e espírito competitivo. Eles representam a Universidade do Missouri e competem com determinação na SEC.",
					fundoEquipe:"#000000",
					corEquipe:"#FFD100",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Ole Miss Rebels",
					cidadeEquipe:"Oxford, Mississippi",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/olemisssports.com/images/2019/1/22/00030_091716_Alabama_FB_03721.jpg",
					textoEquipe:"Os Ole Miss Rebels são sinônimo de tradição e paixão. Com uma história rica e vibrante, eles representam a Universidade do Mississippi com orgulho.",
					fundoEquipe:"#CE1126",
					corEquipe:"#00205B ",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"South Carolina Gamecocks",
					cidadeEquipe:"Columbia, Carolina do Sul",
					estadioEquipe:"https://www.uscstadium.com/wp-content/uploads/2019/05/Williams-Brice-Stadium.jpg",
					textoEquipe:"Os South Carolina Gamecocks são conhecidos por sua resiliência. Eles representam a Universidade da Carolina do Sul e competem com coragem e determinação.",
					fundoEquipe:"#73000A",
					corEquipe:"#000000",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Tennessee Volunteers",
					cidadeEquipe:"Knoxville, Tennessee",
					estadioEquipe:"https://i0.wp.com/news.utk.edu/wp-content/uploads/sites/3/2022/10/Neyland-Lights.jpg.jpeg?fit=1500%2C1000&ssl=1",
					textoEquipe:" Os Tennessee Volunteers são uma parte essencial da cultura esportiva do Tennessee. Eles são conhecidos por sua paixão e lealdade inabalável à Universidade do Tennessee",
					fundoEquipe:"#FF8200",
					corEquipe:"#481D48",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Texas A&M Aggies",
					cidadeEquipe:"College Station, Texas",
					estadioEquipe:"https://www.tamustadium.com/wp-content/uploads/2019/06/kyle-field-stadium-1024x576.jpg",
					textoEquipe:" Os Texas A&M Aggies são conhecidos por seu espírito de equipe e tradição. Representando a Texas A&M University, eles competem com orgulho na SEC.",
					fundoEquipe:"#500000",
					corEquipe:"#FFFFFF",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Vanderbilt Commodores",
					cidadeEquipe:"Nashville, Tennessee",
					estadioEquipe:"https://sportscredential.com/wp-content/uploads/2021/05/VanderbiltStadium5-1-scaled.jpg",
					textoEquipe:" Os Vanderbilt Commodores são uma parte única da SEC. Eles representam a Universidade Vanderbilt e são conhecidos por sua busca pela excelência acadêmica, além do esporte.",
					fundoEquipe:"#866D4B",
					corEquipe:"#000000",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Oklahoma Sooners",
					cidadeEquipe:"Norman, Oklahoma",
					estadioEquipe:"https://www.collegegridirons.com/wp-content/uploads/2017/03/okmem23952.jpg",
					textoEquipe:" Os Oklahoma Sooners são uma das equipes mais icônicas do college football. Representando a Universidade de Oklahoma, eles são conhecidos por sua história de sucesso e uma das mais apaixonadas bases de fãs do país. Os Sooners têm uma rica tradição de conquistas, incluindo títulos nacionais e prêmios individuais",
					fundoEquipe:"#841617",
					corEquipe:"#FDB913",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				},
				{
					nomeEquipe:"Texas Longhorns",
					cidadeEquipe:"Austin,Texas",
					estadioEquipe:"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/texassports_com/images/2022/9/10/stadium3.jpg",
					textoEquipe:"Os Texas Longhorns são uma lenda no mundo do college football. Representando a Universidade do Texas, eles são famosos por seu lema 'Hook 'em Horns' e sua rivalidade com Oklahoma, conhecida como o Red River Rivalry. Os Longhorns têm uma tradição rica e uma base de fãs fervorosa",
					fundoEquipe:"#BF5700",
					corEquipe:"#333F48",
					titulos:"",
					nomeEstadio:"",
					maiorRival:"",
					nomeDaRivalidade:"",
					logoEquipe:""
				}
			]
	}
]