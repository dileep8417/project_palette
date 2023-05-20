import { useEffect } from "react";
import PaletteCard from "./PaletteCard";
import { useSelector } from 'react-redux';

const PaletteCards = () => {
    const palettes = useSelector(state => state.colorPalette.palettes);

    useEffect(function() {
        localStorage.setItem('palettes', JSON.stringify(palettes));
    }, [palettes]);

    return (
        <div className="palette_cards">
            {
                palettes.map(palette => {
                    return <PaletteCard key={palette.id} id={palette.id} title={palette.projectTitle} colors={palette.colors} />
                })
            }
        </div>
    );
}

export default PaletteCards;