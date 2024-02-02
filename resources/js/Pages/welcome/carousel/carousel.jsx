import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

import ana from "../../../../assets/images/ana.jpg";
import isabele from "../../../../assets/images/isabele.jpg";
import flavia from "../../../../assets/images/flavia.jpg";
import gabriela from "../../../../assets/images/gabriela.jpg";
import leo from "../../../../assets/images/leo.png";
import nathalia from "../../../../assets/images/nathalia.jpg";
import veronica from "../../../../assets/images/veronica.jpg";
const TextCarousel = () => {
    const items = [
        {
            id: 1,
            name: "Ana Simões",
            comment:
                "Fiquei muito satisfeita com o trabalho de mentoria da Lannara. Ela foi extremamente atenciosa do início ao fim e demonstrou bastante conhecimento e segurança no que faz. Seu cuidade e atenção aos detalhes foram essenciais e me ajudaram muito no meu processo. Indico a assessoria dela a todos que estão pensando ou se preparando para estudar fora.",
            image: ana,
        },
        {
            id: 2,
            name: "Isabele celestino",
            comment:
                "Fiz uma sessão de mentoria Lannara, e como foi incrível! Sua forma de passar instruções de forma objetiva e prática sobre como se programar para estudar no exterior, me motivou ainda mais para me preparar para essa oportunidade. Suas experiências de morar fora e passar poor processos de seleção internacional me fizeram ter uma outra visão acerca da mobilidade entre países e estudar em instituições estrangeiras. Além disso, a conversa foi levada de forma muito descrontraída e leve, de movo que não vi o tempo passar. Lannara, você é uma mulher incrível, obrigada por tanto!",
            image: isabele,
        },
        {
            id: 3,
            name: "Nathalia Duarte",
            comment:
                "A mentoria com a Easy Tramitt com certeza foi um diferencial na minha application. Apesar de ter as qualificações necessárias, nem sempre sabemos no expressar e escolher os pontos principais de uma carta de motivação. isso pode parecer desesperador quando tudo isso afeta e se relaciona com o nosso sonho. Com a mentoria, eu me senti muito mais confiante na prdução da minha carta e também muito feliz com o resultado! Conseguir a aprovação na UToronto com bolsa ELAP foi um sonho e eu sei que é só o começo de uma jornada que teve a mentoria como pilar fundamental.",
            image: nathalia,
        },
        {
            id: 4,
            name: "Gabriela",
            comment:
                "As sessões de mentoria com a Lannara foram fundamentais para me dar um norte e decidir meu intercâmbio. Ela é muito prestativa e me ajudou muito com seu olhar e dicas que somente alguém com experiência em estudar no exterior poderia saber. Aumentou minha motivação e trouxe mais segurança, recomendo a todos que querem tirar o sonho do intercâmbio do papel!",
            image: gabriela,
        },
        {
            id: 5,
            name: "Verônica do Santos",
            comment:
                "Tive sessões de mentoria com a Lannara. Todas as dicas foram fundamentais para me organizar iniciar as aplicações. Ela tem experiência recente com aprovações de mestrado em diversas universidades no exterior, isso faz muita diferença. Entender todo o processo e perceber que esse sonho - De um mestrado em uma universidade conceituada no exterior - é sim, possível. Recomendo",
            image: veronica,
        },
        {
            id: 6,
            name: "Leo Oliveira",
            comment:
                "Tudo começou na candidatura do Stipendium Hungaricum (SH), estava inseguro em relação a minha carta de motivação, então recorri à Easy Tramitt. Achei o serviço incrível, me Norte ou em como escrever uma carta de forma convincente para a banca examinadora. Posso dizer que a correção me motivou não apenas para o SH, Como também para a bolsa ELAP. A qual felizmente conquistei graças à Easy Tramitt. A Lannara possui uma bagagem muito extensa em aprovação de bolsas de intercâmbio, tornando ela a pessoa ideal para te ajudar a conquistar a sonhada bolsa de estudo internacional. Recomendarei ela a todos aqueles que, assim como eu, possuem a ambição de estudar no exterior.",
            image: leo,
        },
        {
            id: 7,
            name: "Flávia Elias Batista",
            comment:
                "Com a ajuda da Easy Tramitt eu passei não apenas 1, mas 2 vezes na Stipendium Hungaricum. Ao buscar os serviços eu não tinha passado nem na primeira etapa de seleção e estava bem desanimada sem saber por onde começar e precisava de orientação principalmente para a carta de motivação e entrevista. A Easy Tramitt me ajudou a entender meus objetivos, me planejar e identificar meus pontos fortes. Traçamos um plano juntas e a Lannara me orientou também para a entrevista na universidade. Fui aprovada no ano passado e não pude ir por questões pessoais. Esse ano prestei novamente com as orientações da Easy Tramitt e embarco em agosto para minha nova jornada! Lannara possui muita experiência na aplicação, consegue identificar os pontos fortes e pontos de melhoria e com isso faz a orientação de uma maneira muito assertiva. Não tenho dúvidas que sem a Easy Tramitt eu não teria alcançado esse sonho!",
            image: flavia,
        },
    ];

    return (
        <div class="sm:py-24 py-64">
            <Carousel
                autoPlay
                showArrows
                infiniteLoop
                emulateTouch
                showThumbs={false}
            >
                {items.map((item) => (
                    <div key={item.id} className="slide">
                        <div class="flex justify-center items-center">
                            <div class="w-36 h-36">
                                <img
                                    class="object-cover w-full h-full rounded-full"
                                    src={item.image}
                                />
                            </div>
                        </div>
                        <div class='flex flex-col items-center px-2 justify-center'>
                            <p class="max-w-5xl my-4 italic">{item.comment}</p>
                            <h1 class='font-bold'>{item.name}</h1>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TextCarousel;
