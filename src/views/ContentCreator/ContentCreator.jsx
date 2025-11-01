import { YouTubeCard } from "../../components/YouTubeCard";
import { Block } from "../../components/Block";
import youtube from "../../consts/youtube.json";

export const ContentCreator = () =>
    <Block>
        <h3>
            Creador de contenido
        </h3>
        <p>
            Como ve la comunidad tecnológica, los colegas y los estudiantes.
        </p>
        {youtube.map((item) => (
            <YouTubeCard key={item.name} item={item} />
        ))}
    </Block>

